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
        center: this._pos,
        zoom: 14
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
      travelMode  : google.maps.DirectionsTravelMode.WALKING,
      waypoints:[{location : {lat: 45.7846089, lng: 3.0827151}},{location : {lat: 45.7874894, lng: 3.0715386}}],
    };

    var directionsService = new google.maps.DirectionsService();
    directionsService.route(request, function(response, status){
      if(status == google.maps.DirectionsStatus.OK){
        direction.setDirections(response);
      }
    });
  }

  ionViewDidLoad() {
    this.initMap();
  }

}
