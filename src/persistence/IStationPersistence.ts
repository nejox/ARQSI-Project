export interface IStationPersistence {
    stationId: string;
    name: string;
    shortName: string;
    lat: string;
    long: string;
    isDepot: boolean;
    isReliefPoint: boolean;
    capacity: number;
}