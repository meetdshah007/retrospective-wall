import { By } from '@angular/platform-browser';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionComponent } from './section.component';
import { CardComponent } from '../card/card.component';
import { RetroBoardImports } from '../../../testing/retro-board-imports';

describe('SectionComponent', () => {
  let component: SectionComponent;
  let componentEl: HTMLElement;
  let fixture: ComponentFixture<SectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SectionComponent, CardComponent],
      imports: [
        ...RetroBoardImports
      ]
    })
      .compileComponents();
    fixture = TestBed.createComponent(SectionComponent);
    component = fixture.debugElement.componentInstance;
    componentEl = fixture.debugElement.nativeElement;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render Add link & title', () => {
    expect(componentEl.querySelector('h5').textContent).toBe('');
    expect(componentEl.querySelector('button.btn-link').textContent).toBe('+ Add');
  });

  it('should display modal on clicking the Add link', () => {
    const spier = spyOn(component, 'showModal');
    const addBtnEl = fixture.debugElement.query(By.css('button.btn-link'));
    addBtnEl.triggerEventHandler('click', null);
    fixture.detectChanges();
    expect(spier).toHaveBeenCalled();
  });
});
