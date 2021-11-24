import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class VersionService {
  private version$ = new BehaviorSubject(0);

  constructor() {}

  version(): BehaviorSubject<number> {
    return this.version$;
  }

  increment(): void {
    this.version$.next(this.version$.value + 1);
  }
}
