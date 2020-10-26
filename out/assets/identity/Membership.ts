
import BaseType, { Timestamp, VarChar, VarChar_small } from "./../../Base";
import AgeRestriction from "./../../assets/types/AgeRestriction";

/**
 * # Membership
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
  private _ValidFrom: Timestamp;
  private _ExpirationTimestamp: Timestamp;
  private _ID: VarChar;
  private _MembershipClass: VarChar;
  private _RoleType: VarChar;
  private _MembershipType: VarChar;
  private _Description: VarChar_small;

  
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
   * ### ID 
   * undefined
   */
  public set ID(val: string) {
    this._ID = new VarChar(val);
    this._ID.validate();
  }
  /**
   * ### ID 
   * undefined
   */
  public get ID() : string {
    return this._ID.value;
  }

  /**
   * ### Membership Class 
   * undefined
   */
  public set MembershipClass(val: string) {
    this._MembershipClass = new VarChar(val);
    this._MembershipClass.validate();
  }
  /**
   * ### Membership Class 
   * undefined
   */
  public get MembershipClass() : string {
    return this._MembershipClass.value;
  }

  /**
   * ### Role Type 
   * undefined
   */
  public set RoleType(val: string) {
    this._RoleType = new VarChar(val);
    this._RoleType.validate();
  }
  /**
   * ### Role Type 
   * undefined
   */
  public get RoleType() : string {
    return this._RoleType.value;
  }

  /**
   * ### Membership Type 
   * undefined
   */
  public set MembershipType(val: string) {
    this._MembershipType = new VarChar(val);
    this._MembershipType.validate();
  }
  /**
   * ### Membership Type 
   * undefined
   */
  public get MembershipType() : string {
    return this._MembershipType.value;
  }

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

export default Membership;