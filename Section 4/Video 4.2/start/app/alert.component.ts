import { Component, Input } from '@angular/core';

@Component({
  selector: 'alert',
  template: `<div class="alert alert-warning alert-dismissible" role="alert">
               <button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>
               {{ message }}
             </div>`
})
export class AlertComponent {
  @Input() message: string;
}