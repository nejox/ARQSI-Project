"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const typedi_1 = require("typedi");
const config_1 = __importDefault(require("../../config"));
const BaseController_1 = require("../core/infra/BaseController");
let StationController = class StationController extends BaseController_1.BaseController {
    constructor(stationServiceInstance) {
        super();
        this.stationServiceInstance = stationServiceInstance;
        console.log(stationServiceInstance);
        console.log(config_1.default.services.station);
    }
    executeImpl() {
        throw new Error('Method not implemented.');
    }
    async createStation(req, res, next) {
        try {
            console.log("shit alter");
            const stationOrError = await this.stationServiceInstance.createStation(req.body);
            if (stationOrError.isFailure) {
                return this.fail(stationOrError.error.toString()).send();
            }
            const stationDTO = stationOrError.getValue();
            return this.created(res); //.json(stationDTO);
        }
        catch (error) {
            return next(error);
        }
    }
    ;
    async updateStation(req, res, next) {
    }
    ;
    async deleteStation(req, res, next) {
    }
    ;
    async getStation(req, res, next) {
    }
    ;
    async getStations(req, res, next) {
        try {
            console.log("shit alter");
            const stationOrError = await this.stationServiceInstance.getStations(req.body);
            if (stationOrError.isFailure) {
                return this.fail(stationOrError.error.toString()).send();
            }
            const stationDTO = stationOrError.getValue();
            return this.ok(res, stationDTO).send();
        }
        catch (error) {
            return next(error);
        }
    }
    ;
};
StationController = __decorate([
    __param(0, typedi_1.Inject(config_1.default.services.station.name)),
    __metadata("design:paramtypes", [Object])
], StationController);
exports.default = StationController;
//# sourceMappingURL=stationController.js.map