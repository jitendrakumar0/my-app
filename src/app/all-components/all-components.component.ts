import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-all-components',
  templateUrl: './all-components.component.html',
  styleUrls: ['./all-components.component.scss']
})
export class AllComponentsComponent implements OnInit {

  constructor() { }
  
  components:any[] = [
    {name:"Accordion", url:"accordion"},
    {name:"Alert", url:"alert"},
  ]


  ngOnInit(): void {
  }

}
