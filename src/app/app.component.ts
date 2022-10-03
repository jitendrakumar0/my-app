import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = '#37 Reactive form Validations';
  submitBtn:boolean = false;
  disabledOnSubmit:boolean = true;

  loginForm = new FormGroup({
    username:new FormControl('', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')]),
    password:new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z0-9!@#\$%\^\&*_=+-]{8,12}$')])
  });

  get user() {
    return this.loginForm.get('username')
  }
  get password() {
    return this.loginForm.get('password')
  }

  loginFormSubmit() {
    console.info(this.loginForm.value);
    if(this.loginForm.valid) {
      this.submitBtn = true;
      this.loginForm.controls['username']?.disable();
      this.loginForm.controls['password']?.disable();
      this.disabledOnSubmit = false;
      setTimeout(() => {
        this.submitBtn = false;
        this.loginForm.reset();
        this.loginForm.controls['username']?.enable();
        this.loginForm.controls['password']?.enable();
        this.disabledOnSubmit = true;
      }, 2000);
    }
  }

}
