import { Component } from '@angular/core';
import { Router, ROUTER_DIRECTIVES } from '@angular/router';

import { Users } from './users.service';

@Component({
  selector: 'user-list',
  templateUrl: 'app/userList.template.html',
  directives: [ ROUTER_DIRECTIVES ]
})
export class UserList {
  constructor(private users: Users, private router: Router) {
  }

  page(pageNumber) {
    this.users.page(pageNumber);
  }

  data() {
    return this.users.data();
  }

  pages() {
    return this.users.pages();
  }

  select (id) {
    this.router.navigate(['/people', id]);
  }
}
