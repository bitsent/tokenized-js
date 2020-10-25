
import BaseType, { VarChar_medium } from "./../../Base";


/**
 * ### Addition ###
 * Adds an entry to the Register.
 */
class Addition extends BaseType {

  constructor() {
    super();
    super.requiredFieldNames = [  ];
    super.fieldNames = [ "Message" ];
  }

  public validate() {
    super.validateAllFields();
  }

  
  private _Message: VarChar_medium;
  /**
   * # Message #
   * A custom message to include with this action.
   */
  public set Message(val: string) {
    this._Message = new VarChar_medium(val);
    this._Message.validate();
  }
  public get Message() : string {
    return this._Message.value;
  }
}

export default Addition;