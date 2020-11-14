import { Entity } from "../core/domain/Entity";
import { Station } from "./station";


interface RouteStationProps {
    station: Station;
    duration : number;
    distance : number;
}

export class RouteStation extends Entity<RouteStationProps> {

    get station(): Station{
        return this.props.station;
    }

    get duration(): number{
        return this.props.duration;
    }

    get distance(): number{
        return this.props.distance;
    }

}