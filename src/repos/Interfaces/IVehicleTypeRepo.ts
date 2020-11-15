import { Repo } from "../../core/infra/Repo";
import { VehicleType } from "../../domain/vehicleType";
import { VehicleTypeId } from "../../domain/vehicleTypeId";


export interface IVehicleTypeRepo extends Repo<VehicleType> {
    //save(vehicleType: VehicleType): Promise<VehicleType>;
    readById(vehicleTypeId : VehicleTypeId | string): Promise<VehicleType>;
    readAll(): Promise<VehicleType[]>;
    delete(vehicleTypeId: VehicleTypeId | string): Promise<VehicleType>;
}