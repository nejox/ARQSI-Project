import { IStop } from "./IStop";

export interface IPathNode {
    node : IStop;
    duration : number;
    distance : number;
}