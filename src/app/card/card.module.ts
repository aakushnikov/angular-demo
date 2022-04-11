import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card.component';
import { CutterPipe } from '../pipes/cutter.pipe';
import { NumericPipe } from '../pipes/numeric.pipe';

@NgModule({
  declarations: [CardComponent, CutterPipe, NumericPipe],
  imports: [CommonModule],
  exports: [CardComponent],
})
export class CardModule { }
