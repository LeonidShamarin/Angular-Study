import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: 'app-react-form04',
  templateUrl: './react-form04.component.html',
  styleUrls: ['./react-form04.component.css']
})
export class ReactForm04Component implements OnInit {

  constructor() { }
  loginForm: FormGroup;
  ngOnInit() {
    this.loginForm = new FormGroup({
      login: new FormControl("", Validators.required),
      password: new FormControl(null, [Validators.required, Validators.minLength(4)]),
      agree: new FormControl("", Validators.requiredTrue)
    });
  }
  
  showLog(form){
    console.log(form)
  }
  onSubmit(form) {
    if (this.loginForm.valid) {
      console.log(form);
      // Spread оператор для копирования объекта
      // Есть объект формы под именем свойства "value" и все его ключи и значения копируются в другой объект который нам нужно
      let formData = { ...this.loginForm.value }
      console.log(formData);

      //Очищает форму после отправки данных
      this.loginForm.reset();
    }
  }
}
