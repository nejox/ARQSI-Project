import { promises } from "dns";
import { Document, Model } from "mongoose";
import { Inject, Service } from "typedi";
import { Station } from "../domain/station";
import { StationId } from "../domain/stationId";
import { StationMap } from "../mappers/StationMap";
import { IStationPersistence } from "../persistence/IStationPersistence";
import { IStationRepo } from "./Interfaces/IStationRepo";

@Service()
export default class StationRepo implements IStationRepo {

    private models: any;

    constructor(
        @Inject('stationSchema') private stationSchema: Model<IStationPersistence & Document>,
        @Inject('logger') private logger
    ) { }

    private createBaseQuery(): any {
        return {
            where: {},
        }
    }

    public async save(station: Station): Promise<Station> {

        const query = { stationId: station.id.toString() };

        const stationDoc = await this.stationSchema.findOne(query);

        //const exists = await this.exists(station);

        try {
            if (stationDoc === null) {
                // no station found => create one 
                const rawStation: any = StationMap.toPersistence(station);

                const stationCreated = await this.stationSchema.create(rawStation);

                return StationMap.toDomain(stationCreated);
            } else {
                // update existing one
                stationDoc.isDepot = station.isDepot;
                stationDoc.isReliefPoint = station.isReliefPoint;
                stationDoc.capacity = station.capacity;
                await stationDoc.save();

                return station;
            }
        } catch (error) {
            throw error;
        }
    }

    public async readById(stationId: StationId | string): Promise<Station> {

        const idX = stationId instanceof StationId ? (<StationId>stationId).id.toString() : stationId;

        const query = { stationId: idX };

        const stationRecord = await this.stationSchema.findOne(query);

        if (stationRecord != null) {
            return StationMap.toDomain(stationRecord);
        }
        return null;
    }

    public async exists(station: Station | string): Promise<boolean> {

        const idX = station instanceof Station ? (<Station>station).id.toString() : station

        const query = { stationId: idX };
        const stationDocument = await this.stationSchema.findOne(query);

        return !!stationDocument === true;
    }

    public async delete(stationId: StationId | string): Promise<Station> {
        const idX = stationId instanceof StationId ? (<StationId>stationId).id.toString() : stationId;
        const query = { stationId: idX };
        try {
            const stationRecord = await this.stationSchema.findOneAndDelete(query);
            if (stationRecord != null) {
                return StationMap.toDomain(stationRecord);
            }

        } catch (error) {
            throw error;
        }
    }

    public async readAll(): Promise<Station[]> {

        let allDocuments = await this.stationSchema.find();
        return allDocuments.map((station) => StationMap.toDomain(station) as Station);

    }
}