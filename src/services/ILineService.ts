import { Result } from "../core/logic/Result";
import ILineDTO from "../dto/ILineDTO";
import ILineDTOcollection from "../dto/ILineDTOcollection";


export default interface ILineService {
    createLine(lineDTO: ILineDTO): Promise<Result<ILineDTO>>;
    updateLine(lineDTO: ILineDTO): Promise<Result<ILineDTO>>;
    deleteLine(lineId: string);
    getLine(lineId: string): Promise<Result<ILineDTO>>;
    getLines(lineDTO: ILineDTO): Promise<Result<ILineDTOcollection>>;
}