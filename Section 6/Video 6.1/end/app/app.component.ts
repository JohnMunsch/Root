import { Component } from '@angular/core';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { MoviesService } from './movies.service';

@Component({
  selector: 'app',
  template: `
      <div *ngFor="let movie of movies">
        <p>{{ movie.name }} ({{ movie.year }})</p>
        <p>{{ movie.description }}</p>
      </div>`,
  providers: [ MoviesService ]
})
export class AppComponent {
  movies = [];

  constructor(private moviesService : MoviesService) {
  }

  ngOnInit() {
    this.moviesService.getMovies().subscribe((data: any) => this.movies = data);
  }
}

// Create a module for our application.
@NgModule({
  imports: [ BrowserModule, HttpModule ],
  declarations: [
    AppComponent
  ],
  bootstrap: [ AppComponent ],
  providers: [ MoviesService ]
})
export class AppModule { }

// Bootstrap the main module.
const platform = platformBrowserDynamic();
platform.bootstrapModule(AppModule);