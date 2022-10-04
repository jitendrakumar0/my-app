import { Component, OnInit } from '@angular/core';
import { UserDataService } from './services/user-data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  sendUserData:any;
  constructor(private userData:UserDataService) {}
  title = '#44 Make service and use in multiple files';

  ngOnInit(): void {
    this.sendUserData = this.userData.allUsers;
  }
}
