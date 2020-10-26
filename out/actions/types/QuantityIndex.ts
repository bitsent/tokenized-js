
import BaseType, { UInt16, UInt64 } from "./../../Base";


/**
 * # Quantity Index
 * A QuantityIndex contains a quantity, and an index. The quantity could be used to describe a number of tokens, or a value. The index is used to refer to an input or output index position.
 */
class QuantityIndex extends BaseType {

  constructor() {
    super();
    super.requiredFieldNames = [  ];
    super.fieldNames = [ "Index", "Quantity" ];
  }

  public validate() {
    super.validateAllFields();
  }

  private _Index: UInt16;
  private _Quantity: UInt64;

  
  /**
   * ### Index 
   * The index of the input/output (depending on context) sending/receiving the tokens.
   */
  public set Index(val: number) {
    this._Index = new UInt16(val);
    this._Index.validate();
  }
  /**
   * ### Index 
   * The index of the input/output (depending on context) sending/receiving the tokens.
   */
  public get Index() : number {
    return this._Index.value;
  }

  /**
   * ### Quantity 
   * Number of tokens being sent
   */
  public set Quantity(val: number) {
    this._Quantity = new UInt64(val);
    this._Quantity.validate();
  }
  /**
   * ### Quantity 
   * Number of tokens being sent
   */
  public get Quantity() : number {
    return this._Quantity.value;
  }
}

export default QuantityIndex;