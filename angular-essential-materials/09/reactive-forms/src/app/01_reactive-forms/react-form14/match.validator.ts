import { FormControl, ValidatorFn } from "@angular/forms";

export function match(passControl1: FormControl, passControl2: FormControl) : ValidatorFn {
    return () => {
        
        if (!passControl1.value || !passControl2.value) return null;
        if (passControl1.value === passControl2.value) {
            return null;
        }
        else {
            return { match }
        }
    }
}
