
import BaseType, { Timestamp } from "./../../Base";
import AssetSettlement from "./../../actions/types/AssetSettlement";

/**
 * # Settlement
 * Settles the transfer request of bitcoins and tokens from transfer (T1) actions.
 */
class Settlement extends BaseType {

  constructor() {
    super();
    super.requiredFieldNames = [  ];
    super.fieldNames = [ "Assets", "Timestamp" ];
  }

  public validate() {
    super.validateAllFields();
  }

  
/** ## ASSETS */
  private _Assets: AssetSettlement[];
  /**
   * ### Assets 
   * The Assets settled by the transfer action.
   */
  public set Assets(val: AssetSettlement[]) {
    this._Assets = val;
    this._Assets.forEach(i => i.validate());
  }
  /**
   * ### Assets 
   * The Assets settled by the transfer action.
   */
  public get Assets() : AssetSettlement[] {
    return this._Assets;
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

export default Settlement;