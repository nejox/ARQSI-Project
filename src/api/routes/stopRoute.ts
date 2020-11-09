import { Router, Request, Response } from 'express';
//import middlewares from '../middlewares';
var stop_controller = require('../../controllers/stopController');

const router = Router();

export default (app: Router) => {
  app.use('/stops', router);

  //get all
  router.get("",stop_controller.getAll);

  //get single
  router.get("/:stopId",stop_controller.get);

  //update
  router.put("/:stopId",stop_controller.put);
  
  //post
  router.post("",stop_controller.post);

  //delete
  router.delete("/:stopId",stop_controller.delete);
}
