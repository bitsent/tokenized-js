
import BaseType, { Address, UInt64 } from "./../../Base";


/**
 * # Target Address
 * A TargetAddress defines a public address and quantity.
 */
class TargetAddress extends BaseType {

  constructor() {
    super();
    super.requiredFieldNames = [  ];
    super.fieldNames = [ "Address", "Quantity" ];
  }

  public validate() {
    super.validateAllFields();
  }

  
/** ## ADDRESS */
  private _Address: Address;
  /**
   * ### Address 
   * Public address where the token balance will be changed.
   */
  public set Address(val: Uint8Array) {
    this._Address = new Address(val);
    this._Address.validate();
  }
  /**
   * ### Address 
   * Public address where the token balance will be changed.
   */
  public get Address() : Uint8Array {
    return this._Address.value;
  }

/** ## QUANTITY */
  private _Quantity: UInt64;
  /**
   * ### Quantity 
   * Qty of tokens to be frozen, thawed, confiscated or reconciled. For Contract-wide freezes 0 will be used.
   */
  public set Quantity(val: number) {
    this._Quantity = new UInt64(val);
    this._Quantity.validate();
  }
  /**
   * ### Quantity 
   * Qty of tokens to be frozen, thawed, confiscated or reconciled. For Contract-wide freezes 0 will be used.
   */
  public get Quantity() : number {
    return this._Quantity.value;
  }
}

export default TargetAddress;