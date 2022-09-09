import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = '#20 Style Binding | Dynamic Style';
  color = 'red';

  changeColor() {
    this.color == 'red' ? this.color = 'blue' : this.color = 'red';
  }
}
