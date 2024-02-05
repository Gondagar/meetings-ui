import { FormControl } from "@angular/forms";

const digits = /[0-9]/;
const lowerChar = /[a-z]/;
const upperChar = /[A-Z]/;

export const validatePassword = (control: FormControl) => {
    if (control.value.match(digits) == null)
        return { invalidPassword: true };

    if (control.value.match(upperChar) == null)
        return { invalidPassword: true };

    if (control.value.match(lowerChar) == null)
        return { invalidPassword: true };

    return null;
}