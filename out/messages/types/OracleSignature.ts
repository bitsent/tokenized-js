
import BaseType, { VarChar, UInt32, UInt8, VarBin } from "./../../Base";
import Period from "./../../messages/types/Period";

/**
 * ### Oracle Signature ###
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
  /**
   * # Oracle URL #
   * Base URL of the identity oracle that provided the signature.
   */
  public set OracleURL(val: string) {
    this._OracleURL = new VarChar(val);
    this._OracleURL.validate();
  }
  public get OracleURL() : string {
    return this._OracleURL.value;
  }

  private _BlockHeight: UInt32;
  /**
   * # Block Height #
   * The height of the block hash included in the data signed by the oracle. If the value is not included (zero), then no signature hash is included in the signed data.
   */
  public set BlockHeight(val: number) {
    this._BlockHeight = new UInt32(val);
    this._BlockHeight.validate();
  }
  public get BlockHeight() : number {
    return this._BlockHeight.value;
  }

  private _ValidityPeriod: Period;
  /**
   * # Validity Period #
   * The time frame that the proof is valid.
   */
  public set ValidityPeriod(val: Period) {
    this._ValidityPeriod = val;
    this._ValidityPeriod.validate();
  }
  public get ValidityPeriod() : Period {
    return this._ValidityPeriod;
  }

  private _SignatureAlgorithm: UInt8;
  /**
   * # Signature Algorithm #
   * The algorithm used by the oracle signature.
   */
  public set SignatureAlgorithm(val: number) {
    this._SignatureAlgorithm = new UInt8(val);
    this._SignatureAlgorithm.validate();
  }
  public get SignatureAlgorithm() : number {
    return this._SignatureAlgorithm.value;
  }

  private _Signature: VarBin;
  /**
   * # Signature #
   * Signature of the related data with the oracle's public key.
   */
  public set Signature(val: Uint8Array) {
    this._Signature = new VarBin(val);
    this._Signature.validate();
  }
  public get Signature() : Uint8Array {
    return this._Signature.value;
  }
}

export default OracleSignature;