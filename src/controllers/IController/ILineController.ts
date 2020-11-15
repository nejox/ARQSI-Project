import { Request, Response, NextFunction } from "express";

export default interface ILineController {
    createLine(req: Request, res: Response, next: NextFunction);
    updateLine(req: Request, res: Response, next: NextFunction);
    deleteLine(req: Request, res: Response, next: NextFunction);
    getLine(req: Request, res: Response, next: NextFunction);
    getLines(req: Request, res: Response, next: NextFunction);
    
}