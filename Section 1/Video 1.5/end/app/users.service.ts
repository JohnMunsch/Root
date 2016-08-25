export class Users {
  pageList = [ ];
  users = null;

  constructor() {
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

  data() {
    return this.users.data;
  }

  pages() {
    return this.pageList;
  }
}