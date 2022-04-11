import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from '../card/card.module';
import { CatalogComponent } from './catalog.component';

@NgModule({
  declarations: [CatalogComponent],
  imports: [
    CommonModule,
    CardModule
  ],
  exports: [CatalogComponent]
})
export class CatalogModule { }
