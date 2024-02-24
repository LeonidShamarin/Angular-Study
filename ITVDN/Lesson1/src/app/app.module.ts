import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';

import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { HelloComponent } from './hello/hello.component';

@NgModule({
  declarations: [AppComponent, FirstComponent, SecondComponent, HelloComponent],
  imports: [BrowserModule, CommonModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
