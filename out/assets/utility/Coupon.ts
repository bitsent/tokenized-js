
import BaseType, { VarChar, UInt64, VarChar_small } from "./../../Base";


/**
 * ### Coupon ###
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

  
  private _RedeemingEntity: VarChar;
  /**
   * # Redeeming Entity #
   * The entity responsible for redemption of this coupon.
   */
  public set RedeemingEntity(val: string) {
    this._RedeemingEntity = new VarChar(val);
    this._RedeemingEntity.validate();
  }
  public get RedeemingEntity() : string {
    return this._RedeemingEntity.value;
  }

  private _IssueDate: Timestamp;
  /**
   * # Issue Date #
   * undefined
   */
  public set IssueDate(val: Timestamp) {
    this._IssueDate = val;
    this._IssueDate.validate();
  }
  public get IssueDate() : Timestamp {
    // TODO: implement this unsupported scenario
  }

  private _ExpiryDate: Timestamp;
  /**
   * # Expiry Date #
   * undefined
   */
  public set ExpiryDate(val: Timestamp) {
    this._ExpiryDate = val;
    this._ExpiryDate.validate();
  }
  public get ExpiryDate() : Timestamp {
    // TODO: implement this unsupported scenario
  }

  private _Value: UInt64;
  /**
   * # Value #
   * undefined
   */
  public set Value(val: number) {
    this._Value = new UInt64(val);
    this._Value.validate();
  }
  public get Value() : number {
    return this._Value.value;
  }

  private _Currency: CurrencyType;
  /**
   * # Currency #
   * International Organization for Standardization code for Currency. Currency for coupon. From resources/currency.
   */
  public set Currency(val: CurrencyType) {
    this._Currency = val;
    this._Currency.validate();
  }
  public get Currency() : CurrencyType {
    // TODO: implement this unsupported scenario
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

  private _Precision: UInt64;
  /**
   * # Precision #
   * Required field to specify the decimal precision of a currency. It will normally be the "precision" value associated with the Currency. It is the number of decimal places between the number of tokens and the common unit of measure. For example, in AUD, the common unit is the dollar, but a token would only be worth a penny. So the precision should be 2 for the two decimal places in a dollar amount "$1.00". In this scenario 100 tokens are worth $1.
   */
  public set Precision(val: number) {
    this._Precision = new UInt64(val);
    this._Precision.validate();
  }
  public get Precision() : number {
    return this._Precision.value;
  }
}

export default Coupon;