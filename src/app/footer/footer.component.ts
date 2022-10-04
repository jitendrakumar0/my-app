import { Component, OnInit } from '@angular/core';
import { UserDataService } from '../services/user-data.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  social:any;

  constructor(private socials:UserDataService) { }

  ngOnInit(): void {
    this.social = this.socials.socials
  }

}
