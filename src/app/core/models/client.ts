import { StateClient } from '../enums/state-client';

export class Client {
  tva = 20;
  totalCaHt = 0;
  state = StateClient.ACTIVE;
  name!: string;
  comment!: string;
  id!: number;

  constructor(obj?: Partial<Client>) {
    if (obj) {
      Object.assign(this, obj);
    }
  }

  totalHT(): number {
    return this.totalCaHt;
  }

  totalTTC(): number {
    return this.totalCaHt * (1 + this.tva / 100);
  }
}
