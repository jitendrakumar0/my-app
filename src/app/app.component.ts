import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = "This is only testing, nothing else";
  userData = [
    {name:'Ajay Shamra', age: 25},
    {name:'Ajay Shamra', age: 25},
    {name:'Ajay Shamra', age: 25},
  ];
}
