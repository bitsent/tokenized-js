
import BaseType, { ProofOfIdentityType, VarBin } from "./../../Base";


/**
 * # Pending Accept Relationship
 * A pending accept to a relationship that provides information about a requested participant.
 */
class PendingAcceptRelationship extends BaseType {

  constructor() {
    super();
    super.requiredFieldNames = [  ];
    super.fieldNames = [ "ProofOfIdentityType", "ProofOfIdentity" ];
  }

  public validate() {
    super.validateAllFields();
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
}

export default PendingAcceptRelationship;