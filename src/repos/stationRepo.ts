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
        throw new Error("Method not implemented.");
    }
    public async readById(id: StationId): Promise<Station> {
        const query = { _id: id.value };
        const stationRecord = await this.stationSchema.findById(id);

        if (stationRecord != null) {
            return StationMap.toDomain(stationRecord);
        }
        return null;
    }
    public async exists(t: Station): Promise<boolean> {
        throw new Error("Method not implemented.");
    }
    public async delete(s: String) {
        throw new Error("Method not implemented.");
    }
    public async readAll(): Promise<Station[]> {
        throw new Error("Method not implemented.");
    }
}