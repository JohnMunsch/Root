declare var componentHandler;

import { Component } from '@angular/core';
import { bootstrap } from '@angular/platform-browser-dynamic';

@Component({
  selector: 'app',
  templateUrl: 'app/app.template.html'
})
export class AppComponent {
  public options = {
    forValues: [
      'Click per object',
      'Views per object',
      'Objects selected',
      'Objects viewed'
    ],
    ifValue: true,
    switchValue: 'type1'
  };

  ngAfterViewInit() {
    componentHandler.upgradeDom();
  }

  componentColor() {
    return { 'mdl-color--teal-300': true };
  }
}

bootstrap(AppComponent);
