import { Inject, Service } from "typedi";
import config from "../../config";
import { Result } from "../core/logic/Result";
import IVehicleTypeDTO from "../dto/IVehicleTypeDTO";
import IVehicleTypeDTOcollection from "../dto/IVehicleTypeDTOcollection";
import { IVehicleTypeRepo } from "../repos/Interfaces/IVehicleTypeRepo";
import IVehicleTypeService from "./IVehicleTypeService";


@Service()
export default class VehicleTypeService implements IVehicleTypeService {

    constructor(
        @Inject(config.repos.vehicleType.name) private vehicleTypeRepo: IVehicleTypeRepo
    ) { }

    public async createVehicleType(vehicleTypeDTO: IVehicleTypeDTO): Promise<Result<IVehicleTypeDTO>> {
        throw new Error("Method not implemented.");
    }
    public async updateVehicleType(vehicleTypeDTO: IVehicleTypeDTO): Promise<Result<IVehicleTypeDTO>> {
        throw new Error("Method not implemented.");
    }
    public async deleteVehicleType(vehicleTypeId: string) {
        throw new Error("Method not implemented.");
    }
    public async getVehicleType(vehicleTypeId: string): Promise<Result<IVehicleTypeDTO>> {
        throw new Error("Method not implemented.");
    }
    public async getVehicleTypes(vehicleTypeDTO: IVehicleTypeDTO): Promise<Result<IVehicleTypeDTOcollection>> {
        throw new Error("Method not implemented.");
    }

}