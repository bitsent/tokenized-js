
import BaseType, { VarChar } from "./../../Base";


/**
 * ### Ballot Cast ###
 * Used by Token Owners to cast their ballot (vote) on proposals. 1 Vote per token unless a vote multiplier is specified in the relevant Asset Definition action.
 */
class BallotCast extends BaseType {

  constructor() {
    super();
    super.requiredFieldNames = [  ];
    super.fieldNames = [ "VoteTxId", "Vote" ];
  }

  public validate() {
    super.validateAllFields();
  }

  
  private _VoteTxId: TxId;
  /**
   * # Vote Tx ID #
   * Tx ID of the Vote the Ballot Cast is being made for.
   */
  public set VoteTxId(val: TxId) {
    this._VoteTxId = val;
    this._VoteTxId.validate();
  }
  public get VoteTxId() : TxId {
    // TODO: implement this unsupported scenario
  }

  private _Vote: VarChar;
  /**
   * # Vote #
   * Length 1-255 bytes. 0 is not valid. Max length is the VoteMax value from the Proposal action. Accept, Reject, Abstain, Spoiled, Multiple Choice, or Preference List. 15 options total. Order of preference. 1st position = 1st choice. 2nd position = 2nd choice, etc. A is always Accept and B is always reject in a Y/N votes.
   */
  public set Vote(val: string) {
    this._Vote = new VarChar(val);
    this._Vote.validate();
  }
  public get Vote() : string {
    return this._Vote.value;
  }
}

export default BallotCast;