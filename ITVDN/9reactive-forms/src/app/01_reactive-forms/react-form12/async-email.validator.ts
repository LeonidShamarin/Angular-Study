import { FormControl } from "@angular/forms";

export function asyncEmailValidator(control: FormControl): Promise<any> {
    return new Promise(resolve => {
        setTimeout( ()=> {
            control.value === 'student@itvdn.com' ?
                resolve({registeredEmail: true}) :
                resolve(null)
        }, 2500 )
    })
}