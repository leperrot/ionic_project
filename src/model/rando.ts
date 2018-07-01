import { Timer } from "./timer";
import {Step} from "./step";

export class Rando {
  private _name: string;
  private _desc: string;
  private _img: string;
  private _note: number;
  private _timer: Timer;
  private _steps: Array<Step>;

  constructor(name?: string, desc?: string, img?: string, note?: number, timer?: Timer, steps?: Array<Step>){
    this._name = name;
    this._desc = desc;
    this._img = img;
    this._note = note;
    this._timer = timer;
    this._steps = steps;
  }

  public get steps(): Array<Step> {
    return this._steps;
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

  public get note(): number {
    return this._note;
  }

  public set note(value: number) {
    this._note = value;
  }
}
