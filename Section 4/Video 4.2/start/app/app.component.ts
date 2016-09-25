import { Component } from '@angular/core';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AlertComponent } from './alert.component';
import { IconWithTextComponent } from './iconWithText.component';
import { SignInComponent } from './signIn.component';

@Component({
  selector: 'app',
  templateUrl: 'app/app.template.html'
})
export class AppComponent {
  user = '';

  triggerSignIn(signIn) {
    signIn.triggerModal();
  }

  setUser(email) {
    this.user = email;
  }

  validUser() {
    return (this.user !== '' && this.user !== null);
  }
}

// Create a module for our application.
@NgModule({
  imports: [ BrowserModule ],
  declarations: [
    AppComponent,
    AlertComponent,
    IconWithTextComponent,
    SignInComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }

// Bootstrap the main module.
const platform = platformBrowserDynamic();
platform.bootstrapModule(AppModule);