import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/Rx';

const port = 2352;

@Injectable()
export class MoviesService {
  constructor(private http: Http) {
  }

  getMovies() {
    return this.http.get(`http://localhost:${port}`).map(res => res.json());
  }
}