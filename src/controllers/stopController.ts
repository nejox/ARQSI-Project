import { Response, Request, NextFunction } from 'express';
import Stop  from "../persistence/schemas/stopSchema";


exports.getAll = function (req:Request, res: Response) {
    console.log("GETALL");

    return res.json(req).status(200);
}

exports.get = function (req:Request, res: Response) {
    console.log("GET");

    return res.json(req).status(200);
}

exports.put = function (req:Request, res: Response) {
    console.log("PUT");

    return res.json(req).status(200);
}

exports.post = async function (req:Request, res: Response) {
    
    const stopExist = await Stop.findOne({name: req.body.name });
    if(stopExist) return res.status(400).send("Station already exists");

    const stop = new Stop({
        name: req.body.name,
        shortName: req.body.shortName,
        lat: req.body.lat,
        long: req.body.long,
    });

    try {
        res.status(201).send({Stop: stop._id });
    } catch (error) {
        res.status(400).send(error);
    }
}

exports.delete = function (req:Request, res: Response) {
    console.log("DELETE");

    return res.json(req).status(200);
}


