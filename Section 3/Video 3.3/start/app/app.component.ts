import { Component } from '@angular/core';
import { bootstrap } from '@angular/platform-browser-dynamic';

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
  selector: 'app',
  template: `
    <basic-form></basic-form>
  `,
  directives: [ BasicForm ]
})
export class AppComponent {
}

bootstrap(AppComponent);
