
import BaseType, { VarChar, UInt8, VarBin_medium, FixedChar5, Timestamp, UInt64, VarBin_small, BooleanType, Address, UInt32 } from "./../../Base";
import Document from "./../../messages/types/Document";
import Entity from "./../../messages/types/Entity";
import VotingSystem from "./../../actions/types/VotingSystem";
import Oracle from "./../../actions/types/Oracle";
import Service from "./../../actions/types/Service";
import AdminIdentityCertificate from "./../../actions/types/AdminIdentityCertificate";

/**
 * # Contract Formation
 * This txn is created by the contract (smart contract/off-chain agent/token contract) upon receipt of a valid Contract Offer Action from the administration.  The smart contract will execute on a server controlled by the administration, or a smart contract operator on their behalf.
 */
class ContractFormation extends BaseType {

  constructor() {
    super();
    super.requiredFieldNames = [  ];
    super.fieldNames = [ "ContractName", "BodyOfAgreementType", "BodyOfAgreement", "SupportingDocs", "GoverningLaw", "Jurisdiction", "ContractExpiration", "ContractURI", "Issuer", "ContractFee", "VotingSystems", "ContractPermissions", "RestrictedQtyAssets", "AdministrationProposal", "HolderProposal", "Oracles", "MasterAddress", "ContractRevision", "Timestamp", "EntityContract", "OperatorEntityContract", "ContractType", "Services", "AdminIdentityCertificates", "AdminAddress", "OperatorAddress" ];
  }

  public validate() {
    super.validateAllFields();
  }

  
/** ## CONTRACT NAME */
  private _ContractName: VarChar;
  /**
   * ### Contract Name 
   * Can be any unique identifying string, including human readable names for branding/vanity purposes. Contract identifier (instance) is the bitcoin public key hash address. If the public address is lost, then the administration will have to reissue the entire contract, asset definition and tokens with the new public address. Smart contracts can be branded and specialized to suit any terms and conditions.
   */
  public set ContractName(val: string) {
    this._ContractName = new VarChar(val);
    this._ContractName.validate();
  }
  /**
   * ### Contract Name 
   * Can be any unique identifying string, including human readable names for branding/vanity purposes. Contract identifier (instance) is the bitcoin public key hash address. If the public address is lost, then the administration will have to reissue the entire contract, asset definition and tokens with the new public address. Smart contracts can be branded and specialized to suit any terms and conditions.
   */
  public get ContractName() : string {
    return this._ContractName.value;
  }

/** ## BODY OF AGREEMENT TYPE */
  private _BodyOfAgreementType: UInt8;
  /**
   * ### Body of Agreement Type 
   * 0 - No Body of agreement included, 1 - SHA-256 Hash, 2 - Tokenized Body of Agreement Format
   */
  public set BodyOfAgreementType(val: number) {
    this._BodyOfAgreementType = new UInt8(val);
    this._BodyOfAgreementType.validate();
  }
  /**
   * ### Body of Agreement Type 
   * 0 - No Body of agreement included, 1 - SHA-256 Hash, 2 - Tokenized Body of Agreement Format
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
   * Length 0-255 bytes.  0 is valid. Points to an information page that also has a copy of the Contract.  Anyone can go to the website to have a look at the price/token, information about the Issuer (company), information about the Asset, legal information, etc.  There will also be a way for Token Owners to vote on this page and contact details with the Issuer/tokenized companies. Could be a IPv6/IPv4, an IPFS address (hash) or txn-id for on chain information or even a public address (DNS).
   */
  public set ContractURI(val: string) {
    this._ContractURI = new VarChar(val);
    this._ContractURI.validate();
  }
  /**
   * ### Contract URI 
   * Length 0-255 bytes.  0 is valid. Points to an information page that also has a copy of the Contract.  Anyone can go to the website to have a look at the price/token, information about the Issuer (company), information about the Asset, legal information, etc.  There will also be a way for Token Owners to vote on this page and contact details with the Issuer/tokenized companies. Could be a IPv6/IPv4, an IPFS address (hash) or txn-id for on chain information or even a public address (DNS).
   */
  public get ContractURI() : string {
    return this._ContractURI.value;
  }

/** ## ISSUER */
  private _Issuer: Entity;
  /**
   * ### Issuer 
   * The issuer of this contract.
   */
  public set Issuer(val: Entity) {
    this._Issuer = val;
    this._Issuer.validate();
  }
  /**
   * ### Issuer 
   * The issuer of this contract.
   */
  public get Issuer() : Entity {
    return this._Issuer;
  }

/** ## CONTRACT FEE */
  private _ContractFee: UInt64;
  /**
   * ### Contract Fee 
   * Satoshis required to be paid to the contract for each asset action.
   */
  public set ContractFee(val: number) {
    this._ContractFee = new UInt64(val);
    this._ContractFee.validate();
  }
  /**
   * ### Contract Fee 
   * Satoshis required to be paid to the contract for each asset action.
   */
  public get ContractFee() : number {
    return this._ContractFee.value;
  }

/** ## VOTING SYSTEMS */
  private _VotingSystems: VotingSystem[];
  /**
   * ### Voting Systems 
   * A list voting systems.
   */
  public set VotingSystems(val: VotingSystem[]) {
    this._VotingSystems = val;
    this._VotingSystems.forEach(i => i.validate());
  }
  /**
   * ### Voting Systems 
   * A list voting systems.
   */
  public get VotingSystems() : VotingSystem[] {
    return this._VotingSystems;
  }

/** ## CONTRACT PERMISSIONS */
  private _ContractPermissions: VarBin_small;
  /**
   * ### Contract Permissions 
   * A set of permission objects containing switches and field references that define the permissions for modifying this contract. See the Permission documentation for more detail.
   */
  public set ContractPermissions(val: Uint8Array) {
    this._ContractPermissions = new VarBin_small(val);
    this._ContractPermissions.validate();
  }
  /**
   * ### Contract Permissions 
   * A set of permission objects containing switches and field references that define the permissions for modifying this contract. See the Permission documentation for more detail.
   */
  public get ContractPermissions() : Uint8Array {
    return this._ContractPermissions.value;
  }

/** ## RESTRICTED QTY OF ASSETS */
  private _RestrictedQtyAssets: UInt64;
  /**
   * ### Restricted Qty of Assets 
   * Number of Assets (non-fungible) permitted on this contract. 0 if unlimited which will display an infinity symbol in UI
   */
  public set RestrictedQtyAssets(val: number) {
    this._RestrictedQtyAssets = new UInt64(val);
    this._RestrictedQtyAssets.validate();
  }
  /**
   * ### Restricted Qty of Assets 
   * Number of Assets (non-fungible) permitted on this contract. 0 if unlimited which will display an infinity symbol in UI
   */
  public get RestrictedQtyAssets() : number {
    return this._RestrictedQtyAssets.value;
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

/** ## ORACLES */
  private _Oracles: Oracle[];
  /**
   * ### Oracles 
   * A list of oracles that provide approval for all token transfers for all assets under the contract.
   */
  public set Oracles(val: Oracle[]) {
    this._Oracles = val;
    this._Oracles.forEach(i => i.validate());
  }
  /**
   * ### Oracles 
   * A list of oracles that provide approval for all token transfers for all assets under the contract.
   */
  public get Oracles() : Oracle[] {
    return this._Oracles;
  }

/** ## MASTER ADDRESS */
  private _MasterAddress: Address;
  /**
   * ### Master Address 
   * The address of the contract's master key. This key has the ability to change the active contract address in case of a security failure with the active contract key.
   */
  public set MasterAddress(val: Uint8Array) {
    this._MasterAddress = new Address(val);
    this._MasterAddress.validate();
  }
  /**
   * ### Master Address 
   * The address of the contract's master key. This key has the ability to change the active contract address in case of a security failure with the active contract key.
   */
  public get MasterAddress() : Uint8Array {
    return this._MasterAddress.value;
  }

/** ## CONTRACT REVISION */
  private _ContractRevision: UInt32;
  /**
   * ### Contract Revision 
   * A counter for the number of times this contract has been revised using an amendment action.
   */
  public set ContractRevision(val: number) {
    this._ContractRevision = new UInt32(val);
    this._ContractRevision.validate();
  }
  /**
   * ### Contract Revision 
   * A counter for the number of times this contract has been revised using an amendment action.
   */
  public get ContractRevision() : number {
    return this._ContractRevision.value;
  }

/** ## TIMESTAMP */
  private _Timestamp: Timestamp;
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

/** ## ENTITY CONTRACT */
  private _EntityContract: Address;
  /**
   * ### Entity Contract 
   * The address of the contract's parent entity. This is optional for entity contracts, but required for asset and service contracts to identify the entity parent contract.
   */
  public set EntityContract(val: Uint8Array) {
    this._EntityContract = new Address(val);
    this._EntityContract.validate();
  }
  /**
   * ### Entity Contract 
   * The address of the contract's parent entity. This is optional for entity contracts, but required for asset and service contracts to identify the entity parent contract.
   */
  public get EntityContract() : Uint8Array {
    return this._EntityContract.value;
  }

/** ## OPERATOR ENTITY CONTRACT */
  private _OperatorEntityContract: Address;
  /**
   * ### Operator Entity Contract 
   * The address for the operator's entity contract.
   */
  public set OperatorEntityContract(val: Uint8Array) {
    this._OperatorEntityContract = new Address(val);
    this._OperatorEntityContract.validate();
  }
  /**
   * ### Operator Entity Contract 
   * The address for the operator's entity contract.
   */
  public get OperatorEntityContract() : Uint8Array {
    return this._OperatorEntityContract.value;
  }

/** ## CONTRACT TYPE */
  private _ContractType: UInt8;
  /**
   * ### Contract Type 
   * Describes the purpose of the contract. 0 - Entity, 1 - Asset
   */
  public set ContractType(val: number) {
    this._ContractType = new UInt8(val);
    this._ContractType.validate();
  }
  /**
   * ### Contract Type 
   * Describes the purpose of the contract. 0 - Entity, 1 - Asset
   */
  public get ContractType() : number {
    return this._ContractType.value;
  }

/** ## SERVICES */
  private _Services: Service[];
  /**
   * ### Services 
   * The services provided by the contract entity.
   */
  public set Services(val: Service[]) {
    this._Services = val;
    this._Services.forEach(i => i.validate());
  }
  /**
   * ### Services 
   * The services provided by the contract entity.
   */
  public get Services() : Service[] {
    return this._Services;
  }

/** ## ADMINISTRATOR IDENTITY CERTIFICATES */
  private _AdminIdentityCertificates: AdminIdentityCertificate[];
  /**
   * ### Administrator Identity Certificates 
   * Certificates providing proof of administrator/operator identities.
   */
  public set AdminIdentityCertificates(val: AdminIdentityCertificate[]) {
    this._AdminIdentityCertificates = val;
    this._AdminIdentityCertificates.forEach(i => i.validate());
  }
  /**
   * ### Administrator Identity Certificates 
   * Certificates providing proof of administrator/operator identities.
   */
  public get AdminIdentityCertificates() : AdminIdentityCertificate[] {
    return this._AdminIdentityCertificates;
  }

/** ## ADMINISTRATOR ADDRESS */
  private _AdminAddress: Address;
  /**
   * ### Administrator Address 
   * The address of the contract's administrator. This is not contained in the contract offer  payload, but determined by the inputs of the contract offer transaction and included here by  the smart contract agent as a convenience.
   */
  public set AdminAddress(val: Uint8Array) {
    this._AdminAddress = new Address(val);
    this._AdminAddress.validate();
  }
  /**
   * ### Administrator Address 
   * The address of the contract's administrator. This is not contained in the contract offer  payload, but determined by the inputs of the contract offer transaction and included here by  the smart contract agent as a convenience.
   */
  public get AdminAddress() : Uint8Array {
    return this._AdminAddress.value;
  }

/** ## OPERATOR ADDRESS */
  private _OperatorAddress: Address;
  /**
   * ### Operator Address 
   * The address of the contract's operator. This is not contained in the contract offer payload,  but determined by the inputs of the contract offer transaction and included here by the  smart contract agent as a convenience."
   */
  public set OperatorAddress(val: Uint8Array) {
    this._OperatorAddress = new Address(val);
    this._OperatorAddress.validate();
  }
  /**
   * ### Operator Address 
   * The address of the contract's operator. This is not contained in the contract offer payload,  but determined by the inputs of the contract offer transaction and included here by the  smart contract agent as a convenience."
   */
  public get OperatorAddress() : Uint8Array {
    return this._OperatorAddress.value;
  }
}

export default ContractFormation;