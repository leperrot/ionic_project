import { Injectable } from '@angular/core';
import { BehaviorSubject } from "rxjs/BehaviorSubject";
import { Geolocation } from '@ionic-native/geolocation';
import { Observable } from "rxjs";

/*
  Generated class for the LocationProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
/**
 * Provider trackant la position de l'utilisateur
 */
@Injectable()
export class LocationProvider {

  /**
   * Localisation
   */
  private _location: BehaviorSubject<{lat: number, lng: number}>;
  /**
   * Premier calcul de position
   */
  private _firstLoc: any;

  /**
   * Constructeur
   * @param {Geolocation} geolocation
   */
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

  /**
   * Getter de la localisation actuelle
   * @returns {Observable<any>}
   */
  getLocation() : Observable<any>{
    return this._location;
  }

  /**
   * Getter de la première localisation
   * @returns {any}
   */
  getFirstLoc(){
    return this._firstLoc;
  }
}
