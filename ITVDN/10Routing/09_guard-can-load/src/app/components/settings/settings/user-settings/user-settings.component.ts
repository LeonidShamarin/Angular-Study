import { Component, OnInit } from '@angular/core';
import { CanComponentDeactivate } from '../../auth-services/can-deactivate-guard.service';

@Component({
  selector: 'app-user-settings',
  templateUrl: './user-settings.component.html'
})
export class UserSettingsComponent implements 
                                    OnInit, 
                                    CanComponentDeactivate {

  constructor() { }
  userName = "Лесюня";
  
  saved = true;

  save(){
    this.saved = true;
  }

  changed() {
    this.saved = false;
  }

  canDeactivateComponent(){
    if (this.saved) {
        return true;
    }
    else {
        return confirm("Вы не сохранили новый логин. Выйти без сохранения?");
    }
  }

  ngOnInit(): void {
  }

}
