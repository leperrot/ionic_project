export class Timer {
  /**
   * Les heures
   * @type {number}
   * @private
   */
  private _heures: number = 0;
  /**
   * Les minutes
   * @type {number}
   * @private
   */
  private _minutes: number = 0;
  /**
   * Les secondes
   * @type {number}
   * @private
   */
  private _secondes: number = 0;
  /**
   * Le temps total en seconde
   * @type {number}
   * @private
   */
  private _total: number = 0;
  /**
   * Interval d'incrémentation
   */
  private _timer;

  /**
   * Getter heures
   * @returns {number}
   */
  get heures(): number { return this._heures; }

  /**
   * Getter minutes
   * @returns {number}
   */
  get minutes(): number { return this._minutes; }

  /**
   * Getter secondes
   * @returns {number}
   */
  get secondes(): number { return this._secondes; }

  /**
   * Méthode commencant l'incrémentation du timer toutes les secondes
   */
  start(){
    this._timer = setInterval(() => {
      this._heures = Math.floor(++this._total / 3600);
      this._minutes = Math.floor(this._total/60 - this._heures*60);
      this._secondes = this._total - (this._heures*3600 + this._minutes*60) ;
    }, 1000);
  }

  /**
   * Méthode d'arrêt du timer
   */
  stop(){
    clearInterval(this._timer);
  }

  /**
   * Méthode de remise à zéro du timer
   */
  reset(){
    this._total = this._heures = this._minutes = this._secondes = 0;
  }
}
