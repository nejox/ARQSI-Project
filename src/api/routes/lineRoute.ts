import { Router, Request, Response } from 'express';
import { Container } from 'typedi';
import config from '../../../config';
import ILineController from '../../controllers/IController/ILineController';
import ILineRouteController from '../../controllers/IController/ILineRouteController';
import ILineVehicleTypeController from '../../controllers/IController/ILineVehicleTypeController';


const router = Router({mergeParams: true});

export default (app: Router) => {
    app.use("/lines", router);

    const cntrllr = Container.get(config.controller.line.name) as ILineController;
    const cntrllr_routes = Container.get(config.controller.lineRoute.name) as ILineRouteController;
    const cntrllr_vehicleTypes = Container.get(config.controller.lineVehicleType.name) as ILineVehicleTypeController;

    //get all
    router.get("", (req, res, next) => cntrllr.getLines(req,res,next));

    //get single
    router.get("/:lineId", (req, res, next) => cntrllr.getLine(req,res,next));

    //update
    router.put("/:lineId", (req, res, next) => cntrllr.updateLine(req,res,next));

    //post
    router.post("", (req, res, next) => cntrllr.createLine(req,res,next));

    //delete
    router.delete("/:lineId", (req, res, next) => cntrllr.deleteLine(req,res,next));

    //get all routes
    router.get("/:lineId/routes", (req, res, next) => cntrllr_routes.getLineRoutes(req,res,next));

    //get all allowed vehicles
    router.get("/:lineId/allowedVehicleTypes", (req, res, next) => cntrllr_vehicleTypes.getLineAllowedVehicleTypes(req,res,next));
    //get all denied vehicles
    router.get("/:lineId/deniedVehicleTypes", (req, res, next) => cntrllr_vehicleTypes.getLineDeniedVehicleTypes(req,res,next));

    // //create line route
    // router.get("/:lineId/routes", (req, res, next) => cntrllr_routes.createLineRoute(req,res,next));

    // //update line route
    // router.get("/:lineId/routes", (req, res, next) => cntrllr_routes.updateLineRoute(req,res,next));

    // //delete line route
    // router.get("/:lineId/routes", (req, res, next) => cntrllr_routes.deleteLineRoute(req,res,next));
}