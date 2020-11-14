import { LineRoute } from "../domain/lineRoute";

export default interface ILineDTO {
    lineId: string;
    name: string;
    description: string;
    color: string;
}