
import BaseType, { BooleanType, UInt32, TxId } from "./../../Base";
import Amendment from "./../../actions/types/Amendment";

/**
 * # Contract Amendment
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
  private _ChangeOperatorAddress: BooleanType;
  private _ContractRevision: UInt32;
  private _Amendments: Amendment[];
  private _RefTxID: TxId;

  
  /**
   * ### Change Administration Address 
   * Used to change the administration address.  The new administration address must be in the input[1] position. A change of the administration or operator address requires both the operator and the administration address to be in the inputs (both signatures) of the Contract Amendment action.
   */
  public set ChangeAdministrationAddress(val: Boolean) {
    this._ChangeAdministrationAddress = new BooleanType(val);
    this._ChangeAdministrationAddress.validate();
  }
  /**
   * ### Change Administration Address 
   * Used to change the administration address.  The new administration address must be in the input[1] position. A change of the administration or operator address requires both the operator and the administration address to be in the inputs (both signatures) of the Contract Amendment action.
   */
  public get ChangeAdministrationAddress() : Boolean {
    return this._ChangeAdministrationAddress.value;
  }

  /**
   * ### Change Operator Address 
   * Used to change the smart contract operator address.  The new operator address must be in the input[1] position, unless the administration is being changed too, then it is in input[2]. A change of the administration or operator address requires both the operator and the administration address to be in the inputs (both signatures) of the Contract Amendment action.
   */
  public set ChangeOperatorAddress(val: Boolean) {
    this._ChangeOperatorAddress = new BooleanType(val);
    this._ChangeOperatorAddress.validate();
  }
  /**
   * ### Change Operator Address 
   * Used to change the smart contract operator address.  The new operator address must be in the input[1] position, unless the administration is being changed too, then it is in input[2]. A change of the administration or operator address requires both the operator and the administration address to be in the inputs (both signatures) of the Contract Amendment action.
   */
  public get ChangeOperatorAddress() : Boolean {
    return this._ChangeOperatorAddress.value;
  }

  /**
   * ### Contract Revision 
   * Counter 0 to (2^32)-1
   */
  public set ContractRevision(val: number) {
    this._ContractRevision = new UInt32(val);
    this._ContractRevision.validate();
  }
  /**
   * ### Contract Revision 
   * Counter 0 to (2^32)-1
   */
  public get ContractRevision() : number {
    return this._ContractRevision.value;
  }

  /**
   * ### Amendments 
   * A collection of modifications to perform on this contract.
   */
  public set Amendments(val: Amendment[]) {
    this._Amendments = val;
    this._Amendments.forEach(i => i.validate());
  }
  /**
   * ### Amendments 
   * A collection of modifications to perform on this contract.
   */
  public get Amendments() : Amendment[] {
    return this._Amendments.map(i => i);
  }

  /**
   * ### Ref Tx ID 
   * The Bitcoin transaction ID of the associated result action that permitted the modifications. See Governance for more details.
   */
  public set RefTxID(val: Uint8Array) {
    this._RefTxID = new TxId(val);
    this._RefTxID.validate();
  }
  /**
   * ### Ref Tx ID 
   * The Bitcoin transaction ID of the associated result action that permitted the modifications. See Governance for more details.
   */
  public get RefTxID() : Uint8Array {
    return this._RefTxID.value;
  }
}

export default ContractAmendment;