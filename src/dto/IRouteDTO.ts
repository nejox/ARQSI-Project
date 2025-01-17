import { RouteSegment } from "../domain/routeSegment";

export default interface IRouteDTO {
    routeId: string;
    isEmpty: boolean;
    routeNodes: RouteSegment[];
}