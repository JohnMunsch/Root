import { Component } from '@angular/core';

import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { UserList } from './userList.component';

// One component in our app.
@Component({
  selector: 'app',
  template: `
    <div class="component">
      <div class="container">
        <div class="row">
          <div class="col-sm-12">
            <h1>App!</h1>
            <user-list></user-list>
          </div>
        </div>
      </div>      
    </div>`
})
export class AppComponent {
}

// Create a module for our application.
@NgModule({
  imports: [ BrowserModule ],
  declarations: [ AppComponent, UserList ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }

// Bootstrap the main module.
const platform = platformBrowserDynamic();
platform.bootstrapModule(AppModule);