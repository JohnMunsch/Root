import { Component } from '@angular/core';

import { Users } from './users.service';

@Component({
  selector: 'people',
  template: `
    <img [src]="user.avatar">
    <div>
      <div>First: {{ user.first_name }}</div>
      <div>Last: {{ user.last_name }}</div>
    </div>`
})
export class PeopleComponent {
  user = { };
}
