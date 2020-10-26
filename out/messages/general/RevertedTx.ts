
import BaseType, { Timestamp, VarBin_medium } from "./../../Base";


/**
 * # Reverted Tx
 * A message that contains a bitcoin transaction that was accepted by the network or an agent and then invalidated by a reorg, or zero conf double spend. This serves as on chain evidence of the sending party's signatures and approval for the given transaction.
 */
class RevertedTx extends BaseType {

  constructor() {
    super();
    super.requiredFieldNames = [  ];
    super.fieldNames = [ "Timestamp", "Transaction" ];
  }

  public validate() {
    super.validateAllFields();
  }

  
/** ## TIMESTAMP */
  private _Timestamp: Timestamp;
  /**
   * ### Timestamp 
   * Timestamp in nanoseconds for when the message sender creates the transaction.
   */
  public set Timestamp(val: number) {
    this._Timestamp = new Timestamp(val);
    this._Timestamp.validate();
  }
  /**
   * ### Timestamp 
   * Timestamp in nanoseconds for when the message sender creates the transaction.
   */
  public get Timestamp() : number {
    return this._Timestamp.value;
  }

/** ## TRANSACTION */
  private _Transaction: VarBin_medium;
  /**
   * ### Transaction 
   * Serialized bitcoin transaction that was reverted/invalidated after being accepted.
   */
  public set Transaction(val: Uint8Array) {
    this._Transaction = new VarBin_medium(val);
    this._Transaction.validate();
  }
  /**
   * ### Transaction 
   * Serialized bitcoin transaction that was reverted/invalidated after being accepted.
   */
  public get Transaction() : Uint8Array {
    return this._Transaction.value;
  }
}

export default RevertedTx;