
import BaseType, { FixedChar1, UInt64 } from "./../../Base";
import AgeRestriction from "./../../assets/types/AgeRestriction";

/**
 * ### Casino Chip ###
 * Casino Chip
 */
class CasinoChip extends BaseType {

  constructor() {
    super();
    super.requiredFieldNames = [ "CurrencyCode", "Precision" ];
    super.fieldNames = [ "CurrencyCode", "UseType", "AgeRestriction", "ValidFrom", "ExpirationTimestamp", "Precision" ];
  }

  public validate() {
    super.validateAllFields();
  }

  
  private _CurrencyCode: CurrencyType;
  /**
   * # Currency Code #
   * International Organization for Standardization code for Currency. (Specification/Resources)
   */
  public set CurrencyCode(val: CurrencyType) {
    this._CurrencyCode = val;
    this._CurrencyCode.validate();
  }
  public get CurrencyCode() : CurrencyType {
    // TODO: implement this unsupported scenario
  }

  private _UseType: FixedChar1;
  /**
   * # Use Type #
   * Real Money (R), Social (S), Free Play (F)
   */
  public set UseType(val: string) {
    this._UseType = new FixedChar1(val);
    this._UseType.validate();
  }
  public get UseType() : string {
    return this._UseType.value;
  }

  private _AgeRestriction: AgeRestriction;
  /**
   * # Age Restriction #
   * Age restriction is used to specify required ages for asset ownership.
   */
  public set AgeRestriction(val: AgeRestriction) {
    this._AgeRestriction = val;
    this._AgeRestriction.validate();
  }
  public get AgeRestriction() : AgeRestriction {
    return this._AgeRestriction;
  }

  private _ValidFrom: Timestamp;
  /**
   * # Valid From #
   * undefined
   */
  public set ValidFrom(val: Timestamp) {
    this._ValidFrom = val;
    this._ValidFrom.validate();
  }
  public get ValidFrom() : Timestamp {
    // TODO: implement this unsupported scenario
  }

  private _ExpirationTimestamp: Timestamp;
  /**
   * # Expiration Timestamp #
   * undefined
   */
  public set ExpirationTimestamp(val: Timestamp) {
    this._ExpirationTimestamp = val;
    this._ExpirationTimestamp.validate();
  }
  public get ExpirationTimestamp() : Timestamp {
    // TODO: implement this unsupported scenario
  }

  private _Precision: UInt64;
  /**
   * # Precision #
   * Required field to specify the decimal precision of a currency. It will normally be the "precision" value associated with the CurrencyCode. It is the number of decimal places between the number of tokens and the common unit of measure. For example, in AUD, the common unit is the dollar, but a token would only be worth a penny. So the precision should be 2 for the two decimal places in a dollar amount "$1.00". In this scenario 100 tokens are worth $1.
   */
  public set Precision(val: number) {
    this._Precision = new UInt64(val);
    this._Precision.validate();
  }
  public get Precision() : number {
    return this._Precision.value;
  }
}

export default CasinoChip;