import { Component } from '@angular/core';
import { bootstrap } from '@angular/platform-browser-dynamic';
import { HTTP_PROVIDERS } from '@angular/http';

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

bootstrap(AppComponent, HTTP_PROVIDERS);
