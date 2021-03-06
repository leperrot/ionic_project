/**
 * Declaration de google
 */
declare var google: any;
import {Component, ViewChild, ElementRef} from '@angular/core';
import { NavController, NavParams } from "ionic-angular";
import { Rando } from "../../model/rando";
import { CurrentRando } from "../current-rando/current-rando"
import {LocationProvider} from "../../providers/location-provider";
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
  /**
   * Div affichant la map
   */
  @ViewChild('map') mapElement: ElementRef;
  /**
   * Randonnée courante
   */
  private _rando: Rando;
  /**
   * Position de l'utilisateur
   */
  private _pos: any;
  /**
   * Marker de la position de l'utilisateur
   */
  private _marker: any;
  /**
   * Objet carte google maps
   */
  private _map;

  /**
   * Constructeur récupérant la randonnée et calculant la position de l'utilisateur
   * @param {NavController} navCtrl
   * @param {NavParams} navParams
   * @param {LocationProvider} location
   */
  constructor(public navCtrl: NavController, public navParams: NavParams, public location: LocationProvider) {
    this._rando = navParams.get("rando");
    location.getLocation().subscribe((loc) => {
      this._pos = loc;
      this._marker ? this._marker.setPosition(loc) : location.getFirstLoc();
      this._map ? this._map.setCenter(this._marker.getPosition()) : null;
    });
  }

  /**
   * Getter rando
   * @returns {Rando}
   */
  public get rando(): Rando {
    return this._rando;
  }

  /**
   * Fonction d'initialisation de la carte
   */
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

    /*let waypoints = new Array();
    this._rando.steps.forEach(s => {
      waypoints.push({lat: s.lat, lng: s.lng});
    });
    let origin =  waypoints.pop();

    var request = {
      origin      : origin,
      destination : origin,
      travelMode  : google.maps.TravelMode.WALKING,
      waypoints: waypoints
    };*/

    var request = {
      origin      : { lat: 45.7846089, lng: 3.0827151},
      destination : { lat: 45.7846089, lng: 3.0827151},
      travelMode  : google.maps.TravelMode.WALKING,
      waypoints:[{ location : { lat: 45.7846089, lng: 3.0827151}},{ location : { lat: 45.7874894, lng: 3.0715386}}]
    };

    var directionsService = new google.maps.DirectionsService();
    directionsService.route(request, function(response, status){
      console.log(status);
      if(status == google.maps.DirectionsStatus.OK){
        direction.setDirections(response);
      }
    });
  }

  /**
   * Fonction de navigation vers CurrentRando
   * @param {Rando} rando
   */
  goToMap(rando: Rando){
    this.navCtrl.push(CurrentRando, {
      rando: rando
    });
  }

  /**
   * Fonction initialisant la carte au chargement de la carte
   */
  ionViewDidLoad() {
    this.initMap();
  }

  /**
   * Retourne un tableau
   * @param {number} num
   * @returns {any[]}
   */
  full_stars(num: number){
    return new Array(num);
  }

  /**
   * Retourne un tableau
   * @param {number} num
   * @returns {any[]}
   */
  empty_stars(num: number){
    return new Array(5-num);
  }

}
