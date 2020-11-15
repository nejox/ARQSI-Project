import { Request, Response, NextFunction } from "express";
import { Inject } from "typedi";
import config from "../../config";
import { BaseController } from "../core/infra/BaseController"
import IRouteDTOcollection from "../dto/IRouteDTOcollection";
import ILineRouteService from "../services/ILineRouteService";
import ILineRouteController from "./IController/ILineRouteController";

export default class LineRouteController extends BaseController implements ILineRouteController {

    constructor(
        @Inject(config.services.lineRoute.name) private lineRouteServiceInstance: ILineRouteService) {
        super();
    }

    protected executeImpl(): Promise<any> {
        throw new Error("Method not implemented.");
    }

    public async getLineRoutes(req: Request, res: Response, next: NextFunction) {
        try {
            const routesOrError = await this.lineRouteServiceInstance.getLineRoutes(req.params.lineId);
            if (routesOrError.isFailure) {
                return this.notFound(res, routesOrError.error.toString()).send();
            }

            const routeDTOcollection = routesOrError.getValue();
            return this.ok<IRouteDTOcollection>(res, routeDTOcollection).send();

        } catch (error) {
            next(error);
        }
    }

    // public async getLineRoute(req: Request, res: Response, next: NextFunction) {

    // }

    // public async updateLineRoute(req: Request, res: Response, next: NextFunction) {

    // }

    // public async deleteLineRoute(req: Request, res: Response, next: NextFunction) {

    // }

    // public async createLineRoute(req: Request, res: Response, next: NextFunction) {

    // }

}