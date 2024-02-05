import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ROUTS } from '@utils/constants';
import { AuthGuard, UnAuthGuard } from './guards';


const routes: Routes = [
  {
    path: ROUTS.DASHBOARD.path,
    canActivate: [AuthGuard],
    loadChildren: () => import('./containers/dashboard').then(m => m.DashboardModule)
  },
  {
    path: ROUTS.AUTHENTICATION.path,
    loadChildren: () => import('./containers/authentication').then(m => m.AuthenticationModule),
    canActivate: [UnAuthGuard],
  },
  {
    path: '**',
    redirectTo: ROUTS.DASHBOARD.path
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
