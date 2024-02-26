import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from "@angular/forms";

@Component({
  selector: 'app-react-form06',
  templateUrl: './react-form06.component.html',
  styleUrls: ['./react-form06.component.css']
})
export class ReactForm06Component implements OnInit {
    
  constructor(private fb: FormBuilder) { }
  
  form!: FormGroup;
  ngOnInit() {
      this.form = this.fb.group({
          login: "",
          email: [null,[Validators.email, Validators.required]],
          name: this.fb.group({
                fName: this.fb.control('Джон', Validators.required),
                lName: this.fb.control('', [Validators.required, Validators.minLength(4)]),
          }),
          contacts: this.fb.array([
            this.fb.control('Мобильный'),
            this.fb.control('Рабочий'),
        ])
      });
  }

  onSubmit(form: { value: any; }) {
      console.log(form);
      console.log(form.value);
  }

}
