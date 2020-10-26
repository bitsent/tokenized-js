
import BaseType, { VarChar_medium } from "./../../Base";


/**
 * # Establishment
 * Establishes an on-chain register.
 */
class Establishment extends BaseType {

  constructor() {
    super();
    super.requiredFieldNames = [  ];
    super.fieldNames = [ "Message" ];
  }

  public validate() {
    super.validateAllFields();
  }

  
/** ## MESSAGE */
  private _Message: VarChar_medium;
  /**
   * ### Message 
   * A custom message to include with this action.
   */
  public set Message(val: string) {
    this._Message = new VarChar_medium(val);
    this._Message.validate();
  }
  /**
   * ### Message 
   * A custom message to include with this action.
   */
  public get Message() : string {
    return this._Message.value;
  }
}

export default Establishment;