
import BaseType, { CurrencyType, VarChar, UInt64 } from "./../../Base";


/**
 * # Currency
 * Currency, fiat money, cash.  Issued by a monetary authority (eg. Reserve Bank of Australia, ECB, Bank of England).  Currency is free of counterparty risk except for the risks associated with the management of the currency by the monetary authority and its recognition as acceptable legal tender by the market and associated government(s).  Custody of currency must be backed by a 1:1 ratio, or a full reserve. A currency asset type should be considered the digital equivalent of physical cash.
 */
class Currency extends BaseType {

  constructor() {
    super();
    super.requiredFieldNames = [ "CurrencyCode", "Precision" ];
    super.fieldNames = [ "CurrencyCode", "MonetaryAuthority", "Precision" ];
  }

  public validate() {
    super.validateAllFields();
  }

  private _CurrencyCode: CurrencyType;
  private _MonetaryAuthority: VarChar;
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
   * ### Monetary Authority 
   * undefined
   */
  public set MonetaryAuthority(val: string) {
    this._MonetaryAuthority = new VarChar(val);
    this._MonetaryAuthority.validate();
  }
  /**
   * ### Monetary Authority 
   * undefined
   */
  public get MonetaryAuthority() : string {
    return this._MonetaryAuthority.value;
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

export default Currency;