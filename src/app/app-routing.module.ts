import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CarComponent } from './components/car/car.component';
import { DevicesComponent } from './components/devices/devices.component';
import { LanguagesComponent } from './components/languages/languages.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { AudiComponent } from './components/audi/audi.component';
import { BmwComponent } from './components/bmw/bmw.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'car',
    component: CarComponent,
    children: [
      { path: 'audi', component: AudiComponent },
      { path: 'bmw', component: BmwComponent },
    ],
  },
  { path: 'devices', component: DevicesComponent },
  { path: 'languages', component: LanguagesComponent },
  { path: '**', component: NotfoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
