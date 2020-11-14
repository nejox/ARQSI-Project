import { Result } from "../core/logic/Result";
import IVehicleTypeDTO from "../dto/IVehicleTypeDTO";
import IVehicleTypeDTOcollection from "../dto/IVehicleTypeDTOcollection";


export default interface IVehicleTypeService {
    createVehicleType(vehicleTypeDTO: IVehicleTypeDTO): Promise<Result<IVehicleTypeDTO>>;
    updateVehicleType(vehicleTypeDTO: IVehicleTypeDTO): Promise<Result<IVehicleTypeDTO>>;
    deleteVehicleType(vehicleTypeId: string);
    getVehicleType(vehicleTypeId: string): Promise<Result<IVehicleTypeDTO>>;
    getVehicleTypes(vehicleTypeDTO: IVehicleTypeDTO): Promise<Result<IVehicleTypeDTOcollection>>;
}