import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu.component';
import { ToggleModule } from '../toggle/toggle.module';



@NgModule({
  declarations: [MenuComponent],
  imports: [CommonModule, ToggleModule],
  exports: [MenuComponent]
})
export class MenuModule { }
