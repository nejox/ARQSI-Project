
import { Entity } from "../core/domain/Entity";
import { LineRouteId } from "./lineRouteId";
import { RouteId } from "./routeId";

interface LineRouteProps {
    routeId: RouteId;
    orientation: string;
}

export class LineRoute extends Entity<LineRouteProps> {
    get routeId(): RouteId {
        return this.props.routeId;
    }

    get orientation(): string {
        return this.props.orientation;
    }

    set orientation(value: string){
        this.props.orientation = value;
    }

}