import { Response, Request, NextFunction } from 'express';
import { Inject } from 'typedi';
import config from '../../config';

import IStationDTO from '../dto/IStationDTO';
import IStationService from '../services/IStationService';
import IStationController from './IController/IStationController';

import { BaseController } from '../core/infra/BaseController';
import { Result } from '../core/logic/Result';
import IStationDTOcollection from '../dto/IStationDTOcolletion';
import { StationId } from '../domain/stationId';

export default class StationController extends BaseController implements IStationController {
    constructor(
        @Inject(config.services.station.name) private stationServiceInstance: IStationService
    ) {
        super();
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
            return this.created(res);

        } catch (error) {
            return next(error);
        }
    };

    public async updateStation(req: Request, res: Response, next: NextFunction) {
        try {
            req.body.stationId = req.params.stationId;
            const stationOrError = await this.stationServiceInstance.updateStation(req.body as IStationDTO) as Result<IStationDTO>;

            if (stationOrError.isFailure) {
                return this.fail(stationOrError.error.toString()).send();
            }
            const stationDTO = stationOrError.getValue();
            return this.ok<IStationDTO>(res, stationDTO).send();

        } catch (error) {
            return next(error);
        }
    };

    public async deleteStation(req: Request, res: Response, next: NextFunction) {
        try {
            await this.stationServiceInstance.deleteStation(req.params.stationId);

            return this.ok(res).send();

        } catch (error) {
            return next(error);
        }
    };
    public async getStation(req: Request, res: Response, next: NextFunction) {
        try {
            const stationOrError = await this.stationServiceInstance.getStation(req.params.stationId) as Result<IStationDTO>;

            if (stationOrError.isFailure) {
                let msg = stationOrError.error.toString();
                //schmeißt error 
                //return this.notFound(msg).send();
                return res.status(404).send(msg);
            }

            const stationDTO = stationOrError.getValue();
            return this.ok<IStationDTO>(res, stationDTO).send();

        } catch (error) {
            return next(error);
        }
    };
    public async getStations(req: Request, res: Response, next: NextFunction) {
        try {
            const stationOrError = await this.stationServiceInstance.getStations(req.body as IStationDTO) as Result<IStationDTOcollection>;

            if (stationOrError.isFailure) {
                let msg = stationOrError.error.toString();
                //schmeißt error 
                //return this.notFound(msg).send();
                return res.status(404).send(msg);
            }

            const stationDTOcollection = stationOrError.getValue();
            return this.ok<IStationDTOcollection>(res, stationDTOcollection).send();

        } catch (error) {
            return next(error);
        }
    };
}


