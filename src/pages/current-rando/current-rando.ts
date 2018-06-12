import {Component, ViewChild, ElementRef} from '@angular/core';
import { NavController, NavParams } from "ionic-angular";
import { Rando } from "../../model/rando";
import { Geolocation } from '@ionic-native/geolocation';
import { LocationTracker } from '../../providers/location-tracker';
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

  constructor(public navCtrl: NavController, public navParams: NavParams, public geolocation: Geolocation) {
    this._rando = navParams.get("rando");
    geolocation.getCurrentPosition()
      .then((res) => {
        this._pos = res.coords;
      })
  }

  initMap() {
    //this.start();
    /*this.geolocation.getCurrentPosition().then((resp) => {
      this._pos = {lat: resp.coords.latitude, lng: resp.coords.longitude};
      var map = new google.maps.Map(
        this.mapElement.nativeElement,
        {
          center: this._pos,
          zoom: 14
        }
      );
      var marker = new google.maps.Marker(
        {
          position: this._pos,
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
        origin      : this._pos,
        destination : this._pos,
        travelMode  : google.maps.DirectionsTravelMode.WALKING,
        waypoints:[{location : {lat: 45.7846089, lng: 3.0827151}},{location : {lat: 45.7874894, lng: 3.0715386}}],
      }
      var directionsService = new google.maps.DirectionsService();
      directionsService.route(request, function(response, status){
        if(status == google.maps.DirectionsStatus.OK){
        direction.setDirections(response);
        }
      });
    }).catch((err) => {
      console.log(err);
    });*/
/*

    var map = new google.maps.Map(
      this.mapElement.nativeElement,
      {
        center: {
          lat: this.locationTracker.lat,
          lng: this.locationTracker.lng
        },
        zoom: 14
      }
    );
    var marker = new google.maps.Marker(
      {
        position: {
          lat: this.locationTracker.lat,
          lng: this.locationTracker.lng
        },
        animation: google.maps.Animation.DROP,
        map: map
      }
    );*/


    this.geolocation.getCurrentPosition().then((resp) => {
      this._pos = {lat: resp.coords.latitude, lng: resp.coords.longitude};


      this.geolocation.watchPosition().subscribe((data) => {
        var map = new google.maps.Map(
          this.mapElement.nativeElement,
          {
            center: {
              lat: data.coords.latitude,
              lng: data.coords.longitude
            },
            zoom: 14
          }
        );
        var marker = new google.maps.Marker(
          {
            position: {
              lat: data.coords.latitude,
              lng: data.coords.longitude
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
          origin      : this._pos,
          destination : this._pos,
          travelMode  : google.maps.DirectionsTravelMode.WALKING,
          waypoints:[{location : {lat: 45.7846089, lng: 3.0827151}},{location : {lat: 45.7874894, lng: 3.0715386}}],
        };
        var directionsService = new google.maps.DirectionsService();
        directionsService.route(request, function(response, status){
          if(status == google.maps.DirectionsStatus.OK){
            direction.setDirections(response);
          }
        });
      })
    });

  }

  start(){
    this.locationTracker.startTracking();
  }

  stop(){
    this.locationTracker.stopTracking();
  }

  ionViewDidLoad() {
    this.initMap();
  }

}
