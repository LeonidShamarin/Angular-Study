import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardPhoneComponent } from './card-phone/card-phone.component';
import { CardNotebookComponent } from './card-notebook/card-notebook.component';
import { CardTVComponent } from './card-tv/card-tv.component';


@NgModule({
  declarations: [
    CardPhoneComponent,
    CardNotebookComponent,
    CardTVComponent],
  imports: [
    CommonModule
  ]
})
export class ElectronicsModule { }
