"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StationMap = void 0;
const Mapper_1 = require("../core/infra/Mapper");
const station_1 = require("../domain/station");
const typedi_1 = require("typedi");
const stationRepo_1 = __importDefault(require("../repos/stationRepo"));
const UniqueEntityID_1 = require("../core/domain/UniqueEntityID");
class StationMap extends Mapper_1.Mapper {
    static toDTO(station) {
        return {
            id: station.id.toString(),
            shortName: station.shortName,
            name: station.name,
            lat: station.lat,
            long: station.long,
            isDepot: station.isDepot,
            isReliefPoint: station.isReliefpoint,
            capacity: station.capacity
        };
    }
    static async toDomain(raw) {
        const repo = typedi_1.Container.get(stationRepo_1.default);
        const stationOrError = station_1.Station.create({
            name: raw.name,
            shortName: raw.shortName,
            lat: raw.lat,
            long: raw.long,
            isDepot: raw.isDepot,
            isReliefPoint: raw.isReliefPoint,
            capacity: raw.capacity,
        }, new UniqueEntityID_1.UniqueEntityID(raw.base_station_id));
        stationOrError.isFailure ? console.log(stationOrError.error) : '';
        return stationOrError.isSuccess ? stationOrError.getValue() : null;
    }
    static toPersistence(station) {
        const a = {
            id: station.id.toString(),
            shortName: station.shortName,
            name: station.name,
            lat: station.lat,
            long: station.long,
            isDepot: station.isDepot,
            isReliefPoint: station.isReliefpoint,
            capacity: station.capacity
        };
        return a;
    }
}
exports.StationMap = StationMap;
//# sourceMappingURL=StationMap.js.map