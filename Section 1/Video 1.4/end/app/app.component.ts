import { Component } from '@angular/core';
import { bootstrap } from '@angular/platform-browser-dynamic';

@Component({
  selector: 'app',
  template: `
    <div class="container">
      <div class="row">
        <div class="col-sm-12">
          <h1>Hello World!</h1>
        </div>
      </div>
    </div>
  `
})
export class HelloWorld {
}

bootstrap(HelloWorld);
