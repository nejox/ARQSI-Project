import { Request, Response, NextFunction } from "express";
import { Inject } from "typedi";
import config from "../../config";
import { BaseController } from "../core/infra/BaseController";
import { Result } from "../core/logic/Result";
import IRouteDTO from "../dto/IRouteDTO";
import IRouteDTOcollection from "../dto/IRouteDTOcollection";
import IRouteService from "../services/IRouteService";
import IRouteController from "./IController/IRouteController";


export default class RouteController extends BaseController implements IRouteController {

    constructor(
        @Inject(config.services.route.name) private routeServiceInstance: IRouteService
    ) {
        super();
    }

    protected executeImpl(): Promise<any> {
        throw new Error('Method not implemented.');
    }

    public async createRoute(req: Request, res: Response, next: NextFunction){
        try {
            const routeOrError = await this.routeServiceInstance.createRoute(req.body as IRouteDTO) as Result<IRouteDTO>;

            if (routeOrError.isFailure) {
                return this.fail(res,routeOrError.error.toString()).send();
            }
            this.created(res);

        } catch (error) {
            return next(error);
        }
    }

    public async updateRoute(req: Request, res: Response, next: NextFunction){
        try {
            req.body.routeId = req.params.routeId;
            const routeOrError = await this.routeServiceInstance.updateRoute(req.body as IRouteDTO) as Result<IRouteDTO>;
            if (routeOrError.isFailure) {
                return this.fail(res, routeOrError.error.toString()).send();
            }
            const routeDTO = routeOrError.getValue();
            return this.ok<IRouteDTO>(res, routeDTO).send();

        } catch (error) {
            return next(error);
        }
    }
    
    public async deleteRoute(req: Request, res: Response, next: NextFunction){
        try {

            await this.routeServiceInstance.deleteRoute(req.params.routeId);

            return this.ok(res).send();

        } catch (error) {
            return next(error);
        }
    }
    
    public async getRoute(req: Request, res: Response, next: NextFunction){
        try {

            const routeOrError = await this.routeServiceInstance.getRoute(req.params.routeId) as Result<IRouteDTO>;
            if (routeOrError.isFailure) {
                return this.notFound(res,routeOrError.error.toString()).send();
            }

            const routeDTO = routeOrError.getValue();
            return this.ok<IRouteDTO>(res, routeDTO).send();

        } catch (error) {
            return next(error);
        }
    }
    
    public async getRoutes(req: Request, res: Response, next: NextFunction){
        try {
            const routeOrError = await this.routeServiceInstance.getRoutes(req.body as IRouteDTO) as Result<IRouteDTOcollection>;
            if (routeOrError.isFailure) {
                return this.notFound(res,routeOrError.error.toString()).send();
            }

            const routeDTOcollection = routeOrError.getValue();
            return this.ok<IRouteDTOcollection>(res, routeDTOcollection).send();
        } catch (error) {
            return next(error);
        }
    }

}