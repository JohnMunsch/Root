import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AccountComponent } from "./account.component";

const routes : Routes = [
  { path: 'account/:id', component: AccountComponent },
  { path: '**', redirectTo: '/account/2' }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);