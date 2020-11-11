import { IStation } from "./IStation";

export interface IPathNode {
    node : IStation;
    duration : number;
    distance : number;
}