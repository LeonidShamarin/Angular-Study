import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from "@angular/forms";

@Component({
  selector: 'app-react-form03',
  templateUrl: './react-form03.component.html',
  styleUrls: ['./react-form03.component.css']
})
export class ReactForm03Component implements OnInit {

  // FormGroup - группа управления полями формы (FormControl)
  registrationForm: FormGroup;

  ngOnInit() {
      this.registrationForm = new FormGroup({
          // FormControl - класс, создаем поле которым будем управлять 
          userLogin: new FormControl("Логин"),
          userPass: new FormControl(),
          name: new FormGroup({
            firstName: new FormControl(),
            lastName: new FormControl(null)
          })
      });
  }
 
  onSubmit(form) {
      console.log(form);
      // console.log(form.valid);
      // console.log(form.value);
  }

}
