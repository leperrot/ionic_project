import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from "rxjs/Observable";

/*
  Generated class for the DataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
/**
 * Provider récupérant les données de Metz
 */
@Injectable()
export class DataProvider {

  /**
   *
   * @param {HttpClient} http
   */
  constructor(public http: HttpClient) {

  }

  /**
   * Retourne le résultat de la requête
   * @returns {Observable<any>}
   */
  getData() : Observable<any>{
    return this.http.get("https://maps.metzmetropole.fr/ows?service=WFS&version=2.0.0&request=GetFeature&typeName=public:pub_tou_bal_nat_rando&srsName=EPSG:4326&outputFormat=json");
  }

}
