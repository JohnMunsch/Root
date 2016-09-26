import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PeopleComponent } from './people.component';
import { UserListComponent } from './userList.component';

import { Guard } from './guard.service';

const routes : Routes = [
  { path: 'people', component: UserListComponent },
  { path: 'people/:id', component: PeopleComponent, canActivate: [ Guard ] },
  { path: '**', redirectTo: '/people' }
];

export const appRoutingProviders: any[] = [
  Guard
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes, { useHash: true });