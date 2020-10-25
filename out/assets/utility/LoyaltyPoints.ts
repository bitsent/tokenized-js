
import BaseType, { VarChar, VarChar_small } from "./../../Base";
import AgeRestriction from "./../../assets/types/AgeRestriction";

/**
 * ### Loyalty Points ###
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

  private _OfferName: VarChar;
  /**
   * # Offer Name #
   * undefined
   */
  public set OfferName(val: string) {
    this._OfferName = new VarChar(val);
    this._OfferName.validate();
  }
  public get OfferName() : string {
    return this._OfferName.value;
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

export default LoyaltyPoints;