import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-app';
  show = "yes";
  buttonText = "False wali condition"

  changeOnButton() {
    this.show == 'yes' ? this.show = 'no' : this.show = 'yes';
    this.show == 'no' ? this.buttonText = 'True wali condition' : this.buttonText = 'False wali condition';
  }
}
