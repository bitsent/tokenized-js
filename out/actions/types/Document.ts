
import BaseType, { VarChar, VarBin_medium } from "./../../Base";


/**
 * # Document
 * A file containing data.
 */
class Document extends BaseType {

  constructor() {
    super();
    super.requiredFieldNames = [  ];
    super.fieldNames = [ "Name", "Type", "Contents" ];
  }

  public validate() {
    super.validateAllFields();
  }

  private _Name: VarChar;
  private _Type: VarChar;
  private _Contents: VarBin_medium;

  
  /**
   * ### Document Name 
   * Full name, including file extension, of the file. Length 0-255 bytes. 0 is valid.
   */
  public set Name(val: string) {
    this._Name = new VarChar(val);
    this._Name.validate();
  }
  /**
   * ### Document Name 
   * Full name, including file extension, of the file. Length 0-255 bytes. 0 is valid.
   */
  public get Name() : string {
    return this._Name.value;
  }

  /**
   * ### MIME Type 
   * MIME type of the file. Length 0-255 bytes. 0 is valid. 
   */
  public set Type(val: string) {
    this._Type = new VarChar(val);
    this._Type.validate();
  }
  /**
   * ### MIME Type 
   * MIME type of the file. Length 0-255 bytes. 0 is valid. 
   */
  public get Type() : string {
    return this._Type.value;
  }

  /**
   * ### File Contents 
   * The contents of the file.
   */
  public set Contents(val: Uint8Array) {
    this._Contents = new VarBin_medium(val);
    this._Contents.validate();
  }
  /**
   * ### File Contents 
   * The contents of the file.
   */
  public get Contents() : Uint8Array {
    return this._Contents.value;
  }
}

export default Document;