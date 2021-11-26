import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable, tap } from 'rxjs';
import { Client } from '../core/models/client';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ClientsService {
  private collection$ = new BehaviorSubject<Client[]>([]);
  private url = environment.urlApi;

  constructor(private http: HttpClient) {}

  refresh(): void {
    this.http
      .get<Client[]>(`${this.url}/clients`)
      .pipe(
        map((tabJson) => {
          return tabJson.map((object) => new Client(object));
        })
      )
      .subscribe((list: Client[]) => {
        this.collection$.next(list);
      });
  }

  getAll(): BehaviorSubject<Client[]> {
    return this.collection$;
  }

  getById(clientId: number): Observable<Client> {
    return this.http.get<Client>(`${this.url}/clients/${clientId}`);
  }

  add(client: Client): Observable<any> {
    return this.http.post<any>(`${this.url}/clients`, client);
  }

  update(client: Client) {
    return this.http.put<Client>(`${this.url}/clients/${client.id}`, client);
  }

  delete(clientId: number): Observable<any> {
    return this.http
      .delete<any>(`${this.url}/clients/${clientId}`)
      .pipe(tap(() => this.refresh()));
  }
}
