import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
    selector: 'app-react-form10',
    templateUrl: './react-form10.component.html',
    styleUrls: ['./react-form10.component.css']
})
export class ReactForm10Component implements OnInit {
    
    
    registrationForm!: FormGroup;
    createEmailForm!: FormGroup;
    
    constructor(private formBuilder: FormBuilder) { }
    
    ngOnInit() {
        this.buildRegForm();
        this.buildEmailForm();
    }

    // FIELD valueChanges -----------------------------------------------

    buildRegForm() {
        this.registrationForm = this.formBuilder.group(
            {
                nameEmail: this.formBuilder.control(''),
                createdEmail: this.formBuilder.control(null)
            }
        );

        this.registrationForm.get('nameEmail')?.valueChanges
            .subscribe(data => {
                this.registrationForm.get('createdEmail')?.setValue(`${data}@itvdn.com`)
            });
    }

    // FORM valueChanges -----------------------------------------------
    
    buildEmailForm() {
        this.createEmailForm = this.formBuilder.group(
            {
                userLogin: this.formBuilder.control(''),
                userEmail: this.formBuilder.control(null)
            }
        );

        this.createEmailForm.valueChanges
            .subscribe(data => {
                this.checkingExisting(data)
            });
    }
    formErrors = {
        existingLogin: '',
        existingEmail: ''
    }
    errorMsg = {
        existingLogin: 'Такой логин уже существует',
        existingEmail: 'Имеил занят'
    }
    checkingExisting(data: { userLogin: string; userEmail: string; }){
        console.log(data);
        let login = this.registeredUsers.some(el => el.userLogin == data.userLogin )
        let email = this.registeredUsers.some(el => el.userEmail == data.userEmail)
        
        this.formErrors.existingLogin = '';
        this.formErrors.existingEmail = '';
        
        if(login){
            this.formErrors.existingLogin = this.errorMsg.existingLogin
        }
        if(email){
            this.formErrors.existingEmail = this.errorMsg.existingEmail
        }
    }
    
    registeredUsers = [
        {
            userLogin: 'admin',
            userEmail: 'admin@itvdn.com'
        },
        {
            userLogin: 'student',
            userEmail: 'best-student@cbs.ua'
        },
        {
            userLogin: 'subscriber',
            userEmail: 'subscriber@itvdn.com'
        }
    ]

    onSubmit() {
        console.log(this.registrationForm)
        // console.log(this.createEmailForm)
    }

}
