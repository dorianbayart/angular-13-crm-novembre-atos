import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageListClientsComponent } from '../clients/page-list-clients/page-list-clients.component';
import { PageAddOrderComponent } from './page-add-order/page-add-order.component';
import { PageEditOrderComponent } from './page-edit-order/page-edit-order.component';
import { PageListOrdersComponent } from './page-list-orders/page-list-orders.component';

const routes: Routes = [
  { path: '', component: PageListOrdersComponent },
  { path: 'add', component: PageAddOrderComponent },
  { path: 'edit', component: PageEditOrderComponent },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrdersRoutingModule { }
