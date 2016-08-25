import { Component, Input } from '@angular/core';

@Component({
  selector: 'icon-with-text',
  template: `<div class="iconWithText">
               <img [src]="icon">
               <ng-content></ng-content>
             </div>`,
  styles: [ `.iconWithText {
               width: 64px;
               display: flex;
               flex-direction: column;
               align-items: center;
               
               text-wrap: none;
             }
             
             .iconWithText img {
               width: 32px;
             }` ]
})
export class IconWithTextComponent {
  @Input() icon: string;
  @Input() text: string;
}