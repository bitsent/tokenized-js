
import BaseType, { Address, UInt64, UInt8, Signature, UInt32, Timestamp } from "./../../Base";


/**
 * # AssetReceiver
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
  private _Quantity: UInt64;
  private _OracleSigAlgorithm: UInt8;
  private _OracleIndex: UInt8;
  private _OracleConfirmationSig: Signature;
  private _OracleSigBlockHeight: UInt32;
  private _OracleSigExpiry: Timestamp;

  
  /**
   * ### Address 
   * The address receiving the tokens
   */
  public set Address(val: Uint8Array) {
    this._Address = new Address(val);
    this._Address.validate();
  }
  /**
   * ### Address 
   * The address receiving the tokens
   */
  public get Address() : Uint8Array {
    return this._Address.value;
  }

  /**
   * ### Quantity 
   * Number of tokens to be received by address at Output X
   */
  public set Quantity(val: number) {
    this._Quantity = new UInt64(val);
    this._Quantity.validate();
  }
  /**
   * ### Quantity 
   * Number of tokens to be received by address at Output X
   */
  public get Quantity() : number {
    return this._Quantity.value;
  }

  /**
   * ### Oracle Signature Algorithm 
   * 0 = No Oracle-signed Message (OracleConfirmationSig skipped in serialization), 1 = ECDSA+secp256k1. If the contract for the asset being received has oracles, then a signature is required from one of them.
   */
  public set OracleSigAlgorithm(val: number) {
    this._OracleSigAlgorithm = new UInt8(val);
    this._OracleSigAlgorithm.validate();
  }
  /**
   * ### Oracle Signature Algorithm 
   * 0 = No Oracle-signed Message (OracleConfirmationSig skipped in serialization), 1 = ECDSA+secp256k1. If the contract for the asset being received has oracles, then a signature is required from one of them.
   */
  public get OracleSigAlgorithm() : number {
    return this._OracleSigAlgorithm.value;
  }

  /**
   * ### Oracle Index 
   * Specifies the index into the list of oracles in the contract offer that was used to authorize this transfer.
   */
  public set OracleIndex(val: number) {
    this._OracleIndex = new UInt8(val);
    this._OracleIndex.validate();
  }
  /**
   * ### Oracle Index 
   * Specifies the index into the list of oracles in the contract offer that was used to authorize this transfer.
   */
  public get OracleIndex() : number {
    return this._OracleIndex.value;
  }

  /**
   * ### Oracle Confirmation Signature 
   * Length 0-255 bytes. If restricted to a oracle (whitelist) or has transfer restrictions (age, location, investor status): ECDSA+secp256k1 (or the like) signed message provided by an approved/trusted oracle through an API signature of the defined message. If no transfer restrictions(trade restriction/age restriction fields in the Asset Type payload. or restricted to a whitelist by the Contract Auth Flags, it is a NULL field.
   */
  public set OracleConfirmationSig(val: Uint8Array) {
    this._OracleConfirmationSig = new Signature(val);
    this._OracleConfirmationSig.validate();
  }
  /**
   * ### Oracle Confirmation Signature 
   * Length 0-255 bytes. If restricted to a oracle (whitelist) or has transfer restrictions (age, location, investor status): ECDSA+secp256k1 (or the like) signed message provided by an approved/trusted oracle through an API signature of the defined message. If no transfer restrictions(trade restriction/age restriction fields in the Asset Type payload. or restricted to a whitelist by the Contract Auth Flags, it is a NULL field.
   */
  public get OracleConfirmationSig() : Uint8Array {
    return this._OracleConfirmationSig.value;
  }

  /**
   * ### Oracle Signature Block height 
   * The block height of the block hash used in the oracle signature.
   */
  public set OracleSigBlockHeight(val: number) {
    this._OracleSigBlockHeight = new UInt32(val);
    this._OracleSigBlockHeight.validate();
  }
  /**
   * ### Oracle Signature Block height 
   * The block height of the block hash used in the oracle signature.
   */
  public get OracleSigBlockHeight() : number {
    return this._OracleSigBlockHeight.value;
  }

  /**
   * ### Oracle Signature Expiry 
   * This specifies the time at which the Oracle signature expires.
   */
  public set OracleSigExpiry(val: number) {
    this._OracleSigExpiry = new Timestamp(val);
    this._OracleSigExpiry.validate();
  }
  /**
   * ### Oracle Signature Expiry 
   * This specifies the time at which the Oracle signature expires.
   */
  public get OracleSigExpiry() : number {
    return this._OracleSigExpiry.value;
  }
}

export default AssetReceiver;