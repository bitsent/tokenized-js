
import BaseType, { CurrencyType, FixedChar1, Timestamp, UInt64 } from "./../../Base";
import AgeRestriction from "./../../assets/types/AgeRestriction";

/**
 * # Casino Chip
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
  private _UseType: FixedChar1;
  private _AgeRestriction: AgeRestriction;
  private _ValidFrom: Timestamp;
  private _ExpirationTimestamp: Timestamp;
  private _Precision: UInt64;

  
  /**
   * ### Currency Code 
   * International Organization for Standardization code for Currency. (Specification/Resources)
   */
  public set CurrencyCode(val: string) {
    this._CurrencyCode = new CurrencyType(val);
    this._CurrencyCode.validate();
  }
  /**
   * ### Currency Code 
   * International Organization for Standardization code for Currency. (Specification/Resources)
   */
  public get CurrencyCode() : string {
    return this._CurrencyCode.value;
  }

  /**
   * ### Use Type 
   * Real Money (R), Social (S), Free Play (F)
   */
  public set UseType(val: string) {
    this._UseType = new FixedChar1(val);
    this._UseType.validate();
  }
  /**
   * ### Use Type 
   * Real Money (R), Social (S), Free Play (F)
   */
  public get UseType() : string {
    return this._UseType.value;
  }

  /**
   * ### Age Restriction 
   * Age restriction is used to specify required ages for asset ownership.
   */
  public set AgeRestriction(val: AgeRestriction) {
    this._AgeRestriction = val;
    this._AgeRestriction.validate();
  }
  /**
   * ### Age Restriction 
   * Age restriction is used to specify required ages for asset ownership.
   */
  public get AgeRestriction() : AgeRestriction {
    return this._AgeRestriction;
  }

  /**
   * ### Valid From 
   * undefined
   */
  public set ValidFrom(val: number) {
    this._ValidFrom = new Timestamp(val);
    this._ValidFrom.validate();
  }
  /**
   * ### Valid From 
   * undefined
   */
  public get ValidFrom() : number {
    return this._ValidFrom.value;
  }

  /**
   * ### Expiration Timestamp 
   * undefined
   */
  public set ExpirationTimestamp(val: number) {
    this._ExpirationTimestamp = new Timestamp(val);
    this._ExpirationTimestamp.validate();
  }
  /**
   * ### Expiration Timestamp 
   * undefined
   */
  public get ExpirationTimestamp() : number {
    return this._ExpirationTimestamp.value;
  }

  /**
   * ### Precision 
   * Required field to specify the decimal precision of a currency. It will normally be the "precision" value associated with the CurrencyCode. It is the number of decimal places between the number of tokens and the common unit of measure. For example, in AUD, the common unit is the dollar, but a token would only be worth a penny. So the precision should be 2 for the two decimal places in a dollar amount "$1.00". In this scenario 100 tokens are worth $1.
   */
  public set Precision(val: number) {
    this._Precision = new UInt64(val);
    this._Precision.validate();
  }
  /**
   * ### Precision 
   * Required field to specify the decimal precision of a currency. It will normally be the "precision" value associated with the CurrencyCode. It is the number of decimal places between the number of tokens and the common unit of measure. For example, in AUD, the common unit is the dollar, but a token would only be worth a penny. So the precision should be 2 for the two decimal places in a dollar amount "$1.00". In this scenario 100 tokens are worth $1.
   */
  public get Precision() : number {
    return this._Precision.value;
  }
}

export default CasinoChip;