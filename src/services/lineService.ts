import { Inject, Service } from "typedi";
import config from "../../config";
import ILineController from "../controllers/IController/ILineController";
import { Result } from "../core/logic/Result";
import { Line } from "../domain/line";
import ILineDTO from "../dto/ILineDTO";
import ILineDTOcollection from "../dto/ILineDTOcollection";
import { LineMap } from "../mappers/LineMap";
import { ILineRepo } from "../repos/Interfaces/ILineRepo";
import ILineService from "./ILineService";


@Service()
export default class LineService implements ILineService {
    constructor(
        @Inject(config.repos.line.name) private lineRepo: ILineRepo
    ) { }

    public async createLine(lineDTO: ILineDTO): Promise<Result<ILineDTO>> {
        try {
            const lineOrError = await Line.create(lineDTO);

            if (lineOrError.isFailure) {
                return Result.fail<ILineDTO>(lineOrError.errorValue());
            }

            const lineRes = lineOrError.getValue();

            await this.lineRepo.save(lineRes);

            const lineDTOres = LineMap.toDTO(lineRes) as ILineDTO;
            return Result.ok<ILineDTO>(lineDTOres);

        } catch (error) {
            throw error;
        }
    }
    public async updateLine(lineDTO: ILineDTO): Promise<Result<ILineDTO>> {
        try {
            const line = await this.lineRepo.readById(lineDTO.lineId);

            if(line === null){
                return Result.fail<ILineDTO>("Line not found");
            } else {
                line.name = lineDTO.name;
                line.code = lineDTO.code;
                line.description = lineDTO.description;
                line.color = lineDTO.color;
                line.lineRoutes = lineDTO.lineRoutes;
                line.allowedVehicles = lineDTO.allowedVehicles;
                line.deniedVehicles = lineDTO.deniedVehicles;
                await this.lineRepo.save(line);

                const lineDTOres = LineMap.toDTO(line) as ILineDTO;
                return Result.ok<ILineDTO>(lineDTOres);
            }

        } catch (error) {
            throw error;
        }
    }
    public async deleteLine(lineId: string) {
        try {
            
            await this.lineRepo.delete(lineId);

        } catch (error) {
            throw error;
        }
    }
    public async getLine(lineId: string): Promise<Result<ILineDTO>> {
        
        try {
            
            const line = await this.lineRepo.readById(lineId);
            if(line === null){
                return Result.fail<ILineDTO>("Line not found");
            }else{
                const lineDTOres = LineMap.toDTO(line) as ILineDTO;
                return Result.ok<ILineDTO>(lineDTOres);
            }

        } catch (error) {
            throw error;
        }    
    }

    public async getLines(lineDTO: ILineDTO): Promise<Result<ILineDTOcollection>> {
        try {
            const lineList = await this.lineRepo.readAll();
            return Result.ok<ILineDTOcollection>({lines: lineList.map( line => LineMap.toDTO(line) as ILineDTO)});

        } catch (error) {
            throw error;
        }
    }


}