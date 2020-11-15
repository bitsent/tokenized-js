import Administrator from '././../messages/types/Administrator';
import ChannelParty from '././../messages/types/ChannelParty';
import Document from '././../messages/types/Document';
import Entity from '././../messages/types/Entity';
import IdentityOracleProof from '././../messages/types/IdentityOracleProof';
import Manager from '././../messages/types/Manager';
import OracleSignature from '././../messages/types/OracleSignature';
import Outpoint from '././../messages/types/Outpoint';
import OutputTag from '././../messages/types/OutputTag';
import PaymailProof from '././../messages/types/PaymailProof';
import Period from '././../messages/types/Period';
import TargetAddress from '././../messages/types/TargetAddress';
import PublicMessage from '././../messages/general/PublicMessage';
import PrivateMessage from '././../messages/general/PrivateMessage';
import RevertedTx from '././../messages/general/RevertedTx';
import Offer from '././../messages/commercial/Offer';
import SignatureRequest from '././../messages/commercial/SignatureRequest';
import SettlementRequest from '././../messages/commercial/SettlementRequest';
import OutputMetadata from '././../messages/commercial/OutputMetadata';
import InitiateRelationship from '././../messages/relationships/InitiateRelationship';
import PendingAcceptRelationship from '././../messages/relationships/PendingAcceptRelationship';
import AcceptRelationship from '././../messages/relationships/AcceptRelationship';
import RelationshipAmendment from '././../messages/relationships/RelationshipAmendment';
import InitiateThread from '././../messages/relationships/InitiateThread';
import Entities from './../resources/Entities';
import Roles from './../resources/Roles';
import Tags from './../resources/Tags';

export default {
  Administrator: Administrator,
  ChannelParty: ChannelParty,
  Document: Document,
  Entity: Entity,
  IdentityOracleProof: IdentityOracleProof,
  Manager: Manager,
  OracleSignature: OracleSignature,
  Outpoint: Outpoint,
  OutputTag: OutputTag,
  PaymailProof: PaymailProof,
  Period: Period,
  TargetAddress: TargetAddress,
  PublicMessage: PublicMessage,
  0002: PublicMessage,
  PrivateMessage: PrivateMessage,
  0003: PrivateMessage,
  RevertedTx: RevertedTx,
  0004: RevertedTx,
  Offer: Offer,
  1001: Offer,
  SignatureRequest: SignatureRequest,
  1002: SignatureRequest,
  SettlementRequest: SettlementRequest,
  1003: SettlementRequest,
  OutputMetadata: OutputMetadata,
  1004: OutputMetadata,
  InitiateRelationship: InitiateRelationship,
  2001: InitiateRelationship,
  PendingAcceptRelationship: PendingAcceptRelationship,
  2002: PendingAcceptRelationship,
  AcceptRelationship: AcceptRelationship,
  2003: AcceptRelationship,
  RelationshipAmendment: RelationshipAmendment,
  2004: RelationshipAmendment,
  InitiateThread: InitiateThread,
  2005: InitiateThread,
  Entities: Entities,
  Roles: Roles,
  Tags: Tags,
}