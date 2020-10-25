
import BaseType, { VarChar, VarChar_small } from "./../../Base";
import AgeRestriction from "./../../assets/types/AgeRestriction";

/**
 * ### Membership ###
 * A Membership
 */
class Membership extends BaseType {

  constructor() {
    super();
    super.requiredFieldNames = [ "Description" ];
    super.fieldNames = [ "AgeRestriction", "ValidFrom", "ExpirationTimestamp", "ID", "MembershipClass", "RoleType", "MembershipType", "Description" ];
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

  private _ID: VarChar;
  /**
   * # ID #
   * undefined
   */
  public set ID(val: string) {
    this._ID = new VarChar(val);
    this._ID.validate();
  }
  public get ID() : string {
    return this._ID.value;
  }

  private _MembershipClass: VarChar;
  /**
   * # Membership Class #
   * undefined
   */
  public set MembershipClass(val: string) {
    this._MembershipClass = new VarChar(val);
    this._MembershipClass.validate();
  }
  public get MembershipClass() : string {
    return this._MembershipClass.value;
  }

  private _RoleType: VarChar;
  /**
   * # Role Type #
   * undefined
   */
  public set RoleType(val: string) {
    this._RoleType = new VarChar(val);
    this._RoleType.validate();
  }
  public get RoleType() : string {
    return this._RoleType.value;
  }

  private _MembershipType: VarChar;
  /**
   * # Membership Type #
   * undefined
   */
  public set MembershipType(val: string) {
    this._MembershipType = new VarChar(val);
    this._MembershipType.validate();
  }
  public get MembershipType() : string {
    return this._MembershipType.value;
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

export default Membership;