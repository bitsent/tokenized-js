
import BaseType, { VarBin_medium } from "./../../Base";


/**
 * ### Signature Request ###
 * Partially-signed transactions (Tokenized actions, Bitcoin, Multisig, Threshold Signatures, etc.) can be passed around on-chain to the parties (including Smart Contracts) that still have to sign the transaction.
 */
class SignatureRequest extends BaseType {

  constructor() {
    super();
    super.requiredFieldNames = [  ];
    super.fieldNames = [ "Timestamp", "Payload" ];
  }

  public validate() {
    super.validateAllFields();
  }

  
  private _Timestamp: Timestamp;
  /**
   * # Timestamp #
   * Timestamp in nanoseconds for when the message sender creates the transaction.
   */
  public set Timestamp(val: Timestamp) {
    this._Timestamp = val;
    this._Timestamp.validate();
  }
  public get Timestamp() : Timestamp {
    // TODO: implement this unsupported scenario
  }

  private _Payload: VarBin_medium;
  /**
   * # Payload #
   * Full serialized bitcoin tx with multiple inputs from different wallets/users.
   */
  public set Payload(val: Uint8Array) {
    this._Payload = new VarBin_medium(val);
    this._Payload.validate();
  }
  public get Payload() : Uint8Array {
    return this._Payload.value;
  }
}

export default SignatureRequest;