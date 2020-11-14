import mongoose from "mongoose";
import { IVehicleTypePersistence } from "../IVehicleTypePersistence";

const VehicleType = new mongoose.Schema({
    vehicleTypeId: {
        type: String,
        unique: true,
        required: true
    },
    name: {
        type: String,
        required: [true, "Please enter Vehicle Type name"],
    },
    autonomy: {
        type: Number,
    },
    cost: {
        type: Number,
    },
    avgSpeed: {
        type: Number,
    },
    energySrc: {
        type: Number,
    },
    consumption: {
        type: Number,
    },
    emissions: {
        type: Number,
    }
});

export default mongoose.model<IVehicleTypePersistence & mongoose.Document>('VehicleType', VehicleType);