import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable, tap } from 'rxjs';
import { Order } from 'src/app/core/models/order';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class OrdersService {
  private collection$ = new BehaviorSubject<Order[]>([]);
  private url = environment.urlApi;

  constructor(private http: HttpClient) {}

  refresh(): void {
    this.http
      .get<Order[]>(`${this.url}/orders`)
      .pipe(
        map((tabJson) => {
          return tabJson.map((object) => new Order(object));
        })
      )
      .subscribe((list: Order[]) => {
        this.collection$.next(list);
      });
  }

  getAll(): BehaviorSubject<Order[]> {
    return this.collection$;
  }

  getById(id: Number): Observable<Order> {
    return this.http.get<Order>(`${this.url}/orders/${id}`);
  }

  add(order: Order): Observable<any> {
    return this.http.post<any>(`${this.url}/orders`, order);
  }

  update(order: Order): Observable<Order> {
    return this.http.put<Order>(`${this.url}/orders/${order.id}`, order);
  }

  delete(id: Number): Observable<any> {
    return this.http
      .delete<any>(`${this.url}/orders/${id}`)
      .pipe(tap(() => this.refresh()));
  }
}
