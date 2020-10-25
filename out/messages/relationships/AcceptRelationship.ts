
import BaseType, { VarBin } from "./../../Base";


/**
 * ### Accept Relationship ###
 * Accept a relationship.
 */
class AcceptRelationship extends BaseType {

  constructor() {
    super();
    super.requiredFieldNames = [  ];
    super.fieldNames = [ "ProofOfIdentityType", "ProofOfIdentity" ];
  }

  public validate() {
    super.validateAllFields();
  }

  
  private _ProofOfIdentityType: ProofOfIdentityType;
  /**
   * # Proof of Identity Type #
   * The type/format of the sender's proof of identity.
   */
  public set ProofOfIdentityType(val: ProofOfIdentityType) {
    this._ProofOfIdentityType = val;
    this._ProofOfIdentityType.validate();
  }
  public get ProofOfIdentityType() : ProofOfIdentityType {
    // TODO: implement this unsupported scenario
  }

  private _ProofOfIdentity: VarBin;
  /**
   * # Proof of Identity #
   * Sender's proof of identity.
   */
  public set ProofOfIdentity(val: Uint8Array) {
    this._ProofOfIdentity = new VarBin(val);
    this._ProofOfIdentity.validate();
  }
  public get ProofOfIdentity() : Uint8Array {
    return this._ProofOfIdentity.value;
  }
}

export default AcceptRelationship;