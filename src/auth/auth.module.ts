import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { AdminComponent } from './components/admin/admin.component';
import { GuestComponent } from './components/guest/guest.component';
import { AuthComponent } from './components/auth/auth.component';

console.log('Module starts!');

@NgModule({
  declarations: [AdminComponent, GuestComponent, AuthComponent],
  imports: [CommonModule, AuthRoutingModule],
  exports: [AdminComponent, GuestComponent, AuthComponent],
})
export class AuthModule {}
