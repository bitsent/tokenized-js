
import BaseType, { Timestamp } from "./../../Base";


/**
 * # Period
 * A period of time. Begin and end can be optional depending on context.
 */
class Period extends BaseType {

  constructor() {
    super();
    super.requiredFieldNames = [  ];
    super.fieldNames = [ "Begin", "End" ];
  }

  public validate() {
    super.validateAllFields();
  }

  private _Begin: Timestamp;
  private _End: Timestamp;

  
  /**
   * ### Begin 
   * The start of the period
   */
  public set Begin(val: number) {
    this._Begin = new Timestamp(val);
    this._Begin.validate();
  }
  /**
   * ### Begin 
   * The start of the period
   */
  public get Begin() : number {
    return this._Begin.value;
  }

  /**
   * ### End 
   * The end of the period
   */
  public set End(val: number) {
    this._End = new Timestamp(val);
    this._End.validate();
  }
  /**
   * ### End 
   * The end of the period
   */
  public get End() : number {
    return this._End.value;
  }
}

export default Period;