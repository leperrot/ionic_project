import { Injectable } from '@angular/core';
import { BehaviorSubject } from "rxjs/BehaviorSubject";
import { Geolocation } from '@ionic-native/geolocation';
import { Observable } from "rxjs";

/*
  Generated class for the LocationProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class LocationProvider {

  private _location: BehaviorSubject<{lat: number, lng: number}>;
  private _firstLoc: any;

  constructor(private geolocation: Geolocation) {
    this._location = new BehaviorSubject({lat: 0, lng: 0});
    geolocation.getCurrentPosition().then((res) => {
      this._firstLoc = {
        lat: res.coords.latitude,
        lng: res.coords.longitude
      };
    });
    geolocation.watchPosition().subscribe((data) => {
      this._location.next({lat: data.coords.latitude, lng: data.coords.longitude});
    });
  }

  getLocation() : Observable<any>{
    return this._location;
  }

  getFirstLoc(){
    return this._firstLoc;
  }
}
