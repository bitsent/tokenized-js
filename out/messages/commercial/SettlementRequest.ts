
import BaseType, { Timestamp, TxId, VarBin_medium } from "./../../Base";
import TargetAddress from "./../../messages/types/TargetAddress";

/**
 * # Settlement Request
 * A message that contains a multi-contract settlement that needs settlement data added by another contract. Sent to another contract to request data be added.
 */
class SettlementRequest extends BaseType {

  constructor() {
    super();
    super.requiredFieldNames = [  ];
    super.fieldNames = [ "Timestamp", "TransferTxId", "ContractFees", "Settlement" ];
  }

  public validate() {
    super.validateAllFields();
  }

  private _Timestamp: Timestamp;
  private _TransferTxId: TxId;
  private _ContractFees: TargetAddress[];
  private _Settlement: VarBin_medium;

  
  /**
   * ### Timestamp 
   * Timestamp in nanoseconds for when the message sender creates the transaction.
   */
  public set Timestamp(val: number) {
    this._Timestamp = new Timestamp(val);
    this._Timestamp.validate();
  }
  /**
   * ### Timestamp 
   * Timestamp in nanoseconds for when the message sender creates the transaction.
   */
  public get Timestamp() : number {
    return this._Timestamp.value;
  }

  /**
   * ### Transfer Tx Id 
   * Tx Id of the transfer request transaction that triggered this message.
   */
  public set TransferTxId(val: Uint8Array) {
    this._TransferTxId = new TxId(val);
    this._TransferTxId.validate();
  }
  /**
   * ### Transfer Tx Id 
   * Tx Id of the transfer request transaction that triggered this message.
   */
  public get TransferTxId() : Uint8Array {
    return this._TransferTxId.value;
  }

  /**
   * ### Contract Fees 
   * Contract fees (in bitcoin) and addresses(PKHs) where fees should be paid. Added by each contract as settlement data is added.
   */
  public set ContractFees(val: TargetAddress[]) {
    this._ContractFees = val;
    this._ContractFees.forEach(i => i.validate());
  }
  /**
   * ### Contract Fees 
   * Contract fees (in bitcoin) and addresses(PKHs) where fees should be paid. Added by each contract as settlement data is added.
   */
  public get ContractFees() : TargetAddress[] {
    return this._ContractFees.map(i => i);
  }

  /**
   * ### Settlement 
   * Serialized settlement OP_RETURN that needs data added by another contract.
   */
  public set Settlement(val: Uint8Array) {
    this._Settlement = new VarBin_medium(val);
    this._Settlement.validate();
  }
  /**
   * ### Settlement 
   * Serialized settlement OP_RETURN that needs data added by another contract.
   */
  public get Settlement() : Uint8Array {
    return this._Settlement.value;
  }
}

export default SettlementRequest;