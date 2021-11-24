import { Component, OnInit } from '@angular/core';
import { StateOrder } from 'src/app/core/enums/state-order';
import { Order } from 'src/app/core/models/order';

@Component({
  selector: 'app-page-list-orders',
  templateUrl: './page-list-orders.component.html',
  styleUrls: ['./page-list-orders.component.scss']
})
export class PageListOrdersComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const test1 = new Order();
    console.log(test1);

    let test2 = new Order({
      tjmHt : 1200,
      nbJours : 1,
      tva : 20,
      state : StateOrder.OPTION,
      typePresta: 'Formation',
      client: 'Cap',
      comment: 'idjeijde',
      id: 0
    })
    console.log(test2);
  }

}
