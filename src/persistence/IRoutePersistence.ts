import { RouteSegment } from "../domain/routeSegment";

export interface IRoutePersistence {
    routeId: string;
    isEmpty: boolean;
    routeNodes:  RouteSegment[];
}