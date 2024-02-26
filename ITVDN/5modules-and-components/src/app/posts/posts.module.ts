import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EducationITVDNComponent, ProgramingComponent, TripsComponent } from './index';
    
@NgModule({
  declarations: [
    EducationITVDNComponent,
    ProgramingComponent,
    TripsComponent],
  imports: [
    CommonModule
  ]
})
export class PostsModule { }
