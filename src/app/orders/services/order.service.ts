import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Order } from 'src/app/core/models/order';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  // Déclaré une prop de notre service qui représente un flux de données 
  public collection$!: Observable<Order[]>;
  private url = environment.urlApi;

  constructor(private http: HttpClient) { 
    // Définition de la provenance des données grâce au call API
    console.log('service order instanced');
    this.collection$ = this.http.get<Order[]>(`${this.url}/orders`);

    /**
     * Pour concatener des string
     * 'Hello ' + 'world !' => 'Hello world !'
     * const prenom = 'Jérémy';
     * `Hello ${prenom}` => 'Hello Jérémy'
     */
  }

  /**
   * fetch(url).then(response => console.log(response))
   * 
   */
}
