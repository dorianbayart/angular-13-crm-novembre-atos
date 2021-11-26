import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Order } from 'src/app/core/models/order';
import { OrdersService } from '../services/orders.service';

@Component({
  selector: 'app-page-edit-order',
  templateUrl: './page-edit-order.component.html',
  styleUrls: ['./page-edit-order.component.scss'],
})
export class PageEditOrderComponent implements OnInit {
  order!: Order;
  order$!: Observable<Order>;

  constructor(
    private ordersService: OrdersService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((data) => {
      const orderId = Number(data.get('id'));
      this.order$ = this.ordersService.getById(orderId);
    });

    this.order$.subscribe(console.log);
  }

  onSubmitEditOrder(order: Order): void {
    this.ordersService.update(order).subscribe(() => {
      this.router.navigate(['orders']);
    });
  }
}
