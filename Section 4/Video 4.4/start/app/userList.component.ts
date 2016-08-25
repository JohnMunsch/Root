import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

import { Users } from './users.service';

@Component({
  selector: 'user-list',
  templateUrl: 'app/userList.template.html',
  directives: [ ROUTER_DIRECTIVES ]
})
export class UserList {
  users = null;
  
  constructor(users: Users) {
    this.users = users;
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
}
