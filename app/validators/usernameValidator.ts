import { Control } from 'angular2/common';

interface ValidationResult {
    [key: string]: boolean;
}

export class UsernameValidator {

    static startsWithNumber(control: Control): ValidationResult {
        var code = control.value.charCodeAt(0);
        console.log('starts with Number validation');
        if (control.value != "" &&
            //((code >= 65) && (code <= 90)) || ((code >= 97) && (code <= 122))
            !isNaN(code)
        ) {
            return { "startsWithNumber": true };
        }

        return null;
    }

    static usernameTaken(control: Control): Promise<ValidationResult> {
        console.log('username taken validation');
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (control.value === "David") {
                    resolve({ "usernameTaken": true })
                } else {
                    resolve(null);
                };

            }, 1000);
        });
    }
}