import { Result } from "../core/logic/Result";
import IVehicleTypeDTOcollection from "../dto/IVehicleTypeDTOcollection";

export default interface ILineVehicleTypeService {
    getLineAllowedVehicleTypes(lineId: string): Promise<Result<IVehicleTypeDTOcollection>>;
    getLineDeniedVehicleTypes(lineId: string): Promise<Result<IVehicleTypeDTOcollection>>;
}