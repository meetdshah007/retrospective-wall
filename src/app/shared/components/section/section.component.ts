import { Component, Input } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { take } from 'rxjs/operators';

import { Card } from '../../models/card';
import { CardFormModalComponent } from '../card-form-modal/card-form-modal.component';
import { Section } from '../../models/section';
import { FocusService } from '../../services/focus.service';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.scss']
})
export class SectionComponent {

  /**
   * Passing the section headings from the board.
   */
  @Input() data: Section;

  /**
   * Array of the cards to display on the screen.
   * List of all the cards consist of the section.
   */
  cards: any[] = [];

  constructor(
    private modalService: BsModalService,
    private focusService: FocusService
  ) { }

  /**
   * Utility method that adds the card in the section.
   */
  onAdd() {
    const initialState = {
      btnTitle: 'Create',
      cardData: null
    };
    this.showModal(initialState);
    this.setFocus(null);
  }

  /**
   * Utility method that updates the card description.
   * @param card Card type object consist of {id: number and desc: string} values. mandatory parameter.
   */
  onEdit(card: Card) {
    const initialState = {
      btnTitle: 'Update',
      cardData: card
    };
    this.showModal(initialState);
    this.setFocus(card.id);
  }

  /**
   * Utility method that presents the modal on the screen.
   * @param initialState data given by onAdd, onEdit methods.
   */
  showModal(initialState) {
    const bsModalRef = this.modalService.show(CardFormModalComponent, { initialState });
    bsModalRef.content.closeBtnName = 'Close';
    const form = bsModalRef.content.cardForm;
    this.modalService.onHide.pipe(
      take(1)
    ).subscribe(resp => {
      if (form.valid && bsModalRef.content.formSubmitted) {
        const value = form.value;
        let index = this.cards.findIndex(c => c.id === value.id);
        if (index === -1) {
          index = this.cards.length;
        }
        this.cards[index] = value;
        this.setFocus(value.id);
      }
    });
  }

  /**
   * Utility method to remove and select the focus on the card.
   * Based on the user interaction we set and remove the focus.
   * @param id Optional value. based on given id focus will be set.
   */
  setFocus(id?: number): void {
    this.focusService.markActive(id);
  }

}
