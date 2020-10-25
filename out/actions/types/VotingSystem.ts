
import BaseType, { VarChar, FixedChar1, UInt8, BooleanType, UInt64 } from "./../../Base";


/**
 * ### Voting System ###
 * A VotingSystem defines all details of a Voting System.
 */
class VotingSystem extends BaseType {

  constructor() {
    super();
    super.requiredFieldNames = [  ];
    super.fieldNames = [ "Name", "VoteType", "TallyLogic", "ThresholdPercentage", "VoteMultiplierPermitted", "HolderProposalFee" ];
  }

  public validate() {
    super.validateAllFields();
  }

  
  private _Name: VarChar;
  /**
   * # Voting System Name #
   * eg. Special Resolutions, Ordinary Resolutions, Fundamental Matters, General Matters, Directors' Vote, Poll, etc.
   */
  public set Name(val: string) {
    this._Name = new VarChar(val);
    this._Name.validate();
  }
  public get Name() : string {
    return this._Name.value;
  }

  private _VoteType: FixedChar1;
  /**
   * # Vote Type #
   * R - Relative Threshold, A - Absolute Threshold, P - Plurality,  (Relative Threshold means the number of counted votes must exceed the threshold % of total ballots cast.  Abstentations/spoiled votes do not detract from the liklihood of a vote passing as they are not included in the denominator.  Absolute Threshold requires the number of ballots counted to exceed the threshold value when compared to the total outstanding tokens.  Abstentations/spoiled votes detract from the liklihood of the vote passing.  For example, in an absolute threshold vote, if the threshold was 50% and 51% of the total outstanding tokens did not vote, then the vote cannot pass.  50% of all tokens would have had to vote for one vote option for the vote to be successful. Plurality means the most favoured option is selected, regardless of the number of votes cast or the percentage relative to other choices.
   */
  public set VoteType(val: string) {
    this._VoteType = new FixedChar1(val);
    this._VoteType.validate();
  }
  public get VoteType() : string {
    return this._VoteType.value;
  }

  private _TallyLogic: UInt8;
  /**
   * # Tally Logic #
   * 0 - Standard Scoring (+1 * # of tokens owned), 1 - Weighted Scoring (1st choice * Vote Max * # of tokens held, 2nd choice * Vote Max-1 * # of tokens held,..etc.) 
   */
  public set TallyLogic(val: number) {
    this._TallyLogic = new UInt8(val);
    this._TallyLogic.validate();
  }
  public get TallyLogic() : number {
    return this._TallyLogic.value;
  }

  private _ThresholdPercentage: UInt8;
  /**
   * # Threshold Percentage for the Voting System #
   * This field is ignored when VoteType is P (Plurality). Otherwise it is the percentage of ballots required for a proposal to pass. Valid values are greater than 0 and less than 100. 75 means 75% and greater.  Only applicable to Relative and Absolute Threshold vote methods.  The Plurality vote method requires no threshold value (NULL), as the successful vote option is simply selected on the basis of highest ballots cast for it.
   */
  public set ThresholdPercentage(val: number) {
    this._ThresholdPercentage = new UInt8(val);
    this._ThresholdPercentage.validate();
  }
  public get ThresholdPercentage() : number {
    return this._ThresholdPercentage.value;
  }

  private _VoteMultiplierPermitted: BooleanType;
  /**
   * # VoteMultiplierPermitted #
   * Where an asset has a vote multiplier, true must be set here for the vote multiplier to count, otherwise votes are simply treated as 1x per token.
   */
  public set VoteMultiplierPermitted(val: Boolean) {
    this._VoteMultiplierPermitted = new BooleanType(val);
    this._VoteMultiplierPermitted.validate();
  }
  public get VoteMultiplierPermitted() : Boolean {
    return this._VoteMultiplierPermitted.value;
  }

  private _HolderProposalFee: UInt64;
  /**
   * # Holder Proposal Fee for the Voting System #
   * Token Owners must pay the fee amount to broadcast a valid Proposal.  If the Proposal action is valid, the smart contract will start a vote. 0 is valid.
   */
  public set HolderProposalFee(val: number) {
    this._HolderProposalFee = new UInt64(val);
    this._HolderProposalFee.validate();
  }
  public get HolderProposalFee() : number {
    return this._HolderProposalFee.value;
  }
}

export default VotingSystem;