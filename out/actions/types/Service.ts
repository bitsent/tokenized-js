
import BaseType, { UInt8, VarChar, PublicKey } from "./../../Base";


/**
 * # Service
 * A definition of a service provided by an identity oracle to verify the administrator address is associated  with the issuer entity identification information. Also if a contract operator is provided then it verifies that the contract operator address is associated with the specified contract  operator identity information. For a child contract that references a parent entity contract the certificate verifies that the administrator address is associated with that entity contract.

 */
class Service extends BaseType {

  constructor() {
    super();
    super.requiredFieldNames = [  ];
    super.fieldNames = [ "Type", "URL", "PublicKey" ];
  }

  public validate() {
    super.validateAllFields();
  }

  
/** ## TYPE */
  private _Type: UInt8;
  /**
   * ### Type 
   * Describes the type of service.
  0 - Identity Oracle
  1 - Authority Oracle
  2 - Event Oracle
  3 - Contract Operator
   */
  public set Type(val: number) {
    this._Type = new UInt8(val);
    this._Type.validate();
  }
  /**
   * ### Type 
   * Describes the type of service.
  0 - Identity Oracle
  1 - Authority Oracle
  2 - Event Oracle
  3 - Contract Operator
   */
  public get Type() : number {
    return this._Type.value;
  }

/** ## URL */
  private _URL: VarChar;
  /**
   * ### URL 
   * The base URL of the service. For each service type there are predefined methods for  determining the specific endpoints.
   */
  public set URL(val: string) {
    this._URL = new VarChar(val);
    this._URL.validate();
  }
  /**
   * ### URL 
   * The base URL of the service. For each service type there are predefined methods for  determining the specific endpoints.
   */
  public get URL() : string {
    return this._URL.value;
  }

/** ## PUBLIC KEY */
  private _PublicKey: PublicKey;
  /**
   * ### Public Key 
   * The public key used to verify and authorize the service.
   */
  public set PublicKey(val: Uint8Array) {
    this._PublicKey = new PublicKey(val);
    this._PublicKey.validate();
  }
  /**
   * ### Public Key 
   * The public key used to verify and authorize the service.
   */
  public get PublicKey() : Uint8Array {
    return this._PublicKey.value;
  }
}

export default Service;