import { Router, Request, Response } from 'express';
//import middlewares from '../middlewares';
var vehicle_controller = require('../../controllers/vehicleController');

const router = Router();

export default (app: Router) => {
  app.use('/vehicles', router);

  //get all
  router.get("", vehicle_controller.getAll);

  //get single
  router.get("/:vehicleId", vehicle_controller.get);

  //update
  router.put("/:vehicleId", vehicle_controller.put);

  //post
  router.post("", vehicle_controller.post);

  //delete
  router.delete("/:vehicleId", vehicle_controller.delete);

}
