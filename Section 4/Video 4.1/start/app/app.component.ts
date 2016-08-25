declare var componentHandler;

import { Component } from '@angular/core';
import { bootstrap } from '@angular/platform-browser-dynamic';

import { DemoChartsComponent } from './demoCharts.component';
import { DemoGraphsComponent } from './demoGraphs.component';
import { DemoCardsComponent } from './demoCards.component';

@Component({
  selector: 'app',
  templateUrl: 'app/app.template.html',
  directives: [
    DemoChartsComponent,
    DemoGraphsComponent,
    DemoCardsComponent
  ]
})
export class AppComponent {
  ngAfterViewInit() {
    componentHandler.upgradeDom();
  }
}

bootstrap(AppComponent);
