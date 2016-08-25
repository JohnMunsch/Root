import { Injectable } from '@angular/core';
import {Http, URLSearchParams, RequestOptions} from '@angular/http';

import 'rxjs/Rx';

import { catchHandler, jsendHandler } from './httpError';

const port = 2352;
const version = 'v1';

@Injectable()
export class AccountService {
  constructor(private http: Http) {
  }

  createOptions(securityToken) {
    let params = new URLSearchParams();
    params.set('token', securityToken);

    return new RequestOptions({
      search: params
    });
  }

  getAccount(accountNumber, securityToken) {
    return this.http.get(
        `http://localhost:${port}/api/${version}/account/${accountNumber}`,
        this.createOptions(securityToken)).map(jsendHandler).catch(catchHandler);
  }

  deleteAccount(accountNumber, securityToken) {
    return this.http.delete(
        `http://localhost:${port}/api/${version}/account/${accountNumber}`,
        this.createOptions(securityToken)).map(jsendHandler).catch(catchHandler);
  }
}
