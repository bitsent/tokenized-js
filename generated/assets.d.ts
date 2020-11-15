import * as Long from "long";

import * as $protobuf from "protobufjs";
/** Namespace assets. */
export namespace assets {
  /** Properties of a Membership. */
  interface IMembership {
    /** Membership AgeRestriction */
    AgeRestriction?: assets.IAgeRestrictionField | null;

    /** Membership ValidFrom */
    ValidFrom?: number | Long | null;

    /** Membership ExpirationTimestamp */
    ExpirationTimestamp?: number | Long | null;

    /** Membership ID */
    ID?: string | null;

    /** Membership MembershipClass */
    MembershipClass?: string | null;

    /** Membership RoleType */
    RoleType?: string | null;

    /** Membership MembershipType */
    MembershipType?: string | null;

    /** Membership Description */
    Description?: string | null;
  }

  /** Represents a Membership. */
  class Membership implements IMembership {
    /**
     * Constructs a new Membership.
     * @param [properties] Properties to set
     */
    constructor(properties?: assets.IMembership);

    /** Membership AgeRestriction. */
    public AgeRestriction?: assets.IAgeRestrictionField | null;

    /** Membership ValidFrom. */
    public ValidFrom: number | Long;

    /** Membership ExpirationTimestamp. */
    public ExpirationTimestamp: number | Long;

    /** Membership ID. */
    public ID: string;

    /** Membership MembershipClass. */
    public MembershipClass: string;

    /** Membership RoleType. */
    public RoleType: string;

    /** Membership MembershipType. */
    public MembershipType: string;

    /** Membership Description. */
    public Description: string;

    /**
     * Creates a new Membership instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Membership instance
     */
    public static create(properties?: assets.IMembership): assets.Membership;

    /**
     * Encodes the specified Membership message. Does not implicitly {@link assets.Membership.verify|verify} messages.
     * @param message Membership message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(
      message: assets.IMembership,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Encodes the specified Membership message, length delimited. Does not implicitly {@link assets.Membership.verify|verify} messages.
     * @param message Membership message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(
      message: assets.IMembership,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Decodes a Membership message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Membership
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number
    ): assets.Membership;

    /**
     * Decodes a Membership message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns Membership
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array
    ): assets.Membership;

    /**
     * Verifies a Membership message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): string | null;

    /**
     * Creates a Membership message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Membership
     */
    public static fromObject(object: { [k: string]: any }): assets.Membership;

    /**
     * Creates a plain object from a Membership message. Also converts values to other types if specified.
     * @param message Membership
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(
      message: assets.Membership,
      options?: $protobuf.IConversionOptions
    ): { [k: string]: any };

    /**
     * Converts this Membership to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
  }

  /** Properties of a Currency. */
  interface ICurrency {
    /** Currency CurrencyCode */
    CurrencyCode?: string | null;

    /** Currency MonetaryAuthority */
    MonetaryAuthority?: string | null;

    /** Currency Precision */
    Precision?: number | Long | null;
  }

  /** Represents a Currency. */
  class Currency implements ICurrency {
    /**
     * Constructs a new Currency.
     * @param [properties] Properties to set
     */
    constructor(properties?: assets.ICurrency);

    /** Currency CurrencyCode. */
    public CurrencyCode: string;

    /** Currency MonetaryAuthority. */
    public MonetaryAuthority: string;

    /** Currency Precision. */
    public Precision: number | Long;

    /**
     * Creates a new Currency instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Currency instance
     */
    public static create(properties?: assets.ICurrency): assets.Currency;

    /**
     * Encodes the specified Currency message. Does not implicitly {@link assets.Currency.verify|verify} messages.
     * @param message Currency message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(
      message: assets.ICurrency,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Encodes the specified Currency message, length delimited. Does not implicitly {@link assets.Currency.verify|verify} messages.
     * @param message Currency message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(
      message: assets.ICurrency,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Decodes a Currency message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Currency
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number
    ): assets.Currency;

    /**
     * Decodes a Currency message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns Currency
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array
    ): assets.Currency;

    /**
     * Verifies a Currency message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): string | null;

    /**
     * Creates a Currency message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Currency
     */
    public static fromObject(object: { [k: string]: any }): assets.Currency;

    /**
     * Creates a plain object from a Currency message. Also converts values to other types if specified.
     * @param message Currency
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(
      message: assets.Currency,
      options?: $protobuf.IConversionOptions
    ): { [k: string]: any };

    /**
     * Converts this Currency to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
  }

  /** Properties of a ShareCommon. */
  interface IShareCommon {
    /** ShareCommon Ticker */
    Ticker?: string | null;

    /** ShareCommon ISIN */
    ISIN?: string | null;

    /** ShareCommon Description */
    Description?: string | null;
  }

  /** Represents a ShareCommon. */
  class ShareCommon implements IShareCommon {
    /**
     * Constructs a new ShareCommon.
     * @param [properties] Properties to set
     */
    constructor(properties?: assets.IShareCommon);

    /** ShareCommon Ticker. */
    public Ticker: string;

    /** ShareCommon ISIN. */
    public ISIN: string;

    /** ShareCommon Description. */
    public Description: string;

    /**
     * Creates a new ShareCommon instance using the specified properties.
     * @param [properties] Properties to set
     * @returns ShareCommon instance
     */
    public static create(properties?: assets.IShareCommon): assets.ShareCommon;

    /**
     * Encodes the specified ShareCommon message. Does not implicitly {@link assets.ShareCommon.verify|verify} messages.
     * @param message ShareCommon message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(
      message: assets.IShareCommon,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Encodes the specified ShareCommon message, length delimited. Does not implicitly {@link assets.ShareCommon.verify|verify} messages.
     * @param message ShareCommon message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(
      message: assets.IShareCommon,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Decodes a ShareCommon message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns ShareCommon
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number
    ): assets.ShareCommon;

    /**
     * Decodes a ShareCommon message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns ShareCommon
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array
    ): assets.ShareCommon;

    /**
     * Verifies a ShareCommon message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): string | null;

    /**
     * Creates a ShareCommon message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns ShareCommon
     */
    public static fromObject(object: { [k: string]: any }): assets.ShareCommon;

    /**
     * Creates a plain object from a ShareCommon message. Also converts values to other types if specified.
     * @param message ShareCommon
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(
      message: assets.ShareCommon,
      options?: $protobuf.IConversionOptions
    ): { [k: string]: any };

    /**
     * Converts this ShareCommon to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
  }

  /** Properties of a Coupon. */
  interface ICoupon {
    /** Coupon RedeemingEntity */
    RedeemingEntity?: string | null;

    /** Coupon IssueDate */
    IssueDate?: number | Long | null;

    /** Coupon ExpiryDate */
    ExpiryDate?: number | Long | null;

    /** Coupon Value */
    Value?: number | Long | null;

    /** Coupon Currency */
    Currency?: string | null;

    /** Coupon Description */
    Description?: string | null;

    /** Coupon Precision */
    Precision?: number | Long | null;
  }

  /** Represents a Coupon. */
  class Coupon implements ICoupon {
    /**
     * Constructs a new Coupon.
     * @param [properties] Properties to set
     */
    constructor(properties?: assets.ICoupon);

    /** Coupon RedeemingEntity. */
    public RedeemingEntity: string;

    /** Coupon IssueDate. */
    public IssueDate: number | Long;

    /** Coupon ExpiryDate. */
    public ExpiryDate: number | Long;

    /** Coupon Value. */
    public Value: number | Long;

    /** Coupon Currency. */
    public Currency: string;

    /** Coupon Description. */
    public Description: string;

    /** Coupon Precision. */
    public Precision: number | Long;

    /**
     * Creates a new Coupon instance using the specified properties.
     * @param [properties] Properties to set
     * @returns Coupon instance
     */
    public static create(properties?: assets.ICoupon): assets.Coupon;

    /**
     * Encodes the specified Coupon message. Does not implicitly {@link assets.Coupon.verify|verify} messages.
     * @param message Coupon message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(
      message: assets.ICoupon,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Encodes the specified Coupon message, length delimited. Does not implicitly {@link assets.Coupon.verify|verify} messages.
     * @param message Coupon message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(
      message: assets.ICoupon,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Decodes a Coupon message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns Coupon
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number
    ): assets.Coupon;

    /**
     * Decodes a Coupon message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns Coupon
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array
    ): assets.Coupon;

    /**
     * Verifies a Coupon message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): string | null;

    /**
     * Creates a Coupon message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns Coupon
     */
    public static fromObject(object: { [k: string]: any }): assets.Coupon;

    /**
     * Creates a plain object from a Coupon message. Also converts values to other types if specified.
     * @param message Coupon
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(
      message: assets.Coupon,
      options?: $protobuf.IConversionOptions
    ): { [k: string]: any };

    /**
     * Converts this Coupon to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
  }

  /** Properties of a LoyaltyPoints. */
  interface ILoyaltyPoints {
    /** LoyaltyPoints AgeRestriction */
    AgeRestriction?: assets.IAgeRestrictionField | null;

    /** LoyaltyPoints OfferName */
    OfferName?: string | null;

    /** LoyaltyPoints ValidFrom */
    ValidFrom?: number | Long | null;

    /** LoyaltyPoints ExpirationTimestamp */
    ExpirationTimestamp?: number | Long | null;

    /** LoyaltyPoints Description */
    Description?: string | null;
  }

  /** Represents a LoyaltyPoints. */
  class LoyaltyPoints implements ILoyaltyPoints {
    /**
     * Constructs a new LoyaltyPoints.
     * @param [properties] Properties to set
     */
    constructor(properties?: assets.ILoyaltyPoints);

    /** LoyaltyPoints AgeRestriction. */
    public AgeRestriction?: assets.IAgeRestrictionField | null;

    /** LoyaltyPoints OfferName. */
    public OfferName: string;

    /** LoyaltyPoints ValidFrom. */
    public ValidFrom: number | Long;

    /** LoyaltyPoints ExpirationTimestamp. */
    public ExpirationTimestamp: number | Long;

    /** LoyaltyPoints Description. */
    public Description: string;

    /**
     * Creates a new LoyaltyPoints instance using the specified properties.
     * @param [properties] Properties to set
     * @returns LoyaltyPoints instance
     */
    public static create(
      properties?: assets.ILoyaltyPoints
    ): assets.LoyaltyPoints;

    /**
     * Encodes the specified LoyaltyPoints message. Does not implicitly {@link assets.LoyaltyPoints.verify|verify} messages.
     * @param message LoyaltyPoints message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(
      message: assets.ILoyaltyPoints,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Encodes the specified LoyaltyPoints message, length delimited. Does not implicitly {@link assets.LoyaltyPoints.verify|verify} messages.
     * @param message LoyaltyPoints message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(
      message: assets.ILoyaltyPoints,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Decodes a LoyaltyPoints message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns LoyaltyPoints
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number
    ): assets.LoyaltyPoints;

    /**
     * Decodes a LoyaltyPoints message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns LoyaltyPoints
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array
    ): assets.LoyaltyPoints;

    /**
     * Verifies a LoyaltyPoints message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): string | null;

    /**
     * Creates a LoyaltyPoints message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns LoyaltyPoints
     */
    public static fromObject(object: {
      [k: string]: any;
    }): assets.LoyaltyPoints;

    /**
     * Creates a plain object from a LoyaltyPoints message. Also converts values to other types if specified.
     * @param message LoyaltyPoints
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(
      message: assets.LoyaltyPoints,
      options?: $protobuf.IConversionOptions
    ): { [k: string]: any };

    /**
     * Converts this LoyaltyPoints to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
  }

  /** Properties of a TicketAdmission. */
  interface ITicketAdmission {
    /** TicketAdmission AgeRestriction */
    AgeRestriction?: assets.IAgeRestrictionField | null;

    /** TicketAdmission AdmissionType */
    AdmissionType?: string | null;

    /** TicketAdmission Venue */
    Venue?: string | null;

    /** TicketAdmission Class */
    Class?: string | null;

    /** TicketAdmission Area */
    Area?: string | null;

    /** TicketAdmission Seat */
    Seat?: string | null;

    /** TicketAdmission StartTimeDate */
    StartTimeDate?: number | Long | null;

    /** TicketAdmission ValidFrom */
    ValidFrom?: number | Long | null;

    /** TicketAdmission ExpirationTimestamp */
    ExpirationTimestamp?: number | Long | null;

    /** TicketAdmission Description */
    Description?: string | null;
  }

  /** Represents a TicketAdmission. */
  class TicketAdmission implements ITicketAdmission {
    /**
     * Constructs a new TicketAdmission.
     * @param [properties] Properties to set
     */
    constructor(properties?: assets.ITicketAdmission);

    /** TicketAdmission AgeRestriction. */
    public AgeRestriction?: assets.IAgeRestrictionField | null;

    /** TicketAdmission AdmissionType. */
    public AdmissionType: string;

    /** TicketAdmission Venue. */
    public Venue: string;

    /** TicketAdmission Class. */
    public Class: string;

    /** TicketAdmission Area. */
    public Area: string;

    /** TicketAdmission Seat. */
    public Seat: string;

    /** TicketAdmission StartTimeDate. */
    public StartTimeDate: number | Long;

    /** TicketAdmission ValidFrom. */
    public ValidFrom: number | Long;

    /** TicketAdmission ExpirationTimestamp. */
    public ExpirationTimestamp: number | Long;

    /** TicketAdmission Description. */
    public Description: string;

    /**
     * Creates a new TicketAdmission instance using the specified properties.
     * @param [properties] Properties to set
     * @returns TicketAdmission instance
     */
    public static create(
      properties?: assets.ITicketAdmission
    ): assets.TicketAdmission;

    /**
     * Encodes the specified TicketAdmission message. Does not implicitly {@link assets.TicketAdmission.verify|verify} messages.
     * @param message TicketAdmission message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(
      message: assets.ITicketAdmission,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Encodes the specified TicketAdmission message, length delimited. Does not implicitly {@link assets.TicketAdmission.verify|verify} messages.
     * @param message TicketAdmission message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(
      message: assets.ITicketAdmission,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Decodes a TicketAdmission message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns TicketAdmission
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number
    ): assets.TicketAdmission;

    /**
     * Decodes a TicketAdmission message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns TicketAdmission
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array
    ): assets.TicketAdmission;

    /**
     * Verifies a TicketAdmission message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): string | null;

    /**
     * Creates a TicketAdmission message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns TicketAdmission
     */
    public static fromObject(object: {
      [k: string]: any;
    }): assets.TicketAdmission;

    /**
     * Creates a plain object from a TicketAdmission message. Also converts values to other types if specified.
     * @param message TicketAdmission
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(
      message: assets.TicketAdmission,
      options?: $protobuf.IConversionOptions
    ): { [k: string]: any };

    /**
     * Converts this TicketAdmission to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
  }

  /** Properties of a CasinoChip. */
  interface ICasinoChip {
    /** CasinoChip CurrencyCode */
    CurrencyCode?: string | null;

    /** CasinoChip UseType */
    UseType?: string | null;

    /** CasinoChip AgeRestriction */
    AgeRestriction?: assets.IAgeRestrictionField | null;

    /** CasinoChip ValidFrom */
    ValidFrom?: number | Long | null;

    /** CasinoChip ExpirationTimestamp */
    ExpirationTimestamp?: number | Long | null;

    /** CasinoChip Precision */
    Precision?: number | Long | null;
  }

  /** Represents a CasinoChip. */
  class CasinoChip implements ICasinoChip {
    /**
     * Constructs a new CasinoChip.
     * @param [properties] Properties to set
     */
    constructor(properties?: assets.ICasinoChip);

    /** CasinoChip CurrencyCode. */
    public CurrencyCode: string;

    /** CasinoChip UseType. */
    public UseType: string;

    /** CasinoChip AgeRestriction. */
    public AgeRestriction?: assets.IAgeRestrictionField | null;

    /** CasinoChip ValidFrom. */
    public ValidFrom: number | Long;

    /** CasinoChip ExpirationTimestamp. */
    public ExpirationTimestamp: number | Long;

    /** CasinoChip Precision. */
    public Precision: number | Long;

    /**
     * Creates a new CasinoChip instance using the specified properties.
     * @param [properties] Properties to set
     * @returns CasinoChip instance
     */
    public static create(properties?: assets.ICasinoChip): assets.CasinoChip;

    /**
     * Encodes the specified CasinoChip message. Does not implicitly {@link assets.CasinoChip.verify|verify} messages.
     * @param message CasinoChip message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(
      message: assets.ICasinoChip,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Encodes the specified CasinoChip message, length delimited. Does not implicitly {@link assets.CasinoChip.verify|verify} messages.
     * @param message CasinoChip message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(
      message: assets.ICasinoChip,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Decodes a CasinoChip message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns CasinoChip
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number
    ): assets.CasinoChip;

    /**
     * Decodes a CasinoChip message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns CasinoChip
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array
    ): assets.CasinoChip;

    /**
     * Verifies a CasinoChip message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): string | null;

    /**
     * Creates a CasinoChip message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns CasinoChip
     */
    public static fromObject(object: { [k: string]: any }): assets.CasinoChip;

    /**
     * Creates a plain object from a CasinoChip message. Also converts values to other types if specified.
     * @param message CasinoChip
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(
      message: assets.CasinoChip,
      options?: $protobuf.IConversionOptions
    ): { [k: string]: any };

    /**
     * Converts this CasinoChip to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
  }

  /** Properties of an AgeRestrictionField. */
  interface IAgeRestrictionField {
    /** AgeRestrictionField Lower */
    Lower?: number | null;

    /** AgeRestrictionField Upper */
    Upper?: number | null;
  }

  /** Represents an AgeRestrictionField. */
  class AgeRestrictionField implements IAgeRestrictionField {
    /**
     * Constructs a new AgeRestrictionField.
     * @param [properties] Properties to set
     */
    constructor(properties?: assets.IAgeRestrictionField);

    /** AgeRestrictionField Lower. */
    public Lower: number;

    /** AgeRestrictionField Upper. */
    public Upper: number;

    /**
     * Creates a new AgeRestrictionField instance using the specified properties.
     * @param [properties] Properties to set
     * @returns AgeRestrictionField instance
     */
    public static create(
      properties?: assets.IAgeRestrictionField
    ): assets.AgeRestrictionField;

    /**
     * Encodes the specified AgeRestrictionField message. Does not implicitly {@link assets.AgeRestrictionField.verify|verify} messages.
     * @param message AgeRestrictionField message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encode(
      message: assets.IAgeRestrictionField,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Encodes the specified AgeRestrictionField message, length delimited. Does not implicitly {@link assets.AgeRestrictionField.verify|verify} messages.
     * @param message AgeRestrictionField message or plain object to encode
     * @param [writer] Writer to encode to
     * @returns Writer
     */
    public static encodeDelimited(
      message: assets.IAgeRestrictionField,
      writer?: $protobuf.Writer
    ): $protobuf.Writer;

    /**
     * Decodes an AgeRestrictionField message from the specified reader or buffer.
     * @param reader Reader or buffer to decode from
     * @param [length] Message length if known beforehand
     * @returns AgeRestrictionField
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decode(
      reader: $protobuf.Reader | Uint8Array,
      length?: number
    ): assets.AgeRestrictionField;

    /**
     * Decodes an AgeRestrictionField message from the specified reader or buffer, length delimited.
     * @param reader Reader or buffer to decode from
     * @returns AgeRestrictionField
     * @throws {Error} If the payload is not a reader or valid buffer
     * @throws {$protobuf.util.ProtocolError} If required fields are missing
     */
    public static decodeDelimited(
      reader: $protobuf.Reader | Uint8Array
    ): assets.AgeRestrictionField;

    /**
     * Verifies an AgeRestrictionField message.
     * @param message Plain object to verify
     * @returns `null` if valid, otherwise the reason why it is not
     */
    public static verify(message: { [k: string]: any }): string | null;

    /**
     * Creates an AgeRestrictionField message from a plain object. Also converts values to their respective internal types.
     * @param object Plain object
     * @returns AgeRestrictionField
     */
    public static fromObject(object: {
      [k: string]: any;
    }): assets.AgeRestrictionField;

    /**
     * Creates a plain object from an AgeRestrictionField message. Also converts values to other types if specified.
     * @param message AgeRestrictionField
     * @param [options] Conversion options
     * @returns Plain object
     */
    public static toObject(
      message: assets.AgeRestrictionField,
      options?: $protobuf.IConversionOptions
    ): { [k: string]: any };

    /**
     * Converts this AgeRestrictionField to JSON.
     * @returns JSON object
     */
    public toJSON(): { [k: string]: any };
  }
}
