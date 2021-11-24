import { Component, OnInit } from '@angular/core';
import { StateOrder } from 'src/app/core/enums/state-order';
import { Order } from 'src/app/core/models/order';
import { OrderService } from '../services/order.service';

@Component({
  selector: 'app-page-list-orders',
  templateUrl: './page-list-orders.component.html',
  styleUrls: ['./page-list-orders.component.scss']
})
export class PageListOrdersComponent implements OnInit {

  constructor(private orderService: OrderService) {
    this.orderService.collection$.subscribe( 
      {
        next: (data) => console.log(data),
        error: (err) => console.error(err),
        complete: () => console.info('Le traitement est terminé')
      }
    );
  }

  ngOnInit(): void {
  
  }

}
