import { Component } from '@angular/core';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AccountComponent } from './account.component';

import { routing } from './app.router';

@Component({
  selector: 'app',
  template: `
    <div class="container">
      <div class="row">
        <div class="col-sm-12">
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
    AccountComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }

// Bootstrap the main module.
const platform = platformBrowserDynamic();
platform.bootstrapModule(AppModule);