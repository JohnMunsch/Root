import { Component } from '@angular/core';

import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import 'rxjs/Rx';
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
    </div>`
})
export class AppComponent {
}

// Create a module for our application.
@NgModule({
  imports: [ BrowserModule, HttpModule ],
  declarations: [ AppComponent, UserList ],
  bootstrap: [ AppComponent ],
  providers: [ { provide: Users, useClass: UsersHttp } ]
})
export class AppModule { }

// Bootstrap the main module.
const platform = platformBrowserDynamic();
platform.bootstrapModule(AppModule);