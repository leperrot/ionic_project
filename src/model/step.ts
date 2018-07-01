export class Step {
  private _numero: number;
  private _description: string;
  private _lat;
  private _lng;

  constructor(numero?: number, description?: string, lat?, lng?){
    this._numero = numero;
    this._description = description;
    this._lat = lat;
    this._lng = lng;
  }

  get lat() {
    return this._lat;
  }

  get lng() {
    return this._lng;
  }

  set lat(value){
    this._lat = value;
  }

  set lng(value){
    this.lng = value;
  }

  get numero(): number {
    return this._numero;
  }

  set numero(value: number) {
    this._numero = value;
  }

  get description(): string {
    return this._description;
  }

  set description(value: string) {
    this._description = value;
  }
}
