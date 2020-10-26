
import BaseType, { VarChar, Timestamp, VarChar_small } from "./../../Base";
import AgeRestriction from "./../../assets/types/AgeRestriction";

/**
 * # Loyalty Points
 * A Loyalty Point
 */
class LoyaltyPoints extends BaseType {

  constructor() {
    super();
    super.requiredFieldNames = [ "Description" ];
    super.fieldNames = [ "AgeRestriction", "OfferName", "ValidFrom", "ExpirationTimestamp", "Description" ];
  }

  public validate() {
    super.validateAllFields();
  }

  
/** ## AGE RESTRICTION */
  private _AgeRestriction: AgeRestriction;
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

/** ## OFFER NAME */
  private _OfferName: VarChar;
  /**
   * ### Offer Name 
   * undefined
   */
  public set OfferName(val: string) {
    this._OfferName = new VarChar(val);
    this._OfferName.validate();
  }
  /**
   * ### Offer Name 
   * undefined
   */
  public get OfferName() : string {
    return this._OfferName.value;
  }

/** ## VALID FROM */
  private _ValidFrom: Timestamp;
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

/** ## EXPIRATION TIMESTAMP */
  private _ExpirationTimestamp: Timestamp;
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
}

export default LoyaltyPoints;