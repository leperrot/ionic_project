export class Step {
  /**
   * Numéro de la Step
   */
  private _numero: number;
  /**
   * Description de la Step
   */
  private _description: string;
  /**
   * Latitude
   */
  private _lat;
  /**
   * Longitude
   */
  private _lng;

  /**
   * Constructeur d'une Step
   * @param {number} numero
   * @param {string} description
   * @param lat
   * @param lng
   */
  constructor(numero?: number, description?: string, lat?, lng?){
    this._numero = numero;
    this._description = description;
    this._lat = lat;
    this._lng = lng;
  }

  /**
   * Getter lat
   * @returns {any}
   */
  get lat() {
    return this._lat;
  }

  /**
   * Getter lng
   * @returns {any}
   */
  get lng() {
    return this._lng;
  }

  /**
   * Setter lat
   * @param value
   */
  set lat(value){
    this._lat = value;
  }

  /**
   * Setter lng
   * @param value
   */
  set lng(value){
    this.lng = value;
  }

  /**
   * Getter numero
   * @returns {number}
   */
  get numero(): number {
    return this._numero;
  }

  /**
   * Setter numero
   * @param {number} value
   */
  set numero(value: number) {
    this._numero = value;
  }

  /**
   * Getter description
   * @returns {string}
   */
  get description(): string {
    return this._description;
  }

  /**
   * Setter description
   * @param {string} value
   */
  set description(value: string) {
    this._description = value;
  }
}
