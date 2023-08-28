import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//import { CurrencyComponent } from './currency/currency.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';  

@NgModule({
  declarations: [
    AppComponent
    //CurrencyComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    //tulasi
    NgxCurrencyModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }