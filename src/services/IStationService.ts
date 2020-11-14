import { Result } from "../core/logic/Result";
import  IStationDTO  from "../dto/IStationDTO";
import IStationDTOcollection from "../dto/IStationDTOcolletion";

export default interface IStationService {
    createStation(stationDTO: IStationDTO): Promise<Result<IStationDTO>>;
    updateStation(stationDTO: IStationDTO): Promise<Result<IStationDTO>>;
    deleteStation(stationId: string);
    getStation(stationId: string): Promise<Result<IStationDTO>>;
    getStations(stationDTO: IStationDTO): Promise<Result<IStationDTOcollection>>;
}
