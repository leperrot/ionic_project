import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Randoland } from "../pages/randoland/randoland";
import { RandolandDetail } from "../pages/randoland-detail/randoland-detail";
import { Geolocation } from "@ionic-native/geolocation";
import { CurrentRandoModule } from "../pages/current-rando/current-rando.module";
import { LocationProvider } from "../providers/location-provider";
import { DataProvider } from '../providers/data/data';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    MyApp,
    Randoland,
    RandolandDetail
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    CurrentRandoModule,
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Randoland,
    RandolandDetail
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Geolocation,
    LocationProvider,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    DataProvider
  ]
})
export class AppModule {}
