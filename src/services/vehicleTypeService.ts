import { Inject, Service } from "typedi";
import config from "../../config";
import { Result } from "../core/logic/Result";
import { VehicleType } from "../domain/VehicleType";
import IVehicleTypeDTO from "../dto/IVehicleTypeDTO";
import IVehicleTypeDTOcollection from "../dto/IVehicleTypeDTOcollection";
import VehicleTypeMap from "../mappers/VehicleTypeMap";
import { IVehicleTypeRepo } from "../repos/Interfaces/IVehicleTypeRepo";
import IVehicleTypeService from "./IVehicleTypeService";


@Service()
export default class VehicleTypeService implements IVehicleTypeService {

    constructor(
        @Inject(config.repos.vehicleType.name) private vehicleTypeRepo: IVehicleTypeRepo
    ) { }

    public async createVehicleType(vehicleTypeDTO: IVehicleTypeDTO): Promise<Result<IVehicleTypeDTO>> {
        try {
            const vehicleTypeOrError = await VehicleType.create(vehicleTypeDTO);

            if (vehicleTypeOrError.isFailure) {
                return Result.fail<IVehicleTypeDTO>(vehicleTypeOrError.errorValue());
            }

            const vehicleTypeResult = vehicleTypeOrError.getValue();

            await this.vehicleTypeRepo.save(vehicleTypeResult);

            const vehicleTypeDTOResult = VehicleTypeMap.toDTO(vehicleTypeResult) as IVehicleTypeDTO;
            return Result.ok<IVehicleTypeDTO>(vehicleTypeDTOResult);

        } catch (error) {
            throw error;
        }
    }
    public async updateVehicleType(vehicleTypeDTO: IVehicleTypeDTO): Promise<Result<IVehicleTypeDTO>> {
        try {
            const vehicleType = await this.vehicleTypeRepo.readById(vehicleTypeDTO.vehicleTypeId);

            if (vehicleType === null) {
                return Result.fail<IVehicleTypeDTO>("VehicleType not found");
            } else {
                vehicleType.name = vehicleTypeDTO.name;
                vehicleType.autonomy = vehicleTypeDTO.autonomy;
                vehicleType.avgSpeed = vehicleTypeDTO.avgSpeed;
                vehicleType.consumption = vehicleTypeDTO.consumption;
                vehicleType.cost = vehicleTypeDTO.cost;
                vehicleType.energySrc = vehicleTypeDTO.energySrc;
                vehicleType.emissions = vehicleTypeDTO.emissions;
                await this.vehicleTypeRepo.save(vehicleType);

                const vehicleTypeDTOResult = VehicleTypeMap.toDTO(vehicleType) as IVehicleTypeDTO;
                return Result.ok<IVehicleTypeDTO>(vehicleTypeDTOResult);
            }

        } catch (error) {
            throw error;
        }
    }
    public async deleteVehicleType(vehicleTypeId: string) {
        try {

            await this.vehicleTypeRepo.delete(vehicleTypeId);

        } catch (error) {
            throw error;
        }
    }
    public async getVehicleType(vehicleTypeId: string): Promise<Result<IVehicleTypeDTO>> {
        try {

            const vehicleType = await this.vehicleTypeRepo.readById(vehicleTypeId);
            if (vehicleType === null) {
                return Result.fail<IVehicleTypeDTO>("VehicleType not found");
            } else {
                const vehicleTypeDTORes = VehicleTypeMap.toDTO(vehicleType) as IVehicleTypeDTO;
                return Result.ok<IVehicleTypeDTO>(vehicleTypeDTORes);
            }

        } catch (error) {
            throw error;
        }
    }
    public async getVehicleTypes(vehicleTypeDTO: IVehicleTypeDTO): Promise<Result<IVehicleTypeDTOcollection>> {
        try {
            const vehicleTypesList = await this.vehicleTypeRepo.readAll();
            return Result.ok<IVehicleTypeDTOcollection>({vehicleTypes : vehicleTypesList.map( vehicleType => VehicleTypeMap.toDTO(vehicleType) as IVehicleTypeDTO)});

        } catch (error) {
            throw error;
        }
    }

}