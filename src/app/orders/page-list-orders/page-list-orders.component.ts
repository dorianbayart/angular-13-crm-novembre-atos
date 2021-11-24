import { Component, OnChanges, OnDestroy, OnInit } from '@angular/core';
import { StateOrder } from 'src/app/core/enums/state-order';
import { Order } from 'src/app/core/models/order';
import { OrderService } from '../services/order.service';

@Component({
  selector: 'app-page-list-orders',
  templateUrl: './page-list-orders.component.html',
  styleUrls: ['./page-list-orders.component.scss']
})
export class PageListOrdersComponent implements OnInit, OnChanges, OnDestroy {
  public titrePage!: {name: string};

  constructor(private orderService: OrderService) {
    console.log('Page List ---New Instance');
    this.titrePage = {name: 'List Order'};
    this.orderService.collection$.subscribe( 
      {
        next: (data) => console.log(data),
        error: (err) => console.error(err),
        complete: () => console.info('Le traitement est terminé')
      }
    );
  }

  ngOnInit(): void {
    console.log('Page List ---OnInit');
    // Liaison des propriétés de la class avec le template
  }

  public changeTitle(): void {
    this.titrePage = {name: "Encore un super titre !!"};
  }

  ngOnChanges(): void {
    console.log('Page List ---OnChanges');
  }
  
  ngOnDestroy(): void {
    console.log('Page List ---OnDestroy');
  }

}
