import { Router } from 'express';

import line from './routes/lineRoute';
import vehicle from './routes/vehicleRoute';
import stop from './routes/stopRoute';

export default () => {
	const app = Router();

	//auth(app);
	line(app);
    vehicle(app);
    stop(app);
	
	return app
}