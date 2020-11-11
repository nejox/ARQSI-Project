"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("./express"));
const dependencyInjector_1 = __importDefault(require("./dependencyInjector"));
const mongoose_1 = __importDefault(require("./mongoose"));
const logger_1 = __importDefault(require("./logger"));
const config_1 = __importDefault(require("../../config"));
exports.default = async ({ expressApp }) => {
    const mongoConnection = await mongoose_1.default();
    logger_1.default.info('DB loaded and connected!');
    const stationSchema = {
        // compare with the approach followed in repos and services
        name: 'stationSchema',
        schema: '../persistence/schemas/stationSchema',
    };
    /*const roleSchema = {
      // compare with the approach followed in repos and services
      name: 'roleSchema',
      schema: '../persistence/schemas/roleSchema',
    };*/
    const stationController = {
        name: config_1.default.controller.station.name,
        path: config_1.default.controller.station.path
    };
    const stationRepo = {
        name: config_1.default.repos.station.name,
        path: config_1.default.repos.station.path
    };
    /*
      const userRepo = {
        name: config.repos.user.name,
        path: config.repos.user.path
      }
    */
    const stationService = {
        name: config_1.default.services.station.name,
        path: config_1.default.services.station.path
    };
    await dependencyInjector_1.default({
        mongoConnection,
        schemas: [
            stationSchema,
        ],
        controllers: [
            stationController
        ],
        repos: [
            stationRepo,
        ],
        services: [
            stationService
        ]
    });
    logger_1.default.info('✌️ Schemas, Controllers, Repositories, Services, etc. loaded');
    await express_1.default({ app: expressApp });
    logger_1.default.info('Express loaded');
};
//# sourceMappingURL=index.js.map