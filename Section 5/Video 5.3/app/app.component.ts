import { Component } from '@angular/core';
import { bootstrap } from '@angular/platform-browser-dynamic';
import { HTTP_PROVIDERS } from '@angular/http';
import { ROUTER_DIRECTIVES } from '@angular/router';

import { APP_ROUTER_PROVIDERS } from './app.router';

@Component({
  selector: 'app',
  template: `
    <div class="container">
      <div class="row">
        <div class="col-sm-12">
          <router-outlet></router-outlet>
        </div>
      </div>
    </div>`,
  directives: [ ROUTER_DIRECTIVES ]
})
export class AppComponent {
}

bootstrap(AppComponent, [
  HTTP_PROVIDERS,
  APP_ROUTER_PROVIDERS
]).catch(err => console.error(err));
