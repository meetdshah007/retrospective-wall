import { Component, OnInit, Input } from '@angular/core';
import { Card } from '../../models/card';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  /**
   * Card description and id to display on the HTML.
   */
  @Input() data: Card;

  /**
   * Style of the card.
   * i.e. 'border-primary' Supports all the bootstrap styleguides.
   */
  @Input() cardType: string;

  constructor() { }

  ngOnInit() {
  }

}
