import { ValidationErrors, AbstractControl, ValidatorFn } from '@angular/forms';

export class RegisterValidators {
  static match(controlName: string, mathchingControlName: string): ValidatorFn {
    return (group: AbstractControl): ValidationErrors | null => {
      const control = group.get(controlName);
      const matchingControl = group.get(mathchingControlName);
      if (!control || !matchingControl) {
        console.error('Form controls can not be found in teh form group');
        return { controlNotFound: false };
      }
      const error =
        control.value === matchingControl.value ? null : { noMatch: true };

      matchingControl.setErrors(error);

      return error;
    };
  }
}
