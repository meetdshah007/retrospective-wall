import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoardComponent } from './board.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [BoardComponent],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [BoardComponent]
})
export class BoardModule { }
