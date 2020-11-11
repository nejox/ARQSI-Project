import { NextFunction, Request, Response } from "express";

export default interface IStationController{
    createStation( req: Request, res: Response, next: NextFunction);
    updateStation( req: Request, res: Response, next: NextFunction);
    deleteStation( req: Request, res: Response, next: NextFunction);
    getStation( req: Request, res: Response, next: NextFunction);
    getStations( req: Request, res: Response, next: NextFunction);
}