import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import localeRu from '@angular/common/locales/ru';

import { AppComponent } from './app.component';
import { CardModule } from './card/card.module';
import { registerLocaleData } from '@angular/common';
import { CatalogModule } from './catalog/catalog.module';
import { MenuModule } from './menu/menu.module';
import { ToggleComponent } from './toggle/toggle.component';
import { ToggleModule } from './toggle/toggle.module';

registerLocaleData(localeRu);

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    CardModule,
    CatalogModule,
    MenuModule,
    ToggleModule,
  ],
  providers: [{
    provide: LOCALE_ID,
    useValue: 'ru'
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
