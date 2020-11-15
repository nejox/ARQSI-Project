
import { Service, Inject } from "typedi";
import config from "../../config";
import { Result } from "../core/logic/Result";
import { Route } from "../domain/Route";
import IRouteDTO from "../dto/IRouteDTO";
import IRouteDTOcollection from "../dto/IRouteDTOcollection";
import { RouteMap } from "../mappers/RouteMap";
import { IRouteRepo } from "../repos/Interfaces/IRouteRepo";
import IRouteService from "./IRouteService";

@Service()
export default class RouteService implements IRouteService {
    constructor(
        @Inject(config.repos.route.name) private routeRepo: IRouteRepo
    ) { }

    public async createRoute(routeDTO: IRouteDTO): Promise<Result<IRouteDTO>> {
        try {
            const routeOrError = await Route.create(routeDTO);

            if (routeOrError.isFailure) {
                return Result.fail<IRouteDTO>(routeOrError.errorValue());
            }

            const routeRes = routeOrError.getValue();

            await this.routeRepo.save(routeRes);

            const routeDTOres = RouteMap.toDTO(routeRes) as IRouteDTO;
            return Result.ok<IRouteDTO>(routeDTOres);

        } catch (error) {
            throw error;
        }
    }
    public async updateRoute(routeDTO: IRouteDTO): Promise<Result<IRouteDTO>> {
        try {
            const route = await this.routeRepo.readById(routeDTO.routeId);

            if(route === null){
                return Result.fail<IRouteDTO>("Route not found");
            } else {
                route.isEmpty = routeDTO.isEmpty;
                route.routeNodes = routeDTO.routeNodes;
                await this.routeRepo.save(route);

                const routeDTOres = RouteMap.toDTO(route) as IRouteDTO;
                return Result.ok<IRouteDTO>(routeDTOres);
            }

        } catch (error) {
            throw error;
        }
    }
    public async deleteRoute(routeId: string) {
        try {
            
            await this.routeRepo.delete(routeId);

        } catch (error) {
            throw error;
        }
    }
    public async getRoute(routeId: string): Promise<Result<IRouteDTO>> {
        
        try {
            
            const route = await this.routeRepo.readById(routeId);
            if(route === null){
                return Result.fail<IRouteDTO>("Route not found");
            }else{
                const routeDTOres = RouteMap.toDTO(route) as IRouteDTO;
                return Result.ok<IRouteDTO>(routeDTOres);
            }

        } catch (error) {
            throw error;
        }    
    }

    public async getRoutes(routeDTO: IRouteDTO): Promise<Result<IRouteDTOcollection>> {
        try {
            const routeList = await this.routeRepo.readAll();
            return Result.ok<IRouteDTOcollection>({routes: routeList.map( route => RouteMap.toDTO(route) as IRouteDTO)});

        } catch (error) {
            throw error;
        }
    }
}