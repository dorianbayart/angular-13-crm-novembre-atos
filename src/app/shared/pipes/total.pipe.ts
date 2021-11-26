import { typeSourceSpan } from '@angular/compiler';
import { Pipe, PipeTransform } from '@angular/core';
import { Client } from 'src/app/core/models/client';
import { Order } from 'src/app/core/models/order';

@Pipe({
  name: 'total',
})
export class TotalPipe implements PipeTransform {
  transform(obj: Order | Client, ttc?: boolean): number {
    return ttc ? obj.totalTTC() : obj.totalHT();
  }
}
