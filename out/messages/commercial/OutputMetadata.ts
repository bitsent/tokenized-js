
import BaseType, { VarChar_medium, Tag } from "./../../Base";
import OutputTag from "./../../messages/types/OutputTag";

/**
 * # Output Metadata
 * Metadata associated with the output. Aka Transaction details. It is used to describe the purpose of the transaction and add other relevant information. Often encrypted (DH, RSA) to make it private for one or more parties.  DH for b2b where multiple parties can see the description.  RSA or the like for descriptions only visible to one of the transacting parties. Optional
 */
class OutputMetadata extends BaseType {

  constructor() {
    super();
    super.requiredFieldNames = [  ];
    super.fieldNames = [ "OutputDescription", "Tags", "CustomTags" ];
  }

  public validate() {
    super.validateAllFields();
  }

  private _OutputDescription: VarChar_medium;
  private _Tags: Tag[];
  private _CustomTags: OutputTag[];

  
  /**
   * ### Output Description 
   * A Description that accompanies the output. A transaction description.
   */
  public set OutputDescription(val: string) {
    this._OutputDescription = new VarChar_medium(val);
    this._OutputDescription.validate();
  }
  /**
   * ### Output Description 
   * A Description that accompanies the output. A transaction description.
   */
  public get OutputDescription() : string {
    return this._OutputDescription.value;
  }

  /**
   * ### Tags 
   * Predefined values for describing the output.
   */
  public set Tags(val: number[]) {
    this._Tags = val.map(v => new Tag(v));
    this._Tags.forEach(i => i.validate());
  }
  /**
   * ### Tags 
   * Predefined values for describing the output.
   */
  public get Tags() : number[] {
    return this._Tags.map(i => i.value);
  }

  /**
   * ### Custom Tags 
   * Free form text fields for describing the output. Groceries, Moomba Gas Compressor Project, Cash Register 3, Fitness, Entertainment, Special, VIP Section, North Carolina Store, Waitress: Cindy Smith, etc.
   */
  public set CustomTags(val: OutputTag[]) {
    this._CustomTags = val;
    this._CustomTags.forEach(i => i.validate());
  }
  /**
   * ### Custom Tags 
   * Free form text fields for describing the output. Groceries, Moomba Gas Compressor Project, Cash Register 3, Fitness, Entertainment, Special, VIP Section, North Carolina Store, Waitress: Cindy Smith, etc.
   */
  public get CustomTags() : OutputTag[] {
    return this._CustomTags.map(i => i);
  }
}

export default OutputMetadata;