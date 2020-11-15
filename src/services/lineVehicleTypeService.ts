import { Inject, Service } from "typedi";
import config from "../../config";
import { Result } from "../core/logic/Result";
import { VehicleTypeId } from "../domain/vehicleTypeId";
import IRouteDTO from "../dto/IRouteDTO";
import IRouteDTOcollection from "../dto/IRouteDTOcollection";
import IVehicleTypeDTO from "../dto/IVehicleTypeDTO";
import IVehicleTypeDTOcollection from "../dto/IVehicleTypeDTOcollection";
import { RouteMap } from "../mappers/RouteMap";
import VehicleTypeMap from "../mappers/VehicleTypeMap";
import { ILineRepo } from "../repos/Interfaces/ILineRepo";
import { IVehicleTypeRepo } from "../repos/Interfaces/IVehicleTypeRepo";
import ILineVehicleTypeService from "./ILineVehicleTypeService";

@Service()
export default class LineVehicleTypeService implements ILineVehicleTypeService {
    constructor(
        @Inject(config.repos.line.name) private lineRepo: ILineRepo,
        @Inject(config.repos.vehicleType.name) private vehicleTypeRepo: IVehicleTypeRepo
    ) { }

    public async getLineAllowedVehicleTypes(lineId: string): Promise<Result<IVehicleTypeDTOcollection>> {
        const line = await this.lineRepo.readById(lineId);
        if (line === null) {
            return Result.fail<IVehicleTypeDTOcollection>("Line not found");
        } else {
            let result = Array<IVehicleTypeDTO>();
            for await (const allowedVehicleTypes of line.allowedVehicles) {
                const vehicleTypeObj = await this.vehicleTypeRepo.readById(allowedVehicleTypes.vehicleTypeId);
                result.push(VehicleTypeMap.toDTO(vehicleTypeObj) as IVehicleTypeDTO);
            }
            return Result.ok<IVehicleTypeDTOcollection>({ vehicleTypes: result });
        }
    }

    public async getLineDeniedVehicleTypes(lineId: string): Promise<Result<IVehicleTypeDTOcollection>> {
        const line = await this.lineRepo.readById(lineId);
        if (line === null) {
            return Result.fail<IVehicleTypeDTOcollection>("Line not found");
        } else {
            let result = Array<IVehicleTypeDTO>();
            for await (const deniedVehicleTypes of line.deniedVehicles) {
                const vehicleTypeObj = await this.vehicleTypeRepo.readById(deniedVehicleTypes.vehicleTypeId);
                result.push(VehicleTypeMap.toDTO(vehicleTypeObj) as IVehicleTypeDTO);
            }
            return Result.ok<IVehicleTypeDTOcollection>({ vehicleTypes: result });
        }
    }
}