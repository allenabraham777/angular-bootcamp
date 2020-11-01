import { FormGroup } from '@angular/forms'

export const PasswordChecker = (
  controName: string,
  compareControlName: string
) => (formGroup: FormGroup) => {
  const password = formGroup.controls[controName];
  const confPassword = formGroup.controls[compareControlName];

  if (password.value !== confPassword.value) {
    confPassword.setErrors({ mustMatch: true });
  } else {
    confPassword.setErrors(null);
  }
}