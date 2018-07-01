import { Timer } from "./timer";
import {Step} from "./step";

export class Rando {
  /**
   * Nom de la randonnée
   */
  private _name: string;
  /**
   * Description de la randonnée
   */
  private _desc: string;
  /**
   * Image de la randonnée
   */
  private _img: string;
  /**
   * Note de la randonnée
   */
  private _note: number;
  /**
   * Timer de temps parcouru
   */
  private _timer: Timer;
  /**
   * Liste de Step
   */
  private _steps: Array<Step>;

  /**
   * Constructeur d'une Randonnée
   * @param {string} name
   * @param {string} desc
   * @param {string} img
   * @param {number} note
   * @param {Timer} timer
   * @param {Array<Step>} steps
   */
  constructor(name?: string, desc?: string, img?: string, note?: number, timer?: Timer, steps?: Array<Step>){
    this._name = name;
    this._desc = desc;
    this._img = img;
    this._note = note;
    this._timer = timer;
    this._steps = steps;
  }

  /**
   * Getter steps
   * @returns {Array<Step>}
   */
  public get steps(): Array<Step> {
    return this._steps;
  }

  /**
   * Getter timer
   * @returns {Timer}
   */
  public get timer(): Timer {
    return this._timer;
  }

  /**
   * Getter name
   * @returns {string}
   */
  public get name(): string {
    return this._name;
  }

  /**
   * Getter desc
   * @returns {string}
   */
  public get desc(): string {
    return this._desc;
  }

  /**
   * Getter img
   * @returns {string}
   */
  public get img(): string {
    return this._img;
  }

  /**
   * Getter note
   * @returns {number}
   */
  public get note(): number {
    return this._note;
  }

  /**
   * Setter note
   * @param {number} value
   */
  public set note(value: number) {
    this._note = value;
  }
}
