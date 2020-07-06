import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionComponent } from './section.component';
import { CardComponent } from '../card/card.component';
import { RetroBoardImports } from '../../../testing/retro-board-imports';

describe('SectionComponent', () => {
  let component: SectionComponent;
  let fixture: ComponentFixture<SectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SectionComponent, CardComponent ],
      imports: [
        ...RetroBoardImports
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should add card on mocking onAdd', ()=>{

  })
});
