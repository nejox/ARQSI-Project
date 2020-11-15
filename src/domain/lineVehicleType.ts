import { Entity } from "../core/domain/Entity";
import VehicleTypeMap from "../mappers/VehicleTypeMap";
import { VehicleTypeId } from "./vehicleTypeId";

interface LineVehicleTypeProps {
    vehicleTypeId: VehicleTypeId;
}

export class LineVehicleType extends Entity<LineVehicleTypeProps> {
    get vehicleTypeId(): VehicleTypeId {
        return this.props.vehicleTypeId;
    }
}