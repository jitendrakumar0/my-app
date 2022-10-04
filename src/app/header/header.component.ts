import { Component, OnInit } from '@angular/core';
import { UserDataService } from '../services/user-data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  headerMenu:any;
  constructor(private allNavMenu:UserDataService) { }

  ngOnInit(): void {
    this.headerMenu = this.allNavMenu.headerMenu;
  }

}
