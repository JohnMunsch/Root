declare var $;

import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'sign-in',
  templateUrl: 'app/signIn.template.html',
})
export class SignInComponent {
  @Output('success') good = new EventEmitter();
  @Output() failure = new EventEmitter();

  triggerModal() {
    // Trigger the modal for signing in.
    $('#myModal').modal();
  }

  signIn (email, password) {
    $('#myModal').modal('toggle');

    // Evaluate the sign in attempt.
    if (email === 'john.munsch@gmail.com' && password === 'password') {
      this.good.emit(email);
    } else {
      this.failure.emit(null);
    }
  }
}