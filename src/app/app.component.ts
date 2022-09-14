import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  // title = 'Banana';
  tasks:any[] = [];

  addTask(item:any) {
    this.tasks.push({id:this.tasks.length + 1, name:item});
    console.warn(this.tasks);
  }

  removeItem(id:number) {
    this.tasks = this.tasks.filter(item=>item.id!==id);
  }
  
  users:any[] = [1,2,3,4,5, "Preetam", 7,8,9,0]
  user:any[] = [6,7,8,9,10]
  title:any = 'Banana'

  inventory:any[] = [
    {name: 'apple', quantity: 2},
    {name: 'mango', quantity: 8},
    {name: 'kuchbhi', quantity: 8},
    {name: 'banana', quantity: 0},
    {name: 'cherries', quantity: 5},
    {name: 'cherries', quantity: 15}
  ];

  pop() {
    console.clear();
    this.users.pop();
    console.log(this.users);
    this.users = this.users.filter(item=>item.length!==length);
  }
  
  shift() {
    console.clear();
    this.users.shift();
    console.log(this.users);
    this.users = this.users.filter(item=>item.length!==length);
  }
  
  concat() {
    console.clear();
    this.users = this.users.concat(this.user);
    console.log(this.users.concat(this.user));
    this.users = this.users.filter(item=>item.length!==length);
  }
  
  join() {
    console.clear();
    this.users.join();
    console.log(this.users.join("♥♥♥♥♥♥♥♥"));
    this.users = this.users.filter(item=>item.length!==length);
  }
  
  slice() {
    console.clear();
    this.users.slice();
    console.log(this.users.slice(2, 3));
    this.users = this.users.filter(item=>item.length!==length);
    this.users = this.users.slice(3);
    this.title = this.title.slice(3);
  }
  
  indexof() {
    console.clear();
    this.title = this.users[this.users.indexOf("Preetam")].slice(0, 1);
  }
  
  includes() {
    console.clear();
    this.title = this.users.includes("Preetam");
    console.log(this.users.includes("Preetam"));
  }
  
  find(value:any) {
    console.clear();
    console.log(this.inventory.find( ({ name }) => name === value ));
  }
  
  findindex(value:any) {
    console.clear();
    console.log(this.inventory.findIndex( ({ name }) => name == value ));
  }
  
  map(value:any) {
    console.clear();
    console.log(this.inventory.map( ({ name }) => name == value ));
  }
  
  filter(value:any) {
    console.clear();
    console.log(this.inventory.filter( ({ name }) => name === value ));
  }
  
  reduce() {
    console.clear();
    console.log(this.inventory.reduce( ({ quantity }) => quantity + 6));
  }
  
  every(item:any) {
    console.clear();
    console.log(this.inventory.every( ({ quantity }) => quantity < item));
  }
  
  some(item:any) {
    console.clear();
    console.log(this.inventory.some( ({ quantity }) => quantity > item));
  }
  
  reverse() {
    console.clear();
    console.log(this.inventory.reverse());
  }
  
  at(item:any) {
    console.clear();
    // console.log(this.inventory.at(-3));
  }

  
}
