
import BaseType, { VarBin, UInt8, VarBin_medium } from "./../../Base";


/**
 * # Amendment
 * An Amendment is used to describe the modification of a single field in a Contract or Asset, as defined in the ContractFormation and AssetCreation messages.
 */
class Amendment extends BaseType {

  constructor() {
    super();
    super.requiredFieldNames = [  ];
    super.fieldNames = [ "FieldIndexPath", "Operation", "Data" ];
  }

  public validate() {
    super.validateAllFields();
  }

  private _FieldIndexPath: VarBin;
  private _Operation: UInt8;
  private _Data: VarBin_medium;

  
  /**
   * ### Field Index Path 
   * List of indices that identify the field/sub-field to be amended.
   */
  public set FieldIndexPath(val: Uint8Array) {
    this._FieldIndexPath = new VarBin(val);
    this._FieldIndexPath.validate();
  }
  /**
   * ### Field Index Path 
   * List of indices that identify the field/sub-field to be amended.
   */
  public get FieldIndexPath() : Uint8Array {
    return this._FieldIndexPath.value;
  }

  /**
   * ### Operation 
   * 0 = Modify. 1 = Add an element to the data to the array of elements. 2 = Delete the element listed in the Element field. The Add and Delete operations only apply to a particilar element of a complex array type. For example, it could be used to remove a particular VotingSystem from a Contract.
   */
  public set Operation(val: number) {
    this._Operation = new UInt8(val);
    this._Operation.validate();
  }
  /**
   * ### Operation 
   * 0 = Modify. 1 = Add an element to the data to the array of elements. 2 = Delete the element listed in the Element field. The Add and Delete operations only apply to a particilar element of a complex array type. For example, it could be used to remove a particular VotingSystem from a Contract.
   */
  public get Operation() : number {
    return this._Operation.value;
  }

  /**
   * ### Data 
   * New data for the amended subfield. Data type depends on the the type of the field being amended. The value should be serialize as defined by the protocol.
   */
  public set Data(val: Uint8Array) {
    this._Data = new VarBin_medium(val);
    this._Data.validate();
  }
  /**
   * ### Data 
   * New data for the amended subfield. Data type depends on the the type of the field being amended. The value should be serialize as defined by the protocol.
   */
  public get Data() : Uint8Array {
    return this._Data.value;
  }
}

export default Amendment;