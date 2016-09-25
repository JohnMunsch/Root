import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PeopleComponent } from './people.component';
import { UserListComponent } from './userList.component';

const routes : Routes = [
  { path: 'people', component: UserListComponent },
  { path: 'people/:id', component: PeopleComponent },
  { path: '**', redirectTo: '/people' }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);