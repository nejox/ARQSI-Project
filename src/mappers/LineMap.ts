import { Document, Model } from "mongoose";
import { UniqueEntityID } from "../core/domain/UniqueEntityID";
import { Mapper } from "../core/infra/Mapper";
import { Line } from "../domain/line";
import ILineDTO from "../dto/ILineDTO";
import { ILinePersistence } from "../persistence/ILinePersistence";

export class LineMap extends Mapper<Line> {
    
    public static toDTO(line: Line): ILineDTO {
        return {
            lineId: line.id.toString(),
            name: line.name,
            description: line.description,
            color: line.color
        } as ILineDTO;
    }

    public static toDomain(raw: any | Model<ILinePersistence & Document>): Line {
        const lineOrError = Line.create({
            name: raw.name,
            description: raw.description,
            color: raw.color,
        }, new UniqueEntityID(raw.lineId));

        lineOrError.isFailure ? console.log(lineOrError.error) : '';

        return lineOrError.isSuccess ? lineOrError.getValue()  : null;
    }

    public static toPersistence(line: Line): any {
        return {
            lineId: line.id.toString(),
            name: line.name,
            description: line.description,
            color: line.color
        }
    }

}