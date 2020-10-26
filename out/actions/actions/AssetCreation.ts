
import BaseType, { AssetCode, UInt64, VarBin_small, BooleanType, Polity, UInt8, AssetType, UInt32, Timestamp } from "./../../Base";


/**
 * # Asset Creation
 * This action creates an asset in response to the administration's instructions in the Definition Action.
 */
class AssetCreation extends BaseType {

  constructor() {
    super();
    super.requiredFieldNames = [  ];
    super.fieldNames = [ "AssetCode", "AssetIndex", "AssetPermissions", "TransfersPermitted", "TradeRestrictions", "EnforcementOrdersPermitted", "VotingRights", "VoteMultiplier", "AdministrationProposal", "HolderProposal", "AssetModificationGovernance", "TokenQty", "AssetType", "AssetPayload", "AssetRevision", "Timestamp" ];
  }

  public validate() {
    super.validateAllFields();
  }

  private _AssetCode: AssetCode;
  private _AssetIndex: UInt64;
  private _AssetPermissions: VarBin_small;
  private _TransfersPermitted: BooleanType;
  private _TradeRestrictions: Polity[];
  private _EnforcementOrdersPermitted: BooleanType;
  private _VotingRights: BooleanType;
  private _VoteMultiplier: UInt8;
  private _AdministrationProposal: BooleanType;
  private _HolderProposal: BooleanType;
  private _AssetModificationGovernance: UInt8;
  private _TokenQty: UInt64;
  private _AssetType: AssetType;
  private _AssetPayload: VarBin_small;
  private _AssetRevision: UInt32;
  private _Timestamp: Timestamp;

  
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

  /**
   * ### Asset Index 
   * The index of the asset within the contract. First asset is zero, second is one. Used to derive the asset code.
   */
  public set AssetIndex(val: number) {
    this._AssetIndex = new UInt64(val);
    this._AssetIndex.validate();
  }
  /**
   * ### Asset Index 
   * The index of the asset within the contract. First asset is zero, second is one. Used to derive the asset code.
   */
  public get AssetIndex() : number {
    return this._AssetIndex.value;
  }

  /**
   * ### Asset Permissions 
   * A set of permission objects containing switches and field references that define the permissions for modifying this asset. See the Permission documentation for more detail.
   */
  public set AssetPermissions(val: Uint8Array) {
    this._AssetPermissions = new VarBin_small(val);
    this._AssetPermissions.validate();
  }
  /**
   * ### Asset Permissions 
   * A set of permission objects containing switches and field references that define the permissions for modifying this asset. See the Permission documentation for more detail.
   */
  public get AssetPermissions() : Uint8Array {
    return this._AssetPermissions.value;
  }

  /**
   * ### Transfers Permitted 
   * Set to true if transfers are permitted between two parties, otherwise set to false to prevent peer-to-peer transfers.
   */
  public set TransfersPermitted(val: Boolean) {
    this._TransfersPermitted = new BooleanType(val);
    this._TransfersPermitted.validate();
  }
  /**
   * ### Transfers Permitted 
   * Set to true if transfers are permitted between two parties, otherwise set to false to prevent peer-to-peer transfers.
   */
  public get TransfersPermitted() : Boolean {
    return this._TransfersPermitted.value;
  }

  /**
   * ### Trade Restrictions 
   * If specified, the asset can only be traded within the specified trade restriction zone. For example, AUS would restrict to Australian residents only.
   */
  public set TradeRestrictions(val: string[]) {
    this._TradeRestrictions = val.map(v => new Polity(v));
    this._TradeRestrictions.forEach(i => i.validate());
  }
  /**
   * ### Trade Restrictions 
   * If specified, the asset can only be traded within the specified trade restriction zone. For example, AUS would restrict to Australian residents only.
   */
  public get TradeRestrictions() : string[] {
    return this._TradeRestrictions.map(i => i.value);
  }

  /**
   * ### Enforcement Orders Permitted 
   * Set to true if the administration is permitted to make enforcement orders on user tokens and balances, otherwise set to false to disable this feature.
   */
  public set EnforcementOrdersPermitted(val: Boolean) {
    this._EnforcementOrdersPermitted = new BooleanType(val);
    this._EnforcementOrdersPermitted.validate();
  }
  /**
   * ### Enforcement Orders Permitted 
   * Set to true if the administration is permitted to make enforcement orders on user tokens and balances, otherwise set to false to disable this feature.
   */
  public get EnforcementOrdersPermitted() : Boolean {
    return this._EnforcementOrdersPermitted.value;
  }

  /**
   * ### Voting Rights 
   * When false holders of this asset will not be able to vote for tokens of this asset even on voting systems in which vote multiplers are not permitted.
   */
  public set VotingRights(val: Boolean) {
    this._VotingRights = new BooleanType(val);
    this._VotingRights.validate();
  }
  /**
   * ### Voting Rights 
   * When false holders of this asset will not be able to vote for tokens of this asset even on voting systems in which vote multiplers are not permitted.
   */
  public get VotingRights() : Boolean {
    return this._VotingRights.value;
  }

  /**
   * ### Vote Multiplier 
   * Multiplies a vote by the specified integer. Where 1 token is equal to 1 vote with a 1 for vote multipler (normal), 1 token = 3 votes with a multiplier of 3, for example. If zero, then holders of this asset don't get any votes for their tokens.
   */
  public set VoteMultiplier(val: number) {
    this._VoteMultiplier = new UInt8(val);
    this._VoteMultiplier.validate();
  }
  /**
   * ### Vote Multiplier 
   * Multiplies a vote by the specified integer. Where 1 token is equal to 1 vote with a 1 for vote multipler (normal), 1 token = 3 votes with a multiplier of 3, for example. If zero, then holders of this asset don't get any votes for their tokens.
   */
  public get VoteMultiplier() : number {
    return this._VoteMultiplier.value;
  }

  /**
   * ### Administration Proposal 
   * Set to true if the administration is permitted to make proposals outside of the smart contract scope.
   */
  public set AdministrationProposal(val: Boolean) {
    this._AdministrationProposal = new BooleanType(val);
    this._AdministrationProposal.validate();
  }
  /**
   * ### Administration Proposal 
   * Set to true if the administration is permitted to make proposals outside of the smart contract scope.
   */
  public get AdministrationProposal() : Boolean {
    return this._AdministrationProposal.value;
  }

  /**
   * ### Holder Proposal 
   * Set to true if a holder is permitted to make proposals outside of the smart contract scope.
   */
  public set HolderProposal(val: Boolean) {
    this._HolderProposal = new BooleanType(val);
    this._HolderProposal.validate();
  }
  /**
   * ### Holder Proposal 
   * Set to true if a holder is permitted to make proposals outside of the smart contract scope.
   */
  public get HolderProposal() : Boolean {
    return this._HolderProposal.value;
  }

  /**
   * ### Asset Modification Governance 
   * Supported values: 1 - Contract-wide Asset Governance.  0 - Asset-wide Asset Governance.  If a referendum or initiative is used to propose a modification to a subfield controlled by the asset permissions, then the vote will either be a contract-wide vote (all assets vote on the referendum/initiative) or an asset-wide vote (only this asset votes on the referendum/initiative) depending on the value in this subfield.  The voting system specifies the voting rules.
   */
  public set AssetModificationGovernance(val: number) {
    this._AssetModificationGovernance = new UInt8(val);
    this._AssetModificationGovernance.validate();
  }
  /**
   * ### Asset Modification Governance 
   * Supported values: 1 - Contract-wide Asset Governance.  0 - Asset-wide Asset Governance.  If a referendum or initiative is used to propose a modification to a subfield controlled by the asset permissions, then the vote will either be a contract-wide vote (all assets vote on the referendum/initiative) or an asset-wide vote (only this asset votes on the referendum/initiative) depending on the value in this subfield.  The voting system specifies the voting rules.
   */
  public get AssetModificationGovernance() : number {
    return this._AssetModificationGovernance.value;
  }

  /**
   * ### Token Quantity 
   * The number of tokens to issue with this asset. Set to greater than zero for fungible tokens. If the value is 1 then it becomes a non-fungible token, where the contract would have many assets. Set to 0 to represent a placeholder asset, where tokens are to be issued later, or to represent a decomissioned asset where all tokens have been revoked.
   */
  public set TokenQty(val: number) {
    this._TokenQty = new UInt64(val);
    this._TokenQty.validate();
  }
  /**
   * ### Token Quantity 
   * The number of tokens to issue with this asset. Set to greater than zero for fungible tokens. If the value is 1 then it becomes a non-fungible token, where the contract would have many assets. Set to 0 to represent a placeholder asset, where tokens are to be issued later, or to represent a decomissioned asset where all tokens have been revoked.
   */
  public get TokenQty() : number {
    return this._TokenQty.value;
  }

  /**
   * ### Asset Type 
   * A code representing the type of asset and the structure of the payload.
   */
  public set AssetType(val: string) {
    this._AssetType = new AssetType(val);
    this._AssetType.validate();
  }
  /**
   * ### Asset Type 
   * A code representing the type of asset and the structure of the payload.
   */
  public get AssetType() : string {
    return this._AssetType.value;
  }

  /**
   * ### Asset Payload 
   * A custom payload that contains meta data about this asset. Payload structure and length is dependent on the asset type chosen. See asset documentation for more details.
   */
  public set AssetPayload(val: Uint8Array) {
    this._AssetPayload = new VarBin_small(val);
    this._AssetPayload.validate();
  }
  /**
   * ### Asset Payload 
   * A custom payload that contains meta data about this asset. Payload structure and length is dependent on the asset type chosen. See asset documentation for more details.
   */
  public get AssetPayload() : Uint8Array {
    return this._AssetPayload.value;
  }

  /**
   * ### Asset Revision 
   * A counter for the number of times this asset has been revised using a modification action.
   */
  public set AssetRevision(val: number) {
    this._AssetRevision = new UInt32(val);
    this._AssetRevision.validate();
  }
  /**
   * ### Asset Revision 
   * A counter for the number of times this asset has been revised using a modification action.
   */
  public get AssetRevision() : number {
    return this._AssetRevision.value;
  }

  /**
   * ### Timestamp 
   * Timestamp in nanoseconds of when the smart contract created the action.
   */
  public set Timestamp(val: number) {
    this._Timestamp = new Timestamp(val);
    this._Timestamp.validate();
  }
  /**
   * ### Timestamp 
   * Timestamp in nanoseconds of when the smart contract created the action.
   */
  public get Timestamp() : number {
    return this._Timestamp.value;
  }
}

export default AssetCreation;