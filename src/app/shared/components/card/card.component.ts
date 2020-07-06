import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Card } from '../../models/card';
import { FocusService } from '../../services/focus.service';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit, OnDestroy {

  /**
   * Card description and id to display on the HTML.
   */
  @Input() data: Card;

  /**
   * Style of the card.
   * i.e. 'border-primary' Supports all the bootstrap styleguides.
   */
  @Input() cardType: string;

  activeType: string;
  markActive: boolean = false;
  destroy$: Subject<any> = new Subject();

  constructor(
    private focusService: FocusService
  ) { }

  ngOnInit() {
    this.focusService.focusEl$
      .pipe(takeUntil(this.destroy$))
      .subscribe(activeId => {
        this.markActive = (this.data && this.data.id === activeId);
        this.applyActiveClass();
      });
  }

  /**
   * Utility Method to convert the activeClass name from cardType.
   */
  convertActiveType(): string {
    if (this.cardType) {
      return this.cardType.replace('border', 'bg');
    }
    return '';
  }

  /**
   * Active class changer.
   * if markActive is true we apply focus. else we apply the cardType.
   */
  applyActiveClass() {
    this.activeType = this.cardType || '';
    if (this.markActive) {
      this.activeType = this.convertActiveType();
    }
  }

  /**
   * Lifecycle hook to clear the event listeners.
   */
  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }

}
