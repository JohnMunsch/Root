import { Component } from '@angular/core';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { CrayonsService } from './crayons.service';

@Component({
  selector: 'app',
  template: `
      <table>
        <tr *ngFor="let crayon of crayons">
          <td>{{ crayon.name }}</td>
          <td [style.background-color]="crayon.hexColor">{{ crayon.hexColor }}</td>
        </tr>      
      </table>`
})
export class AppComponent {
  crayons = [];

  constructor(private crayonsService : CrayonsService) {
  }

  ngOnInit() {
    this.crayonsService.getCrayons().subscribe((data: any) => this.crayons = data);
  }
}

// Create a module for our application.
@NgModule({
  imports: [ BrowserModule, HttpModule ],
  declarations: [
    AppComponent
  ],
  bootstrap: [ AppComponent ],
  providers: [ CrayonsService ]
})
export class AppModule { }

// Bootstrap the main module.
const platform = platformBrowserDynamic();
platform.bootstrapModule(AppModule);