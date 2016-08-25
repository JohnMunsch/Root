import { Component, provide } from '@angular/core';
import { HTTP_PROVIDERS } from '@angular/http';
import { bootstrap } from '@angular/platform-browser-dynamic';

import 'rxjs/Rx';

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
        </div>
      </div>
    </div>`,
})
export class AppComponent {
}

bootstrap(AppComponent, [
  provide(Users, { useClass: UsersHttp }),
  HTTP_PROVIDERS,
]).catch(err => console.error(err));
