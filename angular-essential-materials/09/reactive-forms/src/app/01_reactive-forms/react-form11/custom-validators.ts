import { AbstractControl, ValidatorFn } from "@angular/forms";

export class userDataValidation{
    static passport(control: AbstractControl /*поле с формы*/): { [key: string]: any }{
            let passportRegex = /^([A-ZА-Я]{2}[0-9]{6})$|^([0-9]{9})$/;
            // Значение поля с формы
            let value = control.value;
            // Проверка поля по регулярному выражению
            let result = passportRegex.test(value);

            if (result) {
                return null;
            } 
            else {
                return { "passportValidator": { value } }
            }
    }
    static birthYear(minYear: number, maxYear: number): ValidatorFn {
            return (control: AbstractControl): { [key: string]: any } => {
                let value = control.value;
                // Значение поля с формы
                let age: number = parseInt(value);
                // Проверки
                if (isNaN(age)) {
                    return { "ageValidator": { value: 'Указаны не числа. Укажите корректный год вашего рождения' } };
                }
                else if (age != control.value) {
                    return { "ageValidator": { value: 'Дробные числа не допускаються. Укажите корректный год вашего рождения' } };
                }
                else if (age < minYear || age > maxYear) {
                    return { "ageValidator": { value: 'Не подходящий возраст.' } };
                }
                else {
                    return null;
                }
            }
        }
}

export function passportFunc(control: AbstractControl /*поле с формы*/): { [key: string]: any }{
    let passportRegex = /^([A-ZА-Я]{2}[0-9]{6})$|^([0-9]{9})$/;
    // Значение поля с формы
    let value = control.value;
    // Проверка поля по регулярному выражению
    let result = passportRegex.test(value);

    if (result) {
        return null;
    } 
    else {
        return { "passportValidator": { value } }
    }
}