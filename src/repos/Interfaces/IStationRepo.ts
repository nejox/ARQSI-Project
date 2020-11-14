import { Repo } from "../../core/infra/Repo";
import { Station } from "../../domain/station";
import { StationId } from "../../domain/stationId";

export interface IStationRepo extends Repo<Station> {
    save(station: Station): Promise<Station>;
    readById(id : StationId | string): Promise<Station>;
    readAll(): Promise<Station[]>;
    delete(stationId: StationId | string): Promise<Station>;
}