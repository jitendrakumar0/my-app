import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'title';
  indianRupees:number = 0;
  inDoller:number = 0;

  rendomValue(inputValue:any) {
    this.indianRupees = inputValue;
    // Math.floor(this.indianRupees * 79.18)
    this.inDoller = Math.fround(this.indianRupees / 79.18);
  }
}
