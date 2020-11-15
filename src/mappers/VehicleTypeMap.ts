import { Document, Model } from "mongoose";
import { UniqueEntityID } from "../core/domain/UniqueEntityID";
import { Mapper } from "../core/infra/Mapper";
import { VehicleType } from "../domain/vehicleType";
import IVehicleTypeDTO from "../dto/IVehicleTypeDTO";
import { IVehicleTypePersistence } from "../persistence/IVehicleTypePersistence";

export default class VehicleTypeMap extends Mapper<VehicleType> {
    
    public static toDTO(vehicleType: VehicleType): IVehicleTypeDTO {
        return {
            vehicleTypeId: vehicleType.id.toString(),
            name: vehicleType.name,
            autonomy: vehicleType.autonomy,
            cost: vehicleType.cost,
            avgSpeed: vehicleType.avgSpeed,
            energySrc: vehicleType.energySrc,
            consumption: vehicleType.consumption,
            emissions: vehicleType.emissions
        } as IVehicleTypeDTO
    }

    public static toDomain(raw: any | Model<IVehicleTypePersistence & Document>): VehicleType {
        const vehicleOrError = VehicleType.create({
            name: raw.name,
            autonomy: raw.autonomy,
            cost: raw.cost,
            avgSpeed: raw.avgSpeed,
            energySrc: raw.energySrc,
            consumption: raw.consumption,
            emissions: raw.emissions
        }, new UniqueEntityID(raw.vehicleTypeId));

        vehicleOrError.isFailure ? console.log(vehicleOrError.error) : '';

        return vehicleOrError.isSuccess ? vehicleOrError.getValue() : null;
    }

    public static toPersistence(vehicleType: VehicleType): any {
        return {
            vehicleTypeId: vehicleType.id.toString(),
            name: vehicleType.name,
            autonomy: vehicleType.autonomy,
            cost: vehicleType.cost,
            avgSpeed: vehicleType.avgSpeed,
            energySrc: vehicleType.energySrc,
            consumption: vehicleType.consumption,
            emissions: vehicleType.emissions
        }
    }
}