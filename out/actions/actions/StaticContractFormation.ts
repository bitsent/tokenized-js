
import BaseType, { VarChar, ContractCode, UInt8, VarBin_medium, UInt32, FixedChar5, Timestamp, TxId, VarBin } from "./../../Base";
import Document from "./../../messages/types/Document";
import Entity from "./../../messages/types/Entity";
import Oracle from "./../../actions/types/Oracle";

/**
 * # Static Contract Formation
 * Static Contract Formation Action
 */
class StaticContractFormation extends BaseType {

  constructor() {
    super();
    super.requiredFieldNames = [  ];
    super.fieldNames = [ "ContractName", "ContractCode", "BodyOfAgreementType", "BodyOfAgreement", "ContractType", "SupportingDocs", "ContractRevision", "GoverningLaw", "Jurisdiction", "EffectiveDate", "ContractExpiration", "ContractURI", "PrevRevTxID", "Entities", "EntityOracle", "EntityOracleSignature", "EntityOracleSigBlockHeight" ];
  }

  public validate() {
    super.validateAllFields();
  }

  
/** ## CONTRACT NAME */
  private _ContractName: VarChar;
  /**
   * ### Contract Name 
   * Can be any unique identifying string, including human readable names for branding/vanity purposes. Contract identifier (instance) is the bitcoin public address. If the public address is lost, then the administration will have to reissue the entire contract, Asset Definition and tokens with the new public address. Smart contracts can be branded and specialized to suit any terms and conditions.
   */
  public set ContractName(val: string) {
    this._ContractName = new VarChar(val);
    this._ContractName.validate();
  }
  /**
   * ### Contract Name 
   * Can be any unique identifying string, including human readable names for branding/vanity purposes. Contract identifier (instance) is the bitcoin public address. If the public address is lost, then the administration will have to reissue the entire contract, Asset Definition and tokens with the new public address. Smart contracts can be branded and specialized to suit any terms and conditions.
   */
  public get ContractName() : string {
    return this._ContractName.value;
  }

/** ## CONTRACT CODE */
  private _ContractCode: ContractCode;
  /**
   * ### Contract Code 
   * 32 randomly generated bytes. Each Contract Code should be unique. The Contract ID will be human facing and will be the Contract Code, with a checksum, encoded in base58 and prefixed by 'CON'. Contract ID = CON + base58(ContractCode + checksum).  Eg. Contract ID = 'CON18RDoKK7Ed5zid2FkKVy7q3rULr4tgfjr4'
   */
  public set ContractCode(val: Uint8Array) {
    this._ContractCode = new ContractCode(val);
    this._ContractCode.validate();
  }
  /**
   * ### Contract Code 
   * 32 randomly generated bytes. Each Contract Code should be unique. The Contract ID will be human facing and will be the Contract Code, with a checksum, encoded in base58 and prefixed by 'CON'. Contract ID = CON + base58(ContractCode + checksum).  Eg. Contract ID = 'CON18RDoKK7Ed5zid2FkKVy7q3rULr4tgfjr4'
   */
  public get ContractCode() : Uint8Array {
    return this._ContractCode.value;
  }

/** ## BODY OF AGREEMENT TYPE */
  private _BodyOfAgreementType: UInt8;
  /**
   * ### Body of Agreement Type 
   * 1 - SHA-256 Hash, 2 - Tokenized Body of Agreement Format
   */
  public set BodyOfAgreementType(val: number) {
    this._BodyOfAgreementType = new UInt8(val);
    this._BodyOfAgreementType.validate();
  }
  /**
   * ### Body of Agreement Type 
   * 1 - SHA-256 Hash, 2 - Tokenized Body of Agreement Format
   */
  public get BodyOfAgreementType() : number {
    return this._BodyOfAgreementType.value;
  }

/** ## BODY OF AGREEMENT */
  private _BodyOfAgreement: VarBin_medium;
  /**
   * ### Body of Agreement 
   * SHA-256 hash of the body of the agreement (full contract in pdf format or the like) or the full terms and conditions of an agreement in the Tokenized Body of Agreement format.  This is specific to the smart contract and relevant Assets.  Legal and technical information.
   */
  public set BodyOfAgreement(val: Uint8Array) {
    this._BodyOfAgreement = new VarBin_medium(val);
    this._BodyOfAgreement.validate();
  }
  /**
   * ### Body of Agreement 
   * SHA-256 hash of the body of the agreement (full contract in pdf format or the like) or the full terms and conditions of an agreement in the Tokenized Body of Agreement format.  This is specific to the smart contract and relevant Assets.  Legal and technical information.
   */
  public get BodyOfAgreement() : Uint8Array {
    return this._BodyOfAgreement.value;
  }

/** ## CONTRACT TYPE */
  private _ContractType: VarChar;
  /**
   * ### Contract Type 
   * Describes the purpose of the contract.
   */
  public set ContractType(val: string) {
    this._ContractType = new VarChar(val);
    this._ContractType.validate();
  }
  /**
   * ### Contract Type 
   * Describes the purpose of the contract.
   */
  public get ContractType() : string {
    return this._ContractType.value;
  }

/** ## SUPPORTING DOCUMENTATION */
  private _SupportingDocs: Document[];
  /**
   * ### Supporting Documentation 
   * Supporting documents that are important to the contract.
   */
  public set SupportingDocs(val: Document[]) {
    this._SupportingDocs = val;
    this._SupportingDocs.forEach(i => i.validate());
  }
  /**
   * ### Supporting Documentation 
   * Supporting documents that are important to the contract.
   */
  public get SupportingDocs() : Document[] {
    return this._SupportingDocs;
  }

/** ## CONTRACT REVISION */
  private _ContractRevision: UInt32;
  /**
   * ### Contract Revision 
   * Counter 0 to (2^32)-1
   */
  public set ContractRevision(val: number) {
    this._ContractRevision = new UInt32(val);
    this._ContractRevision.validate();
  }
  /**
   * ### Contract Revision 
   * Counter 0 to (2^32)-1
   */
  public get ContractRevision() : number {
    return this._ContractRevision.value;
  }

/** ## GOVERNING LAW */
  private _GoverningLaw: FixedChar5;
  /**
   * ### Governing Law 
   * 5 Letter Code to identify which governing law the contract will adhere to.  Disputes are to be settled by this law in the jurisdiction specified below. Private dispute resolution organizations can be used as well.  A custom code just needs to be defined.
   */
  public set GoverningLaw(val: string) {
    this._GoverningLaw = new FixedChar5(val);
    this._GoverningLaw.validate();
  }
  /**
   * ### Governing Law 
   * 5 Letter Code to identify which governing law the contract will adhere to.  Disputes are to be settled by this law in the jurisdiction specified below. Private dispute resolution organizations can be used as well.  A custom code just needs to be defined.
   */
  public get GoverningLaw() : string {
    return this._GoverningLaw.value;
  }

/** ## JURISDICTION */
  private _Jurisdiction: FixedChar5;
  /**
   * ### Jurisdiction 
   * Legal proceedings/arbitration will take place using the specified Governing Law in this location.
   */
  public set Jurisdiction(val: string) {
    this._Jurisdiction = new FixedChar5(val);
    this._Jurisdiction.validate();
  }
  /**
   * ### Jurisdiction 
   * Legal proceedings/arbitration will take place using the specified Governing Law in this location.
   */
  public get Jurisdiction() : string {
    return this._Jurisdiction.value;
  }

/** ## EFFECTIVE DATE */
  private _EffectiveDate: Timestamp;
  /**
   * ### Effective Date 
   * Start date of the contract.
   */
  public set EffectiveDate(val: number) {
    this._EffectiveDate = new Timestamp(val);
    this._EffectiveDate.validate();
  }
  /**
   * ### Effective Date 
   * Start date of the contract.
   */
  public get EffectiveDate() : number {
    return this._EffectiveDate.value;
  }

/** ## CONTRACT EXPIRATION */
  private _ContractExpiration: Timestamp;
  /**
   * ### Contract Expiration 
   * All actions related to the contract will cease to work after this timestamp. The smart contract will stop running.  This will allow many token use cases to be able to calculate smart contract running costs. Eg. an issuer is creating tickets for an event on the 5th of June 2018.  The smart contract will facilitate exchange and send transactions up until the 6th of June.  Wallets can use this to forget tokens that are no longer valid - or at least store them in an 'Expired' folder.
   */
  public set ContractExpiration(val: number) {
    this._ContractExpiration = new Timestamp(val);
    this._ContractExpiration.validate();
  }
  /**
   * ### Contract Expiration 
   * All actions related to the contract will cease to work after this timestamp. The smart contract will stop running.  This will allow many token use cases to be able to calculate smart contract running costs. Eg. an issuer is creating tickets for an event on the 5th of June 2018.  The smart contract will facilitate exchange and send transactions up until the 6th of June.  Wallets can use this to forget tokens that are no longer valid - or at least store them in an 'Expired' folder.
   */
  public get ContractExpiration() : number {
    return this._ContractExpiration.value;
  }

/** ## CONTRACT URI */
  private _ContractURI: VarChar;
  /**
   * ### Contract URI 
   * Length 0-255 bytes. Points to an information page that also has a copy of the Contract.  Anyone can go to the website to have a look at the price/token, information about the issuer (company), information about the Asset, legal information, etc.  There will also be a way for token owners to vote on this page and contact details with the issuer/tokenized companies. Could be a IPv6/IPv4, or txn-id for on chain information or even a public address (DNS).
   */
  public set ContractURI(val: string) {
    this._ContractURI = new VarChar(val);
    this._ContractURI.validate();
  }
  /**
   * ### Contract URI 
   * Length 0-255 bytes. Points to an information page that also has a copy of the Contract.  Anyone can go to the website to have a look at the price/token, information about the issuer (company), information about the Asset, legal information, etc.  There will also be a way for token owners to vote on this page and contact details with the issuer/tokenized companies. Could be a IPv6/IPv4, or txn-id for on chain information or even a public address (DNS).
   */
  public get ContractURI() : string {
    return this._ContractURI.value;
  }

/** ## PREVREVTXID */
  private _PrevRevTxID: TxId;
  /**
   * ### PrevRevTxID 
   * The Tx-ID of the previous contract revision.
   */
  public set PrevRevTxID(val: Uint8Array) {
    this._PrevRevTxID = new TxId(val);
    this._PrevRevTxID.validate();
  }
  /**
   * ### PrevRevTxID 
   * The Tx-ID of the previous contract revision.
   */
  public get PrevRevTxID() : Uint8Array {
    return this._PrevRevTxID.value;
  }

/** ## ENTITIES */
  private _Entities: Entity[];
  /**
   * ### Entities 
   * A list of legal entities associated with this contract.
   */
  public set Entities(val: Entity[]) {
    this._Entities = val;
    this._Entities.forEach(i => i.validate());
  }
  /**
   * ### Entities 
   * A list of legal entities associated with this contract.
   */
  public get Entities() : Entity[] {
    return this._Entities;
  }

/** ## ENTITY ORACLE */
  private _EntityOracle: Oracle;
  /**
   * ### Entity Oracle 
   * The oracle that provided the signature used to verify the entity's identity.
   */
  public set EntityOracle(val: Oracle) {
    this._EntityOracle = val;
    this._EntityOracle.validate();
  }
  /**
   * ### Entity Oracle 
   * The oracle that provided the signature used to verify the entity's identity.
   */
  public get EntityOracle() : Oracle {
    return this._EntityOracle;
  }

/** ## ENTITY ORACLE SIGNATURE */
  private _EntityOracleSignature: VarBin;
  /**
   * ### Entity Oracle Signature 
   * The ECDSA signature provided by the oracle specified. For N entities, the first N inputs must correspond with those entities.
   */
  public set EntityOracleSignature(val: Uint8Array) {
    this._EntityOracleSignature = new VarBin(val);
    this._EntityOracleSignature.validate();
  }
  /**
   * ### Entity Oracle Signature 
   * The ECDSA signature provided by the oracle specified. For N entities, the first N inputs must correspond with those entities.
   */
  public get EntityOracleSignature() : Uint8Array {
    return this._EntityOracleSignature.value;
  }

/** ## ENTITY ORACLE SIGNATURE BLOCK HEIGHT */
  private _EntityOracleSigBlockHeight: UInt32;
  /**
   * ### Entity Oracle Signature Block height 
   * The block height of the block hash used in the oracle signature.
   */
  public set EntityOracleSigBlockHeight(val: number) {
    this._EntityOracleSigBlockHeight = new UInt32(val);
    this._EntityOracleSigBlockHeight.validate();
  }
  /**
   * ### Entity Oracle Signature Block height 
   * The block height of the block hash used in the oracle signature.
   */
  public get EntityOracleSigBlockHeight() : number {
    return this._EntityOracleSigBlockHeight.value;
  }
}

export default StaticContractFormation;