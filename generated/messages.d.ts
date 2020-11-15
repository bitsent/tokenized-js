import * as Long from "long";

import * as $protobuf from "protobufjs";
/** Namespace messages. */
export namespace messages {

    /** Properties of a PublicMessage. */
    interface IPublicMessage {

        /** PublicMessage Timestamp */
        Timestamp?: (number|Long|null);

        /** PublicMessage Subject */
        Subject?: (string|null);

        /** PublicMessage Regarding */
        Regarding?: (messages.IOutpointField|null);

        /** PublicMessage PublicMessage */
        PublicMessage?: (messages.IDocumentField|null);

        /** PublicMessage Attachments */
        Attachments?: (messages.IDocumentField[]|null);
    }

    /** Represents a PublicMessage. */
    class PublicMessage implements IPublicMessage {

        /**
         * Constructs a new PublicMessage.
         * @param [properties] Properties to set
         */
        constructor(properties?: messages.IPublicMessage);

        /** PublicMessage Timestamp. */
        public Timestamp: (number|Long);

        /** PublicMessage Subject. */
        public Subject: string;

        /** PublicMessage Regarding. */
        public Regarding?: (messages.IOutpointField|null);

        /** PublicMessage PublicMessage. */
        public PublicMessage?: (messages.IDocumentField|null);

        /** PublicMessage Attachments. */
        public Attachments: messages.IDocumentField[];

        /**
         * Creates a new PublicMessage instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PublicMessage instance
         */
        public static create(properties?: messages.IPublicMessage): messages.PublicMessage;

        /**
         * Encodes the specified PublicMessage message. Does not implicitly {@link messages.PublicMessage.verify|verify} messages.
         * @param message PublicMessage message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: messages.IPublicMessage, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified PublicMessage message, length delimited. Does not implicitly {@link messages.PublicMessage.verify|verify} messages.
         * @param message PublicMessage message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: messages.IPublicMessage, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PublicMessage message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PublicMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): messages.PublicMessage;

        /**
         * Decodes a PublicMessage message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PublicMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): messages.PublicMessage;

        /**
         * Verifies a PublicMessage message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a PublicMessage message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PublicMessage
         */
        public static fromObject(object: { [k: string]: any }): messages.PublicMessage;

        /**
         * Creates a plain object from a PublicMessage message. Also converts values to other types if specified.
         * @param message PublicMessage
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: messages.PublicMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PublicMessage to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a PrivateMessage. */
    interface IPrivateMessage {

        /** PrivateMessage Timestamp */
        Timestamp?: (number|Long|null);

        /** PrivateMessage Subject */
        Subject?: (string|null);

        /** PrivateMessage Regarding */
        Regarding?: (messages.IOutpointField|null);

        /** PrivateMessage PrivateMessage */
        PrivateMessage?: (messages.IDocumentField|null);

        /** PrivateMessage Attachments */
        Attachments?: (messages.IDocumentField[]|null);
    }

    /** Represents a PrivateMessage. */
    class PrivateMessage implements IPrivateMessage {

        /**
         * Constructs a new PrivateMessage.
         * @param [properties] Properties to set
         */
        constructor(properties?: messages.IPrivateMessage);

        /** PrivateMessage Timestamp. */
        public Timestamp: (number|Long);

        /** PrivateMessage Subject. */
        public Subject: string;

        /** PrivateMessage Regarding. */
        public Regarding?: (messages.IOutpointField|null);

        /** PrivateMessage PrivateMessage. */
        public PrivateMessage?: (messages.IDocumentField|null);

        /** PrivateMessage Attachments. */
        public Attachments: messages.IDocumentField[];

        /**
         * Creates a new PrivateMessage instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PrivateMessage instance
         */
        public static create(properties?: messages.IPrivateMessage): messages.PrivateMessage;

        /**
         * Encodes the specified PrivateMessage message. Does not implicitly {@link messages.PrivateMessage.verify|verify} messages.
         * @param message PrivateMessage message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: messages.IPrivateMessage, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified PrivateMessage message, length delimited. Does not implicitly {@link messages.PrivateMessage.verify|verify} messages.
         * @param message PrivateMessage message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: messages.IPrivateMessage, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PrivateMessage message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PrivateMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): messages.PrivateMessage;

        /**
         * Decodes a PrivateMessage message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PrivateMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): messages.PrivateMessage;

        /**
         * Verifies a PrivateMessage message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a PrivateMessage message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PrivateMessage
         */
        public static fromObject(object: { [k: string]: any }): messages.PrivateMessage;

        /**
         * Creates a plain object from a PrivateMessage message. Also converts values to other types if specified.
         * @param message PrivateMessage
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: messages.PrivateMessage, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PrivateMessage to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a RevertedTx. */
    interface IRevertedTx {

        /** RevertedTx Timestamp */
        Timestamp?: (number|Long|null);

        /** RevertedTx Transaction */
        Transaction?: (Uint8Array|null);
    }

    /** Represents a RevertedTx. */
    class RevertedTx implements IRevertedTx {

        /**
         * Constructs a new RevertedTx.
         * @param [properties] Properties to set
         */
        constructor(properties?: messages.IRevertedTx);

        /** RevertedTx Timestamp. */
        public Timestamp: (number|Long);

        /** RevertedTx Transaction. */
        public Transaction: Uint8Array;

        /**
         * Creates a new RevertedTx instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RevertedTx instance
         */
        public static create(properties?: messages.IRevertedTx): messages.RevertedTx;

        /**
         * Encodes the specified RevertedTx message. Does not implicitly {@link messages.RevertedTx.verify|verify} messages.
         * @param message RevertedTx message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: messages.IRevertedTx, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RevertedTx message, length delimited. Does not implicitly {@link messages.RevertedTx.verify|verify} messages.
         * @param message RevertedTx message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: messages.IRevertedTx, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RevertedTx message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RevertedTx
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): messages.RevertedTx;

        /**
         * Decodes a RevertedTx message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RevertedTx
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): messages.RevertedTx;

        /**
         * Verifies a RevertedTx message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RevertedTx message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RevertedTx
         */
        public static fromObject(object: { [k: string]: any }): messages.RevertedTx;

        /**
         * Creates a plain object from a RevertedTx message. Also converts values to other types if specified.
         * @param message RevertedTx
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: messages.RevertedTx, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RevertedTx to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an Offer. */
    interface IOffer {

        /** Offer Timestamp */
        Timestamp?: (number|Long|null);

        /** Offer Payload */
        Payload?: (Uint8Array|null);
    }

    /** Represents an Offer. */
    class Offer implements IOffer {

        /**
         * Constructs a new Offer.
         * @param [properties] Properties to set
         */
        constructor(properties?: messages.IOffer);

        /** Offer Timestamp. */
        public Timestamp: (number|Long);

        /** Offer Payload. */
        public Payload: Uint8Array;

        /**
         * Creates a new Offer instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Offer instance
         */
        public static create(properties?: messages.IOffer): messages.Offer;

        /**
         * Encodes the specified Offer message. Does not implicitly {@link messages.Offer.verify|verify} messages.
         * @param message Offer message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: messages.IOffer, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Offer message, length delimited. Does not implicitly {@link messages.Offer.verify|verify} messages.
         * @param message Offer message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: messages.IOffer, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an Offer message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Offer
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): messages.Offer;

        /**
         * Decodes an Offer message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Offer
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): messages.Offer;

        /**
         * Verifies an Offer message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an Offer message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Offer
         */
        public static fromObject(object: { [k: string]: any }): messages.Offer;

        /**
         * Creates a plain object from an Offer message. Also converts values to other types if specified.
         * @param message Offer
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: messages.Offer, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Offer to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a SignatureRequest. */
    interface ISignatureRequest {

        /** SignatureRequest Timestamp */
        Timestamp?: (number|Long|null);

        /** SignatureRequest Payload */
        Payload?: (Uint8Array|null);
    }

    /** Represents a SignatureRequest. */
    class SignatureRequest implements ISignatureRequest {

        /**
         * Constructs a new SignatureRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: messages.ISignatureRequest);

        /** SignatureRequest Timestamp. */
        public Timestamp: (number|Long);

        /** SignatureRequest Payload. */
        public Payload: Uint8Array;

        /**
         * Creates a new SignatureRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SignatureRequest instance
         */
        public static create(properties?: messages.ISignatureRequest): messages.SignatureRequest;

        /**
         * Encodes the specified SignatureRequest message. Does not implicitly {@link messages.SignatureRequest.verify|verify} messages.
         * @param message SignatureRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: messages.ISignatureRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SignatureRequest message, length delimited. Does not implicitly {@link messages.SignatureRequest.verify|verify} messages.
         * @param message SignatureRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: messages.ISignatureRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SignatureRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SignatureRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): messages.SignatureRequest;

        /**
         * Decodes a SignatureRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SignatureRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): messages.SignatureRequest;

        /**
         * Verifies a SignatureRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SignatureRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SignatureRequest
         */
        public static fromObject(object: { [k: string]: any }): messages.SignatureRequest;

        /**
         * Creates a plain object from a SignatureRequest message. Also converts values to other types if specified.
         * @param message SignatureRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: messages.SignatureRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SignatureRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a SettlementRequest. */
    interface ISettlementRequest {

        /** SettlementRequest Timestamp */
        Timestamp?: (number|Long|null);

        /** SettlementRequest TransferTxId */
        TransferTxId?: (Uint8Array|null);

        /** SettlementRequest ContractFees */
        ContractFees?: (messages.ITargetAddressField[]|null);

        /** SettlementRequest Settlement */
        Settlement?: (Uint8Array|null);
    }

    /** Represents a SettlementRequest. */
    class SettlementRequest implements ISettlementRequest {

        /**
         * Constructs a new SettlementRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: messages.ISettlementRequest);

        /** SettlementRequest Timestamp. */
        public Timestamp: (number|Long);

        /** SettlementRequest TransferTxId. */
        public TransferTxId: Uint8Array;

        /** SettlementRequest ContractFees. */
        public ContractFees: messages.ITargetAddressField[];

        /** SettlementRequest Settlement. */
        public Settlement: Uint8Array;

        /**
         * Creates a new SettlementRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns SettlementRequest instance
         */
        public static create(properties?: messages.ISettlementRequest): messages.SettlementRequest;

        /**
         * Encodes the specified SettlementRequest message. Does not implicitly {@link messages.SettlementRequest.verify|verify} messages.
         * @param message SettlementRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: messages.ISettlementRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified SettlementRequest message, length delimited. Does not implicitly {@link messages.SettlementRequest.verify|verify} messages.
         * @param message SettlementRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: messages.ISettlementRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SettlementRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns SettlementRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): messages.SettlementRequest;

        /**
         * Decodes a SettlementRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns SettlementRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): messages.SettlementRequest;

        /**
         * Verifies a SettlementRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a SettlementRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns SettlementRequest
         */
        public static fromObject(object: { [k: string]: any }): messages.SettlementRequest;

        /**
         * Creates a plain object from a SettlementRequest message. Also converts values to other types if specified.
         * @param message SettlementRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: messages.SettlementRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this SettlementRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an OutputMetadata. */
    interface IOutputMetadata {

        /** OutputMetadata OutputDescription */
        OutputDescription?: (string|null);

        /** OutputMetadata Tags */
        Tags?: (number[]|null);

        /** OutputMetadata CustomTags */
        CustomTags?: (messages.IOutputTagField[]|null);
    }

    /** Represents an OutputMetadata. */
    class OutputMetadata implements IOutputMetadata {

        /**
         * Constructs a new OutputMetadata.
         * @param [properties] Properties to set
         */
        constructor(properties?: messages.IOutputMetadata);

        /** OutputMetadata OutputDescription. */
        public OutputDescription: string;

        /** OutputMetadata Tags. */
        public Tags: number[];

        /** OutputMetadata CustomTags. */
        public CustomTags: messages.IOutputTagField[];

        /**
         * Creates a new OutputMetadata instance using the specified properties.
         * @param [properties] Properties to set
         * @returns OutputMetadata instance
         */
        public static create(properties?: messages.IOutputMetadata): messages.OutputMetadata;

        /**
         * Encodes the specified OutputMetadata message. Does not implicitly {@link messages.OutputMetadata.verify|verify} messages.
         * @param message OutputMetadata message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: messages.IOutputMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified OutputMetadata message, length delimited. Does not implicitly {@link messages.OutputMetadata.verify|verify} messages.
         * @param message OutputMetadata message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: messages.IOutputMetadata, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an OutputMetadata message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns OutputMetadata
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): messages.OutputMetadata;

        /**
         * Decodes an OutputMetadata message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns OutputMetadata
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): messages.OutputMetadata;

        /**
         * Verifies an OutputMetadata message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an OutputMetadata message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns OutputMetadata
         */
        public static fromObject(object: { [k: string]: any }): messages.OutputMetadata;

        /**
         * Creates a plain object from an OutputMetadata message. Also converts values to other types if specified.
         * @param message OutputMetadata
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: messages.OutputMetadata, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this OutputMetadata to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an InitiateRelationship. */
    interface IInitiateRelationship {

        /** InitiateRelationship Type */
        Type?: (number|null);

        /** InitiateRelationship Seed */
        Seed?: (Uint8Array|null);

        /** InitiateRelationship Flag */
        Flag?: (Uint8Array|null);

        /** InitiateRelationship EncryptionType */
        EncryptionType?: (number|null);

        /** InitiateRelationship ProofOfIdentityType */
        ProofOfIdentityType?: (number|null);

        /** InitiateRelationship ProofOfIdentity */
        ProofOfIdentity?: (Uint8Array|null);

        /** InitiateRelationship ChannelParties */
        ChannelParties?: (messages.IChannelPartyField[]|null);
    }

    /** Represents an InitiateRelationship. */
    class InitiateRelationship implements IInitiateRelationship {

        /**
         * Constructs a new InitiateRelationship.
         * @param [properties] Properties to set
         */
        constructor(properties?: messages.IInitiateRelationship);

        /** InitiateRelationship Type. */
        public Type: number;

        /** InitiateRelationship Seed. */
        public Seed: Uint8Array;

        /** InitiateRelationship Flag. */
        public Flag: Uint8Array;

        /** InitiateRelationship EncryptionType. */
        public EncryptionType: number;

        /** InitiateRelationship ProofOfIdentityType. */
        public ProofOfIdentityType: number;

        /** InitiateRelationship ProofOfIdentity. */
        public ProofOfIdentity: Uint8Array;

        /** InitiateRelationship ChannelParties. */
        public ChannelParties: messages.IChannelPartyField[];

        /**
         * Creates a new InitiateRelationship instance using the specified properties.
         * @param [properties] Properties to set
         * @returns InitiateRelationship instance
         */
        public static create(properties?: messages.IInitiateRelationship): messages.InitiateRelationship;

        /**
         * Encodes the specified InitiateRelationship message. Does not implicitly {@link messages.InitiateRelationship.verify|verify} messages.
         * @param message InitiateRelationship message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: messages.IInitiateRelationship, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified InitiateRelationship message, length delimited. Does not implicitly {@link messages.InitiateRelationship.verify|verify} messages.
         * @param message InitiateRelationship message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: messages.IInitiateRelationship, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an InitiateRelationship message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns InitiateRelationship
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): messages.InitiateRelationship;

        /**
         * Decodes an InitiateRelationship message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns InitiateRelationship
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): messages.InitiateRelationship;

        /**
         * Verifies an InitiateRelationship message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an InitiateRelationship message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns InitiateRelationship
         */
        public static fromObject(object: { [k: string]: any }): messages.InitiateRelationship;

        /**
         * Creates a plain object from an InitiateRelationship message. Also converts values to other types if specified.
         * @param message InitiateRelationship
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: messages.InitiateRelationship, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this InitiateRelationship to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a PendingAcceptRelationship. */
    interface IPendingAcceptRelationship {

        /** PendingAcceptRelationship ProofOfIdentityType */
        ProofOfIdentityType?: (number|null);

        /** PendingAcceptRelationship ProofOfIdentity */
        ProofOfIdentity?: (Uint8Array|null);
    }

    /** Represents a PendingAcceptRelationship. */
    class PendingAcceptRelationship implements IPendingAcceptRelationship {

        /**
         * Constructs a new PendingAcceptRelationship.
         * @param [properties] Properties to set
         */
        constructor(properties?: messages.IPendingAcceptRelationship);

        /** PendingAcceptRelationship ProofOfIdentityType. */
        public ProofOfIdentityType: number;

        /** PendingAcceptRelationship ProofOfIdentity. */
        public ProofOfIdentity: Uint8Array;

        /**
         * Creates a new PendingAcceptRelationship instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PendingAcceptRelationship instance
         */
        public static create(properties?: messages.IPendingAcceptRelationship): messages.PendingAcceptRelationship;

        /**
         * Encodes the specified PendingAcceptRelationship message. Does not implicitly {@link messages.PendingAcceptRelationship.verify|verify} messages.
         * @param message PendingAcceptRelationship message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: messages.IPendingAcceptRelationship, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified PendingAcceptRelationship message, length delimited. Does not implicitly {@link messages.PendingAcceptRelationship.verify|verify} messages.
         * @param message PendingAcceptRelationship message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: messages.IPendingAcceptRelationship, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PendingAcceptRelationship message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PendingAcceptRelationship
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): messages.PendingAcceptRelationship;

        /**
         * Decodes a PendingAcceptRelationship message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PendingAcceptRelationship
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): messages.PendingAcceptRelationship;

        /**
         * Verifies a PendingAcceptRelationship message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a PendingAcceptRelationship message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PendingAcceptRelationship
         */
        public static fromObject(object: { [k: string]: any }): messages.PendingAcceptRelationship;

        /**
         * Creates a plain object from a PendingAcceptRelationship message. Also converts values to other types if specified.
         * @param message PendingAcceptRelationship
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: messages.PendingAcceptRelationship, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PendingAcceptRelationship to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an AcceptRelationship. */
    interface IAcceptRelationship {

        /** AcceptRelationship ProofOfIdentityType */
        ProofOfIdentityType?: (number|null);

        /** AcceptRelationship ProofOfIdentity */
        ProofOfIdentity?: (Uint8Array|null);
    }

    /** Represents an AcceptRelationship. */
    class AcceptRelationship implements IAcceptRelationship {

        /**
         * Constructs a new AcceptRelationship.
         * @param [properties] Properties to set
         */
        constructor(properties?: messages.IAcceptRelationship);

        /** AcceptRelationship ProofOfIdentityType. */
        public ProofOfIdentityType: number;

        /** AcceptRelationship ProofOfIdentity. */
        public ProofOfIdentity: Uint8Array;

        /**
         * Creates a new AcceptRelationship instance using the specified properties.
         * @param [properties] Properties to set
         * @returns AcceptRelationship instance
         */
        public static create(properties?: messages.IAcceptRelationship): messages.AcceptRelationship;

        /**
         * Encodes the specified AcceptRelationship message. Does not implicitly {@link messages.AcceptRelationship.verify|verify} messages.
         * @param message AcceptRelationship message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: messages.IAcceptRelationship, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified AcceptRelationship message, length delimited. Does not implicitly {@link messages.AcceptRelationship.verify|verify} messages.
         * @param message AcceptRelationship message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: messages.IAcceptRelationship, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an AcceptRelationship message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns AcceptRelationship
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): messages.AcceptRelationship;

        /**
         * Decodes an AcceptRelationship message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns AcceptRelationship
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): messages.AcceptRelationship;

        /**
         * Verifies an AcceptRelationship message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an AcceptRelationship message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns AcceptRelationship
         */
        public static fromObject(object: { [k: string]: any }): messages.AcceptRelationship;

        /**
         * Creates a plain object from an AcceptRelationship message. Also converts values to other types if specified.
         * @param message AcceptRelationship
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: messages.AcceptRelationship, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this AcceptRelationship to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a RelationshipAmendment. */
    interface IRelationshipAmendment {

        /** RelationshipAmendment Seed */
        Seed?: (Uint8Array|null);

        /** RelationshipAmendment BaseEncryptionSecret */
        BaseEncryptionSecret?: (Uint8Array|null);

        /** RelationshipAmendment AddMemberIndexes */
        AddMemberIndexes?: (number|null);

        /** RelationshipAmendment DropMemberIndexes */
        DropMemberIndexes?: (number|null);
    }

    /** Represents a RelationshipAmendment. */
    class RelationshipAmendment implements IRelationshipAmendment {

        /**
         * Constructs a new RelationshipAmendment.
         * @param [properties] Properties to set
         */
        constructor(properties?: messages.IRelationshipAmendment);

        /** RelationshipAmendment Seed. */
        public Seed: Uint8Array;

        /** RelationshipAmendment BaseEncryptionSecret. */
        public BaseEncryptionSecret: Uint8Array;

        /** RelationshipAmendment AddMemberIndexes. */
        public AddMemberIndexes: number;

        /** RelationshipAmendment DropMemberIndexes. */
        public DropMemberIndexes: number;

        /**
         * Creates a new RelationshipAmendment instance using the specified properties.
         * @param [properties] Properties to set
         * @returns RelationshipAmendment instance
         */
        public static create(properties?: messages.IRelationshipAmendment): messages.RelationshipAmendment;

        /**
         * Encodes the specified RelationshipAmendment message. Does not implicitly {@link messages.RelationshipAmendment.verify|verify} messages.
         * @param message RelationshipAmendment message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: messages.IRelationshipAmendment, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified RelationshipAmendment message, length delimited. Does not implicitly {@link messages.RelationshipAmendment.verify|verify} messages.
         * @param message RelationshipAmendment message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: messages.IRelationshipAmendment, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RelationshipAmendment message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns RelationshipAmendment
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): messages.RelationshipAmendment;

        /**
         * Decodes a RelationshipAmendment message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns RelationshipAmendment
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): messages.RelationshipAmendment;

        /**
         * Verifies a RelationshipAmendment message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a RelationshipAmendment message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns RelationshipAmendment
         */
        public static fromObject(object: { [k: string]: any }): messages.RelationshipAmendment;

        /**
         * Creates a plain object from a RelationshipAmendment message. Also converts values to other types if specified.
         * @param message RelationshipAmendment
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: messages.RelationshipAmendment, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this RelationshipAmendment to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an InitiateThread. */
    interface IInitiateThread {

        /** InitiateThread Flag */
        Flag?: (Uint8Array|null);

        /** InitiateThread Seed */
        Seed?: (Uint8Array|null);
    }

    /** Represents an InitiateThread. */
    class InitiateThread implements IInitiateThread {

        /**
         * Constructs a new InitiateThread.
         * @param [properties] Properties to set
         */
        constructor(properties?: messages.IInitiateThread);

        /** InitiateThread Flag. */
        public Flag: Uint8Array;

        /** InitiateThread Seed. */
        public Seed: Uint8Array;

        /**
         * Creates a new InitiateThread instance using the specified properties.
         * @param [properties] Properties to set
         * @returns InitiateThread instance
         */
        public static create(properties?: messages.IInitiateThread): messages.InitiateThread;

        /**
         * Encodes the specified InitiateThread message. Does not implicitly {@link messages.InitiateThread.verify|verify} messages.
         * @param message InitiateThread message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: messages.IInitiateThread, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified InitiateThread message, length delimited. Does not implicitly {@link messages.InitiateThread.verify|verify} messages.
         * @param message InitiateThread message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: messages.IInitiateThread, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an InitiateThread message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns InitiateThread
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): messages.InitiateThread;

        /**
         * Decodes an InitiateThread message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns InitiateThread
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): messages.InitiateThread;

        /**
         * Verifies an InitiateThread message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an InitiateThread message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns InitiateThread
         */
        public static fromObject(object: { [k: string]: any }): messages.InitiateThread;

        /**
         * Creates a plain object from an InitiateThread message. Also converts values to other types if specified.
         * @param message InitiateThread
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: messages.InitiateThread, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this InitiateThread to JSON.
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
        constructor(properties?: messages.IAdministratorField);

        /** AdministratorField Type. */
        public Type: number;

        /** AdministratorField Name. */
        public Name: string;

        /**
         * Creates a new AdministratorField instance using the specified properties.
         * @param [properties] Properties to set
         * @returns AdministratorField instance
         */
        public static create(properties?: messages.IAdministratorField): messages.AdministratorField;

        /**
         * Encodes the specified AdministratorField message. Does not implicitly {@link messages.AdministratorField.verify|verify} messages.
         * @param message AdministratorField message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: messages.IAdministratorField, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified AdministratorField message, length delimited. Does not implicitly {@link messages.AdministratorField.verify|verify} messages.
         * @param message AdministratorField message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: messages.IAdministratorField, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an AdministratorField message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns AdministratorField
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): messages.AdministratorField;

        /**
         * Decodes an AdministratorField message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns AdministratorField
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): messages.AdministratorField;

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
        public static fromObject(object: { [k: string]: any }): messages.AdministratorField;

        /**
         * Creates a plain object from an AdministratorField message. Also converts values to other types if specified.
         * @param message AdministratorField
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: messages.AdministratorField, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this AdministratorField to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ChannelPartyField. */
    interface IChannelPartyField {

        /** ChannelPartyField AdministrativeAddress */
        AdministrativeAddress?: (Uint8Array|null);

        /** ChannelPartyField OutputIndex */
        OutputIndex?: (number|null);
    }

    /** Represents a ChannelPartyField. */
    class ChannelPartyField implements IChannelPartyField {

        /**
         * Constructs a new ChannelPartyField.
         * @param [properties] Properties to set
         */
        constructor(properties?: messages.IChannelPartyField);

        /** ChannelPartyField AdministrativeAddress. */
        public AdministrativeAddress: Uint8Array;

        /** ChannelPartyField OutputIndex. */
        public OutputIndex: number;

        /**
         * Creates a new ChannelPartyField instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ChannelPartyField instance
         */
        public static create(properties?: messages.IChannelPartyField): messages.ChannelPartyField;

        /**
         * Encodes the specified ChannelPartyField message. Does not implicitly {@link messages.ChannelPartyField.verify|verify} messages.
         * @param message ChannelPartyField message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: messages.IChannelPartyField, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ChannelPartyField message, length delimited. Does not implicitly {@link messages.ChannelPartyField.verify|verify} messages.
         * @param message ChannelPartyField message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: messages.IChannelPartyField, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ChannelPartyField message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ChannelPartyField
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): messages.ChannelPartyField;

        /**
         * Decodes a ChannelPartyField message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ChannelPartyField
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): messages.ChannelPartyField;

        /**
         * Verifies a ChannelPartyField message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ChannelPartyField message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ChannelPartyField
         */
        public static fromObject(object: { [k: string]: any }): messages.ChannelPartyField;

        /**
         * Creates a plain object from a ChannelPartyField message. Also converts values to other types if specified.
         * @param message ChannelPartyField
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: messages.ChannelPartyField, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ChannelPartyField to JSON.
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
        constructor(properties?: messages.IDocumentField);

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
        public static create(properties?: messages.IDocumentField): messages.DocumentField;

        /**
         * Encodes the specified DocumentField message. Does not implicitly {@link messages.DocumentField.verify|verify} messages.
         * @param message DocumentField message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: messages.IDocumentField, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified DocumentField message, length delimited. Does not implicitly {@link messages.DocumentField.verify|verify} messages.
         * @param message DocumentField message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: messages.IDocumentField, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DocumentField message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns DocumentField
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): messages.DocumentField;

        /**
         * Decodes a DocumentField message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns DocumentField
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): messages.DocumentField;

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
        public static fromObject(object: { [k: string]: any }): messages.DocumentField;

        /**
         * Creates a plain object from a DocumentField message. Also converts values to other types if specified.
         * @param message DocumentField
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: messages.DocumentField, options?: $protobuf.IConversionOptions): { [k: string]: any };

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
        Administration?: (messages.IAdministratorField[]|null);

        /** EntityField Management */
        Management?: (messages.IManagerField[]|null);

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
        constructor(properties?: messages.IEntityField);

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
        public Administration: messages.IAdministratorField[];

        /** EntityField Management. */
        public Management: messages.IManagerField[];

        /** EntityField DomainName. */
        public DomainName: string;

        /** EntityField PaymailHandle. */
        public PaymailHandle: string;

        /**
         * Creates a new EntityField instance using the specified properties.
         * @param [properties] Properties to set
         * @returns EntityField instance
         */
        public static create(properties?: messages.IEntityField): messages.EntityField;

        /**
         * Encodes the specified EntityField message. Does not implicitly {@link messages.EntityField.verify|verify} messages.
         * @param message EntityField message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: messages.IEntityField, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified EntityField message, length delimited. Does not implicitly {@link messages.EntityField.verify|verify} messages.
         * @param message EntityField message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: messages.IEntityField, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an EntityField message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns EntityField
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): messages.EntityField;

        /**
         * Decodes an EntityField message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns EntityField
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): messages.EntityField;

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
        public static fromObject(object: { [k: string]: any }): messages.EntityField;

        /**
         * Creates a plain object from an EntityField message. Also converts values to other types if specified.
         * @param message EntityField
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: messages.EntityField, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this EntityField to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an IdentityOracleProofField. */
    interface IIdentityOracleProofField {

        /** IdentityOracleProofField UserID */
        UserID?: (Uint8Array|null);

        /** IdentityOracleProofField Entity */
        Entity?: (messages.IEntityField|null);

        /** IdentityOracleProofField OracleSignature */
        OracleSignature?: (messages.IOracleSignatureField|null);
    }

    /** Represents an IdentityOracleProofField. */
    class IdentityOracleProofField implements IIdentityOracleProofField {

        /**
         * Constructs a new IdentityOracleProofField.
         * @param [properties] Properties to set
         */
        constructor(properties?: messages.IIdentityOracleProofField);

        /** IdentityOracleProofField UserID. */
        public UserID: Uint8Array;

        /** IdentityOracleProofField Entity. */
        public Entity?: (messages.IEntityField|null);

        /** IdentityOracleProofField OracleSignature. */
        public OracleSignature?: (messages.IOracleSignatureField|null);

        /**
         * Creates a new IdentityOracleProofField instance using the specified properties.
         * @param [properties] Properties to set
         * @returns IdentityOracleProofField instance
         */
        public static create(properties?: messages.IIdentityOracleProofField): messages.IdentityOracleProofField;

        /**
         * Encodes the specified IdentityOracleProofField message. Does not implicitly {@link messages.IdentityOracleProofField.verify|verify} messages.
         * @param message IdentityOracleProofField message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: messages.IIdentityOracleProofField, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified IdentityOracleProofField message, length delimited. Does not implicitly {@link messages.IdentityOracleProofField.verify|verify} messages.
         * @param message IdentityOracleProofField message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: messages.IIdentityOracleProofField, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an IdentityOracleProofField message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns IdentityOracleProofField
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): messages.IdentityOracleProofField;

        /**
         * Decodes an IdentityOracleProofField message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns IdentityOracleProofField
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): messages.IdentityOracleProofField;

        /**
         * Verifies an IdentityOracleProofField message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an IdentityOracleProofField message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns IdentityOracleProofField
         */
        public static fromObject(object: { [k: string]: any }): messages.IdentityOracleProofField;

        /**
         * Creates a plain object from an IdentityOracleProofField message. Also converts values to other types if specified.
         * @param message IdentityOracleProofField
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: messages.IdentityOracleProofField, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this IdentityOracleProofField to JSON.
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
        constructor(properties?: messages.IManagerField);

        /** ManagerField Type. */
        public Type: number;

        /** ManagerField Name. */
        public Name: string;

        /**
         * Creates a new ManagerField instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ManagerField instance
         */
        public static create(properties?: messages.IManagerField): messages.ManagerField;

        /**
         * Encodes the specified ManagerField message. Does not implicitly {@link messages.ManagerField.verify|verify} messages.
         * @param message ManagerField message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: messages.IManagerField, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ManagerField message, length delimited. Does not implicitly {@link messages.ManagerField.verify|verify} messages.
         * @param message ManagerField message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: messages.IManagerField, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ManagerField message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ManagerField
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): messages.ManagerField;

        /**
         * Decodes a ManagerField message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ManagerField
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): messages.ManagerField;

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
        public static fromObject(object: { [k: string]: any }): messages.ManagerField;

        /**
         * Creates a plain object from a ManagerField message. Also converts values to other types if specified.
         * @param message ManagerField
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: messages.ManagerField, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ManagerField to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an OracleSignatureField. */
    interface IOracleSignatureField {

        /** OracleSignatureField OracleURL */
        OracleURL?: (string|null);

        /** OracleSignatureField BlockHeight */
        BlockHeight?: (number|null);

        /** OracleSignatureField ValidityPeriod */
        ValidityPeriod?: (messages.IPeriodField|null);

        /** OracleSignatureField SignatureAlgorithm */
        SignatureAlgorithm?: (number|null);

        /** OracleSignatureField Signature */
        Signature?: (Uint8Array|null);
    }

    /** Represents an OracleSignatureField. */
    class OracleSignatureField implements IOracleSignatureField {

        /**
         * Constructs a new OracleSignatureField.
         * @param [properties] Properties to set
         */
        constructor(properties?: messages.IOracleSignatureField);

        /** OracleSignatureField OracleURL. */
        public OracleURL: string;

        /** OracleSignatureField BlockHeight. */
        public BlockHeight: number;

        /** OracleSignatureField ValidityPeriod. */
        public ValidityPeriod?: (messages.IPeriodField|null);

        /** OracleSignatureField SignatureAlgorithm. */
        public SignatureAlgorithm: number;

        /** OracleSignatureField Signature. */
        public Signature: Uint8Array;

        /**
         * Creates a new OracleSignatureField instance using the specified properties.
         * @param [properties] Properties to set
         * @returns OracleSignatureField instance
         */
        public static create(properties?: messages.IOracleSignatureField): messages.OracleSignatureField;

        /**
         * Encodes the specified OracleSignatureField message. Does not implicitly {@link messages.OracleSignatureField.verify|verify} messages.
         * @param message OracleSignatureField message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: messages.IOracleSignatureField, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified OracleSignatureField message, length delimited. Does not implicitly {@link messages.OracleSignatureField.verify|verify} messages.
         * @param message OracleSignatureField message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: messages.IOracleSignatureField, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an OracleSignatureField message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns OracleSignatureField
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): messages.OracleSignatureField;

        /**
         * Decodes an OracleSignatureField message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns OracleSignatureField
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): messages.OracleSignatureField;

        /**
         * Verifies an OracleSignatureField message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an OracleSignatureField message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns OracleSignatureField
         */
        public static fromObject(object: { [k: string]: any }): messages.OracleSignatureField;

        /**
         * Creates a plain object from an OracleSignatureField message. Also converts values to other types if specified.
         * @param message OracleSignatureField
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: messages.OracleSignatureField, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this OracleSignatureField to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an OutpointField. */
    interface IOutpointField {

        /** OutpointField TxId */
        TxId?: (Uint8Array|null);

        /** OutpointField OutputIndex */
        OutputIndex?: (number|null);
    }

    /** Represents an OutpointField. */
    class OutpointField implements IOutpointField {

        /**
         * Constructs a new OutpointField.
         * @param [properties] Properties to set
         */
        constructor(properties?: messages.IOutpointField);

        /** OutpointField TxId. */
        public TxId: Uint8Array;

        /** OutpointField OutputIndex. */
        public OutputIndex: number;

        /**
         * Creates a new OutpointField instance using the specified properties.
         * @param [properties] Properties to set
         * @returns OutpointField instance
         */
        public static create(properties?: messages.IOutpointField): messages.OutpointField;

        /**
         * Encodes the specified OutpointField message. Does not implicitly {@link messages.OutpointField.verify|verify} messages.
         * @param message OutpointField message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: messages.IOutpointField, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified OutpointField message, length delimited. Does not implicitly {@link messages.OutpointField.verify|verify} messages.
         * @param message OutpointField message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: messages.IOutpointField, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an OutpointField message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns OutpointField
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): messages.OutpointField;

        /**
         * Decodes an OutpointField message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns OutpointField
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): messages.OutpointField;

        /**
         * Verifies an OutpointField message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an OutpointField message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns OutpointField
         */
        public static fromObject(object: { [k: string]: any }): messages.OutpointField;

        /**
         * Creates a plain object from an OutpointField message. Also converts values to other types if specified.
         * @param message OutpointField
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: messages.OutpointField, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this OutpointField to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an OutputTagField. */
    interface IOutputTagField {

        /** OutputTagField Tag */
        Tag?: (string|null);
    }

    /** Represents an OutputTagField. */
    class OutputTagField implements IOutputTagField {

        /**
         * Constructs a new OutputTagField.
         * @param [properties] Properties to set
         */
        constructor(properties?: messages.IOutputTagField);

        /** OutputTagField Tag. */
        public Tag: string;

        /**
         * Creates a new OutputTagField instance using the specified properties.
         * @param [properties] Properties to set
         * @returns OutputTagField instance
         */
        public static create(properties?: messages.IOutputTagField): messages.OutputTagField;

        /**
         * Encodes the specified OutputTagField message. Does not implicitly {@link messages.OutputTagField.verify|verify} messages.
         * @param message OutputTagField message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: messages.IOutputTagField, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified OutputTagField message, length delimited. Does not implicitly {@link messages.OutputTagField.verify|verify} messages.
         * @param message OutputTagField message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: messages.IOutputTagField, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an OutputTagField message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns OutputTagField
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): messages.OutputTagField;

        /**
         * Decodes an OutputTagField message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns OutputTagField
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): messages.OutputTagField;

        /**
         * Verifies an OutputTagField message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an OutputTagField message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns OutputTagField
         */
        public static fromObject(object: { [k: string]: any }): messages.OutputTagField;

        /**
         * Creates a plain object from an OutputTagField message. Also converts values to other types if specified.
         * @param message OutputTagField
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: messages.OutputTagField, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this OutputTagField to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a PaymailProofField. */
    interface IPaymailProofField {

        /** PaymailProofField UserID */
        UserID?: (Uint8Array|null);

        /** PaymailProofField Handle */
        Handle?: (string|null);

        /** PaymailProofField OracleSignature */
        OracleSignature?: (messages.IOracleSignatureField|null);
    }

    /** Represents a PaymailProofField. */
    class PaymailProofField implements IPaymailProofField {

        /**
         * Constructs a new PaymailProofField.
         * @param [properties] Properties to set
         */
        constructor(properties?: messages.IPaymailProofField);

        /** PaymailProofField UserID. */
        public UserID: Uint8Array;

        /** PaymailProofField Handle. */
        public Handle: string;

        /** PaymailProofField OracleSignature. */
        public OracleSignature?: (messages.IOracleSignatureField|null);

        /**
         * Creates a new PaymailProofField instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PaymailProofField instance
         */
        public static create(properties?: messages.IPaymailProofField): messages.PaymailProofField;

        /**
         * Encodes the specified PaymailProofField message. Does not implicitly {@link messages.PaymailProofField.verify|verify} messages.
         * @param message PaymailProofField message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: messages.IPaymailProofField, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified PaymailProofField message, length delimited. Does not implicitly {@link messages.PaymailProofField.verify|verify} messages.
         * @param message PaymailProofField message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: messages.IPaymailProofField, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PaymailProofField message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PaymailProofField
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): messages.PaymailProofField;

        /**
         * Decodes a PaymailProofField message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PaymailProofField
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): messages.PaymailProofField;

        /**
         * Verifies a PaymailProofField message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a PaymailProofField message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PaymailProofField
         */
        public static fromObject(object: { [k: string]: any }): messages.PaymailProofField;

        /**
         * Creates a plain object from a PaymailProofField message. Also converts values to other types if specified.
         * @param message PaymailProofField
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: messages.PaymailProofField, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PaymailProofField to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a PeriodField. */
    interface IPeriodField {

        /** PeriodField Begin */
        Begin?: (number|Long|null);

        /** PeriodField End */
        End?: (number|Long|null);
    }

    /** Represents a PeriodField. */
    class PeriodField implements IPeriodField {

        /**
         * Constructs a new PeriodField.
         * @param [properties] Properties to set
         */
        constructor(properties?: messages.IPeriodField);

        /** PeriodField Begin. */
        public Begin: (number|Long);

        /** PeriodField End. */
        public End: (number|Long);

        /**
         * Creates a new PeriodField instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PeriodField instance
         */
        public static create(properties?: messages.IPeriodField): messages.PeriodField;

        /**
         * Encodes the specified PeriodField message. Does not implicitly {@link messages.PeriodField.verify|verify} messages.
         * @param message PeriodField message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: messages.IPeriodField, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified PeriodField message, length delimited. Does not implicitly {@link messages.PeriodField.verify|verify} messages.
         * @param message PeriodField message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: messages.IPeriodField, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PeriodField message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PeriodField
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): messages.PeriodField;

        /**
         * Decodes a PeriodField message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PeriodField
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): messages.PeriodField;

        /**
         * Verifies a PeriodField message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a PeriodField message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PeriodField
         */
        public static fromObject(object: { [k: string]: any }): messages.PeriodField;

        /**
         * Creates a plain object from a PeriodField message. Also converts values to other types if specified.
         * @param message PeriodField
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: messages.PeriodField, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PeriodField to JSON.
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
        constructor(properties?: messages.ITargetAddressField);

        /** TargetAddressField Address. */
        public Address: Uint8Array;

        /** TargetAddressField Quantity. */
        public Quantity: (number|Long);

        /**
         * Creates a new TargetAddressField instance using the specified properties.
         * @param [properties] Properties to set
         * @returns TargetAddressField instance
         */
        public static create(properties?: messages.ITargetAddressField): messages.TargetAddressField;

        /**
         * Encodes the specified TargetAddressField message. Does not implicitly {@link messages.TargetAddressField.verify|verify} messages.
         * @param message TargetAddressField message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: messages.ITargetAddressField, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified TargetAddressField message, length delimited. Does not implicitly {@link messages.TargetAddressField.verify|verify} messages.
         * @param message TargetAddressField message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: messages.ITargetAddressField, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a TargetAddressField message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns TargetAddressField
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): messages.TargetAddressField;

        /**
         * Decodes a TargetAddressField message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns TargetAddressField
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): messages.TargetAddressField;

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
        public static fromObject(object: { [k: string]: any }): messages.TargetAddressField;

        /**
         * Creates a plain object from a TargetAddressField message. Also converts values to other types if specified.
         * @param message TargetAddressField
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: messages.TargetAddressField, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this TargetAddressField to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }
}
