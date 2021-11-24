import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { Order } from 'src/app/core/models/order';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  // Déclaré une prop de notre service qui représente un flux de données 
  public collection$!: Observable<Order[]>;
  private url = environment.urlApi;

  // ----
  private obs = new Observable( fluxData => fluxData.next(Math.random())); 
  private sub = new Subject<string>();
  private behave = new BehaviorSubject<string>('');
  // ----

  constructor(private http: HttpClient) { 
    // Définition de la provenance des données grâce au call API
    console.log('service order instanced');
    this.collection$ = this.http.get<Order[]>(`${this.url}/orders`);

    // ----
    this.obs.subscribe( data => console.log('Observer 1 : ', data));
    this.obs.subscribe( data => console.log('Observer 2 : ', data));

    this.sub.subscribe( data => console.log('Subject Observer 1 : ', data));
    this.sub.next('Envoie de la 1ère Newsletter');
    this.sub.next('Envoie de la 2e Newsletter');
    this.sub.subscribe( data => console.log('Subject Observer 2 : ', data));
    this.sub.next('Envoie de la 3e Newsletter');

    /**
     * Component1 et component2 
     * s'abonnent à un subject()
     * 
     * via ce subject notre service va transmettre la liste 
     * des orders à tout les components qui y sont abonnés 
     */

    // recherche sur le fonctionnement behaviorSubject
    // tester la même manière que ce qu'on vient de faire
    this.behave.subscribe( data => console.log('Behave Observer 1 : ', data));
    this.behave.next('Envoie de ma nouvelle vidéo');
    this.behave.next('Envoie de ma 2e vidéo');
    this.behave.subscribe( data => console.log('Behave Observer 2 : ', data));
    this.behave.next('Envoie de ma 3e vidéo');
    // ----

  }
}
