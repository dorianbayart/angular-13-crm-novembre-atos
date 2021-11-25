import { Pipe, PipeTransform } from '@angular/core';
import { Order } from 'src/app/core/models/order';

@Pipe({
  name: 'total',
})
export class TotalPipe implements PipeTransform {
  transform(order: Order, ttc?: boolean): number {
    return ttc ? order.totalTTC() : order.totalHT();
  }
}
