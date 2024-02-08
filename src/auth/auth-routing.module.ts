import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './components/admin/admin.component';
import { GuestComponent } from './components/guest/guest.component';
import { AuthComponent } from './components/auth/auth.component';
import { authChildGuard } from '../app/auth-child.guard';

const routes: Routes = [
  {
    path: '',
    component: AuthComponent,
    canActivateChild:[authChildGuard],
    children: [
      { path: 'admin', component: AdminComponent },
      { path: 'guest', component: GuestComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
