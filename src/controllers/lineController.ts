import { Response, Request, NextFunction } from 'express';

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

exports.post = function (req:Request, res: Response) {
    console.log("POST");

    return res.json(req).status(201);
}

exports.delete = function (req:Request, res: Response) {
    console.log("DELETE");

    return res.json(req).status(200);
}
