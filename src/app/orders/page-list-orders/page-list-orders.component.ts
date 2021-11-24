import { Component, Input, OnChanges, OnDestroy, OnInit } from '@angular/core';
import { StateOrder } from 'src/app/core/enums/state-order';
import { Order } from 'src/app/core/models/order';
import { OrdersService } from '../services/orders.service';

@Component({
  selector: 'app-page-list-orders',
  templateUrl: './page-list-orders.component.html',
  styleUrls: ['./page-list-orders.component.scss'],
})
export class PageListOrdersComponent implements OnInit, OnChanges, OnDestroy {
  titrePage!: string;

  constructor(private ordersService: OrdersService) {
    this.titrePage = 'List Order';

    this.ordersService.collection$.subscribe({
      next: (orders) => console.log(orders),
      error: (e) => console.error('PageListError', e),
      complete: () => console.info('Complete'),
    });
  }

  ngOnInit(): void {
    console.log('PageList --- onInit');
  }

  ngOnChanges(): void {
    console.log('PageList --- onChanges');
  }

  ngOnDestroy(): void {
    console.log('PageList --- onDestroy');
  }

  changeTitle(): void {
    this.titrePage = Math.random().toString();
  }
}
