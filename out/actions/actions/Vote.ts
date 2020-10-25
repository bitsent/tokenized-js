
import BaseType from "./../../Base";


/**
 * ### Vote ###
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

  
  private _Timestamp: Timestamp;
  /**
   * # Timestamp #
   * Timestamp in nanoseconds of when the smart contract created the action.
   */
  public set Timestamp(val: Timestamp) {
    this._Timestamp = val;
    this._Timestamp.validate();
  }
  public get Timestamp() : Timestamp {
    // TODO: implement this unsupported scenario
  }
}

export default Vote;