
import BaseType, { Address, Timestamp } from "./../../Base";


/**
 * # Contract Address Change
 * This txn is signed by the master contract key defined in the contract formation and changes the active contract address which the contract uses to receive and respond to requests. This is a worst case scenario fallback to only be used when the contract private key is believed to be exposed.
 */
class ContractAddressChange extends BaseType {

  constructor() {
    super();
    super.requiredFieldNames = [  ];
    super.fieldNames = [ "NewContractAddress", "Timestamp" ];
  }

  public validate() {
    super.validateAllFields();
  }

  private _NewContractAddress: Address;
  private _Timestamp: Timestamp;

  
  /**
   * ### New Contract Address 
   * The address to be used by all future requests/responses for the contract.
   */
  public set NewContractAddress(val: Uint8Array) {
    this._NewContractAddress = new Address(val);
    this._NewContractAddress.validate();
  }
  /**
   * ### New Contract Address 
   * The address to be used by all future requests/responses for the contract.
   */
  public get NewContractAddress() : Uint8Array {
    return this._NewContractAddress.value;
  }

  /**
   * ### Timestamp 
   * Timestamp in nanoseconds of when the action was created.
   */
  public set Timestamp(val: number) {
    this._Timestamp = new Timestamp(val);
    this._Timestamp.validate();
  }
  /**
   * ### Timestamp 
   * Timestamp in nanoseconds of when the action was created.
   */
  public get Timestamp() : number {
    return this._Timestamp.value;
  }
}

export default ContractAddressChange;