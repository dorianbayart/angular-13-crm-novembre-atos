import { Component,OnChanges,OnDestroy,OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Order } from 'src/app/core/models/order';
import { VersionService } from 'src/app/core/services/version.service';
import { OrderService } from '../services/order.service';

@Component({
  selector: 'app-page-list-orders',
  templateUrl: './page-list-orders.component.html',
  styleUrls: ['./page-list-orders.component.scss']
})
export class PageListOrdersComponent implements OnInit, OnDestroy {
  public titrePage!:  string;
  // public collection!: Order[];
  public collection$!: Observable<Order[]>;
  public headers: string[];

  private subscription!: Subscription;

  constructor(
    private orderService: OrderService,
    private versionService: VersionService
  ) {
    console.log('Page List ---New Instance');
    this.titrePage = 'List Order';
    this.headers = ["Client","TjmHt","NbJours","Tva", "TotalHT", "TotalTTC", "Type","State"];

    this.collection$ = this.orderService.collection$;

    // this.orderService.collection$.subscribe( 
    //   {
    //     next: (data) => {
    //       console.log(data);
          
    //       this.collection = data
    //     },
    //     error: (err) => console.error(err),
    //     complete: () => console.info('Le traitement est terminé')
    //   }
    // );

    this.subscription = this.versionService.getBehaveNumVersion().subscribe(
      (data) => console.log('****Behav : ',data )
    )
  }

  ngOnInit(): void {

  }

  ngOnDestroy(): void {
    // Unsubscribe de nos flux de données provenant d'observables chaud
    this.subscription.unsubscribe();
  } 

  // public total(val: number, coef: number, tva?: number): number {
  //   console.log('*****Call Method total')
  //   if(tva) {
  //     return val * coef * (1 + tva / 100);
  //   }
  //   return val * coef;
  // }

}
