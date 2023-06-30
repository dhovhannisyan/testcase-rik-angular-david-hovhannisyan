import { AbstractControl } from "@angular/forms";
import { USER_STATUS } from "../models/user.model";

export class CustomValidators {

   

    static onlyLetters(control: AbstractControl) {
        let val = control.value;

        if (val === null || val === '') return null;

        if (!val.toString().match('^[a-zA-Z]+$')) return { 'onlyLetters': true };
    
        return null;
    }

    static phone(control: AbstractControl) {
        let val = control.value;

        if (val === null || val === '') return null;

        if (!val.toString().match(/^(\+7|7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/gm)) return { 'phone': true };
    
        return null;
    }

    static date(control: AbstractControl) {
        let val = control.value;
        
        if (val === null || val === '') return null;

        if (!(val instanceof Date)) return { 'date': true };
    
        return null;
    }

    static boolean(control: AbstractControl) {

        let val = control.value;
        
        if (val === null) return null;

        if (!(val === true || val === false)) return { 'boolean': true };
        
        return null;
    }

    static status(control: AbstractControl) {

        let val = control.value;
        
        if (val === null) return null;

        if ((val !== USER_STATUS.ACTIVE) && (val !== USER_STATUS.INACTIVE)) return { 'ststus': true };
        
        return null;
    }

    
}