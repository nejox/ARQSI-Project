import { string } from "joi";
import mongoose from "mongoose";
import { ILinePersistence } from "../ILinePersistence";

const Line = new mongoose.Schema(
    {
        lineId: {
            type: String,
            unique: true,
            required: true
        },
        code : {
            type: String,
            required: true,
            unique: true
        },
        name: {
            type: String,
            required: [true, "Please enter Line name"],
        },
        description: {
            type: String
        },
        color: {
            type: String,
            required: [true, "Please enter Line color"]
        },
        lineRoutes: [{
            routeId: String,
            orientation: String,
        }],
        allowedVehicles : [{
            vehicleTypeId : String
        }],
        deniedVehicles : [{
            vehicleTypeId : String
        }]
    }, {timestamps: true},
);

export default mongoose.model<ILinePersistence & mongoose.Document>('Line',Line);