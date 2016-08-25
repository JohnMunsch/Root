import { Component } from '@angular/core';

@Component({
  selector: 'demo-cards',
  host: {
    'class': 'demo-cards mdl-cell mdl-cell--4-col mdl-cell--8-col-tablet mdl-grid mdl-grid--no-spacing'
  },
  templateUrl: 'app/demoCards.template.html'
})
export class DemoCardsComponent {
  location = '';
  value = {
    subValue: {

    }
  };

  disableLocationInput = false;

  changeLocation(locationInput) {
    this.location = 'Fort Worth';

    this.disableLocationInput = true;
    locationInput.style.color = '#FF5722';
  }
}
