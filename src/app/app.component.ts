import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = '#36 Template driven form validations';

  login(data:any) {
    console.info(data);
  }

  

  
  
}
