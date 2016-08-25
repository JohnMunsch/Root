import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Users } from './users.service';

@Component({
  template: `
    <img [src]="user.avatar">
    <div>
      <div>First: {{ user.first_name }}</div>
      <div>Last: {{ user.last_name }}</div>
    </div>`
})
export class PeopleComponent {
  user = { };

  constructor(private route: ActivatedRoute, private users: Users) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      let id = parseInt(params['id'], 10);
      this.users.user(id).subscribe(user => { this.user = user.data; });
    });
  }
}
