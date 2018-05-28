import { Component } from '@angular/core';
import { NavController, NavParams } from "ionic-angular";
import { Rando } from "../../model/rando";
import { CurrentRando } from "../current-rando/current-rando";
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
  private _rando: Rando;
  public current: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this._rando = navParams.get("rando");
    this.current = CurrentRando;
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
