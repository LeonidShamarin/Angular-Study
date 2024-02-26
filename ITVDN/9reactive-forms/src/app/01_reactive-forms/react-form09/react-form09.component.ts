import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-react-form09',
  templateUrl: './react-form09.component.html',
  styleUrls: ['./react-form09.component.css'],
})
export class ReactForm09Component implements OnInit {
  constructor() {}
  registerForm!: FormGroup;
  ngOnInit() {
    this.registerForm = new FormGroup({
      userName: new FormControl('', [
        Validators.required,
        Validators.minLength(7),
      ]),
      emailFiled: new FormControl(null, [
        Validators.required,
        Validators.email,
      ]),
    });
  }

  showLog(form: any) {
    console.log(form);
  }
  onSubmit(form: { value: any }) {
    if (this.registerForm.valid) {
      console.log(form);
      console.log(form.value);
      //Очищает форму после отправки данных
      this.registerForm.reset();
    }
  }
}
