
import BaseType, { BooleanType, UInt32 } from "./../../Base";
import Amendment from "./../../actions/types/Amendment";

/**
 * ### Contract Amendment ###
 * The administration can initiate an amendment to the contract establishment metadata. The ability to make an amendment to the contract is restricted by the Authorization Flag set on the current revision of Contract Formation action.
 */
class ContractAmendment extends BaseType {

  constructor() {
    super();
    super.requiredFieldNames = [  ];
    super.fieldNames = [ "ChangeAdministrationAddress", "ChangeOperatorAddress", "ContractRevision", "Amendments", "RefTxID" ];
  }

  public validate() {
    super.validateAllFields();
  }

  
  private _ChangeAdministrationAddress: BooleanType;
  /**
   * # Change Administration Address #
   * Used to change the administration address.  The new administration address must be in the input[1] position. A change of the administration or operator address requires both the operator and the administration address to be in the inputs (both signatures) of the Contract Amendment action.
   */
  public set ChangeAdministrationAddress(val: Boolean) {
    this._ChangeAdministrationAddress = new BooleanType(val);
    this._ChangeAdministrationAddress.validate();
  }
  public get ChangeAdministrationAddress() : Boolean {
    return this._ChangeAdministrationAddress.value;
  }

  private _ChangeOperatorAddress: BooleanType;
  /**
   * # Change Operator Address #
   * Used to change the smart contract operator address.  The new operator address must be in the input[1] position, unless the administration is being changed too, then it is in input[2]. A change of the administration or operator address requires both the operator and the administration address to be in the inputs (both signatures) of the Contract Amendment action.
   */
  public set ChangeOperatorAddress(val: Boolean) {
    this._ChangeOperatorAddress = new BooleanType(val);
    this._ChangeOperatorAddress.validate();
  }
  public get ChangeOperatorAddress() : Boolean {
    return this._ChangeOperatorAddress.value;
  }

  private _ContractRevision: UInt32;
  /**
   * # Contract Revision #
   * Counter 0 to (2^32)-1
   */
  public set ContractRevision(val: number) {
    this._ContractRevision = new UInt32(val);
    this._ContractRevision.validate();
  }
  public get ContractRevision() : number {
    return this._ContractRevision.value;
  }

  private _Amendments: Amendment[];
  /**
   * # Amendments #
   * A collection of modifications to perform on this contract.
   */
  public set Amendments(val: Amendment[]) {
    this._Amendments = val;
    this._Amendments.forEach(i => i.validate());
  }
  public get Amendments() : Amendment[] {
    return this._Amendments;
  }

  private _RefTxID: TxId;
  /**
   * # Ref Tx ID #
   * The Bitcoin transaction ID of the associated result action that permitted the modifications. See Governance for more details.
   */
  public set RefTxID(val: TxId) {
    this._RefTxID = val;
    this._RefTxID.validate();
  }
  public get RefTxID() : TxId {
    // TODO: implement this unsupported scenario
  }
}

export default ContractAmendment;