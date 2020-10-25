
import BaseType, { UInt64 } from "./../../Base";
import AssetTransfer from "./../../actions/types/AssetTransfer";

/**
 * ### Transfer ###
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
  /**
   * # Assets #
   * The Assets involved in the Transfer Action.
   */
  public set Assets(val: AssetTransfer[]) {
    this._Assets = val;
    this._Assets.forEach(i => i.validate());
  }
  public get Assets() : AssetTransfer[] {
    return this._Assets;
  }

  private _OfferExpiry: Timestamp;
  /**
   * # Offer Expiry #
   * This prevents any party from holding on to the partially signed message as a form of an option.  Eg. the exchange at this price is valid for 30 mins.
   */
  public set OfferExpiry(val: Timestamp) {
    this._OfferExpiry = val;
    this._OfferExpiry.validate();
  }
  public get OfferExpiry() : Timestamp {
    // TODO: implement this unsupported scenario
  }

  private _ExchangeFee: UInt64;
  /**
   * # Exchange Fee #
   * Fixed amount of bitcoin being paid to an exchange for facilitating a transfer.
   */
  public set ExchangeFee(val: number) {
    this._ExchangeFee = new UInt64(val);
    this._ExchangeFee.validate();
  }
  public get ExchangeFee() : number {
    return this._ExchangeFee.value;
  }

  private _ExchangeFeeAddress: Address;
  /**
   * # Exchange Fee Address #
   * Identifies the public address that the exchange fee should be paid to.
   */
  public set ExchangeFeeAddress(val: Address) {
    this._ExchangeFeeAddress = val;
    this._ExchangeFeeAddress.validate();
  }
  public get ExchangeFeeAddress() : Address {
    // TODO: implement this unsupported scenario
  }
}

export default Transfer;