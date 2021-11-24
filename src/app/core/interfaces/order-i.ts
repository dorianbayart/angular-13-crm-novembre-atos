import { StateOrder } from "../enums/state-order";

export interface OrderI {
  "tjmHt": number;
  "ngJours": number;
  "tva": number;
  "state": StateOrder;
  "typePresta": string;
  "client": string;
  "comment": string;
  "id": number;
}
