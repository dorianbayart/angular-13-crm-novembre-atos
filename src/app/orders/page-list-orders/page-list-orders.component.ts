import { Route } from '@angular/compiler/src/core';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { StateOrder } from 'src/app/core/enums/state-order';
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
  stateOrder = StateOrder;

  constructor(private ordersService: OrdersService, private router: Router) {
    this.titrePage = 'List Order';
    this.headers = [
      'Action',
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
  }

  ngOnInit(): void {}

  ngOnDestroy(): void {}

  changeTitle(): void {
    this.titrePage = Math.random().toString();
  }

  onClicGoEdit(orderId: number): void {
    this.router.navigate(['orders', 'edit', orderId]);
  }

  onChangeUpdateState(item: Order, event: any): void {
    this.ordersService
      .update({ ...item, state: event.target.value } as Order)
      .subscribe((updatedOrder) => (item.state = updatedOrder.state));
  }

  onClicDelete(orderId: number): void {
    this.ordersService.delete(orderId).subscribe(console.log);
  }
}
