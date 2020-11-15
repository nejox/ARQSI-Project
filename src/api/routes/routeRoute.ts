import { Router } from "express";
import Container from "typedi";
import config from "../../../config";
import IRouteController from "../../controllers/IController/IRouteController";

const router = Router({mergeParams: true});

export default (app: Router) => {
    app.use("/routes", router);

    const cntrllr = Container.get(config.controller.route.name) as IRouteController;

    //get all
    router.get("", (req, res, next) => cntrllr.getRoutes(req,res,next));

    //get single
    router.get("/:routeId", (req, res, next) => cntrllr.getRoute(req,res,next));

    //update
    router.put("/:routeId", (req, res, next) => cntrllr.updateRoute(req,res,next));

    //post
    router.post("", (req, res, next) => cntrllr.createRoute(req,res,next));

    //delete
    router.delete("/:routeId", (req, res, next) => cntrllr.deleteRoute(req,res,next));
}