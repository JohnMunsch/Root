import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { Users } from './users.service';

@Component({
  selector: 'user-list',
  templateUrl: 'app/userList.template.html'
})
export class UserListComponent {
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
