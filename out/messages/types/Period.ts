
import BaseType from "./../../Base";


/**
 * ### Period ###
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
  /**
   * # Begin #
   * The start of the period
   */
  public set Begin(val: Timestamp) {
    this._Begin = val;
    this._Begin.validate();
  }
  public get Begin() : Timestamp {
    // TODO: implement this unsupported scenario
  }

  private _End: Timestamp;
  /**
   * # End #
   * The end of the period
   */
  public set End(val: Timestamp) {
    this._End = val;
    this._End.validate();
  }
  public get End() : Timestamp {
    // TODO: implement this unsupported scenario
  }
}

export default Period;