import { IVehicle } from "./IVehicles";

import { ILinePath } from "./ILinePath";

export interface ILine {
    _id: string;
    name: string;
    color: string;
    linePaths : Array<ILinePath>;
    allowedVehicles:Array<IVehicle>;
    deniedVehicles:Array<IVehicle>;
    //allowedDrivers:Array<IVehicle>;
    //deniedDrivers:Array<IVehicle>;
}