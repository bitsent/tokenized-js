
import BaseType, { uint } from "./../../Base";


/**
 * ### Oracle ###
 * A Oracle defines the details of a public Oracle.
 */
class Oracle extends BaseType {

  constructor() {
    super();
    super.requiredFieldNames = [  ];
    super.fieldNames = [ "OracleTypes", "EntityContract" ];
  }

  public validate() {
    super.validateAllFields();
  }

  
  private _OracleTypes: UInt8[];
  /**
   * # Oracle Types #
   * The type of the oracle. 0 = Identity, 1 = Authority, 2 = Event. More than one value can be included to specify the oracle has more than one type.
   */
  public set OracleTypes(val: number[]) {
    this._OracleTypes = val.map(v => new uint(v));
    this._OracleTypes.forEach(i => i.validate());
  }
  public get OracleTypes() : number[] {
    return this._OracleTypes.map(i => i.value);
  }

  private _EntityContract: Address;
  /**
   * # Entity Contract #
   * The entity contract address of the service on chain that defines the oracle.
   */
  public set EntityContract(val: Address) {
    this._EntityContract = val;
    this._EntityContract.validate();
  }
  public get EntityContract() : Address {
    // TODO: implement this unsupported scenario
  }
}

export default Oracle;