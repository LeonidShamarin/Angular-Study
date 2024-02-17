import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { match } from './match.validator';
@Component({
  selector: 'app-react-form14',
  templateUrl: './react-form14.component.html',
  styles: [`div{padding: 5px; background: pink;}`]
})
export class ReactForm14Component implements OnInit {

    registrationForm: FormGroup;
    login: FormControl;
    password: FormControl;
    passwordConfirm: FormControl;

    constructor() { }

    ngOnInit() {
        this.createFormControls();
        this.createForm();
    }

    createFormControls() {
        this.login = new FormControl("", Validators.required);
        this.password = new FormControl("", [
            Validators.minLength(8),
            Validators.required
        ]);
        this.passwordConfirm = new FormControl("", [
            Validators.required
        ]);
    }

    createForm() {
        this.registrationForm = new FormGroup({
            login: this.login,
            password: this.password,
            passwordConfirm: this.passwordConfirm
        }, { validators: match(this.password, this.passwordConfirm) });
    }

    onSubmit() {
        console.log(this.registrationForm)
        if (this.registrationForm.valid) {
            console.log("Отправка данных на сервер");
            console.log(this.registrationForm.value);
        }
    }
}
