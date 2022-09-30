import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  constructor(private route:ActivatedRoute) { }

  title:any;

  ngOnInit(): void {  
    console.info(this.route.snapshot.paramMap.get('id'));
    this.title = this.route.snapshot.paramMap.get('id');
  }

}
