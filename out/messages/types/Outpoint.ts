
import BaseType, { UInt32 } from "./../../Base";


/**
 * ### Outpoint ###
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

  
  private _TxId: TxId;
  /**
   * # TxId #
   * undefined
   */
  public set TxId(val: TxId) {
    this._TxId = val;
    this._TxId.validate();
  }
  public get TxId() : TxId {
    // TODO: implement this unsupported scenario
  }

  private _OutputIndex: UInt32;
  /**
   * # Output Index #
   * The index of the output within the referenced transaction.
   */
  public set OutputIndex(val: number) {
    this._OutputIndex = new UInt32(val);
    this._OutputIndex.validate();
  }
  public get OutputIndex() : number {
    return this._OutputIndex.value;
  }
}

export default Outpoint;