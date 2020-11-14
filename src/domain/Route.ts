import { BooleanSchema } from "joi";
import { Entity } from "../core/domain/Entity";
import { RouteStation } from "./routeStation";

interface RouteProps {
    isEmpty: boolean;
    routeNodes: RouteStation[];
}

export class Route extends Entity<RouteProps> {

    get isEmpty(): boolean {
        return this.props.isEmpty;
    }

    get routeNodes(): RouteStation[]{
        return this.props.routeNodes;
    }

}