import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

export class Users {
  pageList = [];
  users = null;

  page(pageNumber) {
  }

  data() {
    return this.users.data;
  }

  user (id) {
    return { };
  }

  pages() {
    return this.pageList;
  }
}

// This needs to be marked @Injectable so the dependency injector will inject Http.
@Injectable()
export class UsersHttp extends Users {
  http = null;

  constructor(http: Http) {
    super();
    this.http = http;

    // This avoids us getting an error in the console when we access a member
    // variable of the people object in the ng-for before the service has
    // returned.
    this.users = {
      data: [],
      total_pages: 1
    };
    this.pageList = [ 1 ];

    this.page(1);
  }

  user (id) {
    return this.http.get(`http://reqres.in/api/users/${id}`).map(res => res.json());
  }

  page(pageNumber) {
    // Call map on the response observable to get the parsed people object
    let observable = this.http.get(`http://reqres.in/api/users?page=${pageNumber}`).map(res => res.json());

    // Subscribe to the observable to get the parsed people object and
    // attach it to the component.
    observable.subscribe(people => {
      this.users = people;

      this.pageList = [ ];
      for (let i = 1; i <= people.total_pages; i++) {
        this.pageList.push(i);
      }
    });
  }
}
