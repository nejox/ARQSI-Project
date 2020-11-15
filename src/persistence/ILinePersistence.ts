import { LineRoute } from "../domain/lineRoute";
import { LineVehicleType } from "../domain/lineVehicleType";
import { VehicleTypeId } from "../domain/vehicleTypeId";

export interface ILinePersistence {
    lineId: string;
    code: string;
    name: string;
    description: string;
    color: string;
    lineRoutes?: LineRoute[];
    allowedVehicles?: LineVehicleType[];
    deniedVehicles?: LineVehicleType[];
}