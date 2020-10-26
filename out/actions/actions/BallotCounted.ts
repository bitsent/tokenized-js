
import BaseType, { TxId, VarChar, UInt64, Timestamp } from "./../../Base";


/**
 * # Ballot Counted
 * The smart contract will respond to a Ballot Cast action with a Ballot Counted action if the Ballot Cast is valid. If the Ballot Cast is not valid, then the smart contract will respond with a Rejection Action.
 */
class BallotCounted extends BaseType {

  constructor() {
    super();
    super.requiredFieldNames = [  ];
    super.fieldNames = [ "VoteTxId", "Vote", "Quantity", "Timestamp" ];
  }

  public validate() {
    super.validateAllFields();
  }

  
/** ## VOTE TX ID */
  private _VoteTxId: TxId;
  /**
   * ### Vote Tx ID 
   * Tx ID of the Vote the Ballot Cast is being made for.
   */
  public set VoteTxId(val: Uint8Array) {
    this._VoteTxId = new TxId(val);
    this._VoteTxId.validate();
  }
  /**
   * ### Vote Tx ID 
   * Tx ID of the Vote the Ballot Cast is being made for.
   */
  public get VoteTxId() : Uint8Array {
    return this._VoteTxId.value;
  }

/** ## VOTE */
  private _Vote: VarChar;
  /**
   * ### Vote 
   * Length 1-255 bytes. 0 is not valid. Max length is the VoteMax value from the Proposal action. Accept, Reject, Abstain, Spoiled, Multiple Choice, or Preference List. 15 options total. Order of preference. 1st position = 1st choice. 2nd position = 2nd choice, etc. A is always Accept and B is always reject in a Y/N votes.
   */
  public set Vote(val: string) {
    this._Vote = new VarChar(val);
    this._Vote.validate();
  }
  /**
   * ### Vote 
   * Length 1-255 bytes. 0 is not valid. Max length is the VoteMax value from the Proposal action. Accept, Reject, Abstain, Spoiled, Multiple Choice, or Preference List. 15 options total. Order of preference. 1st position = 1st choice. 2nd position = 2nd choice, etc. A is always Accept and B is always reject in a Y/N votes.
   */
  public get Vote() : string {
    return this._Vote.value;
  }

/** ## QUANTITY */
  private _Quantity: UInt64;
  /**
   * ### Quantity 
   * Number of votes counted for this ballot. Factors in vote multipliers if there are any allowed, otherwise it is just quantity of tokens held.
   */
  public set Quantity(val: number) {
    this._Quantity = new UInt64(val);
    this._Quantity.validate();
  }
  /**
   * ### Quantity 
   * Number of votes counted for this ballot. Factors in vote multipliers if there are any allowed, otherwise it is just quantity of tokens held.
   */
  public get Quantity() : number {
    return this._Quantity.value;
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
}

export default BallotCounted;