export class Timer {

  private _heures: number = 0;
  private _minutes: number = 0;
  private _secondes: number = 0;
  private _total: number = 0;
  private _timer;

  get heures(): number { return this._heures; }
  get minutes(): number { return this._minutes; }
  get secondes(): number { return this._secondes; }

  start(){
    this._timer = setInterval(() => {
      this._heures = Math.floor(++this._total / 3600);
      this._minutes = Math.floor(this._total/60 - this._heures*60);
      this._secondes = this._total - (this._heures*3600 + this._minutes*60) ;
    }, 1000);
  }

  stop(){
    clearInterval(this._timer);
  }

  reset(){
    this._total = this._heures = this._minutes = this._secondes = 0;
  }
}