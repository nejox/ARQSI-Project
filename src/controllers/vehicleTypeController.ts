import { Response, Request, NextFunction } from 'express';
import { Inject } from 'typedi';
import config from '../../config';
import { BaseController } from '../core/infra/BaseController';
import { Result } from '../core/logic/Result';
import IVehicleTypeDTO from '../dto/IVehicleTypeDTO';
import IVehicleTypeDTOcollection from '../dto/IVehicleTypeDTOcollection';
import IVehicleTypeService from '../services/IVehicleTypeService';
import IVehicleTypeController from './IController/IVehicleTypeController';

export default class VehicleTypeController extends BaseController implements IVehicleTypeController {
    constructor(
        @Inject(config.services.vehicleType.name) private vehicleTypeServiceInstance: IVehicleTypeService
    ) {
        super();
    }

    protected executeImpl(): Promise<any> {
        throw new Error('Method not implemented.');
    }

    public async createVehicleType(req: Request, res: Response, next: NextFunction) {

        try {
            const vehicleTypeOrError = await this.vehicleTypeServiceInstance.createVehicleType(req.body as IVehicleTypeDTO) as Result<IVehicleTypeDTO>;

            if (vehicleTypeOrError.isFailure) {
                return this.fail(res,vehicleTypeOrError.error.toString()).send();
            }
            return this.created(res);
        } catch (error) {
            return next(error);
        }
    }

    public async updateVehicleType(req: Request, res: Response, next: NextFunction) {
        try {
            req.body.vehicleTypeId = req.params.vehicleTypeId;
            const vehicleTypeOrError = await this.vehicleTypeServiceInstance.updateVehicleType(req.body as IVehicleTypeDTO) as Result<IVehicleTypeDTO>;

            if (vehicleTypeOrError.isFailure) {
                return this.fail(res, vehicleTypeOrError.error.toString()).send();
            }
            const vehicleTypeDTO = vehicleTypeOrError.getValue();
            return this.ok<IVehicleTypeDTO>(res, vehicleTypeDTO).send();

        } catch (error) {
            return next(error);
        }
    }

    public async deleteVehicleType(req: Request, res: Response, next: NextFunction) {
        try {
            await this.vehicleTypeServiceInstance.deleteVehicleType(req.params.vehicleTypeId);

            return this.ok(res).send();

        } catch (error) {
            return next(error);
        }
    }

    public async getVehicleType(req: Request, res: Response, next: NextFunction) {
        try {
            const vehicleTypeOrError = await this.vehicleTypeServiceInstance.getVehicleType(req.params.vehicleTypeId) as Result<IVehicleTypeDTO>;

            if (vehicleTypeOrError.isFailure) {
                return this.notFound(res, vehicleTypeOrError.error.toString()).send();
            }

            const vehicleTypeDTO = vehicleTypeOrError.getValue();
            return this.ok<IVehicleTypeDTO>(res, vehicleTypeDTO).send();

        } catch (error) {
            return next(error);
        }
    }

    public async getVehicleTypes(req: Request, res: Response, next: NextFunction) {
        try {
            const vehicleTypeOrError = await this.vehicleTypeServiceInstance.getVehicleTypes(req.body as IVehicleTypeDTO) as Result<IVehicleTypeDTOcollection>;

            if (vehicleTypeOrError.isFailure) {
                return this.notFound(res, vehicleTypeOrError.error.toString()).send();
            }

            const vehicleTypeDTOcollection = vehicleTypeOrError.getValue();
            return this.ok<IVehicleTypeDTOcollection>(res, vehicleTypeDTOcollection).send();

        } catch (error) {
            return next(error);
        }
    }
}