
import BaseType, { VarBin, UInt32 } from "./../../Base";


/**
 * ### Relationship Amendment ###
 * Amend a relationship. Add/Remove members. Modify permissions. This is encrypted with the current base encryption secret, but can provide a new base encryption secret that starts after this message.
 */
class RelationshipAmendment extends BaseType {

  constructor() {
    super();
    super.requiredFieldNames = [  ];
    super.fieldNames = [ "Seed", "BaseEncryptionSecret", "AddMemberIndexes", "DropMemberIndexes" ];
  }

  public validate() {
    super.validateAllFields();
  }

  
  private _Seed: VarBin;
  /**
   * # Seed #
   * The new seed used to derive keys for the relationship after this message.
   */
  public set Seed(val: Uint8Array) {
    this._Seed = new VarBin(val);
    this._Seed.validate();
  }
  public get Seed() : Uint8Array {
    return this._Seed.value;
  }

  private _BaseEncryptionSecret: VarBin;
  /**
   * # Base Encryption Secret #
   * The new base encryption secret used to derive encryption secrets for the relationship after this message. Each time a message is sent, the current seed hash is added to the base encryption secret and that value is used to encrypt the message.
   */
  public set BaseEncryptionSecret(val: Uint8Array) {
    this._BaseEncryptionSecret = new VarBin(val);
    this._BaseEncryptionSecret.validate();
  }
  public get BaseEncryptionSecret() : Uint8Array {
    return this._BaseEncryptionSecret.value;
  }

  private _AddMemberIndexes: UInt32;
  /**
   * # Add Member Indexes #
   * Indexes to the outputs of the members that are being added to the group.
   */
  public set AddMemberIndexes(val: number) {
    this._AddMemberIndexes = new UInt32(val);
    this._AddMemberIndexes.validate();
  }
  public get AddMemberIndexes() : number {
    return this._AddMemberIndexes.value;
  }

  private _DropMemberIndexes: UInt32;
  /**
   * # Drop Member Indexes #
   * Indexes to the outputs of the members that are being removed from the group.
   */
  public set DropMemberIndexes(val: number) {
    this._DropMemberIndexes = new UInt32(val);
    this._DropMemberIndexes.validate();
  }
  public get DropMemberIndexes() : number {
    return this._DropMemberIndexes.value;
  }
}

export default RelationshipAmendment;