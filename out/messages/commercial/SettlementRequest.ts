
import BaseType, { VarBin_medium } from "./../../Base";
import TargetAddress from "./../../messages/types/TargetAddress";

/**
 * ### Settlement Request ###
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
  /**
   * # Timestamp #
   * Timestamp in nanoseconds for when the message sender creates the transaction.
   */
  public set Timestamp(val: Timestamp) {
    this._Timestamp = val;
    this._Timestamp.validate();
  }
  public get Timestamp() : Timestamp {
    // TODO: implement this unsupported scenario
  }

  private _TransferTxId: TxId;
  /**
   * # Transfer Tx Id #
   * Tx Id of the transfer request transaction that triggered this message.
   */
  public set TransferTxId(val: TxId) {
    this._TransferTxId = val;
    this._TransferTxId.validate();
  }
  public get TransferTxId() : TxId {
    // TODO: implement this unsupported scenario
  }

  private _ContractFees: TargetAddress[];
  /**
   * # Contract Fees #
   * Contract fees (in bitcoin) and addresses(PKHs) where fees should be paid. Added by each contract as settlement data is added.
   */
  public set ContractFees(val: TargetAddress[]) {
    this._ContractFees = val;
    this._ContractFees.forEach(i => i.validate());
  }
  public get ContractFees() : TargetAddress[] {
    return this._ContractFees;
  }

  private _Settlement: VarBin_medium;
  /**
   * # Settlement #
   * Serialized settlement OP_RETURN that needs data added by another contract.
   */
  public set Settlement(val: Uint8Array) {
    this._Settlement = new VarBin_medium(val);
    this._Settlement.validate();
  }
  public get Settlement() : Uint8Array {
    return this._Settlement.value;
  }
}

export default SettlementRequest;