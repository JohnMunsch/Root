import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { Component, provide } from '@angular/core';
import { HTTP_PROVIDERS } from '@angular/http';
import { bootstrap } from '@angular/platform-browser-dynamic';
import { ROUTER_DIRECTIVES } from '@angular/router';

import 'rxjs/Rx';

import { APP_ROUTER_PROVIDERS } from './app.router';
import {
    Users,
    UsersHttp
} from './users.service';

@Component({
  selector: 'app',
  template: `
    <div class="container">
      <div class="row">
        <div class="col-sm-12">
          <h1>App!</h1>
          <router-outlet></router-outlet>
        </div>
      </div>
    </div>`,
  directives: [ ROUTER_DIRECTIVES ]
})
export class AppComponent {
}

bootstrap(AppComponent, [
  provide(Users, { useClass: UsersHttp }),
  HTTP_PROVIDERS,
  APP_ROUTER_PROVIDERS,
  { provide: LocationStrategy, useClass: HashLocationStrategy }
]).catch(err => console.error(err));
