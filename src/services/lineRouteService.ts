import { Inject, Service } from "typedi";
import config from "../../config";
import { Result } from "../core/logic/Result";
import ILineDTO from "../dto/ILineDTO";
import IRouteDTO from "../dto/IRouteDTO";
import IRouteDTOcollection from "../dto/IRouteDTOcollection";
import { LineMap } from "../mappers/LineMap";
import { RouteMap } from "../mappers/RouteMap";
import { ILineRepo } from "../repos/Interfaces/ILineRepo";
import { IRouteRepo } from "../repos/Interfaces/IRouteRepo";
import ILineRouteService from "./ILineRouteService";


@Service()
export default class LineRouteService implements ILineRouteService {
    constructor(
        @Inject(config.repos.line.name) private lineRepo: ILineRepo,
        @Inject(config.repos.route.name) private routeRepo: IRouteRepo
    ) { }

    public async getLineRoutes(lineId: string): Promise<Result<IRouteDTOcollection>> {

        const line = await this.lineRepo.readById(lineId);
        if (line === null) {
            return Result.fail<IRouteDTOcollection>("Line not found");
        } else {

            let result = Array<IRouteDTO>();
            for await (const route of line.lineRoutes) {
                const routeObj = await this.routeRepo.readById(route.routeId);
                result.push(RouteMap.toDTO(routeObj) as IRouteDTO);
            }
            return Result.ok<IRouteDTOcollection>({ routes: result });

        }
    }

}