
import BaseType, { TxId, Timestamp } from "./../../Base";


/**
 * # Thaw
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
  private _Timestamp: Timestamp;

  
  /**
   * ### Freeze Tx Id 
   * The tx id of the freeze action that is being reversed.
   */
  public set FreezeTxId(val: Uint8Array) {
    this._FreezeTxId = new TxId(val);
    this._FreezeTxId.validate();
  }
  /**
   * ### Freeze Tx Id 
   * The tx id of the freeze action that is being reversed.
   */
  public get FreezeTxId() : Uint8Array {
    return this._FreezeTxId.value;
  }

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

export default Thaw;