
import BaseType from "./../../Base";


/**
 * ### Thaw ###
 * The contract responding to an Order action to thaw assets. To be used to comply with contractual obligations or legal requirements. The Alleged Offender's tokens will be unfrozen to allow them to resume normal exchange and governance activities.

 */
class Thaw extends BaseType {

  constructor() {
    super();
    super.requiredFieldNames = [  ];
    super.fieldNames = [ "FreezeTxId", "Timestamp" ];
  }

  public validate() {
    super.validateAllFields();
  }

  
  private _FreezeTxId: TxId;
  /**
   * # Freeze Tx Id #
   * The tx id of the freeze action that is being reversed.
   */
  public set FreezeTxId(val: TxId) {
    this._FreezeTxId = val;
    this._FreezeTxId.validate();
  }
  public get FreezeTxId() : TxId {
    // TODO: implement this unsupported scenario
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

export default Thaw;