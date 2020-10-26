
import BaseType, { FixedChar3, VarChar, Timestamp, VarChar_small } from "./../../Base";
import AgeRestriction from "./../../assets/types/AgeRestriction";

/**
 * # Ticket (Admission)
 * Admission ticket
 */
class AdmissionTicket extends BaseType {

  constructor() {
    super();
    super.requiredFieldNames = [ "Description" ];
    super.fieldNames = [ "AgeRestriction", "AdmissionType", "Venue", "Class", "Area", "Seat", "StartTimeDate", "ValidFrom", "ExpirationTimestamp", "Description" ];
  }

  public validate() {
    super.validateAllFields();
  }

  private _AgeRestriction: AgeRestriction;
  private _AdmissionType: FixedChar3;
  private _Venue: VarChar;
  private _Class: VarChar;
  private _Area: VarChar;
  private _Seat: VarChar;
  private _StartTimeDate: Timestamp;
  private _ValidFrom: Timestamp;
  private _ExpirationTimestamp: Timestamp;
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
   * ### Admission Type 
   * undefined
   */
  public set AdmissionType(val: string) {
    this._AdmissionType = new FixedChar3(val);
    this._AdmissionType.validate();
  }
  /**
   * ### Admission Type 
   * undefined
   */
  public get AdmissionType() : string {
    return this._AdmissionType.value;
  }

  /**
   * ### Venue 
   * undefined
   */
  public set Venue(val: string) {
    this._Venue = new VarChar(val);
    this._Venue.validate();
  }
  /**
   * ### Venue 
   * undefined
   */
  public get Venue() : string {
    return this._Venue.value;
  }

  /**
   * ### Class 
   * undefined
   */
  public set Class(val: string) {
    this._Class = new VarChar(val);
    this._Class.validate();
  }
  /**
   * ### Class 
   * undefined
   */
  public get Class() : string {
    return this._Class.value;
  }

  /**
   * ### Area 
   * undefined
   */
  public set Area(val: string) {
    this._Area = new VarChar(val);
    this._Area.validate();
  }
  /**
   * ### Area 
   * undefined
   */
  public get Area() : string {
    return this._Area.value;
  }

  /**
   * ### Seat 
   * undefined
   */
  public set Seat(val: string) {
    this._Seat = new VarChar(val);
    this._Seat.validate();
  }
  /**
   * ### Seat 
   * undefined
   */
  public get Seat() : string {
    return this._Seat.value;
  }

  /**
   * ### Start Time and Date 
   * undefined
   */
  public set StartTimeDate(val: number) {
    this._StartTimeDate = new Timestamp(val);
    this._StartTimeDate.validate();
  }
  /**
   * ### Start Time and Date 
   * undefined
   */
  public get StartTimeDate() : number {
    return this._StartTimeDate.value;
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

export default AdmissionTicket;