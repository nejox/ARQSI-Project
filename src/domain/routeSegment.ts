import { Entity } from "../core/domain/Entity";
import { Station } from "./station";
import { StationId } from "./stationId";


interface RouteSegmentProps {
    stationId: StationId;
    duration : number;
    distance : number;
}

export class RouteSegment extends Entity<RouteSegmentProps> {

    get stationId(): StationId{
        return this.props.stationId;
    }

    get duration(): number{
        return this.props.duration;
    }

    get distance(): number{
        return this.props.distance;
    }

}