
import BaseType, { FixedChar3, VarChar, VarChar_small } from "./../../Base";
import AgeRestriction from "./../../assets/types/AgeRestriction";

/**
 * ### Ticket (Admission) ###
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

  private _AdmissionType: FixedChar3;
  /**
   * # Admission Type #
   * undefined
   */
  public set AdmissionType(val: string) {
    this._AdmissionType = new FixedChar3(val);
    this._AdmissionType.validate();
  }
  public get AdmissionType() : string {
    return this._AdmissionType.value;
  }

  private _Venue: VarChar;
  /**
   * # Venue #
   * undefined
   */
  public set Venue(val: string) {
    this._Venue = new VarChar(val);
    this._Venue.validate();
  }
  public get Venue() : string {
    return this._Venue.value;
  }

  private _Class: VarChar;
  /**
   * # Class #
   * undefined
   */
  public set Class(val: string) {
    this._Class = new VarChar(val);
    this._Class.validate();
  }
  public get Class() : string {
    return this._Class.value;
  }

  private _Area: VarChar;
  /**
   * # Area #
   * undefined
   */
  public set Area(val: string) {
    this._Area = new VarChar(val);
    this._Area.validate();
  }
  public get Area() : string {
    return this._Area.value;
  }

  private _Seat: VarChar;
  /**
   * # Seat #
   * undefined
   */
  public set Seat(val: string) {
    this._Seat = new VarChar(val);
    this._Seat.validate();
  }
  public get Seat() : string {
    return this._Seat.value;
  }

  private _StartTimeDate: Timestamp;
  /**
   * # Start Time and Date #
   * undefined
   */
  public set StartTimeDate(val: Timestamp) {
    this._StartTimeDate = val;
    this._StartTimeDate.validate();
  }
  public get StartTimeDate() : Timestamp {
    // TODO: implement this unsupported scenario
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

export default AdmissionTicket;