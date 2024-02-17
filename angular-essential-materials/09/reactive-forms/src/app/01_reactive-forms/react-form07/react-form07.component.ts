import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-react-form07',
  templateUrl: './react-form07.component.html',
  styleUrls: ['./react-form07.component.css']
})
export class ReactForm07Component implements OnInit {

  name: FormControl
  emailFiled: FormControl
  form: FormGroup
  toggle = false;
  constructor(){}
  ngOnInit() {
    this.createFormControls();
    this.createForm();
    this.emailFiled = new FormControl()
  }

  createFormControls() {
    this.name = new FormControl("");
  }

  createForm() {
    this.form = new FormGroup({
      name: this.name,
      msg: new FormControl()
    });
  }
  subscribe(){
    this.toggle = !this.toggle;
    if(this.toggle){
      this.emailFiled.setValidators([Validators.required, Validators.email])
      this.form.addControl('email', this.emailFiled);
    } else{
      this.form.removeControl('email');
      this.emailFiled.clearValidators()
    }
    console.log(this.form)
  }
  onSubmit() {
    if (this.form.valid && this.form.status === "VALID") {
      console.log("Отправка данных на сервер");
      console.log(this.form.value);
    }
  }
  

}
