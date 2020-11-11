import { Mapper } from "../core/infra/Mapper";

import { Document, Model } from 'mongoose';
import { Station } from "../domain/station";
import { IStationDTO } from "../dto/IStationDTO";
import { Container } from "typedi";

import StationRepo from "../repos/stationRepo";
import { UniqueEntityID } from "../core/domain/UniqueEntityID";
import LoggerInstance from "../loaders/logger";

export class StationMap extends Mapper<Station> {

    public static toDTO(station: Station): IStationDTO {
        return {
            id: station.id.toString(),
            shortName: station.shortName,
            name: station.name,
            lat: station.lat,
            long: station.long,
            isDepot: station.isDepot,
            isReliefPoint: station.isReliefpoint,
            capacity: station.capacity
        } as IStationDTO;
    }

    public static async toDomain(raw: any): Promise<Station> {
        const repo = Container.get(StationRepo);
        
        const stationOrError = Station.create({
                name: raw.name,
                shortName: raw.shortName,
                lat: raw.lat,
                long: raw.long,
                isDepot: raw.isDepot,
                isReliefPoint: raw.isReliefPoint,
                capacity: raw.capacity,
        }, new UniqueEntityID(raw.base_station_id));

        stationOrError.isFailure ? console.log(stationOrError.error) : '';

        return stationOrError.isSuccess ? stationOrError.getValue() : null;

    }

    public static toPersistence(station: Station): any {
        const a = {
            id: station.id.toString(),
            shortName: station.shortName,
            name: station.name,
            lat: station.lat,
            long: station.long,
            isDepot: station.isDepot,
            isReliefPoint: station.isReliefpoint,
            capacity: station.capacity
        }
        return a;
    }

}