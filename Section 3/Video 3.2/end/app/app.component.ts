declare var componentHandler;

import { Component } from '@angular/core';

import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

@Component({
  selector: 'app',
  templateUrl: 'app/app.template.html'
})
export class AppComponent {
  public options = {
    forValues: [
      'Click per object',
      'Views per object',
      'Objects selected',
      'Objects viewed'
    ],
    ifValue: true,
    switchValue: 'type1'
  };

  ngAfterViewInit() {
    componentHandler.upgradeDom();
  }

  componentColor() {
    return { 'mdl-color--teal-300': true };
  }
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