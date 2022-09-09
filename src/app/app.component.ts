import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = '#18 For Loop | *ngFor';

  users = ['Preetam', 'Jitendra', 'Sushil', 'Deepak', 'Suresh'];
  
  usersDetail = [
    {name:'Preetam', email:'preetam@gmail.com', mobile:'+91 4567544323', gender:'M'},
    {name:'Jitendra', email:'jitendra@gmail.com', mobile:'+91 0987654321', gender:'M'},
    {name:'Sushil', email:'sushil@gmail.com', mobile:'+91 2132435465', gender:'M'},
    {name:'Nitika', email:'nitika@gmail.com', mobile:'+91 0989786756', gender:'F'},
    {name:'Suresh', email:'suresh@gmail.com', mobile:'+91 0909898908', gender:'M'},
  ];
}
