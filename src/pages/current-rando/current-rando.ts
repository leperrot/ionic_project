import {Component, ViewChild, ElementRef} from '@angular/core';
import { NavController, NavParams } from "ionic-angular";
import { Rando } from "../../model/rando";
import { LocationProvider } from "../../providers/location-provider";
//$IMPORTSTATEMENT

/**
 * Generated class for the CurrentRando page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
//$IONICPAGE
@Component({
  selector: 'page-current-rando',
  templateUrl: 'current-rando.html',
})
export class CurrentRando {
  @ViewChild('map') mapElement: ElementRef;

  private _rando: Rando;
  private _pos: any;
  private _marker: google.maps.Marker;

  get rando(): Rando {
    return this._rando;
  }

  constructor(public navCtrl: NavController, public navParams: NavParams, public location: LocationProvider) {
    this._rando = navParams.get("rando");
    location.getLocation().subscribe((loc) => {
      this._pos = loc;
      this._marker ? this._marker.setPosition(loc) : location.getFirstLoc();
    });
  }

  initMap() {

    var map = new google.maps.Map(
      this.mapElement.nativeElement,
      {
        zoom: 20,
        center: this._pos
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

    let waypoints = new Array();
    this._rando.steps.forEach(s => {
      waypoints.push({location: {lat: s.lat, lng: s.lng}});
    });

    var request = {
      origin      : {lat: this._rando.steps[0].lat, lng: this._rando.steps[0].lng},
      destination : {lat: this._rando.steps[this._rando.steps.length-1].lat, lng: this._rando.steps[this._rando.steps.length-1].lng},
      travelMode  : google.maps.TravelMode.WALKING,
      waypoints: waypoints
    };

    var directionsService = new google.maps.DirectionsService();
    directionsService.route(request, function(response, status){
      if(status == google.maps.DirectionsStatus.OK){
        direction.setDirections(response);
      }
    });
  }

  ionViewDidLoad() {
    this._rando.timer.start();
    this.initMap();
  }

  ionViewDidLeave() {
    this._rando.timer.stop();
  }

}
