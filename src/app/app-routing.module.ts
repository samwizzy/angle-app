import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {AppComponent} from "./app.component"
import { AuthGuard } from './utility/guards/auth.guard';
import { ProtectedGuard } from './utility/guards/protected.guard';

const routes: Routes = [
  {
    path: '',
    // canActivate: [ProtectedGuard],
    loadChildren: () =>
      import('./modules/modules.module').then((m) => m.ModulesModule),
  },
  {
    path: 'auth',
    canActivate: [AuthGuard],
    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
  },
  { path: '**', redirectTo: "/", pathMatch: "full" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabledBlocking'
})],
  exports: [RouterModule],
})
export class AppRoutingModule {}
