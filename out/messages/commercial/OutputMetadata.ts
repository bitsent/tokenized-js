
import BaseType, { VarChar_medium } from "./../../Base";
import OutputTag from "./../../messages/types/OutputTag";

/**
 * ### Output Metadata ###
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
  /**
   * # Output Description #
   * A Description that accompanies the output. A transaction description.
   */
  public set OutputDescription(val: string) {
    this._OutputDescription = new VarChar_medium(val);
    this._OutputDescription.validate();
  }
  public get OutputDescription() : string {
    return this._OutputDescription.value;
  }

  private _Tags: Tag[];
  /**
   * # Tags #
   * Predefined values for describing the output.
   */
  public set Tags(val: Tag[]) {
    this._Tags = val;
    this._Tags.forEach(i => i.validate());
  }
  public get Tags() : Tag[] {
    // TODO: implement this unsupported scenario
  }

  private _CustomTags: OutputTag[];
  /**
   * # Custom Tags #
   * Free form text fields for describing the output. Groceries, Moomba Gas Compressor Project, Cash Register 3, Fitness, Entertainment, Special, VIP Section, North Carolina Store, Waitress: Cindy Smith, etc.
   */
  public set CustomTags(val: OutputTag[]) {
    this._CustomTags = val;
    this._CustomTags.forEach(i => i.validate());
  }
  public get CustomTags() : OutputTag[] {
    return this._CustomTags;
  }
}

export default OutputMetadata;