import { Document, Model } from "mongoose";
import { Inject, Service } from "typedi";
import { VehicleType } from "../domain/VehicleType";
import { VehicleTypeId } from "../domain/vehicleTypeId";
import { IVehicleTypePersistence } from "../persistence/IVehicleTypePersistence";
import { IVehicleTypeRepo } from "./Interfaces/IVehicleTypeRepo";


@Service()
export default class VehicleTypeRepo implements IVehicleTypeRepo {

    private models: any;

    constructor(
        @Inject('vehicleTypeSchema') private vehicleTypeSchema: Model<IVehicleTypePersistence & Document>,
        @Inject('logger') private logger
    ) { }

    private createBaseQuery(): any {
        return {
            where: {},
        }
    }

    public async save(vehicleTypeId: VehicleType): Promise<VehicleType> {
        throw new Error("Method not implemented.");
    }
    public async readById(vehicleTypeId: string | VehicleTypeId): Promise<VehicleType> {
        throw new Error("Method not implemented.");
    }
    public async readAll(): Promise<VehicleType[]> {
        throw new Error("Method not implemented.");
    }
    public async delete(vehicleTypeId: string | VehicleTypeId): Promise<VehicleType> {
        throw new Error("Method not implemented.");
    }
    public async exists(t: VehicleType): Promise<boolean> {
        throw new Error("Method not implemented.");
    }

}