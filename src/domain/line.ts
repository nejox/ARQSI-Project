import { AggregateRoot } from "../core/domain/AggregateRoot";
import { UniqueEntityID } from "../core/domain/UniqueEntityID";
import { Guard } from "../core/logic/Guard";
import { Result } from "../core/logic/Result";
import { DriverType } from "./driverType";
import { LineId } from "./lineId";
import { LineRoute } from "./lineRoute";
import { VehicleType } from "./VehicleType";

interface LineProps {
    name: string;
    description: string;
    color: string;
    //lineRoutes: LineRoute[];
    //allowedVehicles: VehicleType[];
    //deniedVehicles: VehicleType[];
    //allowedDrivers: DriverType[];
    //deniedDrivers: DriverType[];
}

export class Line extends AggregateRoot<LineProps> {
    
    get lineId(): LineId {
        return LineId.caller(this.id);
    }

    get name(): string {
        return this.props.name;
    }

    set name(value: string){
        this.props.name = value;
    }

    get description(): string {
        return this.props.description;
    }

    set description(value: string){
        this.props.description = value;
    }

    get color() : string {
        return this.props.color;
    }

    set color(value: string) {
        this.props.color = value;
    }

    // get lineRoutes(): LineRoute[] {
    //     return this.props.lineRoutes;
    // }

    // get allowedVehicles(): VehicleType[] {
    //     return this.props.allowedVehicles;
    // }

    // get deniedVehicles(): VehicleType[] {
    //     return this.props.deniedVehicles;
    // }
    // get allowedDrivers(): DriverType[] {
    //     return this.props.allowedDrivers;
    // }
    // get deniedDrivers(): DriverType[] {
    //     return this.props.deniedDrivers;
    // }

    private constructor(props: LineProps, id?: UniqueEntityID){
        super(props,id);
    }

    public static create(props: LineProps, id?: UniqueEntityID): Result<Line> {
        const guardedProps = [
            { argument: props.name, argumentName: 'name' },
            { argument: props.description, argumentName: 'description' },
            { argument: props.color, argumentName: 'color' },
        ];

        const guardResult = Guard.againstNullOrUndefinedBulk(guardedProps);

        if (!guardResult.succeeded) {
            return Result.fail<Line>(guardResult.message)
        } else {
            const line = new Line({
                ...props
            }, id);

            return Result.ok<Line>(line);
        }
    }
}