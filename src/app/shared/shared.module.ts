/**
 * Angular core library imports.
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

/**
 * Importing 3rd party libraries
 */
import { ModalModule } from 'ngx-bootstrap/modal';

/**
 * Importing Custom components
 */
import { CardComponent } from './components/card/card.component';
import { SectionComponent } from './components/section/section.component';
import { CardFormModalComponent } from './components/card-form-modal/card-form-modal.component';


const components = [
  CardComponent,
  SectionComponent,
  CardFormModalComponent
];

@NgModule({
  declarations: [
    ...components
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ModalModule.forRoot()
  ],
  exports: [
    ...components
  ],
  entryComponents: [
    CardFormModalComponent
  ]
})
export class SharedModule { }
