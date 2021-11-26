import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Client } from 'src/app/core/models/client';
import { ClientsService } from '../clients.service';

@Component({
  selector: 'app-page-add-client',
  templateUrl: './page-add-client.component.html',
  styleUrls: ['./page-add-client.component.scss'],
})
export class PageAddClientComponent implements OnInit {
  initClient: Client;

  constructor(private router: Router, private clientsService: ClientsService) {
    this.initClient = new Client();
  }

  ngOnInit(): void {}

  onSubmitNewClient(form: any): void {
    this.clientsService.add(form).subscribe(() => {
      this.router.navigate(['clients']);
    });
  }
}
