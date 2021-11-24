import { Component,OnInit } from '@angular/core';
import { OrderService } from '../services/order.service';

@Component({
  selector: 'app-page-list-orders',
  templateUrl: './page-list-orders.component.html',
  styleUrls: ['./page-list-orders.component.scss']
})
export class PageListOrdersComponent implements OnInit {
  public titrePage!:  string;

  constructor(private orderService: OrderService) {
    console.log('Page List ---New Instance');
    this.titrePage = 'List Order';
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
