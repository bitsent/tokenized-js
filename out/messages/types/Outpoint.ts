
import BaseType, { TxId, UInt32 } from "./../../Base";


/**
 * # Outpoint
 * Reference to a bitcoin transaction output.
 */
class Outpoint extends BaseType {

  constructor() {
    super();
    super.requiredFieldNames = [  ];
    super.fieldNames = [ "TxId", "OutputIndex" ];
  }

  public validate() {
    super.validateAllFields();
  }

  
/** ## TXID */
  private _TxId: TxId;
  /**
   * ### TxId 
   * undefined
   */
  public set TxId(val: Uint8Array) {
    this._TxId = new TxId(val);
    this._TxId.validate();
  }
  /**
   * ### TxId 
   * undefined
   */
  public get TxId() : Uint8Array {
    return this._TxId.value;
  }

/** ## OUTPUT INDEX */
  private _OutputIndex: UInt32;
  /**
   * ### Output Index 
   * The index of the output within the referenced transaction.
   */
  public set OutputIndex(val: number) {
    this._OutputIndex = new UInt32(val);
    this._OutputIndex.validate();
  }
  /**
   * ### Output Index 
   * The index of the output within the referenced transaction.
   */
  public get OutputIndex() : number {
    return this._OutputIndex.value;
  }
}

export default Outpoint;