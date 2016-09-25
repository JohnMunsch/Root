declare var componentHandler;

import { Component } from '@angular/core';

import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

@Component({
  selector: 'app',
  templateUrl: 'app/app.template.html'
})
export class DashboardComponent {
  ngAfterViewInit() {
    componentHandler.upgradeDom();
  }
}

// Create a module for our application.
@NgModule({
  imports: [ BrowserModule ],
  declarations: [ DashboardComponent ],
  bootstrap: [ DashboardComponent ]
})
export class AppModule { }

// Bootstrap the main module.
const platform = platformBrowserDynamic();
platform.bootstrapModule(AppModule);