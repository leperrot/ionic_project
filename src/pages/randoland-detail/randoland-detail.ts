import {Component, ViewChild, ElementRef} from '@angular/core';
import { NavController, NavParams } from "ionic-angular";
import { Rando } from "../../model/rando";
import { CurrentRando } from "../current-rando/current-rando"
import {LocationProvider} from "../../providers/location-provider";
import LatLng = google.maps.LatLng;
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
  private _map;

  constructor(public navCtrl: NavController, public navParams: NavParams, public location: LocationProvider) {
    this._rando = navParams.get("rando");
    location.getLocation().subscribe((loc) => {
      this._pos = loc;
      this._marker ? this._marker.setPosition(loc) : location.getFirstLoc();
      //this._map.setCenter(this._marker.getPosition());
    });
  }

  public get rando(): Rando {
    return this._rando;
  }

  initMap() {
    this._map = new google.maps.Map(
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
        map: this._map
      }
    );

    var panel;
    var direction = new google.maps.DirectionsRenderer({
      map   : this._map,
      panel : panel
    });

    let waypoints = new Array();
    this._rando.steps.forEach(s => {
      waypoints.push({location: new LatLng(s.lat, s.lng)});
    });

    /*var request = {
      origin      : {lat: this._rando.steps[0].lat, lng: this._rando.steps[0].lng},
      destination : {lat: this._rando.steps[this._rando.steps.length-1].lat, lng: this._rando.steps[this._rando.steps.length-1].lng},
      travelMode  : google.maps.TravelMode.WALKING,
      waypoints   : waypoints
    };*/

    var request = {
      origin      : this._pos,
      destination : this._pos,
      travelMode  : google.maps.TravelMode.WALKING,
      waypoints:[{location : new google.maps.LatLng(45.7846089,3.0827151)},{location : new google.maps.LatLng(45.7874894,3.0715386)}]
    };

    var directionsService = new google.maps.DirectionsService();
    directionsService.route(request, function(response, status){
      console.log(status);
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
    this.initMap();
  }

  full_stars(num: number){
    return new Array(num);
  }

  empty_stars(num: number){
    return new Array(5-num);
  }

}
