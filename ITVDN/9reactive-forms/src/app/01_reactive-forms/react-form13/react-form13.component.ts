import { Component, OnInit } from '@angular/core';
import { AbstractControlOptions } from '@angular/forms';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { emailValidator } from "./email.validator";
import { BlackListService } from "./blacklist.service";
import { blackListValidator } from "./blacklist.validator";



@Component({
  selector: 'app-react-form13',
  templateUrl: './react-form13.component.html'
})

export class ReactForm13Component implements OnInit {



  registrationForm!: FormGroup;
  email!: FormControl;
  blockedEmails = this.blackListService.getAllBlockedEmails()
  constructor(private blackListService: BlackListService) { }

  ngOnInit() {
   

    this.createFormControls();
    this.createForm();
  }

  createFormControls() {
    this.email = new FormControl("", {
      validators: [Validators.required, emailValidator],
      asyncValidators: blackListValidator(this.blackListService)
    } as AbstractControlOptions); // Casting to AbstractControlOptions
  }
  createForm() {
    this.registrationForm = new FormGroup({
      email: this.email,
    });
  }

  onSubmit(form: any) {
    console.log(form)
    if(this.registrationForm.valid) {
      console.log("Отправка данных на сервер");
      console.log(this.registrationForm.value);
    }
  }

}
