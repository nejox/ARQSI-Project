import { Repo } from "../../core/infra/Repo";
import { Route } from "../../domain/Route";
import { RouteId } from "../../domain/routeId";

export interface IRouteRepo extends Repo<Route> {
    //save(route: Route): Promise<Route>;
    readById(routeId : RouteId | string): Promise<Route>;
    readAll(): Promise<Route[]>;
    delete(routeId: RouteId | string): Promise<Route>;
}