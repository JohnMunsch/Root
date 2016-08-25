import { Component } from '@angular/core';
import { bootstrap } from '@angular/platform-browser-dynamic';

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
          <p><label>Username: <input ngControl="username" required></label></p>
          <p><label>Password: <input type="password" ngControl="password" required minlength="8"></label></p>
          <button type="submit" [disabled]="!f.form.valid">Submit!</button>
        </form>

        <h2>Two-way Binding</h2>
        <p><label>Search: <input [(ngModel)]="searchTerm"></label></p>

        <ul>
          <li *ngFor="let item of items | basicFilterPipe:searchTerm">{{ item }}</li>
        </ul>
      </div>`,
    pipes: [ BasicFilterPipe ],
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
  `,
  directives: [ BasicForm, AdvancedForm ]
})
export class AppComponent {
}

bootstrap(AppComponent);
