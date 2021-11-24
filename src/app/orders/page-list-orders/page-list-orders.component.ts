import { Component, OnInit } from '@angular/core';
import { StateOrder } from 'src/app/core/enums/state-order';
import { Order } from 'src/app/core/models/order';
import { OrdersService } from '../services/orders.service';

@Component({
  selector: 'app-page-list-orders',
  templateUrl: './page-list-orders.component.html',
  styleUrls: ['./page-list-orders.component.scss'],
})
export class PageListOrdersComponent implements OnInit {
  constructor(private ordersService: OrdersService) {
    this.ordersService.collection$.subscribe({
      next: (orders) => console.log(orders),
      error: (e) => console.error('PageListError', e),
      complete: () => console.info('Complete')
    });
  }

  ngOnInit(): void {}
}
