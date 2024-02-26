import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './components/main-page/main-page.component';
import { ContactsPageComponent } from './components/contacts-page/contacts-page.component';
import { Page404Component } from './components/page404/page404.component';
import { AboutUsComponent } from './components/about-us/about-us.component';

import { SpecialityRouteModule } from './components/speciality/speciality-route/speciality-route.module';
import { EducationModule } from './components/education/education.module';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    ContactsPageComponent,
    Page404Component,
    AboutUsComponent
  ],
  imports: [
    BrowserModule,
    // Порядок импортов модулей влияет на работу проекта!!!
    // импорт пункта Специальности
    SpecialityRouteModule,
    // импорт пунта Обучение у нас
    EducationModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
