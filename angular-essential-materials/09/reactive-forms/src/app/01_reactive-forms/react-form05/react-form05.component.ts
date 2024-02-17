import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup, FormArray } from '@angular/forms';

@Component({
  selector: 'app-react-form05',
  templateUrl: './react-form05.component.html',
  styleUrls: ['./react-form05.component.css']
})
export class ReactForm05Component implements OnInit {

  form: FormGroup
  msg: FormControl;
  contacts: FormArray

  ngOnInit() {
      this.createFormControls();
      this.createForm();

  }

  createFormControls() {
      this.msg = new FormControl("", Validators.required);
      this.contacts = new FormArray(
          [new FormControl("+38(0", [
                                  Validators.required, 
                                  //+380 МОБИЛЬНЫЙ НОМЕР!!!!
                                  //пример шаблона +38(099)-888-77-55
                                  Validators.pattern(/\+38\(0[0-9]{2}\)-[0-9]{3}-\d{2}-\d{2}/)
                              ])
          ]
      );
  }

  createForm() {
      this.form = new FormGroup({
              msg: this.msg,
              contacts: this.contacts
      });
      
    }
  onSubmit() {
      if (this.form.valid 
          && (this.form.get('contacts') as FormArray).controls.length > 0) {
          console.log("Отправление данных на сервер");
          console.log(this.form.value);
      } else {
          console.log("Ошибка")
      }
  }
  getClass(control: FormControl) {
      return {
          "is-invalid": control.invalid && control.dirty,
          "is-valid": control.valid && control.dirty
      };
  }
  addPhone() {
    // МОБИЛЬНЫЙ НОМЕР БЕЗ +38()!!!!
    //пример шаблона 099-888-77-55
      this.contacts.push(new FormControl("", [Validators.required,Validators.pattern('[0-9]{3}-[0-9]{3}-[0-9]{2}-[0-9]{2}')]));
  }
  clearAll(){
    this.contacts.clear()
  }

}
