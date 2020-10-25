
import BaseType, { VarBin } from "./../../Base";
import Entity from "./../../messages/types/Entity";
import OracleSignature from "./../../messages/types/OracleSignature";

/**
 * ### Identity Oracle Proof ###
 * A proof of identity based on identity oracles.
 */
class IdentityOracleProof extends BaseType {

  constructor() {
    super();
    super.requiredFieldNames = [  ];
    super.fieldNames = [ "UserID", "Entity", "OracleSignature" ];
  }

  public validate() {
    super.validateAllFields();
  }

  
  private _UserID: VarBin;
  /**
   * # User ID #
   * The user id (UUID) in the identity oracle system. Used to request the entity data.
   */
  public set UserID(val: Uint8Array) {
    this._UserID = new VarBin(val);
    this._UserID.validate();
  }
  public get UserID() : Uint8Array {
    return this._UserID.value;
  }

  private _Entity: Entity;
  /**
   * # Entity #
   * PII is not allowed in entity by GDPR, so only company information can be placed in this entity. In the future this might be supported for PII with better understanding of GDPR. The identity being provided. EntityContractAddress is located within this structure.
   */
  public set Entity(val: Entity) {
    this._Entity = val;
    this._Entity.validate();
  }
  public get Entity() : Entity {
    return this._Entity;
  }

  private _OracleSignature: OracleSignature;
  /**
   * # OracleSignature #
   * Signature of the serialized entity, public key, and block hash with the identity oracle's public key.
   */
  public set OracleSignature(val: OracleSignature) {
    this._OracleSignature = val;
    this._OracleSignature.validate();
  }
  public get OracleSignature() : OracleSignature {
    return this._OracleSignature;
  }
}

export default IdentityOracleProof;