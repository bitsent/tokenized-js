
import BaseType, { VarChar_tiny, EntityType, FixedChar20, VarChar, FixedChar5, FixedChar3, FixedChar12 } from "./../../Base";
import Administrator from "./../../messages/types/Administrator";
import Manager from "./../../messages/types/Manager";

/**
 * # Entity
 * Entity represents the details of a legal Entity, such as a public or private company, government agency, or and individual.
 */
class Entity extends BaseType {

  constructor() {
    super();
    super.requiredFieldNames = [  ];
    super.fieldNames = [ "Name", "Type", "LEI", "UnitNumber", "BuildingNumber", "Street", "SuburbCity", "TerritoryStateProvinceCode", "CountryCode", "PostalZIPCode", "EmailAddress", "PhoneNumber", "Administration", "Management", "DomainName", "PaymailHandle" ];
  }

  public validate() {
    super.validateAllFields();
  }

  
/** ## NAME */
  private _Name: VarChar_tiny;
  /**
   * ### Name 
   * Length 1-255 bytes (0 is not valid). Issuing entity (company, organization, individual).  Can be any unique identifying string, including human readable names for branding/vanity purposes. 
   */
  public set Name(val: string) {
    this._Name = new VarChar_tiny(val);
    this._Name.validate();
  }
  /**
   * ### Name 
   * Length 1-255 bytes (0 is not valid). Issuing entity (company, organization, individual).  Can be any unique identifying string, including human readable names for branding/vanity purposes. 
   */
  public get Name() : string {
    return this._Name.value;
  }

/** ## TYPE */
  private _Type: EntityType;
  /**
   * ### Type 
   * The type of entity. (i.e Public Company, Individual) (Specification/Resources).
   */
  public set Type(val: string) {
    this._Type = new EntityType(val);
    this._Type.validate();
  }
  /**
   * ### Type 
   * The type of entity. (i.e Public Company, Individual) (Specification/Resources).
   */
  public get Type() : string {
    return this._Type.value;
  }

/** ## LEGAL ENTITY IDENTIFIER */
  private _LEI: FixedChar20;
  /**
   * ### Legal Entity Identifier 
   * Null is valid. A Legal Entity Identifier (or LEI) is an international identifier made up of a 20-character identifier that identifies distinct legal entities that engage in financial transactions. It is defined by ISO 17442.[1] Natural persons are not required to have an LEI; they’re eligible to have one issued, however, but only if they act in an independent business capacity.[2] The LEI is a global standard, designed to be non-proprietary data that is freely accessible to all.[3] As of December 2018, over 1,300,000 legal entities from more than 200 countries have now been issued with LEIs.
   */
  public set LEI(val: string) {
    this._LEI = new FixedChar20(val);
    this._LEI.validate();
  }
  /**
   * ### Legal Entity Identifier 
   * Null is valid. A Legal Entity Identifier (or LEI) is an international identifier made up of a 20-character identifier that identifies distinct legal entities that engage in financial transactions. It is defined by ISO 17442.[1] Natural persons are not required to have an LEI; they’re eligible to have one issued, however, but only if they act in an independent business capacity.[2] The LEI is a global standard, designed to be non-proprietary data that is freely accessible to all.[3] As of December 2018, over 1,300,000 legal entities from more than 200 countries have now been issued with LEIs.
   */
  public get LEI() : string {
    return this._LEI.value;
  }

/** ## UNIT NUMBER */
  private _UnitNumber: VarChar;
  /**
   * ### Unit Number 
   * Issuer/Entity/Contracting Party X Address Details (eg. HQ)
   */
  public set UnitNumber(val: string) {
    this._UnitNumber = new VarChar(val);
    this._UnitNumber.validate();
  }
  /**
   * ### Unit Number 
   * Issuer/Entity/Contracting Party X Address Details (eg. HQ)
   */
  public get UnitNumber() : string {
    return this._UnitNumber.value;
  }

/** ## BUILDING NUMBER */
  private _BuildingNumber: VarChar_tiny;
  /**
   * ### Building Number 
   * 
   */
  public set BuildingNumber(val: string) {
    this._BuildingNumber = new VarChar_tiny(val);
    this._BuildingNumber.validate();
  }
  /**
   * ### Building Number 
   * 
   */
  public get BuildingNumber() : string {
    return this._BuildingNumber.value;
  }

/** ## STREET */
  private _Street: VarChar_tiny;
  /**
   * ### Street 
   * 
   */
  public set Street(val: string) {
    this._Street = new VarChar_tiny(val);
    this._Street.validate();
  }
  /**
   * ### Street 
   * 
   */
  public get Street() : string {
    return this._Street.value;
  }

/** ## SUBURB/CITY */
  private _SuburbCity: VarChar_tiny;
  /**
   * ### Suburb/City 
   * 
   */
  public set SuburbCity(val: string) {
    this._SuburbCity = new VarChar_tiny(val);
    this._SuburbCity.validate();
  }
  /**
   * ### Suburb/City 
   * 
   */
  public get SuburbCity() : string {
    return this._SuburbCity.value;
  }

/** ## TERRITORY/STATE/PROVINCE CODE */
  private _TerritoryStateProvinceCode: FixedChar5;
  /**
   * ### Territory/State/Province Code 
   * 
   */
  public set TerritoryStateProvinceCode(val: string) {
    this._TerritoryStateProvinceCode = new FixedChar5(val);
    this._TerritoryStateProvinceCode.validate();
  }
  /**
   * ### Territory/State/Province Code 
   * 
   */
  public get TerritoryStateProvinceCode() : string {
    return this._TerritoryStateProvinceCode.value;
  }

/** ## COUNTRY CODE */
  private _CountryCode: FixedChar3;
  /**
   * ### Country Code 
   * 
   */
  public set CountryCode(val: string) {
    this._CountryCode = new FixedChar3(val);
    this._CountryCode.validate();
  }
  /**
   * ### Country Code 
   * 
   */
  public get CountryCode() : string {
    return this._CountryCode.value;
  }

/** ## POSTAL/ZIP CODE */
  private _PostalZIPCode: FixedChar12;
  /**
   * ### Postal/ZIP Code 
   * 
   */
  public set PostalZIPCode(val: string) {
    this._PostalZIPCode = new FixedChar12(val);
    this._PostalZIPCode.validate();
  }
  /**
   * ### Postal/ZIP Code 
   * 
   */
  public get PostalZIPCode() : string {
    return this._PostalZIPCode.value;
  }

/** ## EMAIL ADDRESS */
  private _EmailAddress: VarChar_tiny;
  /**
   * ### Email Address 
   * Length 0-255 bytes. Address for text-based communication: eg. email address, Bitcoin address
   */
  public set EmailAddress(val: string) {
    this._EmailAddress = new VarChar_tiny(val);
    this._EmailAddress.validate();
  }
  /**
   * ### Email Address 
   * Length 0-255 bytes. Address for text-based communication: eg. email address, Bitcoin address
   */
  public get EmailAddress() : string {
    return this._EmailAddress.value;
  }

/** ## PHONE NUMBER */
  private _PhoneNumber: VarChar_tiny;
  /**
   * ### Phone Number 
   * Length 0-255 bytes. 0 is valid. Phone Number for Entity.
   */
  public set PhoneNumber(val: string) {
    this._PhoneNumber = new VarChar_tiny(val);
    this._PhoneNumber.validate();
  }
  /**
   * ### Phone Number 
   * Length 0-255 bytes. 0 is valid. Phone Number for Entity.
   */
  public get PhoneNumber() : string {
    return this._PhoneNumber.value;
  }

/** ## ADMINISTRATION */
  private _Administration: Administrator[];
  /**
   * ### Administration 
   * A list of people that are in Administrative Roles for the Entity.  eg. Chair, Director, Managing Partner, etc.
   */
  public set Administration(val: Administrator[]) {
    this._Administration = val;
    this._Administration.forEach(i => i.validate());
  }
  /**
   * ### Administration 
   * A list of people that are in Administrative Roles for the Entity.  eg. Chair, Director, Managing Partner, etc.
   */
  public get Administration() : Administrator[] {
    return this._Administration;
  }

/** ## MANAGEMENT */
  private _Management: Manager[];
  /**
   * ### Management 
   * A list of people in Management Roles for the Entity. e.g CEO, COO, CTO, CFO, Secretary, Executive, etc.
   */
  public set Management(val: Manager[]) {
    this._Management = val;
    this._Management.forEach(i => i.validate());
  }
  /**
   * ### Management 
   * A list of people in Management Roles for the Entity. e.g CEO, COO, CTO, CFO, Secretary, Executive, etc.
   */
  public get Management() : Manager[] {
    return this._Management;
  }

/** ## DOMAIN NAME */
  private _DomainName: VarChar_tiny;
  /**
   * ### Domain Name 
   * Domain name owned by this entity. Length 0-255 bytes. 0 is valid.
   */
  public set DomainName(val: string) {
    this._DomainName = new VarChar_tiny(val);
    this._DomainName.validate();
  }
  /**
   * ### Domain Name 
   * Domain name owned by this entity. Length 0-255 bytes. 0 is valid.
   */
  public get DomainName() : string {
    return this._DomainName.value;
  }

/** ## PAYMAIL HANDLE */
  private _PaymailHandle: VarChar_tiny;
  /**
   * ### Paymail Handle 
   * Length 0-255 bytes. Handle containing an alias and domain name performing queries defined in the Paymail protocol.
   */
  public set PaymailHandle(val: string) {
    this._PaymailHandle = new VarChar_tiny(val);
    this._PaymailHandle.validate();
  }
  /**
   * ### Paymail Handle 
   * Length 0-255 bytes. Handle containing an alias and domain name performing queries defined in the Paymail protocol.
   */
  public get PaymailHandle() : string {
    return this._PaymailHandle.value;
  }
}

export default Entity;