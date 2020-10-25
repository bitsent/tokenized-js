
import BaseType, { UInt64, UInt8, UInt32 } from "./../../Base";


/**
 * ### AssetReceiver ###
 * An AssetReceiver is a quantity, address, and oracle signature. The quantity could be used to describe a number of tokens, or a value. The address is where the asset will be sent.
 */
class AssetReceiver extends BaseType {

  constructor() {
    super();
    super.requiredFieldNames = [  ];
    super.fieldNames = [ "Address", "Quantity", "OracleSigAlgorithm", "OracleIndex", "OracleConfirmationSig", "OracleSigBlockHeight", "OracleSigExpiry" ];
  }

  public validate() {
    super.validateAllFields();
  }

  
  private _Address: Address;
  /**
   * # Address #
   * The address receiving the tokens
   */
  public set Address(val: Address) {
    this._Address = val;
    this._Address.validate();
  }
  public get Address() : Address {
    // TODO: implement this unsupported scenario
  }

  private _Quantity: UInt64;
  /**
   * # Quantity #
   * Number of tokens to be received by address at Output X
   */
  public set Quantity(val: number) {
    this._Quantity = new UInt64(val);
    this._Quantity.validate();
  }
  public get Quantity() : number {
    return this._Quantity.value;
  }

  private _OracleSigAlgorithm: UInt8;
  /**
   * # Oracle Signature Algorithm #
   * 0 = No Oracle-signed Message (OracleConfirmationSig skipped in serialization), 1 = ECDSA+secp256k1. If the contract for the asset being received has oracles, then a signature is required from one of them.
   */
  public set OracleSigAlgorithm(val: number) {
    this._OracleSigAlgorithm = new UInt8(val);
    this._OracleSigAlgorithm.validate();
  }
  public get OracleSigAlgorithm() : number {
    return this._OracleSigAlgorithm.value;
  }

  private _OracleIndex: UInt8;
  /**
   * # Oracle Index #
   * Specifies the index into the list of oracles in the contract offer that was used to authorize this transfer.
   */
  public set OracleIndex(val: number) {
    this._OracleIndex = new UInt8(val);
    this._OracleIndex.validate();
  }
  public get OracleIndex() : number {
    return this._OracleIndex.value;
  }

  private _OracleConfirmationSig: Signature;
  /**
   * # Oracle Confirmation Signature #
   * Length 0-255 bytes. If restricted to a oracle (whitelist) or has transfer restrictions (age, location, investor status): ECDSA+secp256k1 (or the like) signed message provided by an approved/trusted oracle through an API signature of the defined message. If no transfer restrictions(trade restriction/age restriction fields in the Asset Type payload. or restricted to a whitelist by the Contract Auth Flags, it is a NULL field.
   */
  public set OracleConfirmationSig(val: Signature) {
    this._OracleConfirmationSig = val;
    this._OracleConfirmationSig.validate();
  }
  public get OracleConfirmationSig() : Signature {
    // TODO: implement this unsupported scenario
  }

  private _OracleSigBlockHeight: UInt32;
  /**
   * # Oracle Signature Block height #
   * The block height of the block hash used in the oracle signature.
   */
  public set OracleSigBlockHeight(val: number) {
    this._OracleSigBlockHeight = new UInt32(val);
    this._OracleSigBlockHeight.validate();
  }
  public get OracleSigBlockHeight() : number {
    return this._OracleSigBlockHeight.value;
  }

  private _OracleSigExpiry: Timestamp;
  /**
   * # Oracle Signature Expiry #
   * This specifies the time at which the Oracle signature expires.
   */
  public set OracleSigExpiry(val: Timestamp) {
    this._OracleSigExpiry = val;
    this._OracleSigExpiry.validate();
  }
  public get OracleSigExpiry() : Timestamp {
    // TODO: implement this unsupported scenario
  }
}

export default AssetReceiver;