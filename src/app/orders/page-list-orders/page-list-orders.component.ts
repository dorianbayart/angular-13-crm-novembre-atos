import { Component,OnInit } from '@angular/core';
import { Order } from 'src/app/core/models/order';
import { OrderService } from '../services/order.service';

@Component({
  selector: 'app-page-list-orders',
  templateUrl: './page-list-orders.component.html',
  styleUrls: ['./page-list-orders.component.scss']
})
export class PageListOrdersComponent implements OnInit {
  public titrePage!:  string;
  public collection!: Order[];
  public headers: string[];

  constructor(private orderService: OrderService) {
    console.log('Page List ---New Instance');
    this.titrePage = 'List Order';
    this.headers = ["Client","TjmHt","NbJours","Tva","Type","State"];
    
    this.orderService.collection$.subscribe( 
      {
        next: (data) => {this.collection = data},
        error: (err) => console.error(err),
        complete: () => console.info('Le traitement est terminé')
      }
    );
  }

  ngOnInit(): void {

  }

}
