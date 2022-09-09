import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = '#19 Nested Loop';

  users = [
    {
      name: 'Jitendra',
      socials: [
        'Gmail', 'Facebook', 'Instagram'
      ]
    },
    {
      name: 'Ajay',
      socials: [
        'Gmail', 'Instagram'
      ]
    },
    {
      name: 'Sushil',
      socials: [
        'Facebook', 'Instagram'
      ]
    },
  ]
}
