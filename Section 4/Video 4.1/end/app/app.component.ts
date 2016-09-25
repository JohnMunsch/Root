declare var componentHandler;

import { Component } from '@angular/core';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { DemoChartsComponent } from './demoCharts.component';
import { DemoGraphsComponent } from './demoGraphs.component';
import { DemoCardsComponent } from './demoCards.component';

@Component({
  selector: 'app',
  templateUrl: 'app/app.template.html'
})
export class DashboardComponent {
  ngAfterViewInit() {
    componentHandler.upgradeDom();
  }
}

// Create a module for our application.
@NgModule({
  imports: [ BrowserModule, FormsModule ],
  declarations: [
    DashboardComponent,
    DemoChartsComponent,
    DemoGraphsComponent,
    DemoCardsComponent
  ],
  bootstrap: [ DashboardComponent ]
})
export class AppModule { }

// Bootstrap the main module.
const platform = platformBrowserDynamic();
platform.bootstrapModule(AppModule);