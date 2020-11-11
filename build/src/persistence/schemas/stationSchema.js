"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Station = new mongoose_1.default.Schema({
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
}, { timestamps: true });
exports.default = mongoose_1.default.model('Station', Station);
//# sourceMappingURL=stationSchema.js.map