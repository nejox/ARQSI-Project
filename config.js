import dotenv from 'dotenv';

// Set the NODE_ENV to 'development' by default
process.env.NODE_ENV = process.env.NODE_ENV || 'development';

const envFound = dotenv.config();
if (!envFound) {
  // This error should crash whole process

  throw new Error("Couldn't find .env file");
}

export default {
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
    },
    line:{
      name: "LineController",
      path: "../controllers/lineController"
    },
    vehicleType:{
      name: "VehicleTypeController",
      path: "../controllers/vehicleTypeController"
    },
    route:{
      name: "RouteController",
      path: "../controllers/routeController"
    },
    lineRoute:{
      name: "LineRouteController",
      path: "../controllers/lineRouteController"
    },
    lineVehicleType:{
      name: "LineVehicleTypeController",
      path: "../controllers/lineVehicleTypeController"
    }
  },

  repos: {
    station: {
      name: "StationRepo",
      path: "../repos/stationRepo"
    },
    line:{
      name: "LineRepo",
      path: "../repos/lineRepo"
    },
    vehicleType:{
      name: "VehicleTypeRepo",
      path: "../repos/vehicleTypeRepo"
    },
    route:{
      name: "RouteRepo",
      path: "../repos/RouteRepo"
    }
  },

  services: {
    station: {
      name: "StationService",
      path: "../services/stationService"
    },
    line:{
      name: "LineService",
      path: "../services/lineService"
    },
    vehicleType:{
      name: "VehicleTypeService",
      path: "../services/vehicleTypeService"
    },
    route:{
      name: "RouteService",
      path: "../services/routeService"
    },
    lineRoute:{
      name: "LineRouteService",
      path: "../services/lineRouteService"
    },
    lineVehicleType:{
      name: "LineVehicleTypeService",
      path: "../services/lineVehicleTypeService"
    }
  },
};
