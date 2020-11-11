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
    }
  },

  repos: {
    station: {
      name: "StationRepo",
      path: "../repos/stationRepo"
    }
  },

  services: {
    station: {
      name: "StationService",
      path: "../services/stationService"
    }
  },
};
