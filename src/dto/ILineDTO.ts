import { LineRoute } from "../domain/lineRoute";
import { LineVehicleType } from "../domain/lineVehicleType";
import { VehicleType } from "../domain/vehicleType";

export default interface ILineDTO {
    lineId: string;
    code: string;
    name: string;
    description: string;
    color: string;
    lineRoutes?: LineRoute[];
    allowedVehicles?: LineVehicleType[];
    deniedVehicles?: LineVehicleType[];
}