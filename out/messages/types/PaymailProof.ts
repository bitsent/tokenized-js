
import BaseType, { VarBin, VarChar } from "./../../Base";
import OracleSignature from "./../../messages/types/OracleSignature";

/**
 * # Paymail Proof
 * A proof of identity based on paymail.
 */
class PaymailProof extends BaseType {

  constructor() {
    super();
    super.requiredFieldNames = [  ];
    super.fieldNames = [ "UserID", "Handle", "OracleSignature" ];
  }

  public validate() {
    super.validateAllFields();
  }

  private _UserID: VarBin;
  private _Handle: VarChar;
  private _OracleSignature: OracleSignature;

  
  /**
   * ### User ID 
   * The user id (UUID) in the identity oracle system. Used to request the entity data.
   */
  public set UserID(val: Uint8Array) {
    this._UserID = new VarBin(val);
    this._UserID.validate();
  }
  /**
   * ### User ID 
   * The user id (UUID) in the identity oracle system. Used to request the entity data.
   */
  public get UserID() : Uint8Array {
    return this._UserID.value;
  }

  /**
   * ### Handle 
   * PII including personally identifiable user names not allowed by GDPR. This is put in for possible future use without a protocol change. Paymail handle in the form {alias}@{domain}.{tld}
   */
  public set Handle(val: string) {
    this._Handle = new VarChar(val);
    this._Handle.validate();
  }
  /**
   * ### Handle 
   * PII including personally identifiable user names not allowed by GDPR. This is put in for possible future use without a protocol change. Paymail handle in the form {alias}@{domain}.{tld}
   */
  public get Handle() : string {
    return this._Handle.value;
  }

  /**
   * ### OracleSignature 
   * Signature of the serialized entity, public key, and block hash with the identity oracle's public key.
   */
  public set OracleSignature(val: OracleSignature) {
    this._OracleSignature = val;
    this._OracleSignature.validate();
  }
  /**
   * ### OracleSignature 
   * Signature of the serialized entity, public key, and block hash with the identity oracle's public key.
   */
  public get OracleSignature() : OracleSignature {
    return this._OracleSignature;
  }
}

export default PaymailProof;