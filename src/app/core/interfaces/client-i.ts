import { StateClient } from "../enums/state-client";

export interface ClientI {
  "name": string;
  "tva": number;
  "state": StateClient;
  "totalCaHt": number;
  "comment": string;
  "id": number;
  totalCaTTC(): number;

}
