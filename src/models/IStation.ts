import { StringSchema } from "joi";

export interface IStation {
    _id  : string,
    name : string,
    shortName : string,
    lat : string;
    long : string;
    isDepot : boolean;
    isReliefPoint : boolean;
    capacity : number;
}