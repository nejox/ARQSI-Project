import { Document, Model } from "mongoose";
import { UniqueEntityID } from "../core/domain/UniqueEntityID";
import { Mapper } from "../core/infra/Mapper";
import { Route } from "../domain/Route";
import IRouteDTO from "../dto/IRouteDTO";
import { IRoutePersistence } from "../persistence/IRoutePersistence";

export class RouteMap extends Mapper<Route> {

    public static toDTO(route: Route): IRouteDTO {
        return {
            routeId: route.id.toString(),
            isEmpty: route.isEmpty,
            routeNodes: route.routeNodes,
        } as IRouteDTO;
    }

    public static toDomain(raw: any | Model<IRoutePersistence & Document>): Route {
        const routeOrError = Route.create({
            isEmpty: raw.isEmpty,
            routeNodes: raw.routeNodes,
        }, new UniqueEntityID(raw.routeId));

        routeOrError.isFailure ? console.log(routeOrError.error) : '';

        return routeOrError.isSuccess ? routeOrError.getValue()  : null;
    }

    public static toPersistence(route: Route): any {
        return {
            routeId: route.id.toString(),
            isEmpty: route.isEmpty,
            routeNodes: route.routeNodes,
        }
    }

}