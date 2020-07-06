import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BsModalRef } from 'ngx-bootstrap/modal';

import { CardFormModalComponent } from './card-form-modal.component';
import { RetroBoardImports } from '../../../testing/retro-board-imports';

describe('CardFormModalComponent', () => {
  let component: CardFormModalComponent;
  let fixture: ComponentFixture<CardFormModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardFormModalComponent ],
      imports: [
        ...RetroBoardImports
      ],
      providers: [
        { provide: BsModalRef, value: BsModalRef }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardFormModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
