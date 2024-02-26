import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// --------------------------------------------------
// Импорт компонентов с папки "cards" по отдельности
import { CardPhoneComponent } from './cards/card-phone/card-phone.component';
import { CardNotebookComponent } from './cards/card-notebook/card-notebook.component';
import { CardTVComponent } from './cards/card-tv/card-tv.component';
//--------------------------------------------------
// Импорт компонентов с lists/index.ts 
import { UlComponent, OlComponent, DlComponent} from './lists/index';
//--------------------------------------------------
// Импорт массива маршрутов с posts/routs.ts
import { route } from './posts/routs';

const routes: Routes = [
  {path: 'notebook', component: CardNotebookComponent},
  {path: 'phone', component: CardPhoneComponent},
  {path: 'tv', component: CardTVComponent},
  // -----------------------
  {path: 'ul-list', component: UlComponent},
  {path: 'ol-list', component: OlComponent},
  {path: 'dl-list', component: DlComponent},
  // -----------------------
  ...route
]
// .concat(route);

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
