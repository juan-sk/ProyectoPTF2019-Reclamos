import { FormControl, FormGroup, Validators } from '@angular/forms';

function passwordMatchValidator(g: FormGroup) {
    return g.get('password').value === g.get('passwordRepeat').value
       ? null : {'mismatch': true};
 }