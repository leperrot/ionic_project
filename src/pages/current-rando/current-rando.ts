import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams } from "ionic-angular";
import { Rando } from "../../model/rando";
import { Geolocation } from '@ionic-native/geolocation';


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

  constructor(public navCtrl: NavController, public navParams: NavParams, private geolocation: Geolocation) {
    this._rando = navParams.get("rando");
  }

  initMap(){
    this.geolocation.getCurrentPosition().then((resp) => {
      this._pos = { lat: resp.coords.latitude, lng: resp.coords.longitude };
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
          draggable: true,
          animation: google.maps.Animation.DROP,
          map: map
        }
      );
      marker.addListener('click', toggleBounce);
    }).catch((err) => {
      console.log(err);
    });
  }

  toggleBounce() {
    if (marker.getAnimation() !== null) {
      marker.setAnimation(null);
    } else {
      marker.setAnimation(google.maps.Animation.BOUNCE);
    }
  }

  ionViewDidLoad() {
    this.initMap();
  }

}
