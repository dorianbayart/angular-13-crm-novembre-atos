import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Order } from 'src/app/core/models/order';
import { OrdersService } from '../services/orders.service';

@Component({
  selector: 'app-page-add-order',
  templateUrl: './page-add-order.component.html',
  styleUrls: ['./page-add-order.component.scss'],
})
export class PageAddOrderComponent implements OnInit {
  initOrder: Order;

  constructor(private ordersService: OrdersService, private router: Router) {
    this.initOrder = new Order();
  }

  ngOnInit(): void {}

  onSubmitNewOrder(form: Order): void {
    this.ordersService.add(form).subscribe(() => {
      this.router.navigate(['orders']);
    });
  }
}
