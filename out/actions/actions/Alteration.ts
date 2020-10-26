
import BaseType, { TxId, VarChar_medium } from "./../../Base";


/**
 * # Alteration
 * A register entry/record can be altered.
 */
class Alteration extends BaseType {

  constructor() {
    super();
    super.requiredFieldNames = [  ];
    super.fieldNames = [ "EntryTxID", "Message" ];
  }

  public validate() {
    super.validateAllFields();
  }

  private _EntryTxID: TxId;
  private _Message: VarChar_medium;

  
  /**
   * ### Entry Tx ID 
   * Transaction ID of the register entry to be altered.
   */
  public set EntryTxID(val: Uint8Array) {
    this._EntryTxID = new TxId(val);
    this._EntryTxID.validate();
  }
  /**
   * ### Entry Tx ID 
   * Transaction ID of the register entry to be altered.
   */
  public get EntryTxID() : Uint8Array {
    return this._EntryTxID.value;
  }

  /**
   * ### Message 
   * A custom message to include with this action.
   */
  public set Message(val: string) {
    this._Message = new VarChar_medium(val);
    this._Message.validate();
  }
  /**
   * ### Message 
   * A custom message to include with this action.
   */
  public get Message() : string {
    return this._Message.value;
  }
}

export default Alteration;