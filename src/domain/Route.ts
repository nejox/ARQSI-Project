import { AggregateRoot } from "../core/domain/AggregateRoot";
import { UniqueEntityID } from "../core/domain/UniqueEntityID";
import { Guard } from "../core/logic/Guard";
import { Result } from "../core/logic/Result";
import { RouteId } from "./routeId";
import { RouteSegment } from "./routeSegment";

interface RouteProps {
    isEmpty: boolean;
    routeNodes: RouteSegment[];
}

export class Route extends AggregateRoot<RouteProps> {

    get id(): UniqueEntityID {
        return this._id;
    }

    get routeId(): RouteId {
        return RouteId.caller(this.id);
    }

    get isEmpty(): boolean {
        return this.props.isEmpty;
    }

    set isEmpty(value: boolean) {
        this.props.isEmpty = value;
    }

    get routeNodes(): RouteSegment[] {
        return this.props.routeNodes;
    }

    set routeNodes(value: RouteSegment[]) {
        this.props.routeNodes = value;
    }

    private constructor(props: RouteProps, id?: UniqueEntityID) {
        super(props, id);
    }

    public static create(props: RouteProps, id?: UniqueEntityID): Result<Route> {
        const guardedProps = [
            { argument: props.isEmpty, argumentName: "isEmpty" },
            { argument: props.routeNodes, argumentName: "routeNodes" }
        ];

        const guardResult = Guard.againstNullOrUndefinedBulk(guardedProps);

        if (!guardResult.succeeded) {
            return Result.fail<Route>(guardResult.message)
        }
        else {
            const vehicleType = new Route({
                ...props
            }, id);

            return Result.ok<Route>(vehicleType);
        }
    }

}