import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ComprasModule } from './compras/compras.module';

@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    ComprasModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
