import {Component, ViewChild, ElementRef} from '@angular/core';
import { NavController, NavParams } from "ionic-angular";
import { Rando } from "../../model/rando";
import { CurrentRando } from "../current-rando/current-rando"
import {LocationProvider} from "../../providers/location-provider";
import {Step} from "../../model/step";
//$IMPORTSTATEMENT

/**
 * Generated class for the RandolandDetail page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
//$IONICPAGE
@Component({
  selector: 'page-randoland-detail',
  templateUrl: 'randoland-detail.html'
})
export class RandolandDetail {
  @ViewChild('map') mapElement: ElementRef;

  private _rando: Rando;
  private _pos: any;
  private _marker: google.maps.Marker;
  private _listSteps: Array<Step>;

  constructor(public navCtrl: NavController, public navParams: NavParams, public location: LocationProvider) {
    this._rando = navParams.get("rando");
    location.getLocation().subscribe((loc) => {
      this._pos = loc;
      this._marker ? this._marker.setPosition(loc) : location.getFirstLoc();
    });

    this._listSteps = [
      new Step(1,
        "Tourne à gauche"
      ),
      new Step(2,
        "Tourne à droite"
      ),
      new Step(3,
        "Va tout droit"
      ),
      new Step(4,
        "ARREEETE"
      )];
  }

  public get rando(): Rando {
    return this._rando;
  }

  initMap() {
    var map = new google.maps.Map(
      this.mapElement.nativeElement,
      {
        center: this._pos,
        zoom: 20
      }
    );

    this._marker = new google.maps.Marker(
      {
        position: {
          lat: this._pos.lat,
          lng: this._pos.lng
        },
        animation: google.maps.Animation.DROP,
        map: map
      }
    );

    var panel;
    var direction = new google.maps.DirectionsRenderer({
      map   : map,
      panel : panel
    });

    var request = {
      origin      : {lat: 45.7592479, lng: 3.1090747},
      destination : {lat: 45.7592479, lng: 3.1090747},
      travelMode  : google.maps.TravelMode.WALKING,
      waypoints:[{location : {lat: 45.7846089, lng: 3.0827151}},{location : {lat: 45.7874894, lng: 3.0715386}}],
    };

    var directionsService = new google.maps.DirectionsService();
    directionsService.route(request, function(response, status){
      if(status == google.maps.DirectionsStatus.OK){
        direction.setDirections(response);
      }
    });
  }

  goToMap(rando: Rando){
    this.navCtrl.push(CurrentRando, {
      rando: rando
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RandolandDetail');
    this.initMap();
  }

  full_stars(num: number){
    return new Array(num);
  }

  empty_stars(num: number){
    return new Array(5-num);
  }

}
