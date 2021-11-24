import {
  Component,
  DoCheck,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
} from '@angular/core';

@Component({
  selector: 'app-template-full-width',
  templateUrl: './template-full-width.component.html',
  styleUrls: ['./template-full-width.component.scss'],
})
export class TemplateFullWidthComponent
  implements OnInit, OnChanges, OnDestroy
{
  @Input('titreAttribut') title!: string;

  constructor() {}

  ngOnInit(): void {
    console.log('TemplateFullWidth --- onInit');
    console.log('TemplateFullWidth --- onInit', this.title);
  }

  ngOnChanges(): void {
    console.log('TemplateFullWidth --- onChanges');
    console.log('TemplateFullWidth --- onChanges', this.title);
  }

  ngOnDestroy(): void {
    console.log('TemplateFullWidth --- onDestroy');
    console.log('TemplateFullWidth --- onDestroy', this.title);
  }
}
