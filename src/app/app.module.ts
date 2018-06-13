import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

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
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
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
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
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
