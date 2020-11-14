
import mongoose from "mongoose";
import { IStationPersistence } from "../IStationPersistence";

const Station = new mongoose.Schema(
    {
        stationId: {
            type: String,
            unique: true,
            required: true
        },
        name: {
            type: String,
            required: [true, "Please enter Stop name"],
            index: true,
        },

        shortName: {
            type: String,
            required: [true, "Please enter the short name"],
            index: true,
            unique: true
        },

        lat: String,
        long: String,
        isDepot: Boolean,
        isReliefPoint: Boolean,
        capacity: Number,

    }, { timestamps: true },
);

export default mongoose.model<IStationPersistence & mongoose.Document>('Station',Station);

