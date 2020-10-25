
import BaseType, { VarChar } from "./../../Base";


/**
 * ### Manager ###
 * Manager is used to refer to a role that is responsible for the Management of an Entity.
 */
class Manager extends BaseType {

  constructor() {
    super();
    super.requiredFieldNames = [  ];
    super.fieldNames = [ "Type", "Name" ];
  }

  public validate() {
    super.validateAllFields();
  }

  
  private _Type: Role;
  /**
   * # Manager Type #
   * CEO, COO, CFO, etc. Found in 'Roles' in Specification/Resources
   */
  public set Type(val: Role) {
    this._Type = val;
    this._Type.validate();
  }
  public get Type() : Role {
    // TODO: implement this unsupported scenario
  }

  private _Name: VarChar;
  /**
   * # Manager Name #
   * Length 0-255 bytes. 0 is valid.
   */
  public set Name(val: string) {
    this._Name = new VarChar(val);
    this._Name.validate();
  }
  public get Name() : string {
    return this._Name.value;
  }
}

export default Manager;