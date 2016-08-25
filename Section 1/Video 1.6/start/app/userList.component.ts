import { Component } from '@angular/core';

import { Users } from './users.service';

@Component({
  selector: 'user-list',
  templateUrl: 'app/userList.template.html'
})
export class UserList {
  users = null;

  constructor() {
    this.users = new Users();
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
