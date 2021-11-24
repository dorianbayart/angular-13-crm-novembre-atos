import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { Order } from 'src/app/core/models/order';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class OrdersService {
  public collection$!: Observable<Order[]>;
  private url = environment.urlApi;

  // ----
  private obs = new Observable((fluxData) => fluxData.next(Math.random()));
  private sub = new Subject();
  private bSub = new BehaviorSubject(123);
  // ----

  constructor(private http: HttpClient) {
    this.collection$ = this.http.get<Order[]>(`${this.url}/orders`);

    // ----
    this.obs.subscribe((data) => console.log('Observer 1: ', data));
    this.obs.subscribe((data) => console.log('Observer 2: ', data));

    this.sub.subscribe((data) => console.log('Subject Observer 1: ', data));
    this.sub.subscribe((data) => console.log('Subject Observer 2: ', data));
    this.sub.next('Envoi de la 1ère Newsletter');

    this.bSub.subscribe((data) => console.log('BehaviorSubject Observer 1: ', data));
    this.bSub.subscribe((data) => console.log('BehaviorSubject Observer 2: ', data));
    this.bSub.next(456);
    this.bSub.subscribe((data) => console.log('BehaviorSubject Observer 3: ', data));
    this.bSub.next(789);

    // ----
  }
}
