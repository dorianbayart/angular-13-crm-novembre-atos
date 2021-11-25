import { Directive, HostBinding, Input, OnChanges } from '@angular/core';

@Directive({
  selector: '[appState]'
})
export class StateDirective implements OnChanges {
  @Input('appState') state!: string;
  // [appState] => this.state
  
  //@Input() state!: string;
  // [state] => this.state

  //@Input() appState!: string;
  // [appState] => this.appState

  @HostBinding('class') elementClass!: string;

  constructor() { }
  
  ngOnChanges(): void {
    console.log('directive : ', this.state);
    this.elementClass = `state-${this.state.toLowerCase()}`;
  }

}
