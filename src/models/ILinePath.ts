import { IPath } from "./IPath";


export interface ILinePath {
    _id : string,
    orientation : string;
    path : Array<IPath>;
}