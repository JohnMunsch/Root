import { Component } from '@angular/core';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { BasicSearchPipe } from './basicSearch.pipe';

@Component({
    selector: 'app',
    template: `
      <h1>Templates</h1>

      <div *ngFor="let movie of movies">
        <p>{{ movie.name }}</p>
        <p>{{ movie.description }}</p>
      </div>

      <dl>
        <template ngFor let-movie [ngForOf]="movies">
          <dt>{{ movie.name }}</dt>
          <dd>{{ movie.description }}</dd>
        </template>
      </dl>

      <h1>Sample Pipes</h1>

      <p>{{ moneyValue | currency:'USD':true }}</p>
      <p>{{ moneyValue | number:'1.0-1'}}</p>
      <p>{{ stringValue | lowercase }}</p>
      <p>{{ stringValue | uppercase }}</p>

      <h1>The Filtering Pipe</h1>

      <input [(ngModel)]="searchTerm">
      
      <ul>
        <li *ngFor="let movie of movies | basicSearch:searchTerm">
          {{ movie.name }} - {{ movie.description }}
        </li>
      </ul>`
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
  searchTerm = '';

  moneyValue = 35.23;
  stringValue = "Hello World";
}

// Create a module for our application.
@NgModule({
  imports: [ BrowserModule, FormsModule ],
  declarations: [
    AppComponent,
    BasicSearchPipe
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }

// Bootstrap the main module.
const platform = platformBrowserDynamic();
platform.bootstrapModule(AppModule);