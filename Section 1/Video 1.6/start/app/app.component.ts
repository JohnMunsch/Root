import { Component } from '@angular/core';
import { bootstrap } from '@angular/platform-browser-dynamic';

import { UserList } from './userList.component';

@Component({
  selector: 'app',
  template: `
    <div class="container">
      <div class="row">
        <div class="col-sm-12">
          <h1>App!</h1>
          <user-list></user-list>
        </div>
      </div>
    </div>`,
  directives: [ UserList ]
})
export class App {
}

bootstrap(App);
