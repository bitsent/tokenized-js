
import BaseType, { VarBin_small, BooleanType, UInt8, UInt64 } from "./../../Base";


/**
 * ### Asset Definition ###
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

  
  private _AssetPermissions: VarBin_small;
  /**
   * # Asset Permissions #
   * A set of permission objects containing switches and field references that define the permissions for modifying this asset. See the Permission documentation for more detail.
   */
  public set AssetPermissions(val: Uint8Array) {
    this._AssetPermissions = new VarBin_small(val);
    this._AssetPermissions.validate();
  }
  public get AssetPermissions() : Uint8Array {
    return this._AssetPermissions.value;
  }

  private _TransfersPermitted: BooleanType;
  /**
   * # Transfers Permitted #
   * Set to true if transfers are permitted between two parties, otherwise set to false to prevent peer-to-peer transfers.
   */
  public set TransfersPermitted(val: Boolean) {
    this._TransfersPermitted = new BooleanType(val);
    this._TransfersPermitted.validate();
  }
  public get TransfersPermitted() : Boolean {
    return this._TransfersPermitted.value;
  }

  private _TradeRestrictions: Polity[];
  /**
   * # Trade Restrictions #
   * If specified, the asset can only be traded within the specified trade restriction zone. For example, AUS would restrict to Australian residents only.
   */
  public set TradeRestrictions(val: Polity[]) {
    this._TradeRestrictions = val;
    this._TradeRestrictions.forEach(i => i.validate());
  }
  public get TradeRestrictions() : Polity[] {
    // TODO: implement this unsupported scenario
  }

  private _EnforcementOrdersPermitted: BooleanType;
  /**
   * # Enforcement Orders Permitted #
   * Set to true if the administration is permitted to make enforcement orders on user tokens and balances, otherwise set to false to disable this feature.
   */
  public set EnforcementOrdersPermitted(val: Boolean) {
    this._EnforcementOrdersPermitted = new BooleanType(val);
    this._EnforcementOrdersPermitted.validate();
  }
  public get EnforcementOrdersPermitted() : Boolean {
    return this._EnforcementOrdersPermitted.value;
  }

  private _VotingRights: BooleanType;
  /**
   * # Voting Rights #
   * When false holders of this asset will not be able to vote for tokens of this asset even on voting systems in which vote multiplers are not permitted.
   */
  public set VotingRights(val: Boolean) {
    this._VotingRights = new BooleanType(val);
    this._VotingRights.validate();
  }
  public get VotingRights() : Boolean {
    return this._VotingRights.value;
  }

  private _VoteMultiplier: UInt8;
  /**
   * # Vote Multiplier #
   * Multiplies a vote by the specified integer. Where 1 token is equal to 1 vote with a 1 for vote multipler (normal), 1 token = 3 votes with a multiplier of 3, for example. If zero, then holders of this asset don't get any votes for their tokens.
   */
  public set VoteMultiplier(val: number) {
    this._VoteMultiplier = new UInt8(val);
    this._VoteMultiplier.validate();
  }
  public get VoteMultiplier() : number {
    return this._VoteMultiplier.value;
  }

  private _AdministrationProposal: BooleanType;
  /**
   * # Administration Proposal #
   * Set to true if the administration is permitted to make proposals outside of the smart contract scope.
   */
  public set AdministrationProposal(val: Boolean) {
    this._AdministrationProposal = new BooleanType(val);
    this._AdministrationProposal.validate();
  }
  public get AdministrationProposal() : Boolean {
    return this._AdministrationProposal.value;
  }

  private _HolderProposal: BooleanType;
  /**
   * # Holder Proposal #
   * Set to true if a holder is permitted to make proposals outside of the smart contract scope.
   */
  public set HolderProposal(val: Boolean) {
    this._HolderProposal = new BooleanType(val);
    this._HolderProposal.validate();
  }
  public get HolderProposal() : Boolean {
    return this._HolderProposal.value;
  }

  private _AssetModificationGovernance: UInt8;
  /**
   * # Asset Modification Governance #
   * Supported values: 1 - Contract-wide Asset Governance. 0 - Asset-wide Asset Governance.  If a referendum or initiative is used to propose a modification to a subfield controlled by the asset permissions, then the vote will either be a contract-wide vote (all assets vote on the referendum/initiative) or an asset-wide vote (only this asset votes on the referendum/initiative) depending on the value in this subfield.  The voting system specifies the voting rules.
   */
  public set AssetModificationGovernance(val: number) {
    this._AssetModificationGovernance = new UInt8(val);
    this._AssetModificationGovernance.validate();
  }
  public get AssetModificationGovernance() : number {
    return this._AssetModificationGovernance.value;
  }

  private _TokenQty: UInt64;
  /**
   * # Token Quantity #
   * The number of tokens to issue with this asset. Set to greater than zero for fungible tokens. If the value is 1 then it becomes a non-fungible token, where the contract would have many assets. Set to 0 to represent a placeholder asset, where tokens are to be issued later, or to represent a decomissioned asset where all tokens have been revoked.
   */
  public set TokenQty(val: number) {
    this._TokenQty = new UInt64(val);
    this._TokenQty.validate();
  }
  public get TokenQty() : number {
    return this._TokenQty.value;
  }

  private _AssetType: AssetType;
  /**
   * # Asset Type #
   * A code representing the type of asset and the structure of the payload.
   */
  public set AssetType(val: AssetType) {
    this._AssetType = val;
    this._AssetType.validate();
  }
  public get AssetType() : AssetType {
    // TODO: implement this unsupported scenario
  }

  private _AssetPayload: VarBin_small;
  /**
   * # Asset Payload #
   * A custom payload that contains meta data about this asset. Payload structure and length is dependent on the asset type chosen. See asset documentation for more details.
   */
  public set AssetPayload(val: Uint8Array) {
    this._AssetPayload = new VarBin_small(val);
    this._AssetPayload.validate();
  }
  public get AssetPayload() : Uint8Array {
    return this._AssetPayload.value;
  }
}

export default AssetDefinition;