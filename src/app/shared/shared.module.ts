import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './components/card/card.component';
import { SectionComponent } from './components/section/section.component';
import { CardFormModalComponent } from './components/card-form-modal/card-form-modal.component';
import { FocusComponent } from './services/focus/focus.component';



@NgModule({
  declarations: [CardComponent, SectionComponent, CardFormModalComponent, FocusComponent],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
