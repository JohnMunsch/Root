import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

// If you don't do this you cannot use map or other RxJS operators
import 'rxjs/Rx';

@Injectable()
export class Weather {
  query = 'https://query.yahooapis.com/v1/public/yql?q=select%20item.condition%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22fort%20worth%2C%20ak%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys';

  constructor (private http: Http) {
  }

  fortWorth () {
    return new Observable(observer => { });
  }
}
