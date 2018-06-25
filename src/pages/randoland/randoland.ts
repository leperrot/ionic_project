import { Component } from '@angular/core';
import { NavController, NavParams } from "ionic-angular";
import { Rando } from "../../model/rando";
import { RandolandDetail } from "../randoland-detail/randoland-detail";
import {Timer} from "../../model/timer";

//$IMPORTSTATEMENT

/**
 * Generated class for the Randoland page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
//$IONICPAGE
@Component({
  selector: 'page-randoland',
  templateUrl: 'randoland.html',
})
export class Randoland {

  private _list: Array<Rando>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this._list = [
      new Rando("La rando du bonheur",
        "C tro bien",
        "../../assets/imgs/rando.jpg",
        "1 rue des Carpattes, 66600 Carottes City",
        "2:00",
        1000,
        2,
        new Timer()),
      new Rando("La rando du malheur",
        "C pa ouf",
        "../../assets/imgs/croco.jpg",
        "1 rue des Carpattes, 66600 Carottes City",
        "2:00",
        1000,
        3,
        new Timer()),
      new Rando("La rando de Tax",
        "la best de ta life ever",
        "../../assets/imgs/detax.png",
        "1 rue des Carpattes, 66600 Carottes City",
        "2:00",
        1000,
        5,
        new Timer())];
  }

  goToDetail(rando: Rando) {
    this.navCtrl.push(RandolandDetail, {
      rando: rando
    });
  }

  full_stars(num: number){
    return new Array(num);
  }

  empty_stars(num: number){
    return new Array(5-num);
  }

  public get list(){
    return this._list;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Randoland');
  }

}
