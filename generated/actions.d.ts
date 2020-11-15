import * as Long from "long";

import * as $protobuf from "protobufjs";
/** Namespace actions. */
export namespace actions {

    /** Properties of a ContractOffer. */
    interface IContractOffer {

        /** ContractOffer ContractName */
        ContractName?: (string|null);

        /** ContractOffer BodyOfAgreementType */
        BodyOfAgreementType?: (number|null);

        /** ContractOffer BodyOfAgreement */
        BodyOfAgreement?: (Uint8Array|null);

        /** ContractOffer SupportingDocs */
        SupportingDocs?: (actions.IDocumentField[]|null);

        /** ContractOffer GoverningLaw */
        GoverningLaw?: (string|null);

        /** ContractOffer Jurisdiction */
        Jurisdiction?: (string|null);

        /** ContractOffer ContractExpiration */
        ContractExpiration?: (number|Long|null);

        /** ContractOffer ContractURI */
        ContractURI?: (string|null);

        /** ContractOffer Issuer */
        Issuer?: (actions.IEntityField|null);

        /** ContractOffer ContractOperatorIncluded */
        ContractOperatorIncluded?: (boolean|null);

        /** ContractOffer ContractFee */
        ContractFee?: (number|Long|null);

        /** ContractOffer VotingSystems */
        VotingSystems?: (actions.IVotingSystemField[]|null);

        /** ContractOffer ContractPermissions */
        ContractPermissions?: (Uint8Array|null);

        /** ContractOffer RestrictedQtyAssets */
        RestrictedQtyAssets?: (number|Long|null);

        /** ContractOffer AdministrationProposal */
        AdministrationProposal?: (boolean|null);

        /** ContractOffer HolderProposal */
        HolderProposal?: (boolean|null);

        /** ContractOffer Oracles */
        Oracles?: (actions.IOracleField[]|null);

        /** ContractOffer MasterAddress */
        MasterAddress?: (Uint8Array|null);

        /** ContractOffer EntityContract */
        EntityContract?: (Uint8Array|null);

        /** ContractOffer OperatorEntityContract */
        OperatorEntityContract?: (Uint8Array|null);

        /** ContractOffer ContractType */
        ContractType?: (number|null);

        /** ContractOffer Services */
        Services?: (actions.IServiceField[]|null);

        /** ContractOffer AdminIdentityCertificates */
        AdminIdentityCertificates?: (actions.IAdminIdentityCertificateField[]|null);
    }

    /** Represents a ContractOffer. */
    class ContractOffer implements IContractOffer {

        /**
         * Constructs a new ContractOffer.
         * @param [properties] Properties to set
         */
        constructor(properties?: actions.IContractOffer);

        /** ContractOffer ContractName. */
        public ContractName: string;

        /** ContractOffer BodyOfAgreementType. */
        public BodyOfAgreementType: number;

        /** ContractOffer BodyOfAgreement. */
        public BodyOfAgreement: Uint8Array;

        /** ContractOffer SupportingDocs. */
        public SupportingDocs: actions.IDocumentField[];

        /** ContractOffer GoverningLaw. */
        public GoverningLaw: string;

        /** ContractOffer Jurisdiction. */
        public Jurisdiction: string;

        /** ContractOffer ContractExpiration. */
        public ContractExpiration: (number|Long);

        /** ContractOffer ContractURI. */
        public ContractURI: string;

        /** ContractOffer Issuer. */
        public Issuer?: (actions.IEntityField|null);

        /** ContractOffer ContractOperatorIncluded. */
        public ContractOperatorIncluded: boolean;

        /** ContractOffer ContractFee. */
        public ContractFee: (number|Long);

        /** ContractOffer VotingSystems. */
        public VotingSystems: actions.IVotingSystemField[];

        /** ContractOffer ContractPermissions. */
        public ContractPermissions: Uint8Array;

        /** ContractOffer RestrictedQtyAssets. */
        public RestrictedQtyAssets: (number|Long);

        /** ContractOffer AdministrationProposal. */
        public AdministrationProposal: boolean;

        /** ContractOffer HolderProposal. */
        public HolderProposal: boolean;

        /** ContractOffer Oracles. */
        public Oracles: actions.IOracleField[];

        /** ContractOffer MasterAddress. */
        public MasterAddress: Uint8Array;

        /** ContractOffer EntityContract. */
        public EntityContract: Uint8Array;

        /** ContractOffer OperatorEntityContract. */
        public OperatorEntityContract: Uint8Array;

        /** ContractOffer ContractType. */
        public ContractType: number;

        /** ContractOffer Services. */
        public Services: actions.IServiceField[];

        /** ContractOffer AdminIdentityCertificates. */
        public AdminIdentityCertificates: actions.IAdminIdentityCertificateField[];

        /**
         * Creates a new ContractOffer instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ContractOffer instance
         */
        public static create(properties?: actions.IContractOffer): actions.ContractOffer;

        /**
         * Encodes the specified ContractOffer message. Does not implicitly {@link actions.ContractOffer.verify|verify} messages.
         * @param message ContractOffer message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: actions.IContractOffer, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ContractOffer message, length delimited. Does not implicitly {@link actions.ContractOffer.verify|verify} messages.
         * @param message ContractOffer message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: actions.IContractOffer, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ContractOffer message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ContractOffer
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): actions.ContractOffer;

        /**
         * Decodes a ContractOffer message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ContractOffer
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): actions.ContractOffer;

        /**
         * Verifies a ContractOffer message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ContractOffer message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ContractOffer
         */
        public static fromObject(object: { [k: string]: any }): actions.ContractOffer;

        /**
         * Creates a plain object from a ContractOffer message. Also converts values to other types if specified.
         * @param message ContractOffer
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: actions.ContractOffer, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ContractOffer to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ContractFormation. */
    interface IContractFormation {

        /** ContractFormation ContractName */
        ContractName?: (string|null);

        /** ContractFormation BodyOfAgreementType */
        BodyOfAgreementType?: (number|null);

        /** ContractFormation BodyOfAgreement */
        BodyOfAgreement?: (Uint8Array|null);

        /** ContractFormation SupportingDocs */
        SupportingDocs?: (actions.IDocumentField[]|null);

        /** ContractFormation GoverningLaw */
        GoverningLaw?: (string|null);

        /** ContractFormation Jurisdiction */
        Jurisdiction?: (string|null);

        /** ContractFormation ContractExpiration */
        ContractExpiration?: (number|Long|null);

        /** ContractFormation ContractURI */
        ContractURI?: (string|null);

        /** ContractFormation Issuer */
        Issuer?: (actions.IEntityField|null);

        /** ContractFormation ContractFee */
        ContractFee?: (number|Long|null);

        /** ContractFormation VotingSystems */
        VotingSystems?: (actions.IVotingSystemField[]|null);

        /** ContractFormation ContractPermissions */
        ContractPermissions?: (Uint8Array|null);

        /** ContractFormation RestrictedQtyAssets */
        RestrictedQtyAssets?: (number|Long|null);

        /** ContractFormation AdministrationProposal */
        AdministrationProposal?: (boolean|null);

        /** ContractFormation HolderProposal */
        HolderProposal?: (boolean|null);

        /** ContractFormation Oracles */
        Oracles?: (actions.IOracleField[]|null);

        /** ContractFormation MasterAddress */
        MasterAddress?: (Uint8Array|null);

        /** ContractFormation ContractRevision */
        ContractRevision?: (number|null);

        /** ContractFormation Timestamp */
        Timestamp?: (number|Long|null);

        /** ContractFormation EntityContract */
        EntityContract?: (Uint8Array|null);

        /** ContractFormation OperatorEntityContract */
        OperatorEntityContract?: (Uint8Array|null);

        /** ContractFormation ContractType */
        ContractType?: (number|null);

        /** ContractFormation Services */
        Services?: (actions.IServiceField[]|null);

        /** ContractFormation AdminIdentityCertificates */
        AdminIdentityCertificates?: (actions.IAdminIdentityCertificateField[]|null);

        /** ContractFormation AdminAddress */
        AdminAddress?: (Uint8Array|null);

        /** ContractFormation OperatorAddress */
        OperatorAddress?: (Uint8Array|null);
    }

    /** Represents a ContractFormation. */
    class ContractFormation implements IContractFormation {

        /**
         * Constructs a new ContractFormation.
         * @param [properties] Properties to set
         */
        constructor(properties?: actions.IContractFormation);

        /** ContractFormation ContractName. */
        public ContractName: string;

        /** ContractFormation BodyOfAgreementType. */
        public BodyOfAgreementType: number;

        /** ContractFormation BodyOfAgreement. */
        public BodyOfAgreement: Uint8Array;

        /** ContractFormation SupportingDocs. */
        public SupportingDocs: actions.IDocumentField[];

        /** ContractFormation GoverningLaw. */
        public GoverningLaw: string;

        /** ContractFormation Jurisdiction. */
        public Jurisdiction: string;

        /** ContractFormation ContractExpiration. */
        public ContractExpiration: (number|Long);

        /** ContractFormation ContractURI. */
        public ContractURI: string;

        /** ContractFormation Issuer. */
        public Issuer?: (actions.IEntityField|null);

        /** ContractFormation ContractFee. */
        public ContractFee: (number|Long);

        /** ContractFormation VotingSystems. */
        public VotingSystems: actions.IVotingSystemField[];

        /** ContractFormation ContractPermissions. */
        public ContractPermissions: Uint8Array;

        /** ContractFormation RestrictedQtyAssets. */
        public RestrictedQtyAssets: (number|Long);

        /** ContractFormation AdministrationProposal. */
        public AdministrationProposal: boolean;

        /** ContractFormation HolderProposal. */
        public HolderProposal: boolean;

        /** ContractFormation Oracles. */
        public Oracles: actions.IOracleField[];

        /** ContractFormation MasterAddress. */
        public MasterAddress: Uint8Array;

        /** ContractFormation ContractRevision. */
        public ContractRevision: number;

        /** ContractFormation Timestamp. */
        public Timestamp: (number|Long);

        /** ContractFormation EntityContract. */
        public EntityContract: Uint8Array;

        /** ContractFormation OperatorEntityContract. */
        public OperatorEntityContract: Uint8Array;

        /** ContractFormation ContractType. */
        public ContractType: number;

        /** ContractFormation Services. */
        public Services: actions.IServiceField[];

        /** ContractFormation AdminIdentityCertificates. */
        public AdminIdentityCertificates: actions.IAdminIdentityCertificateField[];

        /** ContractFormation AdminAddress. */
        public AdminAddress: Uint8Array;

        /** ContractFormation OperatorAddress. */
        public OperatorAddress: Uint8Array;

        /**
         * Creates a new ContractFormation instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ContractFormation instance
         */
        public static create(properties?: actions.IContractFormation): actions.ContractFormation;

        /**
         * Encodes the specified ContractFormation message. Does not implicitly {@link actions.ContractFormation.verify|verify} messages.
         * @param message ContractFormation message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: actions.IContractFormation, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ContractFormation message, length delimited. Does not implicitly {@link actions.ContractFormation.verify|verify} messages.
         * @param message ContractFormation message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: actions.IContractFormation, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ContractFormation message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ContractFormation
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): actions.ContractFormation;

        /**
         * Decodes a ContractFormation message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ContractFormation
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): actions.ContractFormation;

        /**
         * Verifies a ContractFormation message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ContractFormation message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ContractFormation
         */
        public static fromObject(object: { [k: string]: any }): actions.ContractFormation;

        /**
         * Creates a plain object from a ContractFormation message. Also converts values to other types if specified.
         * @param message ContractFormation
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: actions.ContractFormation, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ContractFormation to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ContractAmendment. */
    interface IContractAmendment {

        /** ContractAmendment ChangeAdministrationAddress */
        ChangeAdministrationAddress?: (boolean|null);

        /** ContractAmendment ChangeOperatorAddress */
        ChangeOperatorAddress?: (boolean|null);

        /** ContractAmendment ContractRevision */
        ContractRevision?: (number|null);

        /** ContractAmendment Amendments */
        Amendments?: (actions.IAmendmentField[]|null);

        /** ContractAmendment RefTxID */
        RefTxID?: (Uint8Array|null);
    }

    /** Represents a ContractAmendment. */
    class ContractAmendment implements IContractAmendment {

        /**
         * Constructs a new ContractAmendment.
         * @param [properties] Properties to set
         */
        constructor(properties?: actions.IContractAmendment);

        /** ContractAmendment ChangeAdministrationAddress. */
        public ChangeAdministrationAddress: boolean;

        /** ContractAmendment ChangeOperatorAddress. */
        public ChangeOperatorAddress: boolean;

        /** ContractAmendment ContractRevision. */
        public ContractRevision: number;

        /** ContractAmendment Amendments. */
        public Amendments: actions.IAmendmentField[];

        /** ContractAmendment RefTxID. */
        public RefTxID: Uint8Array;

        /**
         * Creates a new ContractAmendment instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ContractAmendment instance
         */
        public static create(properties?: actions.IContractAmendment): actions.ContractAmendment;

        /**
         * Encodes the specified ContractAmendment message. Does not implicitly {@link actions.ContractAmendment.verify|verify} messages.
         * @param message ContractAmendment message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: actions.IContractAmendment, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ContractAmendment message, length delimited. Does not implicitly {@link actions.ContractAmendment.verify|verify} messages.
         * @param message ContractAmendment message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: actions.IContractAmendment, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ContractAmendment message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ContractAmendment
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): actions.ContractAmendment;

        /**
         * Decodes a ContractAmendment message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ContractAmendment
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): actions.ContractAmendment;

        /**
         * Verifies a ContractAmendment message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ContractAmendment message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ContractAmendment
         */
        public static fromObject(object: { [k: string]: any }): actions.ContractAmendment;

        /**
         * Creates a plain object from a ContractAmendment message. Also converts values to other types if specified.
         * @param message ContractAmendment
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: actions.ContractAmendment, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ContractAmendment to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a StaticContractFormation. */
    interface IStaticContractFormation {

        /** StaticContractFormation ContractName */
        ContractName?: (string|null);

        /** StaticContractFormation ContractCode */
        ContractCode?: (Uint8Array|null);

        /** StaticContractFormation BodyOfAgreementType */
        BodyOfAgreementType?: (number|null);

        /** StaticContractFormation BodyOfAgreement */
        BodyOfAgreement?: (Uint8Array|null);

        /** StaticContractFormation ContractType */
        ContractType?: (string|null);

        /** StaticContractFormation SupportingDocs */
        SupportingDocs?: (actions.IDocumentField[]|null);

        /** StaticContractFormation ContractRevision */
        ContractRevision?: (number|null);

        /** StaticContractFormation GoverningLaw */
        GoverningLaw?: (string|null);

        /** StaticContractFormation Jurisdiction */
        Jurisdiction?: (string|null);

        /** StaticContractFormation EffectiveDate */
        EffectiveDate?: (number|Long|null);

        /** StaticContractFormation ContractExpiration */
        ContractExpiration?: (number|Long|null);

        /** StaticContractFormation ContractURI */
        ContractURI?: (string|null);

        /** StaticContractFormation PrevRevTxID */
        PrevRevTxID?: (Uint8Array|null);

        /** StaticContractFormation Entities */
        Entities?: (actions.IEntityField[]|null);

        /** StaticContractFormation EntityOracle */
        EntityOracle?: (actions.IOracleField|null);

        /** StaticContractFormation EntityOracleSignature */
        EntityOracleSignature?: (Uint8Array|null);

        /** StaticContractFormation EntityOracleSigBlockHeight */
        EntityOracleSigBlockHeight?: (number|null);
    }

    /** Represents a StaticContractFormation. */
    class StaticContractFormation implements IStaticContractFormation {

        /**
         * Constructs a new StaticContractFormation.
         * @param [properties] Properties to set
         */
        constructor(properties?: actions.IStaticContractFormation);

        /** StaticContractFormation ContractName. */
        public ContractName: string;

        /** StaticContractFormation ContractCode. */
        public ContractCode: Uint8Array;

        /** StaticContractFormation BodyOfAgreementType. */
        public BodyOfAgreementType: number;

        /** StaticContractFormation BodyOfAgreement. */
        public BodyOfAgreement: Uint8Array;

        /** StaticContractFormation ContractType. */
        public ContractType: string;

        /** StaticContractFormation SupportingDocs. */
        public SupportingDocs: actions.IDocumentField[];

        /** StaticContractFormation ContractRevision. */
        public ContractRevision: number;

        /** StaticContractFormation GoverningLaw. */
        public GoverningLaw: string;

        /** StaticContractFormation Jurisdiction. */
        public Jurisdiction: string;

        /** StaticContractFormation EffectiveDate. */
        public EffectiveDate: (number|Long);

        /** StaticContractFormation ContractExpiration. */
        public ContractExpiration: (number|Long);

        /** StaticContractFormation ContractURI. */
        public ContractURI: string;

        /** StaticContractFormation PrevRevTxID. */
        public PrevRevTxID: Uint8Array;

        /** StaticContractFormation Entities. */
        public Entities: actions.IEntityField[];

        /** StaticContractFormation EntityOracle. */
        public EntityOracle?: (actions.IOracleField|null);

        /** StaticContractFormation EntityOracleSignature. */
        public EntityOracleSignature: Uint8Array;

        /** StaticContractFormation EntityOracleSigBlockHeight. */
        public EntityOracleSigBlockHeight: number;

        /**
         * Creates a new StaticContractFormation instance using the specified properties.
         * @param [properties] Properties to set
         * @returns StaticContractFormation instance
         */
        public static create(properties?: actions.IStaticContractFormation): actions.StaticContractFormation;

        /**
         * Encodes the specified StaticContractFormation message. Does not implicitly {@link actions.StaticContractFormation.verify|verify} messages.
         * @param message StaticContractFormation message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: actions.IStaticContractFormation, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified StaticContractFormation message, length delimited. Does not implicitly {@link actions.StaticContractFormation.verify|verify} messages.
         * @param message StaticContractFormation message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: actions.IStaticContractFormation, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a StaticContractFormation message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns StaticContractFormation
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): actions.StaticContractFormation;

        /**
         * Decodes a StaticContractFormation message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns StaticContractFormation
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): actions.StaticContractFormation;

        /**
         * Verifies a StaticContractFormation message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a StaticContractFormation message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns StaticContractFormation
         */
        public static fromObject(object: { [k: string]: any }): actions.StaticContractFormation;

        /**
         * Creates a plain object from a StaticContractFormation message. Also converts values to other types if specified.
         * @param message StaticContractFormation
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: actions.StaticContractFormation, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this StaticContractFormation to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ContractAddressChange. */
    interface IContractAddressChange {

        /** ContractAddressChange NewContractAddress */
        NewContractAddress?: (Uint8Array|null);

        /** ContractAddressChange Timestamp */
        Timestamp?: (number|Long|null);
    }

    /** Represents a ContractAddressChange. */
    class ContractAddressChange implements IContractAddressChange {

        /**
         * Constructs a new ContractAddressChange.
         * @param [properties] Properties to set
         */
        constructor(properties?: actions.IContractAddressChange);

        /** ContractAddressChange NewContractAddress. */
        public NewContractAddress: Uint8Array;

        /** ContractAddressChange Timestamp. */
        public Timestamp: (number|Long);

        /**
         * Creates a new ContractAddressChange instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ContractAddressChange instance
         */
        public static create(properties?: actions.IContractAddressChange): actions.ContractAddressChange;

        /**
         * Encodes the specified ContractAddressChange message. Does not implicitly {@link actions.ContractAddressChange.verify|verify} messages.
         * @param message ContractAddressChange message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: actions.IContractAddressChange, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ContractAddressChange message, length delimited. Does not implicitly {@link actions.ContractAddressChange.verify|verify} messages.
         * @param message ContractAddressChange message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: actions.IContractAddressChange, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ContractAddressChange message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ContractAddressChange
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): actions.ContractAddressChange;

        /**
         * Decodes a ContractAddressChange message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ContractAddressChange
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): actions.ContractAddressChange;

        /**
         * Verifies a ContractAddressChange message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ContractAddressChange message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ContractAddressChange
         */
        public static fromObject(object: { [k: string]: any }): actions.ContractAddressChange;

        /**
         * Creates a plain object from a ContractAddressChange message. Also converts values to other types if specified.
         * @param message ContractAddressChange
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: actions.ContractAddressChange, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ContractAddressChange to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an AssetDefinition. */
    interface IAssetDefinition {

        /** AssetDefinition AssetPermissions */
        AssetPermissions?: (Uint8Array|null);

        /** AssetDefinition TransfersPermitted */
        TransfersPermitted?: (boolean|null);

        /** AssetDefinition TradeRestrictions */
        TradeRestrictions?: (string[]|null);

        /** AssetDefinition EnforcementOrdersPermitted */
        EnforcementOrdersPermitted?: (boolean|null);

        /** AssetDefinition VotingRights */
        VotingRights?: (boolean|null);

        /** AssetDefinition VoteMultiplier */
        VoteMultiplier?: (number|null);

        /** AssetDefinition AdministrationProposal */
        AdministrationProposal?: (boolean|null);

        /** AssetDefinition HolderProposal */
        HolderProposal?: (boolean|null);

        /** AssetDefinition AssetModificationGovernance */
        AssetModificationGovernance?: (number|null);

        /** AssetDefinition TokenQty */
        TokenQty?: (number|Long|null);

        /** AssetDefinition AssetType */
        AssetType?: (string|null);

        /** AssetDefinition AssetPayload */
        AssetPayload?: (Uint8Array|null);
    }

    /** Represents an AssetDefinition. */
    class AssetDefinition implements IAssetDefinition {

        /**
         * Constructs a new AssetDefinition.
         * @param [properties] Properties to set
         */
        constructor(properties?: actions.IAssetDefinition);

        /** AssetDefinition AssetPermissions. */
        public AssetPermissions: Uint8Array;

        /** AssetDefinition TransfersPermitted. */
        public TransfersPermitted: boolean;

        /** AssetDefinition TradeRestrictions. */
        public TradeRestrictions: string[];

        /** AssetDefinition EnforcementOrdersPermitted. */
        public EnforcementOrdersPermitted: boolean;

        /** AssetDefinition VotingRights. */
        public VotingRights: boolean;

        /** AssetDefinition VoteMultiplier. */
        public VoteMultiplier: number;

        /** AssetDefinition AdministrationProposal. */
        public AdministrationProposal: boolean;

        /** AssetDefinition HolderProposal. */
        public HolderProposal: boolean;

        /** AssetDefinition AssetModificationGovernance. */
        public AssetModificationGovernance: number;

        /** AssetDefinition TokenQty. */
        public TokenQty: (number|Long);

        /** AssetDefinition AssetType. */
        public AssetType: string;

        /** AssetDefinition AssetPayload. */
        public AssetPayload: Uint8Array;

        /**
         * Creates a new AssetDefinition instance using the specified properties.
         * @param [properties] Properties to set
         * @returns AssetDefinition instance
         */
        public static create(properties?: actions.IAssetDefinition): actions.AssetDefinition;

        /**
         * Encodes the specified AssetDefinition message. Does not implicitly {@link actions.AssetDefinition.verify|verify} messages.
         * @param message AssetDefinition message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: actions.IAssetDefinition, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified AssetDefinition message, length delimited. Does not implicitly {@link actions.AssetDefinition.verify|verify} messages.
         * @param message AssetDefinition message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: actions.IAssetDefinition, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an AssetDefinition message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns AssetDefinition
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): actions.AssetDefinition;

        /**
         * Decodes an AssetDefinition message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns AssetDefinition
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): actions.AssetDefinition;

        /**
         * Verifies an AssetDefinition message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an AssetDefinition message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns AssetDefinition
         */
        public static fromObject(object: { [k: string]: any }): actions.AssetDefinition;

        /**
         * Creates a plain object from an AssetDefinition message. Also converts values to other types if specified.
         * @param message AssetDefinition
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: actions.AssetDefinition, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this AssetDefinition to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an AssetCreation. */
    interface IAssetCreation {

        /** AssetCreation AssetCode */
        AssetCode?: (Uint8Array|null);

        /** AssetCreation AssetIndex */
        AssetIndex?: (number|Long|null);

        /** AssetCreation AssetPermissions */
        AssetPermissions?: (Uint8Array|null);

        /** AssetCreation TransfersPermitted */
        TransfersPermitted?: (boolean|null);

        /** AssetCreation TradeRestrictions */
        TradeRestrictions?: (string[]|null);

        /** AssetCreation EnforcementOrdersPermitted */
        EnforcementOrdersPermitted?: (boolean|null);

        /** AssetCreation VotingRights */
        VotingRights?: (boolean|null);

        /** AssetCreation VoteMultiplier */
        VoteMultiplier?: (number|null);

        /** AssetCreation AdministrationProposal */
        AdministrationProposal?: (boolean|null);

        /** AssetCreation HolderProposal */
        HolderProposal?: (boolean|null);

        /** AssetCreation AssetModificationGovernance */
        AssetModificationGovernance?: (number|null);

        /** AssetCreation TokenQty */
        TokenQty?: (number|Long|null);

        /** AssetCreation AssetType */
        AssetType?: (string|null);

        /** AssetCreation AssetPayload */
        AssetPayload?: (Uint8Array|null);

        /** AssetCreation AssetRevision */
        AssetRevision?: (number|null);

        /** AssetCreation Timestamp */
        Timestamp?: (number|Long|null);
    }

    /** Represents an AssetCreation. */
    class AssetCreation implements IAssetCreation {

        /**
         * Constructs a new AssetCreation.
         * @param [properties] Properties to set
         */
        constructor(properties?: actions.IAssetCreation);

        /** AssetCreation AssetCode. */
        public AssetCode: Uint8Array;

        /** AssetCreation AssetIndex. */
        public AssetIndex: (number|Long);

        /** AssetCreation AssetPermissions. */
        public AssetPermissions: Uint8Array;

        /** AssetCreation TransfersPermitted. */
        public TransfersPermitted: boolean;

        /** AssetCreation TradeRestrictions. */
        public TradeRestrictions: string[];

        /** AssetCreation EnforcementOrdersPermitted. */
        public EnforcementOrdersPermitted: boolean;

        /** AssetCreation VotingRights. */
        public VotingRights: boolean;

        /** AssetCreation VoteMultiplier. */
        public VoteMultiplier: number;

        /** AssetCreation AdministrationProposal. */
        public AdministrationProposal: boolean;

        /** AssetCreation HolderProposal. */
        public HolderProposal: boolean;

        /** AssetCreation AssetModificationGovernance. */
        public AssetModificationGovernance: number;

        /** AssetCreation TokenQty. */
        public TokenQty: (number|Long);

        /** AssetCreation AssetType. */
        public AssetType: string;

        /** AssetCreation AssetPayload. */
        public AssetPayload: Uint8Array;

        /** AssetCreation AssetRevision. */
        public AssetRevision: number;

        /** AssetCreation Timestamp. */
        public Timestamp: (number|Long);

        /**
         * Creates a new AssetCreation instance using the specified properties.
         * @param [properties] Properties to set
         * @returns AssetCreation instance
         */
        public static create(properties?: actions.IAssetCreation): actions.AssetCreation;

        /**
         * Encodes the specified AssetCreation message. Does not implicitly {@link actions.AssetCreation.verify|verify} messages.
         * @param message AssetCreation message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: actions.IAssetCreation, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified AssetCreation message, length delimited. Does not implicitly {@link actions.AssetCreation.verify|verify} messages.
         * @param message AssetCreation message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: actions.IAssetCreation, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an AssetCreation message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns AssetCreation
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): actions.AssetCreation;

        /**
         * Decodes an AssetCreation message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns AssetCreation
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): actions.AssetCreation;

        /**
         * Verifies an AssetCreation message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an AssetCreation message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns AssetCreation
         */
        public static fromObject(object: { [k: string]: any }): actions.AssetCreation;

        /**
         * Creates a plain object from an AssetCreation message. Also converts values to other types if specified.
         * @param message AssetCreation
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: actions.AssetCreation, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this AssetCreation to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an AssetModification. */
    interface IAssetModification {

        /** AssetModification AssetType */
        AssetType?: (string|null);

        /** AssetModification AssetCode */
        AssetCode?: (Uint8Array|null);

        /** AssetModification AssetRevision */
        AssetRevision?: (number|null);

        /** AssetModification Amendments */
        Amendments?: (actions.IAmendmentField[]|null);

        /** AssetModification RefTxID */
        RefTxID?: (Uint8Array|null);
    }

    /** Represents an AssetModification. */
    class AssetModification implements IAssetModification {

        /**
         * Constructs a new AssetModification.
         * @param [properties] Properties to set
         */
        constructor(properties?: actions.IAssetModification);

        /** AssetModification AssetType. */
        public AssetType: string;

        /** AssetModification AssetCode. */
        public AssetCode: Uint8Array;

        /** AssetModification AssetRevision. */
        public AssetRevision: number;

        /** AssetModification Amendments. */
        public Amendments: actions.IAmendmentField[];

        /** AssetModification RefTxID. */
        public RefTxID: Uint8Array;

        /**
         * Creates a new AssetModification instance using the specified properties.
         * @param [properties] Properties to set
         * @returns AssetModification instance
         */
        public static create(properties?: actions.IAssetModification): actions.AssetModification;

        /**
         * Encodes the specified AssetModification message. Does not implicitly {@link actions.AssetModification.verify|verify} messages.
         * @param message AssetModification message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: actions.IAssetModification, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified AssetModification message, length delimited. Does not implicitly {@link actions.AssetModification.verify|verify} messages.
         * @param message AssetModification message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: actions.IAssetModification, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an AssetModification message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns AssetModification
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): actions.AssetModification;

        /**
         * Decodes an AssetModification message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns AssetModification
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): actions.AssetModification;

        /**
         * Verifies an AssetModification message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an AssetModification message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns AssetModification
         */
        public static fromObject(object: { [k: string]: any }): actions.AssetModification;

        /**
         * Creates a plain object from an AssetModification message. Also converts values to other types if specified.
         * @param message AssetModification
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: actions.AssetModification, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this AssetModification to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a Transfer. */
    interface ITransfer {

        /** Transfer Assets */
        Assets?: (actions.IAssetTransferField[]|null);

        /** Transfer OfferExpiry */
        OfferExpiry?: (number|Long|null);

        /** Transfer ExchangeFee */
        ExchangeFee?: (number|Long|null);

        /** Transfer ExchangeFeeAddress */
        ExchangeFeeAddress?: (Uint8Array|null);
    }

    /** Represents a Transfer. */
    class Transfer implements ITransfer {

        /**
         * Constructs a new Transfer.
         * @param [properties] Properties to set
         */
        constructor(properties?: actions.ITransfer);

        /** Transfer Assets. */
        public Assets: actions.IAssetTransferField[];

        /** Transfer OfferExpiry. */
        public OfferExpiry: (number|Long);

        /** Transfer ExchangeFee. */
        public ExchangeFee: (number|Long);

        /** Transfer ExchangeFeeAddress. */
        public ExchangeFeeAddress: Uint8Array;

        /**
         * Creates a new Transfer instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Transfer instance
         */
        public static create(properties?: actions.ITransfer): actions.Transfer;

        /**
         * Encodes the specified Transfer message. Does not implicitly {@link actions.Transfer.verify|verify} messages.
         * @param message Transfer message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: actions.ITransfer, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Transfer message, length delimited. Does not implicitly {@link actions.Transfer.verify|verify} messages.
         * @param message Transfer message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: actions.ITransfer, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Transfer message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Transfer
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): actions.Transfer;

        /**
         * Decodes a Transfer message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Transfer
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): actions.Transfer;

        /**
         * Verifies a Transfer message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Transfer message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Transfer
         */
        public static fromObject(object: { [k: string]: any }): actions.Transfer;

        /**
         * Creates a plain object from a Transfer message. Also converts values to other types if specified.
         * @param message Transfer
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: actions.Transfer, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Transfer to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a Settlement. */
    interface ISettlement {

        /** Settlement Assets */
        Assets?: (actions.IAssetSettlementField[]|null);

        /** Settlement Timestamp */
        Timestamp?: (number|Long|null);
    }

    /** Represents a Settlement. */
    class Settlement implements ISettlement {

        /**
         * Constructs a new Settlement.
         * @param [properties] Properties to set
         */
        constructor(properties?: actions.ISettlement);

        /** Settlement Assets. */
        public Assets: actions.IAssetSettlementField[];

        /** Settlement Timestamp. */
        public Timestamp: (number|Long);

        /**
         * Creates a new Settlement instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Settlement instance
         */
        public static create(properties?: actions.ISettlement): actions.Settlement;

        /**
         * Encodes the specified Settlement message. Does not implicitly {@link actions.Settlement.verify|verify} messages.
         * @param message Settlement message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: actions.ISettlement, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Settlement message, length delimited. Does not implicitly {@link actions.Settlement.verify|verify} messages.
         * @param message Settlement message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: actions.ISettlement, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Settlement message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Settlement
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): actions.Settlement;

        /**
         * Decodes a Settlement message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Settlement
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): actions.Settlement;

        /**
         * Verifies a Settlement message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Settlement message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Settlement
         */
        public static fromObject(object: { [k: string]: any }): actions.Settlement;

        /**
         * Creates a plain object from a Settlement message. Also converts values to other types if specified.
         * @param message Settlement
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: actions.Settlement, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Settlement to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a Proposal. */
    interface IProposal {

        /** Proposal Type */
        Type?: (number|null);

        /** Proposal AssetType */
        AssetType?: (string|null);

        /** Proposal AssetCode */
        AssetCode?: (Uint8Array|null);

        /** Proposal VoteSystem */
        VoteSystem?: (number|null);

        /** Proposal ProposedAmendments */
        ProposedAmendments?: (actions.IAmendmentField[]|null);

        /** Proposal VoteOptions */
        VoteOptions?: (string|null);

        /** Proposal VoteMax */
        VoteMax?: (number|null);

        /** Proposal ProposalDescription */
        ProposalDescription?: (string|null);

        /** Proposal ProposalDocumentHash */
        ProposalDocumentHash?: (Uint8Array|null);

        /** Proposal VoteCutOffTimestamp */
        VoteCutOffTimestamp?: (number|Long|null);
    }

    /** Represents a Proposal. */
    class Proposal implements IProposal {

        /**
         * Constructs a new Proposal.
         * @param [properties] Properties to set
         */
        constructor(properties?: actions.IProposal);

        /** Proposal Type. */
        public Type: number;

        /** Proposal AssetType. */
        public AssetType: string;

        /** Proposal AssetCode. */
        public AssetCode: Uint8Array;

        /** Proposal VoteSystem. */
        public VoteSystem: number;

        /** Proposal ProposedAmendments. */
        public ProposedAmendments: actions.IAmendmentField[];

        /** Proposal VoteOptions. */
        public VoteOptions: string;

        /** Proposal VoteMax. */
        public VoteMax: number;

        /** Proposal ProposalDescription. */
        public ProposalDescription: string;

        /** Proposal ProposalDocumentHash. */
        public ProposalDocumentHash: Uint8Array;

        /** Proposal VoteCutOffTimestamp. */
        public VoteCutOffTimestamp: (number|Long);

        /**
         * Creates a new Proposal instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Proposal instance
         */
        public static create(properties?: actions.IProposal): actions.Proposal;

        /**
         * Encodes the specified Proposal message. Does not implicitly {@link actions.Proposal.verify|verify} messages.
         * @param message Proposal message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: actions.IProposal, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Proposal message, length delimited. Does not implicitly {@link actions.Proposal.verify|verify} messages.
         * @param message Proposal message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: actions.IProposal, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Proposal message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Proposal
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): actions.Proposal;

        /**
         * Decodes a Proposal message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Proposal
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): actions.Proposal;

        /**
         * Verifies a Proposal message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Proposal message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Proposal
         */
        public static fromObject(object: { [k: string]: any }): actions.Proposal;

        /**
         * Creates a plain object from a Proposal message. Also converts values to other types if specified.
         * @param message Proposal
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: actions.Proposal, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Proposal to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a Vote. */
    interface IVote {

        /** Vote Timestamp */
        Timestamp?: (number|Long|null);
    }

    /** Represents a Vote. */
    class Vote implements IVote {

        /**
         * Constructs a new Vote.
         * @param [properties] Properties to set
         */
        constructor(properties?: actions.IVote);

        /** Vote Timestamp. */
        public Timestamp: (number|Long);

        /**
         * Creates a new Vote instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Vote instance
         */
        public static create(properties?: actions.IVote): actions.Vote;

        /**
         * Encodes the specified Vote message. Does not implicitly {@link actions.Vote.verify|verify} messages.
         * @param message Vote message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: actions.IVote, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Vote message, length delimited. Does not implicitly {@link actions.Vote.verify|verify} messages.
         * @param message Vote message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: actions.IVote, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Vote message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Vote
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): actions.Vote;

        /**
         * Decodes a Vote message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Vote
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): actions.Vote;

        /**
         * Verifies a Vote message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Vote message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Vote
         */
        public static fromObject(object: { [k: string]: any }): actions.Vote;

        /**
         * Creates a plain object from a Vote message. Also converts values to other types if specified.
         * @param message Vote
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: actions.Vote, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Vote to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a BallotCast. */
    interface IBallotCast {

        /** BallotCast VoteTxId */
        VoteTxId?: (Uint8Array|null);

        /** BallotCast Vote */
        Vote?: (string|null);
    }

    /** Represents a BallotCast. */
    class BallotCast implements IBallotCast {

        /**
         * Constructs a new BallotCast.
         * @param [properties] Properties to set
         */
        constructor(properties?: actions.IBallotCast);

        /** BallotCast VoteTxId. */
        public VoteTxId: Uint8Array;

        /** BallotCast Vote. */
        public Vote: string;

        /**
         * Creates a new BallotCast instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BallotCast instance
         */
        public static create(properties?: actions.IBallotCast): actions.BallotCast;

        /**
         * Encodes the specified BallotCast message. Does not implicitly {@link actions.BallotCast.verify|verify} messages.
         * @param message BallotCast message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: actions.IBallotCast, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified BallotCast message, length delimited. Does not implicitly {@link actions.BallotCast.verify|verify} messages.
         * @param message BallotCast message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: actions.IBallotCast, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a BallotCast message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns BallotCast
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): actions.BallotCast;

        /**
         * Decodes a BallotCast message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns BallotCast
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): actions.BallotCast;

        /**
         * Verifies a BallotCast message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a BallotCast message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns BallotCast
         */
        public static fromObject(object: { [k: string]: any }): actions.BallotCast;

        /**
         * Creates a plain object from a BallotCast message. Also converts values to other types if specified.
         * @param message BallotCast
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: actions.BallotCast, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this BallotCast to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a BallotCounted. */
    interface IBallotCounted {

        /** BallotCounted VoteTxId */
        VoteTxId?: (Uint8Array|null);

        /** BallotCounted Vote */
        Vote?: (string|null);

        /** BallotCounted Quantity */
        Quantity?: (number|Long|null);

        /** BallotCounted Timestamp */
        Timestamp?: (number|Long|null);
    }

    /** Represents a BallotCounted. */
    class BallotCounted implements IBallotCounted {

        /**
         * Constructs a new BallotCounted.
         * @param [properties] Properties to set
         */
        constructor(properties?: actions.IBallotCounted);

        /** BallotCounted VoteTxId. */
        public VoteTxId: Uint8Array;

        /** BallotCounted Vote. */
        public Vote: string;

        /** BallotCounted Quantity. */
        public Quantity: (number|Long);

        /** BallotCounted Timestamp. */
        public Timestamp: (number|Long);

        /**
         * Creates a new BallotCounted instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BallotCounted instance
         */
        public static create(properties?: actions.IBallotCounted): actions.BallotCounted;

        /**
         * Encodes the specified BallotCounted message. Does not implicitly {@link actions.BallotCounted.verify|verify} messages.
         * @param message BallotCounted message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: actions.IBallotCounted, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified BallotCounted message, length delimited. Does not implicitly {@link actions.BallotCounted.verify|verify} messages.
         * @param message BallotCounted message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: actions.IBallotCounted, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a BallotCounted message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns BallotCounted
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): actions.BallotCounted;

        /**
         * Decodes a BallotCounted message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns BallotCounted
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): actions.BallotCounted;

        /**
         * Verifies a BallotCounted message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a BallotCounted message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns BallotCounted
         */
        public static fromObject(object: { [k: string]: any }): actions.BallotCounted;

        /**
         * Creates a plain object from a BallotCounted message. Also converts values to other types if specified.
         * @param message BallotCounted
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: actions.BallotCounted, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this BallotCounted to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a Result. */
    interface IResult {

        /** Result AssetType */
        AssetType?: (string|null);

        /** Result AssetCode */
        AssetCode?: (Uint8Array|null);

        /** Result ProposedAmendments */
        ProposedAmendments?: (actions.IAmendmentField[]|null);

        /** Result VoteTxId */
        VoteTxId?: (Uint8Array|null);

        /** Result OptionTally */
        OptionTally?: ((number|Long)[]|null);

        /** Result Result */
        Result?: (string|null);

        /** Result Timestamp */
        Timestamp?: (number|Long|null);
    }

    /** Represents a Result. */
    class Result implements IResult {

        /**
         * Constructs a new Result.
         * @param [properties] Properties to set
         */
        constructor(properties?: actions.IResult);

        /** Result AssetType. */
        public AssetType: string;

        /** Result AssetCode. */
        public AssetCode: Uint8Array;

        /** Result ProposedAmendments. */
        public ProposedAmendments: actions.IAmendmentField[];

        /** Result VoteTxId. */
        public VoteTxId: Uint8Array;

        /** Result OptionTally. */
        public OptionTally: (number|Long)[];

        /** Result Result. */
        public Result: string;

        /** Result Timestamp. */
        public Timestamp: (number|Long);

        /**
         * Creates a new Result instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Result instance
         */
        public static create(properties?: actions.IResult): actions.Result;

        /**
         * Encodes the specified Result message. Does not implicitly {@link actions.Result.verify|verify} messages.
         * @param message Result message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: actions.IResult, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Result message, length delimited. Does not implicitly {@link actions.Result.verify|verify} messages.
         * @param message Result message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: actions.IResult, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Result message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Result
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): actions.Result;

        /**
         * Decodes a Result message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Result
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): actions.Result;

        /**
         * Verifies a Result message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Result message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Result
         */
        public static fromObject(object: { [k: string]: any }): actions.Result;

        /**
         * Creates a plain object from a Result message. Also converts values to other types if specified.
         * @param message Result
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: actions.Result, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Result to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an Order. */
    interface IOrder {

        /** Order ComplianceAction */
        ComplianceAction?: (string|null);

        /** Order AssetType */
        AssetType?: (string|null);

        /** Order AssetCode */
        AssetCode?: (Uint8Array|null);

        /** Order TargetAddresses */
        TargetAddresses?: (actions.ITargetAddressField[]|null);

        /** Order FreezeTxId */
        FreezeTxId?: (Uint8Array|null);

        /** Order FreezePeriod */
        FreezePeriod?: (number|Long|null);

        /** Order DepositAddress */
        DepositAddress?: (Uint8Array|null);

        /** Order AuthorityName */
        AuthorityName?: (string|null);

        /** Order AuthorityPublicKey */
        AuthorityPublicKey?: (Uint8Array|null);

        /** Order SignatureAlgorithm */
        SignatureAlgorithm?: (number|null);

        /** Order OrderSignature */
        OrderSignature?: (Uint8Array|null);

        /** Order BitcoinDispersions */
        BitcoinDispersions?: (actions.IQuantityIndexField[]|null);

        /** Order Message */
        Message?: (string|null);

        /** Order SupportingEvidenceFormat */
        SupportingEvidenceFormat?: (number|null);

        /** Order SupportingEvidence */
        SupportingEvidence?: (Uint8Array|null);

        /** Order ReferenceTransactions */
        ReferenceTransactions?: (actions.IReferenceTransactionField[]|null);
    }

    /** Represents an Order. */
    class Order implements IOrder {

        /**
         * Constructs a new Order.
         * @param [properties] Properties to set
         */
        constructor(properties?: actions.IOrder);

        /** Order ComplianceAction. */
        public ComplianceAction: string;

        /** Order AssetType. */
        public AssetType: string;

        /** Order AssetCode. */
        public AssetCode: Uint8Array;

        /** Order TargetAddresses. */
        public TargetAddresses: actions.ITargetAddressField[];

        /** Order FreezeTxId. */
        public FreezeTxId: Uint8Array;

        /** Order FreezePeriod. */
        public FreezePeriod: (number|Long);

        /** Order DepositAddress. */
        public DepositAddress: Uint8Array;

        /** Order AuthorityName. */
        public AuthorityName: string;

        /** Order AuthorityPublicKey. */
        public AuthorityPublicKey: Uint8Array;

        /** Order SignatureAlgorithm. */
        public SignatureAlgorithm: number;

        /** Order OrderSignature. */
        public OrderSignature: Uint8Array;

        /** Order BitcoinDispersions. */
        public BitcoinDispersions: actions.IQuantityIndexField[];

        /** Order Message. */
        public Message: string;

        /** Order SupportingEvidenceFormat. */
        public SupportingEvidenceFormat: number;

        /** Order SupportingEvidence. */
        public SupportingEvidence: Uint8Array;

        /** Order ReferenceTransactions. */
        public ReferenceTransactions: actions.IReferenceTransactionField[];

        /**
         * Creates a new Order instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Order instance
         */
        public static create(properties?: actions.IOrder): actions.Order;

        /**
         * Encodes the specified Order message. Does not implicitly {@link actions.Order.verify|verify} messages.
         * @param message Order message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: actions.IOrder, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Order message, length delimited. Does not implicitly {@link actions.Order.verify|verify} messages.
         * @param message Order message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: actions.IOrder, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an Order message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Order
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): actions.Order;

        /**
         * Decodes an Order message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Order
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): actions.Order;

        /**
         * Verifies an Order message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an Order message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Order
         */
        public static fromObject(object: { [k: string]: any }): actions.Order;

        /**
         * Creates a plain object from an Order message. Also converts values to other types if specified.
         * @param message Order
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: actions.Order, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Order to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a Freeze. */
    interface IFreeze {

        /** Freeze AssetType */
        AssetType?: (string|null);

        /** Freeze AssetCode */
        AssetCode?: (Uint8Array|null);

        /** Freeze Quantities */
        Quantities?: (actions.IQuantityIndexField[]|null);

        /** Freeze FreezePeriod */
        FreezePeriod?: (number|Long|null);

        /** Freeze Timestamp */
        Timestamp?: (number|Long|null);
    }

    /** Represents a Freeze. */
    class Freeze implements IFreeze {

        /**
         * Constructs a new Freeze.
         * @param [properties] Properties to set
         */
        constructor(properties?: actions.IFreeze);

        /** Freeze AssetType. */
        public AssetType: string;

        /** Freeze AssetCode. */
        public AssetCode: Uint8Array;

        /** Freeze Quantities. */
        public Quantities: actions.IQuantityIndexField[];

        /** Freeze FreezePeriod. */
        public FreezePeriod: (number|Long);

        /** Freeze Timestamp. */
        public Timestamp: (number|Long);

        /**
         * Creates a new Freeze instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Freeze instance
         */
        public static create(properties?: actions.IFreeze): actions.Freeze;

        /**
         * Encodes the specified Freeze message. Does not implicitly {@link actions.Freeze.verify|verify} messages.
         * @param message Freeze message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: actions.IFreeze, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Freeze message, length delimited. Does not implicitly {@link actions.Freeze.verify|verify} messages.
         * @param message Freeze message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: actions.IFreeze, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Freeze message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Freeze
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): actions.Freeze;

        /**
         * Decodes a Freeze message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Freeze
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): actions.Freeze;

        /**
         * Verifies a Freeze message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Freeze message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Freeze
         */
        public static fromObject(object: { [k: string]: any }): actions.Freeze;

        /**
         * Creates a plain object from a Freeze message. Also converts values to other types if specified.
         * @param message Freeze
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: actions.Freeze, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Freeze to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a Thaw. */
    interface IThaw {

        /** Thaw FreezeTxId */
        FreezeTxId?: (Uint8Array|null);

        /** Thaw Timestamp */
        Timestamp?: (number|Long|null);
    }

    /** Represents a Thaw. */
    class Thaw implements IThaw {

        /**
         * Constructs a new Thaw.
         * @param [properties] Properties to set
         */
        constructor(properties?: actions.IThaw);

        /** Thaw FreezeTxId. */
        public FreezeTxId: Uint8Array;

        /** Thaw Timestamp. */
        public Timestamp: (number|Long);

        /**
         * Creates a new Thaw instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Thaw instance
         */
        public static create(properties?: actions.IThaw): actions.Thaw;

        /**
         * Encodes the specified Thaw message. Does not implicitly {@link actions.Thaw.verify|verify} messages.
         * @param message Thaw message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: actions.IThaw, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Thaw message, length delimited. Does not implicitly {@link actions.Thaw.verify|verify} messages.
         * @param message Thaw message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: actions.IThaw, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Thaw message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Thaw
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): actions.Thaw;

        /**
         * Decodes a Thaw message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Thaw
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): actions.Thaw;

        /**
         * Verifies a Thaw message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Thaw message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Thaw
         */
        public static fromObject(object: { [k: string]: any }): actions.Thaw;

        /**
         * Creates a plain object from a Thaw message. Also converts values to other types if specified.
         * @param message Thaw
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: actions.Thaw, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Thaw to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a Confiscation. */
    interface IConfiscation {

        /** Confiscation AssetType */
        AssetType?: (string|null);

        /** Confiscation AssetCode */
        AssetCode?: (Uint8Array|null);

        /** Confiscation Quantities */
        Quantities?: (actions.IQuantityIndexField[]|null);

        /** Confiscation DepositQty */
        DepositQty?: (number|Long|null);

        /** Confiscation Timestamp */
        Timestamp?: (number|Long|null);
    }

    /** Represents a Confiscation. */
    class Confiscation implements IConfiscation {

        /**
         * Constructs a new Confiscation.
         * @param [properties] Properties to set
         */
        constructor(properties?: actions.IConfiscation);

        /** Confiscation AssetType. */
        public AssetType: string;

        /** Confiscation AssetCode. */
        public AssetCode: Uint8Array;

        /** Confiscation Quantities. */
        public Quantities: actions.IQuantityIndexField[];

        /** Confiscation DepositQty. */
        public DepositQty: (number|Long);

        /** Confiscation Timestamp. */
        public Timestamp: (number|Long);

        /**
         * Creates a new Confiscation instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Confiscation instance
         */
        public static create(properties?: actions.IConfiscation): actions.Confiscation;

        /**
         * Encodes the specified Confiscation message. Does not implicitly {@link actions.Confiscation.verify|verify} messages.
         * @param message Confiscation message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: actions.IConfiscation, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Confiscation message, length delimited. Does not implicitly {@link actions.Confiscation.verify|verify} messages.
         * @param message Confiscation message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: actions.IConfiscation, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Confiscation message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Confiscation
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): actions.Confiscation;

        /**
         * Decodes a Confiscation message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Confiscation
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): actions.Confiscation;

        /**
         * Verifies a Confiscation message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Confiscation message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Confiscation
         */
        public static fromObject(object: { [k: string]: any }): actions.Confiscation;

        /**
         * Creates a plain object from a Confiscation message. Also converts values to other types if specified.
         * @param message Confiscation
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: actions.Confiscation, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Confiscation to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a Reconciliation. */
    interface IReconciliation {

        /** Reconciliation AssetType */
        AssetType?: (string|null);

        /** Reconciliation AssetCode */
        AssetCode?: (Uint8Array|null);

        /** Reconciliation Quantities */
        Quantities?: (actions.IQuantityIndexField[]|null);

        /** Reconciliation Timestamp */
        Timestamp?: (number|Long|null);
    }

    /** Represents a Reconciliation. */
    class Reconciliation implements IReconciliation {

        /**
         * Constructs a new Reconciliation.
         * @param [properties] Properties to set
         */
        constructor(properties?: actions.IReconciliation);

        /** Reconciliation AssetType. */
        public AssetType: string;

        /** Reconciliation AssetCode. */
        public AssetCode: Uint8Array;

        /** Reconciliation Quantities. */
        public Quantities: actions.IQuantityIndexField[];

        /** Reconciliation Timestamp. */
        public Timestamp: (number|Long);

        /**
         * Creates a new Reconciliation instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Reconciliation instance
         */
        public static create(properties?: actions.IReconciliation): actions.Reconciliation;

        /**
         * Encodes the specified Reconciliation message. Does not implicitly {@link actions.Reconciliation.verify|verify} messages.
         * @param message Reconciliation message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: actions.IReconciliation, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Reconciliation message, length delimited. Does not implicitly {@link actions.Reconciliation.verify|verify} messages.
         * @param message Reconciliation message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: actions.IReconciliation, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Reconciliation message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Reconciliation
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): actions.Reconciliation;

        /**
         * Decodes a Reconciliation message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Reconciliation
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): actions.Reconciliation;

        /**
         * Verifies a Reconciliation message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Reconciliation message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Reconciliation
         */
        public static fromObject(object: { [k: string]: any }): actions.Reconciliation;

        /**
         * Creates a plain object from a Reconciliation message. Also converts values to other types if specified.
         * @param message Reconciliation
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: actions.Reconciliation, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Reconciliation to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an Establishment. */
    interface IEstablishment {

        /** Establishment Message */
        Message?: (string|null);
    }

    /** Represents an Establishment. */
    class Establishment implements IEstablishment {

        /**
         * Constructs a new Establishment.
         * @param [properties] Properties to set
         */
        constructor(properties?: actions.IEstablishment);

        /** Establishment Message. */
        public Message: string;

        /**
         * Creates a new Establishment instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Establishment instance
         */
        public static create(properties?: actions.IEstablishment): actions.Establishment;

        /**
         * Encodes the specified Establishment message. Does not implicitly {@link actions.Establishment.verify|verify} messages.
         * @param message Establishment message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: actions.IEstablishment, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Establishment message, length delimited. Does not implicitly {@link actions.Establishment.verify|verify} messages.
         * @param message Establishment message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: actions.IEstablishment, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an Establishment message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Establishment
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): actions.Establishment;

        /**
         * Decodes an Establishment message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Establishment
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): actions.Establishment;

        /**
         * Verifies an Establishment message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an Establishment message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Establishment
         */
        public static fromObject(object: { [k: string]: any }): actions.Establishment;

        /**
         * Creates a plain object from an Establishment message. Also converts values to other types if specified.
         * @param message Establishment
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: actions.Establishment, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Establishment to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an Addition. */
    interface IAddition {

        /** Addition Message */
        Message?: (string|null);
    }

    /** Represents an Addition. */
    class Addition implements IAddition {

        /**
         * Constructs a new Addition.
         * @param [properties] Properties to set
         */
        constructor(properties?: actions.IAddition);

        /** Addition Message. */
        public Message: string;

        /**
         * Creates a new Addition instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Addition instance
         */
        public static create(properties?: actions.IAddition): actions.Addition;

        /**
         * Encodes the specified Addition message. Does not implicitly {@link actions.Addition.verify|verify} messages.
         * @param message Addition message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: actions.IAddition, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Addition message, length delimited. Does not implicitly {@link actions.Addition.verify|verify} messages.
         * @param message Addition message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: actions.IAddition, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an Addition message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Addition
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): actions.Addition;

        /**
         * Decodes an Addition message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Addition
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): actions.Addition;

        /**
         * Verifies an Addition message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an Addition message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Addition
         */
        public static fromObject(object: { [k: string]: any }): actions.Addition;

        /**
         * Creates a plain object from an Addition message. Also converts values to other types if specified.
         * @param message Addition
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: actions.Addition, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Addition to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an Alteration. */
    interface IAlteration {

        /** Alteration EntryTxID */
        EntryTxID?: (Uint8Array|null);

        /** Alteration Message */
        Message?: (string|null);
    }

    /** Represents an Alteration. */
    class Alteration implements IAlteration {

        /**
         * Constructs a new Alteration.
         * @param [properties] Properties to set
         */
        constructor(properties?: actions.IAlteration);

        /** Alteration EntryTxID. */
        public EntryTxID: Uint8Array;

        /** Alteration Message. */
        public Message: string;

        /**
         * Creates a new Alteration instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Alteration instance
         */
        public static create(properties?: actions.IAlteration): actions.Alteration;

        /**
         * Encodes the specified Alteration message. Does not implicitly {@link actions.Alteration.verify|verify} messages.
         * @param message Alteration message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: actions.IAlteration, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Alteration message, length delimited. Does not implicitly {@link actions.Alteration.verify|verify} messages.
         * @param message Alteration message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: actions.IAlteration, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an Alteration message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Alteration
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): actions.Alteration;

        /**
         * Decodes an Alteration message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Alteration
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): actions.Alteration;

        /**
         * Verifies an Alteration message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an Alteration message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Alteration
         */
        public static fromObject(object: { [k: string]: any }): actions.Alteration;

        /**
         * Creates a plain object from an Alteration message. Also converts values to other types if specified.
         * @param message Alteration
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: actions.Alteration, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Alteration to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a Removal. */
    interface IRemoval {

        /** Removal EntryTxID */
        EntryTxID?: (Uint8Array|null);

        /** Removal Message */
        Message?: (string|null);
    }

    /** Represents a Removal. */
    class Removal implements IRemoval {

        /**
         * Constructs a new Removal.
         * @param [properties] Properties to set
         */
        constructor(properties?: actions.IRemoval);

        /** Removal EntryTxID. */
        public EntryTxID: Uint8Array;

        /** Removal Message. */
        public Message: string;

        /**
         * Creates a new Removal instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Removal instance
         */
        public static create(properties?: actions.IRemoval): actions.Removal;

        /**
         * Encodes the specified Removal message. Does not implicitly {@link actions.Removal.verify|verify} messages.
         * @param message Removal message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: actions.IRemoval, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Removal message, length delimited. Does not implicitly {@link actions.Removal.verify|verify} messages.
         * @param message Removal message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: actions.IRemoval, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Removal message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Removal
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): actions.Removal;

        /**
         * Decodes a Removal message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Removal
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): actions.Removal;

        /**
         * Verifies a Removal message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Removal message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Removal
         */
        public static fromObject(object: { [k: string]: any }): actions.Removal;

        /**
         * Creates a plain object from a Removal message. Also converts values to other types if specified.
         * @param message Removal
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: actions.Removal, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Removal to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a Message. */
    interface IMessage {

        /** Message SenderIndexes */
        SenderIndexes?: (number[]|null);

        /** Message ReceiverIndexes */
        ReceiverIndexes?: (number[]|null);

        /** Message MessageCode */
        MessageCode?: (number|null);

        /** Message MessagePayload */
        MessagePayload?: (Uint8Array|null);
    }

    /** Represents a Message. */
    class Message implements IMessage {

        /**
         * Constructs a new Message.
         * @param [properties] Properties to set
         */
        constructor(properties?: actions.IMessage);

        /** Message SenderIndexes. */
        public SenderIndexes: number[];

        /** Message ReceiverIndexes. */
        public ReceiverIndexes: number[];

        /** Message MessageCode. */
        public MessageCode: number;

        /** Message MessagePayload. */
        public MessagePayload: Uint8Array;

        /**
         * Creates a new Message instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Message instance
         */
        public static create(properties?: actions.IMessage): actions.Message;

        /**
         * Encodes the specified Message message. Does not implicitly {@link actions.Message.verify|verify} messages.
         * @param message Message message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: actions.IMessage, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Message message, length delimited. Does not implicitly {@link actions.Message.verify|verify} messages.
         * @param message Message message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: actions.IMessage, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Message message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Message
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): actions.Message;

        /**
         * Decodes a Message message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Message
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): actions.Message;

        /**
         * Verifies a Message message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Message message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Message
         */
        public static fromObject(object: { [k: string]: any }): actions.Message;

        /**
         * Creates a plain object from a Message message. Also converts values to other types if specified.
         * @param message Message
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: actions.Message, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Message to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a Rejection. */
    interface IRejection {

        /** Rejection AddressIndexes */
        AddressIndexes?: (number[]|null);

        /** Rejection RejectAddressIndex */
        RejectAddressIndex?: (number|null);

        /** Rejection RejectionCode */
        RejectionCode?: (number|null);

        /** Rejection Message */
        Message?: (string|null);

        /** Rejection Timestamp */
        Timestamp?: (number|Long|null);
    }

    /** Represents a Rejection. */
    class Rejection implements IRejection {

        /**
         * Constructs a new Rejection.
         * @param [properties] Properties to set
         */
        constructor(properties?: actions.IRejection);

        /** Rejection AddressIndexes. */
        public AddressIndexes: number[];

        /** Rejection RejectAddressIndex. */
        public RejectAddressIndex: number;

        /** Rejection RejectionCode. */
        public RejectionCode: number;

        /** Rejection Message. */
        public Message: string;

        /** Rejection Timestamp. */
        public Timestamp: (number|Long);

        /**
         * Creates a new Rejection instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Rejection instance
         */
        public static create(properties?: actions.IRejection): actions.Rejection;

        /**
         * Encodes the specified Rejection message. Does not implicitly {@link actions.Rejection.verify|verify} messages.
         * @param message Rejection message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: actions.IRejection, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Rejection message, length delimited. Does not implicitly {@link actions.Rejection.verify|verify} messages.
         * @param message Rejection message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: actions.IRejection, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Rejection message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Rejection
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): actions.Rejection;

        /**
         * Decodes a Rejection message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Rejection
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): actions.Rejection;

        /**
         * Verifies a Rejection message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a Rejection message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Rejection
         */
        public static fromObject(object: { [k: string]: any }): actions.Rejection;

        /**
         * Creates a plain object from a Rejection message. Also converts values to other types if specified.
         * @param message Rejection
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: actions.Rejection, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Rejection to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an AdministratorField. */
    interface IAdministratorField {

        /** AdministratorField Type */
        Type?: (number|null);

        /** AdministratorField Name */
        Name?: (string|null);
    }

    /** Represents an AdministratorField. */
    class AdministratorField implements IAdministratorField {

        /**
         * Constructs a new AdministratorField.
         * @param [properties] Properties to set
         */
        constructor(properties?: actions.IAdministratorField);

        /** AdministratorField Type. */
        public Type: number;

        /** AdministratorField Name. */
        public Name: string;

        /**
         * Creates a new AdministratorField instance using the specified properties.
         * @param [properties] Properties to set
         * @returns AdministratorField instance
         */
        public static create(properties?: actions.IAdministratorField): actions.AdministratorField;

        /**
         * Encodes the specified AdministratorField message. Does not implicitly {@link actions.AdministratorField.verify|verify} messages.
         * @param message AdministratorField message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: actions.IAdministratorField, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified AdministratorField message, length delimited. Does not implicitly {@link actions.AdministratorField.verify|verify} messages.
         * @param message AdministratorField message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: actions.IAdministratorField, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an AdministratorField message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns AdministratorField
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): actions.AdministratorField;

        /**
         * Decodes an AdministratorField message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns AdministratorField
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): actions.AdministratorField;

        /**
         * Verifies an AdministratorField message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an AdministratorField message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns AdministratorField
         */
        public static fromObject(object: { [k: string]: any }): actions.AdministratorField;

        /**
         * Creates a plain object from an AdministratorField message. Also converts values to other types if specified.
         * @param message AdministratorField
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: actions.AdministratorField, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this AdministratorField to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an AdminIdentityCertificateField. */
    interface IAdminIdentityCertificateField {

        /** AdminIdentityCertificateField EntityContract */
        EntityContract?: (Uint8Array|null);

        /** AdminIdentityCertificateField Signature */
        Signature?: (Uint8Array|null);

        /** AdminIdentityCertificateField BlockHeight */
        BlockHeight?: (number|null);

        /** AdminIdentityCertificateField Expiration */
        Expiration?: (number|Long|null);
    }

    /** Represents an AdminIdentityCertificateField. */
    class AdminIdentityCertificateField implements IAdminIdentityCertificateField {

        /**
         * Constructs a new AdminIdentityCertificateField.
         * @param [properties] Properties to set
         */
        constructor(properties?: actions.IAdminIdentityCertificateField);

        /** AdminIdentityCertificateField EntityContract. */
        public EntityContract: Uint8Array;

        /** AdminIdentityCertificateField Signature. */
        public Signature: Uint8Array;

        /** AdminIdentityCertificateField BlockHeight. */
        public BlockHeight: number;

        /** AdminIdentityCertificateField Expiration. */
        public Expiration: (number|Long);

        /**
         * Creates a new AdminIdentityCertificateField instance using the specified properties.
         * @param [properties] Properties to set
         * @returns AdminIdentityCertificateField instance
         */
        public static create(properties?: actions.IAdminIdentityCertificateField): actions.AdminIdentityCertificateField;

        /**
         * Encodes the specified AdminIdentityCertificateField message. Does not implicitly {@link actions.AdminIdentityCertificateField.verify|verify} messages.
         * @param message AdminIdentityCertificateField message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: actions.IAdminIdentityCertificateField, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified AdminIdentityCertificateField message, length delimited. Does not implicitly {@link actions.AdminIdentityCertificateField.verify|verify} messages.
         * @param message AdminIdentityCertificateField message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: actions.IAdminIdentityCertificateField, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an AdminIdentityCertificateField message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns AdminIdentityCertificateField
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): actions.AdminIdentityCertificateField;

        /**
         * Decodes an AdminIdentityCertificateField message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns AdminIdentityCertificateField
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): actions.AdminIdentityCertificateField;

        /**
         * Verifies an AdminIdentityCertificateField message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an AdminIdentityCertificateField message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns AdminIdentityCertificateField
         */
        public static fromObject(object: { [k: string]: any }): actions.AdminIdentityCertificateField;

        /**
         * Creates a plain object from an AdminIdentityCertificateField message. Also converts values to other types if specified.
         * @param message AdminIdentityCertificateField
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: actions.AdminIdentityCertificateField, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this AdminIdentityCertificateField to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an AmendmentField. */
    interface IAmendmentField {

        /** AmendmentField FieldIndexPath */
        FieldIndexPath?: (Uint8Array|null);

        /** AmendmentField Operation */
        Operation?: (number|null);

        /** AmendmentField Data */
        Data?: (Uint8Array|null);
    }

    /** Represents an AmendmentField. */
    class AmendmentField implements IAmendmentField {

        /**
         * Constructs a new AmendmentField.
         * @param [properties] Properties to set
         */
        constructor(properties?: actions.IAmendmentField);

        /** AmendmentField FieldIndexPath. */
        public FieldIndexPath: Uint8Array;

        /** AmendmentField Operation. */
        public Operation: number;

        /** AmendmentField Data. */
        public Data: Uint8Array;

        /**
         * Creates a new AmendmentField instance using the specified properties.
         * @param [properties] Properties to set
         * @returns AmendmentField instance
         */
        public static create(properties?: actions.IAmendmentField): actions.AmendmentField;

        /**
         * Encodes the specified AmendmentField message. Does not implicitly {@link actions.AmendmentField.verify|verify} messages.
         * @param message AmendmentField message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: actions.IAmendmentField, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified AmendmentField message, length delimited. Does not implicitly {@link actions.AmendmentField.verify|verify} messages.
         * @param message AmendmentField message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: actions.IAmendmentField, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an AmendmentField message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns AmendmentField
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): actions.AmendmentField;

        /**
         * Decodes an AmendmentField message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns AmendmentField
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): actions.AmendmentField;

        /**
         * Verifies an AmendmentField message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an AmendmentField message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns AmendmentField
         */
        public static fromObject(object: { [k: string]: any }): actions.AmendmentField;

        /**
         * Creates a plain object from an AmendmentField message. Also converts values to other types if specified.
         * @param message AmendmentField
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: actions.AmendmentField, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this AmendmentField to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an AssetReceiverField. */
    interface IAssetReceiverField {

        /** AssetReceiverField Address */
        Address?: (Uint8Array|null);

        /** AssetReceiverField Quantity */
        Quantity?: (number|Long|null);

        /** AssetReceiverField OracleSigAlgorithm */
        OracleSigAlgorithm?: (number|null);

        /** AssetReceiverField OracleIndex */
        OracleIndex?: (number|null);

        /** AssetReceiverField OracleConfirmationSig */
        OracleConfirmationSig?: (Uint8Array|null);

        /** AssetReceiverField OracleSigBlockHeight */
        OracleSigBlockHeight?: (number|null);

        /** AssetReceiverField OracleSigExpiry */
        OracleSigExpiry?: (number|Long|null);
    }

    /** Represents an AssetReceiverField. */
    class AssetReceiverField implements IAssetReceiverField {

        /**
         * Constructs a new AssetReceiverField.
         * @param [properties] Properties to set
         */
        constructor(properties?: actions.IAssetReceiverField);

        /** AssetReceiverField Address. */
        public Address: Uint8Array;

        /** AssetReceiverField Quantity. */
        public Quantity: (number|Long);

        /** AssetReceiverField OracleSigAlgorithm. */
        public OracleSigAlgorithm: number;

        /** AssetReceiverField OracleIndex. */
        public OracleIndex: number;

        /** AssetReceiverField OracleConfirmationSig. */
        public OracleConfirmationSig: Uint8Array;

        /** AssetReceiverField OracleSigBlockHeight. */
        public OracleSigBlockHeight: number;

        /** AssetReceiverField OracleSigExpiry. */
        public OracleSigExpiry: (number|Long);

        /**
         * Creates a new AssetReceiverField instance using the specified properties.
         * @param [properties] Properties to set
         * @returns AssetReceiverField instance
         */
        public static create(properties?: actions.IAssetReceiverField): actions.AssetReceiverField;

        /**
         * Encodes the specified AssetReceiverField message. Does not implicitly {@link actions.AssetReceiverField.verify|verify} messages.
         * @param message AssetReceiverField message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: actions.IAssetReceiverField, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified AssetReceiverField message, length delimited. Does not implicitly {@link actions.AssetReceiverField.verify|verify} messages.
         * @param message AssetReceiverField message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: actions.IAssetReceiverField, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an AssetReceiverField message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns AssetReceiverField
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): actions.AssetReceiverField;

        /**
         * Decodes an AssetReceiverField message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns AssetReceiverField
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): actions.AssetReceiverField;

        /**
         * Verifies an AssetReceiverField message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an AssetReceiverField message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns AssetReceiverField
         */
        public static fromObject(object: { [k: string]: any }): actions.AssetReceiverField;

        /**
         * Creates a plain object from an AssetReceiverField message. Also converts values to other types if specified.
         * @param message AssetReceiverField
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: actions.AssetReceiverField, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this AssetReceiverField to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an AssetSettlementField. */
    interface IAssetSettlementField {

        /** AssetSettlementField ContractIndex */
        ContractIndex?: (number|null);

        /** AssetSettlementField AssetType */
        AssetType?: (string|null);

        /** AssetSettlementField AssetCode */
        AssetCode?: (Uint8Array|null);

        /** AssetSettlementField Settlements */
        Settlements?: (actions.IQuantityIndexField[]|null);
    }

    /** Represents an AssetSettlementField. */
    class AssetSettlementField implements IAssetSettlementField {

        /**
         * Constructs a new AssetSettlementField.
         * @param [properties] Properties to set
         */
        constructor(properties?: actions.IAssetSettlementField);

        /** AssetSettlementField ContractIndex. */
        public ContractIndex: number;

        /** AssetSettlementField AssetType. */
        public AssetType: string;

        /** AssetSettlementField AssetCode. */
        public AssetCode: Uint8Array;

        /** AssetSettlementField Settlements. */
        public Settlements: actions.IQuantityIndexField[];

        /**
         * Creates a new AssetSettlementField instance using the specified properties.
         * @param [properties] Properties to set
         * @returns AssetSettlementField instance
         */
        public static create(properties?: actions.IAssetSettlementField): actions.AssetSettlementField;

        /**
         * Encodes the specified AssetSettlementField message. Does not implicitly {@link actions.AssetSettlementField.verify|verify} messages.
         * @param message AssetSettlementField message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: actions.IAssetSettlementField, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified AssetSettlementField message, length delimited. Does not implicitly {@link actions.AssetSettlementField.verify|verify} messages.
         * @param message AssetSettlementField message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: actions.IAssetSettlementField, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an AssetSettlementField message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns AssetSettlementField
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): actions.AssetSettlementField;

        /**
         * Decodes an AssetSettlementField message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns AssetSettlementField
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): actions.AssetSettlementField;

        /**
         * Verifies an AssetSettlementField message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an AssetSettlementField message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns AssetSettlementField
         */
        public static fromObject(object: { [k: string]: any }): actions.AssetSettlementField;

        /**
         * Creates a plain object from an AssetSettlementField message. Also converts values to other types if specified.
         * @param message AssetSettlementField
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: actions.AssetSettlementField, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this AssetSettlementField to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an AssetTransferField. */
    interface IAssetTransferField {

        /** AssetTransferField ContractIndex */
        ContractIndex?: (number|null);

        /** AssetTransferField AssetType */
        AssetType?: (string|null);

        /** AssetTransferField AssetCode */
        AssetCode?: (Uint8Array|null);

        /** AssetTransferField AssetSenders */
        AssetSenders?: (actions.IQuantityIndexField[]|null);

        /** AssetTransferField AssetReceivers */
        AssetReceivers?: (actions.IAssetReceiverField[]|null);
    }

    /** Represents an AssetTransferField. */
    class AssetTransferField implements IAssetTransferField {

        /**
         * Constructs a new AssetTransferField.
         * @param [properties] Properties to set
         */
        constructor(properties?: actions.IAssetTransferField);

        /** AssetTransferField ContractIndex. */
        public ContractIndex: number;

        /** AssetTransferField AssetType. */
        public AssetType: string;

        /** AssetTransferField AssetCode. */
        public AssetCode: Uint8Array;

        /** AssetTransferField AssetSenders. */
        public AssetSenders: actions.IQuantityIndexField[];

        /** AssetTransferField AssetReceivers. */
        public AssetReceivers: actions.IAssetReceiverField[];

        /**
         * Creates a new AssetTransferField instance using the specified properties.
         * @param [properties] Properties to set
         * @returns AssetTransferField instance
         */
        public static create(properties?: actions.IAssetTransferField): actions.AssetTransferField;

        /**
         * Encodes the specified AssetTransferField message. Does not implicitly {@link actions.AssetTransferField.verify|verify} messages.
         * @param message AssetTransferField message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: actions.IAssetTransferField, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified AssetTransferField message, length delimited. Does not implicitly {@link actions.AssetTransferField.verify|verify} messages.
         * @param message AssetTransferField message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: actions.IAssetTransferField, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an AssetTransferField message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns AssetTransferField
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): actions.AssetTransferField;

        /**
         * Decodes an AssetTransferField message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns AssetTransferField
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): actions.AssetTransferField;

        /**
         * Verifies an AssetTransferField message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an AssetTransferField message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns AssetTransferField
         */
        public static fromObject(object: { [k: string]: any }): actions.AssetTransferField;

        /**
         * Creates a plain object from an AssetTransferField message. Also converts values to other types if specified.
         * @param message AssetTransferField
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: actions.AssetTransferField, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this AssetTransferField to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a DocumentField. */
    interface IDocumentField {

        /** DocumentField Name */
        Name?: (string|null);

        /** DocumentField Type */
        Type?: (string|null);

        /** DocumentField Contents */
        Contents?: (Uint8Array|null);
    }

    /** Represents a DocumentField. */
    class DocumentField implements IDocumentField {

        /**
         * Constructs a new DocumentField.
         * @param [properties] Properties to set
         */
        constructor(properties?: actions.IDocumentField);

        /** DocumentField Name. */
        public Name: string;

        /** DocumentField Type. */
        public Type: string;

        /** DocumentField Contents. */
        public Contents: Uint8Array;

        /**
         * Creates a new DocumentField instance using the specified properties.
         * @param [properties] Properties to set
         * @returns DocumentField instance
         */
        public static create(properties?: actions.IDocumentField): actions.DocumentField;

        /**
         * Encodes the specified DocumentField message. Does not implicitly {@link actions.DocumentField.verify|verify} messages.
         * @param message DocumentField message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: actions.IDocumentField, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified DocumentField message, length delimited. Does not implicitly {@link actions.DocumentField.verify|verify} messages.
         * @param message DocumentField message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: actions.IDocumentField, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DocumentField message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns DocumentField
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): actions.DocumentField;

        /**
         * Decodes a DocumentField message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns DocumentField
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): actions.DocumentField;

        /**
         * Verifies a DocumentField message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a DocumentField message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns DocumentField
         */
        public static fromObject(object: { [k: string]: any }): actions.DocumentField;

        /**
         * Creates a plain object from a DocumentField message. Also converts values to other types if specified.
         * @param message DocumentField
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: actions.DocumentField, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this DocumentField to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an EntityField. */
    interface IEntityField {

        /** EntityField Name */
        Name?: (string|null);

        /** EntityField Type */
        Type?: (string|null);

        /** EntityField LEI */
        LEI?: (string|null);

        /** EntityField UnitNumber */
        UnitNumber?: (string|null);

        /** EntityField BuildingNumber */
        BuildingNumber?: (string|null);

        /** EntityField Street */
        Street?: (string|null);

        /** EntityField SuburbCity */
        SuburbCity?: (string|null);

        /** EntityField TerritoryStateProvinceCode */
        TerritoryStateProvinceCode?: (string|null);

        /** EntityField CountryCode */
        CountryCode?: (string|null);

        /** EntityField PostalZIPCode */
        PostalZIPCode?: (string|null);

        /** EntityField EmailAddress */
        EmailAddress?: (string|null);

        /** EntityField PhoneNumber */
        PhoneNumber?: (string|null);

        /** EntityField Administration */
        Administration?: (actions.IAdministratorField[]|null);

        /** EntityField Management */
        Management?: (actions.IManagerField[]|null);

        /** EntityField DomainName */
        DomainName?: (string|null);

        /** EntityField PaymailHandle */
        PaymailHandle?: (string|null);
    }

    /** Represents an EntityField. */
    class EntityField implements IEntityField {

        /**
         * Constructs a new EntityField.
         * @param [properties] Properties to set
         */
        constructor(properties?: actions.IEntityField);

        /** EntityField Name. */
        public Name: string;

        /** EntityField Type. */
        public Type: string;

        /** EntityField LEI. */
        public LEI: string;

        /** EntityField UnitNumber. */
        public UnitNumber: string;

        /** EntityField BuildingNumber. */
        public BuildingNumber: string;

        /** EntityField Street. */
        public Street: string;

        /** EntityField SuburbCity. */
        public SuburbCity: string;

        /** EntityField TerritoryStateProvinceCode. */
        public TerritoryStateProvinceCode: string;

        /** EntityField CountryCode. */
        public CountryCode: string;

        /** EntityField PostalZIPCode. */
        public PostalZIPCode: string;

        /** EntityField EmailAddress. */
        public EmailAddress: string;

        /** EntityField PhoneNumber. */
        public PhoneNumber: string;

        /** EntityField Administration. */
        public Administration: actions.IAdministratorField[];

        /** EntityField Management. */
        public Management: actions.IManagerField[];

        /** EntityField DomainName. */
        public DomainName: string;

        /** EntityField PaymailHandle. */
        public PaymailHandle: string;

        /**
         * Creates a new EntityField instance using the specified properties.
         * @param [properties] Properties to set
         * @returns EntityField instance
         */
        public static create(properties?: actions.IEntityField): actions.EntityField;

        /**
         * Encodes the specified EntityField message. Does not implicitly {@link actions.EntityField.verify|verify} messages.
         * @param message EntityField message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: actions.IEntityField, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified EntityField message, length delimited. Does not implicitly {@link actions.EntityField.verify|verify} messages.
         * @param message EntityField message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: actions.IEntityField, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an EntityField message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns EntityField
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): actions.EntityField;

        /**
         * Decodes an EntityField message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns EntityField
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): actions.EntityField;

        /**
         * Verifies an EntityField message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an EntityField message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns EntityField
         */
        public static fromObject(object: { [k: string]: any }): actions.EntityField;

        /**
         * Creates a plain object from an EntityField message. Also converts values to other types if specified.
         * @param message EntityField
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: actions.EntityField, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this EntityField to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ManagerField. */
    interface IManagerField {

        /** ManagerField Type */
        Type?: (number|null);

        /** ManagerField Name */
        Name?: (string|null);
    }

    /** Represents a ManagerField. */
    class ManagerField implements IManagerField {

        /**
         * Constructs a new ManagerField.
         * @param [properties] Properties to set
         */
        constructor(properties?: actions.IManagerField);

        /** ManagerField Type. */
        public Type: number;

        /** ManagerField Name. */
        public Name: string;

        /**
         * Creates a new ManagerField instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ManagerField instance
         */
        public static create(properties?: actions.IManagerField): actions.ManagerField;

        /**
         * Encodes the specified ManagerField message. Does not implicitly {@link actions.ManagerField.verify|verify} messages.
         * @param message ManagerField message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: actions.IManagerField, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ManagerField message, length delimited. Does not implicitly {@link actions.ManagerField.verify|verify} messages.
         * @param message ManagerField message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: actions.IManagerField, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ManagerField message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ManagerField
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): actions.ManagerField;

        /**
         * Decodes a ManagerField message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ManagerField
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): actions.ManagerField;

        /**
         * Verifies a ManagerField message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ManagerField message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ManagerField
         */
        public static fromObject(object: { [k: string]: any }): actions.ManagerField;

        /**
         * Creates a plain object from a ManagerField message. Also converts values to other types if specified.
         * @param message ManagerField
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: actions.ManagerField, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ManagerField to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an OracleField. */
    interface IOracleField {

        /** OracleField OracleTypes */
        OracleTypes?: (number[]|null);

        /** OracleField EntityContract */
        EntityContract?: (Uint8Array|null);
    }

    /** Represents an OracleField. */
    class OracleField implements IOracleField {

        /**
         * Constructs a new OracleField.
         * @param [properties] Properties to set
         */
        constructor(properties?: actions.IOracleField);

        /** OracleField OracleTypes. */
        public OracleTypes: number[];

        /** OracleField EntityContract. */
        public EntityContract: Uint8Array;

        /**
         * Creates a new OracleField instance using the specified properties.
         * @param [properties] Properties to set
         * @returns OracleField instance
         */
        public static create(properties?: actions.IOracleField): actions.OracleField;

        /**
         * Encodes the specified OracleField message. Does not implicitly {@link actions.OracleField.verify|verify} messages.
         * @param message OracleField message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: actions.IOracleField, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified OracleField message, length delimited. Does not implicitly {@link actions.OracleField.verify|verify} messages.
         * @param message OracleField message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: actions.IOracleField, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an OracleField message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns OracleField
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): actions.OracleField;

        /**
         * Decodes an OracleField message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns OracleField
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): actions.OracleField;

        /**
         * Verifies an OracleField message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an OracleField message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns OracleField
         */
        public static fromObject(object: { [k: string]: any }): actions.OracleField;

        /**
         * Creates a plain object from an OracleField message. Also converts values to other types if specified.
         * @param message OracleField
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: actions.OracleField, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this OracleField to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a QuantityIndexField. */
    interface IQuantityIndexField {

        /** QuantityIndexField Index */
        Index?: (number|null);

        /** QuantityIndexField Quantity */
        Quantity?: (number|Long|null);
    }

    /** Represents a QuantityIndexField. */
    class QuantityIndexField implements IQuantityIndexField {

        /**
         * Constructs a new QuantityIndexField.
         * @param [properties] Properties to set
         */
        constructor(properties?: actions.IQuantityIndexField);

        /** QuantityIndexField Index. */
        public Index: number;

        /** QuantityIndexField Quantity. */
        public Quantity: (number|Long);

        /**
         * Creates a new QuantityIndexField instance using the specified properties.
         * @param [properties] Properties to set
         * @returns QuantityIndexField instance
         */
        public static create(properties?: actions.IQuantityIndexField): actions.QuantityIndexField;

        /**
         * Encodes the specified QuantityIndexField message. Does not implicitly {@link actions.QuantityIndexField.verify|verify} messages.
         * @param message QuantityIndexField message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: actions.IQuantityIndexField, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified QuantityIndexField message, length delimited. Does not implicitly {@link actions.QuantityIndexField.verify|verify} messages.
         * @param message QuantityIndexField message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: actions.IQuantityIndexField, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a QuantityIndexField message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns QuantityIndexField
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): actions.QuantityIndexField;

        /**
         * Decodes a QuantityIndexField message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns QuantityIndexField
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): actions.QuantityIndexField;

        /**
         * Verifies a QuantityIndexField message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a QuantityIndexField message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns QuantityIndexField
         */
        public static fromObject(object: { [k: string]: any }): actions.QuantityIndexField;

        /**
         * Creates a plain object from a QuantityIndexField message. Also converts values to other types if specified.
         * @param message QuantityIndexField
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: actions.QuantityIndexField, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this QuantityIndexField to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ReferenceTransactionField. */
    interface IReferenceTransactionField {

        /** ReferenceTransactionField Transaction */
        Transaction?: (Uint8Array|null);

        /** ReferenceTransactionField Outputs */
        Outputs?: (Uint8Array[]|null);
    }

    /** Represents a ReferenceTransactionField. */
    class ReferenceTransactionField implements IReferenceTransactionField {

        /**
         * Constructs a new ReferenceTransactionField.
         * @param [properties] Properties to set
         */
        constructor(properties?: actions.IReferenceTransactionField);

        /** ReferenceTransactionField Transaction. */
        public Transaction: Uint8Array;

        /** ReferenceTransactionField Outputs. */
        public Outputs: Uint8Array[];

        /**
         * Creates a new ReferenceTransactionField instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ReferenceTransactionField instance
         */
        public static create(properties?: actions.IReferenceTransactionField): actions.ReferenceTransactionField;

        /**
         * Encodes the specified ReferenceTransactionField message. Does not implicitly {@link actions.ReferenceTransactionField.verify|verify} messages.
         * @param message ReferenceTransactionField message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: actions.IReferenceTransactionField, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ReferenceTransactionField message, length delimited. Does not implicitly {@link actions.ReferenceTransactionField.verify|verify} messages.
         * @param message ReferenceTransactionField message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: actions.IReferenceTransactionField, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ReferenceTransactionField message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ReferenceTransactionField
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): actions.ReferenceTransactionField;

        /**
         * Decodes a ReferenceTransactionField message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ReferenceTransactionField
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): actions.ReferenceTransactionField;

        /**
         * Verifies a ReferenceTransactionField message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ReferenceTransactionField message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ReferenceTransactionField
         */
        public static fromObject(object: { [k: string]: any }): actions.ReferenceTransactionField;

        /**
         * Creates a plain object from a ReferenceTransactionField message. Also converts values to other types if specified.
         * @param message ReferenceTransactionField
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: actions.ReferenceTransactionField, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ReferenceTransactionField to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ServiceField. */
    interface IServiceField {

        /** ServiceField Type */
        Type?: (number|null);

        /** ServiceField URL */
        URL?: (string|null);

        /** ServiceField PublicKey */
        PublicKey?: (Uint8Array|null);
    }

    /** Represents a ServiceField. */
    class ServiceField implements IServiceField {

        /**
         * Constructs a new ServiceField.
         * @param [properties] Properties to set
         */
        constructor(properties?: actions.IServiceField);

        /** ServiceField Type. */
        public Type: number;

        /** ServiceField URL. */
        public URL: string;

        /** ServiceField PublicKey. */
        public PublicKey: Uint8Array;

        /**
         * Creates a new ServiceField instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ServiceField instance
         */
        public static create(properties?: actions.IServiceField): actions.ServiceField;

        /**
         * Encodes the specified ServiceField message. Does not implicitly {@link actions.ServiceField.verify|verify} messages.
         * @param message ServiceField message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: actions.IServiceField, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ServiceField message, length delimited. Does not implicitly {@link actions.ServiceField.verify|verify} messages.
         * @param message ServiceField message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: actions.IServiceField, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ServiceField message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ServiceField
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): actions.ServiceField;

        /**
         * Decodes a ServiceField message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ServiceField
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): actions.ServiceField;

        /**
         * Verifies a ServiceField message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ServiceField message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ServiceField
         */
        public static fromObject(object: { [k: string]: any }): actions.ServiceField;

        /**
         * Creates a plain object from a ServiceField message. Also converts values to other types if specified.
         * @param message ServiceField
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: actions.ServiceField, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ServiceField to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a TargetAddressField. */
    interface ITargetAddressField {

        /** TargetAddressField Address */
        Address?: (Uint8Array|null);

        /** TargetAddressField Quantity */
        Quantity?: (number|Long|null);
    }

    /** Represents a TargetAddressField. */
    class TargetAddressField implements ITargetAddressField {

        /**
         * Constructs a new TargetAddressField.
         * @param [properties] Properties to set
         */
        constructor(properties?: actions.ITargetAddressField);

        /** TargetAddressField Address. */
        public Address: Uint8Array;

        /** TargetAddressField Quantity. */
        public Quantity: (number|Long);

        /**
         * Creates a new TargetAddressField instance using the specified properties.
         * @param [properties] Properties to set
         * @returns TargetAddressField instance
         */
        public static create(properties?: actions.ITargetAddressField): actions.TargetAddressField;

        /**
         * Encodes the specified TargetAddressField message. Does not implicitly {@link actions.TargetAddressField.verify|verify} messages.
         * @param message TargetAddressField message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: actions.ITargetAddressField, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified TargetAddressField message, length delimited. Does not implicitly {@link actions.TargetAddressField.verify|verify} messages.
         * @param message TargetAddressField message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: actions.ITargetAddressField, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a TargetAddressField message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns TargetAddressField
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): actions.TargetAddressField;

        /**
         * Decodes a TargetAddressField message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns TargetAddressField
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): actions.TargetAddressField;

        /**
         * Verifies a TargetAddressField message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a TargetAddressField message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns TargetAddressField
         */
        public static fromObject(object: { [k: string]: any }): actions.TargetAddressField;

        /**
         * Creates a plain object from a TargetAddressField message. Also converts values to other types if specified.
         * @param message TargetAddressField
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: actions.TargetAddressField, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this TargetAddressField to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a VotingSystemField. */
    interface IVotingSystemField {

        /** VotingSystemField Name */
        Name?: (string|null);

        /** VotingSystemField VoteType */
        VoteType?: (string|null);

        /** VotingSystemField TallyLogic */
        TallyLogic?: (number|null);

        /** VotingSystemField ThresholdPercentage */
        ThresholdPercentage?: (number|null);

        /** VotingSystemField VoteMultiplierPermitted */
        VoteMultiplierPermitted?: (boolean|null);

        /** VotingSystemField HolderProposalFee */
        HolderProposalFee?: (number|Long|null);
    }

    /** Represents a VotingSystemField. */
    class VotingSystemField implements IVotingSystemField {

        /**
         * Constructs a new VotingSystemField.
         * @param [properties] Properties to set
         */
        constructor(properties?: actions.IVotingSystemField);

        /** VotingSystemField Name. */
        public Name: string;

        /** VotingSystemField VoteType. */
        public VoteType: string;

        /** VotingSystemField TallyLogic. */
        public TallyLogic: number;

        /** VotingSystemField ThresholdPercentage. */
        public ThresholdPercentage: number;

        /** VotingSystemField VoteMultiplierPermitted. */
        public VoteMultiplierPermitted: boolean;

        /** VotingSystemField HolderProposalFee. */
        public HolderProposalFee: (number|Long);

        /**
         * Creates a new VotingSystemField instance using the specified properties.
         * @param [properties] Properties to set
         * @returns VotingSystemField instance
         */
        public static create(properties?: actions.IVotingSystemField): actions.VotingSystemField;

        /**
         * Encodes the specified VotingSystemField message. Does not implicitly {@link actions.VotingSystemField.verify|verify} messages.
         * @param message VotingSystemField message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: actions.IVotingSystemField, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified VotingSystemField message, length delimited. Does not implicitly {@link actions.VotingSystemField.verify|verify} messages.
         * @param message VotingSystemField message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: actions.IVotingSystemField, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a VotingSystemField message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns VotingSystemField
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): actions.VotingSystemField;

        /**
         * Decodes a VotingSystemField message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns VotingSystemField
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): actions.VotingSystemField;

        /**
         * Verifies a VotingSystemField message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a VotingSystemField message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns VotingSystemField
         */
        public static fromObject(object: { [k: string]: any }): actions.VotingSystemField;

        /**
         * Creates a plain object from a VotingSystemField message. Also converts values to other types if specified.
         * @param message VotingSystemField
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: actions.VotingSystemField, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this VotingSystemField to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }
}
