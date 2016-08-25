import { provideRouter, RouterConfig } from '@angular/router';
import {AccountComponent} from "./account.component";

const routes : RouterConfig = [
  { path: 'account/:id', component: AccountComponent },
  { path: '**', redirectTo: '/account/2' }
];

export const APP_ROUTER_PROVIDERS = [
    provideRouter(routes)
  ];
