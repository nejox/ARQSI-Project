import { NextFunction, Request, Response } from "express";
import { Inject } from "typedi";
import config from "../../config";
import { BaseController } from "../core/infra/BaseController";
import IVehicleTypeDTOcollection from "../dto/IVehicleTypeDTOcollection";
import ILineVehicleTypeService from "../services/ILineVehicleTypeService";
import ILineVehicleTypeController from "./IController/ILineVehicleTypeController";

export default class LineVehicleTypeController extends BaseController implements ILineVehicleTypeController {
    constructor(
        @Inject(config.services.lineVehicleType.name) private lineVehicleTypeServiceInstance: ILineVehicleTypeService) {
        super();
    }

    protected executeImpl(): Promise<any> {
        throw new Error("Method not implemented.");
    }

    public async getLineAllowedVehicleTypes(req: Request, res: Response, next: NextFunction) {
        try {
            const vehicleOrError = await this.lineVehicleTypeServiceInstance.getLineAllowedVehicleTypes(req.params.lineId);
            if (vehicleOrError.isFailure) {
                return this.notFound(res, vehicleOrError.error.toString()).send();
            }

            const vehicleDTOcolletion = vehicleOrError.getValue();
            return this.ok<IVehicleTypeDTOcollection>(res, vehicleDTOcolletion).send();

        } catch (error) {
            next(error);
        }
    }

    public async getLineDeniedVehicleTypes(req: Request, res: Response, next: NextFunction) {
        try {
            const vehicleOrError = await this.lineVehicleTypeServiceInstance.getLineDeniedVehicleTypes(req.params.lineId);
            if (vehicleOrError.isFailure) {
                return this.notFound(res, vehicleOrError.error.toString()).send();
            }

            const vehicleDTOcolletion = vehicleOrError.getValue();
            return this.ok<IVehicleTypeDTOcollection>(res, vehicleDTOcolletion).send();

        } catch (error) {
            next(error);
        }
    }
}