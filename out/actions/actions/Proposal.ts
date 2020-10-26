
import BaseType, { UInt8, FixedChar3, AssetCode, VarChar, VarChar_medium, Bin32, Timestamp } from "./../../Base";
import Amendment from "./../../actions/types/Amendment";

/**
 * # Proposal
 * Allows the Administration/Token Holders to propose a change (aka Initiative/Shareholder vote).  A significant cost - specified in the Contract Formation - can be attached to this action when sent from Token Holders to reduce spam, as the resulting vote will be put to all token owners.
 */
class Proposal extends BaseType {

  constructor() {
    super();
    super.requiredFieldNames = [  ];
    super.fieldNames = [ "Type", "AssetType", "AssetCode", "VoteSystem", "ProposedAmendments", "VoteOptions", "VoteMax", "ProposalDescription", "ProposalDocumentHash", "VoteCutOffTimestamp" ];
  }

  public validate() {
    super.validateAllFields();
  }

  
/** ## TYPE */
  private _Type: UInt8;
  /**
   * ### Type 
   * Type of proposal. Supported values:
  0 Referendum / Administration Initiates / Members Vote
  1 Initiative / Members Initiate / Members Vote
  2 AdministrativeMatter / Administration Initiates / Administrators Vote
   */
  public set Type(val: number) {
    this._Type = new UInt8(val);
    this._Type.validate();
  }
  /**
   * ### Type 
   * Type of proposal. Supported values:
  0 Referendum / Administration Initiates / Members Vote
  1 Initiative / Members Initiate / Members Vote
  2 AdministrativeMatter / Administration Initiates / Administrators Vote
   */
  public get Type() : number {
    return this._Type.value;
  }

/** ## ASSET TYPE */
  private _AssetType: FixedChar3;
  /**
   * ### Asset Type 
   * Three letter character that specifies the asset type.
   */
  public set AssetType(val: string) {
    this._AssetType = new FixedChar3(val);
    this._AssetType.validate();
  }
  /**
   * ### Asset Type 
   * Three letter character that specifies the asset type.
   */
  public get AssetType() : string {
    return this._AssetType.value;
  }

/** ## ASSET CODE */
  private _AssetCode: AssetCode;
  /**
   * ### Asset Code 
   * A unique code that is used to identify the asset. It is generated by hashing the contract public key hash and the asset index. SHA256(contract PKH + asset index)
   */
  public set AssetCode(val: Uint8Array) {
    this._AssetCode = new AssetCode(val);
    this._AssetCode.validate();
  }
  /**
   * ### Asset Code 
   * A unique code that is used to identify the asset. It is generated by hashing the contract public key hash and the asset index. SHA256(contract PKH + asset index)
   */
  public get AssetCode() : Uint8Array {
    return this._AssetCode.value;
  }

/** ## VOTE SYSTEM */
  private _VoteSystem: UInt8;
  /**
   * ### Vote System 
   * X for Vote System X. (1-255, 0 is not valid.)
   */
  public set VoteSystem(val: number) {
    this._VoteSystem = new UInt8(val);
    this._VoteSystem.validate();
  }
  /**
   * ### Vote System 
   * X for Vote System X. (1-255, 0 is not valid.)
   */
  public get VoteSystem() : number {
    return this._VoteSystem.value;
  }

/** ## PROPOSED AMENDMENTS */
  private _ProposedAmendments: Amendment[];
  /**
   * ### Proposed Amendments 
   * Each element contains details of which fields to modify, or delete. Because the number of fields in a Contract and Asset is dynamic due to some fields being able to be repeated, the index value of the field needs to be calculated against the Contract or Asset the changes are to apply to. In the event of a Vote being created from this Initiative, the changes will be applied to the version of the Contract or Asset at that time.
   */
  public set ProposedAmendments(val: Amendment[]) {
    this._ProposedAmendments = val;
    this._ProposedAmendments.forEach(i => i.validate());
  }
  /**
   * ### Proposed Amendments 
   * Each element contains details of which fields to modify, or delete. Because the number of fields in a Contract and Asset is dynamic due to some fields being able to be repeated, the index value of the field needs to be calculated against the Contract or Asset the changes are to apply to. In the event of a Vote being created from this Initiative, the changes will be applied to the version of the Contract or Asset at that time.
   */
  public get ProposedAmendments() : Amendment[] {
    return this._ProposedAmendments;
  }

/** ## VOTE OPTIONS */
  private _VoteOptions: VarChar;
  /**
   * ### Vote Options 
   * Length 1-255 bytes. 0 is not valid. Each byte allows for a different vote option. Typical votes will likely be multiple choice or Y/N. Vote instances are identified by the Tx-ID. AB would be used for Y/N (binary) type votes. When Specific is true, only AB is a valid value.
   */
  public set VoteOptions(val: string) {
    this._VoteOptions = new VarChar(val);
    this._VoteOptions.validate();
  }
  /**
   * ### Vote Options 
   * Length 1-255 bytes. 0 is not valid. Each byte allows for a different vote option. Typical votes will likely be multiple choice or Y/N. Vote instances are identified by the Tx-ID. AB would be used for Y/N (binary) type votes. When Specific is true, only AB is a valid value.
   */
  public get VoteOptions() : string {
    return this._VoteOptions.value;
  }

/** ## VOTE MAX */
  private _VoteMax: UInt8;
  /**
   * ### Vote Max 
   * Range: 1-X. How many selections can a voter make in a Ballot Cast. 1 is selected for Y/N (binary). When Specific is true, only 1 is a valid value.
   */
  public set VoteMax(val: number) {
    this._VoteMax = new UInt8(val);
    this._VoteMax.validate();
  }
  /**
   * ### Vote Max 
   * Range: 1-X. How many selections can a voter make in a Ballot Cast. 1 is selected for Y/N (binary). When Specific is true, only 1 is a valid value.
   */
  public get VoteMax() : number {
    return this._VoteMax.value;
  }

/** ## PROPOSAL DESCRIPTION */
  private _ProposalDescription: VarChar_medium;
  /**
   * ### Proposal Description 
   * Length restricted by the Bitcoin protocol. 0 is valid. Description or details of the vote
   */
  public set ProposalDescription(val: string) {
    this._ProposalDescription = new VarChar_medium(val);
    this._ProposalDescription.validate();
  }
  /**
   * ### Proposal Description 
   * Length restricted by the Bitcoin protocol. 0 is valid. Description or details of the vote
   */
  public get ProposalDescription() : string {
    return this._ProposalDescription.value;
  }

/** ## PROPOSAL DOCUMENT HASH */
  private _ProposalDocumentHash: Bin32;
  /**
   * ### Proposal Document Hash 
   * SHA256 Hash of the proposal document to be distributed to voters.
   */
  public set ProposalDocumentHash(val: Uint8Array) {
    this._ProposalDocumentHash = new Bin32(val);
    this._ProposalDocumentHash.validate();
  }
  /**
   * ### Proposal Document Hash 
   * SHA256 Hash of the proposal document to be distributed to voters.
   */
  public get ProposalDocumentHash() : Uint8Array {
    return this._ProposalDocumentHash.value;
  }

/** ## VOTE CUT-OFF TIMESTAMP */
  private _VoteCutOffTimestamp: Timestamp;
  /**
   * ### Vote Cut-Off Timestamp 
   * Ballot casts after this timestamp will not be included. The vote has finished.
   */
  public set VoteCutOffTimestamp(val: number) {
    this._VoteCutOffTimestamp = new Timestamp(val);
    this._VoteCutOffTimestamp.validate();
  }
  /**
   * ### Vote Cut-Off Timestamp 
   * Ballot casts after this timestamp will not be included. The vote has finished.
   */
  public get VoteCutOffTimestamp() : number {
    return this._VoteCutOffTimestamp.value;
  }
}

export default Proposal;