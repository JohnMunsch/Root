import { Component } from '@angular/core';

@Component({
  selector: 'icon-with-text',
  template: `<div class="iconWithText"><img [src]="icon">{{ text }}</div>`,
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
}