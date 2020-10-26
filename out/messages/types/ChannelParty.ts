
import BaseType, { Address, UInt32 } from "./../../Base";


/**
 * # Channel Party
 * Information about an entity in a channel.
 */
class ChannelParty extends BaseType {

  constructor() {
    super();
    super.requiredFieldNames = [  ];
    super.fieldNames = [ "AdministrativeAddress", "OutputIndex" ];
  }

  public validate() {
    super.validateAllFields();
  }

  
/** ## ADMINISTRATIVE ADDRESS */
  private _AdministrativeAddress: Address;
  /**
   * ### Administrative Address 
   * The address representing the locking script that is required to perform entity administrative level operations on a channel. Such as add/remove a member, accept/reject proposals, and requesting/receiving payments. This is recommended to be an m of n multi-signature address.
   */
  public set AdministrativeAddress(val: Uint8Array) {
    this._AdministrativeAddress = new Address(val);
    this._AdministrativeAddress.validate();
  }
  /**
   * ### Administrative Address 
   * The address representing the locking script that is required to perform entity administrative level operations on a channel. Such as add/remove a member, accept/reject proposals, and requesting/receiving payments. This is recommended to be an m of n multi-signature address.
   */
  public get AdministrativeAddress() : Uint8Array {
    return this._AdministrativeAddress.value;
  }

/** ## OUTPUT INDEX */
  private _OutputIndex: UInt32;
  /**
   * ### Output Index 
   * Specifies the output containing the locking script for the party. It should also be included in the M1 ReceiverIndexes. That output must respond with a proof of identity that identifies the company involved.
   */
  public set OutputIndex(val: number) {
    this._OutputIndex = new UInt32(val);
    this._OutputIndex.validate();
  }
  /**
   * ### Output Index 
   * Specifies the output containing the locking script for the party. It should also be included in the M1 ReceiverIndexes. That output must respond with a proof of identity that identifies the company involved.
   */
  public get OutputIndex() : number {
    return this._OutputIndex.value;
  }
}

export default ChannelParty;