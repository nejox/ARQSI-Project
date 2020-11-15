import { AggregateRoot } from "../core/domain/AggregateRoot";
import { UniqueEntityID } from "../core/domain/UniqueEntityID";
import { Guard } from "../core/logic/Guard";
import { Result } from "../core/logic/Result";
import { VehicleTypeId } from "./vehicleTypeId";

interface VehicleTypeProps {
    name: string;
    autonomy: number;
    cost: number;
    avgSpeed: number;
    energySrc: number;
    consumption: number;
    emissions: number;
    //<ParametersValues/>
    //<Vehicles/>
}

export class VehicleType extends AggregateRoot<VehicleTypeProps> {

    get id(): UniqueEntityID {
        return this._id;
    }

    get vehicleTypeId(): VehicleTypeId {
        return VehicleTypeId.caller(this.id);
    }

    get name(): string {
        return this.props.name;
    }

    set name(value : string){
        this.props.name = value;
    }

    get cost(): number {
        return this.props.cost;
    }

    set cost(value : number){
        this.props.cost = value;
    }

    get avgSpeed(): number {
        return this.props.avgSpeed;
    }

    set avgSpeed(value : number){
        this.props.avgSpeed = value;
    }

    get energySrc(): number {
        return this.props.energySrc;
    }

    set energySrc(value : number){
        this.props.energySrc = value;
    }

    get consumption(): number {
        return this.props.consumption;
    }

    set consumption(value : number){
        this.props.consumption = value;
    }

    get autonomy(): number {
        return this.props.autonomy;
    }

    set autonomy(value : number){
        this.props.autonomy = value;
    }

    get emissions(): number {
        return this.props.emissions;
    }

    set emissions(value : number){
        this.props.emissions = value;
    }

    private constructor(props: VehicleTypeProps, id?: UniqueEntityID) {
        super(props, id);
    }

    public  static create(props: VehicleTypeProps, id?: UniqueEntityID): Result<VehicleType> {
        
        const guardedProps = [
            { argument: props.name, argumentName: "name" },
            { argument: props.autonomy, argumentName: "autonomy" },
            { argument: props.avgSpeed, argumentName: "avgSpeed" },
            { argument: props.consumption, argumentName: "consumption" },
            { argument: props.cost, argumentName: "cost" },
            { argument: props.emissions, argumentName: "emissions" },
            { argument: props.energySrc, argumentName: "energySrc" },
        ];

        const guardResult = Guard.againstNullOrUndefinedBulk(guardedProps);

        if (!guardResult.succeeded) {
            return Result.fail<VehicleType>(guardResult.message)
        }
        else {
            const vehicleType = new VehicleType({
                ...props
            }, id);

            return Result.ok<VehicleType>(vehicleType);
        }

    }
}