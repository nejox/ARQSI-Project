import expressLoader from './express';
import dependencyInjectorLoader from './dependencyInjector';
import mongooseLoader from './mongoose';
import Logger from './logger';
import config from "../../config";
import { mongo } from 'mongoose';
import routeRoute from '../api/routes/routeRoute';

export default async ({ expressApp }) => {
  const mongoConnection = await mongooseLoader();
  Logger.info('DB loaded and connected!');


  const stationSchema = {
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

  const routeSchema = {
    name: 'routeSchema',
    schema: '../persistence/schemas/routeSchema',
  }
  const routeController = {
    name: config.controller.route.name,
    path: config.controller.route.path,
  }
  const routeRepo = {
    name: config.repos.route.name,
    path: config.repos.route.path
  }
  const routeService = {
    name: config.services.route.name,
    path: config.services.route.path
  }


  const lineRouteController = {
    name: config.controller.lineRoute.name,
    path: config.controller.lineRoute.path
  }
  const lineRouteService = {
    name: config.services.lineRoute.name,
    path: config.services.lineRoute.path
  }

  const lineVehicleTypeController = {
    name: config.controller.lineVehicleType.name,
    path: config.controller.lineVehicleType.path
  }
  const lineVehicleTypeService = {
    name: config.services.lineVehicleType.name,
    path: config.services.lineVehicleType.path
  }

  await dependencyInjectorLoader({
    mongoConnection,
    schemas: [
      stationSchema,
      lineSchema,
      vehicleTypeSchema,
      routeSchema,
    ],
    controllers: [
      stationController,
      lineController,
      vehicleTypeController,
      routeController,
      lineRouteController,
      lineVehicleTypeController
    ],
    repos: [
      stationRepo,
      lineRepo,
      vehicleTypeRepo,
      routeRepo,
    ],
    services: [
      stationService,
      lineService,
      vehicleTypeService,
      routeService,
      lineRouteService,
      lineVehicleTypeService
    ]
  });
  Logger.info('✌️ Schemas, Controllers, Repositories, Services, etc. loaded');


  await expressLoader({ app: expressApp });
  Logger.info('Express loaded');
}