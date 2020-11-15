import Administrator from '././../messages/types/Administrator';
import AdminIdentityCertificate from '././../actions/types/AdminIdentityCertificate';
import Amendment from '././../actions/types/Amendment';
import AssetReceiver from '././../actions/types/AssetReceiver';
import AssetSettlement from '././../actions/types/AssetSettlement';
import AssetTransfer from '././../actions/types/AssetTransfer';
import Document from '././../messages/types/Document';
import Entity from '././../messages/types/Entity';
import Manager from '././../messages/types/Manager';
import Oracle from '././../actions/types/Oracle';
import QuantityIndex from '././../actions/types/QuantityIndex';
import ReferenceTransaction from '././../actions/types/ReferenceTransaction';
import Service from '././../actions/types/Service';
import TargetAddress from '././../messages/types/TargetAddress';
import VotingSystem from '././../actions/types/VotingSystem';
import ContractOffer from '././../actions/actions/ContractOffer';
import ContractFormation from '././../actions/actions/ContractFormation';
import ContractAmendment from '././../actions/actions/ContractAmendment';
import StaticContractFormation from '././../actions/actions/StaticContractFormation';
import ContractAddressChange from '././../actions/actions/ContractAddressChange';
import AssetDefinition from '././../actions/actions/AssetDefinition';
import AssetCreation from '././../actions/actions/AssetCreation';
import AssetModification from '././../actions/actions/AssetModification';
import Transfer from '././../actions/actions/Transfer';
import Settlement from '././../actions/actions/Settlement';
import Proposal from '././../actions/actions/Proposal';
import Vote from '././../actions/actions/Vote';
import BallotCast from '././../actions/actions/BallotCast';
import BallotCounted from '././../actions/actions/BallotCounted';
import Result from '././../actions/actions/Result';
import Order from '././../actions/actions/Order';
import Freeze from '././../actions/actions/Freeze';
import Thaw from '././../actions/actions/Thaw';
import Confiscation from '././../actions/actions/Confiscation';
import Reconciliation from '././../actions/actions/Reconciliation';
import Establishment from '././../actions/actions/Establishment';
import Addition from '././../actions/actions/Addition';
import Alteration from '././../actions/actions/Alteration';
import Removal from '././../actions/actions/Removal';
import Message from '././../actions/actions/Message';
import Rejection from '././../actions/actions/Rejection';
import Entities from './../resources/Entities';
import Polities from './../resources/Polities';
import Roles from './../resources/Roles';
import Rejections from './../resources/Rejections';
import Tags from './../resources/Tags';

export default {
  Administrator: Administrator,
  AdminIdentityCertificate: AdminIdentityCertificate,
  Amendment: Amendment,
  AssetReceiver: AssetReceiver,
  AssetSettlement: AssetSettlement,
  AssetTransfer: AssetTransfer,
  Document: Document,
  Entity: Entity,
  Manager: Manager,
  Oracle: Oracle,
  QuantityIndex: QuantityIndex,
  ReferenceTransaction: ReferenceTransaction,
  Service: Service,
  TargetAddress: TargetAddress,
  VotingSystem: VotingSystem,
  ContractOffer: ContractOffer,
  C1: ContractOffer,
  ContractFormation: ContractFormation,
  C2: ContractFormation,
  ContractAmendment: ContractAmendment,
  C3: ContractAmendment,
  StaticContractFormation: StaticContractFormation,
  C4: StaticContractFormation,
  ContractAddressChange: ContractAddressChange,
  C5: ContractAddressChange,
  AssetDefinition: AssetDefinition,
  A1: AssetDefinition,
  AssetCreation: AssetCreation,
  A2: AssetCreation,
  AssetModification: AssetModification,
  A3: AssetModification,
  Transfer: Transfer,
  T1: Transfer,
  Settlement: Settlement,
  T2: Settlement,
  Proposal: Proposal,
  G1: Proposal,
  Vote: Vote,
  G2: Vote,
  BallotCast: BallotCast,
  G3: BallotCast,
  BallotCounted: BallotCounted,
  G4: BallotCounted,
  Result: Result,
  G5: Result,
  Order: Order,
  E1: Order,
  Freeze: Freeze,
  E2: Freeze,
  Thaw: Thaw,
  E3: Thaw,
  Confiscation: Confiscation,
  E4: Confiscation,
  Reconciliation: Reconciliation,
  E5: Reconciliation,
  Establishment: Establishment,
  R1: Establishment,
  Addition: Addition,
  R2: Addition,
  Alteration: Alteration,
  R3: Alteration,
  Removal: Removal,
  R4: Removal,
  Message: Message,
  M1: Message,
  Rejection: Rejection,
  M2: Rejection,
  Entities: Entities,
  Polities: Polities,
  Roles: Roles,
  Rejections: Rejections,
  Tags: Tags,
}