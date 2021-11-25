import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable, Subject } from 'rxjs';
import { Order } from 'src/app/core/models/order';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class OrdersService {
  public collection$!: Observable<Order[]>;
  private url = environment.urlApi;

  constructor(private http: HttpClient) {
    this.collection$ = this.http.get<Order[]>(`${this.url}/orders`).pipe(
      map((tabJson) => {
        return tabJson.map((objetOrder) => new Order(objetOrder));
      })
    );
  }

  update(order: Order): Observable<Order> {
    return this.http.put<Order>(`${this.url}/orders/${order.id}`, order);
  }

  add(order: Order): Observable<any> {
    return this.http.post<any>(`${this.url}/orders`, order);
  }
}
