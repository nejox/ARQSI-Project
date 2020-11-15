import { Result } from "../core/logic/Result";
import IRouteDTO from "../dto/IRouteDTO";
import IRouteDTOcollection from "../dto/IRouteDTOcollection";

export default interface IRouteService {
    createRoute(routeDTO: IRouteDTO): Promise<Result<IRouteDTO>>;
    updateRoute(routeDTO: IRouteDTO): Promise<Result<IRouteDTO>>;
    deleteRoute(routeId: string);
    getRoute(routeId: string): Promise<Result<IRouteDTO>>;
    getRoutes(routeDTO: IRouteDTO): Promise<Result<IRouteDTOcollection>>;
}