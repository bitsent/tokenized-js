
import BaseType, { FixedChar5, FixedChar12, VarChar_small } from "./../../Base";


/**
 * ### Share - Common ###
 * Common stock represents ownership interests in companies.
 */
class CommonShare extends BaseType {

  constructor() {
    super();
    super.requiredFieldNames = [ "Description" ];
    super.fieldNames = [ "Ticker", "ISIN", "Description" ];
  }

  public validate() {
    super.validateAllFields();
  }

  
  private _Ticker: FixedChar5;
  /**
   * # Ticker Symbol #
   * Ticker symbol assigned by exchanges to represent the asset.
   */
  public set Ticker(val: string) {
    this._Ticker = new FixedChar5(val);
    this._Ticker.validate();
  }
  public get Ticker() : string {
    return this._Ticker.value;
  }

  private _ISIN: FixedChar12;
  /**
   * # ISIN (optional) #
   * International Securities Identification Number
   */
  public set ISIN(val: string) {
    this._ISIN = new FixedChar12(val);
    this._ISIN.validate();
  }
  public get ISIN() : string {
    return this._ISIN.value;
  }

  private _Description: VarChar_small;
  /**
   * # Description #
   * undefined
   */
  public set Description(val: string) {
    this._Description = new VarChar_small(val);
    this._Description.validate();
  }
  public get Description() : string {
    return this._Description.value;
  }
}

export default CommonShare;