import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-react-form08',
  templateUrl: './react-form08.component.html',
})
export class ReactForm08Component implements OnInit {
  name!: FormControl;
  form!: FormGroup;
  constructor() {
    setTimeout(() => {
      // FormControl
      this.name.setValue('Джон');
      // FormGroup
      this.form.patchValue({
        title: 'Заголовок сообщения',
        msg: 'Простой текст',
        // name: 'Майкл',
        missedProp: 'Любой текст',
      });

      console.log(this.form.value);
    }, 3000);
  }
  ngOnInit() {
    this.createNameControl();
    this.createForm();
  }

  createNameControl() {
    this.name = new FormControl('');
  }

  createForm() {
    this.form = new FormGroup({
      name: this.name,
      title: new FormControl(''),
      msg: new FormControl(),
    });
  }

  onSubmit() {
    if (this.form.valid) {
      console.log('Отправка данных на сервер');
      console.log(this.form.value);
    }
  }
}
