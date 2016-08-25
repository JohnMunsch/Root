import { Injectable } from '@angular/core';
import { CanActivate, CanDeactivate } from '@angular/router';

import { Observable } from 'rxjs/Observable';

@Injectable()
export class Guard implements CanActivate {
  canActivate () {
    return true;
  }
}