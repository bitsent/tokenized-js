
import BaseType, { Timestamp, VarChar_small } from "./../../Base";
import Outpoint from "./../../messages/types/Outpoint";
import Document from "./../../messages/types/Document";
import Document from "./../../messages/types/Document";

/**
 * # Private Message
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
  private _Subject: VarChar_small;
  private _Regarding: Outpoint;
  private _PrivateMessage: Document;
  private _Attachments: Document[];

  
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

  /**
   * ### Subject 
   * The subject / topic of the message.
   */
  public set Subject(val: string) {
    this._Subject = new VarChar_small(val);
    this._Subject.validate();
  }
  /**
   * ### Subject 
   * The subject / topic of the message.
   */
  public get Subject() : string {
    return this._Subject.value;
  }

  /**
   * ### Regarding 
   * The output of the message that this message is regarding (responding to).
   */
  public set Regarding(val: Outpoint) {
    this._Regarding = val;
    this._Regarding.validate();
  }
  /**
   * ### Regarding 
   * The output of the message that this message is regarding (responding to).
   */
  public get Regarding() : Outpoint {
    return this._Regarding;
  }

  /**
   * ### Private Message 
   * Tokenized Ltd announces product launch.
   */
  public set PrivateMessage(val: Document) {
    this._PrivateMessage = val;
    this._PrivateMessage.validate();
  }
  /**
   * ### Private Message 
   * Tokenized Ltd announces product launch.
   */
  public get PrivateMessage() : Document {
    return this._PrivateMessage;
  }

  /**
   * ### Attachments 
   * Documents attached to the message.
   */
  public set Attachments(val: Document[]) {
    this._Attachments = val;
    this._Attachments.forEach(i => i.validate());
  }
  /**
   * ### Attachments 
   * Documents attached to the message.
   */
  public get Attachments() : Document[] {
    return this._Attachments.map(i => i);
  }
}

export default PrivateMessage;