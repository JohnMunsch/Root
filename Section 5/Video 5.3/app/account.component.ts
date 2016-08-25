import { Component } from '@angular/core';
import { bootstrap } from '@angular/platform-browser-dynamic';
import { HTTP_PROVIDERS } from '@angular/http';
import { ActivatedRoute } from '@angular/router';

import { AccountService } from './account.service';

@Component({
  templateUrl: 'app/account.template.html',
  providers: [ AccountService ]
})
export class AccountComponent {
  accountNumber = null;
  account = {};

  // The account number and the security token came from whatever
  // API call we used to authenticate originally.
  myAccountNumber = 2;
  securityToken = 'J1GU3BI9VW';

  constructor(private route: ActivatedRoute, private accountService : AccountService) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.accountNumber = parseInt(params['id'], 10);

      this.accountService.getAccount(this.accountNumber, this.securityToken)
          .subscribe((data: any) => this.account = data);
    });
  }

  myAccount() {
    return this.accountNumber === this.myAccountNumber;
  }

  deleteAccount() {
    this.accountService.deleteAccount(this.accountNumber, this.securityToken)
        .subscribe(results => console.log(results));
  }
}
