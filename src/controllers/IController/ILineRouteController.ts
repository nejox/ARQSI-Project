import { Request, Response, NextFunction } from "express";

export default interface ILineRouteController {
    getLineRoutes(req: Request, res: Response, next: NextFunction);
    // updateLineRoute(req: Request, res: Response, next: NextFunction);
    // deleteLineRoute(req: Request, res: Response, next: NextFunction);
    // createLineRoute(req: Request, res: Response, next: NextFunction);
}