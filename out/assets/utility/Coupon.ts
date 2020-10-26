
import BaseType, { VarChar, Timestamp, UInt64, CurrencyType, VarChar_small } from "./../../Base";


/**
 * # Coupon
 * A voucher entitling the holder to a discount on a particular product or service.
 */
class Coupon extends BaseType {

  constructor() {
    super();
    super.requiredFieldNames = [ "Description" ];
    super.fieldNames = [ "RedeemingEntity", "IssueDate", "ExpiryDate", "Value", "Currency", "Description", "Precision" ];
  }

  public validate() {
    super.validateAllFields();
  }

  
/** ## REDEEMING ENTITY */
  private _RedeemingEntity: VarChar;
  /**
   * ### Redeeming Entity 
   * The entity responsible for redemption of this coupon.
   */
  public set RedeemingEntity(val: string) {
    this._RedeemingEntity = new VarChar(val);
    this._RedeemingEntity.validate();
  }
  /**
   * ### Redeeming Entity 
   * The entity responsible for redemption of this coupon.
   */
  public get RedeemingEntity() : string {
    return this._RedeemingEntity.value;
  }

/** ## ISSUE DATE */
  private _IssueDate: Timestamp;
  /**
   * ### Issue Date 
   * undefined
   */
  public set IssueDate(val: number) {
    this._IssueDate = new Timestamp(val);
    this._IssueDate.validate();
  }
  /**
   * ### Issue Date 
   * undefined
   */
  public get IssueDate() : number {
    return this._IssueDate.value;
  }

/** ## EXPIRY DATE */
  private _ExpiryDate: Timestamp;
  /**
   * ### Expiry Date 
   * undefined
   */
  public set ExpiryDate(val: number) {
    this._ExpiryDate = new Timestamp(val);
    this._ExpiryDate.validate();
  }
  /**
   * ### Expiry Date 
   * undefined
   */
  public get ExpiryDate() : number {
    return this._ExpiryDate.value;
  }

/** ## VALUE */
  private _Value: UInt64;
  /**
   * ### Value 
   * undefined
   */
  public set Value(val: number) {
    this._Value = new UInt64(val);
    this._Value.validate();
  }
  /**
   * ### Value 
   * undefined
   */
  public get Value() : number {
    return this._Value.value;
  }

/** ## CURRENCY */
  private _Currency: CurrencyType;
  /**
   * ### Currency 
   * International Organization for Standardization code for Currency. Currency for coupon. From resources/currency.
   */
  public set Currency(val: string) {
    this._Currency = new CurrencyType(val);
    this._Currency.validate();
  }
  /**
   * ### Currency 
   * International Organization for Standardization code for Currency. Currency for coupon. From resources/currency.
   */
  public get Currency() : string {
    return this._Currency.value;
  }

/** ## DESCRIPTION */
  private _Description: VarChar_small;
  /**
   * ### Description 
   * undefined
   */
  public set Description(val: string) {
    this._Description = new VarChar_small(val);
    this._Description.validate();
  }
  /**
   * ### Description 
   * undefined
   */
  public get Description() : string {
    return this._Description.value;
  }

/** ## PRECISION */
  private _Precision: UInt64;
  /**
   * ### Precision 
   * Required field to specify the decimal precision of a currency. It will normally be the "precision" value associated with the Currency. It is the number of decimal places between the number of tokens and the common unit of measure. For example, in AUD, the common unit is the dollar, but a token would only be worth a penny. So the precision should be 2 for the two decimal places in a dollar amount "$1.00". In this scenario 100 tokens are worth $1.
   */
  public set Precision(val: number) {
    this._Precision = new UInt64(val);
    this._Precision.validate();
  }
  /**
   * ### Precision 
   * Required field to specify the decimal precision of a currency. It will normally be the "precision" value associated with the Currency. It is the number of decimal places between the number of tokens and the common unit of measure. For example, in AUD, the common unit is the dollar, but a token would only be worth a penny. So the precision should be 2 for the two decimal places in a dollar amount "$1.00". In this scenario 100 tokens are worth $1.
   */
  public get Precision() : number {
    return this._Precision.value;
  }
}

export default Coupon;