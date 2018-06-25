export class Step {
  private _numero: number;
  private _description: string;

  constructor(numero?: number, description?: string){
    this._numero = numero;
    this._description = description;
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
