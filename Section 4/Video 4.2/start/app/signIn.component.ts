declare var $;

import { Component } from '@angular/core';

@Component({
  selector: 'sign-in',
  templateUrl: 'app/signIn.template.html',
})
export class SignInComponent {
  triggerModal() {
    // Trigger the modal for signing in.
    $('#myModal').modal();
  }

  signIn (email, password) {
    $('#myModal').modal('toggle');
  }
}