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

  pages() {
    return this.pageList;
  }
}

export class UsersMock extends Users {
  constructor() {
    super();
    this.page(1);

    this.pageList = [ 1, 2 ];
  }

  page(pageNumber) {
    switch (pageNumber) {
      case 1:
        this.users = {
          "page": "1",
          "per_page": 3,
          "total": 6,
          "total_pages": 2,
          "data": [
            {
              "id": 1,
              "first_name": "lucy",
              "last_name": "van pelt",
              "avatar": "http://placehold.it/64x64"
            }, {
              "id": 2,
              "first_name": "linus",
              "last_name": "van pelt",
              "avatar": "http://placehold.it/64x64"
            }, {
              "id": 3,
              "first_name": "charlie",
              "last_name": "brown",
              "avatar": "http://placehold.it/64x64"
            },
          ]
        };
        break;
      case 2:
        this.users = {
          "page": "2",
          "per_page": 3,
          "total": 6,
          "total_pages": 2,
          "data": [
            {
              "id": 4,
              "first_name": "snoopy",
              "last_name": "",
              "avatar": "http://placehold.it/64x64"
            }, {
              "id": 5,
              "first_name": "pigpen",
              "last_name": "",
              "avatar": "http://placehold.it/64x64"
            }, {
              "id": 6,
              "first_name": "schroeder",
              "last_name": "",
              "avatar": "http://placehold.it/64x64"
            },
          ]
        };
        break;
      default:
        break;
    }
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