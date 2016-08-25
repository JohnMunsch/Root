import { provide, Component } from '@angular/core';
import { bootstrap } from '@angular/platform-browser-dynamic';

import 'rxjs/Rx';
import { HTTP_PROVIDERS } from '@angular/http';
import { UserList } from './userList.component';
import {
  Users,
  UsersHttp,
  UsersMock
} from './users.service';

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
export class AppComponent {
}

bootstrap(AppComponent, [ provide(Users, { useClass: UsersHttp }), HTTP_PROVIDERS ]);
