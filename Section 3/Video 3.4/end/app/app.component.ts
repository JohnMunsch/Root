import { Component } from '@angular/core';

import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { Weather } from './weather.service';

@Component({
    selector: 'app',
    template: `
      <h1>Weather!</h1>
      <div>Date: {{ weatherData.date }}</div>
      <div>Temperature: {{ weatherData.temp }}</div>
      <div>Conditions: {{ weatherData.text }}</div>

      <a href="https://www.yahoo.com/?ilc=401" target="_blank"> <img src="https://poweredby.yahoo.com/purple.png" width="134" height="29"/> </a>`,
    providers: [ Weather ]
})
export class AppComponent {
  weatherData = {
    date: 'N/A',
    temp: 'N/A',
    text: 'N/A'
  };

  constructor (weather: Weather) {
    weather.fortWorth().subscribe((data: any) => this.weatherData = data);
  }
}

// Create a module for our application.
@NgModule({
  imports: [ BrowserModule, HttpModule ],
  declarations: [ AppComponent ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }

// Bootstrap the main module.
const platform = platformBrowserDynamic();
platform.bootstrapModule(AppModule);