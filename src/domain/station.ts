import { AggregateRoot } from "../core/domain/AggregateRoot";
import { UniqueEntityID } from "../core/domain/UniqueEntityID";
import { Guard } from "../core/logic/Guard";
import { Result } from "../core/logic/Result";
import { StationId } from "./StationId";

interface StationProps {
    name: string,
    shortName: string,
    lat: string;
    long: string;
    isDepot: boolean;
    isReliefPoint: boolean;
    capacity: number;
}

export class Station extends AggregateRoot<StationProps> {

    get id(): UniqueEntityID {
        return this._id;
    }

    get stationId(): StationId {
        return StationId.caller(this.id);
    }

    get name(): string {
        return this.props.name;
    }

    get shortName(): string {
        return this.props.shortName;
    }

    get lat(): string {
        return this.props.lat;
    }

    get long(): string {
        return this.props.long;
    }

    get isDepot(): boolean {
        return this.props.isDepot;
    }

    get isReliefpoint(): boolean {
        return this.props.isReliefPoint;
    }

    get capacity(): number {
        return this.props.capacity;
    }

    private constructor(props: StationProps, id?: UniqueEntityID) {
        super(props, id);
    }

    public static create(props: StationProps, id?: UniqueEntityID): Result<Station> {

        const guardedProps = [
            { argument: props.name, argumentName: 'name' },
            { argument: props.shortName, argumentName: 'shortName' },
            { argument: props.lat, argumentName: 'lat' },
            { argument: props.long, argumentName: 'long' },
        ];

        const guardResult = Guard.againstNullOrUndefinedBulk(guardedProps);

        if (!guardResult.succeeded) {
            return Result.fail<Station>(guardResult.message)
        }
        else {
            const station = new Station({
                ...props
            }, id);

            return Result.ok<Station>(station);
        }
    }
}
