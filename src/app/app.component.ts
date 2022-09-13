import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = '#27 Reusable Component';

  users:any[] = [
    {name: "Jitendra", email: "jitendra@gmail.com"},
    {name: "sushil", email: "sushil@gmail.com"},
    {name: "preetam", email: "preetam@gmail.com"},
    {name: "ajay", email: "ajay@gmail.com"}
  ]

  addUser(username:any, useremail:any) {
    this.users.push({name: username, email:useremail});
  }
}
