"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const typedi_1 = __importDefault(require("typedi"));
const config_1 = __importDefault(require("../../../config"));
//import middlewares from '../middlewares';
const route = express_1.Router();
exports.default = (app) => {
    app.use('/stations', route);
    const cntrllr = typedi_1.default.get(config_1.default.controller.station.name);
    //get all
    route.get("", (req, res, next) => cntrllr.getStations(req, res, next));
    //get single
    route.get("/:stationId", (req, res, next) => cntrllr.getStation(req, res, next));
    //update
    route.put("/:stationId", (req, res, next) => cntrllr.updateStation(req, res, next));
    //post
    route.post("", (req, res, next) => cntrllr.createStation(req, res, next));
    //delete
    route.delete("/:stationId", (req, res, next) => cntrllr.deleteStation(req, res, next));
};
//# sourceMappingURL=stationRoute.js.map