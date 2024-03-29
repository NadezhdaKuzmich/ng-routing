import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DevicesComponent } from './components/devices/devices.component';
import { LanguagesComponent } from './components/languages/languages.component';
import { CarComponent } from './components/car/car.component';
import { HomeComponent } from './components/home/home.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { AudiComponent } from './components/audi/audi.component';
import { BmwComponent } from './components/bmw/bmw.component';
import { IndoorComponent } from './components/devices/components/indoor/indoor.component';
import { OutdoorComponent } from './components/devices/components/outdoor/outdoor.component';
import { DeviseDetailsComponent } from './components/devices/components/devise-details/devise-details.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    DevicesComponent,
    LanguagesComponent,
    CarComponent,
    HomeComponent,
    NotfoundComponent,
    AudiComponent,
    BmwComponent,
    IndoorComponent,
    OutdoorComponent,
    DeviseDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    // AuthModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
