import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = '#37 Reactive Form';

  loginForm = new FormGroup({
    username:new FormControl(),
    password:new FormControl()
  })

  loginUser() {
    console.clear();
    if((this.loginForm.controls.username.value == '') || (this.loginForm.controls.username.value == null)) {
      console.log('Im Thara Baap m kai to likh');
    } else {
      console.warn(this.loginForm.value);
    }
  }
}
