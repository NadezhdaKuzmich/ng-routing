import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CarComponent } from './components/car/car.component';
import { DevicesComponent } from './components/devices/devices.component';
import { LanguagesComponent } from './components/languages/languages.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { AudiComponent } from './components/audi/audi.component';
import { BmwComponent } from './components/bmw/bmw.component';
import { OutdoorComponent } from './components/devices/components/outdoor/outdoor.component';
import { IndoorComponent } from './components/devices/components/indoor/indoor.component';
import { DeviseDetailsComponent } from './components/devices/components/devise-details/devise-details.component';
import { authGuard } from './auth.guard';
import { leaveGuard } from './leave.guard';
import { resolverGuard } from './resolver.guard';
import { loadGuard } from './load.guard';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'car',
    component: CarComponent,
    children: [
      {
        path: 'audi',
        component: AudiComponent,
        canDeactivate: [leaveGuard],
      },
      { path: 'bmw', component: BmwComponent },
    ],
  },
  {
    path: 'auth',
    loadChildren: () => import('../auth/auth.module').then((m) => m.AuthModule), // without import AuthModule in file app.module
  },
  // { path: 'auth', component: AuthComponent },
  {
    path: 'devices',
    component: DevicesComponent,
    children: [
      { path: 'outdoor', component: OutdoorComponent },
      { path: 'indoor', component: IndoorComponent },
      {
        path: 'indoor/:id',
        component: DeviseDetailsComponent,
        resolve: { deviceInfo: resolverGuard },
      },
    ],
  },
  {
    path: 'languages',
    component: LanguagesComponent,
    loadChildren: () => import('./lang/lang.module').then((m) => m.LangModule),
    canMatch: [loadGuard],
    canActivate: [authGuard],
  },
  { path: '**', component: NotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
