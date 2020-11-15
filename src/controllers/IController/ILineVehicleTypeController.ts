import { Request, Response, NextFunction } from "express";

export default interface ILineVehicleTypeController{
    // createVehicleType( req: Request, res: Response, next: NextFunction);
    // updateVehicleType( req: Request, res: Response, next: NextFunction);
    // deleteVehicleType( req: Request, res: Response, next: NextFunction);
    // getVehicleType( req: Request, res: Response, next: NextFunction);
    getLineAllowedVehicleTypes( req: Request, res: Response, next: NextFunction);
    getLineDeniedVehicleTypes( req: Request, res: Response, next: NextFunction);
}