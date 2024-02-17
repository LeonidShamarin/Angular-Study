import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { userDataValidation, passportFunc } from "./custom-validators";
@Component({ 
  selector: 'app-react-form11',
  templateUrl: './react-form11.component.html',
  styleUrls: ['./react-form11.component.css']
})
export class ReactForm11Component implements OnInit {
  
  userForm: FormGroup;
  constructor(private fb: FormBuilder) { }
  ngOnInit() {
      this.userForm = this.fb.group({
                  "passportUser": ['', [
                      Validators.required,
                      userDataValidation.passport
                      // passportFunc
                  ]],
                  "birthYearUser": ['',[
                      Validators.required,
                      userDataValidation.birthYear(1955, new Date().getFullYear() - 17)
                  ]]
              });
  }
  onSubmit() {
      console.log("submitted");
      console.log(this.userForm.value);
  }

  showForm(form){
      console.log(form)
  }   
  
}
