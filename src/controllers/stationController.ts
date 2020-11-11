import { Response, Request, NextFunction } from 'express';
import { Inject } from 'typedi';
import config from '../../config';

import IStationDTO from '../dto/IStationDTO';
import IStationService from '../services/IStationService';
import IStationController from './IController/IStationController';

import { BaseController } from '../core/infra/BaseController';
import { Result } from '../core/logic/Result';

export default class StationController extends BaseController implements IStationController {
    constructor(
        @Inject(config.services.station.name) private stationServiceInstance: IStationService
    ) {
        super();
        console.log(stationServiceInstance);
        console.log(config.services.station);
    }

    protected executeImpl(): Promise<any> {
        throw new Error('Method not implemented.');
    }

    public async createStation(req: Request, res: Response, next: NextFunction) {
        try {
            const stationOrError = await this.stationServiceInstance.createStation(req.body as IStationDTO) as Result<IStationDTO>;

            if (stationOrError.isFailure) {
                return this.fail(stationOrError.error.toString()).send();
            }
            const stationDTO = stationOrError.getValue();
            return this.created(res);//.json(stationDTO);

        } catch (error) {
            return next(error);
        }
    };

    public async updateStation(req: Request, res: Response, next: NextFunction) {

    };
    public async deleteStation(req: Request, res: Response, next: NextFunction) {

    };
    public async getStation(req: Request, res: Response, next: NextFunction) {
        try {
            const stationOrError = await this.stationServiceInstance.getStations(req.body as IStationDTO) as Result<IStationDTO>;

            if (stationOrError.isFailure) {
                return this.fail(stationOrError.error.toString()).send();
            }

            const stationDTO = stationOrError.getValue();
            return this.ok<IStationDTO>(res, stationDTO).send();

        } catch (error) {
            return next(error);
        }
    };
    public async getStations(req: Request, res: Response, next: NextFunction) {
        try {
            const stationOrError = await this.stationServiceInstance.getStations(req.body as IStationDTO) as Result<IStationDTO>;

            if (stationOrError.isFailure) {
                return this.fail(stationOrError.error.toString()).send();
            }

            const stationDTO = stationOrError.getValue();
            return this.ok<IStationDTO>(res, stationDTO).send();

        } catch (error) {
            return next(error);
        }
    };
}


