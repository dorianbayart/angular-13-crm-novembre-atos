import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Client } from 'src/app/core/models/client';
import { ClientsService } from '../clients.service';

@Component({
  selector: 'app-page-edit-client',
  templateUrl: './page-edit-client.component.html',
  styleUrls: ['./page-edit-client.component.scss'],
})
export class PageEditClientComponent implements OnInit {
  client!: Client;
  client$!: Observable<Client>;

  constructor(
    private clientsService: ClientsService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((data) => {
      const clientId = Number(data.get('id'));
      this.client$ = this.clientsService.getById(clientId);
    });

    this.client$.subscribe(console.log);
  }

  onSubmitEditClient(client: Client): void {
    this.clientsService.update(client).subscribe(() => {
      this.router.navigate(['clients']);
    });
  }
}
