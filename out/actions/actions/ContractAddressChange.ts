
import BaseType from "./../../Base";


/**
 * ### Contract Address Change ###
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
  /**
   * # New Contract Address #
   * The address to be used by all future requests/responses for the contract.
   */
  public set NewContractAddress(val: Address) {
    this._NewContractAddress = val;
    this._NewContractAddress.validate();
  }
  public get NewContractAddress() : Address {
    // TODO: implement this unsupported scenario
  }

  private _Timestamp: Timestamp;
  /**
   * # Timestamp #
   * Timestamp in nanoseconds of when the action was created.
   */
  public set Timestamp(val: Timestamp) {
    this._Timestamp = val;
    this._Timestamp.validate();
  }
  public get Timestamp() : Timestamp {
    // TODO: implement this unsupported scenario
  }
}

export default ContractAddressChange;