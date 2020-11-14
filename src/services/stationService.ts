
import { Inject, Service } from "typedi";
import config from "../../config";
import { Result } from "../core/logic/Result";
import { Station } from "../domain/station";
import IStationDTO from "../dto/IStationDTO";
import IStationDTOcollection from "../dto/IStationDTOcolletion";
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
        try {
            const station = await this.stationRepo.readById(stationDTO.stationId);

            if (station === null) {
                return Result.fail<IStationDTO>("Station not found");
            } else {
                station.isDepot = stationDTO.isDepot;
                station.isReliefPoint = stationDTO.isReliefPoint;
                station.capacity = stationDTO.capacity;
                await this.stationRepo.save(station);

                const stationDTOResult = StationMap.toDTO(station) as IStationDTO;
                return Result.ok<IStationDTO>(stationDTOResult);
            }

        } catch (error) {
            throw error;
        }
    }

    public async deleteStation(stationId: string) {
        try {

            await this.stationRepo.delete(stationId);

        } catch (error) {
            throw error;
        }
    }

    public async getStation(stationId: string): Promise<Result<IStationDTO>> {

        try {

            const station = await this.stationRepo.readById(stationId);
            if (station === null) {
                return Result.fail<IStationDTO>("Station not found");
            } else {
                const stationDTORes = StationMap.toDTO(station) as IStationDTO;
                return Result.ok<IStationDTO>(stationDTORes);
            }

        } catch (error) {
            throw error;
        }
    }

    public async getStations(stationDTO: IStationDTO): Promise<Result<IStationDTOcollection>> {

        try {
            const stationsList = await this.stationRepo.readAll();
            return Result.ok<IStationDTOcollection>({stations : stationsList.map( station => StationMap.toDTO(station) as IStationDTO)});

        } catch (error) {
            throw error;
        }

    }


}