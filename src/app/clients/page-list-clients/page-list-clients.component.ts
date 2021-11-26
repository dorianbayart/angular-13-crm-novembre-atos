import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { StateClient } from 'src/app/core/enums/state-client';
import { Client } from 'src/app/core/models/client';
import { ClientsService } from '../clients.service';

@Component({
  selector: 'app-page-list-clients',
  templateUrl: './page-list-clients.component.html',
  styleUrls: ['./page-list-clients.component.scss'],
})
export class PageListClientsComponent implements OnInit {
  titrePage!: string;
  collection$!: BehaviorSubject<Client[]>;
  headers: string[];
  stateClient = StateClient;

  constructor(private clientsService: ClientsService, private router: Router) {
    this.titrePage = 'List Clients';
    this.headers = [
      'Action',
      'Name',
      'totalCaHt',
      'Tva',
      'TotalCaTTC',
      'State',
    ];

    this.collection$ = this.clientsService.getAll();
    this.clientsService.refresh();
  }

  ngOnInit(): void {}

  onChangeUpdateState(item: Client, event: any): void {
    this.clientsService
      .update({ ...item, state: event.target.value } as Client)
      .subscribe((updatedClient) => (item.state = updatedClient.state));
  }

  onClicGoEdit(clientId: number): void {
    this.router.navigate(['clients', 'edit', clientId]);
  }

  onClicDelete(clientId: number): void {
    this.clientsService.delete(clientId).subscribe(console.log);
  }
}
