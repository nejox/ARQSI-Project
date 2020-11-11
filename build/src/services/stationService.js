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
const Result_1 = require("../core/logic/Result");
const station_1 = require("../domain/station");
const StationMap_1 = require("../mappers/StationMap");
let StationService = class StationService {
    constructor(stationRepo) {
        this.stationRepo = stationRepo;
    }
    async createStation(stationDTO) {
        try {
            const stationOrError = await station_1.Station.create(stationDTO);
            if (stationOrError.isFailure) {
                return Result_1.Result.fail(stationOrError.errorValue());
            }
            const stationResult = stationOrError.getValue();
            await this.stationRepo.save(stationResult);
            const stationDTOResult = StationMap_1.StationMap.toDTO(stationResult);
            return Result_1.Result.ok(stationDTOResult);
        }
        catch (error) {
            throw error;
        }
    }
    async updateStation(stationDTO) {
        throw new Error("Method not implemented.");
    }
    async deleteStation(stationDTO) {
        throw new Error("Method not implemented.");
    }
    async getStation(stationDTO) {
        throw new Error("Method not implemented.");
    }
    async getStations(stationDTO) {
        return null;
    }
};
StationService = __decorate([
    typedi_1.Service(),
    __param(0, typedi_1.Inject(config_1.default.repos.station.name)),
    __metadata("design:paramtypes", [Object])
], StationService);
exports.default = StationService;
//# sourceMappingURL=stationService.js.map