import { Response, Request, NextFunction } from 'express';
import { Inject } from 'typedi';
import config from '../../config';
import { BaseController } from '../core/infra/BaseController';
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
    }

    public async updateVehicleType(req: Request, res: Response, next: NextFunction) {
    }

    public async deleteVehicleType(req: Request, res: Response, next: NextFunction) {
    }

    public async getVehicleType(req: Request, res: Response, next: NextFunction) {
    }

    public async getVehicleTypes(req: Request, res: Response, next: NextFunction) {
    }
}