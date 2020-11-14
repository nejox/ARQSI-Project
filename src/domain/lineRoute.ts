import { AggregateRoot } from "../core/domain/AggregateRoot";
import { Entity } from "../core/domain/Entity";
import { LineRouteId } from "./lineRouteId";
import { Route } from "./Route";

interface LineRouteProps {
    route: Route;
    orientation: string;
}

export class LineRoute extends AggregateRoot<LineRouteProps> {

    get linePathId(): LineRouteId {
        return LineRouteId.caller(this.id);
    }

    get route(): Route {
        return this.props.route;
    }

    get orientation(): string {
        return this.props.orientation;
    }

}