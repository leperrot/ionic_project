import { Timer } from "./timer";

export class Rando {
  private _name: string;
  private _desc: string;
  private _img: string;
  private _adresse: string;
  private _temps: string;
  private _dist: number;
  private _note: number;
  private _timer: Timer;

  constructor(name?: string, desc?: string, img?: string, adresse?: string, temps?: string, dist?: number, note?: number, timer?: Timer){
    this._name = name;
    this._desc = desc;
    this._img = img;
    this._adresse = adresse;
    this._temps = temps;
    this._dist = dist;
    this._note = note;
    this._timer = timer;
  }

  public get timer(): Timer {
    return this._timer;
  }

  public get name(): string {
    return this._name;
  }

  public get desc(): string {
    return this._desc;
  }

  public get img(): string {
    return this._img;
  }

  public get adresse(): string {
    return this._adresse;
  }

  public get temps(): string {
    return this._temps;
  }

  public get dist(): number {
    return this._dist;
  }

  public get note(): number {
    return this._note;
  }

  public set dist(value: number) {
    this._dist = value;
  }

  public set note(value: number) {
    this._note = value;
  }
}
