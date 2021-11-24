import { Component, Input, OnChanges, OnDestroy, OnInit } from '@angular/core';
import { StateOrder } from 'src/app/core/enums/state-order';
import { Order } from 'src/app/core/models/order';
import { OrdersService } from '../services/orders.service';

@Component({
  selector: 'app-page-list-orders',
  templateUrl: './page-list-orders.component.html',
  styleUrls: ['./page-list-orders.component.scss'],
})
export class PageListOrdersComponent implements OnInit {
  titrePage!: string;
  collection!: Order[];
  headers: string[];

  constructor(private ordersService: OrdersService) {
    this.titrePage = 'List Order';
    this.headers = ['Client', 'TjmHt', 'NbJours', 'Tva', 'Type', 'State'];

    this.ordersService.collection$.subscribe({
      next: (orders) => {
        this.collection = orders;
      },
      error: (e) => console.error('PageListError', e),
      complete: () => console.info('Complete'),
    });
  }

  ngOnInit(): void {}

  changeTitle(): void {
    this.titrePage = Math.random().toString();
  }
}
