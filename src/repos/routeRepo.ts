import { Model, Document } from "mongoose";
import { Service, Inject } from "typedi";
import { Route } from "../domain/Route";
import { RouteId } from "../domain/routeId";
import { RouteMap } from "../mappers/RouteMap";
import { IRoutePersistence } from "../persistence/IRoutePersistence";
import { IRouteRepo } from "./Interfaces/IRouteRepo";

@Service()
export default class RouteRepo implements IRouteRepo {

    private models: any;

    constructor(
        @Inject('routeSchema') private routeSchema: Model<IRoutePersistence & Document>,
        @Inject('logger') private logger
    ) { }

    private createBaseQuery(): any {
        return {
            where: {},
        }
    }

    public async save(route: Route): Promise<Route> {
        const query = { routeId: route.id.toString() };

        const exists = await this.exists(route);

        try {
            if (!exists) {
                const rawRoute: any = RouteMap.toPersistence(route);

                const routeCreated = await this.routeSchema.create(rawRoute);

                return RouteMap.toDomain(routeCreated);
            } else {
                const routeDoc = await this.routeSchema.findOne(query);

                routeDoc.isEmpty = route.isEmpty;
                routeDoc.routeNodes = route.routeNodes;
                await routeDoc.save();

                return route;
            }
        } catch (error) {
            throw error;
        }
    }

    public async readById(routeId: string | RouteId): Promise<Route> {
        const idX = routeId instanceof RouteId ? (<RouteId>routeId).id.toString() : routeId;

        const query = { routeId: idX };

        const routeRecord = await this.routeSchema.findOne(query);

        if (routeRecord != null) {
            return RouteMap.toDomain(routeRecord);
        }
        return null;
    }

    public async delete(routeId: string | RouteId): Promise<Route> {
        const idX = routeId instanceof RouteId ? (<RouteId>routeId).id.toString() : routeId;

        const query = { routeId: idX };

        try {
            const routeRec = await this.routeSchema.findOneAndDelete(query);
            if(routeRec != null){
                return RouteMap.toDomain(routeRec);
            }

        } catch (error) {
            throw error;
        }
    }

    public async exists(route: Route | string): Promise<boolean> {
        const idX = route instanceof Route ? (<Route>route).id.toString(): route;
        const query = { routeId: idX };

        const routeDoc = await this.routeSchema.findOne(query);

        return !!routeDoc === true;
    }

    public async readAll(): Promise<Route[]> {
        
        let allDocs = await this.routeSchema.find();
        return allDocs.map((route) => RouteMap.toDomain(route) as Route);

    }

}