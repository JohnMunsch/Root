import { Component } from '@angular/core';
import { bootstrap } from '@angular/platform-browser-dynamic';
import { BarchartComponent } from './barchart.component';

@Component({
  selector: 'app',
  template: `<barchart [data]="data"></barchart>`,
  directives: [ BarchartComponent ]
})
export class AppComponent {
  data = [4, 8, 15, 16, 23, 42];
}

bootstrap(AppComponent);
