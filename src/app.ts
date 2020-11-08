import 'reflect-metadata'; // We need this in order to use @Decorators

import config from '../config';

import express from 'express';

import Logger from './loaders/logger';

async function startServer() {
  const app = express();

  await require('./loaders').default({ expressApp: app });

  app.listen(config.port, error => {
    if (error) {
      Logger.error(error);
      process.exit(1);
      return;
    }
    Logger.info("Server listening on port: ${config.port}");
  });
}

startServer();
