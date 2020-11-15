import { Result } from "../core/logic/Result";
import IRouteDTOcollection from "../dto/IRouteDTOcollection";

export default interface ILineRouteService {
    // createLineRoute(lineRouteDTO: ILineRouteDTO): Promise<Result<ILineRouteDTO>>;
    // updateLineRoute(lineRouteDTO: ILineRouteDTO): Promise<Result<ILineRouteDTO>>;
    // deleteLineRoute(lineRouteDTO: ILineRouteDTO);
    getLineRoutes(lineId: string): Promise<Result<IRouteDTOcollection>>;
}