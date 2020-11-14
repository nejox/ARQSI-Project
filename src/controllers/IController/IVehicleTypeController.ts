import { Request, Response, NextFunction } from "express";

export default interface IVehicleTypeController{
    createVehicleType( req: Request, res: Response, next: NextFunction);
    updateVehicleType( req: Request, res: Response, next: NextFunction);
    deleteVehicleType( req: Request, res: Response, next: NextFunction);
    getVehicleType( req: Request, res: Response, next: NextFunction);
    getVehicleTypes( req: Request, res: Response, next: NextFunction);
}