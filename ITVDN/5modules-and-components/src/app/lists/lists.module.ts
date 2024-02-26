import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UlComponent, OlComponent, DlComponent} from './index';

@NgModule({
  declarations: [
    UlComponent,
    OlComponent,
    DlComponent],
  imports: [
    CommonModule
  ]
})
export class ListsModule { }
