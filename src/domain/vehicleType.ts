import { AggregateRoot } from "../core/domain/AggregateRoot";
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

    get vehicleTypeId(): VehicleTypeId {
        return VehicleTypeId.caller(this.id);
    }

    get name(): string {
        return this.props.name;
    }

    get cost(): number {
        return this.props.cost;
    }

    get avgSpeed(): number {
        return this.props.avgSpeed;
    }

    get energySrc(): number {
        return this.props.energySrc;
    }

    get consumption(): number {
        return this.props.consumption;
    }

    get autonomy(): number {
        return this.props.autonomy;
    }

    get emissions(): number {
        return this.props.emissions;
    }

}