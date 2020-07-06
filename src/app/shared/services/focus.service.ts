import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FocusService {

  /**
   * Utility Subject with default value null.
   */
  public focusEl$: BehaviorSubject<number> = new BehaviorSubject(null);

  constructor() { }

  markActive(id: number) {
    this.focusEl$.next(id);
  }
}
