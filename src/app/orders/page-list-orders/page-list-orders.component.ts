import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Order } from 'src/app/core/models/order';
import { OrdersService } from '../services/orders.service';

@Component({
  selector: 'app-page-list-orders',
  templateUrl: './page-list-orders.component.html',
  styleUrls: ['./page-list-orders.component.scss'],
})
export class PageListOrdersComponent implements OnInit, OnDestroy {
  titrePage!: string;
  collection$!: Observable<Order[]>;
  headers: string[];

  private subscription!: Subscription;

  constructor(private ordersService: OrdersService) {
    this.titrePage = 'List Order';
    this.headers = [
      'Client',
      'TjmHt',
      'NbJours',
      'Tva',
      'TotalHT',
      'TotalTTC',
      'Type',
      'State',
    ];

    this.collection$ = this.ordersService.collection$;

    /*this.ordersService.collection$.subscribe({
      next: (orders) => {
        this.collection = orders;
      },
      error: (e) => console.error('PageListError', e),
      complete: () => console.info('Complete'),
    });*/
  }

  ngOnInit(): void {}

  ngOnDestroy(): void {}

  changeTitle(): void {
    this.titrePage = Math.random().toString();
  }
}
