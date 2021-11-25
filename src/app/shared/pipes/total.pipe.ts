import { Pipe, PipeTransform } from '@angular/core';
import { Order } from 'src/app/core/models/order';

@Pipe({
  name: 'total'
})
export class TotalPipe implements PipeTransform {

  transform(order: Order, ttc?: boolean): number {
    if(ttc) {
      return order.totalTTC();
    }
    return order.totalHT();

    //return ttc ? order.totalTTC() : order.totalHT();
  }

}
