
import BaseType, { FixedChar3, AssetCode, Timestamp } from "./../../Base";
import QuantityIndex from "./../../actions/types/QuantityIndex";

/**
 * # Reconciliation
 * The contract responding to an Order action to reconcile assets. To be used at the direction of the administration to fix record keeping errors with bitcoin and token balances.

 */
class Reconciliation extends BaseType {

  constructor() {
    super();
    super.requiredFieldNames = [  ];
    super.fieldNames = [ "AssetType", "AssetCode", "Quantities", "Timestamp" ];
  }

  public validate() {
    super.validateAllFields();
  }

  
/** ## ASSET TYPE */
  private _AssetType: FixedChar3;
  /**
   * ### Asset Type 
   * Three letter character that specifies the asset type.
   */
  public set AssetType(val: string) {
    this._AssetType = new FixedChar3(val);
    this._AssetType.validate();
  }
  /**
   * ### Asset Type 
   * Three letter character that specifies the asset type.
   */
  public get AssetType() : string {
    return this._AssetType.value;
  }

/** ## ASSET CODE */
  private _AssetCode: AssetCode;
  /**
   * ### Asset Code 
   * A unique code that is used to identify the asset. It is generated by hashing the contract public key hash and the asset index. SHA256(contract PKH + asset index)
   */
  public set AssetCode(val: Uint8Array) {
    this._AssetCode = new AssetCode(val);
    this._AssetCode.validate();
  }
  /**
   * ### Asset Code 
   * A unique code that is used to identify the asset. It is generated by hashing the contract public key hash and the asset index. SHA256(contract PKH + asset index)
   */
  public get AssetCode() : Uint8Array {
    return this._AssetCode.value;
  }

/** ## QUANTITIES */
  private _Quantities: QuantityIndex[];
  /**
   * ### Quantities 
   * The holders effected by the reconciliation and their balance remaining.
   */
  public set Quantities(val: QuantityIndex[]) {
    this._Quantities = val;
    this._Quantities.forEach(i => i.validate());
  }
  /**
   * ### Quantities 
   * The holders effected by the reconciliation and their balance remaining.
   */
  public get Quantities() : QuantityIndex[] {
    return this._Quantities;
  }

/** ## TIMESTAMP */
  private _Timestamp: Timestamp;
  /**
   * ### Timestamp 
   * Timestamp in nanoseconds of when the smart contract created the action.
   */
  public set Timestamp(val: number) {
    this._Timestamp = new Timestamp(val);
    this._Timestamp.validate();
  }
  /**
   * ### Timestamp 
   * Timestamp in nanoseconds of when the smart contract created the action.
   */
  public get Timestamp() : number {
    return this._Timestamp.value;
  }
}

export default Reconciliation;