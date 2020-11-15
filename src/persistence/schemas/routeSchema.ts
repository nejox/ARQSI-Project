import mongoose, { mongo } from "mongoose";
import { type } from "os";
import { IRoutePersistence } from "../IRoutePersistence";


const Route = new mongoose.Schema({
    routeId: {
        type: String,
        unique:true,
        required: true
    },
    isEmpty: {
        type: Boolean
    },
    routeNodes: [{
        stationId : String,
        duration : Number,
        distance : Number,
    }]
}, { timestamps: true });

export default mongoose.model<IRoutePersistence & mongoose.Document>('Route', Route);