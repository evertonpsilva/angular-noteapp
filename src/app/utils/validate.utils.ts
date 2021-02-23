import { FormGroup } from "@angular/forms";
import { ValidateUtils } from "./validate.utils.interface";

export class ValidateUtilsImpl implements ValidateUtils{

    public formValidateAndShowMassage(form: FormGroup){
        
        Object.keys(form.controls).forEach((key) => {
            if(form.get(key).invalid){
                console.log(`Campo ${key} inválido`);
            }
        })

    }

}