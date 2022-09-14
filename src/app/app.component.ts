import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = '#28 Send data child to parent component';

  updateData(item:any) {
    console.warn(item);
    this.title = item
  }
}
