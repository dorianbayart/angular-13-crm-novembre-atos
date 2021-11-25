import { Component,OnDestroy,OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { StateOrder } from 'src/app/core/enums/state-order';
import { Order } from 'src/app/core/models/order';
import { OrderService } from '../services/order.service';

@Component({
  selector: 'app-page-list-orders',
  templateUrl: './page-list-orders.component.html',
  styleUrls: ['./page-list-orders.component.scss']
})
export class PageListOrdersComponent implements OnInit, OnDestroy {
  public titrePage!:  string;
  public headers: string[];
  public stateOrder = StateOrder;
  
  public collection$!: Observable<Order[]>;

  constructor(
    private orderService: OrderService) {
    console.log('Page List ---New Instance');
    this.titrePage = 'List Order';
    this.headers = ["Client","TjmHt","NbJours","Tva", "TotalHT", "TotalTTC", "Type","State", ''];

    this.collection$ = this.orderService.collection$;
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    // Unsubscribe de nos flux de données provenant d'observables chaud

  } 

  onChangeUpdateState(item: Order, event: any): void {
    item.state = event.target.value;
    this.orderService.update(item).subscribe(
      (updatedOrder) => {
        item.state = updatedOrder.state;
      }
    );
  }
}
