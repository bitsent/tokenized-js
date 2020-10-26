
import BaseType, { VarBin } from "./../../Base";


/**
 * # Initiate Thread
 * Start a thread from within a conversation or channel.
 */
class InitiateThread extends BaseType {

  constructor() {
    super();
    super.requiredFieldNames = [  ];
    super.fieldNames = [ "Flag", "Seed" ];
  }

  public validate() {
    super.validateAllFields();
  }

  
/** ## FLAG */
  private _Flag: VarBin;
  /**
   * ### Flag 
   * The flag is required to identify messages in the thread so that all members don't have to be tagged in each message. It is recommended to be a random 20 byte value similar to public key hashes. The flag will be the Payload of an Envelope protocol message with a Payload Protocol ID of "F"
   */
  public set Flag(val: Uint8Array) {
    this._Flag = new VarBin(val);
    this._Flag.validate();
  }
  /**
   * ### Flag 
   * The flag is required to identify messages in the thread so that all members don't have to be tagged in each message. It is recommended to be a random 20 byte value similar to public key hashes. The flag will be the Payload of an Envelope protocol message with a Payload Protocol ID of "F"
   */
  public get Flag() : Uint8Array {
    return this._Flag.value;
  }

/** ## SEED */
  private _Seed: VarBin;
  /**
   * ### Seed 
   * The seed used to derive keys for the thread. If this value is not specified, then the original seed value from the parent conversation or channel is used.
   */
  public set Seed(val: Uint8Array) {
    this._Seed = new VarBin(val);
    this._Seed.validate();
  }
  /**
   * ### Seed 
   * The seed used to derive keys for the thread. If this value is not specified, then the original seed value from the parent conversation or channel is used.
   */
  public get Seed() : Uint8Array {
    return this._Seed.value;
  }
}

export default InitiateThread;