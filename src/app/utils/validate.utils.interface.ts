import { FormGroup } from "@angular/forms";
import { Observable } from "rxjs";

export declare class ValidateUtils{
    formValidateAndShowMassage(form: FormGroup): Observable<void>;
}