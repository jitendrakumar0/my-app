import { Component } from '@angular/core';
import { StudentsService } from './services/students.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = '#46 Post API Method | save data with API';
  users:any;
  constructor(private usersData:StudentsService) {
    usersData.users().subscribe((data)=>{
      // console.warn("data", data);
      this.users=data;
    })
  }
  saveUsers(userData:any) {
      this.usersData.saveUsers(userData).subscribe((kuchbhi)=>{
        // console.info(kuchbhi);
      })
  }
}
