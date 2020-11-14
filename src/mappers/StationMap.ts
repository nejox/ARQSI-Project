import { Mapper } from "../core/infra/Mapper";

import { Station } from "../domain/station";
import IStationDTO from "../dto/IStationDTO";

import { UniqueEntityID } from "../core/domain/UniqueEntityID";
import { IStationPersistence } from "../persistence/IStationPersistence";
import { Document, Model } from "mongoose";

export class StationMap extends Mapper<Station> {

    public static toDTO(station: Station): IStationDTO {
        return {
            stationId: station.id.toString(),
            shortName: station.shortName,
            name: station.name,
            lat: station.lat,
            long: station.long,
            isDepot: station.isDepot,
            isReliefPoint: station.isReliefPoint,
            capacity: station.capacity
        } as IStationDTO;
    }

    public static toDomain(raw: any | Model<IStationPersistence & Document>): Station {
        const stationOrError = Station.create({
                name: raw.name,
                shortName: raw.shortName,
                lat: raw.lat,
                long: raw.long,
                isDepot: raw.isDepot,
                isReliefPoint: raw.isReliefPoint,
                capacity: raw.capacity,
        }, new UniqueEntityID(raw.stationId));

        stationOrError.isFailure ? console.log(stationOrError.error) : '';

        return stationOrError.isSuccess ? stationOrError.getValue() : null;

    }

    public static toPersistence(station: Station): any {
        const a = {
            stationId: station.id.toString(),
            shortName: station.shortName,
            name: station.name,
            lat: station.lat,
            long: station.long,
            isDepot: station.isDepot,
            isReliefPoint: station.isReliefPoint,
            capacity: station.capacity
        }
        return a;
    }

}