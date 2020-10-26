
import BaseType, { UInt8, VarBin, ProofOfIdentityType } from "./../../Base";
import ChannelParty from "./../../messages/types/ChannelParty";

/**
 * # Initiate Relationship
 * A message used to initiate a new relationship between 2 or more parties. The M1 container specifies the sender tx input and requested participant tx outputs. If there are more than 2 parties the encryption secret provided in the envelope protocol is used as the base encryption secret. If there are only 2 parties, then the ECDH secret of each key pair is used to encrypt each message.
 */
class InitiateRelationship extends BaseType {

  constructor() {
    super();
    super.requiredFieldNames = [  ];
    super.fieldNames = [ "Type", "Seed", "Flag", "EncryptionType", "ProofOfIdentityType", "ProofOfIdentity", "ChannelParties" ];
  }

  public validate() {
    super.validateAllFields();
  }

  
/** ## TYPE */
  private _Type: UInt8;
  /**
   * ### Type 
   * The type or purposed of the relationship. 0 - Conversation (direct messages), 1 - Channel (entity/business to entity/business)
   */
  public set Type(val: number) {
    this._Type = new UInt8(val);
    this._Type.validate();
  }
  /**
   * ### Type 
   * The type or purposed of the relationship. 0 - Conversation (direct messages), 1 - Channel (entity/business to entity/business)
   */
  public get Type() : number {
    return this._Type.value;
  }

/** ## SEED */
  private _Seed: VarBin;
  /**
   * ### Seed 
   * The seed used to derive keys for the relationship.
   */
  public set Seed(val: Uint8Array) {
    this._Seed = new VarBin(val);
    this._Seed.validate();
  }
  /**
   * ### Seed 
   * The seed used to derive keys for the relationship.
   */
  public get Seed() : Uint8Array {
    return this._Seed.value;
  }

/** ## FLAG */
  private _Flag: VarBin;
  /**
   * ### Flag 
   * The flag can optionally be used to identify messages in the relationship so that all members don't have to be tagged in each message. It isn't needed for two party relationships, but is recommended for relationships with more members. It will be included in it's own op return for all message transactions. It is recommended to be a random 20 byte value similar to public key hashes. The flag will be the Payload of an Envelope protocol message with a Payload Protocol ID of "F". If this value is not specified then there must be an output to the next key in the relationship chain for every member in the group.
   */
  public set Flag(val: Uint8Array) {
    this._Flag = new VarBin(val);
    this._Flag.validate();
  }
  /**
   * ### Flag 
   * The flag can optionally be used to identify messages in the relationship so that all members don't have to be tagged in each message. It isn't needed for two party relationships, but is recommended for relationships with more members. It will be included in it's own op return for all message transactions. It is recommended to be a random 20 byte value similar to public key hashes. The flag will be the Payload of an Envelope protocol message with a Payload Protocol ID of "F". If this value is not specified then there must be an output to the next key in the relationship chain for every member in the group.
   */
  public get Flag() : Uint8Array {
    return this._Flag.value;
  }

/** ## ENCRYPTION TYPE */
  private _EncryptionType: UInt8;
  /**
   * ### Encryption Type 
   * Type of encryption used for messages within the relationship. 0 - Encryption keys embedded in envelope protocol. 1 - Encryption key embedded in this message is used as base key for future messages. Used for relationships with more than 2 members so the encryption key doesn't have to be encrypted to each member in every message.
   */
  public set EncryptionType(val: number) {
    this._EncryptionType = new UInt8(val);
    this._EncryptionType.validate();
  }
  /**
   * ### Encryption Type 
   * Type of encryption used for messages within the relationship. 0 - Encryption keys embedded in envelope protocol. 1 - Encryption key embedded in this message is used as base key for future messages. Used for relationships with more than 2 members so the encryption key doesn't have to be encrypted to each member in every message.
   */
  public get EncryptionType() : number {
    return this._EncryptionType.value;
  }

/** ## PROOF OF IDENTITY TYPE */
  private _ProofOfIdentityType: ProofOfIdentityType;
  /**
   * ### Proof of Identity Type 
   * The type/format of the sender's proof of identity.
   */
  public set ProofOfIdentityType(val: number) {
    this._ProofOfIdentityType = new ProofOfIdentityType(val);
    this._ProofOfIdentityType.validate();
  }
  /**
   * ### Proof of Identity Type 
   * The type/format of the sender's proof of identity.
   */
  public get ProofOfIdentityType() : number {
    return this._ProofOfIdentityType.value;
  }

/** ## PROOF OF IDENTITY */
  private _ProofOfIdentity: VarBin;
  /**
   * ### Proof of Identity 
   * Sender's proof of identity.
   */
  public set ProofOfIdentity(val: Uint8Array) {
    this._ProofOfIdentity = new VarBin(val);
    this._ProofOfIdentity.validate();
  }
  /**
   * ### Proof of Identity 
   * Sender's proof of identity.
   */
  public get ProofOfIdentity() : Uint8Array {
    return this._ProofOfIdentity.value;
  }

/** ## CHANNEL PARTIES */
  private _ChannelParties: ChannelParty[];
  /**
   * ### Channel Parties 
   * Information about the entities in the channel. Not included if this is not a channel initiation. These represent the companies in a channel. A channel is recommended to have 2 entities and several individual members per party. The individual members can discuss terms while the parties are used for official actions.
   */
  public set ChannelParties(val: ChannelParty[]) {
    this._ChannelParties = val;
    this._ChannelParties.forEach(i => i.validate());
  }
  /**
   * ### Channel Parties 
   * Information about the entities in the channel. Not included if this is not a channel initiation. These represent the companies in a channel. A channel is recommended to have 2 entities and several individual members per party. The individual members can discuss terms while the parties are used for official actions.
   */
  public get ChannelParties() : ChannelParty[] {
    return this._ChannelParties;
  }
}

export default InitiateRelationship;