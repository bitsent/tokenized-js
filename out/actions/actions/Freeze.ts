
import BaseType, { FixedChar3, AssetCode, Timestamp } from "./../../Base";
import QuantityIndex from "./../../actions/types/QuantityIndex";

/**
 * # Freeze
 * The contract responding to an Order action to freeze assets. To be used to comply with contractual/legal/issuer requirements. The target public address(es) will be marked as frozen. However the Freeze action publishes this fact to the public blockchain for transparency. The contract will not respond to any actions requested by the frozen address.

 */
class Freeze extends BaseType {

  constructor() {
    super();
    super.requiredFieldNames = [  ];
    super.fieldNames = [ "AssetType", "AssetCode", "Quantities", "FreezePeriod", "Timestamp" ];
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
   * Indices to addresses in outputs and the quantities being frozen. If the only address is the contract address and the asset code is zeros, then it is a contract wide freeze. If the only address is the contract address and the asset code is specified, then it is an asset wide freeze.
   */
  public set Quantities(val: QuantityIndex[]) {
    this._Quantities = val;
    this._Quantities.forEach(i => i.validate());
  }
  /**
   * ### Quantities 
   * Indices to addresses in outputs and the quantities being frozen. If the only address is the contract address and the asset code is zeros, then it is a contract wide freeze. If the only address is the contract address and the asset code is specified, then it is an asset wide freeze.
   */
  public get Quantities() : QuantityIndex[] {
    return this._Quantities;
  }

/** ## FREEZE PERIOD */
  private _FreezePeriod: Timestamp;
  /**
   * ### Freeze Period 
   * Used for a 'time out'.  Tokens are automatically unfrozen after the expiration timestamp without requiring a Thaw Action.
   */
  public set FreezePeriod(val: number) {
    this._FreezePeriod = new Timestamp(val);
    this._FreezePeriod.validate();
  }
  /**
   * ### Freeze Period 
   * Used for a 'time out'.  Tokens are automatically unfrozen after the expiration timestamp without requiring a Thaw Action.
   */
  public get FreezePeriod() : number {
    return this._FreezePeriod.value;
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

export default Freeze;