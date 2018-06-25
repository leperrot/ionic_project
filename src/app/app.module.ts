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

@NgModule({
  declarations: [
    MyApp,
    Randoland,
    RandolandDetail
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    CurrentRandoModule
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
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
