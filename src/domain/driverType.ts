import { AggregateRoot } from "../core/domain/AggregateRoot";
import { DriverTypeId } from "./driverTypeId";

interface DriverTypeProps {

}

export class DriverType extends AggregateRoot<DriverTypeProps> {

    get driverTypeId(): DriverTypeId {
        return DriverTypeId.caller(this.id);
    }

}