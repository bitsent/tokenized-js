
import BaseType, { Timestamp, VarBin_medium } from "./../../Base";


/**
 * # Offer
 * A message that contains all of the details required for an agreement to be formed. Sent to an address(es). The Offer should have all, or nearly all, of the details required for the receiving party to accept the offer.  The Offer shall be in the form of a partially formed Bitcoin transaction with all of the relevent details (offer, consideration, offeror's payment/receipt details, etc.).  The Offer message is different to a Signature Request message in that it is missing the offeree's payment/receipt details (eg. UTXOs). If the Offer message is well received by the offeree, then the offeree can add their relevent details (eg. inputs/outputs) and sign the transaction.  If an additional signature is required from the offeror at this point, then the partially-signed transaction can be sent to the offeror by way of a Signature Request message.
 */
class Offer extends BaseType {

  constructor() {
    super();
    super.requiredFieldNames = [  ];
    super.fieldNames = [ "Timestamp", "Payload" ];
  }

  public validate() {
    super.validateAllFields();
  }

  
/** ## TIMESTAMP */
  private _Timestamp: Timestamp;
  /**
   * ### Timestamp 
   * Timestamp in nanoseconds for when the message sender created the offer.
   */
  public set Timestamp(val: number) {
    this._Timestamp = new Timestamp(val);
    this._Timestamp.validate();
  }
  /**
   * ### Timestamp 
   * Timestamp in nanoseconds for when the message sender created the offer.
   */
  public get Timestamp() : number {
    return this._Timestamp.value;
  }

/** ## PAYLOAD */
  private _Payload: VarBin_medium;
  /**
   * ### Payload 
   * Serialized Bitcoin transaction. The transaction needs data added by another party upon acceptance of offer.
   */
  public set Payload(val: Uint8Array) {
    this._Payload = new VarBin_medium(val);
    this._Payload.validate();
  }
  /**
   * ### Payload 
   * Serialized Bitcoin transaction. The transaction needs data added by another party upon acceptance of offer.
   */
  public get Payload() : Uint8Array {
    return this._Payload.value;
  }
}

export default Offer;