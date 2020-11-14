import { Repo } from "../../core/infra/Repo";
import { Line } from "../../domain/line";
import { LineId } from "../../domain/lineId";

export interface ILineRepo extends Repo<Line> {
    save(line: Line): Promise<Line>;
    readById(lineId : LineId | string): Promise<Line>;
    readAll(): Promise<Line[]>;
    delete(lineId: LineId | string): Promise<Line>;
}