import { Router, Request, Response } from 'express';
import Container from 'typedi';
import config from '../../../config';
import IStationController from '../../controllers/IController/IStationController';
//import middlewares from '../middlewares';


const route = Router();

export default (app: Router) => {
  app.use('/stations', route);

  const cntrllr = Container.get(config.controller.station.name) as IStationController;
  
  //get all
  route.get("", (req, res, next) => cntrllr.getStations(req,res,next));

  //get single
  route.get("/:stationId", (req,res,next) => cntrllr.getStation(req,res,next));

  //update
  route.put("/:stationId",(req,res,next) => cntrllr.updateStation(req,res,next));
  
  //post
  route.post("",(req,res,next) => cntrllr.createStation(req,res,next));

  //delete
  route.delete("/:stationId",(req,res,next) => cntrllr.deleteStation(req,res,next));
}
