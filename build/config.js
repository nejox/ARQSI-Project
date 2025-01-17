"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
// Set the NODE_ENV to 'development' by default
process.env.NODE_ENV = process.env.NODE_ENV || 'development';
const envFound = dotenv_1.default.config();
if (!envFound) {
    // This error should crash whole process
    throw new Error("Couldn't find .env file");
}
exports.default = {
    /**
     * Your favorite port
     */
    port: parseInt(process.env.PORT, 10),
    /**
     * That long string from mlab
     */
    databaseURL: process.env.MONGODB_URI,
    /**
     * Your secret sauce
     */
    jwtSecret: process.env.JWT_SECRET,
    /**
     * Used by winston logger
     */
    logs: {
        level: process.env.LOG_LEVEL || 'silly',
    },
    /**
     * API configs
     */
    api: {
        prefix: '/api',
    },
    controller: {
        station: {
            name: "StationController",
            path: "../controllers/stationController"
        }
    },
    repos: {
        station: {
            name: "StationRepo",
            path: "../repos/stationRepo"
        } /*,
        user: {
          name: "UserRepo",
          path: "../repos/userRepo"
        }*/
    },
    services: {
        station: {
            name: "StationService",
            path: "../services/stationService"
        }
    },
};
//# sourceMappingURL=config.js.map