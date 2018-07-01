import { Component } from '@angular/core';
import { NavController, NavParams } from "ionic-angular";
import { Rando } from "../../model/rando";
import { RandolandDetail } from "../randoland-detail/randoland-detail";
import {Timer} from "../../model/timer";
import {DataProvider} from "../../providers/data/data";
import {Step} from "../../model/step";

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

  constructor(public navCtrl: NavController, public navParams: NavParams, public data: DataProvider) {
    data.getData().subscribe(value => {
      this._list = [
        new Rando("La rando du bonheur",
          "C tro bien",
          "../../assets/imgs/rando.jpg",
          2,
          new Timer(),
          new Array<Step>()),
        new Rando("La rando du malheur",
          "C pa ouf",
          "../../assets/imgs/croco.jpg",
          3,
          new Timer(),
          new Array<Step>()),
        new Rando("La rando de Tax",
          "la best de ta life ever",
          "../../assets/imgs/detax.png",
          5,
          new Timer(),
          new Array<Step>())];
      value.features.forEach((f,j) => {
        if(j<=2){
          f.geometry.coordinates[0].forEach((c,i) => {
            if(i <= 20){
              let step = new Step(i, "Suivre la direction", c[0], c[1]);
              this._list[j].steps.push(step);
            } else return;
          });
        } else return;
      });
      console.log(this._list);
    });
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
