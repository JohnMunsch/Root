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
    return new Observable(observer => {
      // At this point we could look in localStorage for a cached set of data
      // and use that to generate an event immediately.
      observer.next({
        date: "Fri, 07 Aug 2015 3:52 pm CST",
        temp: "105",
        text: "Clear"
      });

      let httpObservable = this.http.get(this.query)
        .map(res => res.json().query.results.channel.item.condition);

      // At this point, instead of logging out the returned value, we could
      // store it in localStorage for later retrieval.
      httpObservable.subscribe(res => console.log(res));

      // This is the subscription that emits the second event which updates the
      // UI with current information.
      httpObservable.subscribe(res => observer.next(res));
    });
  }
}
