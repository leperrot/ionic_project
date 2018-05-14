import { Component } from '@angular/core';
import { NavController, NavParams } from "ionic-angular";
import { Rando } from "../../model/rando";
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
  templateUrl: 'randoland-detail.html',
})
export class RandolandDetail {
  private _rando: Rando;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this._rando = navParams.get("rando");
  }

  public get rando(): Rando {
    return this._rando;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RandolandDetail');
  }

  full_stars(num: number){
    return new Array(num);
  }

  empty_stars(num: number){
    return new Array(5-num);
  }

}
