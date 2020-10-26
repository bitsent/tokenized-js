
import BaseType, { VarChar, UInt32, UInt8, VarBin } from "./../../Base";
import Period from "./../../messages/types/Period";

/**
 * # Oracle Signature
 * A signature from an oracle verifying some data.
 */
class OracleSignature extends BaseType {

  constructor() {
    super();
    super.requiredFieldNames = [  ];
    super.fieldNames = [ "OracleURL", "BlockHeight", "ValidityPeriod", "SignatureAlgorithm", "Signature" ];
  }

  public validate() {
    super.validateAllFields();
  }

  private _OracleURL: VarChar;
  private _BlockHeight: UInt32;
  private _ValidityPeriod: Period;
  private _SignatureAlgorithm: UInt8;
  private _Signature: VarBin;

  
  /**
   * ### Oracle URL 
   * Base URL of the identity oracle that provided the signature.
   */
  public set OracleURL(val: string) {
    this._OracleURL = new VarChar(val);
    this._OracleURL.validate();
  }
  /**
   * ### Oracle URL 
   * Base URL of the identity oracle that provided the signature.
   */
  public get OracleURL() : string {
    return this._OracleURL.value;
  }

  /**
   * ### Block Height 
   * The height of the block hash included in the data signed by the oracle. If the value is not included (zero), then no signature hash is included in the signed data.
   */
  public set BlockHeight(val: number) {
    this._BlockHeight = new UInt32(val);
    this._BlockHeight.validate();
  }
  /**
   * ### Block Height 
   * The height of the block hash included in the data signed by the oracle. If the value is not included (zero), then no signature hash is included in the signed data.
   */
  public get BlockHeight() : number {
    return this._BlockHeight.value;
  }

  /**
   * ### Validity Period 
   * The time frame that the proof is valid.
   */
  public set ValidityPeriod(val: Period) {
    this._ValidityPeriod = val;
    this._ValidityPeriod.validate();
  }
  /**
   * ### Validity Period 
   * The time frame that the proof is valid.
   */
  public get ValidityPeriod() : Period {
    return this._ValidityPeriod;
  }

  /**
   * ### Signature Algorithm 
   * The algorithm used by the oracle signature.
   */
  public set SignatureAlgorithm(val: number) {
    this._SignatureAlgorithm = new UInt8(val);
    this._SignatureAlgorithm.validate();
  }
  /**
   * ### Signature Algorithm 
   * The algorithm used by the oracle signature.
   */
  public get SignatureAlgorithm() : number {
    return this._SignatureAlgorithm.value;
  }

  /**
   * ### Signature 
   * Signature of the related data with the oracle's public key.
   */
  public set Signature(val: Uint8Array) {
    this._Signature = new VarBin(val);
    this._Signature.validate();
  }
  /**
   * ### Signature 
   * Signature of the related data with the oracle's public key.
   */
  public get Signature() : Uint8Array {
    return this._Signature.value;
  }
}

export default OracleSignature;