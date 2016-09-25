import { Component } from '@angular/core';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import 'rxjs/Rx';

import { routing } from './app.router';
import {
    Users,
    UsersHttp
} from './users.service';
import { PeopleComponent } from './people.component';
import { UserListComponent } from './userList.component';

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
    </div>`
})
export class AppComponent {
}

// Create a module for our application.
@NgModule({
  imports: [ BrowserModule, HttpModule, routing ],
  declarations: [
    AppComponent,
    PeopleComponent,
    UserListComponent
  ],
  bootstrap: [ AppComponent ],
  providers: [ { provide: Users, useClass: UsersHttp } ]
})
export class AppModule { }

// Bootstrap the main module.
const platform = platformBrowserDynamic();
platform.bootstrapModule(AppModule);