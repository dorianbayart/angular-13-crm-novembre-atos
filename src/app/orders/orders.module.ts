import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrdersRoutingModule } from './orders-routing.module';
import { PageListOrdersComponent } from './page-list-orders/page-list-orders.component';
import { PageAddOrderComponent } from './page-add-order/page-add-order.component';
import { PageEditOrderComponent } from './page-edit-order/page-edit-order.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    PageListOrdersComponent,
    PageAddOrderComponent,
    PageEditOrderComponent,
  ],
  imports: [CommonModule, OrdersRoutingModule, SharedModule],
})
export class OrdersModule {}
