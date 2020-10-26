
import BaseType, { UInt8 } from "./../../Base";


/**
 * # Age Restriction
 * Age restriction is used to specify required ages for asset ownership.
 */
class AgeRestriction extends BaseType {

  constructor() {
    super();
    super.requiredFieldNames = [  ];
    super.fieldNames = [ "Lower", "Upper" ];
  }

  public validate() {
    super.validateAllFields();
  }

  private _Lower: UInt8;
  private _Upper: UInt8;

  
  /**
   * ### Lower Age Limit 
   * The lowest age valid to own asset. Zero for no restriction.
   */
  public set Lower(val: number) {
    this._Lower = new UInt8(val);
    this._Lower.validate();
  }
  /**
   * ### Lower Age Limit 
   * The lowest age valid to own asset. Zero for no restriction.
   */
  public get Lower() : number {
    return this._Lower.value;
  }

  /**
   * ### Upper Age Limit 
   * The highest age valid to own asset. Zero for no restriction.
   */
  public set Upper(val: number) {
    this._Upper = new UInt8(val);
    this._Upper.validate();
  }
  /**
   * ### Upper Age Limit 
   * The highest age valid to own asset. Zero for no restriction.
   */
  public get Upper() : number {
    return this._Upper.value;
  }
}

export default AgeRestriction;