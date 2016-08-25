declare var componentHandler;

import { Component } from '@angular/core';
import { bootstrap } from '@angular/platform-browser-dynamic';

@Component({
  selector: 'app',
  templateUrl: 'app/app.template.html'
})
export class DashboardComponent {
  ngAfterViewInit() {
    componentHandler.upgradeDom();
  }
}

bootstrap(DashboardComponent);
