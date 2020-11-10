import { Entity } from "../core/domain/Entity";
import { UniqueEntityID } from "../core/domain/UniqueEntityID";
import { ValueObject } from "../core/domain/ValueObject";
import { Guard } from "../core/logic/Guard";
import { Result } from "../core/logic/Result";

interface StationIdProps {
    value: string;
}

export class StationId extends ValueObject<StationIdProps> {
    get value(): string {
        return this.props.value;
    }

    private constructor(props) {
        super(props)
    }

    public static create(props: StationIdProps): Result<StationId> {

        const propsResult = Guard.againstNullOrUndefined(props.value, 'stationId');

        if (!propsResult.succeeded) {
            return Result.fail<StationId>(propsResult.message);
        } else {
            return Result.ok<StationId>(new StationId({
                value: props.value
            }));
        }
    }
}