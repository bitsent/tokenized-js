
import BaseType, { UInt8, Address } from "./../../Base";


/**
 * # Oracle
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
  private _EntityContract: Address;

  
  /**
   * ### Oracle Types 
   * The type of the oracle. 0 = Identity, 1 = Authority, 2 = Event. More than one value can be included to specify the oracle has more than one type.
   */
  public set OracleTypes(val: number[]) {
    this._OracleTypes = val.map(v => new UInt8(v));
    this._OracleTypes.forEach(i => i.validate());
  }
  /**
   * ### Oracle Types 
   * The type of the oracle. 0 = Identity, 1 = Authority, 2 = Event. More than one value can be included to specify the oracle has more than one type.
   */
  public get OracleTypes() : number[] {
    return this._OracleTypes.map(i => i.value);
  }

  /**
   * ### Entity Contract 
   * The entity contract address of the service on chain that defines the oracle.
   */
  public set EntityContract(val: Uint8Array) {
    this._EntityContract = new Address(val);
    this._EntityContract.validate();
  }
  /**
   * ### Entity Contract 
   * The entity contract address of the service on chain that defines the oracle.
   */
  public get EntityContract() : Uint8Array {
    return this._EntityContract.value;
  }
}

export default Oracle;