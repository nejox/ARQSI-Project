import { IStop } from "../../models/IStop";
import mongoose from "mongoose";
import { boolean, number } from "joi";

const Stop = new mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Please enter Stop name"],
            index: true,
        },

        shortName: {
            type: String,
            required: [true, "Please enter the short name"],
            index: true,
        },

        lat: String,
        long: String,
        isDepot: Boolean,
        isReliefPoint: Boolean,
        capacity: Number,

    }, { timestamps: true },
);

export default mongoose.model<IStop & mongoose.Document>('Stop',Stop);

