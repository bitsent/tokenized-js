
import BaseType, { Timestamp } from "./../../Base";


/**
 * # Vote
 * A vote is created by the Contract in response to a valid Proposal Action.
 */
class Vote extends BaseType {

  constructor() {
    super();
    super.requiredFieldNames = [  ];
    super.fieldNames = [ "Timestamp" ];
  }

  public validate() {
    super.validateAllFields();
  }

  
/** ## TIMESTAMP */
  private _Timestamp: Timestamp;
  /**
   * ### Timestamp 
   * Timestamp in nanoseconds of when the smart contract created the action.
   */
  public set Timestamp(val: number) {
    this._Timestamp = new Timestamp(val);
    this._Timestamp.validate();
  }
  /**
   * ### Timestamp 
   * Timestamp in nanoseconds of when the smart contract created the action.
   */
  public get Timestamp() : number {
    return this._Timestamp.value;
  }
}

export default Vote;