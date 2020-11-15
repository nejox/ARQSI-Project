import { Document, Model } from "mongoose";
import { Inject, Service } from "typedi";
import { VehicleType } from "../domain/vehicleType";
import { VehicleTypeId } from "../domain/vehicleTypeId";
import VehicleTypeMap from "../mappers/VehicleTypeMap";
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

    public async save(vehicleType: VehicleType): Promise<VehicleType> {
        
        const query = { vehicleTypeId: vehicleType.id.toString() };

        const vehicleTypeDoc = await this.vehicleTypeSchema.findOne(query);

        //const exists = await this.exists(vehicleType);

        try {
            if (vehicleTypeDoc === null) {
                // no vehicleType found => create one 
                const rawVehicleType: any = VehicleTypeMap.toPersistence(vehicleType);

                const vehicleTypeCreated = await this.vehicleTypeSchema.create(rawVehicleType);

                return VehicleTypeMap.toDomain(vehicleTypeCreated);
            } else {
                // update existing one
                vehicleTypeDoc.name = vehicleType.name;
                vehicleTypeDoc.autonomy = vehicleType.autonomy;
                vehicleTypeDoc.avgSpeed = vehicleType.avgSpeed;
                vehicleTypeDoc.consumption = vehicleType.consumption;
                vehicleTypeDoc.cost = vehicleType.cost;
                vehicleTypeDoc.energySrc = vehicleType.energySrc;
                vehicleTypeDoc.emissions = vehicleType.emissions;
                await vehicleTypeDoc.save();

                return vehicleType;
            }
        } catch (error) {
            throw error;
        }
    }
    public async readById(vehicleTypeId: string | VehicleTypeId): Promise<VehicleType> {
        const idX = vehicleTypeId instanceof VehicleTypeId ? (<VehicleTypeId>vehicleTypeId).id.toString() : vehicleTypeId;

        const query = { vehicleTypeId: idX };

        const vehicleTypeRecord = await this.vehicleTypeSchema.findOne(query);

        if (vehicleTypeRecord != null) {
            return VehicleTypeMap.toDomain(vehicleTypeRecord);
        }
        return null;
    }
    public async readAll(): Promise<VehicleType[]> {
        let allDocuments = await this.vehicleTypeSchema.find();
        return allDocuments.map((vehicleType) => VehicleTypeMap.toDomain(vehicleType) as VehicleType);

    }
    public async delete(vehicleTypeId: string | VehicleTypeId): Promise<VehicleType> {
        const idX = vehicleTypeId instanceof VehicleTypeId ? (<VehicleTypeId>vehicleTypeId).id.toString() : vehicleTypeId;
        const query = { vehicleTypeId: idX };
        try {
            const vehicleTypeRecord = await this.vehicleTypeSchema.findOneAndDelete(query);
            if (vehicleTypeRecord != null) {
                return VehicleTypeMap.toDomain(vehicleTypeRecord);
            }

        } catch (error) {
            throw error;
        }
    }
    public async exists(vehicleType: VehicleType): Promise<boolean> {

        const idX = vehicleType instanceof VehicleType ? (<VehicleType>vehicleType).id.toString() : vehicleType

        const query = { vehicleTypeId: idX };
        const vehicleTypeDocument = await this.vehicleTypeSchema.findOne(query);

        return !!vehicleTypeDocument === true;
    }

}