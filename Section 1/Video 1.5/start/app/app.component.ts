import { Component } from '@angular/core';

import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

// One component in our app.
@Component({
  selector: 'app',
  template: `
    <div class="container">
      <div class="row">
        <div class="col-sm-12">
          <h1>App!</h1>
        </div>
      </div>
    </div>`
})
export class AppComponent {
}

// Create a module for our application.
@NgModule({
  imports: [ BrowserModule ],
  declarations: [ AppComponent ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }

// Bootstrap the main module.
const platform = platformBrowserDynamic();
platform.bootstrapModule(AppModule);