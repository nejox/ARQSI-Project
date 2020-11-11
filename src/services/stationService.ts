
import { Inject, Service } from "typedi";
import config from "../../config";
import { Result } from "../core/logic/Result";
import { Station } from "../domain/station";
import IStationDTO from "../dto/IStationDTO";
import { StationMap } from "../mappers/StationMap";
import { IStationRepo } from "../repos/Interfaces/IStationRepo";
import IStationService from "./IStationService";


@Service()
export default class StationService implements IStationService {
    constructor(
        @Inject(config.repos.station.name) private stationRepo: IStationRepo
    ) { }

    public async createStation(stationDTO: IStationDTO): Promise<Result<IStationDTO>> {
        try {
            const stationOrError = await Station.create(stationDTO);

            if (stationOrError.isFailure) {
                return Result.fail<IStationDTO>(stationOrError.errorValue());
            }

            const stationResult = stationOrError.getValue();

            await this.stationRepo.save(stationResult);

            const stationDTOResult = StationMap.toDTO(stationResult) as IStationDTO;
            return Result.ok<IStationDTO>(stationDTOResult);

        } catch (error) {
            throw error;
        }
    }
    public async updateStation(stationDTO: IStationDTO): Promise<Result<IStationDTO>> {
        throw new Error("Method not implemented.");
    }
    public async deleteStation(stationDTO: IStationDTO): Promise<Result<IStationDTO>> {
        throw new Error("Method not implemented.");
    }
    public async getStation(stationDTO: IStationDTO): Promise<Result<IStationDTO>> {
        throw new Error("Method not implemented.");
    }
    public async getStations(stationDTO: IStationDTO): Promise<Result<IStationDTO>> {
        return null;
    }


}