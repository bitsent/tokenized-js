
import BaseType, { Role, VarChar } from "./../../Base";


/**
 * # Administrator
 * Administrator is used to refer to a Administration role in an Entity.
 */
class Administrator extends BaseType {

  constructor() {
    super();
    super.requiredFieldNames = [  ];
    super.fieldNames = [ "Type", "Name" ];
  }

  public validate() {
    super.validateAllFields();
  }

  private _Type: Role;
  private _Name: VarChar;

  
  /**
   * ### Administrator Type 
   * Chairman, Director, Managing Partner, etc.. Found in 'Roles' in Specification/Resources
   */
  public set Type(val: number) {
    this._Type = new Role(val);
    this._Type.validate();
  }
  /**
   * ### Administrator Type 
   * Chairman, Director, Managing Partner, etc.. Found in 'Roles' in Specification/Resources
   */
  public get Type() : number {
    return this._Type.value;
  }

  /**
   * ### Administrator Name 
   * Length 0-255 bytes. 0 is valid.
   */
  public set Name(val: string) {
    this._Name = new VarChar(val);
    this._Name.validate();
  }
  /**
   * ### Administrator Name 
   * Length 0-255 bytes. 0 is valid.
   */
  public get Name() : string {
    return this._Name.value;
  }
}

export default Administrator;