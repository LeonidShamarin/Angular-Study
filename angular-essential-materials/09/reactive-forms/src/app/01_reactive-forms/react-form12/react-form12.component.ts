import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { asyncEmailValidator } from "./async-email.validator";
@Component({
  selector: 'app-react-form12',
  templateUrl: './react-form12.component.html',
  styles: [`
  input[type='submit']:not(:disabled){ background: lightgreen; }
  .verification{padding: 10px; border: 2px solid gold;}
  .error-alert{padding: 10px; border: 2px solid pink;}
  `
]
})
export class ReactForm12Component implements OnInit {

  registrationForm: FormGroup;
  email: FormControl;

  constructor() { }

  ngOnInit() {
    this.createFormControls();
    this.createForm();
  }

  createFormControls() {
    this.email = new FormControl("", 
                        Validators.required,
                        // Третий параметр передача асинхронных валидаторов 
                        asyncEmailValidator
                        // Или массивом передать более одного
                        // асинхронного валидатора
                        // [asyncEmailValidator]
                      );
  }

  createForm() {
    this.registrationForm = new FormGroup({
      email: this.email
    });
  }

  onSubmit() {
    if (this.registrationForm.valid) {
      console.log("Отправка данных на сервер");
      console.log(this.registrationForm.value);
    }
  }

}
