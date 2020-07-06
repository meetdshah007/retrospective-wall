import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardComponent } from './card.component';
import { Card } from '../../models/card';

describe('CardComponent', () => {
  let component: CardComponent;
  let componentEl: HTMLElement;
  let fixture: ComponentFixture<CardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardComponent);
    component = fixture.debugElement.componentInstance;
    componentEl = fixture.debugElement.nativeElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should receive card description`, () => {
    const cardData: Card = {
      id: 1111,
      desc: 'Test description'
    };
    component.data = cardData;
    fixture.detectChanges();
    expect(component.data).toBe(cardData);
  });

  it(`should render card description as per data`, () => {
    const cardData: Card = {
      id: 1111,
      desc: 'Test description'
    };
    component.data = cardData;
    fixture.detectChanges();
    expect(componentEl.querySelector('div.card-body').textContent).toContain('Test description');
  });
});
