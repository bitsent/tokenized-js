
import BaseType, { Address, Signature, UInt32, Timestamp } from "./../../Base";


/**
 * # Administrator Identity Certificate
 * A certificate provided by an identity oracle to verify the administrator address is associated  with the issuer entity identification information. Also if a contract operator is provided then it verifies that the contract operator address is associated with the specified contract  operator identity information. For a child contract that references a parent entity contract the certificate verifies that the administrator address is associated with that entity contract.

 */
class AdminIdentityCertificate extends BaseType {

  constructor() {
    super();
    super.requiredFieldNames = [  ];
    super.fieldNames = [ "EntityContract", "Signature", "BlockHeight", "Expiration" ];
  }

  public validate() {
    super.validateAllFields();
  }

  
/** ## ENTITY CONTRACT */
  private _EntityContract: Address;
  /**
   * ### Entity Contract 
   * The entity contract address of the service on chain that defines the identity oracle.
   */
  public set EntityContract(val: Uint8Array) {
    this._EntityContract = new Address(val);
    this._EntityContract.validate();
  }
  /**
   * ### Entity Contract 
   * The entity contract address of the service on chain that defines the identity oracle.
   */
  public get EntityContract() : Uint8Array {
    return this._EntityContract.value;
  }

/** ## SIGNATURE */
  private _Signature: Signature;
  /**
   * ### Signature 
   * The signature provided by the oracle specified. The first input must correspond to the  administration entity and, if a contract operator is included, the second input must  correspond to the contract operator entity."
   */
  public set Signature(val: Uint8Array) {
    this._Signature = new Signature(val);
    this._Signature.validate();
  }
  /**
   * ### Signature 
   * The signature provided by the oracle specified. The first input must correspond to the  administration entity and, if a contract operator is included, the second input must  correspond to the contract operator entity."
   */
  public get Signature() : Uint8Array {
    return this._Signature.value;
  }

/** ## BLOCK HEIGHT */
  private _BlockHeight: UInt32;
  /**
   * ### Block height 
   * The block height of the block hash used in the oracle signature.
   */
  public set BlockHeight(val: number) {
    this._BlockHeight = new UInt32(val);
    this._BlockHeight.validate();
  }
  /**
   * ### Block height 
   * The block height of the block hash used in the oracle signature.
   */
  public get BlockHeight() : number {
    return this._BlockHeight.value;
  }

/** ## EXPIRATION */
  private _Expiration: Timestamp;
  /**
   * ### Expiration 
   * Oracles have the option to specify an expiration after which a new certificate should be  provided.
   */
  public set Expiration(val: number) {
    this._Expiration = new Timestamp(val);
    this._Expiration.validate();
  }
  /**
   * ### Expiration 
   * Oracles have the option to specify an expiration after which a new certificate should be  provided.
   */
  public get Expiration() : number {
    return this._Expiration.value;
  }
}

export default AdminIdentityCertificate;