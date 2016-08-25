import { Component } from '@angular/core';
import { bootstrap } from '@angular/platform-browser-dynamic';

import { AlertComponent } from './alert.component';
import { IconWithTextComponent } from './iconWithText.component';
import { SignInComponent } from './signIn.component';

@Component({
  selector: 'app',
  templateUrl: 'app/app.template.html',
  directives: [
    AlertComponent,
    IconWithTextComponent,
    SignInComponent
  ]
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

bootstrap(AppComponent);
