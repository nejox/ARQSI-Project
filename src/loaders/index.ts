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
  const stationController = {
    name: config.controller.station.name,
    path: config.controller.station.path
  }
  const stationRepo = {
    name: config.repos.station.name,
    path: config.repos.station.path
  }
  const stationService = {
    name: config.services.station.name,
    path: config.services.station.path
  }

  const lineSchema = {
    name: 'lineSchema',
    schema: '../persistence/schemas/lineSchema',
  }
  const lineController = {
    name: config.controller.line.name,
    path: config.controller.line.path
  }
  const lineRepo = {
    name: config.repos.line.name,
    path: config.repos.line.path
  }
  const lineService = {
    name: config.services.line.name,
    path: config.services.line.path
  }

  const vehicleTypeSchema = {
    name: 'vehicleTypeSchema',
    schema: '../persistence/schemas/vehicleTypeSchema',
  }
  const vehicleTypeController = {
    name: config.controller.vehicleType.name,
    path: config.controller.vehicleType.path
  }
  const vehicleTypeRepo = {
    name: config.repos.vehicleType.name,
    path: config.repos.vehicleType.path
  }
  const vehicleTypeService = {
    name: config.services.vehicleType.name,
    path: config.services.vehicleType.path
  }
  await dependencyInjectorLoader({
    mongoConnection,
    schemas: [
      stationSchema,
      lineSchema,
      vehicleTypeSchema
    ],
    controllers: [
      stationController,
      lineController,
      vehicleTypeController
    ],
    repos: [
      stationRepo,
      lineRepo,
      vehicleTypeRepo
    ],
    services: [
      stationService,
      lineService,
      vehicleTypeService
    ]
  });
  Logger.info('✌️ Schemas, Controllers, Repositories, Services, etc. loaded');


  await expressLoader({ app: expressApp });
  Logger.info('Express loaded');
}