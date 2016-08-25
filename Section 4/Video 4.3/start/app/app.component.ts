import { Component } from '@angular/core';
import { bootstrap } from '@angular/platform-browser-dynamic';

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

bootstrap(AppComponent);
