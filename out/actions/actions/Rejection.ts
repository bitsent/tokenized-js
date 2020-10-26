
import BaseType, { UInt32, UInt16, RejectionCode, VarChar_small, Timestamp } from "./../../Base";


/**
 * # Rejection
 * Used to reject request actions that do not comply with the Contract. If money is to be returned to a User then it is used in lieu of the Settlement Action to properly account for token balances. All Administration/User request Actions must be responded to by the Contract with an Action.  The only exception to this rule is when there is not enough fees in the first Action for the Contract response action to remain revenue neutral.  If not enough fees are attached to pay for the Contract response then the Contract will not respond.
 */
class Rejection extends BaseType {

  constructor() {
    super();
    super.requiredFieldNames = [  ];
    super.fieldNames = [ "AddressIndexes", "RejectAddressIndex", "RejectionCode", "Message", "Timestamp" ];
  }

  public validate() {
    super.validateAllFields();
  }

  private _AddressIndexes: UInt32[];
  private _RejectAddressIndex: UInt16;
  private _RejectionCode: RejectionCode;
  private _Message: VarChar_small;
  private _Timestamp: Timestamp;

  
  /**
   * ### Address Indexes 
   * Associates the message to a particular output by the index. If none are specified then the first output is assumed.
   */
  public set AddressIndexes(val: number[]) {
    this._AddressIndexes = val.map(v => new UInt32(v));
    this._AddressIndexes.forEach(i => i.validate());
  }
  /**
   * ### Address Indexes 
   * Associates the message to a particular output by the index. If none are specified then the first output is assumed.
   */
  public get AddressIndexes() : number[] {
    return this._AddressIndexes.map(i => i.value);
  }

  /**
   * ### Reject Address Index 
   * The address which is believed to have caused the rejection.
   */
  public set RejectAddressIndex(val: number) {
    this._RejectAddressIndex = new UInt16(val);
    this._RejectAddressIndex.validate();
  }
  /**
   * ### Reject Address Index 
   * The address which is believed to have caused the rejection.
   */
  public get RejectAddressIndex() : number {
    return this._RejectAddressIndex.value;
  }

  /**
   * ### Rejection Code 
   * Classifies the rejection by a type.
   */
  public set RejectionCode(val: number) {
    this._RejectionCode = new RejectionCode(val);
    this._RejectionCode.validate();
  }
  /**
   * ### Rejection Code 
   * Classifies the rejection by a type.
   */
  public get RejectionCode() : number {
    return this._RejectionCode.value;
  }

  /**
   * ### Message 
   * Length 0-65,535 bytes. Message that explains the reasoning for a rejection, if needed.  Most rejection types will be captured by the Rejection Type Subfield.
   */
  public set Message(val: string) {
    this._Message = new VarChar_small(val);
    this._Message.validate();
  }
  /**
   * ### Message 
   * Length 0-65,535 bytes. Message that explains the reasoning for a rejection, if needed.  Most rejection types will be captured by the Rejection Type Subfield.
   */
  public get Message() : string {
    return this._Message.value;
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

export default Rejection;