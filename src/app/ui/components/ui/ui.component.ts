import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ui',
  templateUrl: './ui.component.html',
  styleUrls: ['./ui.component.scss']
})
export class UiComponent implements OnInit {

  isClosed: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  toggleNav(): void {
    this.isClosed = !this.isClosed;
  }

}
