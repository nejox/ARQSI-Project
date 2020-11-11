import { Router } from 'express';

import line from './routes/lineRoute';
import vehicle from './routes/vehicleRoute';
import station from './routes/stationRoute';

export default () => {
	const app = Router();

	//auth(app);
	//line(app);
    //vehicle(app);
    station(app);
	
	return app
}