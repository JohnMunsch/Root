import { Component } from '@angular/core';
import { bootstrap } from '@angular/platform-browser-dynamic';
import { HTTP_PROVIDERS } from '@angular/http';

import { CrayonsService } from './crayons.service';

@Component({
  selector: 'app',
  template: `
      <table>
        <tr *ngFor="let crayon of crayons">
          <td>{{ crayon.name }}</td>
          <td [style.background-color]="crayon.hexColor">{{ crayon.hexColor }}</td>
        </tr>      
      </table>
`,
  providers: [ CrayonsService ]
})
export class AppComponent {
  crayons = [];

  constructor(private crayonsService : CrayonsService) {
  }

  ngOnInit() {
    this.crayonsService.getCrayons().subscribe((data: any) => this.crayons = data);
  }
}

bootstrap(AppComponent, HTTP_PROVIDERS);
