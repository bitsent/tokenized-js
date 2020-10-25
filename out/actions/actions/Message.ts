
import BaseType, { uint, UInt16, VarBin_medium } from "./../../Base";


/**
 * ### Message ###
 * The message action is a general purpose communication action. 'Twitter/SMS' for Issuers/Investors/Users. The message txn can also be used for passing partially signed txns on-chain, establishing private communication channels and EDI (receipting, invoices, PO, and private offers/bids). The messages are broken down by type for easy filtering in the a user's wallet. The Message Types are listed in the Message Types table.

 */
class Message extends BaseType {

  constructor() {
    super();
    super.requiredFieldNames = [  ];
    super.fieldNames = [ "SenderIndexes", "ReceiverIndexes", "MessageCode", "MessagePayload" ];
  }

  public validate() {
    super.validateAllFields();
  }

  
  private _SenderIndexes: UInt32[];
  /**
   * # Sender Indexes #
   * Associates the message to a particular input by the index. If none are specified then the first input is assumed.
   */
  public set SenderIndexes(val: number[]) {
    this._SenderIndexes = val.map(v => new uint(v));
    this._SenderIndexes.forEach(i => i.validate());
  }
  public get SenderIndexes() : number[] {
    return this._SenderIndexes.map(i => i.value);
  }

  private _ReceiverIndexes: UInt32[];
  /**
   * # Receiver Indexes #
   * Associates the message to a particular output by the index. If none are specified then the first output is assumed.
   */
  public set ReceiverIndexes(val: number[]) {
    this._ReceiverIndexes = val.map(v => new uint(v));
    this._ReceiverIndexes.forEach(i => i.validate());
  }
  public get ReceiverIndexes() : number[] {
    return this._ReceiverIndexes.map(i => i.value);
  }

  private _MessageCode: UInt16;
  /**
   * # Message Code #
   * undefined
   */
  public set MessageCode(val: number) {
    this._MessageCode = new UInt16(val);
    this._MessageCode.validate();
  }
  public get MessageCode() : number {
    return this._MessageCode.value;
  }

  private _MessagePayload: VarBin_medium;
  /**
   * # Message Payload #
   * Public or private (RSA public key, Diffie-Hellman). Issuers/Contracts can send the signifying amount of satoshis to themselves for public announcements or private 'notes' if encrypted. See Message Types for a full list of potential use cases.
   */
  public set MessagePayload(val: Uint8Array) {
    this._MessagePayload = new VarBin_medium(val);
    this._MessagePayload.validate();
  }
  public get MessagePayload() : Uint8Array {
    return this._MessagePayload.value;
  }
}

export default Message;