import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ui',
  templateUrl: './ui.component.html',
  styleUrls: ['./ui.component.scss'],
})
export class UiComponent implements OnInit {
  isClosed: boolean = false;
  iconIncrement: number = 0;

  constructor() {}

  ngOnInit(): void {}

  toggleNav(): void {
    this.isClosed = !this.isClosed;
  }

  increment(): void {
    this.iconIncrement = (this.iconIncrement + 1) % 4;
    console.log(this.iconIncrement);
  }
}
