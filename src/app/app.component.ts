import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'title';
  tasks:any[] = [];

  addTask(item:any) {
    this.tasks.push({id:this.tasks.length + 1, name:item});
    console.warn(this.tasks);
  }

  removeItem(id:number) {
    this.tasks = this.tasks.filter(item=>item.id!==id);
  }
}
