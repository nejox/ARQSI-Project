import mongoose from "mongoose";
import { ILinePersistence } from "../ILinePersistence";

const Line = new mongoose.Schema(
    {
        lineId: {
            type: String,
            unique: true,
            required: true
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
    }, {timestamps: true},
);

export default mongoose.model<ILinePersistence & mongoose.Document>('Line',Line);