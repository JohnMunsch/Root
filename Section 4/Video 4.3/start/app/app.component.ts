import { Component } from '@angular/core';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

@Component({
    selector: 'app',
    template: `
      <h1>Templates</h1>

      <div *ngFor="let movie of movies">
        <p>{{ movie.name }}</p>
        <p>{{ movie.description }}</p>
      </div>`
})
export class AppComponent {
  movies = [
    {
      name: 'Star Wars',
      description: 'A farm boy becomes a terrorist who blows up a military installation killing tens of thousands.'
    },
    {
      name: 'The Matrix',
      description: 'What if virtual reality didn\'t look like Second Life?'
    }
  ];
}

// Create a module for our application.
@NgModule({
  imports: [ BrowserModule ],
  declarations: [
    AppComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }

// Bootstrap the main module.
const platform = platformBrowserDynamic();
platform.bootstrapModule(AppModule);