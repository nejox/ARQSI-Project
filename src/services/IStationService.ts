import { Result } from "../core/logic/Result";
import  IStationDTO  from "../dto/IStationDTO";

export default interface IStationService {
    createStation(stationDTO: IStationDTO): Promise<Result<IStationDTO>>;
    updateStation(stationDTO: IStationDTO): Promise<Result<IStationDTO>>;
    deleteStation(stationDTO: IStationDTO): Promise<Result<IStationDTO>>;
    getStation(stationDTO: IStationDTO): Promise<Result<IStationDTO>>;
    getStations(stationDTO: IStationDTO): Promise<Result<IStationDTO>>;
}
