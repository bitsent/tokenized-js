
import BaseType, { VarBin, VarBin_large } from "./../../Base";


/**
 * # Reference Transaction
 * A bitcoin transaction and the outputs that it spends.
 */
class ReferenceTransaction extends BaseType {

  constructor() {
    super();
    super.requiredFieldNames = [  ];
    super.fieldNames = [ "Transaction", "Outputs" ];
  }

  public validate() {
    super.validateAllFields();
  }

  
/** ## TRANSACTION */
  private _Transaction: VarBin;
  /**
   * ### Transaction 
   * A bitcoin transaction serialized in the bitcoin P2P format.
   */
  public set Transaction(val: Uint8Array) {
    this._Transaction = new VarBin(val);
    this._Transaction.validate();
  }
  /**
   * ### Transaction 
   * A bitcoin transaction serialized in the bitcoin P2P format.
   */
  public get Transaction() : Uint8Array {
    return this._Transaction.value;
  }

/** ## OUTPUTS */
  private _Outputs: VarBin_large[];
  /**
   * ### Outputs 
   * The bitcoin outputs corresponding to the inputs for the transaction. Serialized in bitcoin P2P format. There must be the same count as there are inputs in the contained transaction and they must be in the same order.
   */
  public set Outputs(val: Uint8Array[]) {
    this._Outputs = val.map(v => new VarBin_large(v));
    this._Outputs.forEach(i => i.validate());
  }
  /**
   * ### Outputs 
   * The bitcoin outputs corresponding to the inputs for the transaction. Serialized in bitcoin P2P format. There must be the same count as there are inputs in the contained transaction and they must be in the same order.
   */
  public get Outputs() : Uint8Array[] {
    return this._Outputs.map(i => i.value);
  }
}

export default ReferenceTransaction;