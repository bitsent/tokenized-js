
import BaseType from "./../../Base";
import AssetSettlement from "./../../actions/types/AssetSettlement";

/**
 * ### Settlement ###
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

  
  private _Assets: AssetSettlement[];
  /**
   * # Assets #
   * The Assets settled by the transfer action.
   */
  public set Assets(val: AssetSettlement[]) {
    this._Assets = val;
    this._Assets.forEach(i => i.validate());
  }
  public get Assets() : AssetSettlement[] {
    return this._Assets;
  }

  private _Timestamp: Timestamp;
  /**
   * # Timestamp #
   * Timestamp in nanoseconds of when the smart contract created the action.
   */
  public set Timestamp(val: Timestamp) {
    this._Timestamp = val;
    this._Timestamp.validate();
  }
  public get Timestamp() : Timestamp {
    // TODO: implement this unsupported scenario
  }
}

export default Settlement;