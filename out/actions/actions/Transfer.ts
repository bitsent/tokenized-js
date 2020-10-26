
import BaseType, { Timestamp, UInt64, Address } from "./../../Base";
import AssetTransfer from "./../../actions/types/AssetTransfer";

/**
 * # Transfer
 * A Token Owner(s) Sends, Exchanges or Swaps a token(s) or Bitcoin for a token(s) or Bitcoin.  Can be as simple as sending a single token to a receiver.  Or can be as complex as many senders sending many different assets - controlled by many different smart contracts - to a number of receivers.  This action also supports atomic swaps (tokens for tokens).  Since many parties and contracts can be involved in a transfer and the corresponding settlement action, the partially signed T1 and T2 actions will need to be passed around on-chain with an M1 action, or off-chain.
 */
class Transfer extends BaseType {

  constructor() {
    super();
    super.requiredFieldNames = [  ];
    super.fieldNames = [ "Assets", "OfferExpiry", "ExchangeFee", "ExchangeFeeAddress" ];
  }

  public validate() {
    super.validateAllFields();
  }

  private _Assets: AssetTransfer[];
  private _OfferExpiry: Timestamp;
  private _ExchangeFee: UInt64;
  private _ExchangeFeeAddress: Address;

  
  /**
   * ### Assets 
   * The Assets involved in the Transfer Action.
   */
  public set Assets(val: AssetTransfer[]) {
    this._Assets = val;
    this._Assets.forEach(i => i.validate());
  }
  /**
   * ### Assets 
   * The Assets involved in the Transfer Action.
   */
  public get Assets() : AssetTransfer[] {
    return this._Assets.map(i => i);
  }

  /**
   * ### Offer Expiry 
   * This prevents any party from holding on to the partially signed message as a form of an option.  Eg. the exchange at this price is valid for 30 mins.
   */
  public set OfferExpiry(val: number) {
    this._OfferExpiry = new Timestamp(val);
    this._OfferExpiry.validate();
  }
  /**
   * ### Offer Expiry 
   * This prevents any party from holding on to the partially signed message as a form of an option.  Eg. the exchange at this price is valid for 30 mins.
   */
  public get OfferExpiry() : number {
    return this._OfferExpiry.value;
  }

  /**
   * ### Exchange Fee 
   * Fixed amount of bitcoin being paid to an exchange for facilitating a transfer.
   */
  public set ExchangeFee(val: number) {
    this._ExchangeFee = new UInt64(val);
    this._ExchangeFee.validate();
  }
  /**
   * ### Exchange Fee 
   * Fixed amount of bitcoin being paid to an exchange for facilitating a transfer.
   */
  public get ExchangeFee() : number {
    return this._ExchangeFee.value;
  }

  /**
   * ### Exchange Fee Address 
   * Identifies the public address that the exchange fee should be paid to.
   */
  public set ExchangeFeeAddress(val: Uint8Array) {
    this._ExchangeFeeAddress = new Address(val);
    this._ExchangeFeeAddress.validate();
  }
  /**
   * ### Exchange Fee Address 
   * Identifies the public address that the exchange fee should be paid to.
   */
  public get ExchangeFeeAddress() : Uint8Array {
    return this._ExchangeFeeAddress.value;
  }
}

export default Transfer;