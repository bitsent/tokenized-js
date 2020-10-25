
import BaseType, { VarChar_medium } from "./../../Base";


/**
 * ### Alteration ###
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
  /**
   * # Entry Tx ID #
   * Transaction ID of the register entry to be altered.
   */
  public set EntryTxID(val: TxId) {
    this._EntryTxID = val;
    this._EntryTxID.validate();
  }
  public get EntryTxID() : TxId {
    // TODO: implement this unsupported scenario
  }

  private _Message: VarChar_medium;
  /**
   * # Message #
   * A custom message to include with this action.
   */
  public set Message(val: string) {
    this._Message = new VarChar_medium(val);
    this._Message.validate();
  }
  public get Message() : string {
    return this._Message.value;
  }
}

export default Alteration;