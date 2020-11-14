import { Router, Request, Response } from 'express';
import { Container } from 'typedi';
import config from '../../../config';
import ILineController from '../../controllers/IController/ILineController';
//import middlewares from '../middlewares';
var line_controller = require('../../controllers/lineController');

const router = Router();

export default (app: Router) => {
    app.use("/lines", router);

    const cntrllr = Container.get(config.controller.line.name) as ILineController;

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
}