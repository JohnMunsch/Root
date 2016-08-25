import { provideRouter, RouterConfig } from '@angular/router';

import { PeopleComponent } from './people.component';
import { UserList } from './userList.component';

const routes : RouterConfig = [
  { path: 'people', component: UserList },
  { path: 'people/:id', component: PeopleComponent },
  { path: '**', redirectTo: '/people' }
];

export const APP_ROUTER_PROVIDERS = [ provideRouter(routes) ];
