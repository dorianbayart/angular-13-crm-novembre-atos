import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { Order } from 'src/app/core/models/order';

@Component({
  selector: 'app-table-light',
  templateUrl: './table-light.component.html',
  styleUrls: ['./table-light.component.scss']
})
export class TableLightComponent implements OnInit, OnChanges {
  @Input() public headers!: string[];
  @Input() public data!: Order[];

  constructor() {
    console.log('new Instance');
    console.log(this.headers);
    console.log(this.data);
  }

  ngOnInit(): void {
    console.log('onInit');
    console.log(this.headers);
    console.log(this.data);
  }

  ngOnChanges(): void {
    console.log('onChange');
    console.log(this.headers);
    console.log(this.data);
    
  }



}
