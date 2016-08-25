import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/Rx';

import { catchHandler, jsendHandler } from './httpError';

const port = 2352;

@Injectable()
export class CrayonsService {
  constructor(private http: Http) {
  }

  getCrayons() {
    return this.http.get(`http://localhost:${port}`).map(jsendHandler).catch(catchHandler);
  }
}
