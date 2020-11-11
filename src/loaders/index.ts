import expressLoader from './express';
import dependencyInjectorLoader from './dependencyInjector';
import mongooseLoader from './mongoose';
import Logger from './logger';
import config from "../../config";

export default async ({ expressApp }) => {
    const mongoConnection = await mongooseLoader();
    Logger.info('DB loaded and connected!');
    
    
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
        name: config.controller.station.name,
        path: config.controller.station.path
      }
    
      const stationRepo = {
        name: config.repos.station.name,
        path: config.repos.station.path
      }
    /*
      const userRepo = {
        name: config.repos.user.name,
        path: config.repos.user.path
      }
    */
      const stationService = {
        name: config.services.station.name,
        path: config.services.station.path
      }
    
      await dependencyInjectorLoader({
        mongoConnection,
        schemas: [
          stationSchema,
          //roleSchema
        ],
        controllers: [
          stationController
        ],
        repos: [
          stationRepo,
          //userRepo
        ],
        services: [
          stationService
        ]
      });
      Logger.info('✌️ Schemas, Controllers, Repositories, Services, etc. loaded');
      

    await expressLoader({ app: expressApp });
    Logger.info('Express loaded');
}