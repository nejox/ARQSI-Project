import { Entity } from "../core/domain/Entity";
import { UniqueEntityID } from "../core/domain/UniqueEntityID";
import { ValueObject } from "../core/domain/ValueObject";
import { Guard } from "../core/logic/Guard";
import { Result } from "../core/logic/Result";


export class StationId extends Entity<any> {

    get id (): UniqueEntityID{
        return this._id;
    }
    private constructor(id?: UniqueEntityID) {
        super(null, id)
    }
}