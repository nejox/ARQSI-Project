import { Router, Request, Response } from 'express';
import Container from 'typedi';
import config from '../../../config';
import IVehicleTypeController from '../../controllers/IController/IVehicleTypeController';

const router = Router();

export default (app: Router) => {
  app.use("/vehicleTypes", router);
  //app.use('/lines/:lineId/vehicles', router);

  const cntrllr = Container.get(config.controller.vehicleType.name) as IVehicleTypeController;

  //get all
  router.get("", (req, res, next) => cntrllr.getVehicleTypes(req,res,next));

  //get single
  router.get("/:vehicleTypeId", (req, res, next) => cntrllr.getVehicleType(req,res,next));

  //update
  router.put("/:vehicleTypeId", (req, res, next) => cntrllr.updateVehicleType(req,res,next));

  //post
  router.post("", (req, res, next) => cntrllr.createVehicleType(req,res,next));

  //delete
  router.delete("/:vehicleTypeId", (req, res, next) => cntrllr.deleteVehicleType(req,res,next));

}
