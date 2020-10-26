
import BaseType, { Timestamp, VarChar_small } from "./../../Base";
import Outpoint from "./../../messages/types/Outpoint";
import Document from "./../../messages/types/Document";
import Document from "./../../messages/types/Document";

/**
 * # Public Message
 * Generic public message or public announcement. Sent to an address(es).  Can be used for an official issuer announcement.
 */
class PublicMessage extends BaseType {

  constructor() {
    super();
    super.requiredFieldNames = [  ];
    super.fieldNames = [ "Timestamp", "Subject", "Regarding", "PublicMessage", "Attachments" ];
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

/** ## SUBJECT */
  private _Subject: VarChar_small;
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

/** ## REGARDING */
  private _Regarding: Outpoint;
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

/** ## PUBLIC MESSAGE */
  private _PublicMessage: Document;
  /**
   * ### Public Message 
   * Tokenized Ltd. announces product launch.
   */
  public set PublicMessage(val: Document) {
    this._PublicMessage = val;
    this._PublicMessage.validate();
  }
  /**
   * ### Public Message 
   * Tokenized Ltd. announces product launch.
   */
  public get PublicMessage() : Document {
    return this._PublicMessage;
  }

/** ## ATTACHMENTS */
  private _Attachments: Document[];
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
    return this._Attachments;
  }
}

export default PublicMessage;