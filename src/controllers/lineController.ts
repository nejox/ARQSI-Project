import { Response, Request, NextFunction } from 'express';
import { Inject } from 'typedi';
import config from '../../config';
import { BaseController } from '../core/infra/BaseController';
import { Result } from '../core/logic/Result';
import ILineDTO from '../dto/ILineDTO';
import ILineDTOcollection from '../dto/ILineDTOcollection';
import ILineService from '../services/ILineService';
import ILineController from './IController/ILineController';

export default class LineController extends BaseController implements ILineController {

    constructor(
        @Inject(config.services.line.name) private lineServiceInstance: ILineService
    ) {
        super();
    }

    protected executeImpl(): Promise<any> {
        throw new Error('Method not implemented.');
    }

    public async createLine(req: Request, res: Response, next: NextFunction) {

        try {
            const lineOrError = await this.lineServiceInstance.createLine(req.body as ILineDTO) as Result<ILineDTO>;

            if (lineOrError.isFailure) {
                return this.fail(lineOrError.error.toString()).send();
            }
            this.created(res);

        } catch (error) {
            return next(error);
        }
    }

    public async updateLine(req: Request, res: Response, next: NextFunction) {
        try {
            req.body.lineId = req.params.lineId;
            const lineOrError = await this.lineServiceInstance.updateLine(req.body as ILineDTO) as Result<ILineDTO>;
            if (lineOrError.isFailure) {
                return this.fail(lineOrError.error.toString()).send();
            }
            const lineDTO = lineOrError.getValue();
            return this.ok<ILineDTO>(res, lineDTO).send();

        } catch (error) {
            return next(error);
        }
    }

    public async deleteLine(req: Request, res: Response, next: NextFunction) {
        try {

            await this.lineServiceInstance.deleteLine(req.params.lineId);

            return this.ok(res).send();

        } catch (error) {
            return next(error);
        }
    }

    public async getLine(req: Request, res: Response, next: NextFunction) {
        try {

            const lineOrError = await this.lineServiceInstance.getLine(req.params.lineId) as Result<ILineDTO>;
            if (lineOrError.isFailure) {
                let msg = lineOrError.error.toString();
                return res.status(404).send(msg);
            }

            const lineDTO = lineOrError.getValue();
            return this.ok<ILineDTO>(res, lineDTO).send();

        } catch (error) {
            return next(error);
        }
    }

    public async getLines(req: Request, res: Response, next: NextFunction) {
        try {
            const lineOrError = await this.lineServiceInstance.getLines(req.body as ILineDTO) as Result<ILineDTOcollection>;
            if (lineOrError.isFailure) {
                let msg = lineOrError.error.toString();
                return res.status(404).send(msg);
            }

            const lineDTOcollection = lineOrError.getValue();
            return this.ok<ILineDTOcollection>(res, lineDTOcollection).send();
        } catch (error) {
            return next(error);
        }
    }

}