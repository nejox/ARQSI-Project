"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const lineRoute_1 = __importDefault(require("./routes/lineRoute"));
const vehicleRoute_1 = __importDefault(require("./routes/vehicleRoute"));
const stopRoute_1 = __importDefault(require("./routes/stopRoute"));
exports.default = () => {
    const app = express_1.Router();
    //auth(app);
    lineRoute_1.default(app);
    vehicleRoute_1.default(app);
    stopRoute_1.default(app);
    return app;
};
//# sourceMappingURL=index.js.map