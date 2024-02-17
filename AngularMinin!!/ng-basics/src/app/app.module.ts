import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';

import { CardComponent } from './card/card.component';
import { FormComponent } from './form/form.component';
import { CardTestComponent } from './card-test/card-test.component';


@NgModule({
  declarations: [AppComponent, CardComponent, FormComponent, CardTestComponent],
  imports: [BrowserModule, CommonModule, FormsModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
