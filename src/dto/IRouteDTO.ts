import { RouteStation } from "../domain/routeStation";

export default interface IRouteDTO {
    routeId: string;
    isEmpty: boolean;
    routeNodes: RouteStation[];
}