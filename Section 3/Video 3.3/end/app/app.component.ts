import { Component } from '@angular/core';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { BasicFilterPipe } from './basicFilter.pipe';

@Component({
  selector: 'basic-form',
  template: `
    <div class="container">
      <h2>Basic Form</h2>

      <input [value]="'Hello there'" #hello>
      <button type="submit" (click)="onSubmit(hello.value)">Submit!</button>
    </div>`
})
export class BasicForm {
  onSubmit(value) {
    alert(value);
  }
}

@Component({
    selector: 'advanced-form',
    template: `
      <div class="container">
        <h2>Advanced Form</h2>

        <form #f="ngForm" (ngSubmit)="onSubmit(f.value)">
          <p><label>Username: <input name="username" required></label></p>
          <p><label>Password: <input type="password" name="password" required minlength="8"></label></p>
          <button type="submit" [disabled]="!f.form.valid">Submit!</button>
        </form>

        <h2>Two-way Binding</h2>
        <p><label>Search: <input [(ngModel)]="searchTerm"></label></p>

        <ul>
          <li *ngFor="let item of items | basicFilterPipe:searchTerm">{{ item }}</li>
        </ul>
      </div>`,
    styles: [
      '.ng-invalid { border-color: red; }'
    ]
})
export class AdvancedForm {
  searchTerm: string = '';
  items = [ 'Linus', 'Charlie', 'Lucy' ];

  onSubmit(value) {
    console.log(value);
  }
}

@Component({
  selector: 'app',
  template: `
    <basic-form></basic-form>
    <advanced-form></advanced-form>
  `
})
export class AppComponent {
}

// Create a module for our application.
@NgModule({
  imports: [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, BasicForm, AdvancedForm, BasicFilterPipe ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }

// Bootstrap the main module.
const platform = platformBrowserDynamic();
platform.bootstrapModule(AppModule);