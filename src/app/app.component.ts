import { Component } from '@angular/core';
import { StudentsService } from './services/students.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = '#45 get data from API and display';
  users:any;
  constructor(private usersData:StudentsService) {
    usersData.users().subscribe((data)=>{
      // console.warn("data", data);
      this.users=data;
    })
  }
}
