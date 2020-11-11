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
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const typedi_1 = require("typedi");
const StationMap_1 = require("../mappers/StationMap");
let StationRepo = class StationRepo {
    constructor(stationSchema, logger) {
        this.stationSchema = stationSchema;
        this.logger = logger;
    }
    createBaseQuery() {
        return {
            where: {},
        };
    }
    async save(station) {
        throw new Error("Method not implemented.");
    }
    async readById(id) {
        const query = { _id: id.value };
        const stationRecord = await this.stationSchema.findById(id);
        if (stationRecord != null) {
            return StationMap_1.StationMap.toDomain(stationRecord);
        }
        return null;
    }
    async exists(t) {
        throw new Error("Method not implemented.");
    }
    async delete(s) {
        throw new Error("Method not implemented.");
    }
    async readAll() {
        throw new Error("Method not implemented.");
    }
};
StationRepo = __decorate([
    typedi_1.Service(),
    __param(0, typedi_1.Inject('stationSchema')),
    __param(1, typedi_1.Inject('logger')),
    __metadata("design:paramtypes", [mongoose_1.Model, Object])
], StationRepo);
exports.default = StationRepo;
//# sourceMappingURL=stationRepo.js.map