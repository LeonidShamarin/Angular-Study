import { FormControl } from "@angular/forms";
import { BlackListService } from "./blacklist.service";

export function blackListValidator(service: BlackListService) {
    return (control: FormControl) => {

        return new Promise(function(resolve){
            console.log('blacklist.v.ts work, started setTimeout')
            setTimeout(() => {

                service.checkEmail(control.value)
                    .then((res)=>{
                        console.log(`resolve blackListValidator`, res)
                        res ? resolve({
                            blackListValidator: {
                                blocked: true
                            }
                        }) : resolve(null)
                    })
                
            }, 2000);
        })

    }
} 