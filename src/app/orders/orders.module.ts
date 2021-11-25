import { DEFAULT_CURRENCY_CODE, NgModule } from '@angular/core';
import { OrdersRoutingModule } from './orders-routing.module';
import { PageListOrdersComponent } from './page-list-orders/page-list-orders.component';
import { PageAddOrderComponent } from './page-add-order/page-add-order.component';
import { PageEditOrderComponent } from './page-edit-order/page-edit-order.component';
import { SharedModule } from '../shared/shared.module';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    PageListOrdersComponent,
    PageAddOrderComponent,
    PageEditOrderComponent,
  ],
  imports: [CommonModule, OrdersRoutingModule, SharedModule],
  providers: [{ provide: DEFAULT_CURRENCY_CODE, useValue: 'EUR' }],
})
export class OrdersModule {}
