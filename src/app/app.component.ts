import { Component } from '@angular/core';

interface usersType {
  id:number,
  name:string,
  indian:boolean,
  address:any
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = '# Model and Interface';

  users:usersType[] = [
    {
      id:1,
      name:"Jitendra Kumar Bijarnia",
      indian:true,
      address:"54 Street, USA"
    }
  ]
}
