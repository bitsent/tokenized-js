
import BaseType, { VarChar_small } from "./../../Base";
import Outpoint from "./../../messages/types/Outpoint";
import Document from "./../../messages/types/Document";
import Document from "./../../messages/types/Document";

/**
 * ### Private Message ###
 * Generic private message. Sent to another address(es). Encryption is to be used.
 */
class PrivateMessage extends BaseType {

  constructor() {
    super();
    super.requiredFieldNames = [  ];
    super.fieldNames = [ "Timestamp", "Subject", "Regarding", "PrivateMessage", "Attachments" ];
  }

  public validate() {
    super.validateAllFields();
  }

  
  private _Timestamp: Timestamp;
  /**
   * # Timestamp #
   * Timestamp in nanoseconds for when the message sender creates the transaction.
   */
  public set Timestamp(val: Timestamp) {
    this._Timestamp = val;
    this._Timestamp.validate();
  }
  public get Timestamp() : Timestamp {
    // TODO: implement this unsupported scenario
  }

  private _Subject: VarChar_small;
  /**
   * # Subject #
   * The subject / topic of the message.
   */
  public set Subject(val: string) {
    this._Subject = new VarChar_small(val);
    this._Subject.validate();
  }
  public get Subject() : string {
    return this._Subject.value;
  }

  private _Regarding: Outpoint;
  /**
   * # Regarding #
   * The output of the message that this message is regarding (responding to).
   */
  public set Regarding(val: Outpoint) {
    this._Regarding = val;
    this._Regarding.validate();
  }
  public get Regarding() : Outpoint {
    return this._Regarding;
  }

  private _PrivateMessage: Document;
  /**
   * # Private Message #
   * Tokenized Ltd announces product launch.
   */
  public set PrivateMessage(val: Document) {
    this._PrivateMessage = val;
    this._PrivateMessage.validate();
  }
  public get PrivateMessage() : Document {
    return this._PrivateMessage;
  }

  private _Attachments: Document[];
  /**
   * # Attachments #
   * Documents attached to the message.
   */
  public set Attachments(val: Document[]) {
    this._Attachments = val;
    this._Attachments.forEach(i => i.validate());
  }
  public get Attachments() : Document[] {
    return this._Attachments;
  }
}

export default PrivateMessage;