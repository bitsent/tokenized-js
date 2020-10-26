
import BaseType, { VarBin_small, BooleanType, Polity, UInt8, UInt64, AssetType } from "./../../Base";


/**
 * # Asset Definition
 * This action is used by the administration to define the properties/characteristics of the asset (token) that it wants to create. An asset has a unique identifier called AssetID = AssetType + base58(AssetCode + checksum). An asset is always linked to a contract that is identified by the public address of the Contract wallet.

 */
class AssetDefinition extends BaseType {

  constructor() {
    super();
    super.requiredFieldNames = [ "AssetType", "AssetPayload" ];
    super.fieldNames = [ "AssetPermissions", "TransfersPermitted", "TradeRestrictions", "EnforcementOrdersPermitted", "VotingRights", "VoteMultiplier", "AdministrationProposal", "HolderProposal", "AssetModificationGovernance", "TokenQty", "AssetType", "AssetPayload" ];
  }

  public validate() {
    super.validateAllFields();
  }

  
/** ## ASSET PERMISSIONS */
  private _AssetPermissions: VarBin_small;
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

/** ## TRANSFERS PERMITTED */
  private _TransfersPermitted: BooleanType;
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

/** ## TRADE RESTRICTIONS */
  private _TradeRestrictions: Polity[];
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

/** ## ENFORCEMENT ORDERS PERMITTED */
  private _EnforcementOrdersPermitted: BooleanType;
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

/** ## VOTING RIGHTS */
  private _VotingRights: BooleanType;
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

/** ## VOTE MULTIPLIER */
  private _VoteMultiplier: UInt8;
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

/** ## ADMINISTRATION PROPOSAL */
  private _AdministrationProposal: BooleanType;
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

/** ## HOLDER PROPOSAL */
  private _HolderProposal: BooleanType;
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

/** ## ASSET MODIFICATION GOVERNANCE */
  private _AssetModificationGovernance: UInt8;
  /**
   * ### Asset Modification Governance 
   * Supported values: 1 - Contract-wide Asset Governance. 0 - Asset-wide Asset Governance.  If a referendum or initiative is used to propose a modification to a subfield controlled by the asset permissions, then the vote will either be a contract-wide vote (all assets vote on the referendum/initiative) or an asset-wide vote (only this asset votes on the referendum/initiative) depending on the value in this subfield.  The voting system specifies the voting rules.
   */
  public set AssetModificationGovernance(val: number) {
    this._AssetModificationGovernance = new UInt8(val);
    this._AssetModificationGovernance.validate();
  }
  /**
   * ### Asset Modification Governance 
   * Supported values: 1 - Contract-wide Asset Governance. 0 - Asset-wide Asset Governance.  If a referendum or initiative is used to propose a modification to a subfield controlled by the asset permissions, then the vote will either be a contract-wide vote (all assets vote on the referendum/initiative) or an asset-wide vote (only this asset votes on the referendum/initiative) depending on the value in this subfield.  The voting system specifies the voting rules.
   */
  public get AssetModificationGovernance() : number {
    return this._AssetModificationGovernance.value;
  }

/** ## TOKEN QUANTITY */
  private _TokenQty: UInt64;
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

/** ## ASSET TYPE */
  private _AssetType: AssetType;
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

/** ## ASSET PAYLOAD */
  private _AssetPayload: VarBin_small;
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
}

export default AssetDefinition;