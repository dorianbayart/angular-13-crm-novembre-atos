import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageAddClientComponent } from './page-add-client/page-add-client.component';
import { PageEditClientComponent } from './page-edit-client/page-edit-client.component';
import { PageListClientsComponent } from './page-list-clients/page-list-clients.component';

const routes: Routes = [
  { path: '', component: PageListClientsComponent },
  { path: 'add', component: PageAddClientComponent },
  { path: 'edit', component: PageEditClientComponent },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientsRoutingModule { }
