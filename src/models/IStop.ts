import { StringSchema } from "joi";

export interface IStop {
    _id  : string,
    name : string,
    shortName : string,
    lat : string;
    long : string;
    isDepot : boolean;
    isReliefPoint : boolean;
    capacity : number;
}