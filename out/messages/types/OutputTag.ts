
import BaseType, { VarChar } from "./../../Base";


/**
 * # Output Tag
 * A tag or category of an output used to categorize and organize outputs from different transactions.
 */
class OutputTag extends BaseType {

  constructor() {
    super();
    super.requiredFieldNames = [  ];
    super.fieldNames = [ "Tag" ];
  }

  public validate() {
    super.validateAllFields();
  }

  private _Tag: VarChar;

  
  /**
   * ### Tag 
   * The text of the tag.
   */
  public set Tag(val: string) {
    this._Tag = new VarChar(val);
    this._Tag.validate();
  }
  /**
   * ### Tag 
   * The text of the tag.
   */
  public get Tag() : string {
    return this._Tag.value;
  }
}

export default OutputTag;