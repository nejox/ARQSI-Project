import { Router } from 'express';

import line from './routes/lineRoute';
import vehicle from './routes/vehicleTypeRoute';
import station from './routes/stationRoute';
import route from './routes/routeRoute';
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('../../ARQSI Project-Swagger20.json');

export default () => {
	const app = Router();

	app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

	//auth(app);
	line(app);
    vehicle(app);
	station(app);
	route(app);
	
	return app
}