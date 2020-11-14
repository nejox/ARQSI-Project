import { Document, Model } from "mongoose";
import { Inject, Service } from "typedi";
import { Line } from "../domain/line";
import { LineId } from "../domain/lineId";
import { LineMap } from "../mappers/LineMap";
import { ILinePersistence } from "../persistence/ILinePersistence";
import { ILineRepo } from "./Interfaces/ILineRepo";

@Service()
export default class LineRepo implements ILineRepo {

    private models: any;

    constructor(
        @Inject('lineSchema') private lineSchema: Model<ILinePersistence & Document>,
        @Inject('logger') private logger
    ) { }

    private createBaseQuery(): any {
        return {
            where: {},
        }
    }

    public async save(line: Line): Promise<Line> {
        const query = { lineId: line.id.toString() };

        const exists = await this.exists(line);

        try {
            if (!exists) {
                const rawLine: any = LineMap.toPersistence(line);

                const lineCreated = await this.lineSchema.create(rawLine);

                return LineMap.toDomain(lineCreated);
            } else {
                const lineDoc = await this.lineSchema.findOne(query);

                lineDoc.description = line.description;
                lineDoc.color = line.color;
                lineDoc.name = line.name;
                await lineDoc.save();

                return line;
            }
        } catch (error) {
            throw error;
        }
    }

    public async readById(lineId: string | LineId): Promise<Line> {
        const idX = lineId instanceof LineId ? (<LineId>lineId).id.toString() : lineId;

        const query = { lineId: idX };

        const lineRecord = await this.lineSchema.findOne(query);

        if (lineRecord != null) {
            return LineMap.toDomain(lineRecord);
        }
        return null;
    }

    public async delete(lineId: string | LineId): Promise<Line> {
        const idX = lineId instanceof LineId ? (<LineId>lineId).id.toString() : lineId;

        const query = { lineId: idX };

        try {
            const lineRec = await this.lineSchema.findOneAndDelete(query);
            if(lineRec != null){
                return LineMap.toDomain(lineRec);
            }

        } catch (error) {
            throw error;
        }
    }

    public async exists(line: Line | string): Promise<boolean> {
        const idX = line instanceof Line ? (<Line>line).id.toString(): line;
        const query = { lineId: idX };

        const lineDoc = await this.lineSchema.findOne(query);

        return !!lineDoc === true;
    }

    public async readAll(): Promise<Line[]> {
        
        let allDocs = await this.lineSchema.find();
        return allDocs.map((line) => LineMap.toDomain(line) as Line);

    }

}