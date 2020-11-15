/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.actions = (function() {

    /**
     * Namespace actions.
     * @exports actions
     * @namespace
     */
    var actions = {};

    actions.ContractOffer = (function() {

        /**
         * Properties of a ContractOffer.
         * @memberof actions
         * @interface IContractOffer
         * @property {string|null} [ContractName] ContractOffer ContractName
         * @property {number|null} [BodyOfAgreementType] ContractOffer BodyOfAgreementType
         * @property {Uint8Array|null} [BodyOfAgreement] ContractOffer BodyOfAgreement
         * @property {Array.<actions.IDocumentField>|null} [SupportingDocs] ContractOffer SupportingDocs
         * @property {string|null} [GoverningLaw] ContractOffer GoverningLaw
         * @property {string|null} [Jurisdiction] ContractOffer Jurisdiction
         * @property {number|Long|null} [ContractExpiration] ContractOffer ContractExpiration
         * @property {string|null} [ContractURI] ContractOffer ContractURI
         * @property {actions.IEntityField|null} [Issuer] ContractOffer Issuer
         * @property {boolean|null} [ContractOperatorIncluded] ContractOffer ContractOperatorIncluded
         * @property {number|Long|null} [ContractFee] ContractOffer ContractFee
         * @property {Array.<actions.IVotingSystemField>|null} [VotingSystems] ContractOffer VotingSystems
         * @property {Uint8Array|null} [ContractPermissions] ContractOffer ContractPermissions
         * @property {number|Long|null} [RestrictedQtyAssets] ContractOffer RestrictedQtyAssets
         * @property {boolean|null} [AdministrationProposal] ContractOffer AdministrationProposal
         * @property {boolean|null} [HolderProposal] ContractOffer HolderProposal
         * @property {Array.<actions.IOracleField>|null} [Oracles] ContractOffer Oracles
         * @property {Uint8Array|null} [MasterAddress] ContractOffer MasterAddress
         * @property {Uint8Array|null} [EntityContract] ContractOffer EntityContract
         * @property {Uint8Array|null} [OperatorEntityContract] ContractOffer OperatorEntityContract
         * @property {number|null} [ContractType] ContractOffer ContractType
         * @property {Array.<actions.IServiceField>|null} [Services] ContractOffer Services
         * @property {Array.<actions.IAdminIdentityCertificateField>|null} [AdminIdentityCertificates] ContractOffer AdminIdentityCertificates
         */

        /**
         * Constructs a new ContractOffer.
         * @memberof actions
         * @classdesc Represents a ContractOffer.
         * @implements IContractOffer
         * @constructor
         * @param {actions.IContractOffer=} [properties] Properties to set
         */
        function ContractOffer(properties) {
            this.SupportingDocs = [];
            this.VotingSystems = [];
            this.Oracles = [];
            this.Services = [];
            this.AdminIdentityCertificates = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ContractOffer ContractName.
         * @member {string} ContractName
         * @memberof actions.ContractOffer
         * @instance
         */
        ContractOffer.prototype.ContractName = "";

        /**
         * ContractOffer BodyOfAgreementType.
         * @member {number} BodyOfAgreementType
         * @memberof actions.ContractOffer
         * @instance
         */
        ContractOffer.prototype.BodyOfAgreementType = 0;

        /**
         * ContractOffer BodyOfAgreement.
         * @member {Uint8Array} BodyOfAgreement
         * @memberof actions.ContractOffer
         * @instance
         */
        ContractOffer.prototype.BodyOfAgreement = $util.newBuffer([]);

        /**
         * ContractOffer SupportingDocs.
         * @member {Array.<actions.IDocumentField>} SupportingDocs
         * @memberof actions.ContractOffer
         * @instance
         */
        ContractOffer.prototype.SupportingDocs = $util.emptyArray;

        /**
         * ContractOffer GoverningLaw.
         * @member {string} GoverningLaw
         * @memberof actions.ContractOffer
         * @instance
         */
        ContractOffer.prototype.GoverningLaw = "";

        /**
         * ContractOffer Jurisdiction.
         * @member {string} Jurisdiction
         * @memberof actions.ContractOffer
         * @instance
         */
        ContractOffer.prototype.Jurisdiction = "";

        /**
         * ContractOffer ContractExpiration.
         * @member {number|Long} ContractExpiration
         * @memberof actions.ContractOffer
         * @instance
         */
        ContractOffer.prototype.ContractExpiration = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * ContractOffer ContractURI.
         * @member {string} ContractURI
         * @memberof actions.ContractOffer
         * @instance
         */
        ContractOffer.prototype.ContractURI = "";

        /**
         * ContractOffer Issuer.
         * @member {actions.IEntityField|null|undefined} Issuer
         * @memberof actions.ContractOffer
         * @instance
         */
        ContractOffer.prototype.Issuer = null;

        /**
         * ContractOffer ContractOperatorIncluded.
         * @member {boolean} ContractOperatorIncluded
         * @memberof actions.ContractOffer
         * @instance
         */
        ContractOffer.prototype.ContractOperatorIncluded = false;

        /**
         * ContractOffer ContractFee.
         * @member {number|Long} ContractFee
         * @memberof actions.ContractOffer
         * @instance
         */
        ContractOffer.prototype.ContractFee = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * ContractOffer VotingSystems.
         * @member {Array.<actions.IVotingSystemField>} VotingSystems
         * @memberof actions.ContractOffer
         * @instance
         */
        ContractOffer.prototype.VotingSystems = $util.emptyArray;

        /**
         * ContractOffer ContractPermissions.
         * @member {Uint8Array} ContractPermissions
         * @memberof actions.ContractOffer
         * @instance
         */
        ContractOffer.prototype.ContractPermissions = $util.newBuffer([]);

        /**
         * ContractOffer RestrictedQtyAssets.
         * @member {number|Long} RestrictedQtyAssets
         * @memberof actions.ContractOffer
         * @instance
         */
        ContractOffer.prototype.RestrictedQtyAssets = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * ContractOffer AdministrationProposal.
         * @member {boolean} AdministrationProposal
         * @memberof actions.ContractOffer
         * @instance
         */
        ContractOffer.prototype.AdministrationProposal = false;

        /**
         * ContractOffer HolderProposal.
         * @member {boolean} HolderProposal
         * @memberof actions.ContractOffer
         * @instance
         */
        ContractOffer.prototype.HolderProposal = false;

        /**
         * ContractOffer Oracles.
         * @member {Array.<actions.IOracleField>} Oracles
         * @memberof actions.ContractOffer
         * @instance
         */
        ContractOffer.prototype.Oracles = $util.emptyArray;

        /**
         * ContractOffer MasterAddress.
         * @member {Uint8Array} MasterAddress
         * @memberof actions.ContractOffer
         * @instance
         */
        ContractOffer.prototype.MasterAddress = $util.newBuffer([]);

        /**
         * ContractOffer EntityContract.
         * @member {Uint8Array} EntityContract
         * @memberof actions.ContractOffer
         * @instance
         */
        ContractOffer.prototype.EntityContract = $util.newBuffer([]);

        /**
         * ContractOffer OperatorEntityContract.
         * @member {Uint8Array} OperatorEntityContract
         * @memberof actions.ContractOffer
         * @instance
         */
        ContractOffer.prototype.OperatorEntityContract = $util.newBuffer([]);

        /**
         * ContractOffer ContractType.
         * @member {number} ContractType
         * @memberof actions.ContractOffer
         * @instance
         */
        ContractOffer.prototype.ContractType = 0;

        /**
         * ContractOffer Services.
         * @member {Array.<actions.IServiceField>} Services
         * @memberof actions.ContractOffer
         * @instance
         */
        ContractOffer.prototype.Services = $util.emptyArray;

        /**
         * ContractOffer AdminIdentityCertificates.
         * @member {Array.<actions.IAdminIdentityCertificateField>} AdminIdentityCertificates
         * @memberof actions.ContractOffer
         * @instance
         */
        ContractOffer.prototype.AdminIdentityCertificates = $util.emptyArray;

        /**
         * Creates a new ContractOffer instance using the specified properties.
         * @function create
         * @memberof actions.ContractOffer
         * @static
         * @param {actions.IContractOffer=} [properties] Properties to set
         * @returns {actions.ContractOffer} ContractOffer instance
         */
        ContractOffer.create = function create(properties) {
            return new ContractOffer(properties);
        };

        /**
         * Encodes the specified ContractOffer message. Does not implicitly {@link actions.ContractOffer.verify|verify} messages.
         * @function encode
         * @memberof actions.ContractOffer
         * @static
         * @param {actions.IContractOffer} message ContractOffer message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ContractOffer.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.ContractName != null && Object.hasOwnProperty.call(message, "ContractName"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.ContractName);
            if (message.BodyOfAgreementType != null && Object.hasOwnProperty.call(message, "BodyOfAgreementType"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.BodyOfAgreementType);
            if (message.BodyOfAgreement != null && Object.hasOwnProperty.call(message, "BodyOfAgreement"))
                writer.uint32(/* id 3, wireType 2 =*/26).bytes(message.BodyOfAgreement);
            if (message.SupportingDocs != null && message.SupportingDocs.length)
                for (var i = 0; i < message.SupportingDocs.length; ++i)
                    $root.actions.DocumentField.encode(message.SupportingDocs[i], writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
            if (message.GoverningLaw != null && Object.hasOwnProperty.call(message, "GoverningLaw"))
                writer.uint32(/* id 6, wireType 2 =*/50).string(message.GoverningLaw);
            if (message.Jurisdiction != null && Object.hasOwnProperty.call(message, "Jurisdiction"))
                writer.uint32(/* id 7, wireType 2 =*/58).string(message.Jurisdiction);
            if (message.ContractExpiration != null && Object.hasOwnProperty.call(message, "ContractExpiration"))
                writer.uint32(/* id 8, wireType 0 =*/64).uint64(message.ContractExpiration);
            if (message.ContractURI != null && Object.hasOwnProperty.call(message, "ContractURI"))
                writer.uint32(/* id 9, wireType 2 =*/74).string(message.ContractURI);
            if (message.Issuer != null && Object.hasOwnProperty.call(message, "Issuer"))
                $root.actions.EntityField.encode(message.Issuer, writer.uint32(/* id 10, wireType 2 =*/82).fork()).ldelim();
            if (message.ContractOperatorIncluded != null && Object.hasOwnProperty.call(message, "ContractOperatorIncluded"))
                writer.uint32(/* id 12, wireType 0 =*/96).bool(message.ContractOperatorIncluded);
            if (message.ContractFee != null && Object.hasOwnProperty.call(message, "ContractFee"))
                writer.uint32(/* id 17, wireType 0 =*/136).uint64(message.ContractFee);
            if (message.VotingSystems != null && message.VotingSystems.length)
                for (var i = 0; i < message.VotingSystems.length; ++i)
                    $root.actions.VotingSystemField.encode(message.VotingSystems[i], writer.uint32(/* id 18, wireType 2 =*/146).fork()).ldelim();
            if (message.ContractPermissions != null && Object.hasOwnProperty.call(message, "ContractPermissions"))
                writer.uint32(/* id 19, wireType 2 =*/154).bytes(message.ContractPermissions);
            if (message.RestrictedQtyAssets != null && Object.hasOwnProperty.call(message, "RestrictedQtyAssets"))
                writer.uint32(/* id 20, wireType 0 =*/160).uint64(message.RestrictedQtyAssets);
            if (message.AdministrationProposal != null && Object.hasOwnProperty.call(message, "AdministrationProposal"))
                writer.uint32(/* id 21, wireType 0 =*/168).bool(message.AdministrationProposal);
            if (message.HolderProposal != null && Object.hasOwnProperty.call(message, "HolderProposal"))
                writer.uint32(/* id 22, wireType 0 =*/176).bool(message.HolderProposal);
            if (message.Oracles != null && message.Oracles.length)
                for (var i = 0; i < message.Oracles.length; ++i)
                    $root.actions.OracleField.encode(message.Oracles[i], writer.uint32(/* id 23, wireType 2 =*/186).fork()).ldelim();
            if (message.MasterAddress != null && Object.hasOwnProperty.call(message, "MasterAddress"))
                writer.uint32(/* id 24, wireType 2 =*/194).bytes(message.MasterAddress);
            if (message.EntityContract != null && Object.hasOwnProperty.call(message, "EntityContract"))
                writer.uint32(/* id 25, wireType 2 =*/202).bytes(message.EntityContract);
            if (message.OperatorEntityContract != null && Object.hasOwnProperty.call(message, "OperatorEntityContract"))
                writer.uint32(/* id 26, wireType 2 =*/210).bytes(message.OperatorEntityContract);
            if (message.ContractType != null && Object.hasOwnProperty.call(message, "ContractType"))
                writer.uint32(/* id 27, wireType 0 =*/216).uint32(message.ContractType);
            if (message.Services != null && message.Services.length)
                for (var i = 0; i < message.Services.length; ++i)
                    $root.actions.ServiceField.encode(message.Services[i], writer.uint32(/* id 28, wireType 2 =*/226).fork()).ldelim();
            if (message.AdminIdentityCertificates != null && message.AdminIdentityCertificates.length)
                for (var i = 0; i < message.AdminIdentityCertificates.length; ++i)
                    $root.actions.AdminIdentityCertificateField.encode(message.AdminIdentityCertificates[i], writer.uint32(/* id 29, wireType 2 =*/234).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified ContractOffer message, length delimited. Does not implicitly {@link actions.ContractOffer.verify|verify} messages.
         * @function encodeDelimited
         * @memberof actions.ContractOffer
         * @static
         * @param {actions.IContractOffer} message ContractOffer message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ContractOffer.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ContractOffer message from the specified reader or buffer.
         * @function decode
         * @memberof actions.ContractOffer
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {actions.ContractOffer} ContractOffer
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ContractOffer.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.actions.ContractOffer();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.ContractName = reader.string();
                    break;
                case 2:
                    message.BodyOfAgreementType = reader.uint32();
                    break;
                case 3:
                    message.BodyOfAgreement = reader.bytes();
                    break;
                case 5:
                    if (!(message.SupportingDocs && message.SupportingDocs.length))
                        message.SupportingDocs = [];
                    message.SupportingDocs.push($root.actions.DocumentField.decode(reader, reader.uint32()));
                    break;
                case 6:
                    message.GoverningLaw = reader.string();
                    break;
                case 7:
                    message.Jurisdiction = reader.string();
                    break;
                case 8:
                    message.ContractExpiration = reader.uint64();
                    break;
                case 9:
                    message.ContractURI = reader.string();
                    break;
                case 10:
                    message.Issuer = $root.actions.EntityField.decode(reader, reader.uint32());
                    break;
                case 12:
                    message.ContractOperatorIncluded = reader.bool();
                    break;
                case 17:
                    message.ContractFee = reader.uint64();
                    break;
                case 18:
                    if (!(message.VotingSystems && message.VotingSystems.length))
                        message.VotingSystems = [];
                    message.VotingSystems.push($root.actions.VotingSystemField.decode(reader, reader.uint32()));
                    break;
                case 19:
                    message.ContractPermissions = reader.bytes();
                    break;
                case 20:
                    message.RestrictedQtyAssets = reader.uint64();
                    break;
                case 21:
                    message.AdministrationProposal = reader.bool();
                    break;
                case 22:
                    message.HolderProposal = reader.bool();
                    break;
                case 23:
                    if (!(message.Oracles && message.Oracles.length))
                        message.Oracles = [];
                    message.Oracles.push($root.actions.OracleField.decode(reader, reader.uint32()));
                    break;
                case 24:
                    message.MasterAddress = reader.bytes();
                    break;
                case 25:
                    message.EntityContract = reader.bytes();
                    break;
                case 26:
                    message.OperatorEntityContract = reader.bytes();
                    break;
                case 27:
                    message.ContractType = reader.uint32();
                    break;
                case 28:
                    if (!(message.Services && message.Services.length))
                        message.Services = [];
                    message.Services.push($root.actions.ServiceField.decode(reader, reader.uint32()));
                    break;
                case 29:
                    if (!(message.AdminIdentityCertificates && message.AdminIdentityCertificates.length))
                        message.AdminIdentityCertificates = [];
                    message.AdminIdentityCertificates.push($root.actions.AdminIdentityCertificateField.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ContractOffer message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof actions.ContractOffer
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {actions.ContractOffer} ContractOffer
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ContractOffer.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ContractOffer message.
         * @function verify
         * @memberof actions.ContractOffer
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ContractOffer.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.ContractName != null && message.hasOwnProperty("ContractName"))
                if (!$util.isString(message.ContractName))
                    return "ContractName: string expected";
            if (message.BodyOfAgreementType != null && message.hasOwnProperty("BodyOfAgreementType"))
                if (!$util.isInteger(message.BodyOfAgreementType))
                    return "BodyOfAgreementType: integer expected";
            if (message.BodyOfAgreement != null && message.hasOwnProperty("BodyOfAgreement"))
                if (!(message.BodyOfAgreement && typeof message.BodyOfAgreement.length === "number" || $util.isString(message.BodyOfAgreement)))
                    return "BodyOfAgreement: buffer expected";
            if (message.SupportingDocs != null && message.hasOwnProperty("SupportingDocs")) {
                if (!Array.isArray(message.SupportingDocs))
                    return "SupportingDocs: array expected";
                for (var i = 0; i < message.SupportingDocs.length; ++i) {
                    var error = $root.actions.DocumentField.verify(message.SupportingDocs[i]);
                    if (error)
                        return "SupportingDocs." + error;
                }
            }
            if (message.GoverningLaw != null && message.hasOwnProperty("GoverningLaw"))
                if (!$util.isString(message.GoverningLaw))
                    return "GoverningLaw: string expected";
            if (message.Jurisdiction != null && message.hasOwnProperty("Jurisdiction"))
                if (!$util.isString(message.Jurisdiction))
                    return "Jurisdiction: string expected";
            if (message.ContractExpiration != null && message.hasOwnProperty("ContractExpiration"))
                if (!$util.isInteger(message.ContractExpiration) && !(message.ContractExpiration && $util.isInteger(message.ContractExpiration.low) && $util.isInteger(message.ContractExpiration.high)))
                    return "ContractExpiration: integer|Long expected";
            if (message.ContractURI != null && message.hasOwnProperty("ContractURI"))
                if (!$util.isString(message.ContractURI))
                    return "ContractURI: string expected";
            if (message.Issuer != null && message.hasOwnProperty("Issuer")) {
                var error = $root.actions.EntityField.verify(message.Issuer);
                if (error)
                    return "Issuer." + error;
            }
            if (message.ContractOperatorIncluded != null && message.hasOwnProperty("ContractOperatorIncluded"))
                if (typeof message.ContractOperatorIncluded !== "boolean")
                    return "ContractOperatorIncluded: boolean expected";
            if (message.ContractFee != null && message.hasOwnProperty("ContractFee"))
                if (!$util.isInteger(message.ContractFee) && !(message.ContractFee && $util.isInteger(message.ContractFee.low) && $util.isInteger(message.ContractFee.high)))
                    return "ContractFee: integer|Long expected";
            if (message.VotingSystems != null && message.hasOwnProperty("VotingSystems")) {
                if (!Array.isArray(message.VotingSystems))
                    return "VotingSystems: array expected";
                for (var i = 0; i < message.VotingSystems.length; ++i) {
                    var error = $root.actions.VotingSystemField.verify(message.VotingSystems[i]);
                    if (error)
                        return "VotingSystems." + error;
                }
            }
            if (message.ContractPermissions != null && message.hasOwnProperty("ContractPermissions"))
                if (!(message.ContractPermissions && typeof message.ContractPermissions.length === "number" || $util.isString(message.ContractPermissions)))
                    return "ContractPermissions: buffer expected";
            if (message.RestrictedQtyAssets != null && message.hasOwnProperty("RestrictedQtyAssets"))
                if (!$util.isInteger(message.RestrictedQtyAssets) && !(message.RestrictedQtyAssets && $util.isInteger(message.RestrictedQtyAssets.low) && $util.isInteger(message.RestrictedQtyAssets.high)))
                    return "RestrictedQtyAssets: integer|Long expected";
            if (message.AdministrationProposal != null && message.hasOwnProperty("AdministrationProposal"))
                if (typeof message.AdministrationProposal !== "boolean")
                    return "AdministrationProposal: boolean expected";
            if (message.HolderProposal != null && message.hasOwnProperty("HolderProposal"))
                if (typeof message.HolderProposal !== "boolean")
                    return "HolderProposal: boolean expected";
            if (message.Oracles != null && message.hasOwnProperty("Oracles")) {
                if (!Array.isArray(message.Oracles))
                    return "Oracles: array expected";
                for (var i = 0; i < message.Oracles.length; ++i) {
                    var error = $root.actions.OracleField.verify(message.Oracles[i]);
                    if (error)
                        return "Oracles." + error;
                }
            }
            if (message.MasterAddress != null && message.hasOwnProperty("MasterAddress"))
                if (!(message.MasterAddress && typeof message.MasterAddress.length === "number" || $util.isString(message.MasterAddress)))
                    return "MasterAddress: buffer expected";
            if (message.EntityContract != null && message.hasOwnProperty("EntityContract"))
                if (!(message.EntityContract && typeof message.EntityContract.length === "number" || $util.isString(message.EntityContract)))
                    return "EntityContract: buffer expected";
            if (message.OperatorEntityContract != null && message.hasOwnProperty("OperatorEntityContract"))
                if (!(message.OperatorEntityContract && typeof message.OperatorEntityContract.length === "number" || $util.isString(message.OperatorEntityContract)))
                    return "OperatorEntityContract: buffer expected";
            if (message.ContractType != null && message.hasOwnProperty("ContractType"))
                if (!$util.isInteger(message.ContractType))
                    return "ContractType: integer expected";
            if (message.Services != null && message.hasOwnProperty("Services")) {
                if (!Array.isArray(message.Services))
                    return "Services: array expected";
                for (var i = 0; i < message.Services.length; ++i) {
                    var error = $root.actions.ServiceField.verify(message.Services[i]);
                    if (error)
                        return "Services." + error;
                }
            }
            if (message.AdminIdentityCertificates != null && message.hasOwnProperty("AdminIdentityCertificates")) {
                if (!Array.isArray(message.AdminIdentityCertificates))
                    return "AdminIdentityCertificates: array expected";
                for (var i = 0; i < message.AdminIdentityCertificates.length; ++i) {
                    var error = $root.actions.AdminIdentityCertificateField.verify(message.AdminIdentityCertificates[i]);
                    if (error)
                        return "AdminIdentityCertificates." + error;
                }
            }
            return null;
        };

        /**
         * Creates a ContractOffer message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof actions.ContractOffer
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {actions.ContractOffer} ContractOffer
         */
        ContractOffer.fromObject = function fromObject(object) {
            if (object instanceof $root.actions.ContractOffer)
                return object;
            var message = new $root.actions.ContractOffer();
            if (object.ContractName != null)
                message.ContractName = String(object.ContractName);
            if (object.BodyOfAgreementType != null)
                message.BodyOfAgreementType = object.BodyOfAgreementType >>> 0;
            if (object.BodyOfAgreement != null)
                if (typeof object.BodyOfAgreement === "string")
                    $util.base64.decode(object.BodyOfAgreement, message.BodyOfAgreement = $util.newBuffer($util.base64.length(object.BodyOfAgreement)), 0);
                else if (object.BodyOfAgreement.length)
                    message.BodyOfAgreement = object.BodyOfAgreement;
            if (object.SupportingDocs) {
                if (!Array.isArray(object.SupportingDocs))
                    throw TypeError(".actions.ContractOffer.SupportingDocs: array expected");
                message.SupportingDocs = [];
                for (var i = 0; i < object.SupportingDocs.length; ++i) {
                    if (typeof object.SupportingDocs[i] !== "object")
                        throw TypeError(".actions.ContractOffer.SupportingDocs: object expected");
                    message.SupportingDocs[i] = $root.actions.DocumentField.fromObject(object.SupportingDocs[i]);
                }
            }
            if (object.GoverningLaw != null)
                message.GoverningLaw = String(object.GoverningLaw);
            if (object.Jurisdiction != null)
                message.Jurisdiction = String(object.Jurisdiction);
            if (object.ContractExpiration != null)
                if ($util.Long)
                    (message.ContractExpiration = $util.Long.fromValue(object.ContractExpiration)).unsigned = true;
                else if (typeof object.ContractExpiration === "string")
                    message.ContractExpiration = parseInt(object.ContractExpiration, 10);
                else if (typeof object.ContractExpiration === "number")
                    message.ContractExpiration = object.ContractExpiration;
                else if (typeof object.ContractExpiration === "object")
                    message.ContractExpiration = new $util.LongBits(object.ContractExpiration.low >>> 0, object.ContractExpiration.high >>> 0).toNumber(true);
            if (object.ContractURI != null)
                message.ContractURI = String(object.ContractURI);
            if (object.Issuer != null) {
                if (typeof object.Issuer !== "object")
                    throw TypeError(".actions.ContractOffer.Issuer: object expected");
                message.Issuer = $root.actions.EntityField.fromObject(object.Issuer);
            }
            if (object.ContractOperatorIncluded != null)
                message.ContractOperatorIncluded = Boolean(object.ContractOperatorIncluded);
            if (object.ContractFee != null)
                if ($util.Long)
                    (message.ContractFee = $util.Long.fromValue(object.ContractFee)).unsigned = true;
                else if (typeof object.ContractFee === "string")
                    message.ContractFee = parseInt(object.ContractFee, 10);
                else if (typeof object.ContractFee === "number")
                    message.ContractFee = object.ContractFee;
                else if (typeof object.ContractFee === "object")
                    message.ContractFee = new $util.LongBits(object.ContractFee.low >>> 0, object.ContractFee.high >>> 0).toNumber(true);
            if (object.VotingSystems) {
                if (!Array.isArray(object.VotingSystems))
                    throw TypeError(".actions.ContractOffer.VotingSystems: array expected");
                message.VotingSystems = [];
                for (var i = 0; i < object.VotingSystems.length; ++i) {
                    if (typeof object.VotingSystems[i] !== "object")
                        throw TypeError(".actions.ContractOffer.VotingSystems: object expected");
                    message.VotingSystems[i] = $root.actions.VotingSystemField.fromObject(object.VotingSystems[i]);
                }
            }
            if (object.ContractPermissions != null)
                if (typeof object.ContractPermissions === "string")
                    $util.base64.decode(object.ContractPermissions, message.ContractPermissions = $util.newBuffer($util.base64.length(object.ContractPermissions)), 0);
                else if (object.ContractPermissions.length)
                    message.ContractPermissions = object.ContractPermissions;
            if (object.RestrictedQtyAssets != null)
                if ($util.Long)
                    (message.RestrictedQtyAssets = $util.Long.fromValue(object.RestrictedQtyAssets)).unsigned = true;
                else if (typeof object.RestrictedQtyAssets === "string")
                    message.RestrictedQtyAssets = parseInt(object.RestrictedQtyAssets, 10);
                else if (typeof object.RestrictedQtyAssets === "number")
                    message.RestrictedQtyAssets = object.RestrictedQtyAssets;
                else if (typeof object.RestrictedQtyAssets === "object")
                    message.RestrictedQtyAssets = new $util.LongBits(object.RestrictedQtyAssets.low >>> 0, object.RestrictedQtyAssets.high >>> 0).toNumber(true);
            if (object.AdministrationProposal != null)
                message.AdministrationProposal = Boolean(object.AdministrationProposal);
            if (object.HolderProposal != null)
                message.HolderProposal = Boolean(object.HolderProposal);
            if (object.Oracles) {
                if (!Array.isArray(object.Oracles))
                    throw TypeError(".actions.ContractOffer.Oracles: array expected");
                message.Oracles = [];
                for (var i = 0; i < object.Oracles.length; ++i) {
                    if (typeof object.Oracles[i] !== "object")
                        throw TypeError(".actions.ContractOffer.Oracles: object expected");
                    message.Oracles[i] = $root.actions.OracleField.fromObject(object.Oracles[i]);
                }
            }
            if (object.MasterAddress != null)
                if (typeof object.MasterAddress === "string")
                    $util.base64.decode(object.MasterAddress, message.MasterAddress = $util.newBuffer($util.base64.length(object.MasterAddress)), 0);
                else if (object.MasterAddress.length)
                    message.MasterAddress = object.MasterAddress;
            if (object.EntityContract != null)
                if (typeof object.EntityContract === "string")
                    $util.base64.decode(object.EntityContract, message.EntityContract = $util.newBuffer($util.base64.length(object.EntityContract)), 0);
                else if (object.EntityContract.length)
                    message.EntityContract = object.EntityContract;
            if (object.OperatorEntityContract != null)
                if (typeof object.OperatorEntityContract === "string")
                    $util.base64.decode(object.OperatorEntityContract, message.OperatorEntityContract = $util.newBuffer($util.base64.length(object.OperatorEntityContract)), 0);
                else if (object.OperatorEntityContract.length)
                    message.OperatorEntityContract = object.OperatorEntityContract;
            if (object.ContractType != null)
                message.ContractType = object.ContractType >>> 0;
            if (object.Services) {
                if (!Array.isArray(object.Services))
                    throw TypeError(".actions.ContractOffer.Services: array expected");
                message.Services = [];
                for (var i = 0; i < object.Services.length; ++i) {
                    if (typeof object.Services[i] !== "object")
                        throw TypeError(".actions.ContractOffer.Services: object expected");
                    message.Services[i] = $root.actions.ServiceField.fromObject(object.Services[i]);
                }
            }
            if (object.AdminIdentityCertificates) {
                if (!Array.isArray(object.AdminIdentityCertificates))
                    throw TypeError(".actions.ContractOffer.AdminIdentityCertificates: array expected");
                message.AdminIdentityCertificates = [];
                for (var i = 0; i < object.AdminIdentityCertificates.length; ++i) {
                    if (typeof object.AdminIdentityCertificates[i] !== "object")
                        throw TypeError(".actions.ContractOffer.AdminIdentityCertificates: object expected");
                    message.AdminIdentityCertificates[i] = $root.actions.AdminIdentityCertificateField.fromObject(object.AdminIdentityCertificates[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a ContractOffer message. Also converts values to other types if specified.
         * @function toObject
         * @memberof actions.ContractOffer
         * @static
         * @param {actions.ContractOffer} message ContractOffer
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ContractOffer.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults) {
                object.SupportingDocs = [];
                object.VotingSystems = [];
                object.Oracles = [];
                object.Services = [];
                object.AdminIdentityCertificates = [];
            }
            if (options.defaults) {
                object.ContractName = "";
                object.BodyOfAgreementType = 0;
                if (options.bytes === String)
                    object.BodyOfAgreement = "";
                else {
                    object.BodyOfAgreement = [];
                    if (options.bytes !== Array)
                        object.BodyOfAgreement = $util.newBuffer(object.BodyOfAgreement);
                }
                object.GoverningLaw = "";
                object.Jurisdiction = "";
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.ContractExpiration = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.ContractExpiration = options.longs === String ? "0" : 0;
                object.ContractURI = "";
                object.Issuer = null;
                object.ContractOperatorIncluded = false;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.ContractFee = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.ContractFee = options.longs === String ? "0" : 0;
                if (options.bytes === String)
                    object.ContractPermissions = "";
                else {
                    object.ContractPermissions = [];
                    if (options.bytes !== Array)
                        object.ContractPermissions = $util.newBuffer(object.ContractPermissions);
                }
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.RestrictedQtyAssets = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.RestrictedQtyAssets = options.longs === String ? "0" : 0;
                object.AdministrationProposal = false;
                object.HolderProposal = false;
                if (options.bytes === String)
                    object.MasterAddress = "";
                else {
                    object.MasterAddress = [];
                    if (options.bytes !== Array)
                        object.MasterAddress = $util.newBuffer(object.MasterAddress);
                }
                if (options.bytes === String)
                    object.EntityContract = "";
                else {
                    object.EntityContract = [];
                    if (options.bytes !== Array)
                        object.EntityContract = $util.newBuffer(object.EntityContract);
                }
                if (options.bytes === String)
                    object.OperatorEntityContract = "";
                else {
                    object.OperatorEntityContract = [];
                    if (options.bytes !== Array)
                        object.OperatorEntityContract = $util.newBuffer(object.OperatorEntityContract);
                }
                object.ContractType = 0;
            }
            if (message.ContractName != null && message.hasOwnProperty("ContractName"))
                object.ContractName = message.ContractName;
            if (message.BodyOfAgreementType != null && message.hasOwnProperty("BodyOfAgreementType"))
                object.BodyOfAgreementType = message.BodyOfAgreementType;
            if (message.BodyOfAgreement != null && message.hasOwnProperty("BodyOfAgreement"))
                object.BodyOfAgreement = options.bytes === String ? $util.base64.encode(message.BodyOfAgreement, 0, message.BodyOfAgreement.length) : options.bytes === Array ? Array.prototype.slice.call(message.BodyOfAgreement) : message.BodyOfAgreement;
            if (message.SupportingDocs && message.SupportingDocs.length) {
                object.SupportingDocs = [];
                for (var j = 0; j < message.SupportingDocs.length; ++j)
                    object.SupportingDocs[j] = $root.actions.DocumentField.toObject(message.SupportingDocs[j], options);
            }
            if (message.GoverningLaw != null && message.hasOwnProperty("GoverningLaw"))
                object.GoverningLaw = message.GoverningLaw;
            if (message.Jurisdiction != null && message.hasOwnProperty("Jurisdiction"))
                object.Jurisdiction = message.Jurisdiction;
            if (message.ContractExpiration != null && message.hasOwnProperty("ContractExpiration"))
                if (typeof message.ContractExpiration === "number")
                    object.ContractExpiration = options.longs === String ? String(message.ContractExpiration) : message.ContractExpiration;
                else
                    object.ContractExpiration = options.longs === String ? $util.Long.prototype.toString.call(message.ContractExpiration) : options.longs === Number ? new $util.LongBits(message.ContractExpiration.low >>> 0, message.ContractExpiration.high >>> 0).toNumber(true) : message.ContractExpiration;
            if (message.ContractURI != null && message.hasOwnProperty("ContractURI"))
                object.ContractURI = message.ContractURI;
            if (message.Issuer != null && message.hasOwnProperty("Issuer"))
                object.Issuer = $root.actions.EntityField.toObject(message.Issuer, options);
            if (message.ContractOperatorIncluded != null && message.hasOwnProperty("ContractOperatorIncluded"))
                object.ContractOperatorIncluded = message.ContractOperatorIncluded;
            if (message.ContractFee != null && message.hasOwnProperty("ContractFee"))
                if (typeof message.ContractFee === "number")
                    object.ContractFee = options.longs === String ? String(message.ContractFee) : message.ContractFee;
                else
                    object.ContractFee = options.longs === String ? $util.Long.prototype.toString.call(message.ContractFee) : options.longs === Number ? new $util.LongBits(message.ContractFee.low >>> 0, message.ContractFee.high >>> 0).toNumber(true) : message.ContractFee;
            if (message.VotingSystems && message.VotingSystems.length) {
                object.VotingSystems = [];
                for (var j = 0; j < message.VotingSystems.length; ++j)
                    object.VotingSystems[j] = $root.actions.VotingSystemField.toObject(message.VotingSystems[j], options);
            }
            if (message.ContractPermissions != null && message.hasOwnProperty("ContractPermissions"))
                object.ContractPermissions = options.bytes === String ? $util.base64.encode(message.ContractPermissions, 0, message.ContractPermissions.length) : options.bytes === Array ? Array.prototype.slice.call(message.ContractPermissions) : message.ContractPermissions;
            if (message.RestrictedQtyAssets != null && message.hasOwnProperty("RestrictedQtyAssets"))
                if (typeof message.RestrictedQtyAssets === "number")
                    object.RestrictedQtyAssets = options.longs === String ? String(message.RestrictedQtyAssets) : message.RestrictedQtyAssets;
                else
                    object.RestrictedQtyAssets = options.longs === String ? $util.Long.prototype.toString.call(message.RestrictedQtyAssets) : options.longs === Number ? new $util.LongBits(message.RestrictedQtyAssets.low >>> 0, message.RestrictedQtyAssets.high >>> 0).toNumber(true) : message.RestrictedQtyAssets;
            if (message.AdministrationProposal != null && message.hasOwnProperty("AdministrationProposal"))
                object.AdministrationProposal = message.AdministrationProposal;
            if (message.HolderProposal != null && message.hasOwnProperty("HolderProposal"))
                object.HolderProposal = message.HolderProposal;
            if (message.Oracles && message.Oracles.length) {
                object.Oracles = [];
                for (var j = 0; j < message.Oracles.length; ++j)
                    object.Oracles[j] = $root.actions.OracleField.toObject(message.Oracles[j], options);
            }
            if (message.MasterAddress != null && message.hasOwnProperty("MasterAddress"))
                object.MasterAddress = options.bytes === String ? $util.base64.encode(message.MasterAddress, 0, message.MasterAddress.length) : options.bytes === Array ? Array.prototype.slice.call(message.MasterAddress) : message.MasterAddress;
            if (message.EntityContract != null && message.hasOwnProperty("EntityContract"))
                object.EntityContract = options.bytes === String ? $util.base64.encode(message.EntityContract, 0, message.EntityContract.length) : options.bytes === Array ? Array.prototype.slice.call(message.EntityContract) : message.EntityContract;
            if (message.OperatorEntityContract != null && message.hasOwnProperty("OperatorEntityContract"))
                object.OperatorEntityContract = options.bytes === String ? $util.base64.encode(message.OperatorEntityContract, 0, message.OperatorEntityContract.length) : options.bytes === Array ? Array.prototype.slice.call(message.OperatorEntityContract) : message.OperatorEntityContract;
            if (message.ContractType != null && message.hasOwnProperty("ContractType"))
                object.ContractType = message.ContractType;
            if (message.Services && message.Services.length) {
                object.Services = [];
                for (var j = 0; j < message.Services.length; ++j)
                    object.Services[j] = $root.actions.ServiceField.toObject(message.Services[j], options);
            }
            if (message.AdminIdentityCertificates && message.AdminIdentityCertificates.length) {
                object.AdminIdentityCertificates = [];
                for (var j = 0; j < message.AdminIdentityCertificates.length; ++j)
                    object.AdminIdentityCertificates[j] = $root.actions.AdminIdentityCertificateField.toObject(message.AdminIdentityCertificates[j], options);
            }
            return object;
        };

        /**
         * Converts this ContractOffer to JSON.
         * @function toJSON
         * @memberof actions.ContractOffer
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ContractOffer.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ContractOffer;
    })();

    actions.ContractFormation = (function() {

        /**
         * Properties of a ContractFormation.
         * @memberof actions
         * @interface IContractFormation
         * @property {string|null} [ContractName] ContractFormation ContractName
         * @property {number|null} [BodyOfAgreementType] ContractFormation BodyOfAgreementType
         * @property {Uint8Array|null} [BodyOfAgreement] ContractFormation BodyOfAgreement
         * @property {Array.<actions.IDocumentField>|null} [SupportingDocs] ContractFormation SupportingDocs
         * @property {string|null} [GoverningLaw] ContractFormation GoverningLaw
         * @property {string|null} [Jurisdiction] ContractFormation Jurisdiction
         * @property {number|Long|null} [ContractExpiration] ContractFormation ContractExpiration
         * @property {string|null} [ContractURI] ContractFormation ContractURI
         * @property {actions.IEntityField|null} [Issuer] ContractFormation Issuer
         * @property {number|Long|null} [ContractFee] ContractFormation ContractFee
         * @property {Array.<actions.IVotingSystemField>|null} [VotingSystems] ContractFormation VotingSystems
         * @property {Uint8Array|null} [ContractPermissions] ContractFormation ContractPermissions
         * @property {number|Long|null} [RestrictedQtyAssets] ContractFormation RestrictedQtyAssets
         * @property {boolean|null} [AdministrationProposal] ContractFormation AdministrationProposal
         * @property {boolean|null} [HolderProposal] ContractFormation HolderProposal
         * @property {Array.<actions.IOracleField>|null} [Oracles] ContractFormation Oracles
         * @property {Uint8Array|null} [MasterAddress] ContractFormation MasterAddress
         * @property {number|null} [ContractRevision] ContractFormation ContractRevision
         * @property {number|Long|null} [Timestamp] ContractFormation Timestamp
         * @property {Uint8Array|null} [EntityContract] ContractFormation EntityContract
         * @property {Uint8Array|null} [OperatorEntityContract] ContractFormation OperatorEntityContract
         * @property {number|null} [ContractType] ContractFormation ContractType
         * @property {Array.<actions.IServiceField>|null} [Services] ContractFormation Services
         * @property {Array.<actions.IAdminIdentityCertificateField>|null} [AdminIdentityCertificates] ContractFormation AdminIdentityCertificates
         * @property {Uint8Array|null} [AdminAddress] ContractFormation AdminAddress
         * @property {Uint8Array|null} [OperatorAddress] ContractFormation OperatorAddress
         */

        /**
         * Constructs a new ContractFormation.
         * @memberof actions
         * @classdesc Represents a ContractFormation.
         * @implements IContractFormation
         * @constructor
         * @param {actions.IContractFormation=} [properties] Properties to set
         */
        function ContractFormation(properties) {
            this.SupportingDocs = [];
            this.VotingSystems = [];
            this.Oracles = [];
            this.Services = [];
            this.AdminIdentityCertificates = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ContractFormation ContractName.
         * @member {string} ContractName
         * @memberof actions.ContractFormation
         * @instance
         */
        ContractFormation.prototype.ContractName = "";

        /**
         * ContractFormation BodyOfAgreementType.
         * @member {number} BodyOfAgreementType
         * @memberof actions.ContractFormation
         * @instance
         */
        ContractFormation.prototype.BodyOfAgreementType = 0;

        /**
         * ContractFormation BodyOfAgreement.
         * @member {Uint8Array} BodyOfAgreement
         * @memberof actions.ContractFormation
         * @instance
         */
        ContractFormation.prototype.BodyOfAgreement = $util.newBuffer([]);

        /**
         * ContractFormation SupportingDocs.
         * @member {Array.<actions.IDocumentField>} SupportingDocs
         * @memberof actions.ContractFormation
         * @instance
         */
        ContractFormation.prototype.SupportingDocs = $util.emptyArray;

        /**
         * ContractFormation GoverningLaw.
         * @member {string} GoverningLaw
         * @memberof actions.ContractFormation
         * @instance
         */
        ContractFormation.prototype.GoverningLaw = "";

        /**
         * ContractFormation Jurisdiction.
         * @member {string} Jurisdiction
         * @memberof actions.ContractFormation
         * @instance
         */
        ContractFormation.prototype.Jurisdiction = "";

        /**
         * ContractFormation ContractExpiration.
         * @member {number|Long} ContractExpiration
         * @memberof actions.ContractFormation
         * @instance
         */
        ContractFormation.prototype.ContractExpiration = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * ContractFormation ContractURI.
         * @member {string} ContractURI
         * @memberof actions.ContractFormation
         * @instance
         */
        ContractFormation.prototype.ContractURI = "";

        /**
         * ContractFormation Issuer.
         * @member {actions.IEntityField|null|undefined} Issuer
         * @memberof actions.ContractFormation
         * @instance
         */
        ContractFormation.prototype.Issuer = null;

        /**
         * ContractFormation ContractFee.
         * @member {number|Long} ContractFee
         * @memberof actions.ContractFormation
         * @instance
         */
        ContractFormation.prototype.ContractFee = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * ContractFormation VotingSystems.
         * @member {Array.<actions.IVotingSystemField>} VotingSystems
         * @memberof actions.ContractFormation
         * @instance
         */
        ContractFormation.prototype.VotingSystems = $util.emptyArray;

        /**
         * ContractFormation ContractPermissions.
         * @member {Uint8Array} ContractPermissions
         * @memberof actions.ContractFormation
         * @instance
         */
        ContractFormation.prototype.ContractPermissions = $util.newBuffer([]);

        /**
         * ContractFormation RestrictedQtyAssets.
         * @member {number|Long} RestrictedQtyAssets
         * @memberof actions.ContractFormation
         * @instance
         */
        ContractFormation.prototype.RestrictedQtyAssets = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * ContractFormation AdministrationProposal.
         * @member {boolean} AdministrationProposal
         * @memberof actions.ContractFormation
         * @instance
         */
        ContractFormation.prototype.AdministrationProposal = false;

        /**
         * ContractFormation HolderProposal.
         * @member {boolean} HolderProposal
         * @memberof actions.ContractFormation
         * @instance
         */
        ContractFormation.prototype.HolderProposal = false;

        /**
         * ContractFormation Oracles.
         * @member {Array.<actions.IOracleField>} Oracles
         * @memberof actions.ContractFormation
         * @instance
         */
        ContractFormation.prototype.Oracles = $util.emptyArray;

        /**
         * ContractFormation MasterAddress.
         * @member {Uint8Array} MasterAddress
         * @memberof actions.ContractFormation
         * @instance
         */
        ContractFormation.prototype.MasterAddress = $util.newBuffer([]);

        /**
         * ContractFormation ContractRevision.
         * @member {number} ContractRevision
         * @memberof actions.ContractFormation
         * @instance
         */
        ContractFormation.prototype.ContractRevision = 0;

        /**
         * ContractFormation Timestamp.
         * @member {number|Long} Timestamp
         * @memberof actions.ContractFormation
         * @instance
         */
        ContractFormation.prototype.Timestamp = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * ContractFormation EntityContract.
         * @member {Uint8Array} EntityContract
         * @memberof actions.ContractFormation
         * @instance
         */
        ContractFormation.prototype.EntityContract = $util.newBuffer([]);

        /**
         * ContractFormation OperatorEntityContract.
         * @member {Uint8Array} OperatorEntityContract
         * @memberof actions.ContractFormation
         * @instance
         */
        ContractFormation.prototype.OperatorEntityContract = $util.newBuffer([]);

        /**
         * ContractFormation ContractType.
         * @member {number} ContractType
         * @memberof actions.ContractFormation
         * @instance
         */
        ContractFormation.prototype.ContractType = 0;

        /**
         * ContractFormation Services.
         * @member {Array.<actions.IServiceField>} Services
         * @memberof actions.ContractFormation
         * @instance
         */
        ContractFormation.prototype.Services = $util.emptyArray;

        /**
         * ContractFormation AdminIdentityCertificates.
         * @member {Array.<actions.IAdminIdentityCertificateField>} AdminIdentityCertificates
         * @memberof actions.ContractFormation
         * @instance
         */
        ContractFormation.prototype.AdminIdentityCertificates = $util.emptyArray;

        /**
         * ContractFormation AdminAddress.
         * @member {Uint8Array} AdminAddress
         * @memberof actions.ContractFormation
         * @instance
         */
        ContractFormation.prototype.AdminAddress = $util.newBuffer([]);

        /**
         * ContractFormation OperatorAddress.
         * @member {Uint8Array} OperatorAddress
         * @memberof actions.ContractFormation
         * @instance
         */
        ContractFormation.prototype.OperatorAddress = $util.newBuffer([]);

        /**
         * Creates a new ContractFormation instance using the specified properties.
         * @function create
         * @memberof actions.ContractFormation
         * @static
         * @param {actions.IContractFormation=} [properties] Properties to set
         * @returns {actions.ContractFormation} ContractFormation instance
         */
        ContractFormation.create = function create(properties) {
            return new ContractFormation(properties);
        };

        /**
         * Encodes the specified ContractFormation message. Does not implicitly {@link actions.ContractFormation.verify|verify} messages.
         * @function encode
         * @memberof actions.ContractFormation
         * @static
         * @param {actions.IContractFormation} message ContractFormation message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ContractFormation.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.ContractName != null && Object.hasOwnProperty.call(message, "ContractName"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.ContractName);
            if (message.BodyOfAgreementType != null && Object.hasOwnProperty.call(message, "BodyOfAgreementType"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.BodyOfAgreementType);
            if (message.BodyOfAgreement != null && Object.hasOwnProperty.call(message, "BodyOfAgreement"))
                writer.uint32(/* id 3, wireType 2 =*/26).bytes(message.BodyOfAgreement);
            if (message.SupportingDocs != null && message.SupportingDocs.length)
                for (var i = 0; i < message.SupportingDocs.length; ++i)
                    $root.actions.DocumentField.encode(message.SupportingDocs[i], writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
            if (message.GoverningLaw != null && Object.hasOwnProperty.call(message, "GoverningLaw"))
                writer.uint32(/* id 6, wireType 2 =*/50).string(message.GoverningLaw);
            if (message.Jurisdiction != null && Object.hasOwnProperty.call(message, "Jurisdiction"))
                writer.uint32(/* id 7, wireType 2 =*/58).string(message.Jurisdiction);
            if (message.ContractExpiration != null && Object.hasOwnProperty.call(message, "ContractExpiration"))
                writer.uint32(/* id 8, wireType 0 =*/64).uint64(message.ContractExpiration);
            if (message.ContractURI != null && Object.hasOwnProperty.call(message, "ContractURI"))
                writer.uint32(/* id 9, wireType 2 =*/74).string(message.ContractURI);
            if (message.Issuer != null && Object.hasOwnProperty.call(message, "Issuer"))
                $root.actions.EntityField.encode(message.Issuer, writer.uint32(/* id 10, wireType 2 =*/82).fork()).ldelim();
            if (message.ContractFee != null && Object.hasOwnProperty.call(message, "ContractFee"))
                writer.uint32(/* id 16, wireType 0 =*/128).uint64(message.ContractFee);
            if (message.VotingSystems != null && message.VotingSystems.length)
                for (var i = 0; i < message.VotingSystems.length; ++i)
                    $root.actions.VotingSystemField.encode(message.VotingSystems[i], writer.uint32(/* id 17, wireType 2 =*/138).fork()).ldelim();
            if (message.ContractPermissions != null && Object.hasOwnProperty.call(message, "ContractPermissions"))
                writer.uint32(/* id 18, wireType 2 =*/146).bytes(message.ContractPermissions);
            if (message.RestrictedQtyAssets != null && Object.hasOwnProperty.call(message, "RestrictedQtyAssets"))
                writer.uint32(/* id 19, wireType 0 =*/152).uint64(message.RestrictedQtyAssets);
            if (message.AdministrationProposal != null && Object.hasOwnProperty.call(message, "AdministrationProposal"))
                writer.uint32(/* id 20, wireType 0 =*/160).bool(message.AdministrationProposal);
            if (message.HolderProposal != null && Object.hasOwnProperty.call(message, "HolderProposal"))
                writer.uint32(/* id 21, wireType 0 =*/168).bool(message.HolderProposal);
            if (message.Oracles != null && message.Oracles.length)
                for (var i = 0; i < message.Oracles.length; ++i)
                    $root.actions.OracleField.encode(message.Oracles[i], writer.uint32(/* id 22, wireType 2 =*/178).fork()).ldelim();
            if (message.MasterAddress != null && Object.hasOwnProperty.call(message, "MasterAddress"))
                writer.uint32(/* id 23, wireType 2 =*/186).bytes(message.MasterAddress);
            if (message.ContractRevision != null && Object.hasOwnProperty.call(message, "ContractRevision"))
                writer.uint32(/* id 24, wireType 0 =*/192).uint32(message.ContractRevision);
            if (message.Timestamp != null && Object.hasOwnProperty.call(message, "Timestamp"))
                writer.uint32(/* id 25, wireType 0 =*/200).uint64(message.Timestamp);
            if (message.EntityContract != null && Object.hasOwnProperty.call(message, "EntityContract"))
                writer.uint32(/* id 26, wireType 2 =*/210).bytes(message.EntityContract);
            if (message.OperatorEntityContract != null && Object.hasOwnProperty.call(message, "OperatorEntityContract"))
                writer.uint32(/* id 27, wireType 2 =*/218).bytes(message.OperatorEntityContract);
            if (message.ContractType != null && Object.hasOwnProperty.call(message, "ContractType"))
                writer.uint32(/* id 28, wireType 0 =*/224).uint32(message.ContractType);
            if (message.Services != null && message.Services.length)
                for (var i = 0; i < message.Services.length; ++i)
                    $root.actions.ServiceField.encode(message.Services[i], writer.uint32(/* id 29, wireType 2 =*/234).fork()).ldelim();
            if (message.AdminIdentityCertificates != null && message.AdminIdentityCertificates.length)
                for (var i = 0; i < message.AdminIdentityCertificates.length; ++i)
                    $root.actions.AdminIdentityCertificateField.encode(message.AdminIdentityCertificates[i], writer.uint32(/* id 30, wireType 2 =*/242).fork()).ldelim();
            if (message.AdminAddress != null && Object.hasOwnProperty.call(message, "AdminAddress"))
                writer.uint32(/* id 31, wireType 2 =*/250).bytes(message.AdminAddress);
            if (message.OperatorAddress != null && Object.hasOwnProperty.call(message, "OperatorAddress"))
                writer.uint32(/* id 32, wireType 2 =*/258).bytes(message.OperatorAddress);
            return writer;
        };

        /**
         * Encodes the specified ContractFormation message, length delimited. Does not implicitly {@link actions.ContractFormation.verify|verify} messages.
         * @function encodeDelimited
         * @memberof actions.ContractFormation
         * @static
         * @param {actions.IContractFormation} message ContractFormation message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ContractFormation.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ContractFormation message from the specified reader or buffer.
         * @function decode
         * @memberof actions.ContractFormation
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {actions.ContractFormation} ContractFormation
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ContractFormation.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.actions.ContractFormation();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.ContractName = reader.string();
                    break;
                case 2:
                    message.BodyOfAgreementType = reader.uint32();
                    break;
                case 3:
                    message.BodyOfAgreement = reader.bytes();
                    break;
                case 5:
                    if (!(message.SupportingDocs && message.SupportingDocs.length))
                        message.SupportingDocs = [];
                    message.SupportingDocs.push($root.actions.DocumentField.decode(reader, reader.uint32()));
                    break;
                case 6:
                    message.GoverningLaw = reader.string();
                    break;
                case 7:
                    message.Jurisdiction = reader.string();
                    break;
                case 8:
                    message.ContractExpiration = reader.uint64();
                    break;
                case 9:
                    message.ContractURI = reader.string();
                    break;
                case 10:
                    message.Issuer = $root.actions.EntityField.decode(reader, reader.uint32());
                    break;
                case 16:
                    message.ContractFee = reader.uint64();
                    break;
                case 17:
                    if (!(message.VotingSystems && message.VotingSystems.length))
                        message.VotingSystems = [];
                    message.VotingSystems.push($root.actions.VotingSystemField.decode(reader, reader.uint32()));
                    break;
                case 18:
                    message.ContractPermissions = reader.bytes();
                    break;
                case 19:
                    message.RestrictedQtyAssets = reader.uint64();
                    break;
                case 20:
                    message.AdministrationProposal = reader.bool();
                    break;
                case 21:
                    message.HolderProposal = reader.bool();
                    break;
                case 22:
                    if (!(message.Oracles && message.Oracles.length))
                        message.Oracles = [];
                    message.Oracles.push($root.actions.OracleField.decode(reader, reader.uint32()));
                    break;
                case 23:
                    message.MasterAddress = reader.bytes();
                    break;
                case 24:
                    message.ContractRevision = reader.uint32();
                    break;
                case 25:
                    message.Timestamp = reader.uint64();
                    break;
                case 26:
                    message.EntityContract = reader.bytes();
                    break;
                case 27:
                    message.OperatorEntityContract = reader.bytes();
                    break;
                case 28:
                    message.ContractType = reader.uint32();
                    break;
                case 29:
                    if (!(message.Services && message.Services.length))
                        message.Services = [];
                    message.Services.push($root.actions.ServiceField.decode(reader, reader.uint32()));
                    break;
                case 30:
                    if (!(message.AdminIdentityCertificates && message.AdminIdentityCertificates.length))
                        message.AdminIdentityCertificates = [];
                    message.AdminIdentityCertificates.push($root.actions.AdminIdentityCertificateField.decode(reader, reader.uint32()));
                    break;
                case 31:
                    message.AdminAddress = reader.bytes();
                    break;
                case 32:
                    message.OperatorAddress = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ContractFormation message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof actions.ContractFormation
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {actions.ContractFormation} ContractFormation
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ContractFormation.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ContractFormation message.
         * @function verify
         * @memberof actions.ContractFormation
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ContractFormation.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.ContractName != null && message.hasOwnProperty("ContractName"))
                if (!$util.isString(message.ContractName))
                    return "ContractName: string expected";
            if (message.BodyOfAgreementType != null && message.hasOwnProperty("BodyOfAgreementType"))
                if (!$util.isInteger(message.BodyOfAgreementType))
                    return "BodyOfAgreementType: integer expected";
            if (message.BodyOfAgreement != null && message.hasOwnProperty("BodyOfAgreement"))
                if (!(message.BodyOfAgreement && typeof message.BodyOfAgreement.length === "number" || $util.isString(message.BodyOfAgreement)))
                    return "BodyOfAgreement: buffer expected";
            if (message.SupportingDocs != null && message.hasOwnProperty("SupportingDocs")) {
                if (!Array.isArray(message.SupportingDocs))
                    return "SupportingDocs: array expected";
                for (var i = 0; i < message.SupportingDocs.length; ++i) {
                    var error = $root.actions.DocumentField.verify(message.SupportingDocs[i]);
                    if (error)
                        return "SupportingDocs." + error;
                }
            }
            if (message.GoverningLaw != null && message.hasOwnProperty("GoverningLaw"))
                if (!$util.isString(message.GoverningLaw))
                    return "GoverningLaw: string expected";
            if (message.Jurisdiction != null && message.hasOwnProperty("Jurisdiction"))
                if (!$util.isString(message.Jurisdiction))
                    return "Jurisdiction: string expected";
            if (message.ContractExpiration != null && message.hasOwnProperty("ContractExpiration"))
                if (!$util.isInteger(message.ContractExpiration) && !(message.ContractExpiration && $util.isInteger(message.ContractExpiration.low) && $util.isInteger(message.ContractExpiration.high)))
                    return "ContractExpiration: integer|Long expected";
            if (message.ContractURI != null && message.hasOwnProperty("ContractURI"))
                if (!$util.isString(message.ContractURI))
                    return "ContractURI: string expected";
            if (message.Issuer != null && message.hasOwnProperty("Issuer")) {
                var error = $root.actions.EntityField.verify(message.Issuer);
                if (error)
                    return "Issuer." + error;
            }
            if (message.ContractFee != null && message.hasOwnProperty("ContractFee"))
                if (!$util.isInteger(message.ContractFee) && !(message.ContractFee && $util.isInteger(message.ContractFee.low) && $util.isInteger(message.ContractFee.high)))
                    return "ContractFee: integer|Long expected";
            if (message.VotingSystems != null && message.hasOwnProperty("VotingSystems")) {
                if (!Array.isArray(message.VotingSystems))
                    return "VotingSystems: array expected";
                for (var i = 0; i < message.VotingSystems.length; ++i) {
                    var error = $root.actions.VotingSystemField.verify(message.VotingSystems[i]);
                    if (error)
                        return "VotingSystems." + error;
                }
            }
            if (message.ContractPermissions != null && message.hasOwnProperty("ContractPermissions"))
                if (!(message.ContractPermissions && typeof message.ContractPermissions.length === "number" || $util.isString(message.ContractPermissions)))
                    return "ContractPermissions: buffer expected";
            if (message.RestrictedQtyAssets != null && message.hasOwnProperty("RestrictedQtyAssets"))
                if (!$util.isInteger(message.RestrictedQtyAssets) && !(message.RestrictedQtyAssets && $util.isInteger(message.RestrictedQtyAssets.low) && $util.isInteger(message.RestrictedQtyAssets.high)))
                    return "RestrictedQtyAssets: integer|Long expected";
            if (message.AdministrationProposal != null && message.hasOwnProperty("AdministrationProposal"))
                if (typeof message.AdministrationProposal !== "boolean")
                    return "AdministrationProposal: boolean expected";
            if (message.HolderProposal != null && message.hasOwnProperty("HolderProposal"))
                if (typeof message.HolderProposal !== "boolean")
                    return "HolderProposal: boolean expected";
            if (message.Oracles != null && message.hasOwnProperty("Oracles")) {
                if (!Array.isArray(message.Oracles))
                    return "Oracles: array expected";
                for (var i = 0; i < message.Oracles.length; ++i) {
                    var error = $root.actions.OracleField.verify(message.Oracles[i]);
                    if (error)
                        return "Oracles." + error;
                }
            }
            if (message.MasterAddress != null && message.hasOwnProperty("MasterAddress"))
                if (!(message.MasterAddress && typeof message.MasterAddress.length === "number" || $util.isString(message.MasterAddress)))
                    return "MasterAddress: buffer expected";
            if (message.ContractRevision != null && message.hasOwnProperty("ContractRevision"))
                if (!$util.isInteger(message.ContractRevision))
                    return "ContractRevision: integer expected";
            if (message.Timestamp != null && message.hasOwnProperty("Timestamp"))
                if (!$util.isInteger(message.Timestamp) && !(message.Timestamp && $util.isInteger(message.Timestamp.low) && $util.isInteger(message.Timestamp.high)))
                    return "Timestamp: integer|Long expected";
            if (message.EntityContract != null && message.hasOwnProperty("EntityContract"))
                if (!(message.EntityContract && typeof message.EntityContract.length === "number" || $util.isString(message.EntityContract)))
                    return "EntityContract: buffer expected";
            if (message.OperatorEntityContract != null && message.hasOwnProperty("OperatorEntityContract"))
                if (!(message.OperatorEntityContract && typeof message.OperatorEntityContract.length === "number" || $util.isString(message.OperatorEntityContract)))
                    return "OperatorEntityContract: buffer expected";
            if (message.ContractType != null && message.hasOwnProperty("ContractType"))
                if (!$util.isInteger(message.ContractType))
                    return "ContractType: integer expected";
            if (message.Services != null && message.hasOwnProperty("Services")) {
                if (!Array.isArray(message.Services))
                    return "Services: array expected";
                for (var i = 0; i < message.Services.length; ++i) {
                    var error = $root.actions.ServiceField.verify(message.Services[i]);
                    if (error)
                        return "Services." + error;
                }
            }
            if (message.AdminIdentityCertificates != null && message.hasOwnProperty("AdminIdentityCertificates")) {
                if (!Array.isArray(message.AdminIdentityCertificates))
                    return "AdminIdentityCertificates: array expected";
                for (var i = 0; i < message.AdminIdentityCertificates.length; ++i) {
                    var error = $root.actions.AdminIdentityCertificateField.verify(message.AdminIdentityCertificates[i]);
                    if (error)
                        return "AdminIdentityCertificates." + error;
                }
            }
            if (message.AdminAddress != null && message.hasOwnProperty("AdminAddress"))
                if (!(message.AdminAddress && typeof message.AdminAddress.length === "number" || $util.isString(message.AdminAddress)))
                    return "AdminAddress: buffer expected";
            if (message.OperatorAddress != null && message.hasOwnProperty("OperatorAddress"))
                if (!(message.OperatorAddress && typeof message.OperatorAddress.length === "number" || $util.isString(message.OperatorAddress)))
                    return "OperatorAddress: buffer expected";
            return null;
        };

        /**
         * Creates a ContractFormation message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof actions.ContractFormation
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {actions.ContractFormation} ContractFormation
         */
        ContractFormation.fromObject = function fromObject(object) {
            if (object instanceof $root.actions.ContractFormation)
                return object;
            var message = new $root.actions.ContractFormation();
            if (object.ContractName != null)
                message.ContractName = String(object.ContractName);
            if (object.BodyOfAgreementType != null)
                message.BodyOfAgreementType = object.BodyOfAgreementType >>> 0;
            if (object.BodyOfAgreement != null)
                if (typeof object.BodyOfAgreement === "string")
                    $util.base64.decode(object.BodyOfAgreement, message.BodyOfAgreement = $util.newBuffer($util.base64.length(object.BodyOfAgreement)), 0);
                else if (object.BodyOfAgreement.length)
                    message.BodyOfAgreement = object.BodyOfAgreement;
            if (object.SupportingDocs) {
                if (!Array.isArray(object.SupportingDocs))
                    throw TypeError(".actions.ContractFormation.SupportingDocs: array expected");
                message.SupportingDocs = [];
                for (var i = 0; i < object.SupportingDocs.length; ++i) {
                    if (typeof object.SupportingDocs[i] !== "object")
                        throw TypeError(".actions.ContractFormation.SupportingDocs: object expected");
                    message.SupportingDocs[i] = $root.actions.DocumentField.fromObject(object.SupportingDocs[i]);
                }
            }
            if (object.GoverningLaw != null)
                message.GoverningLaw = String(object.GoverningLaw);
            if (object.Jurisdiction != null)
                message.Jurisdiction = String(object.Jurisdiction);
            if (object.ContractExpiration != null)
                if ($util.Long)
                    (message.ContractExpiration = $util.Long.fromValue(object.ContractExpiration)).unsigned = true;
                else if (typeof object.ContractExpiration === "string")
                    message.ContractExpiration = parseInt(object.ContractExpiration, 10);
                else if (typeof object.ContractExpiration === "number")
                    message.ContractExpiration = object.ContractExpiration;
                else if (typeof object.ContractExpiration === "object")
                    message.ContractExpiration = new $util.LongBits(object.ContractExpiration.low >>> 0, object.ContractExpiration.high >>> 0).toNumber(true);
            if (object.ContractURI != null)
                message.ContractURI = String(object.ContractURI);
            if (object.Issuer != null) {
                if (typeof object.Issuer !== "object")
                    throw TypeError(".actions.ContractFormation.Issuer: object expected");
                message.Issuer = $root.actions.EntityField.fromObject(object.Issuer);
            }
            if (object.ContractFee != null)
                if ($util.Long)
                    (message.ContractFee = $util.Long.fromValue(object.ContractFee)).unsigned = true;
                else if (typeof object.ContractFee === "string")
                    message.ContractFee = parseInt(object.ContractFee, 10);
                else if (typeof object.ContractFee === "number")
                    message.ContractFee = object.ContractFee;
                else if (typeof object.ContractFee === "object")
                    message.ContractFee = new $util.LongBits(object.ContractFee.low >>> 0, object.ContractFee.high >>> 0).toNumber(true);
            if (object.VotingSystems) {
                if (!Array.isArray(object.VotingSystems))
                    throw TypeError(".actions.ContractFormation.VotingSystems: array expected");
                message.VotingSystems = [];
                for (var i = 0; i < object.VotingSystems.length; ++i) {
                    if (typeof object.VotingSystems[i] !== "object")
                        throw TypeError(".actions.ContractFormation.VotingSystems: object expected");
                    message.VotingSystems[i] = $root.actions.VotingSystemField.fromObject(object.VotingSystems[i]);
                }
            }
            if (object.ContractPermissions != null)
                if (typeof object.ContractPermissions === "string")
                    $util.base64.decode(object.ContractPermissions, message.ContractPermissions = $util.newBuffer($util.base64.length(object.ContractPermissions)), 0);
                else if (object.ContractPermissions.length)
                    message.ContractPermissions = object.ContractPermissions;
            if (object.RestrictedQtyAssets != null)
                if ($util.Long)
                    (message.RestrictedQtyAssets = $util.Long.fromValue(object.RestrictedQtyAssets)).unsigned = true;
                else if (typeof object.RestrictedQtyAssets === "string")
                    message.RestrictedQtyAssets = parseInt(object.RestrictedQtyAssets, 10);
                else if (typeof object.RestrictedQtyAssets === "number")
                    message.RestrictedQtyAssets = object.RestrictedQtyAssets;
                else if (typeof object.RestrictedQtyAssets === "object")
                    message.RestrictedQtyAssets = new $util.LongBits(object.RestrictedQtyAssets.low >>> 0, object.RestrictedQtyAssets.high >>> 0).toNumber(true);
            if (object.AdministrationProposal != null)
                message.AdministrationProposal = Boolean(object.AdministrationProposal);
            if (object.HolderProposal != null)
                message.HolderProposal = Boolean(object.HolderProposal);
            if (object.Oracles) {
                if (!Array.isArray(object.Oracles))
                    throw TypeError(".actions.ContractFormation.Oracles: array expected");
                message.Oracles = [];
                for (var i = 0; i < object.Oracles.length; ++i) {
                    if (typeof object.Oracles[i] !== "object")
                        throw TypeError(".actions.ContractFormation.Oracles: object expected");
                    message.Oracles[i] = $root.actions.OracleField.fromObject(object.Oracles[i]);
                }
            }
            if (object.MasterAddress != null)
                if (typeof object.MasterAddress === "string")
                    $util.base64.decode(object.MasterAddress, message.MasterAddress = $util.newBuffer($util.base64.length(object.MasterAddress)), 0);
                else if (object.MasterAddress.length)
                    message.MasterAddress = object.MasterAddress;
            if (object.ContractRevision != null)
                message.ContractRevision = object.ContractRevision >>> 0;
            if (object.Timestamp != null)
                if ($util.Long)
                    (message.Timestamp = $util.Long.fromValue(object.Timestamp)).unsigned = true;
                else if (typeof object.Timestamp === "string")
                    message.Timestamp = parseInt(object.Timestamp, 10);
                else if (typeof object.Timestamp === "number")
                    message.Timestamp = object.Timestamp;
                else if (typeof object.Timestamp === "object")
                    message.Timestamp = new $util.LongBits(object.Timestamp.low >>> 0, object.Timestamp.high >>> 0).toNumber(true);
            if (object.EntityContract != null)
                if (typeof object.EntityContract === "string")
                    $util.base64.decode(object.EntityContract, message.EntityContract = $util.newBuffer($util.base64.length(object.EntityContract)), 0);
                else if (object.EntityContract.length)
                    message.EntityContract = object.EntityContract;
            if (object.OperatorEntityContract != null)
                if (typeof object.OperatorEntityContract === "string")
                    $util.base64.decode(object.OperatorEntityContract, message.OperatorEntityContract = $util.newBuffer($util.base64.length(object.OperatorEntityContract)), 0);
                else if (object.OperatorEntityContract.length)
                    message.OperatorEntityContract = object.OperatorEntityContract;
            if (object.ContractType != null)
                message.ContractType = object.ContractType >>> 0;
            if (object.Services) {
                if (!Array.isArray(object.Services))
                    throw TypeError(".actions.ContractFormation.Services: array expected");
                message.Services = [];
                for (var i = 0; i < object.Services.length; ++i) {
                    if (typeof object.Services[i] !== "object")
                        throw TypeError(".actions.ContractFormation.Services: object expected");
                    message.Services[i] = $root.actions.ServiceField.fromObject(object.Services[i]);
                }
            }
            if (object.AdminIdentityCertificates) {
                if (!Array.isArray(object.AdminIdentityCertificates))
                    throw TypeError(".actions.ContractFormation.AdminIdentityCertificates: array expected");
                message.AdminIdentityCertificates = [];
                for (var i = 0; i < object.AdminIdentityCertificates.length; ++i) {
                    if (typeof object.AdminIdentityCertificates[i] !== "object")
                        throw TypeError(".actions.ContractFormation.AdminIdentityCertificates: object expected");
                    message.AdminIdentityCertificates[i] = $root.actions.AdminIdentityCertificateField.fromObject(object.AdminIdentityCertificates[i]);
                }
            }
            if (object.AdminAddress != null)
                if (typeof object.AdminAddress === "string")
                    $util.base64.decode(object.AdminAddress, message.AdminAddress = $util.newBuffer($util.base64.length(object.AdminAddress)), 0);
                else if (object.AdminAddress.length)
                    message.AdminAddress = object.AdminAddress;
            if (object.OperatorAddress != null)
                if (typeof object.OperatorAddress === "string")
                    $util.base64.decode(object.OperatorAddress, message.OperatorAddress = $util.newBuffer($util.base64.length(object.OperatorAddress)), 0);
                else if (object.OperatorAddress.length)
                    message.OperatorAddress = object.OperatorAddress;
            return message;
        };

        /**
         * Creates a plain object from a ContractFormation message. Also converts values to other types if specified.
         * @function toObject
         * @memberof actions.ContractFormation
         * @static
         * @param {actions.ContractFormation} message ContractFormation
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ContractFormation.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults) {
                object.SupportingDocs = [];
                object.VotingSystems = [];
                object.Oracles = [];
                object.Services = [];
                object.AdminIdentityCertificates = [];
            }
            if (options.defaults) {
                object.ContractName = "";
                object.BodyOfAgreementType = 0;
                if (options.bytes === String)
                    object.BodyOfAgreement = "";
                else {
                    object.BodyOfAgreement = [];
                    if (options.bytes !== Array)
                        object.BodyOfAgreement = $util.newBuffer(object.BodyOfAgreement);
                }
                object.GoverningLaw = "";
                object.Jurisdiction = "";
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.ContractExpiration = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.ContractExpiration = options.longs === String ? "0" : 0;
                object.ContractURI = "";
                object.Issuer = null;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.ContractFee = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.ContractFee = options.longs === String ? "0" : 0;
                if (options.bytes === String)
                    object.ContractPermissions = "";
                else {
                    object.ContractPermissions = [];
                    if (options.bytes !== Array)
                        object.ContractPermissions = $util.newBuffer(object.ContractPermissions);
                }
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.RestrictedQtyAssets = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.RestrictedQtyAssets = options.longs === String ? "0" : 0;
                object.AdministrationProposal = false;
                object.HolderProposal = false;
                if (options.bytes === String)
                    object.MasterAddress = "";
                else {
                    object.MasterAddress = [];
                    if (options.bytes !== Array)
                        object.MasterAddress = $util.newBuffer(object.MasterAddress);
                }
                object.ContractRevision = 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.Timestamp = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.Timestamp = options.longs === String ? "0" : 0;
                if (options.bytes === String)
                    object.EntityContract = "";
                else {
                    object.EntityContract = [];
                    if (options.bytes !== Array)
                        object.EntityContract = $util.newBuffer(object.EntityContract);
                }
                if (options.bytes === String)
                    object.OperatorEntityContract = "";
                else {
                    object.OperatorEntityContract = [];
                    if (options.bytes !== Array)
                        object.OperatorEntityContract = $util.newBuffer(object.OperatorEntityContract);
                }
                object.ContractType = 0;
                if (options.bytes === String)
                    object.AdminAddress = "";
                else {
                    object.AdminAddress = [];
                    if (options.bytes !== Array)
                        object.AdminAddress = $util.newBuffer(object.AdminAddress);
                }
                if (options.bytes === String)
                    object.OperatorAddress = "";
                else {
                    object.OperatorAddress = [];
                    if (options.bytes !== Array)
                        object.OperatorAddress = $util.newBuffer(object.OperatorAddress);
                }
            }
            if (message.ContractName != null && message.hasOwnProperty("ContractName"))
                object.ContractName = message.ContractName;
            if (message.BodyOfAgreementType != null && message.hasOwnProperty("BodyOfAgreementType"))
                object.BodyOfAgreementType = message.BodyOfAgreementType;
            if (message.BodyOfAgreement != null && message.hasOwnProperty("BodyOfAgreement"))
                object.BodyOfAgreement = options.bytes === String ? $util.base64.encode(message.BodyOfAgreement, 0, message.BodyOfAgreement.length) : options.bytes === Array ? Array.prototype.slice.call(message.BodyOfAgreement) : message.BodyOfAgreement;
            if (message.SupportingDocs && message.SupportingDocs.length) {
                object.SupportingDocs = [];
                for (var j = 0; j < message.SupportingDocs.length; ++j)
                    object.SupportingDocs[j] = $root.actions.DocumentField.toObject(message.SupportingDocs[j], options);
            }
            if (message.GoverningLaw != null && message.hasOwnProperty("GoverningLaw"))
                object.GoverningLaw = message.GoverningLaw;
            if (message.Jurisdiction != null && message.hasOwnProperty("Jurisdiction"))
                object.Jurisdiction = message.Jurisdiction;
            if (message.ContractExpiration != null && message.hasOwnProperty("ContractExpiration"))
                if (typeof message.ContractExpiration === "number")
                    object.ContractExpiration = options.longs === String ? String(message.ContractExpiration) : message.ContractExpiration;
                else
                    object.ContractExpiration = options.longs === String ? $util.Long.prototype.toString.call(message.ContractExpiration) : options.longs === Number ? new $util.LongBits(message.ContractExpiration.low >>> 0, message.ContractExpiration.high >>> 0).toNumber(true) : message.ContractExpiration;
            if (message.ContractURI != null && message.hasOwnProperty("ContractURI"))
                object.ContractURI = message.ContractURI;
            if (message.Issuer != null && message.hasOwnProperty("Issuer"))
                object.Issuer = $root.actions.EntityField.toObject(message.Issuer, options);
            if (message.ContractFee != null && message.hasOwnProperty("ContractFee"))
                if (typeof message.ContractFee === "number")
                    object.ContractFee = options.longs === String ? String(message.ContractFee) : message.ContractFee;
                else
                    object.ContractFee = options.longs === String ? $util.Long.prototype.toString.call(message.ContractFee) : options.longs === Number ? new $util.LongBits(message.ContractFee.low >>> 0, message.ContractFee.high >>> 0).toNumber(true) : message.ContractFee;
            if (message.VotingSystems && message.VotingSystems.length) {
                object.VotingSystems = [];
                for (var j = 0; j < message.VotingSystems.length; ++j)
                    object.VotingSystems[j] = $root.actions.VotingSystemField.toObject(message.VotingSystems[j], options);
            }
            if (message.ContractPermissions != null && message.hasOwnProperty("ContractPermissions"))
                object.ContractPermissions = options.bytes === String ? $util.base64.encode(message.ContractPermissions, 0, message.ContractPermissions.length) : options.bytes === Array ? Array.prototype.slice.call(message.ContractPermissions) : message.ContractPermissions;
            if (message.RestrictedQtyAssets != null && message.hasOwnProperty("RestrictedQtyAssets"))
                if (typeof message.RestrictedQtyAssets === "number")
                    object.RestrictedQtyAssets = options.longs === String ? String(message.RestrictedQtyAssets) : message.RestrictedQtyAssets;
                else
                    object.RestrictedQtyAssets = options.longs === String ? $util.Long.prototype.toString.call(message.RestrictedQtyAssets) : options.longs === Number ? new $util.LongBits(message.RestrictedQtyAssets.low >>> 0, message.RestrictedQtyAssets.high >>> 0).toNumber(true) : message.RestrictedQtyAssets;
            if (message.AdministrationProposal != null && message.hasOwnProperty("AdministrationProposal"))
                object.AdministrationProposal = message.AdministrationProposal;
            if (message.HolderProposal != null && message.hasOwnProperty("HolderProposal"))
                object.HolderProposal = message.HolderProposal;
            if (message.Oracles && message.Oracles.length) {
                object.Oracles = [];
                for (var j = 0; j < message.Oracles.length; ++j)
                    object.Oracles[j] = $root.actions.OracleField.toObject(message.Oracles[j], options);
            }
            if (message.MasterAddress != null && message.hasOwnProperty("MasterAddress"))
                object.MasterAddress = options.bytes === String ? $util.base64.encode(message.MasterAddress, 0, message.MasterAddress.length) : options.bytes === Array ? Array.prototype.slice.call(message.MasterAddress) : message.MasterAddress;
            if (message.ContractRevision != null && message.hasOwnProperty("ContractRevision"))
                object.ContractRevision = message.ContractRevision;
            if (message.Timestamp != null && message.hasOwnProperty("Timestamp"))
                if (typeof message.Timestamp === "number")
                    object.Timestamp = options.longs === String ? String(message.Timestamp) : message.Timestamp;
                else
                    object.Timestamp = options.longs === String ? $util.Long.prototype.toString.call(message.Timestamp) : options.longs === Number ? new $util.LongBits(message.Timestamp.low >>> 0, message.Timestamp.high >>> 0).toNumber(true) : message.Timestamp;
            if (message.EntityContract != null && message.hasOwnProperty("EntityContract"))
                object.EntityContract = options.bytes === String ? $util.base64.encode(message.EntityContract, 0, message.EntityContract.length) : options.bytes === Array ? Array.prototype.slice.call(message.EntityContract) : message.EntityContract;
            if (message.OperatorEntityContract != null && message.hasOwnProperty("OperatorEntityContract"))
                object.OperatorEntityContract = options.bytes === String ? $util.base64.encode(message.OperatorEntityContract, 0, message.OperatorEntityContract.length) : options.bytes === Array ? Array.prototype.slice.call(message.OperatorEntityContract) : message.OperatorEntityContract;
            if (message.ContractType != null && message.hasOwnProperty("ContractType"))
                object.ContractType = message.ContractType;
            if (message.Services && message.Services.length) {
                object.Services = [];
                for (var j = 0; j < message.Services.length; ++j)
                    object.Services[j] = $root.actions.ServiceField.toObject(message.Services[j], options);
            }
            if (message.AdminIdentityCertificates && message.AdminIdentityCertificates.length) {
                object.AdminIdentityCertificates = [];
                for (var j = 0; j < message.AdminIdentityCertificates.length; ++j)
                    object.AdminIdentityCertificates[j] = $root.actions.AdminIdentityCertificateField.toObject(message.AdminIdentityCertificates[j], options);
            }
            if (message.AdminAddress != null && message.hasOwnProperty("AdminAddress"))
                object.AdminAddress = options.bytes === String ? $util.base64.encode(message.AdminAddress, 0, message.AdminAddress.length) : options.bytes === Array ? Array.prototype.slice.call(message.AdminAddress) : message.AdminAddress;
            if (message.OperatorAddress != null && message.hasOwnProperty("OperatorAddress"))
                object.OperatorAddress = options.bytes === String ? $util.base64.encode(message.OperatorAddress, 0, message.OperatorAddress.length) : options.bytes === Array ? Array.prototype.slice.call(message.OperatorAddress) : message.OperatorAddress;
            return object;
        };

        /**
         * Converts this ContractFormation to JSON.
         * @function toJSON
         * @memberof actions.ContractFormation
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ContractFormation.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ContractFormation;
    })();

    actions.ContractAmendment = (function() {

        /**
         * Properties of a ContractAmendment.
         * @memberof actions
         * @interface IContractAmendment
         * @property {boolean|null} [ChangeAdministrationAddress] ContractAmendment ChangeAdministrationAddress
         * @property {boolean|null} [ChangeOperatorAddress] ContractAmendment ChangeOperatorAddress
         * @property {number|null} [ContractRevision] ContractAmendment ContractRevision
         * @property {Array.<actions.IAmendmentField>|null} [Amendments] ContractAmendment Amendments
         * @property {Uint8Array|null} [RefTxID] ContractAmendment RefTxID
         */

        /**
         * Constructs a new ContractAmendment.
         * @memberof actions
         * @classdesc Represents a ContractAmendment.
         * @implements IContractAmendment
         * @constructor
         * @param {actions.IContractAmendment=} [properties] Properties to set
         */
        function ContractAmendment(properties) {
            this.Amendments = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ContractAmendment ChangeAdministrationAddress.
         * @member {boolean} ChangeAdministrationAddress
         * @memberof actions.ContractAmendment
         * @instance
         */
        ContractAmendment.prototype.ChangeAdministrationAddress = false;

        /**
         * ContractAmendment ChangeOperatorAddress.
         * @member {boolean} ChangeOperatorAddress
         * @memberof actions.ContractAmendment
         * @instance
         */
        ContractAmendment.prototype.ChangeOperatorAddress = false;

        /**
         * ContractAmendment ContractRevision.
         * @member {number} ContractRevision
         * @memberof actions.ContractAmendment
         * @instance
         */
        ContractAmendment.prototype.ContractRevision = 0;

        /**
         * ContractAmendment Amendments.
         * @member {Array.<actions.IAmendmentField>} Amendments
         * @memberof actions.ContractAmendment
         * @instance
         */
        ContractAmendment.prototype.Amendments = $util.emptyArray;

        /**
         * ContractAmendment RefTxID.
         * @member {Uint8Array} RefTxID
         * @memberof actions.ContractAmendment
         * @instance
         */
        ContractAmendment.prototype.RefTxID = $util.newBuffer([]);

        /**
         * Creates a new ContractAmendment instance using the specified properties.
         * @function create
         * @memberof actions.ContractAmendment
         * @static
         * @param {actions.IContractAmendment=} [properties] Properties to set
         * @returns {actions.ContractAmendment} ContractAmendment instance
         */
        ContractAmendment.create = function create(properties) {
            return new ContractAmendment(properties);
        };

        /**
         * Encodes the specified ContractAmendment message. Does not implicitly {@link actions.ContractAmendment.verify|verify} messages.
         * @function encode
         * @memberof actions.ContractAmendment
         * @static
         * @param {actions.IContractAmendment} message ContractAmendment message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ContractAmendment.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.ChangeAdministrationAddress != null && Object.hasOwnProperty.call(message, "ChangeAdministrationAddress"))
                writer.uint32(/* id 1, wireType 0 =*/8).bool(message.ChangeAdministrationAddress);
            if (message.ChangeOperatorAddress != null && Object.hasOwnProperty.call(message, "ChangeOperatorAddress"))
                writer.uint32(/* id 2, wireType 0 =*/16).bool(message.ChangeOperatorAddress);
            if (message.ContractRevision != null && Object.hasOwnProperty.call(message, "ContractRevision"))
                writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.ContractRevision);
            if (message.Amendments != null && message.Amendments.length)
                for (var i = 0; i < message.Amendments.length; ++i)
                    $root.actions.AmendmentField.encode(message.Amendments[i], writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            if (message.RefTxID != null && Object.hasOwnProperty.call(message, "RefTxID"))
                writer.uint32(/* id 5, wireType 2 =*/42).bytes(message.RefTxID);
            return writer;
        };

        /**
         * Encodes the specified ContractAmendment message, length delimited. Does not implicitly {@link actions.ContractAmendment.verify|verify} messages.
         * @function encodeDelimited
         * @memberof actions.ContractAmendment
         * @static
         * @param {actions.IContractAmendment} message ContractAmendment message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ContractAmendment.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ContractAmendment message from the specified reader or buffer.
         * @function decode
         * @memberof actions.ContractAmendment
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {actions.ContractAmendment} ContractAmendment
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ContractAmendment.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.actions.ContractAmendment();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.ChangeAdministrationAddress = reader.bool();
                    break;
                case 2:
                    message.ChangeOperatorAddress = reader.bool();
                    break;
                case 3:
                    message.ContractRevision = reader.uint32();
                    break;
                case 4:
                    if (!(message.Amendments && message.Amendments.length))
                        message.Amendments = [];
                    message.Amendments.push($root.actions.AmendmentField.decode(reader, reader.uint32()));
                    break;
                case 5:
                    message.RefTxID = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ContractAmendment message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof actions.ContractAmendment
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {actions.ContractAmendment} ContractAmendment
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ContractAmendment.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ContractAmendment message.
         * @function verify
         * @memberof actions.ContractAmendment
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ContractAmendment.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.ChangeAdministrationAddress != null && message.hasOwnProperty("ChangeAdministrationAddress"))
                if (typeof message.ChangeAdministrationAddress !== "boolean")
                    return "ChangeAdministrationAddress: boolean expected";
            if (message.ChangeOperatorAddress != null && message.hasOwnProperty("ChangeOperatorAddress"))
                if (typeof message.ChangeOperatorAddress !== "boolean")
                    return "ChangeOperatorAddress: boolean expected";
            if (message.ContractRevision != null && message.hasOwnProperty("ContractRevision"))
                if (!$util.isInteger(message.ContractRevision))
                    return "ContractRevision: integer expected";
            if (message.Amendments != null && message.hasOwnProperty("Amendments")) {
                if (!Array.isArray(message.Amendments))
                    return "Amendments: array expected";
                for (var i = 0; i < message.Amendments.length; ++i) {
                    var error = $root.actions.AmendmentField.verify(message.Amendments[i]);
                    if (error)
                        return "Amendments." + error;
                }
            }
            if (message.RefTxID != null && message.hasOwnProperty("RefTxID"))
                if (!(message.RefTxID && typeof message.RefTxID.length === "number" || $util.isString(message.RefTxID)))
                    return "RefTxID: buffer expected";
            return null;
        };

        /**
         * Creates a ContractAmendment message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof actions.ContractAmendment
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {actions.ContractAmendment} ContractAmendment
         */
        ContractAmendment.fromObject = function fromObject(object) {
            if (object instanceof $root.actions.ContractAmendment)
                return object;
            var message = new $root.actions.ContractAmendment();
            if (object.ChangeAdministrationAddress != null)
                message.ChangeAdministrationAddress = Boolean(object.ChangeAdministrationAddress);
            if (object.ChangeOperatorAddress != null)
                message.ChangeOperatorAddress = Boolean(object.ChangeOperatorAddress);
            if (object.ContractRevision != null)
                message.ContractRevision = object.ContractRevision >>> 0;
            if (object.Amendments) {
                if (!Array.isArray(object.Amendments))
                    throw TypeError(".actions.ContractAmendment.Amendments: array expected");
                message.Amendments = [];
                for (var i = 0; i < object.Amendments.length; ++i) {
                    if (typeof object.Amendments[i] !== "object")
                        throw TypeError(".actions.ContractAmendment.Amendments: object expected");
                    message.Amendments[i] = $root.actions.AmendmentField.fromObject(object.Amendments[i]);
                }
            }
            if (object.RefTxID != null)
                if (typeof object.RefTxID === "string")
                    $util.base64.decode(object.RefTxID, message.RefTxID = $util.newBuffer($util.base64.length(object.RefTxID)), 0);
                else if (object.RefTxID.length)
                    message.RefTxID = object.RefTxID;
            return message;
        };

        /**
         * Creates a plain object from a ContractAmendment message. Also converts values to other types if specified.
         * @function toObject
         * @memberof actions.ContractAmendment
         * @static
         * @param {actions.ContractAmendment} message ContractAmendment
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ContractAmendment.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.Amendments = [];
            if (options.defaults) {
                object.ChangeAdministrationAddress = false;
                object.ChangeOperatorAddress = false;
                object.ContractRevision = 0;
                if (options.bytes === String)
                    object.RefTxID = "";
                else {
                    object.RefTxID = [];
                    if (options.bytes !== Array)
                        object.RefTxID = $util.newBuffer(object.RefTxID);
                }
            }
            if (message.ChangeAdministrationAddress != null && message.hasOwnProperty("ChangeAdministrationAddress"))
                object.ChangeAdministrationAddress = message.ChangeAdministrationAddress;
            if (message.ChangeOperatorAddress != null && message.hasOwnProperty("ChangeOperatorAddress"))
                object.ChangeOperatorAddress = message.ChangeOperatorAddress;
            if (message.ContractRevision != null && message.hasOwnProperty("ContractRevision"))
                object.ContractRevision = message.ContractRevision;
            if (message.Amendments && message.Amendments.length) {
                object.Amendments = [];
                for (var j = 0; j < message.Amendments.length; ++j)
                    object.Amendments[j] = $root.actions.AmendmentField.toObject(message.Amendments[j], options);
            }
            if (message.RefTxID != null && message.hasOwnProperty("RefTxID"))
                object.RefTxID = options.bytes === String ? $util.base64.encode(message.RefTxID, 0, message.RefTxID.length) : options.bytes === Array ? Array.prototype.slice.call(message.RefTxID) : message.RefTxID;
            return object;
        };

        /**
         * Converts this ContractAmendment to JSON.
         * @function toJSON
         * @memberof actions.ContractAmendment
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ContractAmendment.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ContractAmendment;
    })();

    actions.StaticContractFormation = (function() {

        /**
         * Properties of a StaticContractFormation.
         * @memberof actions
         * @interface IStaticContractFormation
         * @property {string|null} [ContractName] StaticContractFormation ContractName
         * @property {Uint8Array|null} [ContractCode] StaticContractFormation ContractCode
         * @property {number|null} [BodyOfAgreementType] StaticContractFormation BodyOfAgreementType
         * @property {Uint8Array|null} [BodyOfAgreement] StaticContractFormation BodyOfAgreement
         * @property {string|null} [ContractType] StaticContractFormation ContractType
         * @property {Array.<actions.IDocumentField>|null} [SupportingDocs] StaticContractFormation SupportingDocs
         * @property {number|null} [ContractRevision] StaticContractFormation ContractRevision
         * @property {string|null} [GoverningLaw] StaticContractFormation GoverningLaw
         * @property {string|null} [Jurisdiction] StaticContractFormation Jurisdiction
         * @property {number|Long|null} [EffectiveDate] StaticContractFormation EffectiveDate
         * @property {number|Long|null} [ContractExpiration] StaticContractFormation ContractExpiration
         * @property {string|null} [ContractURI] StaticContractFormation ContractURI
         * @property {Uint8Array|null} [PrevRevTxID] StaticContractFormation PrevRevTxID
         * @property {Array.<actions.IEntityField>|null} [Entities] StaticContractFormation Entities
         * @property {actions.IOracleField|null} [EntityOracle] StaticContractFormation EntityOracle
         * @property {Uint8Array|null} [EntityOracleSignature] StaticContractFormation EntityOracleSignature
         * @property {number|null} [EntityOracleSigBlockHeight] StaticContractFormation EntityOracleSigBlockHeight
         */

        /**
         * Constructs a new StaticContractFormation.
         * @memberof actions
         * @classdesc Represents a StaticContractFormation.
         * @implements IStaticContractFormation
         * @constructor
         * @param {actions.IStaticContractFormation=} [properties] Properties to set
         */
        function StaticContractFormation(properties) {
            this.SupportingDocs = [];
            this.Entities = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * StaticContractFormation ContractName.
         * @member {string} ContractName
         * @memberof actions.StaticContractFormation
         * @instance
         */
        StaticContractFormation.prototype.ContractName = "";

        /**
         * StaticContractFormation ContractCode.
         * @member {Uint8Array} ContractCode
         * @memberof actions.StaticContractFormation
         * @instance
         */
        StaticContractFormation.prototype.ContractCode = $util.newBuffer([]);

        /**
         * StaticContractFormation BodyOfAgreementType.
         * @member {number} BodyOfAgreementType
         * @memberof actions.StaticContractFormation
         * @instance
         */
        StaticContractFormation.prototype.BodyOfAgreementType = 0;

        /**
         * StaticContractFormation BodyOfAgreement.
         * @member {Uint8Array} BodyOfAgreement
         * @memberof actions.StaticContractFormation
         * @instance
         */
        StaticContractFormation.prototype.BodyOfAgreement = $util.newBuffer([]);

        /**
         * StaticContractFormation ContractType.
         * @member {string} ContractType
         * @memberof actions.StaticContractFormation
         * @instance
         */
        StaticContractFormation.prototype.ContractType = "";

        /**
         * StaticContractFormation SupportingDocs.
         * @member {Array.<actions.IDocumentField>} SupportingDocs
         * @memberof actions.StaticContractFormation
         * @instance
         */
        StaticContractFormation.prototype.SupportingDocs = $util.emptyArray;

        /**
         * StaticContractFormation ContractRevision.
         * @member {number} ContractRevision
         * @memberof actions.StaticContractFormation
         * @instance
         */
        StaticContractFormation.prototype.ContractRevision = 0;

        /**
         * StaticContractFormation GoverningLaw.
         * @member {string} GoverningLaw
         * @memberof actions.StaticContractFormation
         * @instance
         */
        StaticContractFormation.prototype.GoverningLaw = "";

        /**
         * StaticContractFormation Jurisdiction.
         * @member {string} Jurisdiction
         * @memberof actions.StaticContractFormation
         * @instance
         */
        StaticContractFormation.prototype.Jurisdiction = "";

        /**
         * StaticContractFormation EffectiveDate.
         * @member {number|Long} EffectiveDate
         * @memberof actions.StaticContractFormation
         * @instance
         */
        StaticContractFormation.prototype.EffectiveDate = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * StaticContractFormation ContractExpiration.
         * @member {number|Long} ContractExpiration
         * @memberof actions.StaticContractFormation
         * @instance
         */
        StaticContractFormation.prototype.ContractExpiration = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * StaticContractFormation ContractURI.
         * @member {string} ContractURI
         * @memberof actions.StaticContractFormation
         * @instance
         */
        StaticContractFormation.prototype.ContractURI = "";

        /**
         * StaticContractFormation PrevRevTxID.
         * @member {Uint8Array} PrevRevTxID
         * @memberof actions.StaticContractFormation
         * @instance
         */
        StaticContractFormation.prototype.PrevRevTxID = $util.newBuffer([]);

        /**
         * StaticContractFormation Entities.
         * @member {Array.<actions.IEntityField>} Entities
         * @memberof actions.StaticContractFormation
         * @instance
         */
        StaticContractFormation.prototype.Entities = $util.emptyArray;

        /**
         * StaticContractFormation EntityOracle.
         * @member {actions.IOracleField|null|undefined} EntityOracle
         * @memberof actions.StaticContractFormation
         * @instance
         */
        StaticContractFormation.prototype.EntityOracle = null;

        /**
         * StaticContractFormation EntityOracleSignature.
         * @member {Uint8Array} EntityOracleSignature
         * @memberof actions.StaticContractFormation
         * @instance
         */
        StaticContractFormation.prototype.EntityOracleSignature = $util.newBuffer([]);

        /**
         * StaticContractFormation EntityOracleSigBlockHeight.
         * @member {number} EntityOracleSigBlockHeight
         * @memberof actions.StaticContractFormation
         * @instance
         */
        StaticContractFormation.prototype.EntityOracleSigBlockHeight = 0;

        /**
         * Creates a new StaticContractFormation instance using the specified properties.
         * @function create
         * @memberof actions.StaticContractFormation
         * @static
         * @param {actions.IStaticContractFormation=} [properties] Properties to set
         * @returns {actions.StaticContractFormation} StaticContractFormation instance
         */
        StaticContractFormation.create = function create(properties) {
            return new StaticContractFormation(properties);
        };

        /**
         * Encodes the specified StaticContractFormation message. Does not implicitly {@link actions.StaticContractFormation.verify|verify} messages.
         * @function encode
         * @memberof actions.StaticContractFormation
         * @static
         * @param {actions.IStaticContractFormation} message StaticContractFormation message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        StaticContractFormation.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.ContractName != null && Object.hasOwnProperty.call(message, "ContractName"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.ContractName);
            if (message.ContractCode != null && Object.hasOwnProperty.call(message, "ContractCode"))
                writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.ContractCode);
            if (message.BodyOfAgreementType != null && Object.hasOwnProperty.call(message, "BodyOfAgreementType"))
                writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.BodyOfAgreementType);
            if (message.BodyOfAgreement != null && Object.hasOwnProperty.call(message, "BodyOfAgreement"))
                writer.uint32(/* id 4, wireType 2 =*/34).bytes(message.BodyOfAgreement);
            if (message.ContractType != null && Object.hasOwnProperty.call(message, "ContractType"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.ContractType);
            if (message.SupportingDocs != null && message.SupportingDocs.length)
                for (var i = 0; i < message.SupportingDocs.length; ++i)
                    $root.actions.DocumentField.encode(message.SupportingDocs[i], writer.uint32(/* id 6, wireType 2 =*/50).fork()).ldelim();
            if (message.ContractRevision != null && Object.hasOwnProperty.call(message, "ContractRevision"))
                writer.uint32(/* id 7, wireType 0 =*/56).uint32(message.ContractRevision);
            if (message.GoverningLaw != null && Object.hasOwnProperty.call(message, "GoverningLaw"))
                writer.uint32(/* id 8, wireType 2 =*/66).string(message.GoverningLaw);
            if (message.Jurisdiction != null && Object.hasOwnProperty.call(message, "Jurisdiction"))
                writer.uint32(/* id 9, wireType 2 =*/74).string(message.Jurisdiction);
            if (message.EffectiveDate != null && Object.hasOwnProperty.call(message, "EffectiveDate"))
                writer.uint32(/* id 10, wireType 0 =*/80).uint64(message.EffectiveDate);
            if (message.ContractExpiration != null && Object.hasOwnProperty.call(message, "ContractExpiration"))
                writer.uint32(/* id 11, wireType 0 =*/88).uint64(message.ContractExpiration);
            if (message.ContractURI != null && Object.hasOwnProperty.call(message, "ContractURI"))
                writer.uint32(/* id 12, wireType 2 =*/98).string(message.ContractURI);
            if (message.PrevRevTxID != null && Object.hasOwnProperty.call(message, "PrevRevTxID"))
                writer.uint32(/* id 13, wireType 2 =*/106).bytes(message.PrevRevTxID);
            if (message.Entities != null && message.Entities.length)
                for (var i = 0; i < message.Entities.length; ++i)
                    $root.actions.EntityField.encode(message.Entities[i], writer.uint32(/* id 14, wireType 2 =*/114).fork()).ldelim();
            if (message.EntityOracle != null && Object.hasOwnProperty.call(message, "EntityOracle"))
                $root.actions.OracleField.encode(message.EntityOracle, writer.uint32(/* id 15, wireType 2 =*/122).fork()).ldelim();
            if (message.EntityOracleSignature != null && Object.hasOwnProperty.call(message, "EntityOracleSignature"))
                writer.uint32(/* id 16, wireType 2 =*/130).bytes(message.EntityOracleSignature);
            if (message.EntityOracleSigBlockHeight != null && Object.hasOwnProperty.call(message, "EntityOracleSigBlockHeight"))
                writer.uint32(/* id 17, wireType 0 =*/136).uint32(message.EntityOracleSigBlockHeight);
            return writer;
        };

        /**
         * Encodes the specified StaticContractFormation message, length delimited. Does not implicitly {@link actions.StaticContractFormation.verify|verify} messages.
         * @function encodeDelimited
         * @memberof actions.StaticContractFormation
         * @static
         * @param {actions.IStaticContractFormation} message StaticContractFormation message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        StaticContractFormation.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a StaticContractFormation message from the specified reader or buffer.
         * @function decode
         * @memberof actions.StaticContractFormation
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {actions.StaticContractFormation} StaticContractFormation
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        StaticContractFormation.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.actions.StaticContractFormation();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.ContractName = reader.string();
                    break;
                case 2:
                    message.ContractCode = reader.bytes();
                    break;
                case 3:
                    message.BodyOfAgreementType = reader.uint32();
                    break;
                case 4:
                    message.BodyOfAgreement = reader.bytes();
                    break;
                case 5:
                    message.ContractType = reader.string();
                    break;
                case 6:
                    if (!(message.SupportingDocs && message.SupportingDocs.length))
                        message.SupportingDocs = [];
                    message.SupportingDocs.push($root.actions.DocumentField.decode(reader, reader.uint32()));
                    break;
                case 7:
                    message.ContractRevision = reader.uint32();
                    break;
                case 8:
                    message.GoverningLaw = reader.string();
                    break;
                case 9:
                    message.Jurisdiction = reader.string();
                    break;
                case 10:
                    message.EffectiveDate = reader.uint64();
                    break;
                case 11:
                    message.ContractExpiration = reader.uint64();
                    break;
                case 12:
                    message.ContractURI = reader.string();
                    break;
                case 13:
                    message.PrevRevTxID = reader.bytes();
                    break;
                case 14:
                    if (!(message.Entities && message.Entities.length))
                        message.Entities = [];
                    message.Entities.push($root.actions.EntityField.decode(reader, reader.uint32()));
                    break;
                case 15:
                    message.EntityOracle = $root.actions.OracleField.decode(reader, reader.uint32());
                    break;
                case 16:
                    message.EntityOracleSignature = reader.bytes();
                    break;
                case 17:
                    message.EntityOracleSigBlockHeight = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a StaticContractFormation message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof actions.StaticContractFormation
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {actions.StaticContractFormation} StaticContractFormation
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        StaticContractFormation.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a StaticContractFormation message.
         * @function verify
         * @memberof actions.StaticContractFormation
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        StaticContractFormation.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.ContractName != null && message.hasOwnProperty("ContractName"))
                if (!$util.isString(message.ContractName))
                    return "ContractName: string expected";
            if (message.ContractCode != null && message.hasOwnProperty("ContractCode"))
                if (!(message.ContractCode && typeof message.ContractCode.length === "number" || $util.isString(message.ContractCode)))
                    return "ContractCode: buffer expected";
            if (message.BodyOfAgreementType != null && message.hasOwnProperty("BodyOfAgreementType"))
                if (!$util.isInteger(message.BodyOfAgreementType))
                    return "BodyOfAgreementType: integer expected";
            if (message.BodyOfAgreement != null && message.hasOwnProperty("BodyOfAgreement"))
                if (!(message.BodyOfAgreement && typeof message.BodyOfAgreement.length === "number" || $util.isString(message.BodyOfAgreement)))
                    return "BodyOfAgreement: buffer expected";
            if (message.ContractType != null && message.hasOwnProperty("ContractType"))
                if (!$util.isString(message.ContractType))
                    return "ContractType: string expected";
            if (message.SupportingDocs != null && message.hasOwnProperty("SupportingDocs")) {
                if (!Array.isArray(message.SupportingDocs))
                    return "SupportingDocs: array expected";
                for (var i = 0; i < message.SupportingDocs.length; ++i) {
                    var error = $root.actions.DocumentField.verify(message.SupportingDocs[i]);
                    if (error)
                        return "SupportingDocs." + error;
                }
            }
            if (message.ContractRevision != null && message.hasOwnProperty("ContractRevision"))
                if (!$util.isInteger(message.ContractRevision))
                    return "ContractRevision: integer expected";
            if (message.GoverningLaw != null && message.hasOwnProperty("GoverningLaw"))
                if (!$util.isString(message.GoverningLaw))
                    return "GoverningLaw: string expected";
            if (message.Jurisdiction != null && message.hasOwnProperty("Jurisdiction"))
                if (!$util.isString(message.Jurisdiction))
                    return "Jurisdiction: string expected";
            if (message.EffectiveDate != null && message.hasOwnProperty("EffectiveDate"))
                if (!$util.isInteger(message.EffectiveDate) && !(message.EffectiveDate && $util.isInteger(message.EffectiveDate.low) && $util.isInteger(message.EffectiveDate.high)))
                    return "EffectiveDate: integer|Long expected";
            if (message.ContractExpiration != null && message.hasOwnProperty("ContractExpiration"))
                if (!$util.isInteger(message.ContractExpiration) && !(message.ContractExpiration && $util.isInteger(message.ContractExpiration.low) && $util.isInteger(message.ContractExpiration.high)))
                    return "ContractExpiration: integer|Long expected";
            if (message.ContractURI != null && message.hasOwnProperty("ContractURI"))
                if (!$util.isString(message.ContractURI))
                    return "ContractURI: string expected";
            if (message.PrevRevTxID != null && message.hasOwnProperty("PrevRevTxID"))
                if (!(message.PrevRevTxID && typeof message.PrevRevTxID.length === "number" || $util.isString(message.PrevRevTxID)))
                    return "PrevRevTxID: buffer expected";
            if (message.Entities != null && message.hasOwnProperty("Entities")) {
                if (!Array.isArray(message.Entities))
                    return "Entities: array expected";
                for (var i = 0; i < message.Entities.length; ++i) {
                    var error = $root.actions.EntityField.verify(message.Entities[i]);
                    if (error)
                        return "Entities." + error;
                }
            }
            if (message.EntityOracle != null && message.hasOwnProperty("EntityOracle")) {
                var error = $root.actions.OracleField.verify(message.EntityOracle);
                if (error)
                    return "EntityOracle." + error;
            }
            if (message.EntityOracleSignature != null && message.hasOwnProperty("EntityOracleSignature"))
                if (!(message.EntityOracleSignature && typeof message.EntityOracleSignature.length === "number" || $util.isString(message.EntityOracleSignature)))
                    return "EntityOracleSignature: buffer expected";
            if (message.EntityOracleSigBlockHeight != null && message.hasOwnProperty("EntityOracleSigBlockHeight"))
                if (!$util.isInteger(message.EntityOracleSigBlockHeight))
                    return "EntityOracleSigBlockHeight: integer expected";
            return null;
        };

        /**
         * Creates a StaticContractFormation message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof actions.StaticContractFormation
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {actions.StaticContractFormation} StaticContractFormation
         */
        StaticContractFormation.fromObject = function fromObject(object) {
            if (object instanceof $root.actions.StaticContractFormation)
                return object;
            var message = new $root.actions.StaticContractFormation();
            if (object.ContractName != null)
                message.ContractName = String(object.ContractName);
            if (object.ContractCode != null)
                if (typeof object.ContractCode === "string")
                    $util.base64.decode(object.ContractCode, message.ContractCode = $util.newBuffer($util.base64.length(object.ContractCode)), 0);
                else if (object.ContractCode.length)
                    message.ContractCode = object.ContractCode;
            if (object.BodyOfAgreementType != null)
                message.BodyOfAgreementType = object.BodyOfAgreementType >>> 0;
            if (object.BodyOfAgreement != null)
                if (typeof object.BodyOfAgreement === "string")
                    $util.base64.decode(object.BodyOfAgreement, message.BodyOfAgreement = $util.newBuffer($util.base64.length(object.BodyOfAgreement)), 0);
                else if (object.BodyOfAgreement.length)
                    message.BodyOfAgreement = object.BodyOfAgreement;
            if (object.ContractType != null)
                message.ContractType = String(object.ContractType);
            if (object.SupportingDocs) {
                if (!Array.isArray(object.SupportingDocs))
                    throw TypeError(".actions.StaticContractFormation.SupportingDocs: array expected");
                message.SupportingDocs = [];
                for (var i = 0; i < object.SupportingDocs.length; ++i) {
                    if (typeof object.SupportingDocs[i] !== "object")
                        throw TypeError(".actions.StaticContractFormation.SupportingDocs: object expected");
                    message.SupportingDocs[i] = $root.actions.DocumentField.fromObject(object.SupportingDocs[i]);
                }
            }
            if (object.ContractRevision != null)
                message.ContractRevision = object.ContractRevision >>> 0;
            if (object.GoverningLaw != null)
                message.GoverningLaw = String(object.GoverningLaw);
            if (object.Jurisdiction != null)
                message.Jurisdiction = String(object.Jurisdiction);
            if (object.EffectiveDate != null)
                if ($util.Long)
                    (message.EffectiveDate = $util.Long.fromValue(object.EffectiveDate)).unsigned = true;
                else if (typeof object.EffectiveDate === "string")
                    message.EffectiveDate = parseInt(object.EffectiveDate, 10);
                else if (typeof object.EffectiveDate === "number")
                    message.EffectiveDate = object.EffectiveDate;
                else if (typeof object.EffectiveDate === "object")
                    message.EffectiveDate = new $util.LongBits(object.EffectiveDate.low >>> 0, object.EffectiveDate.high >>> 0).toNumber(true);
            if (object.ContractExpiration != null)
                if ($util.Long)
                    (message.ContractExpiration = $util.Long.fromValue(object.ContractExpiration)).unsigned = true;
                else if (typeof object.ContractExpiration === "string")
                    message.ContractExpiration = parseInt(object.ContractExpiration, 10);
                else if (typeof object.ContractExpiration === "number")
                    message.ContractExpiration = object.ContractExpiration;
                else if (typeof object.ContractExpiration === "object")
                    message.ContractExpiration = new $util.LongBits(object.ContractExpiration.low >>> 0, object.ContractExpiration.high >>> 0).toNumber(true);
            if (object.ContractURI != null)
                message.ContractURI = String(object.ContractURI);
            if (object.PrevRevTxID != null)
                if (typeof object.PrevRevTxID === "string")
                    $util.base64.decode(object.PrevRevTxID, message.PrevRevTxID = $util.newBuffer($util.base64.length(object.PrevRevTxID)), 0);
                else if (object.PrevRevTxID.length)
                    message.PrevRevTxID = object.PrevRevTxID;
            if (object.Entities) {
                if (!Array.isArray(object.Entities))
                    throw TypeError(".actions.StaticContractFormation.Entities: array expected");
                message.Entities = [];
                for (var i = 0; i < object.Entities.length; ++i) {
                    if (typeof object.Entities[i] !== "object")
                        throw TypeError(".actions.StaticContractFormation.Entities: object expected");
                    message.Entities[i] = $root.actions.EntityField.fromObject(object.Entities[i]);
                }
            }
            if (object.EntityOracle != null) {
                if (typeof object.EntityOracle !== "object")
                    throw TypeError(".actions.StaticContractFormation.EntityOracle: object expected");
                message.EntityOracle = $root.actions.OracleField.fromObject(object.EntityOracle);
            }
            if (object.EntityOracleSignature != null)
                if (typeof object.EntityOracleSignature === "string")
                    $util.base64.decode(object.EntityOracleSignature, message.EntityOracleSignature = $util.newBuffer($util.base64.length(object.EntityOracleSignature)), 0);
                else if (object.EntityOracleSignature.length)
                    message.EntityOracleSignature = object.EntityOracleSignature;
            if (object.EntityOracleSigBlockHeight != null)
                message.EntityOracleSigBlockHeight = object.EntityOracleSigBlockHeight >>> 0;
            return message;
        };

        /**
         * Creates a plain object from a StaticContractFormation message. Also converts values to other types if specified.
         * @function toObject
         * @memberof actions.StaticContractFormation
         * @static
         * @param {actions.StaticContractFormation} message StaticContractFormation
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        StaticContractFormation.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults) {
                object.SupportingDocs = [];
                object.Entities = [];
            }
            if (options.defaults) {
                object.ContractName = "";
                if (options.bytes === String)
                    object.ContractCode = "";
                else {
                    object.ContractCode = [];
                    if (options.bytes !== Array)
                        object.ContractCode = $util.newBuffer(object.ContractCode);
                }
                object.BodyOfAgreementType = 0;
                if (options.bytes === String)
                    object.BodyOfAgreement = "";
                else {
                    object.BodyOfAgreement = [];
                    if (options.bytes !== Array)
                        object.BodyOfAgreement = $util.newBuffer(object.BodyOfAgreement);
                }
                object.ContractType = "";
                object.ContractRevision = 0;
                object.GoverningLaw = "";
                object.Jurisdiction = "";
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.EffectiveDate = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.EffectiveDate = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.ContractExpiration = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.ContractExpiration = options.longs === String ? "0" : 0;
                object.ContractURI = "";
                if (options.bytes === String)
                    object.PrevRevTxID = "";
                else {
                    object.PrevRevTxID = [];
                    if (options.bytes !== Array)
                        object.PrevRevTxID = $util.newBuffer(object.PrevRevTxID);
                }
                object.EntityOracle = null;
                if (options.bytes === String)
                    object.EntityOracleSignature = "";
                else {
                    object.EntityOracleSignature = [];
                    if (options.bytes !== Array)
                        object.EntityOracleSignature = $util.newBuffer(object.EntityOracleSignature);
                }
                object.EntityOracleSigBlockHeight = 0;
            }
            if (message.ContractName != null && message.hasOwnProperty("ContractName"))
                object.ContractName = message.ContractName;
            if (message.ContractCode != null && message.hasOwnProperty("ContractCode"))
                object.ContractCode = options.bytes === String ? $util.base64.encode(message.ContractCode, 0, message.ContractCode.length) : options.bytes === Array ? Array.prototype.slice.call(message.ContractCode) : message.ContractCode;
            if (message.BodyOfAgreementType != null && message.hasOwnProperty("BodyOfAgreementType"))
                object.BodyOfAgreementType = message.BodyOfAgreementType;
            if (message.BodyOfAgreement != null && message.hasOwnProperty("BodyOfAgreement"))
                object.BodyOfAgreement = options.bytes === String ? $util.base64.encode(message.BodyOfAgreement, 0, message.BodyOfAgreement.length) : options.bytes === Array ? Array.prototype.slice.call(message.BodyOfAgreement) : message.BodyOfAgreement;
            if (message.ContractType != null && message.hasOwnProperty("ContractType"))
                object.ContractType = message.ContractType;
            if (message.SupportingDocs && message.SupportingDocs.length) {
                object.SupportingDocs = [];
                for (var j = 0; j < message.SupportingDocs.length; ++j)
                    object.SupportingDocs[j] = $root.actions.DocumentField.toObject(message.SupportingDocs[j], options);
            }
            if (message.ContractRevision != null && message.hasOwnProperty("ContractRevision"))
                object.ContractRevision = message.ContractRevision;
            if (message.GoverningLaw != null && message.hasOwnProperty("GoverningLaw"))
                object.GoverningLaw = message.GoverningLaw;
            if (message.Jurisdiction != null && message.hasOwnProperty("Jurisdiction"))
                object.Jurisdiction = message.Jurisdiction;
            if (message.EffectiveDate != null && message.hasOwnProperty("EffectiveDate"))
                if (typeof message.EffectiveDate === "number")
                    object.EffectiveDate = options.longs === String ? String(message.EffectiveDate) : message.EffectiveDate;
                else
                    object.EffectiveDate = options.longs === String ? $util.Long.prototype.toString.call(message.EffectiveDate) : options.longs === Number ? new $util.LongBits(message.EffectiveDate.low >>> 0, message.EffectiveDate.high >>> 0).toNumber(true) : message.EffectiveDate;
            if (message.ContractExpiration != null && message.hasOwnProperty("ContractExpiration"))
                if (typeof message.ContractExpiration === "number")
                    object.ContractExpiration = options.longs === String ? String(message.ContractExpiration) : message.ContractExpiration;
                else
                    object.ContractExpiration = options.longs === String ? $util.Long.prototype.toString.call(message.ContractExpiration) : options.longs === Number ? new $util.LongBits(message.ContractExpiration.low >>> 0, message.ContractExpiration.high >>> 0).toNumber(true) : message.ContractExpiration;
            if (message.ContractURI != null && message.hasOwnProperty("ContractURI"))
                object.ContractURI = message.ContractURI;
            if (message.PrevRevTxID != null && message.hasOwnProperty("PrevRevTxID"))
                object.PrevRevTxID = options.bytes === String ? $util.base64.encode(message.PrevRevTxID, 0, message.PrevRevTxID.length) : options.bytes === Array ? Array.prototype.slice.call(message.PrevRevTxID) : message.PrevRevTxID;
            if (message.Entities && message.Entities.length) {
                object.Entities = [];
                for (var j = 0; j < message.Entities.length; ++j)
                    object.Entities[j] = $root.actions.EntityField.toObject(message.Entities[j], options);
            }
            if (message.EntityOracle != null && message.hasOwnProperty("EntityOracle"))
                object.EntityOracle = $root.actions.OracleField.toObject(message.EntityOracle, options);
            if (message.EntityOracleSignature != null && message.hasOwnProperty("EntityOracleSignature"))
                object.EntityOracleSignature = options.bytes === String ? $util.base64.encode(message.EntityOracleSignature, 0, message.EntityOracleSignature.length) : options.bytes === Array ? Array.prototype.slice.call(message.EntityOracleSignature) : message.EntityOracleSignature;
            if (message.EntityOracleSigBlockHeight != null && message.hasOwnProperty("EntityOracleSigBlockHeight"))
                object.EntityOracleSigBlockHeight = message.EntityOracleSigBlockHeight;
            return object;
        };

        /**
         * Converts this StaticContractFormation to JSON.
         * @function toJSON
         * @memberof actions.StaticContractFormation
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        StaticContractFormation.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return StaticContractFormation;
    })();

    actions.ContractAddressChange = (function() {

        /**
         * Properties of a ContractAddressChange.
         * @memberof actions
         * @interface IContractAddressChange
         * @property {Uint8Array|null} [NewContractAddress] ContractAddressChange NewContractAddress
         * @property {number|Long|null} [Timestamp] ContractAddressChange Timestamp
         */

        /**
         * Constructs a new ContractAddressChange.
         * @memberof actions
         * @classdesc Represents a ContractAddressChange.
         * @implements IContractAddressChange
         * @constructor
         * @param {actions.IContractAddressChange=} [properties] Properties to set
         */
        function ContractAddressChange(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ContractAddressChange NewContractAddress.
         * @member {Uint8Array} NewContractAddress
         * @memberof actions.ContractAddressChange
         * @instance
         */
        ContractAddressChange.prototype.NewContractAddress = $util.newBuffer([]);

        /**
         * ContractAddressChange Timestamp.
         * @member {number|Long} Timestamp
         * @memberof actions.ContractAddressChange
         * @instance
         */
        ContractAddressChange.prototype.Timestamp = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * Creates a new ContractAddressChange instance using the specified properties.
         * @function create
         * @memberof actions.ContractAddressChange
         * @static
         * @param {actions.IContractAddressChange=} [properties] Properties to set
         * @returns {actions.ContractAddressChange} ContractAddressChange instance
         */
        ContractAddressChange.create = function create(properties) {
            return new ContractAddressChange(properties);
        };

        /**
         * Encodes the specified ContractAddressChange message. Does not implicitly {@link actions.ContractAddressChange.verify|verify} messages.
         * @function encode
         * @memberof actions.ContractAddressChange
         * @static
         * @param {actions.IContractAddressChange} message ContractAddressChange message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ContractAddressChange.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.NewContractAddress != null && Object.hasOwnProperty.call(message, "NewContractAddress"))
                writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.NewContractAddress);
            if (message.Timestamp != null && Object.hasOwnProperty.call(message, "Timestamp"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint64(message.Timestamp);
            return writer;
        };

        /**
         * Encodes the specified ContractAddressChange message, length delimited. Does not implicitly {@link actions.ContractAddressChange.verify|verify} messages.
         * @function encodeDelimited
         * @memberof actions.ContractAddressChange
         * @static
         * @param {actions.IContractAddressChange} message ContractAddressChange message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ContractAddressChange.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ContractAddressChange message from the specified reader or buffer.
         * @function decode
         * @memberof actions.ContractAddressChange
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {actions.ContractAddressChange} ContractAddressChange
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ContractAddressChange.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.actions.ContractAddressChange();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.NewContractAddress = reader.bytes();
                    break;
                case 2:
                    message.Timestamp = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ContractAddressChange message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof actions.ContractAddressChange
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {actions.ContractAddressChange} ContractAddressChange
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ContractAddressChange.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ContractAddressChange message.
         * @function verify
         * @memberof actions.ContractAddressChange
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ContractAddressChange.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.NewContractAddress != null && message.hasOwnProperty("NewContractAddress"))
                if (!(message.NewContractAddress && typeof message.NewContractAddress.length === "number" || $util.isString(message.NewContractAddress)))
                    return "NewContractAddress: buffer expected";
            if (message.Timestamp != null && message.hasOwnProperty("Timestamp"))
                if (!$util.isInteger(message.Timestamp) && !(message.Timestamp && $util.isInteger(message.Timestamp.low) && $util.isInteger(message.Timestamp.high)))
                    return "Timestamp: integer|Long expected";
            return null;
        };

        /**
         * Creates a ContractAddressChange message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof actions.ContractAddressChange
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {actions.ContractAddressChange} ContractAddressChange
         */
        ContractAddressChange.fromObject = function fromObject(object) {
            if (object instanceof $root.actions.ContractAddressChange)
                return object;
            var message = new $root.actions.ContractAddressChange();
            if (object.NewContractAddress != null)
                if (typeof object.NewContractAddress === "string")
                    $util.base64.decode(object.NewContractAddress, message.NewContractAddress = $util.newBuffer($util.base64.length(object.NewContractAddress)), 0);
                else if (object.NewContractAddress.length)
                    message.NewContractAddress = object.NewContractAddress;
            if (object.Timestamp != null)
                if ($util.Long)
                    (message.Timestamp = $util.Long.fromValue(object.Timestamp)).unsigned = true;
                else if (typeof object.Timestamp === "string")
                    message.Timestamp = parseInt(object.Timestamp, 10);
                else if (typeof object.Timestamp === "number")
                    message.Timestamp = object.Timestamp;
                else if (typeof object.Timestamp === "object")
                    message.Timestamp = new $util.LongBits(object.Timestamp.low >>> 0, object.Timestamp.high >>> 0).toNumber(true);
            return message;
        };

        /**
         * Creates a plain object from a ContractAddressChange message. Also converts values to other types if specified.
         * @function toObject
         * @memberof actions.ContractAddressChange
         * @static
         * @param {actions.ContractAddressChange} message ContractAddressChange
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ContractAddressChange.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if (options.bytes === String)
                    object.NewContractAddress = "";
                else {
                    object.NewContractAddress = [];
                    if (options.bytes !== Array)
                        object.NewContractAddress = $util.newBuffer(object.NewContractAddress);
                }
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.Timestamp = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.Timestamp = options.longs === String ? "0" : 0;
            }
            if (message.NewContractAddress != null && message.hasOwnProperty("NewContractAddress"))
                object.NewContractAddress = options.bytes === String ? $util.base64.encode(message.NewContractAddress, 0, message.NewContractAddress.length) : options.bytes === Array ? Array.prototype.slice.call(message.NewContractAddress) : message.NewContractAddress;
            if (message.Timestamp != null && message.hasOwnProperty("Timestamp"))
                if (typeof message.Timestamp === "number")
                    object.Timestamp = options.longs === String ? String(message.Timestamp) : message.Timestamp;
                else
                    object.Timestamp = options.longs === String ? $util.Long.prototype.toString.call(message.Timestamp) : options.longs === Number ? new $util.LongBits(message.Timestamp.low >>> 0, message.Timestamp.high >>> 0).toNumber(true) : message.Timestamp;
            return object;
        };

        /**
         * Converts this ContractAddressChange to JSON.
         * @function toJSON
         * @memberof actions.ContractAddressChange
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ContractAddressChange.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ContractAddressChange;
    })();

    actions.AssetDefinition = (function() {

        /**
         * Properties of an AssetDefinition.
         * @memberof actions
         * @interface IAssetDefinition
         * @property {Uint8Array|null} [AssetPermissions] AssetDefinition AssetPermissions
         * @property {boolean|null} [TransfersPermitted] AssetDefinition TransfersPermitted
         * @property {Array.<string>|null} [TradeRestrictions] AssetDefinition TradeRestrictions
         * @property {boolean|null} [EnforcementOrdersPermitted] AssetDefinition EnforcementOrdersPermitted
         * @property {boolean|null} [VotingRights] AssetDefinition VotingRights
         * @property {number|null} [VoteMultiplier] AssetDefinition VoteMultiplier
         * @property {boolean|null} [AdministrationProposal] AssetDefinition AdministrationProposal
         * @property {boolean|null} [HolderProposal] AssetDefinition HolderProposal
         * @property {number|null} [AssetModificationGovernance] AssetDefinition AssetModificationGovernance
         * @property {number|Long|null} [TokenQty] AssetDefinition TokenQty
         * @property {string|null} [AssetType] AssetDefinition AssetType
         * @property {Uint8Array|null} [AssetPayload] AssetDefinition AssetPayload
         */

        /**
         * Constructs a new AssetDefinition.
         * @memberof actions
         * @classdesc Represents an AssetDefinition.
         * @implements IAssetDefinition
         * @constructor
         * @param {actions.IAssetDefinition=} [properties] Properties to set
         */
        function AssetDefinition(properties) {
            this.TradeRestrictions = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * AssetDefinition AssetPermissions.
         * @member {Uint8Array} AssetPermissions
         * @memberof actions.AssetDefinition
         * @instance
         */
        AssetDefinition.prototype.AssetPermissions = $util.newBuffer([]);

        /**
         * AssetDefinition TransfersPermitted.
         * @member {boolean} TransfersPermitted
         * @memberof actions.AssetDefinition
         * @instance
         */
        AssetDefinition.prototype.TransfersPermitted = false;

        /**
         * AssetDefinition TradeRestrictions.
         * @member {Array.<string>} TradeRestrictions
         * @memberof actions.AssetDefinition
         * @instance
         */
        AssetDefinition.prototype.TradeRestrictions = $util.emptyArray;

        /**
         * AssetDefinition EnforcementOrdersPermitted.
         * @member {boolean} EnforcementOrdersPermitted
         * @memberof actions.AssetDefinition
         * @instance
         */
        AssetDefinition.prototype.EnforcementOrdersPermitted = false;

        /**
         * AssetDefinition VotingRights.
         * @member {boolean} VotingRights
         * @memberof actions.AssetDefinition
         * @instance
         */
        AssetDefinition.prototype.VotingRights = false;

        /**
         * AssetDefinition VoteMultiplier.
         * @member {number} VoteMultiplier
         * @memberof actions.AssetDefinition
         * @instance
         */
        AssetDefinition.prototype.VoteMultiplier = 0;

        /**
         * AssetDefinition AdministrationProposal.
         * @member {boolean} AdministrationProposal
         * @memberof actions.AssetDefinition
         * @instance
         */
        AssetDefinition.prototype.AdministrationProposal = false;

        /**
         * AssetDefinition HolderProposal.
         * @member {boolean} HolderProposal
         * @memberof actions.AssetDefinition
         * @instance
         */
        AssetDefinition.prototype.HolderProposal = false;

        /**
         * AssetDefinition AssetModificationGovernance.
         * @member {number} AssetModificationGovernance
         * @memberof actions.AssetDefinition
         * @instance
         */
        AssetDefinition.prototype.AssetModificationGovernance = 0;

        /**
         * AssetDefinition TokenQty.
         * @member {number|Long} TokenQty
         * @memberof actions.AssetDefinition
         * @instance
         */
        AssetDefinition.prototype.TokenQty = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * AssetDefinition AssetType.
         * @member {string} AssetType
         * @memberof actions.AssetDefinition
         * @instance
         */
        AssetDefinition.prototype.AssetType = "";

        /**
         * AssetDefinition AssetPayload.
         * @member {Uint8Array} AssetPayload
         * @memberof actions.AssetDefinition
         * @instance
         */
        AssetDefinition.prototype.AssetPayload = $util.newBuffer([]);

        /**
         * Creates a new AssetDefinition instance using the specified properties.
         * @function create
         * @memberof actions.AssetDefinition
         * @static
         * @param {actions.IAssetDefinition=} [properties] Properties to set
         * @returns {actions.AssetDefinition} AssetDefinition instance
         */
        AssetDefinition.create = function create(properties) {
            return new AssetDefinition(properties);
        };

        /**
         * Encodes the specified AssetDefinition message. Does not implicitly {@link actions.AssetDefinition.verify|verify} messages.
         * @function encode
         * @memberof actions.AssetDefinition
         * @static
         * @param {actions.IAssetDefinition} message AssetDefinition message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AssetDefinition.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.AssetPermissions != null && Object.hasOwnProperty.call(message, "AssetPermissions"))
                writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.AssetPermissions);
            if (message.TransfersPermitted != null && Object.hasOwnProperty.call(message, "TransfersPermitted"))
                writer.uint32(/* id 2, wireType 0 =*/16).bool(message.TransfersPermitted);
            if (message.TradeRestrictions != null && message.TradeRestrictions.length)
                for (var i = 0; i < message.TradeRestrictions.length; ++i)
                    writer.uint32(/* id 3, wireType 2 =*/26).string(message.TradeRestrictions[i]);
            if (message.EnforcementOrdersPermitted != null && Object.hasOwnProperty.call(message, "EnforcementOrdersPermitted"))
                writer.uint32(/* id 4, wireType 0 =*/32).bool(message.EnforcementOrdersPermitted);
            if (message.VotingRights != null && Object.hasOwnProperty.call(message, "VotingRights"))
                writer.uint32(/* id 5, wireType 0 =*/40).bool(message.VotingRights);
            if (message.VoteMultiplier != null && Object.hasOwnProperty.call(message, "VoteMultiplier"))
                writer.uint32(/* id 6, wireType 0 =*/48).uint32(message.VoteMultiplier);
            if (message.AdministrationProposal != null && Object.hasOwnProperty.call(message, "AdministrationProposal"))
                writer.uint32(/* id 7, wireType 0 =*/56).bool(message.AdministrationProposal);
            if (message.HolderProposal != null && Object.hasOwnProperty.call(message, "HolderProposal"))
                writer.uint32(/* id 8, wireType 0 =*/64).bool(message.HolderProposal);
            if (message.AssetModificationGovernance != null && Object.hasOwnProperty.call(message, "AssetModificationGovernance"))
                writer.uint32(/* id 9, wireType 0 =*/72).uint32(message.AssetModificationGovernance);
            if (message.TokenQty != null && Object.hasOwnProperty.call(message, "TokenQty"))
                writer.uint32(/* id 10, wireType 0 =*/80).uint64(message.TokenQty);
            if (message.AssetType != null && Object.hasOwnProperty.call(message, "AssetType"))
                writer.uint32(/* id 11, wireType 2 =*/90).string(message.AssetType);
            if (message.AssetPayload != null && Object.hasOwnProperty.call(message, "AssetPayload"))
                writer.uint32(/* id 12, wireType 2 =*/98).bytes(message.AssetPayload);
            return writer;
        };

        /**
         * Encodes the specified AssetDefinition message, length delimited. Does not implicitly {@link actions.AssetDefinition.verify|verify} messages.
         * @function encodeDelimited
         * @memberof actions.AssetDefinition
         * @static
         * @param {actions.IAssetDefinition} message AssetDefinition message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AssetDefinition.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an AssetDefinition message from the specified reader or buffer.
         * @function decode
         * @memberof actions.AssetDefinition
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {actions.AssetDefinition} AssetDefinition
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AssetDefinition.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.actions.AssetDefinition();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.AssetPermissions = reader.bytes();
                    break;
                case 2:
                    message.TransfersPermitted = reader.bool();
                    break;
                case 3:
                    if (!(message.TradeRestrictions && message.TradeRestrictions.length))
                        message.TradeRestrictions = [];
                    message.TradeRestrictions.push(reader.string());
                    break;
                case 4:
                    message.EnforcementOrdersPermitted = reader.bool();
                    break;
                case 5:
                    message.VotingRights = reader.bool();
                    break;
                case 6:
                    message.VoteMultiplier = reader.uint32();
                    break;
                case 7:
                    message.AdministrationProposal = reader.bool();
                    break;
                case 8:
                    message.HolderProposal = reader.bool();
                    break;
                case 9:
                    message.AssetModificationGovernance = reader.uint32();
                    break;
                case 10:
                    message.TokenQty = reader.uint64();
                    break;
                case 11:
                    message.AssetType = reader.string();
                    break;
                case 12:
                    message.AssetPayload = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an AssetDefinition message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof actions.AssetDefinition
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {actions.AssetDefinition} AssetDefinition
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AssetDefinition.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an AssetDefinition message.
         * @function verify
         * @memberof actions.AssetDefinition
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        AssetDefinition.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.AssetPermissions != null && message.hasOwnProperty("AssetPermissions"))
                if (!(message.AssetPermissions && typeof message.AssetPermissions.length === "number" || $util.isString(message.AssetPermissions)))
                    return "AssetPermissions: buffer expected";
            if (message.TransfersPermitted != null && message.hasOwnProperty("TransfersPermitted"))
                if (typeof message.TransfersPermitted !== "boolean")
                    return "TransfersPermitted: boolean expected";
            if (message.TradeRestrictions != null && message.hasOwnProperty("TradeRestrictions")) {
                if (!Array.isArray(message.TradeRestrictions))
                    return "TradeRestrictions: array expected";
                for (var i = 0; i < message.TradeRestrictions.length; ++i)
                    if (!$util.isString(message.TradeRestrictions[i]))
                        return "TradeRestrictions: string[] expected";
            }
            if (message.EnforcementOrdersPermitted != null && message.hasOwnProperty("EnforcementOrdersPermitted"))
                if (typeof message.EnforcementOrdersPermitted !== "boolean")
                    return "EnforcementOrdersPermitted: boolean expected";
            if (message.VotingRights != null && message.hasOwnProperty("VotingRights"))
                if (typeof message.VotingRights !== "boolean")
                    return "VotingRights: boolean expected";
            if (message.VoteMultiplier != null && message.hasOwnProperty("VoteMultiplier"))
                if (!$util.isInteger(message.VoteMultiplier))
                    return "VoteMultiplier: integer expected";
            if (message.AdministrationProposal != null && message.hasOwnProperty("AdministrationProposal"))
                if (typeof message.AdministrationProposal !== "boolean")
                    return "AdministrationProposal: boolean expected";
            if (message.HolderProposal != null && message.hasOwnProperty("HolderProposal"))
                if (typeof message.HolderProposal !== "boolean")
                    return "HolderProposal: boolean expected";
            if (message.AssetModificationGovernance != null && message.hasOwnProperty("AssetModificationGovernance"))
                if (!$util.isInteger(message.AssetModificationGovernance))
                    return "AssetModificationGovernance: integer expected";
            if (message.TokenQty != null && message.hasOwnProperty("TokenQty"))
                if (!$util.isInteger(message.TokenQty) && !(message.TokenQty && $util.isInteger(message.TokenQty.low) && $util.isInteger(message.TokenQty.high)))
                    return "TokenQty: integer|Long expected";
            if (message.AssetType != null && message.hasOwnProperty("AssetType"))
                if (!$util.isString(message.AssetType))
                    return "AssetType: string expected";
            if (message.AssetPayload != null && message.hasOwnProperty("AssetPayload"))
                if (!(message.AssetPayload && typeof message.AssetPayload.length === "number" || $util.isString(message.AssetPayload)))
                    return "AssetPayload: buffer expected";
            return null;
        };

        /**
         * Creates an AssetDefinition message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof actions.AssetDefinition
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {actions.AssetDefinition} AssetDefinition
         */
        AssetDefinition.fromObject = function fromObject(object) {
            if (object instanceof $root.actions.AssetDefinition)
                return object;
            var message = new $root.actions.AssetDefinition();
            if (object.AssetPermissions != null)
                if (typeof object.AssetPermissions === "string")
                    $util.base64.decode(object.AssetPermissions, message.AssetPermissions = $util.newBuffer($util.base64.length(object.AssetPermissions)), 0);
                else if (object.AssetPermissions.length)
                    message.AssetPermissions = object.AssetPermissions;
            if (object.TransfersPermitted != null)
                message.TransfersPermitted = Boolean(object.TransfersPermitted);
            if (object.TradeRestrictions) {
                if (!Array.isArray(object.TradeRestrictions))
                    throw TypeError(".actions.AssetDefinition.TradeRestrictions: array expected");
                message.TradeRestrictions = [];
                for (var i = 0; i < object.TradeRestrictions.length; ++i)
                    message.TradeRestrictions[i] = String(object.TradeRestrictions[i]);
            }
            if (object.EnforcementOrdersPermitted != null)
                message.EnforcementOrdersPermitted = Boolean(object.EnforcementOrdersPermitted);
            if (object.VotingRights != null)
                message.VotingRights = Boolean(object.VotingRights);
            if (object.VoteMultiplier != null)
                message.VoteMultiplier = object.VoteMultiplier >>> 0;
            if (object.AdministrationProposal != null)
                message.AdministrationProposal = Boolean(object.AdministrationProposal);
            if (object.HolderProposal != null)
                message.HolderProposal = Boolean(object.HolderProposal);
            if (object.AssetModificationGovernance != null)
                message.AssetModificationGovernance = object.AssetModificationGovernance >>> 0;
            if (object.TokenQty != null)
                if ($util.Long)
                    (message.TokenQty = $util.Long.fromValue(object.TokenQty)).unsigned = true;
                else if (typeof object.TokenQty === "string")
                    message.TokenQty = parseInt(object.TokenQty, 10);
                else if (typeof object.TokenQty === "number")
                    message.TokenQty = object.TokenQty;
                else if (typeof object.TokenQty === "object")
                    message.TokenQty = new $util.LongBits(object.TokenQty.low >>> 0, object.TokenQty.high >>> 0).toNumber(true);
            if (object.AssetType != null)
                message.AssetType = String(object.AssetType);
            if (object.AssetPayload != null)
                if (typeof object.AssetPayload === "string")
                    $util.base64.decode(object.AssetPayload, message.AssetPayload = $util.newBuffer($util.base64.length(object.AssetPayload)), 0);
                else if (object.AssetPayload.length)
                    message.AssetPayload = object.AssetPayload;
            return message;
        };

        /**
         * Creates a plain object from an AssetDefinition message. Also converts values to other types if specified.
         * @function toObject
         * @memberof actions.AssetDefinition
         * @static
         * @param {actions.AssetDefinition} message AssetDefinition
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        AssetDefinition.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.TradeRestrictions = [];
            if (options.defaults) {
                if (options.bytes === String)
                    object.AssetPermissions = "";
                else {
                    object.AssetPermissions = [];
                    if (options.bytes !== Array)
                        object.AssetPermissions = $util.newBuffer(object.AssetPermissions);
                }
                object.TransfersPermitted = false;
                object.EnforcementOrdersPermitted = false;
                object.VotingRights = false;
                object.VoteMultiplier = 0;
                object.AdministrationProposal = false;
                object.HolderProposal = false;
                object.AssetModificationGovernance = 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.TokenQty = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.TokenQty = options.longs === String ? "0" : 0;
                object.AssetType = "";
                if (options.bytes === String)
                    object.AssetPayload = "";
                else {
                    object.AssetPayload = [];
                    if (options.bytes !== Array)
                        object.AssetPayload = $util.newBuffer(object.AssetPayload);
                }
            }
            if (message.AssetPermissions != null && message.hasOwnProperty("AssetPermissions"))
                object.AssetPermissions = options.bytes === String ? $util.base64.encode(message.AssetPermissions, 0, message.AssetPermissions.length) : options.bytes === Array ? Array.prototype.slice.call(message.AssetPermissions) : message.AssetPermissions;
            if (message.TransfersPermitted != null && message.hasOwnProperty("TransfersPermitted"))
                object.TransfersPermitted = message.TransfersPermitted;
            if (message.TradeRestrictions && message.TradeRestrictions.length) {
                object.TradeRestrictions = [];
                for (var j = 0; j < message.TradeRestrictions.length; ++j)
                    object.TradeRestrictions[j] = message.TradeRestrictions[j];
            }
            if (message.EnforcementOrdersPermitted != null && message.hasOwnProperty("EnforcementOrdersPermitted"))
                object.EnforcementOrdersPermitted = message.EnforcementOrdersPermitted;
            if (message.VotingRights != null && message.hasOwnProperty("VotingRights"))
                object.VotingRights = message.VotingRights;
            if (message.VoteMultiplier != null && message.hasOwnProperty("VoteMultiplier"))
                object.VoteMultiplier = message.VoteMultiplier;
            if (message.AdministrationProposal != null && message.hasOwnProperty("AdministrationProposal"))
                object.AdministrationProposal = message.AdministrationProposal;
            if (message.HolderProposal != null && message.hasOwnProperty("HolderProposal"))
                object.HolderProposal = message.HolderProposal;
            if (message.AssetModificationGovernance != null && message.hasOwnProperty("AssetModificationGovernance"))
                object.AssetModificationGovernance = message.AssetModificationGovernance;
            if (message.TokenQty != null && message.hasOwnProperty("TokenQty"))
                if (typeof message.TokenQty === "number")
                    object.TokenQty = options.longs === String ? String(message.TokenQty) : message.TokenQty;
                else
                    object.TokenQty = options.longs === String ? $util.Long.prototype.toString.call(message.TokenQty) : options.longs === Number ? new $util.LongBits(message.TokenQty.low >>> 0, message.TokenQty.high >>> 0).toNumber(true) : message.TokenQty;
            if (message.AssetType != null && message.hasOwnProperty("AssetType"))
                object.AssetType = message.AssetType;
            if (message.AssetPayload != null && message.hasOwnProperty("AssetPayload"))
                object.AssetPayload = options.bytes === String ? $util.base64.encode(message.AssetPayload, 0, message.AssetPayload.length) : options.bytes === Array ? Array.prototype.slice.call(message.AssetPayload) : message.AssetPayload;
            return object;
        };

        /**
         * Converts this AssetDefinition to JSON.
         * @function toJSON
         * @memberof actions.AssetDefinition
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        AssetDefinition.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return AssetDefinition;
    })();

    actions.AssetCreation = (function() {

        /**
         * Properties of an AssetCreation.
         * @memberof actions
         * @interface IAssetCreation
         * @property {Uint8Array|null} [AssetCode] AssetCreation AssetCode
         * @property {number|Long|null} [AssetIndex] AssetCreation AssetIndex
         * @property {Uint8Array|null} [AssetPermissions] AssetCreation AssetPermissions
         * @property {boolean|null} [TransfersPermitted] AssetCreation TransfersPermitted
         * @property {Array.<string>|null} [TradeRestrictions] AssetCreation TradeRestrictions
         * @property {boolean|null} [EnforcementOrdersPermitted] AssetCreation EnforcementOrdersPermitted
         * @property {boolean|null} [VotingRights] AssetCreation VotingRights
         * @property {number|null} [VoteMultiplier] AssetCreation VoteMultiplier
         * @property {boolean|null} [AdministrationProposal] AssetCreation AdministrationProposal
         * @property {boolean|null} [HolderProposal] AssetCreation HolderProposal
         * @property {number|null} [AssetModificationGovernance] AssetCreation AssetModificationGovernance
         * @property {number|Long|null} [TokenQty] AssetCreation TokenQty
         * @property {string|null} [AssetType] AssetCreation AssetType
         * @property {Uint8Array|null} [AssetPayload] AssetCreation AssetPayload
         * @property {number|null} [AssetRevision] AssetCreation AssetRevision
         * @property {number|Long|null} [Timestamp] AssetCreation Timestamp
         */

        /**
         * Constructs a new AssetCreation.
         * @memberof actions
         * @classdesc Represents an AssetCreation.
         * @implements IAssetCreation
         * @constructor
         * @param {actions.IAssetCreation=} [properties] Properties to set
         */
        function AssetCreation(properties) {
            this.TradeRestrictions = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * AssetCreation AssetCode.
         * @member {Uint8Array} AssetCode
         * @memberof actions.AssetCreation
         * @instance
         */
        AssetCreation.prototype.AssetCode = $util.newBuffer([]);

        /**
         * AssetCreation AssetIndex.
         * @member {number|Long} AssetIndex
         * @memberof actions.AssetCreation
         * @instance
         */
        AssetCreation.prototype.AssetIndex = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * AssetCreation AssetPermissions.
         * @member {Uint8Array} AssetPermissions
         * @memberof actions.AssetCreation
         * @instance
         */
        AssetCreation.prototype.AssetPermissions = $util.newBuffer([]);

        /**
         * AssetCreation TransfersPermitted.
         * @member {boolean} TransfersPermitted
         * @memberof actions.AssetCreation
         * @instance
         */
        AssetCreation.prototype.TransfersPermitted = false;

        /**
         * AssetCreation TradeRestrictions.
         * @member {Array.<string>} TradeRestrictions
         * @memberof actions.AssetCreation
         * @instance
         */
        AssetCreation.prototype.TradeRestrictions = $util.emptyArray;

        /**
         * AssetCreation EnforcementOrdersPermitted.
         * @member {boolean} EnforcementOrdersPermitted
         * @memberof actions.AssetCreation
         * @instance
         */
        AssetCreation.prototype.EnforcementOrdersPermitted = false;

        /**
         * AssetCreation VotingRights.
         * @member {boolean} VotingRights
         * @memberof actions.AssetCreation
         * @instance
         */
        AssetCreation.prototype.VotingRights = false;

        /**
         * AssetCreation VoteMultiplier.
         * @member {number} VoteMultiplier
         * @memberof actions.AssetCreation
         * @instance
         */
        AssetCreation.prototype.VoteMultiplier = 0;

        /**
         * AssetCreation AdministrationProposal.
         * @member {boolean} AdministrationProposal
         * @memberof actions.AssetCreation
         * @instance
         */
        AssetCreation.prototype.AdministrationProposal = false;

        /**
         * AssetCreation HolderProposal.
         * @member {boolean} HolderProposal
         * @memberof actions.AssetCreation
         * @instance
         */
        AssetCreation.prototype.HolderProposal = false;

        /**
         * AssetCreation AssetModificationGovernance.
         * @member {number} AssetModificationGovernance
         * @memberof actions.AssetCreation
         * @instance
         */
        AssetCreation.prototype.AssetModificationGovernance = 0;

        /**
         * AssetCreation TokenQty.
         * @member {number|Long} TokenQty
         * @memberof actions.AssetCreation
         * @instance
         */
        AssetCreation.prototype.TokenQty = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * AssetCreation AssetType.
         * @member {string} AssetType
         * @memberof actions.AssetCreation
         * @instance
         */
        AssetCreation.prototype.AssetType = "";

        /**
         * AssetCreation AssetPayload.
         * @member {Uint8Array} AssetPayload
         * @memberof actions.AssetCreation
         * @instance
         */
        AssetCreation.prototype.AssetPayload = $util.newBuffer([]);

        /**
         * AssetCreation AssetRevision.
         * @member {number} AssetRevision
         * @memberof actions.AssetCreation
         * @instance
         */
        AssetCreation.prototype.AssetRevision = 0;

        /**
         * AssetCreation Timestamp.
         * @member {number|Long} Timestamp
         * @memberof actions.AssetCreation
         * @instance
         */
        AssetCreation.prototype.Timestamp = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * Creates a new AssetCreation instance using the specified properties.
         * @function create
         * @memberof actions.AssetCreation
         * @static
         * @param {actions.IAssetCreation=} [properties] Properties to set
         * @returns {actions.AssetCreation} AssetCreation instance
         */
        AssetCreation.create = function create(properties) {
            return new AssetCreation(properties);
        };

        /**
         * Encodes the specified AssetCreation message. Does not implicitly {@link actions.AssetCreation.verify|verify} messages.
         * @function encode
         * @memberof actions.AssetCreation
         * @static
         * @param {actions.IAssetCreation} message AssetCreation message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AssetCreation.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.AssetCode != null && Object.hasOwnProperty.call(message, "AssetCode"))
                writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.AssetCode);
            if (message.AssetIndex != null && Object.hasOwnProperty.call(message, "AssetIndex"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint64(message.AssetIndex);
            if (message.AssetPermissions != null && Object.hasOwnProperty.call(message, "AssetPermissions"))
                writer.uint32(/* id 3, wireType 2 =*/26).bytes(message.AssetPermissions);
            if (message.TransfersPermitted != null && Object.hasOwnProperty.call(message, "TransfersPermitted"))
                writer.uint32(/* id 4, wireType 0 =*/32).bool(message.TransfersPermitted);
            if (message.TradeRestrictions != null && message.TradeRestrictions.length)
                for (var i = 0; i < message.TradeRestrictions.length; ++i)
                    writer.uint32(/* id 5, wireType 2 =*/42).string(message.TradeRestrictions[i]);
            if (message.EnforcementOrdersPermitted != null && Object.hasOwnProperty.call(message, "EnforcementOrdersPermitted"))
                writer.uint32(/* id 6, wireType 0 =*/48).bool(message.EnforcementOrdersPermitted);
            if (message.VotingRights != null && Object.hasOwnProperty.call(message, "VotingRights"))
                writer.uint32(/* id 7, wireType 0 =*/56).bool(message.VotingRights);
            if (message.VoteMultiplier != null && Object.hasOwnProperty.call(message, "VoteMultiplier"))
                writer.uint32(/* id 8, wireType 0 =*/64).uint32(message.VoteMultiplier);
            if (message.AdministrationProposal != null && Object.hasOwnProperty.call(message, "AdministrationProposal"))
                writer.uint32(/* id 9, wireType 0 =*/72).bool(message.AdministrationProposal);
            if (message.HolderProposal != null && Object.hasOwnProperty.call(message, "HolderProposal"))
                writer.uint32(/* id 10, wireType 0 =*/80).bool(message.HolderProposal);
            if (message.AssetModificationGovernance != null && Object.hasOwnProperty.call(message, "AssetModificationGovernance"))
                writer.uint32(/* id 11, wireType 0 =*/88).uint32(message.AssetModificationGovernance);
            if (message.TokenQty != null && Object.hasOwnProperty.call(message, "TokenQty"))
                writer.uint32(/* id 12, wireType 0 =*/96).uint64(message.TokenQty);
            if (message.AssetType != null && Object.hasOwnProperty.call(message, "AssetType"))
                writer.uint32(/* id 13, wireType 2 =*/106).string(message.AssetType);
            if (message.AssetPayload != null && Object.hasOwnProperty.call(message, "AssetPayload"))
                writer.uint32(/* id 14, wireType 2 =*/114).bytes(message.AssetPayload);
            if (message.AssetRevision != null && Object.hasOwnProperty.call(message, "AssetRevision"))
                writer.uint32(/* id 15, wireType 0 =*/120).uint32(message.AssetRevision);
            if (message.Timestamp != null && Object.hasOwnProperty.call(message, "Timestamp"))
                writer.uint32(/* id 16, wireType 0 =*/128).uint64(message.Timestamp);
            return writer;
        };

        /**
         * Encodes the specified AssetCreation message, length delimited. Does not implicitly {@link actions.AssetCreation.verify|verify} messages.
         * @function encodeDelimited
         * @memberof actions.AssetCreation
         * @static
         * @param {actions.IAssetCreation} message AssetCreation message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AssetCreation.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an AssetCreation message from the specified reader or buffer.
         * @function decode
         * @memberof actions.AssetCreation
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {actions.AssetCreation} AssetCreation
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AssetCreation.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.actions.AssetCreation();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.AssetCode = reader.bytes();
                    break;
                case 2:
                    message.AssetIndex = reader.uint64();
                    break;
                case 3:
                    message.AssetPermissions = reader.bytes();
                    break;
                case 4:
                    message.TransfersPermitted = reader.bool();
                    break;
                case 5:
                    if (!(message.TradeRestrictions && message.TradeRestrictions.length))
                        message.TradeRestrictions = [];
                    message.TradeRestrictions.push(reader.string());
                    break;
                case 6:
                    message.EnforcementOrdersPermitted = reader.bool();
                    break;
                case 7:
                    message.VotingRights = reader.bool();
                    break;
                case 8:
                    message.VoteMultiplier = reader.uint32();
                    break;
                case 9:
                    message.AdministrationProposal = reader.bool();
                    break;
                case 10:
                    message.HolderProposal = reader.bool();
                    break;
                case 11:
                    message.AssetModificationGovernance = reader.uint32();
                    break;
                case 12:
                    message.TokenQty = reader.uint64();
                    break;
                case 13:
                    message.AssetType = reader.string();
                    break;
                case 14:
                    message.AssetPayload = reader.bytes();
                    break;
                case 15:
                    message.AssetRevision = reader.uint32();
                    break;
                case 16:
                    message.Timestamp = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an AssetCreation message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof actions.AssetCreation
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {actions.AssetCreation} AssetCreation
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AssetCreation.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an AssetCreation message.
         * @function verify
         * @memberof actions.AssetCreation
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        AssetCreation.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.AssetCode != null && message.hasOwnProperty("AssetCode"))
                if (!(message.AssetCode && typeof message.AssetCode.length === "number" || $util.isString(message.AssetCode)))
                    return "AssetCode: buffer expected";
            if (message.AssetIndex != null && message.hasOwnProperty("AssetIndex"))
                if (!$util.isInteger(message.AssetIndex) && !(message.AssetIndex && $util.isInteger(message.AssetIndex.low) && $util.isInteger(message.AssetIndex.high)))
                    return "AssetIndex: integer|Long expected";
            if (message.AssetPermissions != null && message.hasOwnProperty("AssetPermissions"))
                if (!(message.AssetPermissions && typeof message.AssetPermissions.length === "number" || $util.isString(message.AssetPermissions)))
                    return "AssetPermissions: buffer expected";
            if (message.TransfersPermitted != null && message.hasOwnProperty("TransfersPermitted"))
                if (typeof message.TransfersPermitted !== "boolean")
                    return "TransfersPermitted: boolean expected";
            if (message.TradeRestrictions != null && message.hasOwnProperty("TradeRestrictions")) {
                if (!Array.isArray(message.TradeRestrictions))
                    return "TradeRestrictions: array expected";
                for (var i = 0; i < message.TradeRestrictions.length; ++i)
                    if (!$util.isString(message.TradeRestrictions[i]))
                        return "TradeRestrictions: string[] expected";
            }
            if (message.EnforcementOrdersPermitted != null && message.hasOwnProperty("EnforcementOrdersPermitted"))
                if (typeof message.EnforcementOrdersPermitted !== "boolean")
                    return "EnforcementOrdersPermitted: boolean expected";
            if (message.VotingRights != null && message.hasOwnProperty("VotingRights"))
                if (typeof message.VotingRights !== "boolean")
                    return "VotingRights: boolean expected";
            if (message.VoteMultiplier != null && message.hasOwnProperty("VoteMultiplier"))
                if (!$util.isInteger(message.VoteMultiplier))
                    return "VoteMultiplier: integer expected";
            if (message.AdministrationProposal != null && message.hasOwnProperty("AdministrationProposal"))
                if (typeof message.AdministrationProposal !== "boolean")
                    return "AdministrationProposal: boolean expected";
            if (message.HolderProposal != null && message.hasOwnProperty("HolderProposal"))
                if (typeof message.HolderProposal !== "boolean")
                    return "HolderProposal: boolean expected";
            if (message.AssetModificationGovernance != null && message.hasOwnProperty("AssetModificationGovernance"))
                if (!$util.isInteger(message.AssetModificationGovernance))
                    return "AssetModificationGovernance: integer expected";
            if (message.TokenQty != null && message.hasOwnProperty("TokenQty"))
                if (!$util.isInteger(message.TokenQty) && !(message.TokenQty && $util.isInteger(message.TokenQty.low) && $util.isInteger(message.TokenQty.high)))
                    return "TokenQty: integer|Long expected";
            if (message.AssetType != null && message.hasOwnProperty("AssetType"))
                if (!$util.isString(message.AssetType))
                    return "AssetType: string expected";
            if (message.AssetPayload != null && message.hasOwnProperty("AssetPayload"))
                if (!(message.AssetPayload && typeof message.AssetPayload.length === "number" || $util.isString(message.AssetPayload)))
                    return "AssetPayload: buffer expected";
            if (message.AssetRevision != null && message.hasOwnProperty("AssetRevision"))
                if (!$util.isInteger(message.AssetRevision))
                    return "AssetRevision: integer expected";
            if (message.Timestamp != null && message.hasOwnProperty("Timestamp"))
                if (!$util.isInteger(message.Timestamp) && !(message.Timestamp && $util.isInteger(message.Timestamp.low) && $util.isInteger(message.Timestamp.high)))
                    return "Timestamp: integer|Long expected";
            return null;
        };

        /**
         * Creates an AssetCreation message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof actions.AssetCreation
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {actions.AssetCreation} AssetCreation
         */
        AssetCreation.fromObject = function fromObject(object) {
            if (object instanceof $root.actions.AssetCreation)
                return object;
            var message = new $root.actions.AssetCreation();
            if (object.AssetCode != null)
                if (typeof object.AssetCode === "string")
                    $util.base64.decode(object.AssetCode, message.AssetCode = $util.newBuffer($util.base64.length(object.AssetCode)), 0);
                else if (object.AssetCode.length)
                    message.AssetCode = object.AssetCode;
            if (object.AssetIndex != null)
                if ($util.Long)
                    (message.AssetIndex = $util.Long.fromValue(object.AssetIndex)).unsigned = true;
                else if (typeof object.AssetIndex === "string")
                    message.AssetIndex = parseInt(object.AssetIndex, 10);
                else if (typeof object.AssetIndex === "number")
                    message.AssetIndex = object.AssetIndex;
                else if (typeof object.AssetIndex === "object")
                    message.AssetIndex = new $util.LongBits(object.AssetIndex.low >>> 0, object.AssetIndex.high >>> 0).toNumber(true);
            if (object.AssetPermissions != null)
                if (typeof object.AssetPermissions === "string")
                    $util.base64.decode(object.AssetPermissions, message.AssetPermissions = $util.newBuffer($util.base64.length(object.AssetPermissions)), 0);
                else if (object.AssetPermissions.length)
                    message.AssetPermissions = object.AssetPermissions;
            if (object.TransfersPermitted != null)
                message.TransfersPermitted = Boolean(object.TransfersPermitted);
            if (object.TradeRestrictions) {
                if (!Array.isArray(object.TradeRestrictions))
                    throw TypeError(".actions.AssetCreation.TradeRestrictions: array expected");
                message.TradeRestrictions = [];
                for (var i = 0; i < object.TradeRestrictions.length; ++i)
                    message.TradeRestrictions[i] = String(object.TradeRestrictions[i]);
            }
            if (object.EnforcementOrdersPermitted != null)
                message.EnforcementOrdersPermitted = Boolean(object.EnforcementOrdersPermitted);
            if (object.VotingRights != null)
                message.VotingRights = Boolean(object.VotingRights);
            if (object.VoteMultiplier != null)
                message.VoteMultiplier = object.VoteMultiplier >>> 0;
            if (object.AdministrationProposal != null)
                message.AdministrationProposal = Boolean(object.AdministrationProposal);
            if (object.HolderProposal != null)
                message.HolderProposal = Boolean(object.HolderProposal);
            if (object.AssetModificationGovernance != null)
                message.AssetModificationGovernance = object.AssetModificationGovernance >>> 0;
            if (object.TokenQty != null)
                if ($util.Long)
                    (message.TokenQty = $util.Long.fromValue(object.TokenQty)).unsigned = true;
                else if (typeof object.TokenQty === "string")
                    message.TokenQty = parseInt(object.TokenQty, 10);
                else if (typeof object.TokenQty === "number")
                    message.TokenQty = object.TokenQty;
                else if (typeof object.TokenQty === "object")
                    message.TokenQty = new $util.LongBits(object.TokenQty.low >>> 0, object.TokenQty.high >>> 0).toNumber(true);
            if (object.AssetType != null)
                message.AssetType = String(object.AssetType);
            if (object.AssetPayload != null)
                if (typeof object.AssetPayload === "string")
                    $util.base64.decode(object.AssetPayload, message.AssetPayload = $util.newBuffer($util.base64.length(object.AssetPayload)), 0);
                else if (object.AssetPayload.length)
                    message.AssetPayload = object.AssetPayload;
            if (object.AssetRevision != null)
                message.AssetRevision = object.AssetRevision >>> 0;
            if (object.Timestamp != null)
                if ($util.Long)
                    (message.Timestamp = $util.Long.fromValue(object.Timestamp)).unsigned = true;
                else if (typeof object.Timestamp === "string")
                    message.Timestamp = parseInt(object.Timestamp, 10);
                else if (typeof object.Timestamp === "number")
                    message.Timestamp = object.Timestamp;
                else if (typeof object.Timestamp === "object")
                    message.Timestamp = new $util.LongBits(object.Timestamp.low >>> 0, object.Timestamp.high >>> 0).toNumber(true);
            return message;
        };

        /**
         * Creates a plain object from an AssetCreation message. Also converts values to other types if specified.
         * @function toObject
         * @memberof actions.AssetCreation
         * @static
         * @param {actions.AssetCreation} message AssetCreation
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        AssetCreation.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.TradeRestrictions = [];
            if (options.defaults) {
                if (options.bytes === String)
                    object.AssetCode = "";
                else {
                    object.AssetCode = [];
                    if (options.bytes !== Array)
                        object.AssetCode = $util.newBuffer(object.AssetCode);
                }
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.AssetIndex = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.AssetIndex = options.longs === String ? "0" : 0;
                if (options.bytes === String)
                    object.AssetPermissions = "";
                else {
                    object.AssetPermissions = [];
                    if (options.bytes !== Array)
                        object.AssetPermissions = $util.newBuffer(object.AssetPermissions);
                }
                object.TransfersPermitted = false;
                object.EnforcementOrdersPermitted = false;
                object.VotingRights = false;
                object.VoteMultiplier = 0;
                object.AdministrationProposal = false;
                object.HolderProposal = false;
                object.AssetModificationGovernance = 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.TokenQty = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.TokenQty = options.longs === String ? "0" : 0;
                object.AssetType = "";
                if (options.bytes === String)
                    object.AssetPayload = "";
                else {
                    object.AssetPayload = [];
                    if (options.bytes !== Array)
                        object.AssetPayload = $util.newBuffer(object.AssetPayload);
                }
                object.AssetRevision = 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.Timestamp = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.Timestamp = options.longs === String ? "0" : 0;
            }
            if (message.AssetCode != null && message.hasOwnProperty("AssetCode"))
                object.AssetCode = options.bytes === String ? $util.base64.encode(message.AssetCode, 0, message.AssetCode.length) : options.bytes === Array ? Array.prototype.slice.call(message.AssetCode) : message.AssetCode;
            if (message.AssetIndex != null && message.hasOwnProperty("AssetIndex"))
                if (typeof message.AssetIndex === "number")
                    object.AssetIndex = options.longs === String ? String(message.AssetIndex) : message.AssetIndex;
                else
                    object.AssetIndex = options.longs === String ? $util.Long.prototype.toString.call(message.AssetIndex) : options.longs === Number ? new $util.LongBits(message.AssetIndex.low >>> 0, message.AssetIndex.high >>> 0).toNumber(true) : message.AssetIndex;
            if (message.AssetPermissions != null && message.hasOwnProperty("AssetPermissions"))
                object.AssetPermissions = options.bytes === String ? $util.base64.encode(message.AssetPermissions, 0, message.AssetPermissions.length) : options.bytes === Array ? Array.prototype.slice.call(message.AssetPermissions) : message.AssetPermissions;
            if (message.TransfersPermitted != null && message.hasOwnProperty("TransfersPermitted"))
                object.TransfersPermitted = message.TransfersPermitted;
            if (message.TradeRestrictions && message.TradeRestrictions.length) {
                object.TradeRestrictions = [];
                for (var j = 0; j < message.TradeRestrictions.length; ++j)
                    object.TradeRestrictions[j] = message.TradeRestrictions[j];
            }
            if (message.EnforcementOrdersPermitted != null && message.hasOwnProperty("EnforcementOrdersPermitted"))
                object.EnforcementOrdersPermitted = message.EnforcementOrdersPermitted;
            if (message.VotingRights != null && message.hasOwnProperty("VotingRights"))
                object.VotingRights = message.VotingRights;
            if (message.VoteMultiplier != null && message.hasOwnProperty("VoteMultiplier"))
                object.VoteMultiplier = message.VoteMultiplier;
            if (message.AdministrationProposal != null && message.hasOwnProperty("AdministrationProposal"))
                object.AdministrationProposal = message.AdministrationProposal;
            if (message.HolderProposal != null && message.hasOwnProperty("HolderProposal"))
                object.HolderProposal = message.HolderProposal;
            if (message.AssetModificationGovernance != null && message.hasOwnProperty("AssetModificationGovernance"))
                object.AssetModificationGovernance = message.AssetModificationGovernance;
            if (message.TokenQty != null && message.hasOwnProperty("TokenQty"))
                if (typeof message.TokenQty === "number")
                    object.TokenQty = options.longs === String ? String(message.TokenQty) : message.TokenQty;
                else
                    object.TokenQty = options.longs === String ? $util.Long.prototype.toString.call(message.TokenQty) : options.longs === Number ? new $util.LongBits(message.TokenQty.low >>> 0, message.TokenQty.high >>> 0).toNumber(true) : message.TokenQty;
            if (message.AssetType != null && message.hasOwnProperty("AssetType"))
                object.AssetType = message.AssetType;
            if (message.AssetPayload != null && message.hasOwnProperty("AssetPayload"))
                object.AssetPayload = options.bytes === String ? $util.base64.encode(message.AssetPayload, 0, message.AssetPayload.length) : options.bytes === Array ? Array.prototype.slice.call(message.AssetPayload) : message.AssetPayload;
            if (message.AssetRevision != null && message.hasOwnProperty("AssetRevision"))
                object.AssetRevision = message.AssetRevision;
            if (message.Timestamp != null && message.hasOwnProperty("Timestamp"))
                if (typeof message.Timestamp === "number")
                    object.Timestamp = options.longs === String ? String(message.Timestamp) : message.Timestamp;
                else
                    object.Timestamp = options.longs === String ? $util.Long.prototype.toString.call(message.Timestamp) : options.longs === Number ? new $util.LongBits(message.Timestamp.low >>> 0, message.Timestamp.high >>> 0).toNumber(true) : message.Timestamp;
            return object;
        };

        /**
         * Converts this AssetCreation to JSON.
         * @function toJSON
         * @memberof actions.AssetCreation
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        AssetCreation.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return AssetCreation;
    })();

    actions.AssetModification = (function() {

        /**
         * Properties of an AssetModification.
         * @memberof actions
         * @interface IAssetModification
         * @property {string|null} [AssetType] AssetModification AssetType
         * @property {Uint8Array|null} [AssetCode] AssetModification AssetCode
         * @property {number|null} [AssetRevision] AssetModification AssetRevision
         * @property {Array.<actions.IAmendmentField>|null} [Amendments] AssetModification Amendments
         * @property {Uint8Array|null} [RefTxID] AssetModification RefTxID
         */

        /**
         * Constructs a new AssetModification.
         * @memberof actions
         * @classdesc Represents an AssetModification.
         * @implements IAssetModification
         * @constructor
         * @param {actions.IAssetModification=} [properties] Properties to set
         */
        function AssetModification(properties) {
            this.Amendments = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * AssetModification AssetType.
         * @member {string} AssetType
         * @memberof actions.AssetModification
         * @instance
         */
        AssetModification.prototype.AssetType = "";

        /**
         * AssetModification AssetCode.
         * @member {Uint8Array} AssetCode
         * @memberof actions.AssetModification
         * @instance
         */
        AssetModification.prototype.AssetCode = $util.newBuffer([]);

        /**
         * AssetModification AssetRevision.
         * @member {number} AssetRevision
         * @memberof actions.AssetModification
         * @instance
         */
        AssetModification.prototype.AssetRevision = 0;

        /**
         * AssetModification Amendments.
         * @member {Array.<actions.IAmendmentField>} Amendments
         * @memberof actions.AssetModification
         * @instance
         */
        AssetModification.prototype.Amendments = $util.emptyArray;

        /**
         * AssetModification RefTxID.
         * @member {Uint8Array} RefTxID
         * @memberof actions.AssetModification
         * @instance
         */
        AssetModification.prototype.RefTxID = $util.newBuffer([]);

        /**
         * Creates a new AssetModification instance using the specified properties.
         * @function create
         * @memberof actions.AssetModification
         * @static
         * @param {actions.IAssetModification=} [properties] Properties to set
         * @returns {actions.AssetModification} AssetModification instance
         */
        AssetModification.create = function create(properties) {
            return new AssetModification(properties);
        };

        /**
         * Encodes the specified AssetModification message. Does not implicitly {@link actions.AssetModification.verify|verify} messages.
         * @function encode
         * @memberof actions.AssetModification
         * @static
         * @param {actions.IAssetModification} message AssetModification message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AssetModification.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.AssetType != null && Object.hasOwnProperty.call(message, "AssetType"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.AssetType);
            if (message.AssetCode != null && Object.hasOwnProperty.call(message, "AssetCode"))
                writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.AssetCode);
            if (message.AssetRevision != null && Object.hasOwnProperty.call(message, "AssetRevision"))
                writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.AssetRevision);
            if (message.Amendments != null && message.Amendments.length)
                for (var i = 0; i < message.Amendments.length; ++i)
                    $root.actions.AmendmentField.encode(message.Amendments[i], writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            if (message.RefTxID != null && Object.hasOwnProperty.call(message, "RefTxID"))
                writer.uint32(/* id 5, wireType 2 =*/42).bytes(message.RefTxID);
            return writer;
        };

        /**
         * Encodes the specified AssetModification message, length delimited. Does not implicitly {@link actions.AssetModification.verify|verify} messages.
         * @function encodeDelimited
         * @memberof actions.AssetModification
         * @static
         * @param {actions.IAssetModification} message AssetModification message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AssetModification.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an AssetModification message from the specified reader or buffer.
         * @function decode
         * @memberof actions.AssetModification
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {actions.AssetModification} AssetModification
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AssetModification.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.actions.AssetModification();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.AssetType = reader.string();
                    break;
                case 2:
                    message.AssetCode = reader.bytes();
                    break;
                case 3:
                    message.AssetRevision = reader.uint32();
                    break;
                case 4:
                    if (!(message.Amendments && message.Amendments.length))
                        message.Amendments = [];
                    message.Amendments.push($root.actions.AmendmentField.decode(reader, reader.uint32()));
                    break;
                case 5:
                    message.RefTxID = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an AssetModification message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof actions.AssetModification
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {actions.AssetModification} AssetModification
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AssetModification.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an AssetModification message.
         * @function verify
         * @memberof actions.AssetModification
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        AssetModification.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.AssetType != null && message.hasOwnProperty("AssetType"))
                if (!$util.isString(message.AssetType))
                    return "AssetType: string expected";
            if (message.AssetCode != null && message.hasOwnProperty("AssetCode"))
                if (!(message.AssetCode && typeof message.AssetCode.length === "number" || $util.isString(message.AssetCode)))
                    return "AssetCode: buffer expected";
            if (message.AssetRevision != null && message.hasOwnProperty("AssetRevision"))
                if (!$util.isInteger(message.AssetRevision))
                    return "AssetRevision: integer expected";
            if (message.Amendments != null && message.hasOwnProperty("Amendments")) {
                if (!Array.isArray(message.Amendments))
                    return "Amendments: array expected";
                for (var i = 0; i < message.Amendments.length; ++i) {
                    var error = $root.actions.AmendmentField.verify(message.Amendments[i]);
                    if (error)
                        return "Amendments." + error;
                }
            }
            if (message.RefTxID != null && message.hasOwnProperty("RefTxID"))
                if (!(message.RefTxID && typeof message.RefTxID.length === "number" || $util.isString(message.RefTxID)))
                    return "RefTxID: buffer expected";
            return null;
        };

        /**
         * Creates an AssetModification message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof actions.AssetModification
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {actions.AssetModification} AssetModification
         */
        AssetModification.fromObject = function fromObject(object) {
            if (object instanceof $root.actions.AssetModification)
                return object;
            var message = new $root.actions.AssetModification();
            if (object.AssetType != null)
                message.AssetType = String(object.AssetType);
            if (object.AssetCode != null)
                if (typeof object.AssetCode === "string")
                    $util.base64.decode(object.AssetCode, message.AssetCode = $util.newBuffer($util.base64.length(object.AssetCode)), 0);
                else if (object.AssetCode.length)
                    message.AssetCode = object.AssetCode;
            if (object.AssetRevision != null)
                message.AssetRevision = object.AssetRevision >>> 0;
            if (object.Amendments) {
                if (!Array.isArray(object.Amendments))
                    throw TypeError(".actions.AssetModification.Amendments: array expected");
                message.Amendments = [];
                for (var i = 0; i < object.Amendments.length; ++i) {
                    if (typeof object.Amendments[i] !== "object")
                        throw TypeError(".actions.AssetModification.Amendments: object expected");
                    message.Amendments[i] = $root.actions.AmendmentField.fromObject(object.Amendments[i]);
                }
            }
            if (object.RefTxID != null)
                if (typeof object.RefTxID === "string")
                    $util.base64.decode(object.RefTxID, message.RefTxID = $util.newBuffer($util.base64.length(object.RefTxID)), 0);
                else if (object.RefTxID.length)
                    message.RefTxID = object.RefTxID;
            return message;
        };

        /**
         * Creates a plain object from an AssetModification message. Also converts values to other types if specified.
         * @function toObject
         * @memberof actions.AssetModification
         * @static
         * @param {actions.AssetModification} message AssetModification
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        AssetModification.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.Amendments = [];
            if (options.defaults) {
                object.AssetType = "";
                if (options.bytes === String)
                    object.AssetCode = "";
                else {
                    object.AssetCode = [];
                    if (options.bytes !== Array)
                        object.AssetCode = $util.newBuffer(object.AssetCode);
                }
                object.AssetRevision = 0;
                if (options.bytes === String)
                    object.RefTxID = "";
                else {
                    object.RefTxID = [];
                    if (options.bytes !== Array)
                        object.RefTxID = $util.newBuffer(object.RefTxID);
                }
            }
            if (message.AssetType != null && message.hasOwnProperty("AssetType"))
                object.AssetType = message.AssetType;
            if (message.AssetCode != null && message.hasOwnProperty("AssetCode"))
                object.AssetCode = options.bytes === String ? $util.base64.encode(message.AssetCode, 0, message.AssetCode.length) : options.bytes === Array ? Array.prototype.slice.call(message.AssetCode) : message.AssetCode;
            if (message.AssetRevision != null && message.hasOwnProperty("AssetRevision"))
                object.AssetRevision = message.AssetRevision;
            if (message.Amendments && message.Amendments.length) {
                object.Amendments = [];
                for (var j = 0; j < message.Amendments.length; ++j)
                    object.Amendments[j] = $root.actions.AmendmentField.toObject(message.Amendments[j], options);
            }
            if (message.RefTxID != null && message.hasOwnProperty("RefTxID"))
                object.RefTxID = options.bytes === String ? $util.base64.encode(message.RefTxID, 0, message.RefTxID.length) : options.bytes === Array ? Array.prototype.slice.call(message.RefTxID) : message.RefTxID;
            return object;
        };

        /**
         * Converts this AssetModification to JSON.
         * @function toJSON
         * @memberof actions.AssetModification
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        AssetModification.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return AssetModification;
    })();

    actions.Transfer = (function() {

        /**
         * Properties of a Transfer.
         * @memberof actions
         * @interface ITransfer
         * @property {Array.<actions.IAssetTransferField>|null} [Assets] Transfer Assets
         * @property {number|Long|null} [OfferExpiry] Transfer OfferExpiry
         * @property {number|Long|null} [ExchangeFee] Transfer ExchangeFee
         * @property {Uint8Array|null} [ExchangeFeeAddress] Transfer ExchangeFeeAddress
         */

        /**
         * Constructs a new Transfer.
         * @memberof actions
         * @classdesc Represents a Transfer.
         * @implements ITransfer
         * @constructor
         * @param {actions.ITransfer=} [properties] Properties to set
         */
        function Transfer(properties) {
            this.Assets = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Transfer Assets.
         * @member {Array.<actions.IAssetTransferField>} Assets
         * @memberof actions.Transfer
         * @instance
         */
        Transfer.prototype.Assets = $util.emptyArray;

        /**
         * Transfer OfferExpiry.
         * @member {number|Long} OfferExpiry
         * @memberof actions.Transfer
         * @instance
         */
        Transfer.prototype.OfferExpiry = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * Transfer ExchangeFee.
         * @member {number|Long} ExchangeFee
         * @memberof actions.Transfer
         * @instance
         */
        Transfer.prototype.ExchangeFee = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * Transfer ExchangeFeeAddress.
         * @member {Uint8Array} ExchangeFeeAddress
         * @memberof actions.Transfer
         * @instance
         */
        Transfer.prototype.ExchangeFeeAddress = $util.newBuffer([]);

        /**
         * Creates a new Transfer instance using the specified properties.
         * @function create
         * @memberof actions.Transfer
         * @static
         * @param {actions.ITransfer=} [properties] Properties to set
         * @returns {actions.Transfer} Transfer instance
         */
        Transfer.create = function create(properties) {
            return new Transfer(properties);
        };

        /**
         * Encodes the specified Transfer message. Does not implicitly {@link actions.Transfer.verify|verify} messages.
         * @function encode
         * @memberof actions.Transfer
         * @static
         * @param {actions.ITransfer} message Transfer message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Transfer.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Assets != null && message.Assets.length)
                for (var i = 0; i < message.Assets.length; ++i)
                    $root.actions.AssetTransferField.encode(message.Assets[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.OfferExpiry != null && Object.hasOwnProperty.call(message, "OfferExpiry"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint64(message.OfferExpiry);
            if (message.ExchangeFee != null && Object.hasOwnProperty.call(message, "ExchangeFee"))
                writer.uint32(/* id 3, wireType 0 =*/24).uint64(message.ExchangeFee);
            if (message.ExchangeFeeAddress != null && Object.hasOwnProperty.call(message, "ExchangeFeeAddress"))
                writer.uint32(/* id 4, wireType 2 =*/34).bytes(message.ExchangeFeeAddress);
            return writer;
        };

        /**
         * Encodes the specified Transfer message, length delimited. Does not implicitly {@link actions.Transfer.verify|verify} messages.
         * @function encodeDelimited
         * @memberof actions.Transfer
         * @static
         * @param {actions.ITransfer} message Transfer message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Transfer.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Transfer message from the specified reader or buffer.
         * @function decode
         * @memberof actions.Transfer
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {actions.Transfer} Transfer
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Transfer.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.actions.Transfer();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.Assets && message.Assets.length))
                        message.Assets = [];
                    message.Assets.push($root.actions.AssetTransferField.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.OfferExpiry = reader.uint64();
                    break;
                case 3:
                    message.ExchangeFee = reader.uint64();
                    break;
                case 4:
                    message.ExchangeFeeAddress = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Transfer message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof actions.Transfer
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {actions.Transfer} Transfer
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Transfer.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Transfer message.
         * @function verify
         * @memberof actions.Transfer
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Transfer.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.Assets != null && message.hasOwnProperty("Assets")) {
                if (!Array.isArray(message.Assets))
                    return "Assets: array expected";
                for (var i = 0; i < message.Assets.length; ++i) {
                    var error = $root.actions.AssetTransferField.verify(message.Assets[i]);
                    if (error)
                        return "Assets." + error;
                }
            }
            if (message.OfferExpiry != null && message.hasOwnProperty("OfferExpiry"))
                if (!$util.isInteger(message.OfferExpiry) && !(message.OfferExpiry && $util.isInteger(message.OfferExpiry.low) && $util.isInteger(message.OfferExpiry.high)))
                    return "OfferExpiry: integer|Long expected";
            if (message.ExchangeFee != null && message.hasOwnProperty("ExchangeFee"))
                if (!$util.isInteger(message.ExchangeFee) && !(message.ExchangeFee && $util.isInteger(message.ExchangeFee.low) && $util.isInteger(message.ExchangeFee.high)))
                    return "ExchangeFee: integer|Long expected";
            if (message.ExchangeFeeAddress != null && message.hasOwnProperty("ExchangeFeeAddress"))
                if (!(message.ExchangeFeeAddress && typeof message.ExchangeFeeAddress.length === "number" || $util.isString(message.ExchangeFeeAddress)))
                    return "ExchangeFeeAddress: buffer expected";
            return null;
        };

        /**
         * Creates a Transfer message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof actions.Transfer
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {actions.Transfer} Transfer
         */
        Transfer.fromObject = function fromObject(object) {
            if (object instanceof $root.actions.Transfer)
                return object;
            var message = new $root.actions.Transfer();
            if (object.Assets) {
                if (!Array.isArray(object.Assets))
                    throw TypeError(".actions.Transfer.Assets: array expected");
                message.Assets = [];
                for (var i = 0; i < object.Assets.length; ++i) {
                    if (typeof object.Assets[i] !== "object")
                        throw TypeError(".actions.Transfer.Assets: object expected");
                    message.Assets[i] = $root.actions.AssetTransferField.fromObject(object.Assets[i]);
                }
            }
            if (object.OfferExpiry != null)
                if ($util.Long)
                    (message.OfferExpiry = $util.Long.fromValue(object.OfferExpiry)).unsigned = true;
                else if (typeof object.OfferExpiry === "string")
                    message.OfferExpiry = parseInt(object.OfferExpiry, 10);
                else if (typeof object.OfferExpiry === "number")
                    message.OfferExpiry = object.OfferExpiry;
                else if (typeof object.OfferExpiry === "object")
                    message.OfferExpiry = new $util.LongBits(object.OfferExpiry.low >>> 0, object.OfferExpiry.high >>> 0).toNumber(true);
            if (object.ExchangeFee != null)
                if ($util.Long)
                    (message.ExchangeFee = $util.Long.fromValue(object.ExchangeFee)).unsigned = true;
                else if (typeof object.ExchangeFee === "string")
                    message.ExchangeFee = parseInt(object.ExchangeFee, 10);
                else if (typeof object.ExchangeFee === "number")
                    message.ExchangeFee = object.ExchangeFee;
                else if (typeof object.ExchangeFee === "object")
                    message.ExchangeFee = new $util.LongBits(object.ExchangeFee.low >>> 0, object.ExchangeFee.high >>> 0).toNumber(true);
            if (object.ExchangeFeeAddress != null)
                if (typeof object.ExchangeFeeAddress === "string")
                    $util.base64.decode(object.ExchangeFeeAddress, message.ExchangeFeeAddress = $util.newBuffer($util.base64.length(object.ExchangeFeeAddress)), 0);
                else if (object.ExchangeFeeAddress.length)
                    message.ExchangeFeeAddress = object.ExchangeFeeAddress;
            return message;
        };

        /**
         * Creates a plain object from a Transfer message. Also converts values to other types if specified.
         * @function toObject
         * @memberof actions.Transfer
         * @static
         * @param {actions.Transfer} message Transfer
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Transfer.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.Assets = [];
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.OfferExpiry = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.OfferExpiry = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.ExchangeFee = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.ExchangeFee = options.longs === String ? "0" : 0;
                if (options.bytes === String)
                    object.ExchangeFeeAddress = "";
                else {
                    object.ExchangeFeeAddress = [];
                    if (options.bytes !== Array)
                        object.ExchangeFeeAddress = $util.newBuffer(object.ExchangeFeeAddress);
                }
            }
            if (message.Assets && message.Assets.length) {
                object.Assets = [];
                for (var j = 0; j < message.Assets.length; ++j)
                    object.Assets[j] = $root.actions.AssetTransferField.toObject(message.Assets[j], options);
            }
            if (message.OfferExpiry != null && message.hasOwnProperty("OfferExpiry"))
                if (typeof message.OfferExpiry === "number")
                    object.OfferExpiry = options.longs === String ? String(message.OfferExpiry) : message.OfferExpiry;
                else
                    object.OfferExpiry = options.longs === String ? $util.Long.prototype.toString.call(message.OfferExpiry) : options.longs === Number ? new $util.LongBits(message.OfferExpiry.low >>> 0, message.OfferExpiry.high >>> 0).toNumber(true) : message.OfferExpiry;
            if (message.ExchangeFee != null && message.hasOwnProperty("ExchangeFee"))
                if (typeof message.ExchangeFee === "number")
                    object.ExchangeFee = options.longs === String ? String(message.ExchangeFee) : message.ExchangeFee;
                else
                    object.ExchangeFee = options.longs === String ? $util.Long.prototype.toString.call(message.ExchangeFee) : options.longs === Number ? new $util.LongBits(message.ExchangeFee.low >>> 0, message.ExchangeFee.high >>> 0).toNumber(true) : message.ExchangeFee;
            if (message.ExchangeFeeAddress != null && message.hasOwnProperty("ExchangeFeeAddress"))
                object.ExchangeFeeAddress = options.bytes === String ? $util.base64.encode(message.ExchangeFeeAddress, 0, message.ExchangeFeeAddress.length) : options.bytes === Array ? Array.prototype.slice.call(message.ExchangeFeeAddress) : message.ExchangeFeeAddress;
            return object;
        };

        /**
         * Converts this Transfer to JSON.
         * @function toJSON
         * @memberof actions.Transfer
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Transfer.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Transfer;
    })();

    actions.Settlement = (function() {

        /**
         * Properties of a Settlement.
         * @memberof actions
         * @interface ISettlement
         * @property {Array.<actions.IAssetSettlementField>|null} [Assets] Settlement Assets
         * @property {number|Long|null} [Timestamp] Settlement Timestamp
         */

        /**
         * Constructs a new Settlement.
         * @memberof actions
         * @classdesc Represents a Settlement.
         * @implements ISettlement
         * @constructor
         * @param {actions.ISettlement=} [properties] Properties to set
         */
        function Settlement(properties) {
            this.Assets = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Settlement Assets.
         * @member {Array.<actions.IAssetSettlementField>} Assets
         * @memberof actions.Settlement
         * @instance
         */
        Settlement.prototype.Assets = $util.emptyArray;

        /**
         * Settlement Timestamp.
         * @member {number|Long} Timestamp
         * @memberof actions.Settlement
         * @instance
         */
        Settlement.prototype.Timestamp = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * Creates a new Settlement instance using the specified properties.
         * @function create
         * @memberof actions.Settlement
         * @static
         * @param {actions.ISettlement=} [properties] Properties to set
         * @returns {actions.Settlement} Settlement instance
         */
        Settlement.create = function create(properties) {
            return new Settlement(properties);
        };

        /**
         * Encodes the specified Settlement message. Does not implicitly {@link actions.Settlement.verify|verify} messages.
         * @function encode
         * @memberof actions.Settlement
         * @static
         * @param {actions.ISettlement} message Settlement message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Settlement.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Assets != null && message.Assets.length)
                for (var i = 0; i < message.Assets.length; ++i)
                    $root.actions.AssetSettlementField.encode(message.Assets[i], writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.Timestamp != null && Object.hasOwnProperty.call(message, "Timestamp"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint64(message.Timestamp);
            return writer;
        };

        /**
         * Encodes the specified Settlement message, length delimited. Does not implicitly {@link actions.Settlement.verify|verify} messages.
         * @function encodeDelimited
         * @memberof actions.Settlement
         * @static
         * @param {actions.ISettlement} message Settlement message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Settlement.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Settlement message from the specified reader or buffer.
         * @function decode
         * @memberof actions.Settlement
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {actions.Settlement} Settlement
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Settlement.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.actions.Settlement();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.Assets && message.Assets.length))
                        message.Assets = [];
                    message.Assets.push($root.actions.AssetSettlementField.decode(reader, reader.uint32()));
                    break;
                case 2:
                    message.Timestamp = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Settlement message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof actions.Settlement
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {actions.Settlement} Settlement
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Settlement.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Settlement message.
         * @function verify
         * @memberof actions.Settlement
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Settlement.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.Assets != null && message.hasOwnProperty("Assets")) {
                if (!Array.isArray(message.Assets))
                    return "Assets: array expected";
                for (var i = 0; i < message.Assets.length; ++i) {
                    var error = $root.actions.AssetSettlementField.verify(message.Assets[i]);
                    if (error)
                        return "Assets." + error;
                }
            }
            if (message.Timestamp != null && message.hasOwnProperty("Timestamp"))
                if (!$util.isInteger(message.Timestamp) && !(message.Timestamp && $util.isInteger(message.Timestamp.low) && $util.isInteger(message.Timestamp.high)))
                    return "Timestamp: integer|Long expected";
            return null;
        };

        /**
         * Creates a Settlement message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof actions.Settlement
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {actions.Settlement} Settlement
         */
        Settlement.fromObject = function fromObject(object) {
            if (object instanceof $root.actions.Settlement)
                return object;
            var message = new $root.actions.Settlement();
            if (object.Assets) {
                if (!Array.isArray(object.Assets))
                    throw TypeError(".actions.Settlement.Assets: array expected");
                message.Assets = [];
                for (var i = 0; i < object.Assets.length; ++i) {
                    if (typeof object.Assets[i] !== "object")
                        throw TypeError(".actions.Settlement.Assets: object expected");
                    message.Assets[i] = $root.actions.AssetSettlementField.fromObject(object.Assets[i]);
                }
            }
            if (object.Timestamp != null)
                if ($util.Long)
                    (message.Timestamp = $util.Long.fromValue(object.Timestamp)).unsigned = true;
                else if (typeof object.Timestamp === "string")
                    message.Timestamp = parseInt(object.Timestamp, 10);
                else if (typeof object.Timestamp === "number")
                    message.Timestamp = object.Timestamp;
                else if (typeof object.Timestamp === "object")
                    message.Timestamp = new $util.LongBits(object.Timestamp.low >>> 0, object.Timestamp.high >>> 0).toNumber(true);
            return message;
        };

        /**
         * Creates a plain object from a Settlement message. Also converts values to other types if specified.
         * @function toObject
         * @memberof actions.Settlement
         * @static
         * @param {actions.Settlement} message Settlement
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Settlement.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.Assets = [];
            if (options.defaults)
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.Timestamp = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.Timestamp = options.longs === String ? "0" : 0;
            if (message.Assets && message.Assets.length) {
                object.Assets = [];
                for (var j = 0; j < message.Assets.length; ++j)
                    object.Assets[j] = $root.actions.AssetSettlementField.toObject(message.Assets[j], options);
            }
            if (message.Timestamp != null && message.hasOwnProperty("Timestamp"))
                if (typeof message.Timestamp === "number")
                    object.Timestamp = options.longs === String ? String(message.Timestamp) : message.Timestamp;
                else
                    object.Timestamp = options.longs === String ? $util.Long.prototype.toString.call(message.Timestamp) : options.longs === Number ? new $util.LongBits(message.Timestamp.low >>> 0, message.Timestamp.high >>> 0).toNumber(true) : message.Timestamp;
            return object;
        };

        /**
         * Converts this Settlement to JSON.
         * @function toJSON
         * @memberof actions.Settlement
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Settlement.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Settlement;
    })();

    actions.Proposal = (function() {

        /**
         * Properties of a Proposal.
         * @memberof actions
         * @interface IProposal
         * @property {number|null} [Type] Proposal Type
         * @property {string|null} [AssetType] Proposal AssetType
         * @property {Uint8Array|null} [AssetCode] Proposal AssetCode
         * @property {number|null} [VoteSystem] Proposal VoteSystem
         * @property {Array.<actions.IAmendmentField>|null} [ProposedAmendments] Proposal ProposedAmendments
         * @property {string|null} [VoteOptions] Proposal VoteOptions
         * @property {number|null} [VoteMax] Proposal VoteMax
         * @property {string|null} [ProposalDescription] Proposal ProposalDescription
         * @property {Uint8Array|null} [ProposalDocumentHash] Proposal ProposalDocumentHash
         * @property {number|Long|null} [VoteCutOffTimestamp] Proposal VoteCutOffTimestamp
         */

        /**
         * Constructs a new Proposal.
         * @memberof actions
         * @classdesc Represents a Proposal.
         * @implements IProposal
         * @constructor
         * @param {actions.IProposal=} [properties] Properties to set
         */
        function Proposal(properties) {
            this.ProposedAmendments = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Proposal Type.
         * @member {number} Type
         * @memberof actions.Proposal
         * @instance
         */
        Proposal.prototype.Type = 0;

        /**
         * Proposal AssetType.
         * @member {string} AssetType
         * @memberof actions.Proposal
         * @instance
         */
        Proposal.prototype.AssetType = "";

        /**
         * Proposal AssetCode.
         * @member {Uint8Array} AssetCode
         * @memberof actions.Proposal
         * @instance
         */
        Proposal.prototype.AssetCode = $util.newBuffer([]);

        /**
         * Proposal VoteSystem.
         * @member {number} VoteSystem
         * @memberof actions.Proposal
         * @instance
         */
        Proposal.prototype.VoteSystem = 0;

        /**
         * Proposal ProposedAmendments.
         * @member {Array.<actions.IAmendmentField>} ProposedAmendments
         * @memberof actions.Proposal
         * @instance
         */
        Proposal.prototype.ProposedAmendments = $util.emptyArray;

        /**
         * Proposal VoteOptions.
         * @member {string} VoteOptions
         * @memberof actions.Proposal
         * @instance
         */
        Proposal.prototype.VoteOptions = "";

        /**
         * Proposal VoteMax.
         * @member {number} VoteMax
         * @memberof actions.Proposal
         * @instance
         */
        Proposal.prototype.VoteMax = 0;

        /**
         * Proposal ProposalDescription.
         * @member {string} ProposalDescription
         * @memberof actions.Proposal
         * @instance
         */
        Proposal.prototype.ProposalDescription = "";

        /**
         * Proposal ProposalDocumentHash.
         * @member {Uint8Array} ProposalDocumentHash
         * @memberof actions.Proposal
         * @instance
         */
        Proposal.prototype.ProposalDocumentHash = $util.newBuffer([]);

        /**
         * Proposal VoteCutOffTimestamp.
         * @member {number|Long} VoteCutOffTimestamp
         * @memberof actions.Proposal
         * @instance
         */
        Proposal.prototype.VoteCutOffTimestamp = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * Creates a new Proposal instance using the specified properties.
         * @function create
         * @memberof actions.Proposal
         * @static
         * @param {actions.IProposal=} [properties] Properties to set
         * @returns {actions.Proposal} Proposal instance
         */
        Proposal.create = function create(properties) {
            return new Proposal(properties);
        };

        /**
         * Encodes the specified Proposal message. Does not implicitly {@link actions.Proposal.verify|verify} messages.
         * @function encode
         * @memberof actions.Proposal
         * @static
         * @param {actions.IProposal} message Proposal message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Proposal.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Type != null && Object.hasOwnProperty.call(message, "Type"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.Type);
            if (message.AssetType != null && Object.hasOwnProperty.call(message, "AssetType"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.AssetType);
            if (message.AssetCode != null && Object.hasOwnProperty.call(message, "AssetCode"))
                writer.uint32(/* id 3, wireType 2 =*/26).bytes(message.AssetCode);
            if (message.VoteSystem != null && Object.hasOwnProperty.call(message, "VoteSystem"))
                writer.uint32(/* id 4, wireType 0 =*/32).uint32(message.VoteSystem);
            if (message.ProposedAmendments != null && message.ProposedAmendments.length)
                for (var i = 0; i < message.ProposedAmendments.length; ++i)
                    $root.actions.AmendmentField.encode(message.ProposedAmendments[i], writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
            if (message.VoteOptions != null && Object.hasOwnProperty.call(message, "VoteOptions"))
                writer.uint32(/* id 6, wireType 2 =*/50).string(message.VoteOptions);
            if (message.VoteMax != null && Object.hasOwnProperty.call(message, "VoteMax"))
                writer.uint32(/* id 7, wireType 0 =*/56).uint32(message.VoteMax);
            if (message.ProposalDescription != null && Object.hasOwnProperty.call(message, "ProposalDescription"))
                writer.uint32(/* id 8, wireType 2 =*/66).string(message.ProposalDescription);
            if (message.ProposalDocumentHash != null && Object.hasOwnProperty.call(message, "ProposalDocumentHash"))
                writer.uint32(/* id 9, wireType 2 =*/74).bytes(message.ProposalDocumentHash);
            if (message.VoteCutOffTimestamp != null && Object.hasOwnProperty.call(message, "VoteCutOffTimestamp"))
                writer.uint32(/* id 10, wireType 0 =*/80).uint64(message.VoteCutOffTimestamp);
            return writer;
        };

        /**
         * Encodes the specified Proposal message, length delimited. Does not implicitly {@link actions.Proposal.verify|verify} messages.
         * @function encodeDelimited
         * @memberof actions.Proposal
         * @static
         * @param {actions.IProposal} message Proposal message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Proposal.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Proposal message from the specified reader or buffer.
         * @function decode
         * @memberof actions.Proposal
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {actions.Proposal} Proposal
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Proposal.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.actions.Proposal();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.Type = reader.uint32();
                    break;
                case 2:
                    message.AssetType = reader.string();
                    break;
                case 3:
                    message.AssetCode = reader.bytes();
                    break;
                case 4:
                    message.VoteSystem = reader.uint32();
                    break;
                case 5:
                    if (!(message.ProposedAmendments && message.ProposedAmendments.length))
                        message.ProposedAmendments = [];
                    message.ProposedAmendments.push($root.actions.AmendmentField.decode(reader, reader.uint32()));
                    break;
                case 6:
                    message.VoteOptions = reader.string();
                    break;
                case 7:
                    message.VoteMax = reader.uint32();
                    break;
                case 8:
                    message.ProposalDescription = reader.string();
                    break;
                case 9:
                    message.ProposalDocumentHash = reader.bytes();
                    break;
                case 10:
                    message.VoteCutOffTimestamp = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Proposal message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof actions.Proposal
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {actions.Proposal} Proposal
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Proposal.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Proposal message.
         * @function verify
         * @memberof actions.Proposal
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Proposal.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.Type != null && message.hasOwnProperty("Type"))
                if (!$util.isInteger(message.Type))
                    return "Type: integer expected";
            if (message.AssetType != null && message.hasOwnProperty("AssetType"))
                if (!$util.isString(message.AssetType))
                    return "AssetType: string expected";
            if (message.AssetCode != null && message.hasOwnProperty("AssetCode"))
                if (!(message.AssetCode && typeof message.AssetCode.length === "number" || $util.isString(message.AssetCode)))
                    return "AssetCode: buffer expected";
            if (message.VoteSystem != null && message.hasOwnProperty("VoteSystem"))
                if (!$util.isInteger(message.VoteSystem))
                    return "VoteSystem: integer expected";
            if (message.ProposedAmendments != null && message.hasOwnProperty("ProposedAmendments")) {
                if (!Array.isArray(message.ProposedAmendments))
                    return "ProposedAmendments: array expected";
                for (var i = 0; i < message.ProposedAmendments.length; ++i) {
                    var error = $root.actions.AmendmentField.verify(message.ProposedAmendments[i]);
                    if (error)
                        return "ProposedAmendments." + error;
                }
            }
            if (message.VoteOptions != null && message.hasOwnProperty("VoteOptions"))
                if (!$util.isString(message.VoteOptions))
                    return "VoteOptions: string expected";
            if (message.VoteMax != null && message.hasOwnProperty("VoteMax"))
                if (!$util.isInteger(message.VoteMax))
                    return "VoteMax: integer expected";
            if (message.ProposalDescription != null && message.hasOwnProperty("ProposalDescription"))
                if (!$util.isString(message.ProposalDescription))
                    return "ProposalDescription: string expected";
            if (message.ProposalDocumentHash != null && message.hasOwnProperty("ProposalDocumentHash"))
                if (!(message.ProposalDocumentHash && typeof message.ProposalDocumentHash.length === "number" || $util.isString(message.ProposalDocumentHash)))
                    return "ProposalDocumentHash: buffer expected";
            if (message.VoteCutOffTimestamp != null && message.hasOwnProperty("VoteCutOffTimestamp"))
                if (!$util.isInteger(message.VoteCutOffTimestamp) && !(message.VoteCutOffTimestamp && $util.isInteger(message.VoteCutOffTimestamp.low) && $util.isInteger(message.VoteCutOffTimestamp.high)))
                    return "VoteCutOffTimestamp: integer|Long expected";
            return null;
        };

        /**
         * Creates a Proposal message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof actions.Proposal
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {actions.Proposal} Proposal
         */
        Proposal.fromObject = function fromObject(object) {
            if (object instanceof $root.actions.Proposal)
                return object;
            var message = new $root.actions.Proposal();
            if (object.Type != null)
                message.Type = object.Type >>> 0;
            if (object.AssetType != null)
                message.AssetType = String(object.AssetType);
            if (object.AssetCode != null)
                if (typeof object.AssetCode === "string")
                    $util.base64.decode(object.AssetCode, message.AssetCode = $util.newBuffer($util.base64.length(object.AssetCode)), 0);
                else if (object.AssetCode.length)
                    message.AssetCode = object.AssetCode;
            if (object.VoteSystem != null)
                message.VoteSystem = object.VoteSystem >>> 0;
            if (object.ProposedAmendments) {
                if (!Array.isArray(object.ProposedAmendments))
                    throw TypeError(".actions.Proposal.ProposedAmendments: array expected");
                message.ProposedAmendments = [];
                for (var i = 0; i < object.ProposedAmendments.length; ++i) {
                    if (typeof object.ProposedAmendments[i] !== "object")
                        throw TypeError(".actions.Proposal.ProposedAmendments: object expected");
                    message.ProposedAmendments[i] = $root.actions.AmendmentField.fromObject(object.ProposedAmendments[i]);
                }
            }
            if (object.VoteOptions != null)
                message.VoteOptions = String(object.VoteOptions);
            if (object.VoteMax != null)
                message.VoteMax = object.VoteMax >>> 0;
            if (object.ProposalDescription != null)
                message.ProposalDescription = String(object.ProposalDescription);
            if (object.ProposalDocumentHash != null)
                if (typeof object.ProposalDocumentHash === "string")
                    $util.base64.decode(object.ProposalDocumentHash, message.ProposalDocumentHash = $util.newBuffer($util.base64.length(object.ProposalDocumentHash)), 0);
                else if (object.ProposalDocumentHash.length)
                    message.ProposalDocumentHash = object.ProposalDocumentHash;
            if (object.VoteCutOffTimestamp != null)
                if ($util.Long)
                    (message.VoteCutOffTimestamp = $util.Long.fromValue(object.VoteCutOffTimestamp)).unsigned = true;
                else if (typeof object.VoteCutOffTimestamp === "string")
                    message.VoteCutOffTimestamp = parseInt(object.VoteCutOffTimestamp, 10);
                else if (typeof object.VoteCutOffTimestamp === "number")
                    message.VoteCutOffTimestamp = object.VoteCutOffTimestamp;
                else if (typeof object.VoteCutOffTimestamp === "object")
                    message.VoteCutOffTimestamp = new $util.LongBits(object.VoteCutOffTimestamp.low >>> 0, object.VoteCutOffTimestamp.high >>> 0).toNumber(true);
            return message;
        };

        /**
         * Creates a plain object from a Proposal message. Also converts values to other types if specified.
         * @function toObject
         * @memberof actions.Proposal
         * @static
         * @param {actions.Proposal} message Proposal
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Proposal.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.ProposedAmendments = [];
            if (options.defaults) {
                object.Type = 0;
                object.AssetType = "";
                if (options.bytes === String)
                    object.AssetCode = "";
                else {
                    object.AssetCode = [];
                    if (options.bytes !== Array)
                        object.AssetCode = $util.newBuffer(object.AssetCode);
                }
                object.VoteSystem = 0;
                object.VoteOptions = "";
                object.VoteMax = 0;
                object.ProposalDescription = "";
                if (options.bytes === String)
                    object.ProposalDocumentHash = "";
                else {
                    object.ProposalDocumentHash = [];
                    if (options.bytes !== Array)
                        object.ProposalDocumentHash = $util.newBuffer(object.ProposalDocumentHash);
                }
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.VoteCutOffTimestamp = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.VoteCutOffTimestamp = options.longs === String ? "0" : 0;
            }
            if (message.Type != null && message.hasOwnProperty("Type"))
                object.Type = message.Type;
            if (message.AssetType != null && message.hasOwnProperty("AssetType"))
                object.AssetType = message.AssetType;
            if (message.AssetCode != null && message.hasOwnProperty("AssetCode"))
                object.AssetCode = options.bytes === String ? $util.base64.encode(message.AssetCode, 0, message.AssetCode.length) : options.bytes === Array ? Array.prototype.slice.call(message.AssetCode) : message.AssetCode;
            if (message.VoteSystem != null && message.hasOwnProperty("VoteSystem"))
                object.VoteSystem = message.VoteSystem;
            if (message.ProposedAmendments && message.ProposedAmendments.length) {
                object.ProposedAmendments = [];
                for (var j = 0; j < message.ProposedAmendments.length; ++j)
                    object.ProposedAmendments[j] = $root.actions.AmendmentField.toObject(message.ProposedAmendments[j], options);
            }
            if (message.VoteOptions != null && message.hasOwnProperty("VoteOptions"))
                object.VoteOptions = message.VoteOptions;
            if (message.VoteMax != null && message.hasOwnProperty("VoteMax"))
                object.VoteMax = message.VoteMax;
            if (message.ProposalDescription != null && message.hasOwnProperty("ProposalDescription"))
                object.ProposalDescription = message.ProposalDescription;
            if (message.ProposalDocumentHash != null && message.hasOwnProperty("ProposalDocumentHash"))
                object.ProposalDocumentHash = options.bytes === String ? $util.base64.encode(message.ProposalDocumentHash, 0, message.ProposalDocumentHash.length) : options.bytes === Array ? Array.prototype.slice.call(message.ProposalDocumentHash) : message.ProposalDocumentHash;
            if (message.VoteCutOffTimestamp != null && message.hasOwnProperty("VoteCutOffTimestamp"))
                if (typeof message.VoteCutOffTimestamp === "number")
                    object.VoteCutOffTimestamp = options.longs === String ? String(message.VoteCutOffTimestamp) : message.VoteCutOffTimestamp;
                else
                    object.VoteCutOffTimestamp = options.longs === String ? $util.Long.prototype.toString.call(message.VoteCutOffTimestamp) : options.longs === Number ? new $util.LongBits(message.VoteCutOffTimestamp.low >>> 0, message.VoteCutOffTimestamp.high >>> 0).toNumber(true) : message.VoteCutOffTimestamp;
            return object;
        };

        /**
         * Converts this Proposal to JSON.
         * @function toJSON
         * @memberof actions.Proposal
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Proposal.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Proposal;
    })();

    actions.Vote = (function() {

        /**
         * Properties of a Vote.
         * @memberof actions
         * @interface IVote
         * @property {number|Long|null} [Timestamp] Vote Timestamp
         */

        /**
         * Constructs a new Vote.
         * @memberof actions
         * @classdesc Represents a Vote.
         * @implements IVote
         * @constructor
         * @param {actions.IVote=} [properties] Properties to set
         */
        function Vote(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Vote Timestamp.
         * @member {number|Long} Timestamp
         * @memberof actions.Vote
         * @instance
         */
        Vote.prototype.Timestamp = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * Creates a new Vote instance using the specified properties.
         * @function create
         * @memberof actions.Vote
         * @static
         * @param {actions.IVote=} [properties] Properties to set
         * @returns {actions.Vote} Vote instance
         */
        Vote.create = function create(properties) {
            return new Vote(properties);
        };

        /**
         * Encodes the specified Vote message. Does not implicitly {@link actions.Vote.verify|verify} messages.
         * @function encode
         * @memberof actions.Vote
         * @static
         * @param {actions.IVote} message Vote message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Vote.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Timestamp != null && Object.hasOwnProperty.call(message, "Timestamp"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint64(message.Timestamp);
            return writer;
        };

        /**
         * Encodes the specified Vote message, length delimited. Does not implicitly {@link actions.Vote.verify|verify} messages.
         * @function encodeDelimited
         * @memberof actions.Vote
         * @static
         * @param {actions.IVote} message Vote message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Vote.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Vote message from the specified reader or buffer.
         * @function decode
         * @memberof actions.Vote
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {actions.Vote} Vote
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Vote.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.actions.Vote();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.Timestamp = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Vote message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof actions.Vote
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {actions.Vote} Vote
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Vote.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Vote message.
         * @function verify
         * @memberof actions.Vote
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Vote.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.Timestamp != null && message.hasOwnProperty("Timestamp"))
                if (!$util.isInteger(message.Timestamp) && !(message.Timestamp && $util.isInteger(message.Timestamp.low) && $util.isInteger(message.Timestamp.high)))
                    return "Timestamp: integer|Long expected";
            return null;
        };

        /**
         * Creates a Vote message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof actions.Vote
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {actions.Vote} Vote
         */
        Vote.fromObject = function fromObject(object) {
            if (object instanceof $root.actions.Vote)
                return object;
            var message = new $root.actions.Vote();
            if (object.Timestamp != null)
                if ($util.Long)
                    (message.Timestamp = $util.Long.fromValue(object.Timestamp)).unsigned = true;
                else if (typeof object.Timestamp === "string")
                    message.Timestamp = parseInt(object.Timestamp, 10);
                else if (typeof object.Timestamp === "number")
                    message.Timestamp = object.Timestamp;
                else if (typeof object.Timestamp === "object")
                    message.Timestamp = new $util.LongBits(object.Timestamp.low >>> 0, object.Timestamp.high >>> 0).toNumber(true);
            return message;
        };

        /**
         * Creates a plain object from a Vote message. Also converts values to other types if specified.
         * @function toObject
         * @memberof actions.Vote
         * @static
         * @param {actions.Vote} message Vote
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Vote.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.Timestamp = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.Timestamp = options.longs === String ? "0" : 0;
            if (message.Timestamp != null && message.hasOwnProperty("Timestamp"))
                if (typeof message.Timestamp === "number")
                    object.Timestamp = options.longs === String ? String(message.Timestamp) : message.Timestamp;
                else
                    object.Timestamp = options.longs === String ? $util.Long.prototype.toString.call(message.Timestamp) : options.longs === Number ? new $util.LongBits(message.Timestamp.low >>> 0, message.Timestamp.high >>> 0).toNumber(true) : message.Timestamp;
            return object;
        };

        /**
         * Converts this Vote to JSON.
         * @function toJSON
         * @memberof actions.Vote
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Vote.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Vote;
    })();

    actions.BallotCast = (function() {

        /**
         * Properties of a BallotCast.
         * @memberof actions
         * @interface IBallotCast
         * @property {Uint8Array|null} [VoteTxId] BallotCast VoteTxId
         * @property {string|null} [Vote] BallotCast Vote
         */

        /**
         * Constructs a new BallotCast.
         * @memberof actions
         * @classdesc Represents a BallotCast.
         * @implements IBallotCast
         * @constructor
         * @param {actions.IBallotCast=} [properties] Properties to set
         */
        function BallotCast(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * BallotCast VoteTxId.
         * @member {Uint8Array} VoteTxId
         * @memberof actions.BallotCast
         * @instance
         */
        BallotCast.prototype.VoteTxId = $util.newBuffer([]);

        /**
         * BallotCast Vote.
         * @member {string} Vote
         * @memberof actions.BallotCast
         * @instance
         */
        BallotCast.prototype.Vote = "";

        /**
         * Creates a new BallotCast instance using the specified properties.
         * @function create
         * @memberof actions.BallotCast
         * @static
         * @param {actions.IBallotCast=} [properties] Properties to set
         * @returns {actions.BallotCast} BallotCast instance
         */
        BallotCast.create = function create(properties) {
            return new BallotCast(properties);
        };

        /**
         * Encodes the specified BallotCast message. Does not implicitly {@link actions.BallotCast.verify|verify} messages.
         * @function encode
         * @memberof actions.BallotCast
         * @static
         * @param {actions.IBallotCast} message BallotCast message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BallotCast.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.VoteTxId != null && Object.hasOwnProperty.call(message, "VoteTxId"))
                writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.VoteTxId);
            if (message.Vote != null && Object.hasOwnProperty.call(message, "Vote"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.Vote);
            return writer;
        };

        /**
         * Encodes the specified BallotCast message, length delimited. Does not implicitly {@link actions.BallotCast.verify|verify} messages.
         * @function encodeDelimited
         * @memberof actions.BallotCast
         * @static
         * @param {actions.IBallotCast} message BallotCast message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BallotCast.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a BallotCast message from the specified reader or buffer.
         * @function decode
         * @memberof actions.BallotCast
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {actions.BallotCast} BallotCast
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BallotCast.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.actions.BallotCast();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.VoteTxId = reader.bytes();
                    break;
                case 2:
                    message.Vote = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a BallotCast message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof actions.BallotCast
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {actions.BallotCast} BallotCast
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BallotCast.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a BallotCast message.
         * @function verify
         * @memberof actions.BallotCast
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        BallotCast.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.VoteTxId != null && message.hasOwnProperty("VoteTxId"))
                if (!(message.VoteTxId && typeof message.VoteTxId.length === "number" || $util.isString(message.VoteTxId)))
                    return "VoteTxId: buffer expected";
            if (message.Vote != null && message.hasOwnProperty("Vote"))
                if (!$util.isString(message.Vote))
                    return "Vote: string expected";
            return null;
        };

        /**
         * Creates a BallotCast message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof actions.BallotCast
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {actions.BallotCast} BallotCast
         */
        BallotCast.fromObject = function fromObject(object) {
            if (object instanceof $root.actions.BallotCast)
                return object;
            var message = new $root.actions.BallotCast();
            if (object.VoteTxId != null)
                if (typeof object.VoteTxId === "string")
                    $util.base64.decode(object.VoteTxId, message.VoteTxId = $util.newBuffer($util.base64.length(object.VoteTxId)), 0);
                else if (object.VoteTxId.length)
                    message.VoteTxId = object.VoteTxId;
            if (object.Vote != null)
                message.Vote = String(object.Vote);
            return message;
        };

        /**
         * Creates a plain object from a BallotCast message. Also converts values to other types if specified.
         * @function toObject
         * @memberof actions.BallotCast
         * @static
         * @param {actions.BallotCast} message BallotCast
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        BallotCast.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if (options.bytes === String)
                    object.VoteTxId = "";
                else {
                    object.VoteTxId = [];
                    if (options.bytes !== Array)
                        object.VoteTxId = $util.newBuffer(object.VoteTxId);
                }
                object.Vote = "";
            }
            if (message.VoteTxId != null && message.hasOwnProperty("VoteTxId"))
                object.VoteTxId = options.bytes === String ? $util.base64.encode(message.VoteTxId, 0, message.VoteTxId.length) : options.bytes === Array ? Array.prototype.slice.call(message.VoteTxId) : message.VoteTxId;
            if (message.Vote != null && message.hasOwnProperty("Vote"))
                object.Vote = message.Vote;
            return object;
        };

        /**
         * Converts this BallotCast to JSON.
         * @function toJSON
         * @memberof actions.BallotCast
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        BallotCast.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return BallotCast;
    })();

    actions.BallotCounted = (function() {

        /**
         * Properties of a BallotCounted.
         * @memberof actions
         * @interface IBallotCounted
         * @property {Uint8Array|null} [VoteTxId] BallotCounted VoteTxId
         * @property {string|null} [Vote] BallotCounted Vote
         * @property {number|Long|null} [Quantity] BallotCounted Quantity
         * @property {number|Long|null} [Timestamp] BallotCounted Timestamp
         */

        /**
         * Constructs a new BallotCounted.
         * @memberof actions
         * @classdesc Represents a BallotCounted.
         * @implements IBallotCounted
         * @constructor
         * @param {actions.IBallotCounted=} [properties] Properties to set
         */
        function BallotCounted(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * BallotCounted VoteTxId.
         * @member {Uint8Array} VoteTxId
         * @memberof actions.BallotCounted
         * @instance
         */
        BallotCounted.prototype.VoteTxId = $util.newBuffer([]);

        /**
         * BallotCounted Vote.
         * @member {string} Vote
         * @memberof actions.BallotCounted
         * @instance
         */
        BallotCounted.prototype.Vote = "";

        /**
         * BallotCounted Quantity.
         * @member {number|Long} Quantity
         * @memberof actions.BallotCounted
         * @instance
         */
        BallotCounted.prototype.Quantity = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * BallotCounted Timestamp.
         * @member {number|Long} Timestamp
         * @memberof actions.BallotCounted
         * @instance
         */
        BallotCounted.prototype.Timestamp = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * Creates a new BallotCounted instance using the specified properties.
         * @function create
         * @memberof actions.BallotCounted
         * @static
         * @param {actions.IBallotCounted=} [properties] Properties to set
         * @returns {actions.BallotCounted} BallotCounted instance
         */
        BallotCounted.create = function create(properties) {
            return new BallotCounted(properties);
        };

        /**
         * Encodes the specified BallotCounted message. Does not implicitly {@link actions.BallotCounted.verify|verify} messages.
         * @function encode
         * @memberof actions.BallotCounted
         * @static
         * @param {actions.IBallotCounted} message BallotCounted message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BallotCounted.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.VoteTxId != null && Object.hasOwnProperty.call(message, "VoteTxId"))
                writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.VoteTxId);
            if (message.Vote != null && Object.hasOwnProperty.call(message, "Vote"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.Vote);
            if (message.Quantity != null && Object.hasOwnProperty.call(message, "Quantity"))
                writer.uint32(/* id 3, wireType 0 =*/24).uint64(message.Quantity);
            if (message.Timestamp != null && Object.hasOwnProperty.call(message, "Timestamp"))
                writer.uint32(/* id 4, wireType 0 =*/32).uint64(message.Timestamp);
            return writer;
        };

        /**
         * Encodes the specified BallotCounted message, length delimited. Does not implicitly {@link actions.BallotCounted.verify|verify} messages.
         * @function encodeDelimited
         * @memberof actions.BallotCounted
         * @static
         * @param {actions.IBallotCounted} message BallotCounted message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        BallotCounted.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a BallotCounted message from the specified reader or buffer.
         * @function decode
         * @memberof actions.BallotCounted
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {actions.BallotCounted} BallotCounted
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BallotCounted.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.actions.BallotCounted();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.VoteTxId = reader.bytes();
                    break;
                case 2:
                    message.Vote = reader.string();
                    break;
                case 3:
                    message.Quantity = reader.uint64();
                    break;
                case 4:
                    message.Timestamp = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a BallotCounted message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof actions.BallotCounted
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {actions.BallotCounted} BallotCounted
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        BallotCounted.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a BallotCounted message.
         * @function verify
         * @memberof actions.BallotCounted
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        BallotCounted.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.VoteTxId != null && message.hasOwnProperty("VoteTxId"))
                if (!(message.VoteTxId && typeof message.VoteTxId.length === "number" || $util.isString(message.VoteTxId)))
                    return "VoteTxId: buffer expected";
            if (message.Vote != null && message.hasOwnProperty("Vote"))
                if (!$util.isString(message.Vote))
                    return "Vote: string expected";
            if (message.Quantity != null && message.hasOwnProperty("Quantity"))
                if (!$util.isInteger(message.Quantity) && !(message.Quantity && $util.isInteger(message.Quantity.low) && $util.isInteger(message.Quantity.high)))
                    return "Quantity: integer|Long expected";
            if (message.Timestamp != null && message.hasOwnProperty("Timestamp"))
                if (!$util.isInteger(message.Timestamp) && !(message.Timestamp && $util.isInteger(message.Timestamp.low) && $util.isInteger(message.Timestamp.high)))
                    return "Timestamp: integer|Long expected";
            return null;
        };

        /**
         * Creates a BallotCounted message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof actions.BallotCounted
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {actions.BallotCounted} BallotCounted
         */
        BallotCounted.fromObject = function fromObject(object) {
            if (object instanceof $root.actions.BallotCounted)
                return object;
            var message = new $root.actions.BallotCounted();
            if (object.VoteTxId != null)
                if (typeof object.VoteTxId === "string")
                    $util.base64.decode(object.VoteTxId, message.VoteTxId = $util.newBuffer($util.base64.length(object.VoteTxId)), 0);
                else if (object.VoteTxId.length)
                    message.VoteTxId = object.VoteTxId;
            if (object.Vote != null)
                message.Vote = String(object.Vote);
            if (object.Quantity != null)
                if ($util.Long)
                    (message.Quantity = $util.Long.fromValue(object.Quantity)).unsigned = true;
                else if (typeof object.Quantity === "string")
                    message.Quantity = parseInt(object.Quantity, 10);
                else if (typeof object.Quantity === "number")
                    message.Quantity = object.Quantity;
                else if (typeof object.Quantity === "object")
                    message.Quantity = new $util.LongBits(object.Quantity.low >>> 0, object.Quantity.high >>> 0).toNumber(true);
            if (object.Timestamp != null)
                if ($util.Long)
                    (message.Timestamp = $util.Long.fromValue(object.Timestamp)).unsigned = true;
                else if (typeof object.Timestamp === "string")
                    message.Timestamp = parseInt(object.Timestamp, 10);
                else if (typeof object.Timestamp === "number")
                    message.Timestamp = object.Timestamp;
                else if (typeof object.Timestamp === "object")
                    message.Timestamp = new $util.LongBits(object.Timestamp.low >>> 0, object.Timestamp.high >>> 0).toNumber(true);
            return message;
        };

        /**
         * Creates a plain object from a BallotCounted message. Also converts values to other types if specified.
         * @function toObject
         * @memberof actions.BallotCounted
         * @static
         * @param {actions.BallotCounted} message BallotCounted
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        BallotCounted.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if (options.bytes === String)
                    object.VoteTxId = "";
                else {
                    object.VoteTxId = [];
                    if (options.bytes !== Array)
                        object.VoteTxId = $util.newBuffer(object.VoteTxId);
                }
                object.Vote = "";
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.Quantity = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.Quantity = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.Timestamp = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.Timestamp = options.longs === String ? "0" : 0;
            }
            if (message.VoteTxId != null && message.hasOwnProperty("VoteTxId"))
                object.VoteTxId = options.bytes === String ? $util.base64.encode(message.VoteTxId, 0, message.VoteTxId.length) : options.bytes === Array ? Array.prototype.slice.call(message.VoteTxId) : message.VoteTxId;
            if (message.Vote != null && message.hasOwnProperty("Vote"))
                object.Vote = message.Vote;
            if (message.Quantity != null && message.hasOwnProperty("Quantity"))
                if (typeof message.Quantity === "number")
                    object.Quantity = options.longs === String ? String(message.Quantity) : message.Quantity;
                else
                    object.Quantity = options.longs === String ? $util.Long.prototype.toString.call(message.Quantity) : options.longs === Number ? new $util.LongBits(message.Quantity.low >>> 0, message.Quantity.high >>> 0).toNumber(true) : message.Quantity;
            if (message.Timestamp != null && message.hasOwnProperty("Timestamp"))
                if (typeof message.Timestamp === "number")
                    object.Timestamp = options.longs === String ? String(message.Timestamp) : message.Timestamp;
                else
                    object.Timestamp = options.longs === String ? $util.Long.prototype.toString.call(message.Timestamp) : options.longs === Number ? new $util.LongBits(message.Timestamp.low >>> 0, message.Timestamp.high >>> 0).toNumber(true) : message.Timestamp;
            return object;
        };

        /**
         * Converts this BallotCounted to JSON.
         * @function toJSON
         * @memberof actions.BallotCounted
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        BallotCounted.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return BallotCounted;
    })();

    actions.Result = (function() {

        /**
         * Properties of a Result.
         * @memberof actions
         * @interface IResult
         * @property {string|null} [AssetType] Result AssetType
         * @property {Uint8Array|null} [AssetCode] Result AssetCode
         * @property {Array.<actions.IAmendmentField>|null} [ProposedAmendments] Result ProposedAmendments
         * @property {Uint8Array|null} [VoteTxId] Result VoteTxId
         * @property {Array.<number|Long>|null} [OptionTally] Result OptionTally
         * @property {string|null} [Result] Result Result
         * @property {number|Long|null} [Timestamp] Result Timestamp
         */

        /**
         * Constructs a new Result.
         * @memberof actions
         * @classdesc Represents a Result.
         * @implements IResult
         * @constructor
         * @param {actions.IResult=} [properties] Properties to set
         */
        function Result(properties) {
            this.ProposedAmendments = [];
            this.OptionTally = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Result AssetType.
         * @member {string} AssetType
         * @memberof actions.Result
         * @instance
         */
        Result.prototype.AssetType = "";

        /**
         * Result AssetCode.
         * @member {Uint8Array} AssetCode
         * @memberof actions.Result
         * @instance
         */
        Result.prototype.AssetCode = $util.newBuffer([]);

        /**
         * Result ProposedAmendments.
         * @member {Array.<actions.IAmendmentField>} ProposedAmendments
         * @memberof actions.Result
         * @instance
         */
        Result.prototype.ProposedAmendments = $util.emptyArray;

        /**
         * Result VoteTxId.
         * @member {Uint8Array} VoteTxId
         * @memberof actions.Result
         * @instance
         */
        Result.prototype.VoteTxId = $util.newBuffer([]);

        /**
         * Result OptionTally.
         * @member {Array.<number|Long>} OptionTally
         * @memberof actions.Result
         * @instance
         */
        Result.prototype.OptionTally = $util.emptyArray;

        /**
         * Result Result.
         * @member {string} Result
         * @memberof actions.Result
         * @instance
         */
        Result.prototype.Result = "";

        /**
         * Result Timestamp.
         * @member {number|Long} Timestamp
         * @memberof actions.Result
         * @instance
         */
        Result.prototype.Timestamp = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * Creates a new Result instance using the specified properties.
         * @function create
         * @memberof actions.Result
         * @static
         * @param {actions.IResult=} [properties] Properties to set
         * @returns {actions.Result} Result instance
         */
        Result.create = function create(properties) {
            return new Result(properties);
        };

        /**
         * Encodes the specified Result message. Does not implicitly {@link actions.Result.verify|verify} messages.
         * @function encode
         * @memberof actions.Result
         * @static
         * @param {actions.IResult} message Result message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Result.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.AssetType != null && Object.hasOwnProperty.call(message, "AssetType"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.AssetType);
            if (message.AssetCode != null && Object.hasOwnProperty.call(message, "AssetCode"))
                writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.AssetCode);
            if (message.ProposedAmendments != null && message.ProposedAmendments.length)
                for (var i = 0; i < message.ProposedAmendments.length; ++i)
                    $root.actions.AmendmentField.encode(message.ProposedAmendments[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            if (message.VoteTxId != null && Object.hasOwnProperty.call(message, "VoteTxId"))
                writer.uint32(/* id 4, wireType 2 =*/34).bytes(message.VoteTxId);
            if (message.OptionTally != null && message.OptionTally.length) {
                writer.uint32(/* id 5, wireType 2 =*/42).fork();
                for (var i = 0; i < message.OptionTally.length; ++i)
                    writer.uint64(message.OptionTally[i]);
                writer.ldelim();
            }
            if (message.Result != null && Object.hasOwnProperty.call(message, "Result"))
                writer.uint32(/* id 6, wireType 2 =*/50).string(message.Result);
            if (message.Timestamp != null && Object.hasOwnProperty.call(message, "Timestamp"))
                writer.uint32(/* id 7, wireType 0 =*/56).uint64(message.Timestamp);
            return writer;
        };

        /**
         * Encodes the specified Result message, length delimited. Does not implicitly {@link actions.Result.verify|verify} messages.
         * @function encodeDelimited
         * @memberof actions.Result
         * @static
         * @param {actions.IResult} message Result message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Result.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Result message from the specified reader or buffer.
         * @function decode
         * @memberof actions.Result
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {actions.Result} Result
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Result.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.actions.Result();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.AssetType = reader.string();
                    break;
                case 2:
                    message.AssetCode = reader.bytes();
                    break;
                case 3:
                    if (!(message.ProposedAmendments && message.ProposedAmendments.length))
                        message.ProposedAmendments = [];
                    message.ProposedAmendments.push($root.actions.AmendmentField.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.VoteTxId = reader.bytes();
                    break;
                case 5:
                    if (!(message.OptionTally && message.OptionTally.length))
                        message.OptionTally = [];
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.OptionTally.push(reader.uint64());
                    } else
                        message.OptionTally.push(reader.uint64());
                    break;
                case 6:
                    message.Result = reader.string();
                    break;
                case 7:
                    message.Timestamp = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Result message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof actions.Result
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {actions.Result} Result
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Result.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Result message.
         * @function verify
         * @memberof actions.Result
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Result.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.AssetType != null && message.hasOwnProperty("AssetType"))
                if (!$util.isString(message.AssetType))
                    return "AssetType: string expected";
            if (message.AssetCode != null && message.hasOwnProperty("AssetCode"))
                if (!(message.AssetCode && typeof message.AssetCode.length === "number" || $util.isString(message.AssetCode)))
                    return "AssetCode: buffer expected";
            if (message.ProposedAmendments != null && message.hasOwnProperty("ProposedAmendments")) {
                if (!Array.isArray(message.ProposedAmendments))
                    return "ProposedAmendments: array expected";
                for (var i = 0; i < message.ProposedAmendments.length; ++i) {
                    var error = $root.actions.AmendmentField.verify(message.ProposedAmendments[i]);
                    if (error)
                        return "ProposedAmendments." + error;
                }
            }
            if (message.VoteTxId != null && message.hasOwnProperty("VoteTxId"))
                if (!(message.VoteTxId && typeof message.VoteTxId.length === "number" || $util.isString(message.VoteTxId)))
                    return "VoteTxId: buffer expected";
            if (message.OptionTally != null && message.hasOwnProperty("OptionTally")) {
                if (!Array.isArray(message.OptionTally))
                    return "OptionTally: array expected";
                for (var i = 0; i < message.OptionTally.length; ++i)
                    if (!$util.isInteger(message.OptionTally[i]) && !(message.OptionTally[i] && $util.isInteger(message.OptionTally[i].low) && $util.isInteger(message.OptionTally[i].high)))
                        return "OptionTally: integer|Long[] expected";
            }
            if (message.Result != null && message.hasOwnProperty("Result"))
                if (!$util.isString(message.Result))
                    return "Result: string expected";
            if (message.Timestamp != null && message.hasOwnProperty("Timestamp"))
                if (!$util.isInteger(message.Timestamp) && !(message.Timestamp && $util.isInteger(message.Timestamp.low) && $util.isInteger(message.Timestamp.high)))
                    return "Timestamp: integer|Long expected";
            return null;
        };

        /**
         * Creates a Result message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof actions.Result
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {actions.Result} Result
         */
        Result.fromObject = function fromObject(object) {
            if (object instanceof $root.actions.Result)
                return object;
            var message = new $root.actions.Result();
            if (object.AssetType != null)
                message.AssetType = String(object.AssetType);
            if (object.AssetCode != null)
                if (typeof object.AssetCode === "string")
                    $util.base64.decode(object.AssetCode, message.AssetCode = $util.newBuffer($util.base64.length(object.AssetCode)), 0);
                else if (object.AssetCode.length)
                    message.AssetCode = object.AssetCode;
            if (object.ProposedAmendments) {
                if (!Array.isArray(object.ProposedAmendments))
                    throw TypeError(".actions.Result.ProposedAmendments: array expected");
                message.ProposedAmendments = [];
                for (var i = 0; i < object.ProposedAmendments.length; ++i) {
                    if (typeof object.ProposedAmendments[i] !== "object")
                        throw TypeError(".actions.Result.ProposedAmendments: object expected");
                    message.ProposedAmendments[i] = $root.actions.AmendmentField.fromObject(object.ProposedAmendments[i]);
                }
            }
            if (object.VoteTxId != null)
                if (typeof object.VoteTxId === "string")
                    $util.base64.decode(object.VoteTxId, message.VoteTxId = $util.newBuffer($util.base64.length(object.VoteTxId)), 0);
                else if (object.VoteTxId.length)
                    message.VoteTxId = object.VoteTxId;
            if (object.OptionTally) {
                if (!Array.isArray(object.OptionTally))
                    throw TypeError(".actions.Result.OptionTally: array expected");
                message.OptionTally = [];
                for (var i = 0; i < object.OptionTally.length; ++i)
                    if ($util.Long)
                        (message.OptionTally[i] = $util.Long.fromValue(object.OptionTally[i])).unsigned = true;
                    else if (typeof object.OptionTally[i] === "string")
                        message.OptionTally[i] = parseInt(object.OptionTally[i], 10);
                    else if (typeof object.OptionTally[i] === "number")
                        message.OptionTally[i] = object.OptionTally[i];
                    else if (typeof object.OptionTally[i] === "object")
                        message.OptionTally[i] = new $util.LongBits(object.OptionTally[i].low >>> 0, object.OptionTally[i].high >>> 0).toNumber(true);
            }
            if (object.Result != null)
                message.Result = String(object.Result);
            if (object.Timestamp != null)
                if ($util.Long)
                    (message.Timestamp = $util.Long.fromValue(object.Timestamp)).unsigned = true;
                else if (typeof object.Timestamp === "string")
                    message.Timestamp = parseInt(object.Timestamp, 10);
                else if (typeof object.Timestamp === "number")
                    message.Timestamp = object.Timestamp;
                else if (typeof object.Timestamp === "object")
                    message.Timestamp = new $util.LongBits(object.Timestamp.low >>> 0, object.Timestamp.high >>> 0).toNumber(true);
            return message;
        };

        /**
         * Creates a plain object from a Result message. Also converts values to other types if specified.
         * @function toObject
         * @memberof actions.Result
         * @static
         * @param {actions.Result} message Result
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Result.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults) {
                object.ProposedAmendments = [];
                object.OptionTally = [];
            }
            if (options.defaults) {
                object.AssetType = "";
                if (options.bytes === String)
                    object.AssetCode = "";
                else {
                    object.AssetCode = [];
                    if (options.bytes !== Array)
                        object.AssetCode = $util.newBuffer(object.AssetCode);
                }
                if (options.bytes === String)
                    object.VoteTxId = "";
                else {
                    object.VoteTxId = [];
                    if (options.bytes !== Array)
                        object.VoteTxId = $util.newBuffer(object.VoteTxId);
                }
                object.Result = "";
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.Timestamp = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.Timestamp = options.longs === String ? "0" : 0;
            }
            if (message.AssetType != null && message.hasOwnProperty("AssetType"))
                object.AssetType = message.AssetType;
            if (message.AssetCode != null && message.hasOwnProperty("AssetCode"))
                object.AssetCode = options.bytes === String ? $util.base64.encode(message.AssetCode, 0, message.AssetCode.length) : options.bytes === Array ? Array.prototype.slice.call(message.AssetCode) : message.AssetCode;
            if (message.ProposedAmendments && message.ProposedAmendments.length) {
                object.ProposedAmendments = [];
                for (var j = 0; j < message.ProposedAmendments.length; ++j)
                    object.ProposedAmendments[j] = $root.actions.AmendmentField.toObject(message.ProposedAmendments[j], options);
            }
            if (message.VoteTxId != null && message.hasOwnProperty("VoteTxId"))
                object.VoteTxId = options.bytes === String ? $util.base64.encode(message.VoteTxId, 0, message.VoteTxId.length) : options.bytes === Array ? Array.prototype.slice.call(message.VoteTxId) : message.VoteTxId;
            if (message.OptionTally && message.OptionTally.length) {
                object.OptionTally = [];
                for (var j = 0; j < message.OptionTally.length; ++j)
                    if (typeof message.OptionTally[j] === "number")
                        object.OptionTally[j] = options.longs === String ? String(message.OptionTally[j]) : message.OptionTally[j];
                    else
                        object.OptionTally[j] = options.longs === String ? $util.Long.prototype.toString.call(message.OptionTally[j]) : options.longs === Number ? new $util.LongBits(message.OptionTally[j].low >>> 0, message.OptionTally[j].high >>> 0).toNumber(true) : message.OptionTally[j];
            }
            if (message.Result != null && message.hasOwnProperty("Result"))
                object.Result = message.Result;
            if (message.Timestamp != null && message.hasOwnProperty("Timestamp"))
                if (typeof message.Timestamp === "number")
                    object.Timestamp = options.longs === String ? String(message.Timestamp) : message.Timestamp;
                else
                    object.Timestamp = options.longs === String ? $util.Long.prototype.toString.call(message.Timestamp) : options.longs === Number ? new $util.LongBits(message.Timestamp.low >>> 0, message.Timestamp.high >>> 0).toNumber(true) : message.Timestamp;
            return object;
        };

        /**
         * Converts this Result to JSON.
         * @function toJSON
         * @memberof actions.Result
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Result.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Result;
    })();

    actions.Order = (function() {

        /**
         * Properties of an Order.
         * @memberof actions
         * @interface IOrder
         * @property {string|null} [ComplianceAction] Order ComplianceAction
         * @property {string|null} [AssetType] Order AssetType
         * @property {Uint8Array|null} [AssetCode] Order AssetCode
         * @property {Array.<actions.ITargetAddressField>|null} [TargetAddresses] Order TargetAddresses
         * @property {Uint8Array|null} [FreezeTxId] Order FreezeTxId
         * @property {number|Long|null} [FreezePeriod] Order FreezePeriod
         * @property {Uint8Array|null} [DepositAddress] Order DepositAddress
         * @property {string|null} [AuthorityName] Order AuthorityName
         * @property {Uint8Array|null} [AuthorityPublicKey] Order AuthorityPublicKey
         * @property {number|null} [SignatureAlgorithm] Order SignatureAlgorithm
         * @property {Uint8Array|null} [OrderSignature] Order OrderSignature
         * @property {Array.<actions.IQuantityIndexField>|null} [BitcoinDispersions] Order BitcoinDispersions
         * @property {string|null} [Message] Order Message
         * @property {number|null} [SupportingEvidenceFormat] Order SupportingEvidenceFormat
         * @property {Uint8Array|null} [SupportingEvidence] Order SupportingEvidence
         * @property {Array.<actions.IReferenceTransactionField>|null} [ReferenceTransactions] Order ReferenceTransactions
         */

        /**
         * Constructs a new Order.
         * @memberof actions
         * @classdesc Represents an Order.
         * @implements IOrder
         * @constructor
         * @param {actions.IOrder=} [properties] Properties to set
         */
        function Order(properties) {
            this.TargetAddresses = [];
            this.BitcoinDispersions = [];
            this.ReferenceTransactions = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Order ComplianceAction.
         * @member {string} ComplianceAction
         * @memberof actions.Order
         * @instance
         */
        Order.prototype.ComplianceAction = "";

        /**
         * Order AssetType.
         * @member {string} AssetType
         * @memberof actions.Order
         * @instance
         */
        Order.prototype.AssetType = "";

        /**
         * Order AssetCode.
         * @member {Uint8Array} AssetCode
         * @memberof actions.Order
         * @instance
         */
        Order.prototype.AssetCode = $util.newBuffer([]);

        /**
         * Order TargetAddresses.
         * @member {Array.<actions.ITargetAddressField>} TargetAddresses
         * @memberof actions.Order
         * @instance
         */
        Order.prototype.TargetAddresses = $util.emptyArray;

        /**
         * Order FreezeTxId.
         * @member {Uint8Array} FreezeTxId
         * @memberof actions.Order
         * @instance
         */
        Order.prototype.FreezeTxId = $util.newBuffer([]);

        /**
         * Order FreezePeriod.
         * @member {number|Long} FreezePeriod
         * @memberof actions.Order
         * @instance
         */
        Order.prototype.FreezePeriod = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * Order DepositAddress.
         * @member {Uint8Array} DepositAddress
         * @memberof actions.Order
         * @instance
         */
        Order.prototype.DepositAddress = $util.newBuffer([]);

        /**
         * Order AuthorityName.
         * @member {string} AuthorityName
         * @memberof actions.Order
         * @instance
         */
        Order.prototype.AuthorityName = "";

        /**
         * Order AuthorityPublicKey.
         * @member {Uint8Array} AuthorityPublicKey
         * @memberof actions.Order
         * @instance
         */
        Order.prototype.AuthorityPublicKey = $util.newBuffer([]);

        /**
         * Order SignatureAlgorithm.
         * @member {number} SignatureAlgorithm
         * @memberof actions.Order
         * @instance
         */
        Order.prototype.SignatureAlgorithm = 0;

        /**
         * Order OrderSignature.
         * @member {Uint8Array} OrderSignature
         * @memberof actions.Order
         * @instance
         */
        Order.prototype.OrderSignature = $util.newBuffer([]);

        /**
         * Order BitcoinDispersions.
         * @member {Array.<actions.IQuantityIndexField>} BitcoinDispersions
         * @memberof actions.Order
         * @instance
         */
        Order.prototype.BitcoinDispersions = $util.emptyArray;

        /**
         * Order Message.
         * @member {string} Message
         * @memberof actions.Order
         * @instance
         */
        Order.prototype.Message = "";

        /**
         * Order SupportingEvidenceFormat.
         * @member {number} SupportingEvidenceFormat
         * @memberof actions.Order
         * @instance
         */
        Order.prototype.SupportingEvidenceFormat = 0;

        /**
         * Order SupportingEvidence.
         * @member {Uint8Array} SupportingEvidence
         * @memberof actions.Order
         * @instance
         */
        Order.prototype.SupportingEvidence = $util.newBuffer([]);

        /**
         * Order ReferenceTransactions.
         * @member {Array.<actions.IReferenceTransactionField>} ReferenceTransactions
         * @memberof actions.Order
         * @instance
         */
        Order.prototype.ReferenceTransactions = $util.emptyArray;

        /**
         * Creates a new Order instance using the specified properties.
         * @function create
         * @memberof actions.Order
         * @static
         * @param {actions.IOrder=} [properties] Properties to set
         * @returns {actions.Order} Order instance
         */
        Order.create = function create(properties) {
            return new Order(properties);
        };

        /**
         * Encodes the specified Order message. Does not implicitly {@link actions.Order.verify|verify} messages.
         * @function encode
         * @memberof actions.Order
         * @static
         * @param {actions.IOrder} message Order message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Order.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.ComplianceAction != null && Object.hasOwnProperty.call(message, "ComplianceAction"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.ComplianceAction);
            if (message.AssetType != null && Object.hasOwnProperty.call(message, "AssetType"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.AssetType);
            if (message.AssetCode != null && Object.hasOwnProperty.call(message, "AssetCode"))
                writer.uint32(/* id 3, wireType 2 =*/26).bytes(message.AssetCode);
            if (message.TargetAddresses != null && message.TargetAddresses.length)
                for (var i = 0; i < message.TargetAddresses.length; ++i)
                    $root.actions.TargetAddressField.encode(message.TargetAddresses[i], writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            if (message.FreezeTxId != null && Object.hasOwnProperty.call(message, "FreezeTxId"))
                writer.uint32(/* id 5, wireType 2 =*/42).bytes(message.FreezeTxId);
            if (message.FreezePeriod != null && Object.hasOwnProperty.call(message, "FreezePeriod"))
                writer.uint32(/* id 6, wireType 0 =*/48).uint64(message.FreezePeriod);
            if (message.DepositAddress != null && Object.hasOwnProperty.call(message, "DepositAddress"))
                writer.uint32(/* id 7, wireType 2 =*/58).bytes(message.DepositAddress);
            if (message.AuthorityName != null && Object.hasOwnProperty.call(message, "AuthorityName"))
                writer.uint32(/* id 8, wireType 2 =*/66).string(message.AuthorityName);
            if (message.AuthorityPublicKey != null && Object.hasOwnProperty.call(message, "AuthorityPublicKey"))
                writer.uint32(/* id 9, wireType 2 =*/74).bytes(message.AuthorityPublicKey);
            if (message.SignatureAlgorithm != null && Object.hasOwnProperty.call(message, "SignatureAlgorithm"))
                writer.uint32(/* id 10, wireType 0 =*/80).uint32(message.SignatureAlgorithm);
            if (message.OrderSignature != null && Object.hasOwnProperty.call(message, "OrderSignature"))
                writer.uint32(/* id 11, wireType 2 =*/90).bytes(message.OrderSignature);
            if (message.BitcoinDispersions != null && message.BitcoinDispersions.length)
                for (var i = 0; i < message.BitcoinDispersions.length; ++i)
                    $root.actions.QuantityIndexField.encode(message.BitcoinDispersions[i], writer.uint32(/* id 14, wireType 2 =*/114).fork()).ldelim();
            if (message.Message != null && Object.hasOwnProperty.call(message, "Message"))
                writer.uint32(/* id 15, wireType 2 =*/122).string(message.Message);
            if (message.SupportingEvidenceFormat != null && Object.hasOwnProperty.call(message, "SupportingEvidenceFormat"))
                writer.uint32(/* id 16, wireType 0 =*/128).uint32(message.SupportingEvidenceFormat);
            if (message.SupportingEvidence != null && Object.hasOwnProperty.call(message, "SupportingEvidence"))
                writer.uint32(/* id 17, wireType 2 =*/138).bytes(message.SupportingEvidence);
            if (message.ReferenceTransactions != null && message.ReferenceTransactions.length)
                for (var i = 0; i < message.ReferenceTransactions.length; ++i)
                    $root.actions.ReferenceTransactionField.encode(message.ReferenceTransactions[i], writer.uint32(/* id 18, wireType 2 =*/146).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified Order message, length delimited. Does not implicitly {@link actions.Order.verify|verify} messages.
         * @function encodeDelimited
         * @memberof actions.Order
         * @static
         * @param {actions.IOrder} message Order message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Order.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an Order message from the specified reader or buffer.
         * @function decode
         * @memberof actions.Order
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {actions.Order} Order
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Order.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.actions.Order();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.ComplianceAction = reader.string();
                    break;
                case 2:
                    message.AssetType = reader.string();
                    break;
                case 3:
                    message.AssetCode = reader.bytes();
                    break;
                case 4:
                    if (!(message.TargetAddresses && message.TargetAddresses.length))
                        message.TargetAddresses = [];
                    message.TargetAddresses.push($root.actions.TargetAddressField.decode(reader, reader.uint32()));
                    break;
                case 5:
                    message.FreezeTxId = reader.bytes();
                    break;
                case 6:
                    message.FreezePeriod = reader.uint64();
                    break;
                case 7:
                    message.DepositAddress = reader.bytes();
                    break;
                case 8:
                    message.AuthorityName = reader.string();
                    break;
                case 9:
                    message.AuthorityPublicKey = reader.bytes();
                    break;
                case 10:
                    message.SignatureAlgorithm = reader.uint32();
                    break;
                case 11:
                    message.OrderSignature = reader.bytes();
                    break;
                case 14:
                    if (!(message.BitcoinDispersions && message.BitcoinDispersions.length))
                        message.BitcoinDispersions = [];
                    message.BitcoinDispersions.push($root.actions.QuantityIndexField.decode(reader, reader.uint32()));
                    break;
                case 15:
                    message.Message = reader.string();
                    break;
                case 16:
                    message.SupportingEvidenceFormat = reader.uint32();
                    break;
                case 17:
                    message.SupportingEvidence = reader.bytes();
                    break;
                case 18:
                    if (!(message.ReferenceTransactions && message.ReferenceTransactions.length))
                        message.ReferenceTransactions = [];
                    message.ReferenceTransactions.push($root.actions.ReferenceTransactionField.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an Order message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof actions.Order
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {actions.Order} Order
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Order.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an Order message.
         * @function verify
         * @memberof actions.Order
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Order.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.ComplianceAction != null && message.hasOwnProperty("ComplianceAction"))
                if (!$util.isString(message.ComplianceAction))
                    return "ComplianceAction: string expected";
            if (message.AssetType != null && message.hasOwnProperty("AssetType"))
                if (!$util.isString(message.AssetType))
                    return "AssetType: string expected";
            if (message.AssetCode != null && message.hasOwnProperty("AssetCode"))
                if (!(message.AssetCode && typeof message.AssetCode.length === "number" || $util.isString(message.AssetCode)))
                    return "AssetCode: buffer expected";
            if (message.TargetAddresses != null && message.hasOwnProperty("TargetAddresses")) {
                if (!Array.isArray(message.TargetAddresses))
                    return "TargetAddresses: array expected";
                for (var i = 0; i < message.TargetAddresses.length; ++i) {
                    var error = $root.actions.TargetAddressField.verify(message.TargetAddresses[i]);
                    if (error)
                        return "TargetAddresses." + error;
                }
            }
            if (message.FreezeTxId != null && message.hasOwnProperty("FreezeTxId"))
                if (!(message.FreezeTxId && typeof message.FreezeTxId.length === "number" || $util.isString(message.FreezeTxId)))
                    return "FreezeTxId: buffer expected";
            if (message.FreezePeriod != null && message.hasOwnProperty("FreezePeriod"))
                if (!$util.isInteger(message.FreezePeriod) && !(message.FreezePeriod && $util.isInteger(message.FreezePeriod.low) && $util.isInteger(message.FreezePeriod.high)))
                    return "FreezePeriod: integer|Long expected";
            if (message.DepositAddress != null && message.hasOwnProperty("DepositAddress"))
                if (!(message.DepositAddress && typeof message.DepositAddress.length === "number" || $util.isString(message.DepositAddress)))
                    return "DepositAddress: buffer expected";
            if (message.AuthorityName != null && message.hasOwnProperty("AuthorityName"))
                if (!$util.isString(message.AuthorityName))
                    return "AuthorityName: string expected";
            if (message.AuthorityPublicKey != null && message.hasOwnProperty("AuthorityPublicKey"))
                if (!(message.AuthorityPublicKey && typeof message.AuthorityPublicKey.length === "number" || $util.isString(message.AuthorityPublicKey)))
                    return "AuthorityPublicKey: buffer expected";
            if (message.SignatureAlgorithm != null && message.hasOwnProperty("SignatureAlgorithm"))
                if (!$util.isInteger(message.SignatureAlgorithm))
                    return "SignatureAlgorithm: integer expected";
            if (message.OrderSignature != null && message.hasOwnProperty("OrderSignature"))
                if (!(message.OrderSignature && typeof message.OrderSignature.length === "number" || $util.isString(message.OrderSignature)))
                    return "OrderSignature: buffer expected";
            if (message.BitcoinDispersions != null && message.hasOwnProperty("BitcoinDispersions")) {
                if (!Array.isArray(message.BitcoinDispersions))
                    return "BitcoinDispersions: array expected";
                for (var i = 0; i < message.BitcoinDispersions.length; ++i) {
                    var error = $root.actions.QuantityIndexField.verify(message.BitcoinDispersions[i]);
                    if (error)
                        return "BitcoinDispersions." + error;
                }
            }
            if (message.Message != null && message.hasOwnProperty("Message"))
                if (!$util.isString(message.Message))
                    return "Message: string expected";
            if (message.SupportingEvidenceFormat != null && message.hasOwnProperty("SupportingEvidenceFormat"))
                if (!$util.isInteger(message.SupportingEvidenceFormat))
                    return "SupportingEvidenceFormat: integer expected";
            if (message.SupportingEvidence != null && message.hasOwnProperty("SupportingEvidence"))
                if (!(message.SupportingEvidence && typeof message.SupportingEvidence.length === "number" || $util.isString(message.SupportingEvidence)))
                    return "SupportingEvidence: buffer expected";
            if (message.ReferenceTransactions != null && message.hasOwnProperty("ReferenceTransactions")) {
                if (!Array.isArray(message.ReferenceTransactions))
                    return "ReferenceTransactions: array expected";
                for (var i = 0; i < message.ReferenceTransactions.length; ++i) {
                    var error = $root.actions.ReferenceTransactionField.verify(message.ReferenceTransactions[i]);
                    if (error)
                        return "ReferenceTransactions." + error;
                }
            }
            return null;
        };

        /**
         * Creates an Order message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof actions.Order
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {actions.Order} Order
         */
        Order.fromObject = function fromObject(object) {
            if (object instanceof $root.actions.Order)
                return object;
            var message = new $root.actions.Order();
            if (object.ComplianceAction != null)
                message.ComplianceAction = String(object.ComplianceAction);
            if (object.AssetType != null)
                message.AssetType = String(object.AssetType);
            if (object.AssetCode != null)
                if (typeof object.AssetCode === "string")
                    $util.base64.decode(object.AssetCode, message.AssetCode = $util.newBuffer($util.base64.length(object.AssetCode)), 0);
                else if (object.AssetCode.length)
                    message.AssetCode = object.AssetCode;
            if (object.TargetAddresses) {
                if (!Array.isArray(object.TargetAddresses))
                    throw TypeError(".actions.Order.TargetAddresses: array expected");
                message.TargetAddresses = [];
                for (var i = 0; i < object.TargetAddresses.length; ++i) {
                    if (typeof object.TargetAddresses[i] !== "object")
                        throw TypeError(".actions.Order.TargetAddresses: object expected");
                    message.TargetAddresses[i] = $root.actions.TargetAddressField.fromObject(object.TargetAddresses[i]);
                }
            }
            if (object.FreezeTxId != null)
                if (typeof object.FreezeTxId === "string")
                    $util.base64.decode(object.FreezeTxId, message.FreezeTxId = $util.newBuffer($util.base64.length(object.FreezeTxId)), 0);
                else if (object.FreezeTxId.length)
                    message.FreezeTxId = object.FreezeTxId;
            if (object.FreezePeriod != null)
                if ($util.Long)
                    (message.FreezePeriod = $util.Long.fromValue(object.FreezePeriod)).unsigned = true;
                else if (typeof object.FreezePeriod === "string")
                    message.FreezePeriod = parseInt(object.FreezePeriod, 10);
                else if (typeof object.FreezePeriod === "number")
                    message.FreezePeriod = object.FreezePeriod;
                else if (typeof object.FreezePeriod === "object")
                    message.FreezePeriod = new $util.LongBits(object.FreezePeriod.low >>> 0, object.FreezePeriod.high >>> 0).toNumber(true);
            if (object.DepositAddress != null)
                if (typeof object.DepositAddress === "string")
                    $util.base64.decode(object.DepositAddress, message.DepositAddress = $util.newBuffer($util.base64.length(object.DepositAddress)), 0);
                else if (object.DepositAddress.length)
                    message.DepositAddress = object.DepositAddress;
            if (object.AuthorityName != null)
                message.AuthorityName = String(object.AuthorityName);
            if (object.AuthorityPublicKey != null)
                if (typeof object.AuthorityPublicKey === "string")
                    $util.base64.decode(object.AuthorityPublicKey, message.AuthorityPublicKey = $util.newBuffer($util.base64.length(object.AuthorityPublicKey)), 0);
                else if (object.AuthorityPublicKey.length)
                    message.AuthorityPublicKey = object.AuthorityPublicKey;
            if (object.SignatureAlgorithm != null)
                message.SignatureAlgorithm = object.SignatureAlgorithm >>> 0;
            if (object.OrderSignature != null)
                if (typeof object.OrderSignature === "string")
                    $util.base64.decode(object.OrderSignature, message.OrderSignature = $util.newBuffer($util.base64.length(object.OrderSignature)), 0);
                else if (object.OrderSignature.length)
                    message.OrderSignature = object.OrderSignature;
            if (object.BitcoinDispersions) {
                if (!Array.isArray(object.BitcoinDispersions))
                    throw TypeError(".actions.Order.BitcoinDispersions: array expected");
                message.BitcoinDispersions = [];
                for (var i = 0; i < object.BitcoinDispersions.length; ++i) {
                    if (typeof object.BitcoinDispersions[i] !== "object")
                        throw TypeError(".actions.Order.BitcoinDispersions: object expected");
                    message.BitcoinDispersions[i] = $root.actions.QuantityIndexField.fromObject(object.BitcoinDispersions[i]);
                }
            }
            if (object.Message != null)
                message.Message = String(object.Message);
            if (object.SupportingEvidenceFormat != null)
                message.SupportingEvidenceFormat = object.SupportingEvidenceFormat >>> 0;
            if (object.SupportingEvidence != null)
                if (typeof object.SupportingEvidence === "string")
                    $util.base64.decode(object.SupportingEvidence, message.SupportingEvidence = $util.newBuffer($util.base64.length(object.SupportingEvidence)), 0);
                else if (object.SupportingEvidence.length)
                    message.SupportingEvidence = object.SupportingEvidence;
            if (object.ReferenceTransactions) {
                if (!Array.isArray(object.ReferenceTransactions))
                    throw TypeError(".actions.Order.ReferenceTransactions: array expected");
                message.ReferenceTransactions = [];
                for (var i = 0; i < object.ReferenceTransactions.length; ++i) {
                    if (typeof object.ReferenceTransactions[i] !== "object")
                        throw TypeError(".actions.Order.ReferenceTransactions: object expected");
                    message.ReferenceTransactions[i] = $root.actions.ReferenceTransactionField.fromObject(object.ReferenceTransactions[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from an Order message. Also converts values to other types if specified.
         * @function toObject
         * @memberof actions.Order
         * @static
         * @param {actions.Order} message Order
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Order.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults) {
                object.TargetAddresses = [];
                object.BitcoinDispersions = [];
                object.ReferenceTransactions = [];
            }
            if (options.defaults) {
                object.ComplianceAction = "";
                object.AssetType = "";
                if (options.bytes === String)
                    object.AssetCode = "";
                else {
                    object.AssetCode = [];
                    if (options.bytes !== Array)
                        object.AssetCode = $util.newBuffer(object.AssetCode);
                }
                if (options.bytes === String)
                    object.FreezeTxId = "";
                else {
                    object.FreezeTxId = [];
                    if (options.bytes !== Array)
                        object.FreezeTxId = $util.newBuffer(object.FreezeTxId);
                }
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.FreezePeriod = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.FreezePeriod = options.longs === String ? "0" : 0;
                if (options.bytes === String)
                    object.DepositAddress = "";
                else {
                    object.DepositAddress = [];
                    if (options.bytes !== Array)
                        object.DepositAddress = $util.newBuffer(object.DepositAddress);
                }
                object.AuthorityName = "";
                if (options.bytes === String)
                    object.AuthorityPublicKey = "";
                else {
                    object.AuthorityPublicKey = [];
                    if (options.bytes !== Array)
                        object.AuthorityPublicKey = $util.newBuffer(object.AuthorityPublicKey);
                }
                object.SignatureAlgorithm = 0;
                if (options.bytes === String)
                    object.OrderSignature = "";
                else {
                    object.OrderSignature = [];
                    if (options.bytes !== Array)
                        object.OrderSignature = $util.newBuffer(object.OrderSignature);
                }
                object.Message = "";
                object.SupportingEvidenceFormat = 0;
                if (options.bytes === String)
                    object.SupportingEvidence = "";
                else {
                    object.SupportingEvidence = [];
                    if (options.bytes !== Array)
                        object.SupportingEvidence = $util.newBuffer(object.SupportingEvidence);
                }
            }
            if (message.ComplianceAction != null && message.hasOwnProperty("ComplianceAction"))
                object.ComplianceAction = message.ComplianceAction;
            if (message.AssetType != null && message.hasOwnProperty("AssetType"))
                object.AssetType = message.AssetType;
            if (message.AssetCode != null && message.hasOwnProperty("AssetCode"))
                object.AssetCode = options.bytes === String ? $util.base64.encode(message.AssetCode, 0, message.AssetCode.length) : options.bytes === Array ? Array.prototype.slice.call(message.AssetCode) : message.AssetCode;
            if (message.TargetAddresses && message.TargetAddresses.length) {
                object.TargetAddresses = [];
                for (var j = 0; j < message.TargetAddresses.length; ++j)
                    object.TargetAddresses[j] = $root.actions.TargetAddressField.toObject(message.TargetAddresses[j], options);
            }
            if (message.FreezeTxId != null && message.hasOwnProperty("FreezeTxId"))
                object.FreezeTxId = options.bytes === String ? $util.base64.encode(message.FreezeTxId, 0, message.FreezeTxId.length) : options.bytes === Array ? Array.prototype.slice.call(message.FreezeTxId) : message.FreezeTxId;
            if (message.FreezePeriod != null && message.hasOwnProperty("FreezePeriod"))
                if (typeof message.FreezePeriod === "number")
                    object.FreezePeriod = options.longs === String ? String(message.FreezePeriod) : message.FreezePeriod;
                else
                    object.FreezePeriod = options.longs === String ? $util.Long.prototype.toString.call(message.FreezePeriod) : options.longs === Number ? new $util.LongBits(message.FreezePeriod.low >>> 0, message.FreezePeriod.high >>> 0).toNumber(true) : message.FreezePeriod;
            if (message.DepositAddress != null && message.hasOwnProperty("DepositAddress"))
                object.DepositAddress = options.bytes === String ? $util.base64.encode(message.DepositAddress, 0, message.DepositAddress.length) : options.bytes === Array ? Array.prototype.slice.call(message.DepositAddress) : message.DepositAddress;
            if (message.AuthorityName != null && message.hasOwnProperty("AuthorityName"))
                object.AuthorityName = message.AuthorityName;
            if (message.AuthorityPublicKey != null && message.hasOwnProperty("AuthorityPublicKey"))
                object.AuthorityPublicKey = options.bytes === String ? $util.base64.encode(message.AuthorityPublicKey, 0, message.AuthorityPublicKey.length) : options.bytes === Array ? Array.prototype.slice.call(message.AuthorityPublicKey) : message.AuthorityPublicKey;
            if (message.SignatureAlgorithm != null && message.hasOwnProperty("SignatureAlgorithm"))
                object.SignatureAlgorithm = message.SignatureAlgorithm;
            if (message.OrderSignature != null && message.hasOwnProperty("OrderSignature"))
                object.OrderSignature = options.bytes === String ? $util.base64.encode(message.OrderSignature, 0, message.OrderSignature.length) : options.bytes === Array ? Array.prototype.slice.call(message.OrderSignature) : message.OrderSignature;
            if (message.BitcoinDispersions && message.BitcoinDispersions.length) {
                object.BitcoinDispersions = [];
                for (var j = 0; j < message.BitcoinDispersions.length; ++j)
                    object.BitcoinDispersions[j] = $root.actions.QuantityIndexField.toObject(message.BitcoinDispersions[j], options);
            }
            if (message.Message != null && message.hasOwnProperty("Message"))
                object.Message = message.Message;
            if (message.SupportingEvidenceFormat != null && message.hasOwnProperty("SupportingEvidenceFormat"))
                object.SupportingEvidenceFormat = message.SupportingEvidenceFormat;
            if (message.SupportingEvidence != null && message.hasOwnProperty("SupportingEvidence"))
                object.SupportingEvidence = options.bytes === String ? $util.base64.encode(message.SupportingEvidence, 0, message.SupportingEvidence.length) : options.bytes === Array ? Array.prototype.slice.call(message.SupportingEvidence) : message.SupportingEvidence;
            if (message.ReferenceTransactions && message.ReferenceTransactions.length) {
                object.ReferenceTransactions = [];
                for (var j = 0; j < message.ReferenceTransactions.length; ++j)
                    object.ReferenceTransactions[j] = $root.actions.ReferenceTransactionField.toObject(message.ReferenceTransactions[j], options);
            }
            return object;
        };

        /**
         * Converts this Order to JSON.
         * @function toJSON
         * @memberof actions.Order
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Order.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Order;
    })();

    actions.Freeze = (function() {

        /**
         * Properties of a Freeze.
         * @memberof actions
         * @interface IFreeze
         * @property {string|null} [AssetType] Freeze AssetType
         * @property {Uint8Array|null} [AssetCode] Freeze AssetCode
         * @property {Array.<actions.IQuantityIndexField>|null} [Quantities] Freeze Quantities
         * @property {number|Long|null} [FreezePeriod] Freeze FreezePeriod
         * @property {number|Long|null} [Timestamp] Freeze Timestamp
         */

        /**
         * Constructs a new Freeze.
         * @memberof actions
         * @classdesc Represents a Freeze.
         * @implements IFreeze
         * @constructor
         * @param {actions.IFreeze=} [properties] Properties to set
         */
        function Freeze(properties) {
            this.Quantities = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Freeze AssetType.
         * @member {string} AssetType
         * @memberof actions.Freeze
         * @instance
         */
        Freeze.prototype.AssetType = "";

        /**
         * Freeze AssetCode.
         * @member {Uint8Array} AssetCode
         * @memberof actions.Freeze
         * @instance
         */
        Freeze.prototype.AssetCode = $util.newBuffer([]);

        /**
         * Freeze Quantities.
         * @member {Array.<actions.IQuantityIndexField>} Quantities
         * @memberof actions.Freeze
         * @instance
         */
        Freeze.prototype.Quantities = $util.emptyArray;

        /**
         * Freeze FreezePeriod.
         * @member {number|Long} FreezePeriod
         * @memberof actions.Freeze
         * @instance
         */
        Freeze.prototype.FreezePeriod = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * Freeze Timestamp.
         * @member {number|Long} Timestamp
         * @memberof actions.Freeze
         * @instance
         */
        Freeze.prototype.Timestamp = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * Creates a new Freeze instance using the specified properties.
         * @function create
         * @memberof actions.Freeze
         * @static
         * @param {actions.IFreeze=} [properties] Properties to set
         * @returns {actions.Freeze} Freeze instance
         */
        Freeze.create = function create(properties) {
            return new Freeze(properties);
        };

        /**
         * Encodes the specified Freeze message. Does not implicitly {@link actions.Freeze.verify|verify} messages.
         * @function encode
         * @memberof actions.Freeze
         * @static
         * @param {actions.IFreeze} message Freeze message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Freeze.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.AssetType != null && Object.hasOwnProperty.call(message, "AssetType"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.AssetType);
            if (message.AssetCode != null && Object.hasOwnProperty.call(message, "AssetCode"))
                writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.AssetCode);
            if (message.Quantities != null && message.Quantities.length)
                for (var i = 0; i < message.Quantities.length; ++i)
                    $root.actions.QuantityIndexField.encode(message.Quantities[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            if (message.FreezePeriod != null && Object.hasOwnProperty.call(message, "FreezePeriod"))
                writer.uint32(/* id 4, wireType 0 =*/32).uint64(message.FreezePeriod);
            if (message.Timestamp != null && Object.hasOwnProperty.call(message, "Timestamp"))
                writer.uint32(/* id 5, wireType 0 =*/40).uint64(message.Timestamp);
            return writer;
        };

        /**
         * Encodes the specified Freeze message, length delimited. Does not implicitly {@link actions.Freeze.verify|verify} messages.
         * @function encodeDelimited
         * @memberof actions.Freeze
         * @static
         * @param {actions.IFreeze} message Freeze message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Freeze.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Freeze message from the specified reader or buffer.
         * @function decode
         * @memberof actions.Freeze
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {actions.Freeze} Freeze
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Freeze.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.actions.Freeze();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.AssetType = reader.string();
                    break;
                case 2:
                    message.AssetCode = reader.bytes();
                    break;
                case 3:
                    if (!(message.Quantities && message.Quantities.length))
                        message.Quantities = [];
                    message.Quantities.push($root.actions.QuantityIndexField.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.FreezePeriod = reader.uint64();
                    break;
                case 5:
                    message.Timestamp = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Freeze message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof actions.Freeze
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {actions.Freeze} Freeze
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Freeze.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Freeze message.
         * @function verify
         * @memberof actions.Freeze
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Freeze.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.AssetType != null && message.hasOwnProperty("AssetType"))
                if (!$util.isString(message.AssetType))
                    return "AssetType: string expected";
            if (message.AssetCode != null && message.hasOwnProperty("AssetCode"))
                if (!(message.AssetCode && typeof message.AssetCode.length === "number" || $util.isString(message.AssetCode)))
                    return "AssetCode: buffer expected";
            if (message.Quantities != null && message.hasOwnProperty("Quantities")) {
                if (!Array.isArray(message.Quantities))
                    return "Quantities: array expected";
                for (var i = 0; i < message.Quantities.length; ++i) {
                    var error = $root.actions.QuantityIndexField.verify(message.Quantities[i]);
                    if (error)
                        return "Quantities." + error;
                }
            }
            if (message.FreezePeriod != null && message.hasOwnProperty("FreezePeriod"))
                if (!$util.isInteger(message.FreezePeriod) && !(message.FreezePeriod && $util.isInteger(message.FreezePeriod.low) && $util.isInteger(message.FreezePeriod.high)))
                    return "FreezePeriod: integer|Long expected";
            if (message.Timestamp != null && message.hasOwnProperty("Timestamp"))
                if (!$util.isInteger(message.Timestamp) && !(message.Timestamp && $util.isInteger(message.Timestamp.low) && $util.isInteger(message.Timestamp.high)))
                    return "Timestamp: integer|Long expected";
            return null;
        };

        /**
         * Creates a Freeze message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof actions.Freeze
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {actions.Freeze} Freeze
         */
        Freeze.fromObject = function fromObject(object) {
            if (object instanceof $root.actions.Freeze)
                return object;
            var message = new $root.actions.Freeze();
            if (object.AssetType != null)
                message.AssetType = String(object.AssetType);
            if (object.AssetCode != null)
                if (typeof object.AssetCode === "string")
                    $util.base64.decode(object.AssetCode, message.AssetCode = $util.newBuffer($util.base64.length(object.AssetCode)), 0);
                else if (object.AssetCode.length)
                    message.AssetCode = object.AssetCode;
            if (object.Quantities) {
                if (!Array.isArray(object.Quantities))
                    throw TypeError(".actions.Freeze.Quantities: array expected");
                message.Quantities = [];
                for (var i = 0; i < object.Quantities.length; ++i) {
                    if (typeof object.Quantities[i] !== "object")
                        throw TypeError(".actions.Freeze.Quantities: object expected");
                    message.Quantities[i] = $root.actions.QuantityIndexField.fromObject(object.Quantities[i]);
                }
            }
            if (object.FreezePeriod != null)
                if ($util.Long)
                    (message.FreezePeriod = $util.Long.fromValue(object.FreezePeriod)).unsigned = true;
                else if (typeof object.FreezePeriod === "string")
                    message.FreezePeriod = parseInt(object.FreezePeriod, 10);
                else if (typeof object.FreezePeriod === "number")
                    message.FreezePeriod = object.FreezePeriod;
                else if (typeof object.FreezePeriod === "object")
                    message.FreezePeriod = new $util.LongBits(object.FreezePeriod.low >>> 0, object.FreezePeriod.high >>> 0).toNumber(true);
            if (object.Timestamp != null)
                if ($util.Long)
                    (message.Timestamp = $util.Long.fromValue(object.Timestamp)).unsigned = true;
                else if (typeof object.Timestamp === "string")
                    message.Timestamp = parseInt(object.Timestamp, 10);
                else if (typeof object.Timestamp === "number")
                    message.Timestamp = object.Timestamp;
                else if (typeof object.Timestamp === "object")
                    message.Timestamp = new $util.LongBits(object.Timestamp.low >>> 0, object.Timestamp.high >>> 0).toNumber(true);
            return message;
        };

        /**
         * Creates a plain object from a Freeze message. Also converts values to other types if specified.
         * @function toObject
         * @memberof actions.Freeze
         * @static
         * @param {actions.Freeze} message Freeze
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Freeze.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.Quantities = [];
            if (options.defaults) {
                object.AssetType = "";
                if (options.bytes === String)
                    object.AssetCode = "";
                else {
                    object.AssetCode = [];
                    if (options.bytes !== Array)
                        object.AssetCode = $util.newBuffer(object.AssetCode);
                }
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.FreezePeriod = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.FreezePeriod = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.Timestamp = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.Timestamp = options.longs === String ? "0" : 0;
            }
            if (message.AssetType != null && message.hasOwnProperty("AssetType"))
                object.AssetType = message.AssetType;
            if (message.AssetCode != null && message.hasOwnProperty("AssetCode"))
                object.AssetCode = options.bytes === String ? $util.base64.encode(message.AssetCode, 0, message.AssetCode.length) : options.bytes === Array ? Array.prototype.slice.call(message.AssetCode) : message.AssetCode;
            if (message.Quantities && message.Quantities.length) {
                object.Quantities = [];
                for (var j = 0; j < message.Quantities.length; ++j)
                    object.Quantities[j] = $root.actions.QuantityIndexField.toObject(message.Quantities[j], options);
            }
            if (message.FreezePeriod != null && message.hasOwnProperty("FreezePeriod"))
                if (typeof message.FreezePeriod === "number")
                    object.FreezePeriod = options.longs === String ? String(message.FreezePeriod) : message.FreezePeriod;
                else
                    object.FreezePeriod = options.longs === String ? $util.Long.prototype.toString.call(message.FreezePeriod) : options.longs === Number ? new $util.LongBits(message.FreezePeriod.low >>> 0, message.FreezePeriod.high >>> 0).toNumber(true) : message.FreezePeriod;
            if (message.Timestamp != null && message.hasOwnProperty("Timestamp"))
                if (typeof message.Timestamp === "number")
                    object.Timestamp = options.longs === String ? String(message.Timestamp) : message.Timestamp;
                else
                    object.Timestamp = options.longs === String ? $util.Long.prototype.toString.call(message.Timestamp) : options.longs === Number ? new $util.LongBits(message.Timestamp.low >>> 0, message.Timestamp.high >>> 0).toNumber(true) : message.Timestamp;
            return object;
        };

        /**
         * Converts this Freeze to JSON.
         * @function toJSON
         * @memberof actions.Freeze
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Freeze.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Freeze;
    })();

    actions.Thaw = (function() {

        /**
         * Properties of a Thaw.
         * @memberof actions
         * @interface IThaw
         * @property {Uint8Array|null} [FreezeTxId] Thaw FreezeTxId
         * @property {number|Long|null} [Timestamp] Thaw Timestamp
         */

        /**
         * Constructs a new Thaw.
         * @memberof actions
         * @classdesc Represents a Thaw.
         * @implements IThaw
         * @constructor
         * @param {actions.IThaw=} [properties] Properties to set
         */
        function Thaw(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Thaw FreezeTxId.
         * @member {Uint8Array} FreezeTxId
         * @memberof actions.Thaw
         * @instance
         */
        Thaw.prototype.FreezeTxId = $util.newBuffer([]);

        /**
         * Thaw Timestamp.
         * @member {number|Long} Timestamp
         * @memberof actions.Thaw
         * @instance
         */
        Thaw.prototype.Timestamp = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * Creates a new Thaw instance using the specified properties.
         * @function create
         * @memberof actions.Thaw
         * @static
         * @param {actions.IThaw=} [properties] Properties to set
         * @returns {actions.Thaw} Thaw instance
         */
        Thaw.create = function create(properties) {
            return new Thaw(properties);
        };

        /**
         * Encodes the specified Thaw message. Does not implicitly {@link actions.Thaw.verify|verify} messages.
         * @function encode
         * @memberof actions.Thaw
         * @static
         * @param {actions.IThaw} message Thaw message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Thaw.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.FreezeTxId != null && Object.hasOwnProperty.call(message, "FreezeTxId"))
                writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.FreezeTxId);
            if (message.Timestamp != null && Object.hasOwnProperty.call(message, "Timestamp"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint64(message.Timestamp);
            return writer;
        };

        /**
         * Encodes the specified Thaw message, length delimited. Does not implicitly {@link actions.Thaw.verify|verify} messages.
         * @function encodeDelimited
         * @memberof actions.Thaw
         * @static
         * @param {actions.IThaw} message Thaw message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Thaw.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Thaw message from the specified reader or buffer.
         * @function decode
         * @memberof actions.Thaw
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {actions.Thaw} Thaw
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Thaw.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.actions.Thaw();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.FreezeTxId = reader.bytes();
                    break;
                case 2:
                    message.Timestamp = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Thaw message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof actions.Thaw
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {actions.Thaw} Thaw
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Thaw.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Thaw message.
         * @function verify
         * @memberof actions.Thaw
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Thaw.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.FreezeTxId != null && message.hasOwnProperty("FreezeTxId"))
                if (!(message.FreezeTxId && typeof message.FreezeTxId.length === "number" || $util.isString(message.FreezeTxId)))
                    return "FreezeTxId: buffer expected";
            if (message.Timestamp != null && message.hasOwnProperty("Timestamp"))
                if (!$util.isInteger(message.Timestamp) && !(message.Timestamp && $util.isInteger(message.Timestamp.low) && $util.isInteger(message.Timestamp.high)))
                    return "Timestamp: integer|Long expected";
            return null;
        };

        /**
         * Creates a Thaw message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof actions.Thaw
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {actions.Thaw} Thaw
         */
        Thaw.fromObject = function fromObject(object) {
            if (object instanceof $root.actions.Thaw)
                return object;
            var message = new $root.actions.Thaw();
            if (object.FreezeTxId != null)
                if (typeof object.FreezeTxId === "string")
                    $util.base64.decode(object.FreezeTxId, message.FreezeTxId = $util.newBuffer($util.base64.length(object.FreezeTxId)), 0);
                else if (object.FreezeTxId.length)
                    message.FreezeTxId = object.FreezeTxId;
            if (object.Timestamp != null)
                if ($util.Long)
                    (message.Timestamp = $util.Long.fromValue(object.Timestamp)).unsigned = true;
                else if (typeof object.Timestamp === "string")
                    message.Timestamp = parseInt(object.Timestamp, 10);
                else if (typeof object.Timestamp === "number")
                    message.Timestamp = object.Timestamp;
                else if (typeof object.Timestamp === "object")
                    message.Timestamp = new $util.LongBits(object.Timestamp.low >>> 0, object.Timestamp.high >>> 0).toNumber(true);
            return message;
        };

        /**
         * Creates a plain object from a Thaw message. Also converts values to other types if specified.
         * @function toObject
         * @memberof actions.Thaw
         * @static
         * @param {actions.Thaw} message Thaw
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Thaw.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if (options.bytes === String)
                    object.FreezeTxId = "";
                else {
                    object.FreezeTxId = [];
                    if (options.bytes !== Array)
                        object.FreezeTxId = $util.newBuffer(object.FreezeTxId);
                }
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.Timestamp = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.Timestamp = options.longs === String ? "0" : 0;
            }
            if (message.FreezeTxId != null && message.hasOwnProperty("FreezeTxId"))
                object.FreezeTxId = options.bytes === String ? $util.base64.encode(message.FreezeTxId, 0, message.FreezeTxId.length) : options.bytes === Array ? Array.prototype.slice.call(message.FreezeTxId) : message.FreezeTxId;
            if (message.Timestamp != null && message.hasOwnProperty("Timestamp"))
                if (typeof message.Timestamp === "number")
                    object.Timestamp = options.longs === String ? String(message.Timestamp) : message.Timestamp;
                else
                    object.Timestamp = options.longs === String ? $util.Long.prototype.toString.call(message.Timestamp) : options.longs === Number ? new $util.LongBits(message.Timestamp.low >>> 0, message.Timestamp.high >>> 0).toNumber(true) : message.Timestamp;
            return object;
        };

        /**
         * Converts this Thaw to JSON.
         * @function toJSON
         * @memberof actions.Thaw
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Thaw.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Thaw;
    })();

    actions.Confiscation = (function() {

        /**
         * Properties of a Confiscation.
         * @memberof actions
         * @interface IConfiscation
         * @property {string|null} [AssetType] Confiscation AssetType
         * @property {Uint8Array|null} [AssetCode] Confiscation AssetCode
         * @property {Array.<actions.IQuantityIndexField>|null} [Quantities] Confiscation Quantities
         * @property {number|Long|null} [DepositQty] Confiscation DepositQty
         * @property {number|Long|null} [Timestamp] Confiscation Timestamp
         */

        /**
         * Constructs a new Confiscation.
         * @memberof actions
         * @classdesc Represents a Confiscation.
         * @implements IConfiscation
         * @constructor
         * @param {actions.IConfiscation=} [properties] Properties to set
         */
        function Confiscation(properties) {
            this.Quantities = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Confiscation AssetType.
         * @member {string} AssetType
         * @memberof actions.Confiscation
         * @instance
         */
        Confiscation.prototype.AssetType = "";

        /**
         * Confiscation AssetCode.
         * @member {Uint8Array} AssetCode
         * @memberof actions.Confiscation
         * @instance
         */
        Confiscation.prototype.AssetCode = $util.newBuffer([]);

        /**
         * Confiscation Quantities.
         * @member {Array.<actions.IQuantityIndexField>} Quantities
         * @memberof actions.Confiscation
         * @instance
         */
        Confiscation.prototype.Quantities = $util.emptyArray;

        /**
         * Confiscation DepositQty.
         * @member {number|Long} DepositQty
         * @memberof actions.Confiscation
         * @instance
         */
        Confiscation.prototype.DepositQty = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * Confiscation Timestamp.
         * @member {number|Long} Timestamp
         * @memberof actions.Confiscation
         * @instance
         */
        Confiscation.prototype.Timestamp = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * Creates a new Confiscation instance using the specified properties.
         * @function create
         * @memberof actions.Confiscation
         * @static
         * @param {actions.IConfiscation=} [properties] Properties to set
         * @returns {actions.Confiscation} Confiscation instance
         */
        Confiscation.create = function create(properties) {
            return new Confiscation(properties);
        };

        /**
         * Encodes the specified Confiscation message. Does not implicitly {@link actions.Confiscation.verify|verify} messages.
         * @function encode
         * @memberof actions.Confiscation
         * @static
         * @param {actions.IConfiscation} message Confiscation message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Confiscation.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.AssetType != null && Object.hasOwnProperty.call(message, "AssetType"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.AssetType);
            if (message.AssetCode != null && Object.hasOwnProperty.call(message, "AssetCode"))
                writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.AssetCode);
            if (message.Quantities != null && message.Quantities.length)
                for (var i = 0; i < message.Quantities.length; ++i)
                    $root.actions.QuantityIndexField.encode(message.Quantities[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            if (message.DepositQty != null && Object.hasOwnProperty.call(message, "DepositQty"))
                writer.uint32(/* id 4, wireType 0 =*/32).uint64(message.DepositQty);
            if (message.Timestamp != null && Object.hasOwnProperty.call(message, "Timestamp"))
                writer.uint32(/* id 5, wireType 0 =*/40).uint64(message.Timestamp);
            return writer;
        };

        /**
         * Encodes the specified Confiscation message, length delimited. Does not implicitly {@link actions.Confiscation.verify|verify} messages.
         * @function encodeDelimited
         * @memberof actions.Confiscation
         * @static
         * @param {actions.IConfiscation} message Confiscation message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Confiscation.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Confiscation message from the specified reader or buffer.
         * @function decode
         * @memberof actions.Confiscation
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {actions.Confiscation} Confiscation
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Confiscation.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.actions.Confiscation();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.AssetType = reader.string();
                    break;
                case 2:
                    message.AssetCode = reader.bytes();
                    break;
                case 3:
                    if (!(message.Quantities && message.Quantities.length))
                        message.Quantities = [];
                    message.Quantities.push($root.actions.QuantityIndexField.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.DepositQty = reader.uint64();
                    break;
                case 5:
                    message.Timestamp = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Confiscation message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof actions.Confiscation
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {actions.Confiscation} Confiscation
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Confiscation.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Confiscation message.
         * @function verify
         * @memberof actions.Confiscation
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Confiscation.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.AssetType != null && message.hasOwnProperty("AssetType"))
                if (!$util.isString(message.AssetType))
                    return "AssetType: string expected";
            if (message.AssetCode != null && message.hasOwnProperty("AssetCode"))
                if (!(message.AssetCode && typeof message.AssetCode.length === "number" || $util.isString(message.AssetCode)))
                    return "AssetCode: buffer expected";
            if (message.Quantities != null && message.hasOwnProperty("Quantities")) {
                if (!Array.isArray(message.Quantities))
                    return "Quantities: array expected";
                for (var i = 0; i < message.Quantities.length; ++i) {
                    var error = $root.actions.QuantityIndexField.verify(message.Quantities[i]);
                    if (error)
                        return "Quantities." + error;
                }
            }
            if (message.DepositQty != null && message.hasOwnProperty("DepositQty"))
                if (!$util.isInteger(message.DepositQty) && !(message.DepositQty && $util.isInteger(message.DepositQty.low) && $util.isInteger(message.DepositQty.high)))
                    return "DepositQty: integer|Long expected";
            if (message.Timestamp != null && message.hasOwnProperty("Timestamp"))
                if (!$util.isInteger(message.Timestamp) && !(message.Timestamp && $util.isInteger(message.Timestamp.low) && $util.isInteger(message.Timestamp.high)))
                    return "Timestamp: integer|Long expected";
            return null;
        };

        /**
         * Creates a Confiscation message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof actions.Confiscation
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {actions.Confiscation} Confiscation
         */
        Confiscation.fromObject = function fromObject(object) {
            if (object instanceof $root.actions.Confiscation)
                return object;
            var message = new $root.actions.Confiscation();
            if (object.AssetType != null)
                message.AssetType = String(object.AssetType);
            if (object.AssetCode != null)
                if (typeof object.AssetCode === "string")
                    $util.base64.decode(object.AssetCode, message.AssetCode = $util.newBuffer($util.base64.length(object.AssetCode)), 0);
                else if (object.AssetCode.length)
                    message.AssetCode = object.AssetCode;
            if (object.Quantities) {
                if (!Array.isArray(object.Quantities))
                    throw TypeError(".actions.Confiscation.Quantities: array expected");
                message.Quantities = [];
                for (var i = 0; i < object.Quantities.length; ++i) {
                    if (typeof object.Quantities[i] !== "object")
                        throw TypeError(".actions.Confiscation.Quantities: object expected");
                    message.Quantities[i] = $root.actions.QuantityIndexField.fromObject(object.Quantities[i]);
                }
            }
            if (object.DepositQty != null)
                if ($util.Long)
                    (message.DepositQty = $util.Long.fromValue(object.DepositQty)).unsigned = true;
                else if (typeof object.DepositQty === "string")
                    message.DepositQty = parseInt(object.DepositQty, 10);
                else if (typeof object.DepositQty === "number")
                    message.DepositQty = object.DepositQty;
                else if (typeof object.DepositQty === "object")
                    message.DepositQty = new $util.LongBits(object.DepositQty.low >>> 0, object.DepositQty.high >>> 0).toNumber(true);
            if (object.Timestamp != null)
                if ($util.Long)
                    (message.Timestamp = $util.Long.fromValue(object.Timestamp)).unsigned = true;
                else if (typeof object.Timestamp === "string")
                    message.Timestamp = parseInt(object.Timestamp, 10);
                else if (typeof object.Timestamp === "number")
                    message.Timestamp = object.Timestamp;
                else if (typeof object.Timestamp === "object")
                    message.Timestamp = new $util.LongBits(object.Timestamp.low >>> 0, object.Timestamp.high >>> 0).toNumber(true);
            return message;
        };

        /**
         * Creates a plain object from a Confiscation message. Also converts values to other types if specified.
         * @function toObject
         * @memberof actions.Confiscation
         * @static
         * @param {actions.Confiscation} message Confiscation
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Confiscation.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.Quantities = [];
            if (options.defaults) {
                object.AssetType = "";
                if (options.bytes === String)
                    object.AssetCode = "";
                else {
                    object.AssetCode = [];
                    if (options.bytes !== Array)
                        object.AssetCode = $util.newBuffer(object.AssetCode);
                }
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.DepositQty = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.DepositQty = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.Timestamp = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.Timestamp = options.longs === String ? "0" : 0;
            }
            if (message.AssetType != null && message.hasOwnProperty("AssetType"))
                object.AssetType = message.AssetType;
            if (message.AssetCode != null && message.hasOwnProperty("AssetCode"))
                object.AssetCode = options.bytes === String ? $util.base64.encode(message.AssetCode, 0, message.AssetCode.length) : options.bytes === Array ? Array.prototype.slice.call(message.AssetCode) : message.AssetCode;
            if (message.Quantities && message.Quantities.length) {
                object.Quantities = [];
                for (var j = 0; j < message.Quantities.length; ++j)
                    object.Quantities[j] = $root.actions.QuantityIndexField.toObject(message.Quantities[j], options);
            }
            if (message.DepositQty != null && message.hasOwnProperty("DepositQty"))
                if (typeof message.DepositQty === "number")
                    object.DepositQty = options.longs === String ? String(message.DepositQty) : message.DepositQty;
                else
                    object.DepositQty = options.longs === String ? $util.Long.prototype.toString.call(message.DepositQty) : options.longs === Number ? new $util.LongBits(message.DepositQty.low >>> 0, message.DepositQty.high >>> 0).toNumber(true) : message.DepositQty;
            if (message.Timestamp != null && message.hasOwnProperty("Timestamp"))
                if (typeof message.Timestamp === "number")
                    object.Timestamp = options.longs === String ? String(message.Timestamp) : message.Timestamp;
                else
                    object.Timestamp = options.longs === String ? $util.Long.prototype.toString.call(message.Timestamp) : options.longs === Number ? new $util.LongBits(message.Timestamp.low >>> 0, message.Timestamp.high >>> 0).toNumber(true) : message.Timestamp;
            return object;
        };

        /**
         * Converts this Confiscation to JSON.
         * @function toJSON
         * @memberof actions.Confiscation
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Confiscation.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Confiscation;
    })();

    actions.Reconciliation = (function() {

        /**
         * Properties of a Reconciliation.
         * @memberof actions
         * @interface IReconciliation
         * @property {string|null} [AssetType] Reconciliation AssetType
         * @property {Uint8Array|null} [AssetCode] Reconciliation AssetCode
         * @property {Array.<actions.IQuantityIndexField>|null} [Quantities] Reconciliation Quantities
         * @property {number|Long|null} [Timestamp] Reconciliation Timestamp
         */

        /**
         * Constructs a new Reconciliation.
         * @memberof actions
         * @classdesc Represents a Reconciliation.
         * @implements IReconciliation
         * @constructor
         * @param {actions.IReconciliation=} [properties] Properties to set
         */
        function Reconciliation(properties) {
            this.Quantities = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Reconciliation AssetType.
         * @member {string} AssetType
         * @memberof actions.Reconciliation
         * @instance
         */
        Reconciliation.prototype.AssetType = "";

        /**
         * Reconciliation AssetCode.
         * @member {Uint8Array} AssetCode
         * @memberof actions.Reconciliation
         * @instance
         */
        Reconciliation.prototype.AssetCode = $util.newBuffer([]);

        /**
         * Reconciliation Quantities.
         * @member {Array.<actions.IQuantityIndexField>} Quantities
         * @memberof actions.Reconciliation
         * @instance
         */
        Reconciliation.prototype.Quantities = $util.emptyArray;

        /**
         * Reconciliation Timestamp.
         * @member {number|Long} Timestamp
         * @memberof actions.Reconciliation
         * @instance
         */
        Reconciliation.prototype.Timestamp = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * Creates a new Reconciliation instance using the specified properties.
         * @function create
         * @memberof actions.Reconciliation
         * @static
         * @param {actions.IReconciliation=} [properties] Properties to set
         * @returns {actions.Reconciliation} Reconciliation instance
         */
        Reconciliation.create = function create(properties) {
            return new Reconciliation(properties);
        };

        /**
         * Encodes the specified Reconciliation message. Does not implicitly {@link actions.Reconciliation.verify|verify} messages.
         * @function encode
         * @memberof actions.Reconciliation
         * @static
         * @param {actions.IReconciliation} message Reconciliation message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Reconciliation.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.AssetType != null && Object.hasOwnProperty.call(message, "AssetType"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.AssetType);
            if (message.AssetCode != null && Object.hasOwnProperty.call(message, "AssetCode"))
                writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.AssetCode);
            if (message.Quantities != null && message.Quantities.length)
                for (var i = 0; i < message.Quantities.length; ++i)
                    $root.actions.QuantityIndexField.encode(message.Quantities[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            if (message.Timestamp != null && Object.hasOwnProperty.call(message, "Timestamp"))
                writer.uint32(/* id 4, wireType 0 =*/32).uint64(message.Timestamp);
            return writer;
        };

        /**
         * Encodes the specified Reconciliation message, length delimited. Does not implicitly {@link actions.Reconciliation.verify|verify} messages.
         * @function encodeDelimited
         * @memberof actions.Reconciliation
         * @static
         * @param {actions.IReconciliation} message Reconciliation message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Reconciliation.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Reconciliation message from the specified reader or buffer.
         * @function decode
         * @memberof actions.Reconciliation
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {actions.Reconciliation} Reconciliation
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Reconciliation.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.actions.Reconciliation();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.AssetType = reader.string();
                    break;
                case 2:
                    message.AssetCode = reader.bytes();
                    break;
                case 3:
                    if (!(message.Quantities && message.Quantities.length))
                        message.Quantities = [];
                    message.Quantities.push($root.actions.QuantityIndexField.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.Timestamp = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Reconciliation message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof actions.Reconciliation
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {actions.Reconciliation} Reconciliation
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Reconciliation.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Reconciliation message.
         * @function verify
         * @memberof actions.Reconciliation
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Reconciliation.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.AssetType != null && message.hasOwnProperty("AssetType"))
                if (!$util.isString(message.AssetType))
                    return "AssetType: string expected";
            if (message.AssetCode != null && message.hasOwnProperty("AssetCode"))
                if (!(message.AssetCode && typeof message.AssetCode.length === "number" || $util.isString(message.AssetCode)))
                    return "AssetCode: buffer expected";
            if (message.Quantities != null && message.hasOwnProperty("Quantities")) {
                if (!Array.isArray(message.Quantities))
                    return "Quantities: array expected";
                for (var i = 0; i < message.Quantities.length; ++i) {
                    var error = $root.actions.QuantityIndexField.verify(message.Quantities[i]);
                    if (error)
                        return "Quantities." + error;
                }
            }
            if (message.Timestamp != null && message.hasOwnProperty("Timestamp"))
                if (!$util.isInteger(message.Timestamp) && !(message.Timestamp && $util.isInteger(message.Timestamp.low) && $util.isInteger(message.Timestamp.high)))
                    return "Timestamp: integer|Long expected";
            return null;
        };

        /**
         * Creates a Reconciliation message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof actions.Reconciliation
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {actions.Reconciliation} Reconciliation
         */
        Reconciliation.fromObject = function fromObject(object) {
            if (object instanceof $root.actions.Reconciliation)
                return object;
            var message = new $root.actions.Reconciliation();
            if (object.AssetType != null)
                message.AssetType = String(object.AssetType);
            if (object.AssetCode != null)
                if (typeof object.AssetCode === "string")
                    $util.base64.decode(object.AssetCode, message.AssetCode = $util.newBuffer($util.base64.length(object.AssetCode)), 0);
                else if (object.AssetCode.length)
                    message.AssetCode = object.AssetCode;
            if (object.Quantities) {
                if (!Array.isArray(object.Quantities))
                    throw TypeError(".actions.Reconciliation.Quantities: array expected");
                message.Quantities = [];
                for (var i = 0; i < object.Quantities.length; ++i) {
                    if (typeof object.Quantities[i] !== "object")
                        throw TypeError(".actions.Reconciliation.Quantities: object expected");
                    message.Quantities[i] = $root.actions.QuantityIndexField.fromObject(object.Quantities[i]);
                }
            }
            if (object.Timestamp != null)
                if ($util.Long)
                    (message.Timestamp = $util.Long.fromValue(object.Timestamp)).unsigned = true;
                else if (typeof object.Timestamp === "string")
                    message.Timestamp = parseInt(object.Timestamp, 10);
                else if (typeof object.Timestamp === "number")
                    message.Timestamp = object.Timestamp;
                else if (typeof object.Timestamp === "object")
                    message.Timestamp = new $util.LongBits(object.Timestamp.low >>> 0, object.Timestamp.high >>> 0).toNumber(true);
            return message;
        };

        /**
         * Creates a plain object from a Reconciliation message. Also converts values to other types if specified.
         * @function toObject
         * @memberof actions.Reconciliation
         * @static
         * @param {actions.Reconciliation} message Reconciliation
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Reconciliation.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.Quantities = [];
            if (options.defaults) {
                object.AssetType = "";
                if (options.bytes === String)
                    object.AssetCode = "";
                else {
                    object.AssetCode = [];
                    if (options.bytes !== Array)
                        object.AssetCode = $util.newBuffer(object.AssetCode);
                }
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.Timestamp = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.Timestamp = options.longs === String ? "0" : 0;
            }
            if (message.AssetType != null && message.hasOwnProperty("AssetType"))
                object.AssetType = message.AssetType;
            if (message.AssetCode != null && message.hasOwnProperty("AssetCode"))
                object.AssetCode = options.bytes === String ? $util.base64.encode(message.AssetCode, 0, message.AssetCode.length) : options.bytes === Array ? Array.prototype.slice.call(message.AssetCode) : message.AssetCode;
            if (message.Quantities && message.Quantities.length) {
                object.Quantities = [];
                for (var j = 0; j < message.Quantities.length; ++j)
                    object.Quantities[j] = $root.actions.QuantityIndexField.toObject(message.Quantities[j], options);
            }
            if (message.Timestamp != null && message.hasOwnProperty("Timestamp"))
                if (typeof message.Timestamp === "number")
                    object.Timestamp = options.longs === String ? String(message.Timestamp) : message.Timestamp;
                else
                    object.Timestamp = options.longs === String ? $util.Long.prototype.toString.call(message.Timestamp) : options.longs === Number ? new $util.LongBits(message.Timestamp.low >>> 0, message.Timestamp.high >>> 0).toNumber(true) : message.Timestamp;
            return object;
        };

        /**
         * Converts this Reconciliation to JSON.
         * @function toJSON
         * @memberof actions.Reconciliation
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Reconciliation.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Reconciliation;
    })();

    actions.Establishment = (function() {

        /**
         * Properties of an Establishment.
         * @memberof actions
         * @interface IEstablishment
         * @property {string|null} [Message] Establishment Message
         */

        /**
         * Constructs a new Establishment.
         * @memberof actions
         * @classdesc Represents an Establishment.
         * @implements IEstablishment
         * @constructor
         * @param {actions.IEstablishment=} [properties] Properties to set
         */
        function Establishment(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Establishment Message.
         * @member {string} Message
         * @memberof actions.Establishment
         * @instance
         */
        Establishment.prototype.Message = "";

        /**
         * Creates a new Establishment instance using the specified properties.
         * @function create
         * @memberof actions.Establishment
         * @static
         * @param {actions.IEstablishment=} [properties] Properties to set
         * @returns {actions.Establishment} Establishment instance
         */
        Establishment.create = function create(properties) {
            return new Establishment(properties);
        };

        /**
         * Encodes the specified Establishment message. Does not implicitly {@link actions.Establishment.verify|verify} messages.
         * @function encode
         * @memberof actions.Establishment
         * @static
         * @param {actions.IEstablishment} message Establishment message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Establishment.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Message != null && Object.hasOwnProperty.call(message, "Message"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.Message);
            return writer;
        };

        /**
         * Encodes the specified Establishment message, length delimited. Does not implicitly {@link actions.Establishment.verify|verify} messages.
         * @function encodeDelimited
         * @memberof actions.Establishment
         * @static
         * @param {actions.IEstablishment} message Establishment message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Establishment.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an Establishment message from the specified reader or buffer.
         * @function decode
         * @memberof actions.Establishment
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {actions.Establishment} Establishment
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Establishment.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.actions.Establishment();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.Message = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an Establishment message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof actions.Establishment
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {actions.Establishment} Establishment
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Establishment.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an Establishment message.
         * @function verify
         * @memberof actions.Establishment
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Establishment.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.Message != null && message.hasOwnProperty("Message"))
                if (!$util.isString(message.Message))
                    return "Message: string expected";
            return null;
        };

        /**
         * Creates an Establishment message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof actions.Establishment
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {actions.Establishment} Establishment
         */
        Establishment.fromObject = function fromObject(object) {
            if (object instanceof $root.actions.Establishment)
                return object;
            var message = new $root.actions.Establishment();
            if (object.Message != null)
                message.Message = String(object.Message);
            return message;
        };

        /**
         * Creates a plain object from an Establishment message. Also converts values to other types if specified.
         * @function toObject
         * @memberof actions.Establishment
         * @static
         * @param {actions.Establishment} message Establishment
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Establishment.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.Message = "";
            if (message.Message != null && message.hasOwnProperty("Message"))
                object.Message = message.Message;
            return object;
        };

        /**
         * Converts this Establishment to JSON.
         * @function toJSON
         * @memberof actions.Establishment
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Establishment.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Establishment;
    })();

    actions.Addition = (function() {

        /**
         * Properties of an Addition.
         * @memberof actions
         * @interface IAddition
         * @property {string|null} [Message] Addition Message
         */

        /**
         * Constructs a new Addition.
         * @memberof actions
         * @classdesc Represents an Addition.
         * @implements IAddition
         * @constructor
         * @param {actions.IAddition=} [properties] Properties to set
         */
        function Addition(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Addition Message.
         * @member {string} Message
         * @memberof actions.Addition
         * @instance
         */
        Addition.prototype.Message = "";

        /**
         * Creates a new Addition instance using the specified properties.
         * @function create
         * @memberof actions.Addition
         * @static
         * @param {actions.IAddition=} [properties] Properties to set
         * @returns {actions.Addition} Addition instance
         */
        Addition.create = function create(properties) {
            return new Addition(properties);
        };

        /**
         * Encodes the specified Addition message. Does not implicitly {@link actions.Addition.verify|verify} messages.
         * @function encode
         * @memberof actions.Addition
         * @static
         * @param {actions.IAddition} message Addition message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Addition.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Message != null && Object.hasOwnProperty.call(message, "Message"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.Message);
            return writer;
        };

        /**
         * Encodes the specified Addition message, length delimited. Does not implicitly {@link actions.Addition.verify|verify} messages.
         * @function encodeDelimited
         * @memberof actions.Addition
         * @static
         * @param {actions.IAddition} message Addition message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Addition.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an Addition message from the specified reader or buffer.
         * @function decode
         * @memberof actions.Addition
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {actions.Addition} Addition
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Addition.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.actions.Addition();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.Message = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an Addition message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof actions.Addition
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {actions.Addition} Addition
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Addition.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an Addition message.
         * @function verify
         * @memberof actions.Addition
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Addition.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.Message != null && message.hasOwnProperty("Message"))
                if (!$util.isString(message.Message))
                    return "Message: string expected";
            return null;
        };

        /**
         * Creates an Addition message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof actions.Addition
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {actions.Addition} Addition
         */
        Addition.fromObject = function fromObject(object) {
            if (object instanceof $root.actions.Addition)
                return object;
            var message = new $root.actions.Addition();
            if (object.Message != null)
                message.Message = String(object.Message);
            return message;
        };

        /**
         * Creates a plain object from an Addition message. Also converts values to other types if specified.
         * @function toObject
         * @memberof actions.Addition
         * @static
         * @param {actions.Addition} message Addition
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Addition.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.Message = "";
            if (message.Message != null && message.hasOwnProperty("Message"))
                object.Message = message.Message;
            return object;
        };

        /**
         * Converts this Addition to JSON.
         * @function toJSON
         * @memberof actions.Addition
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Addition.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Addition;
    })();

    actions.Alteration = (function() {

        /**
         * Properties of an Alteration.
         * @memberof actions
         * @interface IAlteration
         * @property {Uint8Array|null} [EntryTxID] Alteration EntryTxID
         * @property {string|null} [Message] Alteration Message
         */

        /**
         * Constructs a new Alteration.
         * @memberof actions
         * @classdesc Represents an Alteration.
         * @implements IAlteration
         * @constructor
         * @param {actions.IAlteration=} [properties] Properties to set
         */
        function Alteration(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Alteration EntryTxID.
         * @member {Uint8Array} EntryTxID
         * @memberof actions.Alteration
         * @instance
         */
        Alteration.prototype.EntryTxID = $util.newBuffer([]);

        /**
         * Alteration Message.
         * @member {string} Message
         * @memberof actions.Alteration
         * @instance
         */
        Alteration.prototype.Message = "";

        /**
         * Creates a new Alteration instance using the specified properties.
         * @function create
         * @memberof actions.Alteration
         * @static
         * @param {actions.IAlteration=} [properties] Properties to set
         * @returns {actions.Alteration} Alteration instance
         */
        Alteration.create = function create(properties) {
            return new Alteration(properties);
        };

        /**
         * Encodes the specified Alteration message. Does not implicitly {@link actions.Alteration.verify|verify} messages.
         * @function encode
         * @memberof actions.Alteration
         * @static
         * @param {actions.IAlteration} message Alteration message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Alteration.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.EntryTxID != null && Object.hasOwnProperty.call(message, "EntryTxID"))
                writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.EntryTxID);
            if (message.Message != null && Object.hasOwnProperty.call(message, "Message"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.Message);
            return writer;
        };

        /**
         * Encodes the specified Alteration message, length delimited. Does not implicitly {@link actions.Alteration.verify|verify} messages.
         * @function encodeDelimited
         * @memberof actions.Alteration
         * @static
         * @param {actions.IAlteration} message Alteration message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Alteration.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an Alteration message from the specified reader or buffer.
         * @function decode
         * @memberof actions.Alteration
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {actions.Alteration} Alteration
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Alteration.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.actions.Alteration();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.EntryTxID = reader.bytes();
                    break;
                case 2:
                    message.Message = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an Alteration message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof actions.Alteration
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {actions.Alteration} Alteration
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Alteration.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an Alteration message.
         * @function verify
         * @memberof actions.Alteration
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Alteration.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.EntryTxID != null && message.hasOwnProperty("EntryTxID"))
                if (!(message.EntryTxID && typeof message.EntryTxID.length === "number" || $util.isString(message.EntryTxID)))
                    return "EntryTxID: buffer expected";
            if (message.Message != null && message.hasOwnProperty("Message"))
                if (!$util.isString(message.Message))
                    return "Message: string expected";
            return null;
        };

        /**
         * Creates an Alteration message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof actions.Alteration
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {actions.Alteration} Alteration
         */
        Alteration.fromObject = function fromObject(object) {
            if (object instanceof $root.actions.Alteration)
                return object;
            var message = new $root.actions.Alteration();
            if (object.EntryTxID != null)
                if (typeof object.EntryTxID === "string")
                    $util.base64.decode(object.EntryTxID, message.EntryTxID = $util.newBuffer($util.base64.length(object.EntryTxID)), 0);
                else if (object.EntryTxID.length)
                    message.EntryTxID = object.EntryTxID;
            if (object.Message != null)
                message.Message = String(object.Message);
            return message;
        };

        /**
         * Creates a plain object from an Alteration message. Also converts values to other types if specified.
         * @function toObject
         * @memberof actions.Alteration
         * @static
         * @param {actions.Alteration} message Alteration
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Alteration.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if (options.bytes === String)
                    object.EntryTxID = "";
                else {
                    object.EntryTxID = [];
                    if (options.bytes !== Array)
                        object.EntryTxID = $util.newBuffer(object.EntryTxID);
                }
                object.Message = "";
            }
            if (message.EntryTxID != null && message.hasOwnProperty("EntryTxID"))
                object.EntryTxID = options.bytes === String ? $util.base64.encode(message.EntryTxID, 0, message.EntryTxID.length) : options.bytes === Array ? Array.prototype.slice.call(message.EntryTxID) : message.EntryTxID;
            if (message.Message != null && message.hasOwnProperty("Message"))
                object.Message = message.Message;
            return object;
        };

        /**
         * Converts this Alteration to JSON.
         * @function toJSON
         * @memberof actions.Alteration
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Alteration.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Alteration;
    })();

    actions.Removal = (function() {

        /**
         * Properties of a Removal.
         * @memberof actions
         * @interface IRemoval
         * @property {Uint8Array|null} [EntryTxID] Removal EntryTxID
         * @property {string|null} [Message] Removal Message
         */

        /**
         * Constructs a new Removal.
         * @memberof actions
         * @classdesc Represents a Removal.
         * @implements IRemoval
         * @constructor
         * @param {actions.IRemoval=} [properties] Properties to set
         */
        function Removal(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Removal EntryTxID.
         * @member {Uint8Array} EntryTxID
         * @memberof actions.Removal
         * @instance
         */
        Removal.prototype.EntryTxID = $util.newBuffer([]);

        /**
         * Removal Message.
         * @member {string} Message
         * @memberof actions.Removal
         * @instance
         */
        Removal.prototype.Message = "";

        /**
         * Creates a new Removal instance using the specified properties.
         * @function create
         * @memberof actions.Removal
         * @static
         * @param {actions.IRemoval=} [properties] Properties to set
         * @returns {actions.Removal} Removal instance
         */
        Removal.create = function create(properties) {
            return new Removal(properties);
        };

        /**
         * Encodes the specified Removal message. Does not implicitly {@link actions.Removal.verify|verify} messages.
         * @function encode
         * @memberof actions.Removal
         * @static
         * @param {actions.IRemoval} message Removal message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Removal.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.EntryTxID != null && Object.hasOwnProperty.call(message, "EntryTxID"))
                writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.EntryTxID);
            if (message.Message != null && Object.hasOwnProperty.call(message, "Message"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.Message);
            return writer;
        };

        /**
         * Encodes the specified Removal message, length delimited. Does not implicitly {@link actions.Removal.verify|verify} messages.
         * @function encodeDelimited
         * @memberof actions.Removal
         * @static
         * @param {actions.IRemoval} message Removal message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Removal.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Removal message from the specified reader or buffer.
         * @function decode
         * @memberof actions.Removal
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {actions.Removal} Removal
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Removal.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.actions.Removal();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.EntryTxID = reader.bytes();
                    break;
                case 2:
                    message.Message = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Removal message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof actions.Removal
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {actions.Removal} Removal
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Removal.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Removal message.
         * @function verify
         * @memberof actions.Removal
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Removal.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.EntryTxID != null && message.hasOwnProperty("EntryTxID"))
                if (!(message.EntryTxID && typeof message.EntryTxID.length === "number" || $util.isString(message.EntryTxID)))
                    return "EntryTxID: buffer expected";
            if (message.Message != null && message.hasOwnProperty("Message"))
                if (!$util.isString(message.Message))
                    return "Message: string expected";
            return null;
        };

        /**
         * Creates a Removal message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof actions.Removal
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {actions.Removal} Removal
         */
        Removal.fromObject = function fromObject(object) {
            if (object instanceof $root.actions.Removal)
                return object;
            var message = new $root.actions.Removal();
            if (object.EntryTxID != null)
                if (typeof object.EntryTxID === "string")
                    $util.base64.decode(object.EntryTxID, message.EntryTxID = $util.newBuffer($util.base64.length(object.EntryTxID)), 0);
                else if (object.EntryTxID.length)
                    message.EntryTxID = object.EntryTxID;
            if (object.Message != null)
                message.Message = String(object.Message);
            return message;
        };

        /**
         * Creates a plain object from a Removal message. Also converts values to other types if specified.
         * @function toObject
         * @memberof actions.Removal
         * @static
         * @param {actions.Removal} message Removal
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Removal.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if (options.bytes === String)
                    object.EntryTxID = "";
                else {
                    object.EntryTxID = [];
                    if (options.bytes !== Array)
                        object.EntryTxID = $util.newBuffer(object.EntryTxID);
                }
                object.Message = "";
            }
            if (message.EntryTxID != null && message.hasOwnProperty("EntryTxID"))
                object.EntryTxID = options.bytes === String ? $util.base64.encode(message.EntryTxID, 0, message.EntryTxID.length) : options.bytes === Array ? Array.prototype.slice.call(message.EntryTxID) : message.EntryTxID;
            if (message.Message != null && message.hasOwnProperty("Message"))
                object.Message = message.Message;
            return object;
        };

        /**
         * Converts this Removal to JSON.
         * @function toJSON
         * @memberof actions.Removal
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Removal.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Removal;
    })();

    actions.Message = (function() {

        /**
         * Properties of a Message.
         * @memberof actions
         * @interface IMessage
         * @property {Array.<number>|null} [SenderIndexes] Message SenderIndexes
         * @property {Array.<number>|null} [ReceiverIndexes] Message ReceiverIndexes
         * @property {number|null} [MessageCode] Message MessageCode
         * @property {Uint8Array|null} [MessagePayload] Message MessagePayload
         */

        /**
         * Constructs a new Message.
         * @memberof actions
         * @classdesc Represents a Message.
         * @implements IMessage
         * @constructor
         * @param {actions.IMessage=} [properties] Properties to set
         */
        function Message(properties) {
            this.SenderIndexes = [];
            this.ReceiverIndexes = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Message SenderIndexes.
         * @member {Array.<number>} SenderIndexes
         * @memberof actions.Message
         * @instance
         */
        Message.prototype.SenderIndexes = $util.emptyArray;

        /**
         * Message ReceiverIndexes.
         * @member {Array.<number>} ReceiverIndexes
         * @memberof actions.Message
         * @instance
         */
        Message.prototype.ReceiverIndexes = $util.emptyArray;

        /**
         * Message MessageCode.
         * @member {number} MessageCode
         * @memberof actions.Message
         * @instance
         */
        Message.prototype.MessageCode = 0;

        /**
         * Message MessagePayload.
         * @member {Uint8Array} MessagePayload
         * @memberof actions.Message
         * @instance
         */
        Message.prototype.MessagePayload = $util.newBuffer([]);

        /**
         * Creates a new Message instance using the specified properties.
         * @function create
         * @memberof actions.Message
         * @static
         * @param {actions.IMessage=} [properties] Properties to set
         * @returns {actions.Message} Message instance
         */
        Message.create = function create(properties) {
            return new Message(properties);
        };

        /**
         * Encodes the specified Message message. Does not implicitly {@link actions.Message.verify|verify} messages.
         * @function encode
         * @memberof actions.Message
         * @static
         * @param {actions.IMessage} message Message message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Message.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.SenderIndexes != null && message.SenderIndexes.length) {
                writer.uint32(/* id 1, wireType 2 =*/10).fork();
                for (var i = 0; i < message.SenderIndexes.length; ++i)
                    writer.uint32(message.SenderIndexes[i]);
                writer.ldelim();
            }
            if (message.ReceiverIndexes != null && message.ReceiverIndexes.length) {
                writer.uint32(/* id 2, wireType 2 =*/18).fork();
                for (var i = 0; i < message.ReceiverIndexes.length; ++i)
                    writer.uint32(message.ReceiverIndexes[i]);
                writer.ldelim();
            }
            if (message.MessageCode != null && Object.hasOwnProperty.call(message, "MessageCode"))
                writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.MessageCode);
            if (message.MessagePayload != null && Object.hasOwnProperty.call(message, "MessagePayload"))
                writer.uint32(/* id 4, wireType 2 =*/34).bytes(message.MessagePayload);
            return writer;
        };

        /**
         * Encodes the specified Message message, length delimited. Does not implicitly {@link actions.Message.verify|verify} messages.
         * @function encodeDelimited
         * @memberof actions.Message
         * @static
         * @param {actions.IMessage} message Message message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Message.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Message message from the specified reader or buffer.
         * @function decode
         * @memberof actions.Message
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {actions.Message} Message
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Message.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.actions.Message();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.SenderIndexes && message.SenderIndexes.length))
                        message.SenderIndexes = [];
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.SenderIndexes.push(reader.uint32());
                    } else
                        message.SenderIndexes.push(reader.uint32());
                    break;
                case 2:
                    if (!(message.ReceiverIndexes && message.ReceiverIndexes.length))
                        message.ReceiverIndexes = [];
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.ReceiverIndexes.push(reader.uint32());
                    } else
                        message.ReceiverIndexes.push(reader.uint32());
                    break;
                case 3:
                    message.MessageCode = reader.uint32();
                    break;
                case 4:
                    message.MessagePayload = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Message message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof actions.Message
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {actions.Message} Message
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Message.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Message message.
         * @function verify
         * @memberof actions.Message
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Message.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.SenderIndexes != null && message.hasOwnProperty("SenderIndexes")) {
                if (!Array.isArray(message.SenderIndexes))
                    return "SenderIndexes: array expected";
                for (var i = 0; i < message.SenderIndexes.length; ++i)
                    if (!$util.isInteger(message.SenderIndexes[i]))
                        return "SenderIndexes: integer[] expected";
            }
            if (message.ReceiverIndexes != null && message.hasOwnProperty("ReceiverIndexes")) {
                if (!Array.isArray(message.ReceiverIndexes))
                    return "ReceiverIndexes: array expected";
                for (var i = 0; i < message.ReceiverIndexes.length; ++i)
                    if (!$util.isInteger(message.ReceiverIndexes[i]))
                        return "ReceiverIndexes: integer[] expected";
            }
            if (message.MessageCode != null && message.hasOwnProperty("MessageCode"))
                if (!$util.isInteger(message.MessageCode))
                    return "MessageCode: integer expected";
            if (message.MessagePayload != null && message.hasOwnProperty("MessagePayload"))
                if (!(message.MessagePayload && typeof message.MessagePayload.length === "number" || $util.isString(message.MessagePayload)))
                    return "MessagePayload: buffer expected";
            return null;
        };

        /**
         * Creates a Message message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof actions.Message
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {actions.Message} Message
         */
        Message.fromObject = function fromObject(object) {
            if (object instanceof $root.actions.Message)
                return object;
            var message = new $root.actions.Message();
            if (object.SenderIndexes) {
                if (!Array.isArray(object.SenderIndexes))
                    throw TypeError(".actions.Message.SenderIndexes: array expected");
                message.SenderIndexes = [];
                for (var i = 0; i < object.SenderIndexes.length; ++i)
                    message.SenderIndexes[i] = object.SenderIndexes[i] >>> 0;
            }
            if (object.ReceiverIndexes) {
                if (!Array.isArray(object.ReceiverIndexes))
                    throw TypeError(".actions.Message.ReceiverIndexes: array expected");
                message.ReceiverIndexes = [];
                for (var i = 0; i < object.ReceiverIndexes.length; ++i)
                    message.ReceiverIndexes[i] = object.ReceiverIndexes[i] >>> 0;
            }
            if (object.MessageCode != null)
                message.MessageCode = object.MessageCode >>> 0;
            if (object.MessagePayload != null)
                if (typeof object.MessagePayload === "string")
                    $util.base64.decode(object.MessagePayload, message.MessagePayload = $util.newBuffer($util.base64.length(object.MessagePayload)), 0);
                else if (object.MessagePayload.length)
                    message.MessagePayload = object.MessagePayload;
            return message;
        };

        /**
         * Creates a plain object from a Message message. Also converts values to other types if specified.
         * @function toObject
         * @memberof actions.Message
         * @static
         * @param {actions.Message} message Message
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Message.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults) {
                object.SenderIndexes = [];
                object.ReceiverIndexes = [];
            }
            if (options.defaults) {
                object.MessageCode = 0;
                if (options.bytes === String)
                    object.MessagePayload = "";
                else {
                    object.MessagePayload = [];
                    if (options.bytes !== Array)
                        object.MessagePayload = $util.newBuffer(object.MessagePayload);
                }
            }
            if (message.SenderIndexes && message.SenderIndexes.length) {
                object.SenderIndexes = [];
                for (var j = 0; j < message.SenderIndexes.length; ++j)
                    object.SenderIndexes[j] = message.SenderIndexes[j];
            }
            if (message.ReceiverIndexes && message.ReceiverIndexes.length) {
                object.ReceiverIndexes = [];
                for (var j = 0; j < message.ReceiverIndexes.length; ++j)
                    object.ReceiverIndexes[j] = message.ReceiverIndexes[j];
            }
            if (message.MessageCode != null && message.hasOwnProperty("MessageCode"))
                object.MessageCode = message.MessageCode;
            if (message.MessagePayload != null && message.hasOwnProperty("MessagePayload"))
                object.MessagePayload = options.bytes === String ? $util.base64.encode(message.MessagePayload, 0, message.MessagePayload.length) : options.bytes === Array ? Array.prototype.slice.call(message.MessagePayload) : message.MessagePayload;
            return object;
        };

        /**
         * Converts this Message to JSON.
         * @function toJSON
         * @memberof actions.Message
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Message.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Message;
    })();

    actions.Rejection = (function() {

        /**
         * Properties of a Rejection.
         * @memberof actions
         * @interface IRejection
         * @property {Array.<number>|null} [AddressIndexes] Rejection AddressIndexes
         * @property {number|null} [RejectAddressIndex] Rejection RejectAddressIndex
         * @property {number|null} [RejectionCode] Rejection RejectionCode
         * @property {string|null} [Message] Rejection Message
         * @property {number|Long|null} [Timestamp] Rejection Timestamp
         */

        /**
         * Constructs a new Rejection.
         * @memberof actions
         * @classdesc Represents a Rejection.
         * @implements IRejection
         * @constructor
         * @param {actions.IRejection=} [properties] Properties to set
         */
        function Rejection(properties) {
            this.AddressIndexes = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Rejection AddressIndexes.
         * @member {Array.<number>} AddressIndexes
         * @memberof actions.Rejection
         * @instance
         */
        Rejection.prototype.AddressIndexes = $util.emptyArray;

        /**
         * Rejection RejectAddressIndex.
         * @member {number} RejectAddressIndex
         * @memberof actions.Rejection
         * @instance
         */
        Rejection.prototype.RejectAddressIndex = 0;

        /**
         * Rejection RejectionCode.
         * @member {number} RejectionCode
         * @memberof actions.Rejection
         * @instance
         */
        Rejection.prototype.RejectionCode = 0;

        /**
         * Rejection Message.
         * @member {string} Message
         * @memberof actions.Rejection
         * @instance
         */
        Rejection.prototype.Message = "";

        /**
         * Rejection Timestamp.
         * @member {number|Long} Timestamp
         * @memberof actions.Rejection
         * @instance
         */
        Rejection.prototype.Timestamp = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * Creates a new Rejection instance using the specified properties.
         * @function create
         * @memberof actions.Rejection
         * @static
         * @param {actions.IRejection=} [properties] Properties to set
         * @returns {actions.Rejection} Rejection instance
         */
        Rejection.create = function create(properties) {
            return new Rejection(properties);
        };

        /**
         * Encodes the specified Rejection message. Does not implicitly {@link actions.Rejection.verify|verify} messages.
         * @function encode
         * @memberof actions.Rejection
         * @static
         * @param {actions.IRejection} message Rejection message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Rejection.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.AddressIndexes != null && message.AddressIndexes.length) {
                writer.uint32(/* id 1, wireType 2 =*/10).fork();
                for (var i = 0; i < message.AddressIndexes.length; ++i)
                    writer.uint32(message.AddressIndexes[i]);
                writer.ldelim();
            }
            if (message.RejectAddressIndex != null && Object.hasOwnProperty.call(message, "RejectAddressIndex"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.RejectAddressIndex);
            if (message.RejectionCode != null && Object.hasOwnProperty.call(message, "RejectionCode"))
                writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.RejectionCode);
            if (message.Message != null && Object.hasOwnProperty.call(message, "Message"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.Message);
            if (message.Timestamp != null && Object.hasOwnProperty.call(message, "Timestamp"))
                writer.uint32(/* id 5, wireType 0 =*/40).uint64(message.Timestamp);
            return writer;
        };

        /**
         * Encodes the specified Rejection message, length delimited. Does not implicitly {@link actions.Rejection.verify|verify} messages.
         * @function encodeDelimited
         * @memberof actions.Rejection
         * @static
         * @param {actions.IRejection} message Rejection message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Rejection.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Rejection message from the specified reader or buffer.
         * @function decode
         * @memberof actions.Rejection
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {actions.Rejection} Rejection
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Rejection.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.actions.Rejection();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    if (!(message.AddressIndexes && message.AddressIndexes.length))
                        message.AddressIndexes = [];
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.AddressIndexes.push(reader.uint32());
                    } else
                        message.AddressIndexes.push(reader.uint32());
                    break;
                case 2:
                    message.RejectAddressIndex = reader.uint32();
                    break;
                case 3:
                    message.RejectionCode = reader.uint32();
                    break;
                case 4:
                    message.Message = reader.string();
                    break;
                case 5:
                    message.Timestamp = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Rejection message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof actions.Rejection
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {actions.Rejection} Rejection
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Rejection.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Rejection message.
         * @function verify
         * @memberof actions.Rejection
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Rejection.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.AddressIndexes != null && message.hasOwnProperty("AddressIndexes")) {
                if (!Array.isArray(message.AddressIndexes))
                    return "AddressIndexes: array expected";
                for (var i = 0; i < message.AddressIndexes.length; ++i)
                    if (!$util.isInteger(message.AddressIndexes[i]))
                        return "AddressIndexes: integer[] expected";
            }
            if (message.RejectAddressIndex != null && message.hasOwnProperty("RejectAddressIndex"))
                if (!$util.isInteger(message.RejectAddressIndex))
                    return "RejectAddressIndex: integer expected";
            if (message.RejectionCode != null && message.hasOwnProperty("RejectionCode"))
                if (!$util.isInteger(message.RejectionCode))
                    return "RejectionCode: integer expected";
            if (message.Message != null && message.hasOwnProperty("Message"))
                if (!$util.isString(message.Message))
                    return "Message: string expected";
            if (message.Timestamp != null && message.hasOwnProperty("Timestamp"))
                if (!$util.isInteger(message.Timestamp) && !(message.Timestamp && $util.isInteger(message.Timestamp.low) && $util.isInteger(message.Timestamp.high)))
                    return "Timestamp: integer|Long expected";
            return null;
        };

        /**
         * Creates a Rejection message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof actions.Rejection
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {actions.Rejection} Rejection
         */
        Rejection.fromObject = function fromObject(object) {
            if (object instanceof $root.actions.Rejection)
                return object;
            var message = new $root.actions.Rejection();
            if (object.AddressIndexes) {
                if (!Array.isArray(object.AddressIndexes))
                    throw TypeError(".actions.Rejection.AddressIndexes: array expected");
                message.AddressIndexes = [];
                for (var i = 0; i < object.AddressIndexes.length; ++i)
                    message.AddressIndexes[i] = object.AddressIndexes[i] >>> 0;
            }
            if (object.RejectAddressIndex != null)
                message.RejectAddressIndex = object.RejectAddressIndex >>> 0;
            if (object.RejectionCode != null)
                message.RejectionCode = object.RejectionCode >>> 0;
            if (object.Message != null)
                message.Message = String(object.Message);
            if (object.Timestamp != null)
                if ($util.Long)
                    (message.Timestamp = $util.Long.fromValue(object.Timestamp)).unsigned = true;
                else if (typeof object.Timestamp === "string")
                    message.Timestamp = parseInt(object.Timestamp, 10);
                else if (typeof object.Timestamp === "number")
                    message.Timestamp = object.Timestamp;
                else if (typeof object.Timestamp === "object")
                    message.Timestamp = new $util.LongBits(object.Timestamp.low >>> 0, object.Timestamp.high >>> 0).toNumber(true);
            return message;
        };

        /**
         * Creates a plain object from a Rejection message. Also converts values to other types if specified.
         * @function toObject
         * @memberof actions.Rejection
         * @static
         * @param {actions.Rejection} message Rejection
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Rejection.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.AddressIndexes = [];
            if (options.defaults) {
                object.RejectAddressIndex = 0;
                object.RejectionCode = 0;
                object.Message = "";
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.Timestamp = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.Timestamp = options.longs === String ? "0" : 0;
            }
            if (message.AddressIndexes && message.AddressIndexes.length) {
                object.AddressIndexes = [];
                for (var j = 0; j < message.AddressIndexes.length; ++j)
                    object.AddressIndexes[j] = message.AddressIndexes[j];
            }
            if (message.RejectAddressIndex != null && message.hasOwnProperty("RejectAddressIndex"))
                object.RejectAddressIndex = message.RejectAddressIndex;
            if (message.RejectionCode != null && message.hasOwnProperty("RejectionCode"))
                object.RejectionCode = message.RejectionCode;
            if (message.Message != null && message.hasOwnProperty("Message"))
                object.Message = message.Message;
            if (message.Timestamp != null && message.hasOwnProperty("Timestamp"))
                if (typeof message.Timestamp === "number")
                    object.Timestamp = options.longs === String ? String(message.Timestamp) : message.Timestamp;
                else
                    object.Timestamp = options.longs === String ? $util.Long.prototype.toString.call(message.Timestamp) : options.longs === Number ? new $util.LongBits(message.Timestamp.low >>> 0, message.Timestamp.high >>> 0).toNumber(true) : message.Timestamp;
            return object;
        };

        /**
         * Converts this Rejection to JSON.
         * @function toJSON
         * @memberof actions.Rejection
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Rejection.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Rejection;
    })();

    actions.AdministratorField = (function() {

        /**
         * Properties of an AdministratorField.
         * @memberof actions
         * @interface IAdministratorField
         * @property {number|null} [Type] AdministratorField Type
         * @property {string|null} [Name] AdministratorField Name
         */

        /**
         * Constructs a new AdministratorField.
         * @memberof actions
         * @classdesc Represents an AdministratorField.
         * @implements IAdministratorField
         * @constructor
         * @param {actions.IAdministratorField=} [properties] Properties to set
         */
        function AdministratorField(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * AdministratorField Type.
         * @member {number} Type
         * @memberof actions.AdministratorField
         * @instance
         */
        AdministratorField.prototype.Type = 0;

        /**
         * AdministratorField Name.
         * @member {string} Name
         * @memberof actions.AdministratorField
         * @instance
         */
        AdministratorField.prototype.Name = "";

        /**
         * Creates a new AdministratorField instance using the specified properties.
         * @function create
         * @memberof actions.AdministratorField
         * @static
         * @param {actions.IAdministratorField=} [properties] Properties to set
         * @returns {actions.AdministratorField} AdministratorField instance
         */
        AdministratorField.create = function create(properties) {
            return new AdministratorField(properties);
        };

        /**
         * Encodes the specified AdministratorField message. Does not implicitly {@link actions.AdministratorField.verify|verify} messages.
         * @function encode
         * @memberof actions.AdministratorField
         * @static
         * @param {actions.IAdministratorField} message AdministratorField message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AdministratorField.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Type != null && Object.hasOwnProperty.call(message, "Type"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.Type);
            if (message.Name != null && Object.hasOwnProperty.call(message, "Name"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.Name);
            return writer;
        };

        /**
         * Encodes the specified AdministratorField message, length delimited. Does not implicitly {@link actions.AdministratorField.verify|verify} messages.
         * @function encodeDelimited
         * @memberof actions.AdministratorField
         * @static
         * @param {actions.IAdministratorField} message AdministratorField message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AdministratorField.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an AdministratorField message from the specified reader or buffer.
         * @function decode
         * @memberof actions.AdministratorField
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {actions.AdministratorField} AdministratorField
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AdministratorField.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.actions.AdministratorField();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.Type = reader.uint32();
                    break;
                case 2:
                    message.Name = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an AdministratorField message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof actions.AdministratorField
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {actions.AdministratorField} AdministratorField
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AdministratorField.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an AdministratorField message.
         * @function verify
         * @memberof actions.AdministratorField
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        AdministratorField.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.Type != null && message.hasOwnProperty("Type"))
                if (!$util.isInteger(message.Type))
                    return "Type: integer expected";
            if (message.Name != null && message.hasOwnProperty("Name"))
                if (!$util.isString(message.Name))
                    return "Name: string expected";
            return null;
        };

        /**
         * Creates an AdministratorField message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof actions.AdministratorField
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {actions.AdministratorField} AdministratorField
         */
        AdministratorField.fromObject = function fromObject(object) {
            if (object instanceof $root.actions.AdministratorField)
                return object;
            var message = new $root.actions.AdministratorField();
            if (object.Type != null)
                message.Type = object.Type >>> 0;
            if (object.Name != null)
                message.Name = String(object.Name);
            return message;
        };

        /**
         * Creates a plain object from an AdministratorField message. Also converts values to other types if specified.
         * @function toObject
         * @memberof actions.AdministratorField
         * @static
         * @param {actions.AdministratorField} message AdministratorField
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        AdministratorField.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.Type = 0;
                object.Name = "";
            }
            if (message.Type != null && message.hasOwnProperty("Type"))
                object.Type = message.Type;
            if (message.Name != null && message.hasOwnProperty("Name"))
                object.Name = message.Name;
            return object;
        };

        /**
         * Converts this AdministratorField to JSON.
         * @function toJSON
         * @memberof actions.AdministratorField
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        AdministratorField.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return AdministratorField;
    })();

    actions.AdminIdentityCertificateField = (function() {

        /**
         * Properties of an AdminIdentityCertificateField.
         * @memberof actions
         * @interface IAdminIdentityCertificateField
         * @property {Uint8Array|null} [EntityContract] AdminIdentityCertificateField EntityContract
         * @property {Uint8Array|null} [Signature] AdminIdentityCertificateField Signature
         * @property {number|null} [BlockHeight] AdminIdentityCertificateField BlockHeight
         * @property {number|Long|null} [Expiration] AdminIdentityCertificateField Expiration
         */

        /**
         * Constructs a new AdminIdentityCertificateField.
         * @memberof actions
         * @classdesc Represents an AdminIdentityCertificateField.
         * @implements IAdminIdentityCertificateField
         * @constructor
         * @param {actions.IAdminIdentityCertificateField=} [properties] Properties to set
         */
        function AdminIdentityCertificateField(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * AdminIdentityCertificateField EntityContract.
         * @member {Uint8Array} EntityContract
         * @memberof actions.AdminIdentityCertificateField
         * @instance
         */
        AdminIdentityCertificateField.prototype.EntityContract = $util.newBuffer([]);

        /**
         * AdminIdentityCertificateField Signature.
         * @member {Uint8Array} Signature
         * @memberof actions.AdminIdentityCertificateField
         * @instance
         */
        AdminIdentityCertificateField.prototype.Signature = $util.newBuffer([]);

        /**
         * AdminIdentityCertificateField BlockHeight.
         * @member {number} BlockHeight
         * @memberof actions.AdminIdentityCertificateField
         * @instance
         */
        AdminIdentityCertificateField.prototype.BlockHeight = 0;

        /**
         * AdminIdentityCertificateField Expiration.
         * @member {number|Long} Expiration
         * @memberof actions.AdminIdentityCertificateField
         * @instance
         */
        AdminIdentityCertificateField.prototype.Expiration = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * Creates a new AdminIdentityCertificateField instance using the specified properties.
         * @function create
         * @memberof actions.AdminIdentityCertificateField
         * @static
         * @param {actions.IAdminIdentityCertificateField=} [properties] Properties to set
         * @returns {actions.AdminIdentityCertificateField} AdminIdentityCertificateField instance
         */
        AdminIdentityCertificateField.create = function create(properties) {
            return new AdminIdentityCertificateField(properties);
        };

        /**
         * Encodes the specified AdminIdentityCertificateField message. Does not implicitly {@link actions.AdminIdentityCertificateField.verify|verify} messages.
         * @function encode
         * @memberof actions.AdminIdentityCertificateField
         * @static
         * @param {actions.IAdminIdentityCertificateField} message AdminIdentityCertificateField message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AdminIdentityCertificateField.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.EntityContract != null && Object.hasOwnProperty.call(message, "EntityContract"))
                writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.EntityContract);
            if (message.Signature != null && Object.hasOwnProperty.call(message, "Signature"))
                writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.Signature);
            if (message.BlockHeight != null && Object.hasOwnProperty.call(message, "BlockHeight"))
                writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.BlockHeight);
            if (message.Expiration != null && Object.hasOwnProperty.call(message, "Expiration"))
                writer.uint32(/* id 4, wireType 0 =*/32).uint64(message.Expiration);
            return writer;
        };

        /**
         * Encodes the specified AdminIdentityCertificateField message, length delimited. Does not implicitly {@link actions.AdminIdentityCertificateField.verify|verify} messages.
         * @function encodeDelimited
         * @memberof actions.AdminIdentityCertificateField
         * @static
         * @param {actions.IAdminIdentityCertificateField} message AdminIdentityCertificateField message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AdminIdentityCertificateField.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an AdminIdentityCertificateField message from the specified reader or buffer.
         * @function decode
         * @memberof actions.AdminIdentityCertificateField
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {actions.AdminIdentityCertificateField} AdminIdentityCertificateField
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AdminIdentityCertificateField.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.actions.AdminIdentityCertificateField();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.EntityContract = reader.bytes();
                    break;
                case 2:
                    message.Signature = reader.bytes();
                    break;
                case 3:
                    message.BlockHeight = reader.uint32();
                    break;
                case 4:
                    message.Expiration = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an AdminIdentityCertificateField message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof actions.AdminIdentityCertificateField
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {actions.AdminIdentityCertificateField} AdminIdentityCertificateField
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AdminIdentityCertificateField.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an AdminIdentityCertificateField message.
         * @function verify
         * @memberof actions.AdminIdentityCertificateField
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        AdminIdentityCertificateField.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.EntityContract != null && message.hasOwnProperty("EntityContract"))
                if (!(message.EntityContract && typeof message.EntityContract.length === "number" || $util.isString(message.EntityContract)))
                    return "EntityContract: buffer expected";
            if (message.Signature != null && message.hasOwnProperty("Signature"))
                if (!(message.Signature && typeof message.Signature.length === "number" || $util.isString(message.Signature)))
                    return "Signature: buffer expected";
            if (message.BlockHeight != null && message.hasOwnProperty("BlockHeight"))
                if (!$util.isInteger(message.BlockHeight))
                    return "BlockHeight: integer expected";
            if (message.Expiration != null && message.hasOwnProperty("Expiration"))
                if (!$util.isInteger(message.Expiration) && !(message.Expiration && $util.isInteger(message.Expiration.low) && $util.isInteger(message.Expiration.high)))
                    return "Expiration: integer|Long expected";
            return null;
        };

        /**
         * Creates an AdminIdentityCertificateField message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof actions.AdminIdentityCertificateField
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {actions.AdminIdentityCertificateField} AdminIdentityCertificateField
         */
        AdminIdentityCertificateField.fromObject = function fromObject(object) {
            if (object instanceof $root.actions.AdminIdentityCertificateField)
                return object;
            var message = new $root.actions.AdminIdentityCertificateField();
            if (object.EntityContract != null)
                if (typeof object.EntityContract === "string")
                    $util.base64.decode(object.EntityContract, message.EntityContract = $util.newBuffer($util.base64.length(object.EntityContract)), 0);
                else if (object.EntityContract.length)
                    message.EntityContract = object.EntityContract;
            if (object.Signature != null)
                if (typeof object.Signature === "string")
                    $util.base64.decode(object.Signature, message.Signature = $util.newBuffer($util.base64.length(object.Signature)), 0);
                else if (object.Signature.length)
                    message.Signature = object.Signature;
            if (object.BlockHeight != null)
                message.BlockHeight = object.BlockHeight >>> 0;
            if (object.Expiration != null)
                if ($util.Long)
                    (message.Expiration = $util.Long.fromValue(object.Expiration)).unsigned = true;
                else if (typeof object.Expiration === "string")
                    message.Expiration = parseInt(object.Expiration, 10);
                else if (typeof object.Expiration === "number")
                    message.Expiration = object.Expiration;
                else if (typeof object.Expiration === "object")
                    message.Expiration = new $util.LongBits(object.Expiration.low >>> 0, object.Expiration.high >>> 0).toNumber(true);
            return message;
        };

        /**
         * Creates a plain object from an AdminIdentityCertificateField message. Also converts values to other types if specified.
         * @function toObject
         * @memberof actions.AdminIdentityCertificateField
         * @static
         * @param {actions.AdminIdentityCertificateField} message AdminIdentityCertificateField
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        AdminIdentityCertificateField.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if (options.bytes === String)
                    object.EntityContract = "";
                else {
                    object.EntityContract = [];
                    if (options.bytes !== Array)
                        object.EntityContract = $util.newBuffer(object.EntityContract);
                }
                if (options.bytes === String)
                    object.Signature = "";
                else {
                    object.Signature = [];
                    if (options.bytes !== Array)
                        object.Signature = $util.newBuffer(object.Signature);
                }
                object.BlockHeight = 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.Expiration = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.Expiration = options.longs === String ? "0" : 0;
            }
            if (message.EntityContract != null && message.hasOwnProperty("EntityContract"))
                object.EntityContract = options.bytes === String ? $util.base64.encode(message.EntityContract, 0, message.EntityContract.length) : options.bytes === Array ? Array.prototype.slice.call(message.EntityContract) : message.EntityContract;
            if (message.Signature != null && message.hasOwnProperty("Signature"))
                object.Signature = options.bytes === String ? $util.base64.encode(message.Signature, 0, message.Signature.length) : options.bytes === Array ? Array.prototype.slice.call(message.Signature) : message.Signature;
            if (message.BlockHeight != null && message.hasOwnProperty("BlockHeight"))
                object.BlockHeight = message.BlockHeight;
            if (message.Expiration != null && message.hasOwnProperty("Expiration"))
                if (typeof message.Expiration === "number")
                    object.Expiration = options.longs === String ? String(message.Expiration) : message.Expiration;
                else
                    object.Expiration = options.longs === String ? $util.Long.prototype.toString.call(message.Expiration) : options.longs === Number ? new $util.LongBits(message.Expiration.low >>> 0, message.Expiration.high >>> 0).toNumber(true) : message.Expiration;
            return object;
        };

        /**
         * Converts this AdminIdentityCertificateField to JSON.
         * @function toJSON
         * @memberof actions.AdminIdentityCertificateField
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        AdminIdentityCertificateField.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return AdminIdentityCertificateField;
    })();

    actions.AmendmentField = (function() {

        /**
         * Properties of an AmendmentField.
         * @memberof actions
         * @interface IAmendmentField
         * @property {Uint8Array|null} [FieldIndexPath] AmendmentField FieldIndexPath
         * @property {number|null} [Operation] AmendmentField Operation
         * @property {Uint8Array|null} [Data] AmendmentField Data
         */

        /**
         * Constructs a new AmendmentField.
         * @memberof actions
         * @classdesc Represents an AmendmentField.
         * @implements IAmendmentField
         * @constructor
         * @param {actions.IAmendmentField=} [properties] Properties to set
         */
        function AmendmentField(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * AmendmentField FieldIndexPath.
         * @member {Uint8Array} FieldIndexPath
         * @memberof actions.AmendmentField
         * @instance
         */
        AmendmentField.prototype.FieldIndexPath = $util.newBuffer([]);

        /**
         * AmendmentField Operation.
         * @member {number} Operation
         * @memberof actions.AmendmentField
         * @instance
         */
        AmendmentField.prototype.Operation = 0;

        /**
         * AmendmentField Data.
         * @member {Uint8Array} Data
         * @memberof actions.AmendmentField
         * @instance
         */
        AmendmentField.prototype.Data = $util.newBuffer([]);

        /**
         * Creates a new AmendmentField instance using the specified properties.
         * @function create
         * @memberof actions.AmendmentField
         * @static
         * @param {actions.IAmendmentField=} [properties] Properties to set
         * @returns {actions.AmendmentField} AmendmentField instance
         */
        AmendmentField.create = function create(properties) {
            return new AmendmentField(properties);
        };

        /**
         * Encodes the specified AmendmentField message. Does not implicitly {@link actions.AmendmentField.verify|verify} messages.
         * @function encode
         * @memberof actions.AmendmentField
         * @static
         * @param {actions.IAmendmentField} message AmendmentField message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AmendmentField.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.FieldIndexPath != null && Object.hasOwnProperty.call(message, "FieldIndexPath"))
                writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.FieldIndexPath);
            if (message.Operation != null && Object.hasOwnProperty.call(message, "Operation"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.Operation);
            if (message.Data != null && Object.hasOwnProperty.call(message, "Data"))
                writer.uint32(/* id 3, wireType 2 =*/26).bytes(message.Data);
            return writer;
        };

        /**
         * Encodes the specified AmendmentField message, length delimited. Does not implicitly {@link actions.AmendmentField.verify|verify} messages.
         * @function encodeDelimited
         * @memberof actions.AmendmentField
         * @static
         * @param {actions.IAmendmentField} message AmendmentField message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AmendmentField.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an AmendmentField message from the specified reader or buffer.
         * @function decode
         * @memberof actions.AmendmentField
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {actions.AmendmentField} AmendmentField
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AmendmentField.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.actions.AmendmentField();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.FieldIndexPath = reader.bytes();
                    break;
                case 2:
                    message.Operation = reader.uint32();
                    break;
                case 3:
                    message.Data = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an AmendmentField message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof actions.AmendmentField
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {actions.AmendmentField} AmendmentField
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AmendmentField.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an AmendmentField message.
         * @function verify
         * @memberof actions.AmendmentField
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        AmendmentField.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.FieldIndexPath != null && message.hasOwnProperty("FieldIndexPath"))
                if (!(message.FieldIndexPath && typeof message.FieldIndexPath.length === "number" || $util.isString(message.FieldIndexPath)))
                    return "FieldIndexPath: buffer expected";
            if (message.Operation != null && message.hasOwnProperty("Operation"))
                if (!$util.isInteger(message.Operation))
                    return "Operation: integer expected";
            if (message.Data != null && message.hasOwnProperty("Data"))
                if (!(message.Data && typeof message.Data.length === "number" || $util.isString(message.Data)))
                    return "Data: buffer expected";
            return null;
        };

        /**
         * Creates an AmendmentField message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof actions.AmendmentField
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {actions.AmendmentField} AmendmentField
         */
        AmendmentField.fromObject = function fromObject(object) {
            if (object instanceof $root.actions.AmendmentField)
                return object;
            var message = new $root.actions.AmendmentField();
            if (object.FieldIndexPath != null)
                if (typeof object.FieldIndexPath === "string")
                    $util.base64.decode(object.FieldIndexPath, message.FieldIndexPath = $util.newBuffer($util.base64.length(object.FieldIndexPath)), 0);
                else if (object.FieldIndexPath.length)
                    message.FieldIndexPath = object.FieldIndexPath;
            if (object.Operation != null)
                message.Operation = object.Operation >>> 0;
            if (object.Data != null)
                if (typeof object.Data === "string")
                    $util.base64.decode(object.Data, message.Data = $util.newBuffer($util.base64.length(object.Data)), 0);
                else if (object.Data.length)
                    message.Data = object.Data;
            return message;
        };

        /**
         * Creates a plain object from an AmendmentField message. Also converts values to other types if specified.
         * @function toObject
         * @memberof actions.AmendmentField
         * @static
         * @param {actions.AmendmentField} message AmendmentField
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        AmendmentField.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if (options.bytes === String)
                    object.FieldIndexPath = "";
                else {
                    object.FieldIndexPath = [];
                    if (options.bytes !== Array)
                        object.FieldIndexPath = $util.newBuffer(object.FieldIndexPath);
                }
                object.Operation = 0;
                if (options.bytes === String)
                    object.Data = "";
                else {
                    object.Data = [];
                    if (options.bytes !== Array)
                        object.Data = $util.newBuffer(object.Data);
                }
            }
            if (message.FieldIndexPath != null && message.hasOwnProperty("FieldIndexPath"))
                object.FieldIndexPath = options.bytes === String ? $util.base64.encode(message.FieldIndexPath, 0, message.FieldIndexPath.length) : options.bytes === Array ? Array.prototype.slice.call(message.FieldIndexPath) : message.FieldIndexPath;
            if (message.Operation != null && message.hasOwnProperty("Operation"))
                object.Operation = message.Operation;
            if (message.Data != null && message.hasOwnProperty("Data"))
                object.Data = options.bytes === String ? $util.base64.encode(message.Data, 0, message.Data.length) : options.bytes === Array ? Array.prototype.slice.call(message.Data) : message.Data;
            return object;
        };

        /**
         * Converts this AmendmentField to JSON.
         * @function toJSON
         * @memberof actions.AmendmentField
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        AmendmentField.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return AmendmentField;
    })();

    actions.AssetReceiverField = (function() {

        /**
         * Properties of an AssetReceiverField.
         * @memberof actions
         * @interface IAssetReceiverField
         * @property {Uint8Array|null} [Address] AssetReceiverField Address
         * @property {number|Long|null} [Quantity] AssetReceiverField Quantity
         * @property {number|null} [OracleSigAlgorithm] AssetReceiverField OracleSigAlgorithm
         * @property {number|null} [OracleIndex] AssetReceiverField OracleIndex
         * @property {Uint8Array|null} [OracleConfirmationSig] AssetReceiverField OracleConfirmationSig
         * @property {number|null} [OracleSigBlockHeight] AssetReceiverField OracleSigBlockHeight
         * @property {number|Long|null} [OracleSigExpiry] AssetReceiverField OracleSigExpiry
         */

        /**
         * Constructs a new AssetReceiverField.
         * @memberof actions
         * @classdesc Represents an AssetReceiverField.
         * @implements IAssetReceiverField
         * @constructor
         * @param {actions.IAssetReceiverField=} [properties] Properties to set
         */
        function AssetReceiverField(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * AssetReceiverField Address.
         * @member {Uint8Array} Address
         * @memberof actions.AssetReceiverField
         * @instance
         */
        AssetReceiverField.prototype.Address = $util.newBuffer([]);

        /**
         * AssetReceiverField Quantity.
         * @member {number|Long} Quantity
         * @memberof actions.AssetReceiverField
         * @instance
         */
        AssetReceiverField.prototype.Quantity = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * AssetReceiverField OracleSigAlgorithm.
         * @member {number} OracleSigAlgorithm
         * @memberof actions.AssetReceiverField
         * @instance
         */
        AssetReceiverField.prototype.OracleSigAlgorithm = 0;

        /**
         * AssetReceiverField OracleIndex.
         * @member {number} OracleIndex
         * @memberof actions.AssetReceiverField
         * @instance
         */
        AssetReceiverField.prototype.OracleIndex = 0;

        /**
         * AssetReceiverField OracleConfirmationSig.
         * @member {Uint8Array} OracleConfirmationSig
         * @memberof actions.AssetReceiverField
         * @instance
         */
        AssetReceiverField.prototype.OracleConfirmationSig = $util.newBuffer([]);

        /**
         * AssetReceiverField OracleSigBlockHeight.
         * @member {number} OracleSigBlockHeight
         * @memberof actions.AssetReceiverField
         * @instance
         */
        AssetReceiverField.prototype.OracleSigBlockHeight = 0;

        /**
         * AssetReceiverField OracleSigExpiry.
         * @member {number|Long} OracleSigExpiry
         * @memberof actions.AssetReceiverField
         * @instance
         */
        AssetReceiverField.prototype.OracleSigExpiry = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * Creates a new AssetReceiverField instance using the specified properties.
         * @function create
         * @memberof actions.AssetReceiverField
         * @static
         * @param {actions.IAssetReceiverField=} [properties] Properties to set
         * @returns {actions.AssetReceiverField} AssetReceiverField instance
         */
        AssetReceiverField.create = function create(properties) {
            return new AssetReceiverField(properties);
        };

        /**
         * Encodes the specified AssetReceiverField message. Does not implicitly {@link actions.AssetReceiverField.verify|verify} messages.
         * @function encode
         * @memberof actions.AssetReceiverField
         * @static
         * @param {actions.IAssetReceiverField} message AssetReceiverField message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AssetReceiverField.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Address != null && Object.hasOwnProperty.call(message, "Address"))
                writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.Address);
            if (message.Quantity != null && Object.hasOwnProperty.call(message, "Quantity"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint64(message.Quantity);
            if (message.OracleSigAlgorithm != null && Object.hasOwnProperty.call(message, "OracleSigAlgorithm"))
                writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.OracleSigAlgorithm);
            if (message.OracleIndex != null && Object.hasOwnProperty.call(message, "OracleIndex"))
                writer.uint32(/* id 4, wireType 0 =*/32).uint32(message.OracleIndex);
            if (message.OracleConfirmationSig != null && Object.hasOwnProperty.call(message, "OracleConfirmationSig"))
                writer.uint32(/* id 5, wireType 2 =*/42).bytes(message.OracleConfirmationSig);
            if (message.OracleSigBlockHeight != null && Object.hasOwnProperty.call(message, "OracleSigBlockHeight"))
                writer.uint32(/* id 6, wireType 0 =*/48).uint32(message.OracleSigBlockHeight);
            if (message.OracleSigExpiry != null && Object.hasOwnProperty.call(message, "OracleSigExpiry"))
                writer.uint32(/* id 7, wireType 0 =*/56).uint64(message.OracleSigExpiry);
            return writer;
        };

        /**
         * Encodes the specified AssetReceiverField message, length delimited. Does not implicitly {@link actions.AssetReceiverField.verify|verify} messages.
         * @function encodeDelimited
         * @memberof actions.AssetReceiverField
         * @static
         * @param {actions.IAssetReceiverField} message AssetReceiverField message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AssetReceiverField.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an AssetReceiverField message from the specified reader or buffer.
         * @function decode
         * @memberof actions.AssetReceiverField
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {actions.AssetReceiverField} AssetReceiverField
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AssetReceiverField.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.actions.AssetReceiverField();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.Address = reader.bytes();
                    break;
                case 2:
                    message.Quantity = reader.uint64();
                    break;
                case 3:
                    message.OracleSigAlgorithm = reader.uint32();
                    break;
                case 4:
                    message.OracleIndex = reader.uint32();
                    break;
                case 5:
                    message.OracleConfirmationSig = reader.bytes();
                    break;
                case 6:
                    message.OracleSigBlockHeight = reader.uint32();
                    break;
                case 7:
                    message.OracleSigExpiry = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an AssetReceiverField message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof actions.AssetReceiverField
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {actions.AssetReceiverField} AssetReceiverField
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AssetReceiverField.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an AssetReceiverField message.
         * @function verify
         * @memberof actions.AssetReceiverField
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        AssetReceiverField.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.Address != null && message.hasOwnProperty("Address"))
                if (!(message.Address && typeof message.Address.length === "number" || $util.isString(message.Address)))
                    return "Address: buffer expected";
            if (message.Quantity != null && message.hasOwnProperty("Quantity"))
                if (!$util.isInteger(message.Quantity) && !(message.Quantity && $util.isInteger(message.Quantity.low) && $util.isInteger(message.Quantity.high)))
                    return "Quantity: integer|Long expected";
            if (message.OracleSigAlgorithm != null && message.hasOwnProperty("OracleSigAlgorithm"))
                if (!$util.isInteger(message.OracleSigAlgorithm))
                    return "OracleSigAlgorithm: integer expected";
            if (message.OracleIndex != null && message.hasOwnProperty("OracleIndex"))
                if (!$util.isInteger(message.OracleIndex))
                    return "OracleIndex: integer expected";
            if (message.OracleConfirmationSig != null && message.hasOwnProperty("OracleConfirmationSig"))
                if (!(message.OracleConfirmationSig && typeof message.OracleConfirmationSig.length === "number" || $util.isString(message.OracleConfirmationSig)))
                    return "OracleConfirmationSig: buffer expected";
            if (message.OracleSigBlockHeight != null && message.hasOwnProperty("OracleSigBlockHeight"))
                if (!$util.isInteger(message.OracleSigBlockHeight))
                    return "OracleSigBlockHeight: integer expected";
            if (message.OracleSigExpiry != null && message.hasOwnProperty("OracleSigExpiry"))
                if (!$util.isInteger(message.OracleSigExpiry) && !(message.OracleSigExpiry && $util.isInteger(message.OracleSigExpiry.low) && $util.isInteger(message.OracleSigExpiry.high)))
                    return "OracleSigExpiry: integer|Long expected";
            return null;
        };

        /**
         * Creates an AssetReceiverField message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof actions.AssetReceiverField
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {actions.AssetReceiverField} AssetReceiverField
         */
        AssetReceiverField.fromObject = function fromObject(object) {
            if (object instanceof $root.actions.AssetReceiverField)
                return object;
            var message = new $root.actions.AssetReceiverField();
            if (object.Address != null)
                if (typeof object.Address === "string")
                    $util.base64.decode(object.Address, message.Address = $util.newBuffer($util.base64.length(object.Address)), 0);
                else if (object.Address.length)
                    message.Address = object.Address;
            if (object.Quantity != null)
                if ($util.Long)
                    (message.Quantity = $util.Long.fromValue(object.Quantity)).unsigned = true;
                else if (typeof object.Quantity === "string")
                    message.Quantity = parseInt(object.Quantity, 10);
                else if (typeof object.Quantity === "number")
                    message.Quantity = object.Quantity;
                else if (typeof object.Quantity === "object")
                    message.Quantity = new $util.LongBits(object.Quantity.low >>> 0, object.Quantity.high >>> 0).toNumber(true);
            if (object.OracleSigAlgorithm != null)
                message.OracleSigAlgorithm = object.OracleSigAlgorithm >>> 0;
            if (object.OracleIndex != null)
                message.OracleIndex = object.OracleIndex >>> 0;
            if (object.OracleConfirmationSig != null)
                if (typeof object.OracleConfirmationSig === "string")
                    $util.base64.decode(object.OracleConfirmationSig, message.OracleConfirmationSig = $util.newBuffer($util.base64.length(object.OracleConfirmationSig)), 0);
                else if (object.OracleConfirmationSig.length)
                    message.OracleConfirmationSig = object.OracleConfirmationSig;
            if (object.OracleSigBlockHeight != null)
                message.OracleSigBlockHeight = object.OracleSigBlockHeight >>> 0;
            if (object.OracleSigExpiry != null)
                if ($util.Long)
                    (message.OracleSigExpiry = $util.Long.fromValue(object.OracleSigExpiry)).unsigned = true;
                else if (typeof object.OracleSigExpiry === "string")
                    message.OracleSigExpiry = parseInt(object.OracleSigExpiry, 10);
                else if (typeof object.OracleSigExpiry === "number")
                    message.OracleSigExpiry = object.OracleSigExpiry;
                else if (typeof object.OracleSigExpiry === "object")
                    message.OracleSigExpiry = new $util.LongBits(object.OracleSigExpiry.low >>> 0, object.OracleSigExpiry.high >>> 0).toNumber(true);
            return message;
        };

        /**
         * Creates a plain object from an AssetReceiverField message. Also converts values to other types if specified.
         * @function toObject
         * @memberof actions.AssetReceiverField
         * @static
         * @param {actions.AssetReceiverField} message AssetReceiverField
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        AssetReceiverField.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if (options.bytes === String)
                    object.Address = "";
                else {
                    object.Address = [];
                    if (options.bytes !== Array)
                        object.Address = $util.newBuffer(object.Address);
                }
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.Quantity = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.Quantity = options.longs === String ? "0" : 0;
                object.OracleSigAlgorithm = 0;
                object.OracleIndex = 0;
                if (options.bytes === String)
                    object.OracleConfirmationSig = "";
                else {
                    object.OracleConfirmationSig = [];
                    if (options.bytes !== Array)
                        object.OracleConfirmationSig = $util.newBuffer(object.OracleConfirmationSig);
                }
                object.OracleSigBlockHeight = 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.OracleSigExpiry = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.OracleSigExpiry = options.longs === String ? "0" : 0;
            }
            if (message.Address != null && message.hasOwnProperty("Address"))
                object.Address = options.bytes === String ? $util.base64.encode(message.Address, 0, message.Address.length) : options.bytes === Array ? Array.prototype.slice.call(message.Address) : message.Address;
            if (message.Quantity != null && message.hasOwnProperty("Quantity"))
                if (typeof message.Quantity === "number")
                    object.Quantity = options.longs === String ? String(message.Quantity) : message.Quantity;
                else
                    object.Quantity = options.longs === String ? $util.Long.prototype.toString.call(message.Quantity) : options.longs === Number ? new $util.LongBits(message.Quantity.low >>> 0, message.Quantity.high >>> 0).toNumber(true) : message.Quantity;
            if (message.OracleSigAlgorithm != null && message.hasOwnProperty("OracleSigAlgorithm"))
                object.OracleSigAlgorithm = message.OracleSigAlgorithm;
            if (message.OracleIndex != null && message.hasOwnProperty("OracleIndex"))
                object.OracleIndex = message.OracleIndex;
            if (message.OracleConfirmationSig != null && message.hasOwnProperty("OracleConfirmationSig"))
                object.OracleConfirmationSig = options.bytes === String ? $util.base64.encode(message.OracleConfirmationSig, 0, message.OracleConfirmationSig.length) : options.bytes === Array ? Array.prototype.slice.call(message.OracleConfirmationSig) : message.OracleConfirmationSig;
            if (message.OracleSigBlockHeight != null && message.hasOwnProperty("OracleSigBlockHeight"))
                object.OracleSigBlockHeight = message.OracleSigBlockHeight;
            if (message.OracleSigExpiry != null && message.hasOwnProperty("OracleSigExpiry"))
                if (typeof message.OracleSigExpiry === "number")
                    object.OracleSigExpiry = options.longs === String ? String(message.OracleSigExpiry) : message.OracleSigExpiry;
                else
                    object.OracleSigExpiry = options.longs === String ? $util.Long.prototype.toString.call(message.OracleSigExpiry) : options.longs === Number ? new $util.LongBits(message.OracleSigExpiry.low >>> 0, message.OracleSigExpiry.high >>> 0).toNumber(true) : message.OracleSigExpiry;
            return object;
        };

        /**
         * Converts this AssetReceiverField to JSON.
         * @function toJSON
         * @memberof actions.AssetReceiverField
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        AssetReceiverField.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return AssetReceiverField;
    })();

    actions.AssetSettlementField = (function() {

        /**
         * Properties of an AssetSettlementField.
         * @memberof actions
         * @interface IAssetSettlementField
         * @property {number|null} [ContractIndex] AssetSettlementField ContractIndex
         * @property {string|null} [AssetType] AssetSettlementField AssetType
         * @property {Uint8Array|null} [AssetCode] AssetSettlementField AssetCode
         * @property {Array.<actions.IQuantityIndexField>|null} [Settlements] AssetSettlementField Settlements
         */

        /**
         * Constructs a new AssetSettlementField.
         * @memberof actions
         * @classdesc Represents an AssetSettlementField.
         * @implements IAssetSettlementField
         * @constructor
         * @param {actions.IAssetSettlementField=} [properties] Properties to set
         */
        function AssetSettlementField(properties) {
            this.Settlements = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * AssetSettlementField ContractIndex.
         * @member {number} ContractIndex
         * @memberof actions.AssetSettlementField
         * @instance
         */
        AssetSettlementField.prototype.ContractIndex = 0;

        /**
         * AssetSettlementField AssetType.
         * @member {string} AssetType
         * @memberof actions.AssetSettlementField
         * @instance
         */
        AssetSettlementField.prototype.AssetType = "";

        /**
         * AssetSettlementField AssetCode.
         * @member {Uint8Array} AssetCode
         * @memberof actions.AssetSettlementField
         * @instance
         */
        AssetSettlementField.prototype.AssetCode = $util.newBuffer([]);

        /**
         * AssetSettlementField Settlements.
         * @member {Array.<actions.IQuantityIndexField>} Settlements
         * @memberof actions.AssetSettlementField
         * @instance
         */
        AssetSettlementField.prototype.Settlements = $util.emptyArray;

        /**
         * Creates a new AssetSettlementField instance using the specified properties.
         * @function create
         * @memberof actions.AssetSettlementField
         * @static
         * @param {actions.IAssetSettlementField=} [properties] Properties to set
         * @returns {actions.AssetSettlementField} AssetSettlementField instance
         */
        AssetSettlementField.create = function create(properties) {
            return new AssetSettlementField(properties);
        };

        /**
         * Encodes the specified AssetSettlementField message. Does not implicitly {@link actions.AssetSettlementField.verify|verify} messages.
         * @function encode
         * @memberof actions.AssetSettlementField
         * @static
         * @param {actions.IAssetSettlementField} message AssetSettlementField message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AssetSettlementField.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.ContractIndex != null && Object.hasOwnProperty.call(message, "ContractIndex"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.ContractIndex);
            if (message.AssetType != null && Object.hasOwnProperty.call(message, "AssetType"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.AssetType);
            if (message.AssetCode != null && Object.hasOwnProperty.call(message, "AssetCode"))
                writer.uint32(/* id 3, wireType 2 =*/26).bytes(message.AssetCode);
            if (message.Settlements != null && message.Settlements.length)
                for (var i = 0; i < message.Settlements.length; ++i)
                    $root.actions.QuantityIndexField.encode(message.Settlements[i], writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified AssetSettlementField message, length delimited. Does not implicitly {@link actions.AssetSettlementField.verify|verify} messages.
         * @function encodeDelimited
         * @memberof actions.AssetSettlementField
         * @static
         * @param {actions.IAssetSettlementField} message AssetSettlementField message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AssetSettlementField.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an AssetSettlementField message from the specified reader or buffer.
         * @function decode
         * @memberof actions.AssetSettlementField
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {actions.AssetSettlementField} AssetSettlementField
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AssetSettlementField.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.actions.AssetSettlementField();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.ContractIndex = reader.uint32();
                    break;
                case 2:
                    message.AssetType = reader.string();
                    break;
                case 3:
                    message.AssetCode = reader.bytes();
                    break;
                case 4:
                    if (!(message.Settlements && message.Settlements.length))
                        message.Settlements = [];
                    message.Settlements.push($root.actions.QuantityIndexField.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an AssetSettlementField message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof actions.AssetSettlementField
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {actions.AssetSettlementField} AssetSettlementField
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AssetSettlementField.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an AssetSettlementField message.
         * @function verify
         * @memberof actions.AssetSettlementField
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        AssetSettlementField.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.ContractIndex != null && message.hasOwnProperty("ContractIndex"))
                if (!$util.isInteger(message.ContractIndex))
                    return "ContractIndex: integer expected";
            if (message.AssetType != null && message.hasOwnProperty("AssetType"))
                if (!$util.isString(message.AssetType))
                    return "AssetType: string expected";
            if (message.AssetCode != null && message.hasOwnProperty("AssetCode"))
                if (!(message.AssetCode && typeof message.AssetCode.length === "number" || $util.isString(message.AssetCode)))
                    return "AssetCode: buffer expected";
            if (message.Settlements != null && message.hasOwnProperty("Settlements")) {
                if (!Array.isArray(message.Settlements))
                    return "Settlements: array expected";
                for (var i = 0; i < message.Settlements.length; ++i) {
                    var error = $root.actions.QuantityIndexField.verify(message.Settlements[i]);
                    if (error)
                        return "Settlements." + error;
                }
            }
            return null;
        };

        /**
         * Creates an AssetSettlementField message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof actions.AssetSettlementField
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {actions.AssetSettlementField} AssetSettlementField
         */
        AssetSettlementField.fromObject = function fromObject(object) {
            if (object instanceof $root.actions.AssetSettlementField)
                return object;
            var message = new $root.actions.AssetSettlementField();
            if (object.ContractIndex != null)
                message.ContractIndex = object.ContractIndex >>> 0;
            if (object.AssetType != null)
                message.AssetType = String(object.AssetType);
            if (object.AssetCode != null)
                if (typeof object.AssetCode === "string")
                    $util.base64.decode(object.AssetCode, message.AssetCode = $util.newBuffer($util.base64.length(object.AssetCode)), 0);
                else if (object.AssetCode.length)
                    message.AssetCode = object.AssetCode;
            if (object.Settlements) {
                if (!Array.isArray(object.Settlements))
                    throw TypeError(".actions.AssetSettlementField.Settlements: array expected");
                message.Settlements = [];
                for (var i = 0; i < object.Settlements.length; ++i) {
                    if (typeof object.Settlements[i] !== "object")
                        throw TypeError(".actions.AssetSettlementField.Settlements: object expected");
                    message.Settlements[i] = $root.actions.QuantityIndexField.fromObject(object.Settlements[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from an AssetSettlementField message. Also converts values to other types if specified.
         * @function toObject
         * @memberof actions.AssetSettlementField
         * @static
         * @param {actions.AssetSettlementField} message AssetSettlementField
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        AssetSettlementField.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.Settlements = [];
            if (options.defaults) {
                object.ContractIndex = 0;
                object.AssetType = "";
                if (options.bytes === String)
                    object.AssetCode = "";
                else {
                    object.AssetCode = [];
                    if (options.bytes !== Array)
                        object.AssetCode = $util.newBuffer(object.AssetCode);
                }
            }
            if (message.ContractIndex != null && message.hasOwnProperty("ContractIndex"))
                object.ContractIndex = message.ContractIndex;
            if (message.AssetType != null && message.hasOwnProperty("AssetType"))
                object.AssetType = message.AssetType;
            if (message.AssetCode != null && message.hasOwnProperty("AssetCode"))
                object.AssetCode = options.bytes === String ? $util.base64.encode(message.AssetCode, 0, message.AssetCode.length) : options.bytes === Array ? Array.prototype.slice.call(message.AssetCode) : message.AssetCode;
            if (message.Settlements && message.Settlements.length) {
                object.Settlements = [];
                for (var j = 0; j < message.Settlements.length; ++j)
                    object.Settlements[j] = $root.actions.QuantityIndexField.toObject(message.Settlements[j], options);
            }
            return object;
        };

        /**
         * Converts this AssetSettlementField to JSON.
         * @function toJSON
         * @memberof actions.AssetSettlementField
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        AssetSettlementField.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return AssetSettlementField;
    })();

    actions.AssetTransferField = (function() {

        /**
         * Properties of an AssetTransferField.
         * @memberof actions
         * @interface IAssetTransferField
         * @property {number|null} [ContractIndex] AssetTransferField ContractIndex
         * @property {string|null} [AssetType] AssetTransferField AssetType
         * @property {Uint8Array|null} [AssetCode] AssetTransferField AssetCode
         * @property {Array.<actions.IQuantityIndexField>|null} [AssetSenders] AssetTransferField AssetSenders
         * @property {Array.<actions.IAssetReceiverField>|null} [AssetReceivers] AssetTransferField AssetReceivers
         */

        /**
         * Constructs a new AssetTransferField.
         * @memberof actions
         * @classdesc Represents an AssetTransferField.
         * @implements IAssetTransferField
         * @constructor
         * @param {actions.IAssetTransferField=} [properties] Properties to set
         */
        function AssetTransferField(properties) {
            this.AssetSenders = [];
            this.AssetReceivers = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * AssetTransferField ContractIndex.
         * @member {number} ContractIndex
         * @memberof actions.AssetTransferField
         * @instance
         */
        AssetTransferField.prototype.ContractIndex = 0;

        /**
         * AssetTransferField AssetType.
         * @member {string} AssetType
         * @memberof actions.AssetTransferField
         * @instance
         */
        AssetTransferField.prototype.AssetType = "";

        /**
         * AssetTransferField AssetCode.
         * @member {Uint8Array} AssetCode
         * @memberof actions.AssetTransferField
         * @instance
         */
        AssetTransferField.prototype.AssetCode = $util.newBuffer([]);

        /**
         * AssetTransferField AssetSenders.
         * @member {Array.<actions.IQuantityIndexField>} AssetSenders
         * @memberof actions.AssetTransferField
         * @instance
         */
        AssetTransferField.prototype.AssetSenders = $util.emptyArray;

        /**
         * AssetTransferField AssetReceivers.
         * @member {Array.<actions.IAssetReceiverField>} AssetReceivers
         * @memberof actions.AssetTransferField
         * @instance
         */
        AssetTransferField.prototype.AssetReceivers = $util.emptyArray;

        /**
         * Creates a new AssetTransferField instance using the specified properties.
         * @function create
         * @memberof actions.AssetTransferField
         * @static
         * @param {actions.IAssetTransferField=} [properties] Properties to set
         * @returns {actions.AssetTransferField} AssetTransferField instance
         */
        AssetTransferField.create = function create(properties) {
            return new AssetTransferField(properties);
        };

        /**
         * Encodes the specified AssetTransferField message. Does not implicitly {@link actions.AssetTransferField.verify|verify} messages.
         * @function encode
         * @memberof actions.AssetTransferField
         * @static
         * @param {actions.IAssetTransferField} message AssetTransferField message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AssetTransferField.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.ContractIndex != null && Object.hasOwnProperty.call(message, "ContractIndex"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.ContractIndex);
            if (message.AssetType != null && Object.hasOwnProperty.call(message, "AssetType"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.AssetType);
            if (message.AssetCode != null && Object.hasOwnProperty.call(message, "AssetCode"))
                writer.uint32(/* id 3, wireType 2 =*/26).bytes(message.AssetCode);
            if (message.AssetSenders != null && message.AssetSenders.length)
                for (var i = 0; i < message.AssetSenders.length; ++i)
                    $root.actions.QuantityIndexField.encode(message.AssetSenders[i], writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            if (message.AssetReceivers != null && message.AssetReceivers.length)
                for (var i = 0; i < message.AssetReceivers.length; ++i)
                    $root.actions.AssetReceiverField.encode(message.AssetReceivers[i], writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified AssetTransferField message, length delimited. Does not implicitly {@link actions.AssetTransferField.verify|verify} messages.
         * @function encodeDelimited
         * @memberof actions.AssetTransferField
         * @static
         * @param {actions.IAssetTransferField} message AssetTransferField message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AssetTransferField.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an AssetTransferField message from the specified reader or buffer.
         * @function decode
         * @memberof actions.AssetTransferField
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {actions.AssetTransferField} AssetTransferField
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AssetTransferField.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.actions.AssetTransferField();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.ContractIndex = reader.uint32();
                    break;
                case 2:
                    message.AssetType = reader.string();
                    break;
                case 3:
                    message.AssetCode = reader.bytes();
                    break;
                case 4:
                    if (!(message.AssetSenders && message.AssetSenders.length))
                        message.AssetSenders = [];
                    message.AssetSenders.push($root.actions.QuantityIndexField.decode(reader, reader.uint32()));
                    break;
                case 5:
                    if (!(message.AssetReceivers && message.AssetReceivers.length))
                        message.AssetReceivers = [];
                    message.AssetReceivers.push($root.actions.AssetReceiverField.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an AssetTransferField message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof actions.AssetTransferField
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {actions.AssetTransferField} AssetTransferField
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AssetTransferField.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an AssetTransferField message.
         * @function verify
         * @memberof actions.AssetTransferField
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        AssetTransferField.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.ContractIndex != null && message.hasOwnProperty("ContractIndex"))
                if (!$util.isInteger(message.ContractIndex))
                    return "ContractIndex: integer expected";
            if (message.AssetType != null && message.hasOwnProperty("AssetType"))
                if (!$util.isString(message.AssetType))
                    return "AssetType: string expected";
            if (message.AssetCode != null && message.hasOwnProperty("AssetCode"))
                if (!(message.AssetCode && typeof message.AssetCode.length === "number" || $util.isString(message.AssetCode)))
                    return "AssetCode: buffer expected";
            if (message.AssetSenders != null && message.hasOwnProperty("AssetSenders")) {
                if (!Array.isArray(message.AssetSenders))
                    return "AssetSenders: array expected";
                for (var i = 0; i < message.AssetSenders.length; ++i) {
                    var error = $root.actions.QuantityIndexField.verify(message.AssetSenders[i]);
                    if (error)
                        return "AssetSenders." + error;
                }
            }
            if (message.AssetReceivers != null && message.hasOwnProperty("AssetReceivers")) {
                if (!Array.isArray(message.AssetReceivers))
                    return "AssetReceivers: array expected";
                for (var i = 0; i < message.AssetReceivers.length; ++i) {
                    var error = $root.actions.AssetReceiverField.verify(message.AssetReceivers[i]);
                    if (error)
                        return "AssetReceivers." + error;
                }
            }
            return null;
        };

        /**
         * Creates an AssetTransferField message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof actions.AssetTransferField
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {actions.AssetTransferField} AssetTransferField
         */
        AssetTransferField.fromObject = function fromObject(object) {
            if (object instanceof $root.actions.AssetTransferField)
                return object;
            var message = new $root.actions.AssetTransferField();
            if (object.ContractIndex != null)
                message.ContractIndex = object.ContractIndex >>> 0;
            if (object.AssetType != null)
                message.AssetType = String(object.AssetType);
            if (object.AssetCode != null)
                if (typeof object.AssetCode === "string")
                    $util.base64.decode(object.AssetCode, message.AssetCode = $util.newBuffer($util.base64.length(object.AssetCode)), 0);
                else if (object.AssetCode.length)
                    message.AssetCode = object.AssetCode;
            if (object.AssetSenders) {
                if (!Array.isArray(object.AssetSenders))
                    throw TypeError(".actions.AssetTransferField.AssetSenders: array expected");
                message.AssetSenders = [];
                for (var i = 0; i < object.AssetSenders.length; ++i) {
                    if (typeof object.AssetSenders[i] !== "object")
                        throw TypeError(".actions.AssetTransferField.AssetSenders: object expected");
                    message.AssetSenders[i] = $root.actions.QuantityIndexField.fromObject(object.AssetSenders[i]);
                }
            }
            if (object.AssetReceivers) {
                if (!Array.isArray(object.AssetReceivers))
                    throw TypeError(".actions.AssetTransferField.AssetReceivers: array expected");
                message.AssetReceivers = [];
                for (var i = 0; i < object.AssetReceivers.length; ++i) {
                    if (typeof object.AssetReceivers[i] !== "object")
                        throw TypeError(".actions.AssetTransferField.AssetReceivers: object expected");
                    message.AssetReceivers[i] = $root.actions.AssetReceiverField.fromObject(object.AssetReceivers[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from an AssetTransferField message. Also converts values to other types if specified.
         * @function toObject
         * @memberof actions.AssetTransferField
         * @static
         * @param {actions.AssetTransferField} message AssetTransferField
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        AssetTransferField.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults) {
                object.AssetSenders = [];
                object.AssetReceivers = [];
            }
            if (options.defaults) {
                object.ContractIndex = 0;
                object.AssetType = "";
                if (options.bytes === String)
                    object.AssetCode = "";
                else {
                    object.AssetCode = [];
                    if (options.bytes !== Array)
                        object.AssetCode = $util.newBuffer(object.AssetCode);
                }
            }
            if (message.ContractIndex != null && message.hasOwnProperty("ContractIndex"))
                object.ContractIndex = message.ContractIndex;
            if (message.AssetType != null && message.hasOwnProperty("AssetType"))
                object.AssetType = message.AssetType;
            if (message.AssetCode != null && message.hasOwnProperty("AssetCode"))
                object.AssetCode = options.bytes === String ? $util.base64.encode(message.AssetCode, 0, message.AssetCode.length) : options.bytes === Array ? Array.prototype.slice.call(message.AssetCode) : message.AssetCode;
            if (message.AssetSenders && message.AssetSenders.length) {
                object.AssetSenders = [];
                for (var j = 0; j < message.AssetSenders.length; ++j)
                    object.AssetSenders[j] = $root.actions.QuantityIndexField.toObject(message.AssetSenders[j], options);
            }
            if (message.AssetReceivers && message.AssetReceivers.length) {
                object.AssetReceivers = [];
                for (var j = 0; j < message.AssetReceivers.length; ++j)
                    object.AssetReceivers[j] = $root.actions.AssetReceiverField.toObject(message.AssetReceivers[j], options);
            }
            return object;
        };

        /**
         * Converts this AssetTransferField to JSON.
         * @function toJSON
         * @memberof actions.AssetTransferField
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        AssetTransferField.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return AssetTransferField;
    })();

    actions.DocumentField = (function() {

        /**
         * Properties of a DocumentField.
         * @memberof actions
         * @interface IDocumentField
         * @property {string|null} [Name] DocumentField Name
         * @property {string|null} [Type] DocumentField Type
         * @property {Uint8Array|null} [Contents] DocumentField Contents
         */

        /**
         * Constructs a new DocumentField.
         * @memberof actions
         * @classdesc Represents a DocumentField.
         * @implements IDocumentField
         * @constructor
         * @param {actions.IDocumentField=} [properties] Properties to set
         */
        function DocumentField(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * DocumentField Name.
         * @member {string} Name
         * @memberof actions.DocumentField
         * @instance
         */
        DocumentField.prototype.Name = "";

        /**
         * DocumentField Type.
         * @member {string} Type
         * @memberof actions.DocumentField
         * @instance
         */
        DocumentField.prototype.Type = "";

        /**
         * DocumentField Contents.
         * @member {Uint8Array} Contents
         * @memberof actions.DocumentField
         * @instance
         */
        DocumentField.prototype.Contents = $util.newBuffer([]);

        /**
         * Creates a new DocumentField instance using the specified properties.
         * @function create
         * @memberof actions.DocumentField
         * @static
         * @param {actions.IDocumentField=} [properties] Properties to set
         * @returns {actions.DocumentField} DocumentField instance
         */
        DocumentField.create = function create(properties) {
            return new DocumentField(properties);
        };

        /**
         * Encodes the specified DocumentField message. Does not implicitly {@link actions.DocumentField.verify|verify} messages.
         * @function encode
         * @memberof actions.DocumentField
         * @static
         * @param {actions.IDocumentField} message DocumentField message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DocumentField.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Name != null && Object.hasOwnProperty.call(message, "Name"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.Name);
            if (message.Type != null && Object.hasOwnProperty.call(message, "Type"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.Type);
            if (message.Contents != null && Object.hasOwnProperty.call(message, "Contents"))
                writer.uint32(/* id 3, wireType 2 =*/26).bytes(message.Contents);
            return writer;
        };

        /**
         * Encodes the specified DocumentField message, length delimited. Does not implicitly {@link actions.DocumentField.verify|verify} messages.
         * @function encodeDelimited
         * @memberof actions.DocumentField
         * @static
         * @param {actions.IDocumentField} message DocumentField message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DocumentField.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a DocumentField message from the specified reader or buffer.
         * @function decode
         * @memberof actions.DocumentField
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {actions.DocumentField} DocumentField
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DocumentField.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.actions.DocumentField();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.Name = reader.string();
                    break;
                case 2:
                    message.Type = reader.string();
                    break;
                case 3:
                    message.Contents = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a DocumentField message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof actions.DocumentField
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {actions.DocumentField} DocumentField
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DocumentField.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a DocumentField message.
         * @function verify
         * @memberof actions.DocumentField
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        DocumentField.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.Name != null && message.hasOwnProperty("Name"))
                if (!$util.isString(message.Name))
                    return "Name: string expected";
            if (message.Type != null && message.hasOwnProperty("Type"))
                if (!$util.isString(message.Type))
                    return "Type: string expected";
            if (message.Contents != null && message.hasOwnProperty("Contents"))
                if (!(message.Contents && typeof message.Contents.length === "number" || $util.isString(message.Contents)))
                    return "Contents: buffer expected";
            return null;
        };

        /**
         * Creates a DocumentField message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof actions.DocumentField
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {actions.DocumentField} DocumentField
         */
        DocumentField.fromObject = function fromObject(object) {
            if (object instanceof $root.actions.DocumentField)
                return object;
            var message = new $root.actions.DocumentField();
            if (object.Name != null)
                message.Name = String(object.Name);
            if (object.Type != null)
                message.Type = String(object.Type);
            if (object.Contents != null)
                if (typeof object.Contents === "string")
                    $util.base64.decode(object.Contents, message.Contents = $util.newBuffer($util.base64.length(object.Contents)), 0);
                else if (object.Contents.length)
                    message.Contents = object.Contents;
            return message;
        };

        /**
         * Creates a plain object from a DocumentField message. Also converts values to other types if specified.
         * @function toObject
         * @memberof actions.DocumentField
         * @static
         * @param {actions.DocumentField} message DocumentField
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        DocumentField.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.Name = "";
                object.Type = "";
                if (options.bytes === String)
                    object.Contents = "";
                else {
                    object.Contents = [];
                    if (options.bytes !== Array)
                        object.Contents = $util.newBuffer(object.Contents);
                }
            }
            if (message.Name != null && message.hasOwnProperty("Name"))
                object.Name = message.Name;
            if (message.Type != null && message.hasOwnProperty("Type"))
                object.Type = message.Type;
            if (message.Contents != null && message.hasOwnProperty("Contents"))
                object.Contents = options.bytes === String ? $util.base64.encode(message.Contents, 0, message.Contents.length) : options.bytes === Array ? Array.prototype.slice.call(message.Contents) : message.Contents;
            return object;
        };

        /**
         * Converts this DocumentField to JSON.
         * @function toJSON
         * @memberof actions.DocumentField
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        DocumentField.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return DocumentField;
    })();

    actions.EntityField = (function() {

        /**
         * Properties of an EntityField.
         * @memberof actions
         * @interface IEntityField
         * @property {string|null} [Name] EntityField Name
         * @property {string|null} [Type] EntityField Type
         * @property {string|null} [LEI] EntityField LEI
         * @property {string|null} [UnitNumber] EntityField UnitNumber
         * @property {string|null} [BuildingNumber] EntityField BuildingNumber
         * @property {string|null} [Street] EntityField Street
         * @property {string|null} [SuburbCity] EntityField SuburbCity
         * @property {string|null} [TerritoryStateProvinceCode] EntityField TerritoryStateProvinceCode
         * @property {string|null} [CountryCode] EntityField CountryCode
         * @property {string|null} [PostalZIPCode] EntityField PostalZIPCode
         * @property {string|null} [EmailAddress] EntityField EmailAddress
         * @property {string|null} [PhoneNumber] EntityField PhoneNumber
         * @property {Array.<actions.IAdministratorField>|null} [Administration] EntityField Administration
         * @property {Array.<actions.IManagerField>|null} [Management] EntityField Management
         * @property {string|null} [DomainName] EntityField DomainName
         * @property {string|null} [PaymailHandle] EntityField PaymailHandle
         */

        /**
         * Constructs a new EntityField.
         * @memberof actions
         * @classdesc Represents an EntityField.
         * @implements IEntityField
         * @constructor
         * @param {actions.IEntityField=} [properties] Properties to set
         */
        function EntityField(properties) {
            this.Administration = [];
            this.Management = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * EntityField Name.
         * @member {string} Name
         * @memberof actions.EntityField
         * @instance
         */
        EntityField.prototype.Name = "";

        /**
         * EntityField Type.
         * @member {string} Type
         * @memberof actions.EntityField
         * @instance
         */
        EntityField.prototype.Type = "";

        /**
         * EntityField LEI.
         * @member {string} LEI
         * @memberof actions.EntityField
         * @instance
         */
        EntityField.prototype.LEI = "";

        /**
         * EntityField UnitNumber.
         * @member {string} UnitNumber
         * @memberof actions.EntityField
         * @instance
         */
        EntityField.prototype.UnitNumber = "";

        /**
         * EntityField BuildingNumber.
         * @member {string} BuildingNumber
         * @memberof actions.EntityField
         * @instance
         */
        EntityField.prototype.BuildingNumber = "";

        /**
         * EntityField Street.
         * @member {string} Street
         * @memberof actions.EntityField
         * @instance
         */
        EntityField.prototype.Street = "";

        /**
         * EntityField SuburbCity.
         * @member {string} SuburbCity
         * @memberof actions.EntityField
         * @instance
         */
        EntityField.prototype.SuburbCity = "";

        /**
         * EntityField TerritoryStateProvinceCode.
         * @member {string} TerritoryStateProvinceCode
         * @memberof actions.EntityField
         * @instance
         */
        EntityField.prototype.TerritoryStateProvinceCode = "";

        /**
         * EntityField CountryCode.
         * @member {string} CountryCode
         * @memberof actions.EntityField
         * @instance
         */
        EntityField.prototype.CountryCode = "";

        /**
         * EntityField PostalZIPCode.
         * @member {string} PostalZIPCode
         * @memberof actions.EntityField
         * @instance
         */
        EntityField.prototype.PostalZIPCode = "";

        /**
         * EntityField EmailAddress.
         * @member {string} EmailAddress
         * @memberof actions.EntityField
         * @instance
         */
        EntityField.prototype.EmailAddress = "";

        /**
         * EntityField PhoneNumber.
         * @member {string} PhoneNumber
         * @memberof actions.EntityField
         * @instance
         */
        EntityField.prototype.PhoneNumber = "";

        /**
         * EntityField Administration.
         * @member {Array.<actions.IAdministratorField>} Administration
         * @memberof actions.EntityField
         * @instance
         */
        EntityField.prototype.Administration = $util.emptyArray;

        /**
         * EntityField Management.
         * @member {Array.<actions.IManagerField>} Management
         * @memberof actions.EntityField
         * @instance
         */
        EntityField.prototype.Management = $util.emptyArray;

        /**
         * EntityField DomainName.
         * @member {string} DomainName
         * @memberof actions.EntityField
         * @instance
         */
        EntityField.prototype.DomainName = "";

        /**
         * EntityField PaymailHandle.
         * @member {string} PaymailHandle
         * @memberof actions.EntityField
         * @instance
         */
        EntityField.prototype.PaymailHandle = "";

        /**
         * Creates a new EntityField instance using the specified properties.
         * @function create
         * @memberof actions.EntityField
         * @static
         * @param {actions.IEntityField=} [properties] Properties to set
         * @returns {actions.EntityField} EntityField instance
         */
        EntityField.create = function create(properties) {
            return new EntityField(properties);
        };

        /**
         * Encodes the specified EntityField message. Does not implicitly {@link actions.EntityField.verify|verify} messages.
         * @function encode
         * @memberof actions.EntityField
         * @static
         * @param {actions.IEntityField} message EntityField message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        EntityField.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Name != null && Object.hasOwnProperty.call(message, "Name"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.Name);
            if (message.Type != null && Object.hasOwnProperty.call(message, "Type"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.Type);
            if (message.LEI != null && Object.hasOwnProperty.call(message, "LEI"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.LEI);
            if (message.UnitNumber != null && Object.hasOwnProperty.call(message, "UnitNumber"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.UnitNumber);
            if (message.BuildingNumber != null && Object.hasOwnProperty.call(message, "BuildingNumber"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.BuildingNumber);
            if (message.Street != null && Object.hasOwnProperty.call(message, "Street"))
                writer.uint32(/* id 6, wireType 2 =*/50).string(message.Street);
            if (message.SuburbCity != null && Object.hasOwnProperty.call(message, "SuburbCity"))
                writer.uint32(/* id 7, wireType 2 =*/58).string(message.SuburbCity);
            if (message.TerritoryStateProvinceCode != null && Object.hasOwnProperty.call(message, "TerritoryStateProvinceCode"))
                writer.uint32(/* id 8, wireType 2 =*/66).string(message.TerritoryStateProvinceCode);
            if (message.CountryCode != null && Object.hasOwnProperty.call(message, "CountryCode"))
                writer.uint32(/* id 9, wireType 2 =*/74).string(message.CountryCode);
            if (message.PostalZIPCode != null && Object.hasOwnProperty.call(message, "PostalZIPCode"))
                writer.uint32(/* id 10, wireType 2 =*/82).string(message.PostalZIPCode);
            if (message.EmailAddress != null && Object.hasOwnProperty.call(message, "EmailAddress"))
                writer.uint32(/* id 11, wireType 2 =*/90).string(message.EmailAddress);
            if (message.PhoneNumber != null && Object.hasOwnProperty.call(message, "PhoneNumber"))
                writer.uint32(/* id 12, wireType 2 =*/98).string(message.PhoneNumber);
            if (message.Administration != null && message.Administration.length)
                for (var i = 0; i < message.Administration.length; ++i)
                    $root.actions.AdministratorField.encode(message.Administration[i], writer.uint32(/* id 13, wireType 2 =*/106).fork()).ldelim();
            if (message.Management != null && message.Management.length)
                for (var i = 0; i < message.Management.length; ++i)
                    $root.actions.ManagerField.encode(message.Management[i], writer.uint32(/* id 14, wireType 2 =*/114).fork()).ldelim();
            if (message.DomainName != null && Object.hasOwnProperty.call(message, "DomainName"))
                writer.uint32(/* id 15, wireType 2 =*/122).string(message.DomainName);
            if (message.PaymailHandle != null && Object.hasOwnProperty.call(message, "PaymailHandle"))
                writer.uint32(/* id 17, wireType 2 =*/138).string(message.PaymailHandle);
            return writer;
        };

        /**
         * Encodes the specified EntityField message, length delimited. Does not implicitly {@link actions.EntityField.verify|verify} messages.
         * @function encodeDelimited
         * @memberof actions.EntityField
         * @static
         * @param {actions.IEntityField} message EntityField message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        EntityField.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an EntityField message from the specified reader or buffer.
         * @function decode
         * @memberof actions.EntityField
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {actions.EntityField} EntityField
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        EntityField.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.actions.EntityField();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.Name = reader.string();
                    break;
                case 2:
                    message.Type = reader.string();
                    break;
                case 3:
                    message.LEI = reader.string();
                    break;
                case 4:
                    message.UnitNumber = reader.string();
                    break;
                case 5:
                    message.BuildingNumber = reader.string();
                    break;
                case 6:
                    message.Street = reader.string();
                    break;
                case 7:
                    message.SuburbCity = reader.string();
                    break;
                case 8:
                    message.TerritoryStateProvinceCode = reader.string();
                    break;
                case 9:
                    message.CountryCode = reader.string();
                    break;
                case 10:
                    message.PostalZIPCode = reader.string();
                    break;
                case 11:
                    message.EmailAddress = reader.string();
                    break;
                case 12:
                    message.PhoneNumber = reader.string();
                    break;
                case 13:
                    if (!(message.Administration && message.Administration.length))
                        message.Administration = [];
                    message.Administration.push($root.actions.AdministratorField.decode(reader, reader.uint32()));
                    break;
                case 14:
                    if (!(message.Management && message.Management.length))
                        message.Management = [];
                    message.Management.push($root.actions.ManagerField.decode(reader, reader.uint32()));
                    break;
                case 15:
                    message.DomainName = reader.string();
                    break;
                case 17:
                    message.PaymailHandle = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an EntityField message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof actions.EntityField
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {actions.EntityField} EntityField
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        EntityField.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an EntityField message.
         * @function verify
         * @memberof actions.EntityField
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        EntityField.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.Name != null && message.hasOwnProperty("Name"))
                if (!$util.isString(message.Name))
                    return "Name: string expected";
            if (message.Type != null && message.hasOwnProperty("Type"))
                if (!$util.isString(message.Type))
                    return "Type: string expected";
            if (message.LEI != null && message.hasOwnProperty("LEI"))
                if (!$util.isString(message.LEI))
                    return "LEI: string expected";
            if (message.UnitNumber != null && message.hasOwnProperty("UnitNumber"))
                if (!$util.isString(message.UnitNumber))
                    return "UnitNumber: string expected";
            if (message.BuildingNumber != null && message.hasOwnProperty("BuildingNumber"))
                if (!$util.isString(message.BuildingNumber))
                    return "BuildingNumber: string expected";
            if (message.Street != null && message.hasOwnProperty("Street"))
                if (!$util.isString(message.Street))
                    return "Street: string expected";
            if (message.SuburbCity != null && message.hasOwnProperty("SuburbCity"))
                if (!$util.isString(message.SuburbCity))
                    return "SuburbCity: string expected";
            if (message.TerritoryStateProvinceCode != null && message.hasOwnProperty("TerritoryStateProvinceCode"))
                if (!$util.isString(message.TerritoryStateProvinceCode))
                    return "TerritoryStateProvinceCode: string expected";
            if (message.CountryCode != null && message.hasOwnProperty("CountryCode"))
                if (!$util.isString(message.CountryCode))
                    return "CountryCode: string expected";
            if (message.PostalZIPCode != null && message.hasOwnProperty("PostalZIPCode"))
                if (!$util.isString(message.PostalZIPCode))
                    return "PostalZIPCode: string expected";
            if (message.EmailAddress != null && message.hasOwnProperty("EmailAddress"))
                if (!$util.isString(message.EmailAddress))
                    return "EmailAddress: string expected";
            if (message.PhoneNumber != null && message.hasOwnProperty("PhoneNumber"))
                if (!$util.isString(message.PhoneNumber))
                    return "PhoneNumber: string expected";
            if (message.Administration != null && message.hasOwnProperty("Administration")) {
                if (!Array.isArray(message.Administration))
                    return "Administration: array expected";
                for (var i = 0; i < message.Administration.length; ++i) {
                    var error = $root.actions.AdministratorField.verify(message.Administration[i]);
                    if (error)
                        return "Administration." + error;
                }
            }
            if (message.Management != null && message.hasOwnProperty("Management")) {
                if (!Array.isArray(message.Management))
                    return "Management: array expected";
                for (var i = 0; i < message.Management.length; ++i) {
                    var error = $root.actions.ManagerField.verify(message.Management[i]);
                    if (error)
                        return "Management." + error;
                }
            }
            if (message.DomainName != null && message.hasOwnProperty("DomainName"))
                if (!$util.isString(message.DomainName))
                    return "DomainName: string expected";
            if (message.PaymailHandle != null && message.hasOwnProperty("PaymailHandle"))
                if (!$util.isString(message.PaymailHandle))
                    return "PaymailHandle: string expected";
            return null;
        };

        /**
         * Creates an EntityField message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof actions.EntityField
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {actions.EntityField} EntityField
         */
        EntityField.fromObject = function fromObject(object) {
            if (object instanceof $root.actions.EntityField)
                return object;
            var message = new $root.actions.EntityField();
            if (object.Name != null)
                message.Name = String(object.Name);
            if (object.Type != null)
                message.Type = String(object.Type);
            if (object.LEI != null)
                message.LEI = String(object.LEI);
            if (object.UnitNumber != null)
                message.UnitNumber = String(object.UnitNumber);
            if (object.BuildingNumber != null)
                message.BuildingNumber = String(object.BuildingNumber);
            if (object.Street != null)
                message.Street = String(object.Street);
            if (object.SuburbCity != null)
                message.SuburbCity = String(object.SuburbCity);
            if (object.TerritoryStateProvinceCode != null)
                message.TerritoryStateProvinceCode = String(object.TerritoryStateProvinceCode);
            if (object.CountryCode != null)
                message.CountryCode = String(object.CountryCode);
            if (object.PostalZIPCode != null)
                message.PostalZIPCode = String(object.PostalZIPCode);
            if (object.EmailAddress != null)
                message.EmailAddress = String(object.EmailAddress);
            if (object.PhoneNumber != null)
                message.PhoneNumber = String(object.PhoneNumber);
            if (object.Administration) {
                if (!Array.isArray(object.Administration))
                    throw TypeError(".actions.EntityField.Administration: array expected");
                message.Administration = [];
                for (var i = 0; i < object.Administration.length; ++i) {
                    if (typeof object.Administration[i] !== "object")
                        throw TypeError(".actions.EntityField.Administration: object expected");
                    message.Administration[i] = $root.actions.AdministratorField.fromObject(object.Administration[i]);
                }
            }
            if (object.Management) {
                if (!Array.isArray(object.Management))
                    throw TypeError(".actions.EntityField.Management: array expected");
                message.Management = [];
                for (var i = 0; i < object.Management.length; ++i) {
                    if (typeof object.Management[i] !== "object")
                        throw TypeError(".actions.EntityField.Management: object expected");
                    message.Management[i] = $root.actions.ManagerField.fromObject(object.Management[i]);
                }
            }
            if (object.DomainName != null)
                message.DomainName = String(object.DomainName);
            if (object.PaymailHandle != null)
                message.PaymailHandle = String(object.PaymailHandle);
            return message;
        };

        /**
         * Creates a plain object from an EntityField message. Also converts values to other types if specified.
         * @function toObject
         * @memberof actions.EntityField
         * @static
         * @param {actions.EntityField} message EntityField
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        EntityField.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults) {
                object.Administration = [];
                object.Management = [];
            }
            if (options.defaults) {
                object.Name = "";
                object.Type = "";
                object.LEI = "";
                object.UnitNumber = "";
                object.BuildingNumber = "";
                object.Street = "";
                object.SuburbCity = "";
                object.TerritoryStateProvinceCode = "";
                object.CountryCode = "";
                object.PostalZIPCode = "";
                object.EmailAddress = "";
                object.PhoneNumber = "";
                object.DomainName = "";
                object.PaymailHandle = "";
            }
            if (message.Name != null && message.hasOwnProperty("Name"))
                object.Name = message.Name;
            if (message.Type != null && message.hasOwnProperty("Type"))
                object.Type = message.Type;
            if (message.LEI != null && message.hasOwnProperty("LEI"))
                object.LEI = message.LEI;
            if (message.UnitNumber != null && message.hasOwnProperty("UnitNumber"))
                object.UnitNumber = message.UnitNumber;
            if (message.BuildingNumber != null && message.hasOwnProperty("BuildingNumber"))
                object.BuildingNumber = message.BuildingNumber;
            if (message.Street != null && message.hasOwnProperty("Street"))
                object.Street = message.Street;
            if (message.SuburbCity != null && message.hasOwnProperty("SuburbCity"))
                object.SuburbCity = message.SuburbCity;
            if (message.TerritoryStateProvinceCode != null && message.hasOwnProperty("TerritoryStateProvinceCode"))
                object.TerritoryStateProvinceCode = message.TerritoryStateProvinceCode;
            if (message.CountryCode != null && message.hasOwnProperty("CountryCode"))
                object.CountryCode = message.CountryCode;
            if (message.PostalZIPCode != null && message.hasOwnProperty("PostalZIPCode"))
                object.PostalZIPCode = message.PostalZIPCode;
            if (message.EmailAddress != null && message.hasOwnProperty("EmailAddress"))
                object.EmailAddress = message.EmailAddress;
            if (message.PhoneNumber != null && message.hasOwnProperty("PhoneNumber"))
                object.PhoneNumber = message.PhoneNumber;
            if (message.Administration && message.Administration.length) {
                object.Administration = [];
                for (var j = 0; j < message.Administration.length; ++j)
                    object.Administration[j] = $root.actions.AdministratorField.toObject(message.Administration[j], options);
            }
            if (message.Management && message.Management.length) {
                object.Management = [];
                for (var j = 0; j < message.Management.length; ++j)
                    object.Management[j] = $root.actions.ManagerField.toObject(message.Management[j], options);
            }
            if (message.DomainName != null && message.hasOwnProperty("DomainName"))
                object.DomainName = message.DomainName;
            if (message.PaymailHandle != null && message.hasOwnProperty("PaymailHandle"))
                object.PaymailHandle = message.PaymailHandle;
            return object;
        };

        /**
         * Converts this EntityField to JSON.
         * @function toJSON
         * @memberof actions.EntityField
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        EntityField.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return EntityField;
    })();

    actions.ManagerField = (function() {

        /**
         * Properties of a ManagerField.
         * @memberof actions
         * @interface IManagerField
         * @property {number|null} [Type] ManagerField Type
         * @property {string|null} [Name] ManagerField Name
         */

        /**
         * Constructs a new ManagerField.
         * @memberof actions
         * @classdesc Represents a ManagerField.
         * @implements IManagerField
         * @constructor
         * @param {actions.IManagerField=} [properties] Properties to set
         */
        function ManagerField(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ManagerField Type.
         * @member {number} Type
         * @memberof actions.ManagerField
         * @instance
         */
        ManagerField.prototype.Type = 0;

        /**
         * ManagerField Name.
         * @member {string} Name
         * @memberof actions.ManagerField
         * @instance
         */
        ManagerField.prototype.Name = "";

        /**
         * Creates a new ManagerField instance using the specified properties.
         * @function create
         * @memberof actions.ManagerField
         * @static
         * @param {actions.IManagerField=} [properties] Properties to set
         * @returns {actions.ManagerField} ManagerField instance
         */
        ManagerField.create = function create(properties) {
            return new ManagerField(properties);
        };

        /**
         * Encodes the specified ManagerField message. Does not implicitly {@link actions.ManagerField.verify|verify} messages.
         * @function encode
         * @memberof actions.ManagerField
         * @static
         * @param {actions.IManagerField} message ManagerField message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ManagerField.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Type != null && Object.hasOwnProperty.call(message, "Type"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.Type);
            if (message.Name != null && Object.hasOwnProperty.call(message, "Name"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.Name);
            return writer;
        };

        /**
         * Encodes the specified ManagerField message, length delimited. Does not implicitly {@link actions.ManagerField.verify|verify} messages.
         * @function encodeDelimited
         * @memberof actions.ManagerField
         * @static
         * @param {actions.IManagerField} message ManagerField message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ManagerField.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ManagerField message from the specified reader or buffer.
         * @function decode
         * @memberof actions.ManagerField
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {actions.ManagerField} ManagerField
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ManagerField.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.actions.ManagerField();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.Type = reader.uint32();
                    break;
                case 2:
                    message.Name = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ManagerField message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof actions.ManagerField
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {actions.ManagerField} ManagerField
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ManagerField.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ManagerField message.
         * @function verify
         * @memberof actions.ManagerField
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ManagerField.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.Type != null && message.hasOwnProperty("Type"))
                if (!$util.isInteger(message.Type))
                    return "Type: integer expected";
            if (message.Name != null && message.hasOwnProperty("Name"))
                if (!$util.isString(message.Name))
                    return "Name: string expected";
            return null;
        };

        /**
         * Creates a ManagerField message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof actions.ManagerField
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {actions.ManagerField} ManagerField
         */
        ManagerField.fromObject = function fromObject(object) {
            if (object instanceof $root.actions.ManagerField)
                return object;
            var message = new $root.actions.ManagerField();
            if (object.Type != null)
                message.Type = object.Type >>> 0;
            if (object.Name != null)
                message.Name = String(object.Name);
            return message;
        };

        /**
         * Creates a plain object from a ManagerField message. Also converts values to other types if specified.
         * @function toObject
         * @memberof actions.ManagerField
         * @static
         * @param {actions.ManagerField} message ManagerField
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ManagerField.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.Type = 0;
                object.Name = "";
            }
            if (message.Type != null && message.hasOwnProperty("Type"))
                object.Type = message.Type;
            if (message.Name != null && message.hasOwnProperty("Name"))
                object.Name = message.Name;
            return object;
        };

        /**
         * Converts this ManagerField to JSON.
         * @function toJSON
         * @memberof actions.ManagerField
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ManagerField.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ManagerField;
    })();

    actions.OracleField = (function() {

        /**
         * Properties of an OracleField.
         * @memberof actions
         * @interface IOracleField
         * @property {Array.<number>|null} [OracleTypes] OracleField OracleTypes
         * @property {Uint8Array|null} [EntityContract] OracleField EntityContract
         */

        /**
         * Constructs a new OracleField.
         * @memberof actions
         * @classdesc Represents an OracleField.
         * @implements IOracleField
         * @constructor
         * @param {actions.IOracleField=} [properties] Properties to set
         */
        function OracleField(properties) {
            this.OracleTypes = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * OracleField OracleTypes.
         * @member {Array.<number>} OracleTypes
         * @memberof actions.OracleField
         * @instance
         */
        OracleField.prototype.OracleTypes = $util.emptyArray;

        /**
         * OracleField EntityContract.
         * @member {Uint8Array} EntityContract
         * @memberof actions.OracleField
         * @instance
         */
        OracleField.prototype.EntityContract = $util.newBuffer([]);

        /**
         * Creates a new OracleField instance using the specified properties.
         * @function create
         * @memberof actions.OracleField
         * @static
         * @param {actions.IOracleField=} [properties] Properties to set
         * @returns {actions.OracleField} OracleField instance
         */
        OracleField.create = function create(properties) {
            return new OracleField(properties);
        };

        /**
         * Encodes the specified OracleField message. Does not implicitly {@link actions.OracleField.verify|verify} messages.
         * @function encode
         * @memberof actions.OracleField
         * @static
         * @param {actions.IOracleField} message OracleField message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        OracleField.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.OracleTypes != null && message.OracleTypes.length) {
                writer.uint32(/* id 4, wireType 2 =*/34).fork();
                for (var i = 0; i < message.OracleTypes.length; ++i)
                    writer.uint32(message.OracleTypes[i]);
                writer.ldelim();
            }
            if (message.EntityContract != null && Object.hasOwnProperty.call(message, "EntityContract"))
                writer.uint32(/* id 5, wireType 2 =*/42).bytes(message.EntityContract);
            return writer;
        };

        /**
         * Encodes the specified OracleField message, length delimited. Does not implicitly {@link actions.OracleField.verify|verify} messages.
         * @function encodeDelimited
         * @memberof actions.OracleField
         * @static
         * @param {actions.IOracleField} message OracleField message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        OracleField.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an OracleField message from the specified reader or buffer.
         * @function decode
         * @memberof actions.OracleField
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {actions.OracleField} OracleField
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        OracleField.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.actions.OracleField();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 4:
                    if (!(message.OracleTypes && message.OracleTypes.length))
                        message.OracleTypes = [];
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.OracleTypes.push(reader.uint32());
                    } else
                        message.OracleTypes.push(reader.uint32());
                    break;
                case 5:
                    message.EntityContract = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an OracleField message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof actions.OracleField
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {actions.OracleField} OracleField
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        OracleField.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an OracleField message.
         * @function verify
         * @memberof actions.OracleField
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        OracleField.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.OracleTypes != null && message.hasOwnProperty("OracleTypes")) {
                if (!Array.isArray(message.OracleTypes))
                    return "OracleTypes: array expected";
                for (var i = 0; i < message.OracleTypes.length; ++i)
                    if (!$util.isInteger(message.OracleTypes[i]))
                        return "OracleTypes: integer[] expected";
            }
            if (message.EntityContract != null && message.hasOwnProperty("EntityContract"))
                if (!(message.EntityContract && typeof message.EntityContract.length === "number" || $util.isString(message.EntityContract)))
                    return "EntityContract: buffer expected";
            return null;
        };

        /**
         * Creates an OracleField message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof actions.OracleField
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {actions.OracleField} OracleField
         */
        OracleField.fromObject = function fromObject(object) {
            if (object instanceof $root.actions.OracleField)
                return object;
            var message = new $root.actions.OracleField();
            if (object.OracleTypes) {
                if (!Array.isArray(object.OracleTypes))
                    throw TypeError(".actions.OracleField.OracleTypes: array expected");
                message.OracleTypes = [];
                for (var i = 0; i < object.OracleTypes.length; ++i)
                    message.OracleTypes[i] = object.OracleTypes[i] >>> 0;
            }
            if (object.EntityContract != null)
                if (typeof object.EntityContract === "string")
                    $util.base64.decode(object.EntityContract, message.EntityContract = $util.newBuffer($util.base64.length(object.EntityContract)), 0);
                else if (object.EntityContract.length)
                    message.EntityContract = object.EntityContract;
            return message;
        };

        /**
         * Creates a plain object from an OracleField message. Also converts values to other types if specified.
         * @function toObject
         * @memberof actions.OracleField
         * @static
         * @param {actions.OracleField} message OracleField
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        OracleField.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.OracleTypes = [];
            if (options.defaults)
                if (options.bytes === String)
                    object.EntityContract = "";
                else {
                    object.EntityContract = [];
                    if (options.bytes !== Array)
                        object.EntityContract = $util.newBuffer(object.EntityContract);
                }
            if (message.OracleTypes && message.OracleTypes.length) {
                object.OracleTypes = [];
                for (var j = 0; j < message.OracleTypes.length; ++j)
                    object.OracleTypes[j] = message.OracleTypes[j];
            }
            if (message.EntityContract != null && message.hasOwnProperty("EntityContract"))
                object.EntityContract = options.bytes === String ? $util.base64.encode(message.EntityContract, 0, message.EntityContract.length) : options.bytes === Array ? Array.prototype.slice.call(message.EntityContract) : message.EntityContract;
            return object;
        };

        /**
         * Converts this OracleField to JSON.
         * @function toJSON
         * @memberof actions.OracleField
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        OracleField.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return OracleField;
    })();

    actions.QuantityIndexField = (function() {

        /**
         * Properties of a QuantityIndexField.
         * @memberof actions
         * @interface IQuantityIndexField
         * @property {number|null} [Index] QuantityIndexField Index
         * @property {number|Long|null} [Quantity] QuantityIndexField Quantity
         */

        /**
         * Constructs a new QuantityIndexField.
         * @memberof actions
         * @classdesc Represents a QuantityIndexField.
         * @implements IQuantityIndexField
         * @constructor
         * @param {actions.IQuantityIndexField=} [properties] Properties to set
         */
        function QuantityIndexField(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * QuantityIndexField Index.
         * @member {number} Index
         * @memberof actions.QuantityIndexField
         * @instance
         */
        QuantityIndexField.prototype.Index = 0;

        /**
         * QuantityIndexField Quantity.
         * @member {number|Long} Quantity
         * @memberof actions.QuantityIndexField
         * @instance
         */
        QuantityIndexField.prototype.Quantity = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * Creates a new QuantityIndexField instance using the specified properties.
         * @function create
         * @memberof actions.QuantityIndexField
         * @static
         * @param {actions.IQuantityIndexField=} [properties] Properties to set
         * @returns {actions.QuantityIndexField} QuantityIndexField instance
         */
        QuantityIndexField.create = function create(properties) {
            return new QuantityIndexField(properties);
        };

        /**
         * Encodes the specified QuantityIndexField message. Does not implicitly {@link actions.QuantityIndexField.verify|verify} messages.
         * @function encode
         * @memberof actions.QuantityIndexField
         * @static
         * @param {actions.IQuantityIndexField} message QuantityIndexField message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        QuantityIndexField.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Index != null && Object.hasOwnProperty.call(message, "Index"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.Index);
            if (message.Quantity != null && Object.hasOwnProperty.call(message, "Quantity"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint64(message.Quantity);
            return writer;
        };

        /**
         * Encodes the specified QuantityIndexField message, length delimited. Does not implicitly {@link actions.QuantityIndexField.verify|verify} messages.
         * @function encodeDelimited
         * @memberof actions.QuantityIndexField
         * @static
         * @param {actions.IQuantityIndexField} message QuantityIndexField message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        QuantityIndexField.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a QuantityIndexField message from the specified reader or buffer.
         * @function decode
         * @memberof actions.QuantityIndexField
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {actions.QuantityIndexField} QuantityIndexField
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        QuantityIndexField.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.actions.QuantityIndexField();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.Index = reader.uint32();
                    break;
                case 2:
                    message.Quantity = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a QuantityIndexField message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof actions.QuantityIndexField
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {actions.QuantityIndexField} QuantityIndexField
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        QuantityIndexField.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a QuantityIndexField message.
         * @function verify
         * @memberof actions.QuantityIndexField
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        QuantityIndexField.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.Index != null && message.hasOwnProperty("Index"))
                if (!$util.isInteger(message.Index))
                    return "Index: integer expected";
            if (message.Quantity != null && message.hasOwnProperty("Quantity"))
                if (!$util.isInteger(message.Quantity) && !(message.Quantity && $util.isInteger(message.Quantity.low) && $util.isInteger(message.Quantity.high)))
                    return "Quantity: integer|Long expected";
            return null;
        };

        /**
         * Creates a QuantityIndexField message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof actions.QuantityIndexField
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {actions.QuantityIndexField} QuantityIndexField
         */
        QuantityIndexField.fromObject = function fromObject(object) {
            if (object instanceof $root.actions.QuantityIndexField)
                return object;
            var message = new $root.actions.QuantityIndexField();
            if (object.Index != null)
                message.Index = object.Index >>> 0;
            if (object.Quantity != null)
                if ($util.Long)
                    (message.Quantity = $util.Long.fromValue(object.Quantity)).unsigned = true;
                else if (typeof object.Quantity === "string")
                    message.Quantity = parseInt(object.Quantity, 10);
                else if (typeof object.Quantity === "number")
                    message.Quantity = object.Quantity;
                else if (typeof object.Quantity === "object")
                    message.Quantity = new $util.LongBits(object.Quantity.low >>> 0, object.Quantity.high >>> 0).toNumber(true);
            return message;
        };

        /**
         * Creates a plain object from a QuantityIndexField message. Also converts values to other types if specified.
         * @function toObject
         * @memberof actions.QuantityIndexField
         * @static
         * @param {actions.QuantityIndexField} message QuantityIndexField
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        QuantityIndexField.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.Index = 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.Quantity = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.Quantity = options.longs === String ? "0" : 0;
            }
            if (message.Index != null && message.hasOwnProperty("Index"))
                object.Index = message.Index;
            if (message.Quantity != null && message.hasOwnProperty("Quantity"))
                if (typeof message.Quantity === "number")
                    object.Quantity = options.longs === String ? String(message.Quantity) : message.Quantity;
                else
                    object.Quantity = options.longs === String ? $util.Long.prototype.toString.call(message.Quantity) : options.longs === Number ? new $util.LongBits(message.Quantity.low >>> 0, message.Quantity.high >>> 0).toNumber(true) : message.Quantity;
            return object;
        };

        /**
         * Converts this QuantityIndexField to JSON.
         * @function toJSON
         * @memberof actions.QuantityIndexField
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        QuantityIndexField.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return QuantityIndexField;
    })();

    actions.ReferenceTransactionField = (function() {

        /**
         * Properties of a ReferenceTransactionField.
         * @memberof actions
         * @interface IReferenceTransactionField
         * @property {Uint8Array|null} [Transaction] ReferenceTransactionField Transaction
         * @property {Array.<Uint8Array>|null} [Outputs] ReferenceTransactionField Outputs
         */

        /**
         * Constructs a new ReferenceTransactionField.
         * @memberof actions
         * @classdesc Represents a ReferenceTransactionField.
         * @implements IReferenceTransactionField
         * @constructor
         * @param {actions.IReferenceTransactionField=} [properties] Properties to set
         */
        function ReferenceTransactionField(properties) {
            this.Outputs = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ReferenceTransactionField Transaction.
         * @member {Uint8Array} Transaction
         * @memberof actions.ReferenceTransactionField
         * @instance
         */
        ReferenceTransactionField.prototype.Transaction = $util.newBuffer([]);

        /**
         * ReferenceTransactionField Outputs.
         * @member {Array.<Uint8Array>} Outputs
         * @memberof actions.ReferenceTransactionField
         * @instance
         */
        ReferenceTransactionField.prototype.Outputs = $util.emptyArray;

        /**
         * Creates a new ReferenceTransactionField instance using the specified properties.
         * @function create
         * @memberof actions.ReferenceTransactionField
         * @static
         * @param {actions.IReferenceTransactionField=} [properties] Properties to set
         * @returns {actions.ReferenceTransactionField} ReferenceTransactionField instance
         */
        ReferenceTransactionField.create = function create(properties) {
            return new ReferenceTransactionField(properties);
        };

        /**
         * Encodes the specified ReferenceTransactionField message. Does not implicitly {@link actions.ReferenceTransactionField.verify|verify} messages.
         * @function encode
         * @memberof actions.ReferenceTransactionField
         * @static
         * @param {actions.IReferenceTransactionField} message ReferenceTransactionField message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ReferenceTransactionField.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Transaction != null && Object.hasOwnProperty.call(message, "Transaction"))
                writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.Transaction);
            if (message.Outputs != null && message.Outputs.length)
                for (var i = 0; i < message.Outputs.length; ++i)
                    writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.Outputs[i]);
            return writer;
        };

        /**
         * Encodes the specified ReferenceTransactionField message, length delimited. Does not implicitly {@link actions.ReferenceTransactionField.verify|verify} messages.
         * @function encodeDelimited
         * @memberof actions.ReferenceTransactionField
         * @static
         * @param {actions.IReferenceTransactionField} message ReferenceTransactionField message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ReferenceTransactionField.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ReferenceTransactionField message from the specified reader or buffer.
         * @function decode
         * @memberof actions.ReferenceTransactionField
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {actions.ReferenceTransactionField} ReferenceTransactionField
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ReferenceTransactionField.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.actions.ReferenceTransactionField();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.Transaction = reader.bytes();
                    break;
                case 2:
                    if (!(message.Outputs && message.Outputs.length))
                        message.Outputs = [];
                    message.Outputs.push(reader.bytes());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ReferenceTransactionField message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof actions.ReferenceTransactionField
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {actions.ReferenceTransactionField} ReferenceTransactionField
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ReferenceTransactionField.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ReferenceTransactionField message.
         * @function verify
         * @memberof actions.ReferenceTransactionField
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ReferenceTransactionField.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.Transaction != null && message.hasOwnProperty("Transaction"))
                if (!(message.Transaction && typeof message.Transaction.length === "number" || $util.isString(message.Transaction)))
                    return "Transaction: buffer expected";
            if (message.Outputs != null && message.hasOwnProperty("Outputs")) {
                if (!Array.isArray(message.Outputs))
                    return "Outputs: array expected";
                for (var i = 0; i < message.Outputs.length; ++i)
                    if (!(message.Outputs[i] && typeof message.Outputs[i].length === "number" || $util.isString(message.Outputs[i])))
                        return "Outputs: buffer[] expected";
            }
            return null;
        };

        /**
         * Creates a ReferenceTransactionField message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof actions.ReferenceTransactionField
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {actions.ReferenceTransactionField} ReferenceTransactionField
         */
        ReferenceTransactionField.fromObject = function fromObject(object) {
            if (object instanceof $root.actions.ReferenceTransactionField)
                return object;
            var message = new $root.actions.ReferenceTransactionField();
            if (object.Transaction != null)
                if (typeof object.Transaction === "string")
                    $util.base64.decode(object.Transaction, message.Transaction = $util.newBuffer($util.base64.length(object.Transaction)), 0);
                else if (object.Transaction.length)
                    message.Transaction = object.Transaction;
            if (object.Outputs) {
                if (!Array.isArray(object.Outputs))
                    throw TypeError(".actions.ReferenceTransactionField.Outputs: array expected");
                message.Outputs = [];
                for (var i = 0; i < object.Outputs.length; ++i)
                    if (typeof object.Outputs[i] === "string")
                        $util.base64.decode(object.Outputs[i], message.Outputs[i] = $util.newBuffer($util.base64.length(object.Outputs[i])), 0);
                    else if (object.Outputs[i].length)
                        message.Outputs[i] = object.Outputs[i];
            }
            return message;
        };

        /**
         * Creates a plain object from a ReferenceTransactionField message. Also converts values to other types if specified.
         * @function toObject
         * @memberof actions.ReferenceTransactionField
         * @static
         * @param {actions.ReferenceTransactionField} message ReferenceTransactionField
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ReferenceTransactionField.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.Outputs = [];
            if (options.defaults)
                if (options.bytes === String)
                    object.Transaction = "";
                else {
                    object.Transaction = [];
                    if (options.bytes !== Array)
                        object.Transaction = $util.newBuffer(object.Transaction);
                }
            if (message.Transaction != null && message.hasOwnProperty("Transaction"))
                object.Transaction = options.bytes === String ? $util.base64.encode(message.Transaction, 0, message.Transaction.length) : options.bytes === Array ? Array.prototype.slice.call(message.Transaction) : message.Transaction;
            if (message.Outputs && message.Outputs.length) {
                object.Outputs = [];
                for (var j = 0; j < message.Outputs.length; ++j)
                    object.Outputs[j] = options.bytes === String ? $util.base64.encode(message.Outputs[j], 0, message.Outputs[j].length) : options.bytes === Array ? Array.prototype.slice.call(message.Outputs[j]) : message.Outputs[j];
            }
            return object;
        };

        /**
         * Converts this ReferenceTransactionField to JSON.
         * @function toJSON
         * @memberof actions.ReferenceTransactionField
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ReferenceTransactionField.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ReferenceTransactionField;
    })();

    actions.ServiceField = (function() {

        /**
         * Properties of a ServiceField.
         * @memberof actions
         * @interface IServiceField
         * @property {number|null} [Type] ServiceField Type
         * @property {string|null} [URL] ServiceField URL
         * @property {Uint8Array|null} [PublicKey] ServiceField PublicKey
         */

        /**
         * Constructs a new ServiceField.
         * @memberof actions
         * @classdesc Represents a ServiceField.
         * @implements IServiceField
         * @constructor
         * @param {actions.IServiceField=} [properties] Properties to set
         */
        function ServiceField(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ServiceField Type.
         * @member {number} Type
         * @memberof actions.ServiceField
         * @instance
         */
        ServiceField.prototype.Type = 0;

        /**
         * ServiceField URL.
         * @member {string} URL
         * @memberof actions.ServiceField
         * @instance
         */
        ServiceField.prototype.URL = "";

        /**
         * ServiceField PublicKey.
         * @member {Uint8Array} PublicKey
         * @memberof actions.ServiceField
         * @instance
         */
        ServiceField.prototype.PublicKey = $util.newBuffer([]);

        /**
         * Creates a new ServiceField instance using the specified properties.
         * @function create
         * @memberof actions.ServiceField
         * @static
         * @param {actions.IServiceField=} [properties] Properties to set
         * @returns {actions.ServiceField} ServiceField instance
         */
        ServiceField.create = function create(properties) {
            return new ServiceField(properties);
        };

        /**
         * Encodes the specified ServiceField message. Does not implicitly {@link actions.ServiceField.verify|verify} messages.
         * @function encode
         * @memberof actions.ServiceField
         * @static
         * @param {actions.IServiceField} message ServiceField message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ServiceField.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Type != null && Object.hasOwnProperty.call(message, "Type"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.Type);
            if (message.URL != null && Object.hasOwnProperty.call(message, "URL"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.URL);
            if (message.PublicKey != null && Object.hasOwnProperty.call(message, "PublicKey"))
                writer.uint32(/* id 3, wireType 2 =*/26).bytes(message.PublicKey);
            return writer;
        };

        /**
         * Encodes the specified ServiceField message, length delimited. Does not implicitly {@link actions.ServiceField.verify|verify} messages.
         * @function encodeDelimited
         * @memberof actions.ServiceField
         * @static
         * @param {actions.IServiceField} message ServiceField message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ServiceField.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ServiceField message from the specified reader or buffer.
         * @function decode
         * @memberof actions.ServiceField
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {actions.ServiceField} ServiceField
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ServiceField.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.actions.ServiceField();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.Type = reader.uint32();
                    break;
                case 2:
                    message.URL = reader.string();
                    break;
                case 3:
                    message.PublicKey = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ServiceField message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof actions.ServiceField
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {actions.ServiceField} ServiceField
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ServiceField.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ServiceField message.
         * @function verify
         * @memberof actions.ServiceField
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ServiceField.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.Type != null && message.hasOwnProperty("Type"))
                if (!$util.isInteger(message.Type))
                    return "Type: integer expected";
            if (message.URL != null && message.hasOwnProperty("URL"))
                if (!$util.isString(message.URL))
                    return "URL: string expected";
            if (message.PublicKey != null && message.hasOwnProperty("PublicKey"))
                if (!(message.PublicKey && typeof message.PublicKey.length === "number" || $util.isString(message.PublicKey)))
                    return "PublicKey: buffer expected";
            return null;
        };

        /**
         * Creates a ServiceField message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof actions.ServiceField
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {actions.ServiceField} ServiceField
         */
        ServiceField.fromObject = function fromObject(object) {
            if (object instanceof $root.actions.ServiceField)
                return object;
            var message = new $root.actions.ServiceField();
            if (object.Type != null)
                message.Type = object.Type >>> 0;
            if (object.URL != null)
                message.URL = String(object.URL);
            if (object.PublicKey != null)
                if (typeof object.PublicKey === "string")
                    $util.base64.decode(object.PublicKey, message.PublicKey = $util.newBuffer($util.base64.length(object.PublicKey)), 0);
                else if (object.PublicKey.length)
                    message.PublicKey = object.PublicKey;
            return message;
        };

        /**
         * Creates a plain object from a ServiceField message. Also converts values to other types if specified.
         * @function toObject
         * @memberof actions.ServiceField
         * @static
         * @param {actions.ServiceField} message ServiceField
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ServiceField.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.Type = 0;
                object.URL = "";
                if (options.bytes === String)
                    object.PublicKey = "";
                else {
                    object.PublicKey = [];
                    if (options.bytes !== Array)
                        object.PublicKey = $util.newBuffer(object.PublicKey);
                }
            }
            if (message.Type != null && message.hasOwnProperty("Type"))
                object.Type = message.Type;
            if (message.URL != null && message.hasOwnProperty("URL"))
                object.URL = message.URL;
            if (message.PublicKey != null && message.hasOwnProperty("PublicKey"))
                object.PublicKey = options.bytes === String ? $util.base64.encode(message.PublicKey, 0, message.PublicKey.length) : options.bytes === Array ? Array.prototype.slice.call(message.PublicKey) : message.PublicKey;
            return object;
        };

        /**
         * Converts this ServiceField to JSON.
         * @function toJSON
         * @memberof actions.ServiceField
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ServiceField.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ServiceField;
    })();

    actions.TargetAddressField = (function() {

        /**
         * Properties of a TargetAddressField.
         * @memberof actions
         * @interface ITargetAddressField
         * @property {Uint8Array|null} [Address] TargetAddressField Address
         * @property {number|Long|null} [Quantity] TargetAddressField Quantity
         */

        /**
         * Constructs a new TargetAddressField.
         * @memberof actions
         * @classdesc Represents a TargetAddressField.
         * @implements ITargetAddressField
         * @constructor
         * @param {actions.ITargetAddressField=} [properties] Properties to set
         */
        function TargetAddressField(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * TargetAddressField Address.
         * @member {Uint8Array} Address
         * @memberof actions.TargetAddressField
         * @instance
         */
        TargetAddressField.prototype.Address = $util.newBuffer([]);

        /**
         * TargetAddressField Quantity.
         * @member {number|Long} Quantity
         * @memberof actions.TargetAddressField
         * @instance
         */
        TargetAddressField.prototype.Quantity = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * Creates a new TargetAddressField instance using the specified properties.
         * @function create
         * @memberof actions.TargetAddressField
         * @static
         * @param {actions.ITargetAddressField=} [properties] Properties to set
         * @returns {actions.TargetAddressField} TargetAddressField instance
         */
        TargetAddressField.create = function create(properties) {
            return new TargetAddressField(properties);
        };

        /**
         * Encodes the specified TargetAddressField message. Does not implicitly {@link actions.TargetAddressField.verify|verify} messages.
         * @function encode
         * @memberof actions.TargetAddressField
         * @static
         * @param {actions.ITargetAddressField} message TargetAddressField message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TargetAddressField.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Address != null && Object.hasOwnProperty.call(message, "Address"))
                writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.Address);
            if (message.Quantity != null && Object.hasOwnProperty.call(message, "Quantity"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint64(message.Quantity);
            return writer;
        };

        /**
         * Encodes the specified TargetAddressField message, length delimited. Does not implicitly {@link actions.TargetAddressField.verify|verify} messages.
         * @function encodeDelimited
         * @memberof actions.TargetAddressField
         * @static
         * @param {actions.ITargetAddressField} message TargetAddressField message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TargetAddressField.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a TargetAddressField message from the specified reader or buffer.
         * @function decode
         * @memberof actions.TargetAddressField
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {actions.TargetAddressField} TargetAddressField
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TargetAddressField.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.actions.TargetAddressField();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.Address = reader.bytes();
                    break;
                case 2:
                    message.Quantity = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a TargetAddressField message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof actions.TargetAddressField
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {actions.TargetAddressField} TargetAddressField
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TargetAddressField.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a TargetAddressField message.
         * @function verify
         * @memberof actions.TargetAddressField
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        TargetAddressField.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.Address != null && message.hasOwnProperty("Address"))
                if (!(message.Address && typeof message.Address.length === "number" || $util.isString(message.Address)))
                    return "Address: buffer expected";
            if (message.Quantity != null && message.hasOwnProperty("Quantity"))
                if (!$util.isInteger(message.Quantity) && !(message.Quantity && $util.isInteger(message.Quantity.low) && $util.isInteger(message.Quantity.high)))
                    return "Quantity: integer|Long expected";
            return null;
        };

        /**
         * Creates a TargetAddressField message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof actions.TargetAddressField
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {actions.TargetAddressField} TargetAddressField
         */
        TargetAddressField.fromObject = function fromObject(object) {
            if (object instanceof $root.actions.TargetAddressField)
                return object;
            var message = new $root.actions.TargetAddressField();
            if (object.Address != null)
                if (typeof object.Address === "string")
                    $util.base64.decode(object.Address, message.Address = $util.newBuffer($util.base64.length(object.Address)), 0);
                else if (object.Address.length)
                    message.Address = object.Address;
            if (object.Quantity != null)
                if ($util.Long)
                    (message.Quantity = $util.Long.fromValue(object.Quantity)).unsigned = true;
                else if (typeof object.Quantity === "string")
                    message.Quantity = parseInt(object.Quantity, 10);
                else if (typeof object.Quantity === "number")
                    message.Quantity = object.Quantity;
                else if (typeof object.Quantity === "object")
                    message.Quantity = new $util.LongBits(object.Quantity.low >>> 0, object.Quantity.high >>> 0).toNumber(true);
            return message;
        };

        /**
         * Creates a plain object from a TargetAddressField message. Also converts values to other types if specified.
         * @function toObject
         * @memberof actions.TargetAddressField
         * @static
         * @param {actions.TargetAddressField} message TargetAddressField
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        TargetAddressField.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if (options.bytes === String)
                    object.Address = "";
                else {
                    object.Address = [];
                    if (options.bytes !== Array)
                        object.Address = $util.newBuffer(object.Address);
                }
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.Quantity = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.Quantity = options.longs === String ? "0" : 0;
            }
            if (message.Address != null && message.hasOwnProperty("Address"))
                object.Address = options.bytes === String ? $util.base64.encode(message.Address, 0, message.Address.length) : options.bytes === Array ? Array.prototype.slice.call(message.Address) : message.Address;
            if (message.Quantity != null && message.hasOwnProperty("Quantity"))
                if (typeof message.Quantity === "number")
                    object.Quantity = options.longs === String ? String(message.Quantity) : message.Quantity;
                else
                    object.Quantity = options.longs === String ? $util.Long.prototype.toString.call(message.Quantity) : options.longs === Number ? new $util.LongBits(message.Quantity.low >>> 0, message.Quantity.high >>> 0).toNumber(true) : message.Quantity;
            return object;
        };

        /**
         * Converts this TargetAddressField to JSON.
         * @function toJSON
         * @memberof actions.TargetAddressField
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        TargetAddressField.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return TargetAddressField;
    })();

    actions.VotingSystemField = (function() {

        /**
         * Properties of a VotingSystemField.
         * @memberof actions
         * @interface IVotingSystemField
         * @property {string|null} [Name] VotingSystemField Name
         * @property {string|null} [VoteType] VotingSystemField VoteType
         * @property {number|null} [TallyLogic] VotingSystemField TallyLogic
         * @property {number|null} [ThresholdPercentage] VotingSystemField ThresholdPercentage
         * @property {boolean|null} [VoteMultiplierPermitted] VotingSystemField VoteMultiplierPermitted
         * @property {number|Long|null} [HolderProposalFee] VotingSystemField HolderProposalFee
         */

        /**
         * Constructs a new VotingSystemField.
         * @memberof actions
         * @classdesc Represents a VotingSystemField.
         * @implements IVotingSystemField
         * @constructor
         * @param {actions.IVotingSystemField=} [properties] Properties to set
         */
        function VotingSystemField(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * VotingSystemField Name.
         * @member {string} Name
         * @memberof actions.VotingSystemField
         * @instance
         */
        VotingSystemField.prototype.Name = "";

        /**
         * VotingSystemField VoteType.
         * @member {string} VoteType
         * @memberof actions.VotingSystemField
         * @instance
         */
        VotingSystemField.prototype.VoteType = "";

        /**
         * VotingSystemField TallyLogic.
         * @member {number} TallyLogic
         * @memberof actions.VotingSystemField
         * @instance
         */
        VotingSystemField.prototype.TallyLogic = 0;

        /**
         * VotingSystemField ThresholdPercentage.
         * @member {number} ThresholdPercentage
         * @memberof actions.VotingSystemField
         * @instance
         */
        VotingSystemField.prototype.ThresholdPercentage = 0;

        /**
         * VotingSystemField VoteMultiplierPermitted.
         * @member {boolean} VoteMultiplierPermitted
         * @memberof actions.VotingSystemField
         * @instance
         */
        VotingSystemField.prototype.VoteMultiplierPermitted = false;

        /**
         * VotingSystemField HolderProposalFee.
         * @member {number|Long} HolderProposalFee
         * @memberof actions.VotingSystemField
         * @instance
         */
        VotingSystemField.prototype.HolderProposalFee = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * Creates a new VotingSystemField instance using the specified properties.
         * @function create
         * @memberof actions.VotingSystemField
         * @static
         * @param {actions.IVotingSystemField=} [properties] Properties to set
         * @returns {actions.VotingSystemField} VotingSystemField instance
         */
        VotingSystemField.create = function create(properties) {
            return new VotingSystemField(properties);
        };

        /**
         * Encodes the specified VotingSystemField message. Does not implicitly {@link actions.VotingSystemField.verify|verify} messages.
         * @function encode
         * @memberof actions.VotingSystemField
         * @static
         * @param {actions.IVotingSystemField} message VotingSystemField message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        VotingSystemField.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Name != null && Object.hasOwnProperty.call(message, "Name"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.Name);
            if (message.VoteType != null && Object.hasOwnProperty.call(message, "VoteType"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.VoteType);
            if (message.TallyLogic != null && Object.hasOwnProperty.call(message, "TallyLogic"))
                writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.TallyLogic);
            if (message.ThresholdPercentage != null && Object.hasOwnProperty.call(message, "ThresholdPercentage"))
                writer.uint32(/* id 4, wireType 0 =*/32).uint32(message.ThresholdPercentage);
            if (message.VoteMultiplierPermitted != null && Object.hasOwnProperty.call(message, "VoteMultiplierPermitted"))
                writer.uint32(/* id 5, wireType 0 =*/40).bool(message.VoteMultiplierPermitted);
            if (message.HolderProposalFee != null && Object.hasOwnProperty.call(message, "HolderProposalFee"))
                writer.uint32(/* id 6, wireType 0 =*/48).uint64(message.HolderProposalFee);
            return writer;
        };

        /**
         * Encodes the specified VotingSystemField message, length delimited. Does not implicitly {@link actions.VotingSystemField.verify|verify} messages.
         * @function encodeDelimited
         * @memberof actions.VotingSystemField
         * @static
         * @param {actions.IVotingSystemField} message VotingSystemField message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        VotingSystemField.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a VotingSystemField message from the specified reader or buffer.
         * @function decode
         * @memberof actions.VotingSystemField
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {actions.VotingSystemField} VotingSystemField
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        VotingSystemField.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.actions.VotingSystemField();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.Name = reader.string();
                    break;
                case 2:
                    message.VoteType = reader.string();
                    break;
                case 3:
                    message.TallyLogic = reader.uint32();
                    break;
                case 4:
                    message.ThresholdPercentage = reader.uint32();
                    break;
                case 5:
                    message.VoteMultiplierPermitted = reader.bool();
                    break;
                case 6:
                    message.HolderProposalFee = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a VotingSystemField message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof actions.VotingSystemField
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {actions.VotingSystemField} VotingSystemField
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        VotingSystemField.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a VotingSystemField message.
         * @function verify
         * @memberof actions.VotingSystemField
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        VotingSystemField.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.Name != null && message.hasOwnProperty("Name"))
                if (!$util.isString(message.Name))
                    return "Name: string expected";
            if (message.VoteType != null && message.hasOwnProperty("VoteType"))
                if (!$util.isString(message.VoteType))
                    return "VoteType: string expected";
            if (message.TallyLogic != null && message.hasOwnProperty("TallyLogic"))
                if (!$util.isInteger(message.TallyLogic))
                    return "TallyLogic: integer expected";
            if (message.ThresholdPercentage != null && message.hasOwnProperty("ThresholdPercentage"))
                if (!$util.isInteger(message.ThresholdPercentage))
                    return "ThresholdPercentage: integer expected";
            if (message.VoteMultiplierPermitted != null && message.hasOwnProperty("VoteMultiplierPermitted"))
                if (typeof message.VoteMultiplierPermitted !== "boolean")
                    return "VoteMultiplierPermitted: boolean expected";
            if (message.HolderProposalFee != null && message.hasOwnProperty("HolderProposalFee"))
                if (!$util.isInteger(message.HolderProposalFee) && !(message.HolderProposalFee && $util.isInteger(message.HolderProposalFee.low) && $util.isInteger(message.HolderProposalFee.high)))
                    return "HolderProposalFee: integer|Long expected";
            return null;
        };

        /**
         * Creates a VotingSystemField message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof actions.VotingSystemField
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {actions.VotingSystemField} VotingSystemField
         */
        VotingSystemField.fromObject = function fromObject(object) {
            if (object instanceof $root.actions.VotingSystemField)
                return object;
            var message = new $root.actions.VotingSystemField();
            if (object.Name != null)
                message.Name = String(object.Name);
            if (object.VoteType != null)
                message.VoteType = String(object.VoteType);
            if (object.TallyLogic != null)
                message.TallyLogic = object.TallyLogic >>> 0;
            if (object.ThresholdPercentage != null)
                message.ThresholdPercentage = object.ThresholdPercentage >>> 0;
            if (object.VoteMultiplierPermitted != null)
                message.VoteMultiplierPermitted = Boolean(object.VoteMultiplierPermitted);
            if (object.HolderProposalFee != null)
                if ($util.Long)
                    (message.HolderProposalFee = $util.Long.fromValue(object.HolderProposalFee)).unsigned = true;
                else if (typeof object.HolderProposalFee === "string")
                    message.HolderProposalFee = parseInt(object.HolderProposalFee, 10);
                else if (typeof object.HolderProposalFee === "number")
                    message.HolderProposalFee = object.HolderProposalFee;
                else if (typeof object.HolderProposalFee === "object")
                    message.HolderProposalFee = new $util.LongBits(object.HolderProposalFee.low >>> 0, object.HolderProposalFee.high >>> 0).toNumber(true);
            return message;
        };

        /**
         * Creates a plain object from a VotingSystemField message. Also converts values to other types if specified.
         * @function toObject
         * @memberof actions.VotingSystemField
         * @static
         * @param {actions.VotingSystemField} message VotingSystemField
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        VotingSystemField.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.Name = "";
                object.VoteType = "";
                object.TallyLogic = 0;
                object.ThresholdPercentage = 0;
                object.VoteMultiplierPermitted = false;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.HolderProposalFee = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.HolderProposalFee = options.longs === String ? "0" : 0;
            }
            if (message.Name != null && message.hasOwnProperty("Name"))
                object.Name = message.Name;
            if (message.VoteType != null && message.hasOwnProperty("VoteType"))
                object.VoteType = message.VoteType;
            if (message.TallyLogic != null && message.hasOwnProperty("TallyLogic"))
                object.TallyLogic = message.TallyLogic;
            if (message.ThresholdPercentage != null && message.hasOwnProperty("ThresholdPercentage"))
                object.ThresholdPercentage = message.ThresholdPercentage;
            if (message.VoteMultiplierPermitted != null && message.hasOwnProperty("VoteMultiplierPermitted"))
                object.VoteMultiplierPermitted = message.VoteMultiplierPermitted;
            if (message.HolderProposalFee != null && message.hasOwnProperty("HolderProposalFee"))
                if (typeof message.HolderProposalFee === "number")
                    object.HolderProposalFee = options.longs === String ? String(message.HolderProposalFee) : message.HolderProposalFee;
                else
                    object.HolderProposalFee = options.longs === String ? $util.Long.prototype.toString.call(message.HolderProposalFee) : options.longs === Number ? new $util.LongBits(message.HolderProposalFee.low >>> 0, message.HolderProposalFee.high >>> 0).toNumber(true) : message.HolderProposalFee;
            return object;
        };

        /**
         * Converts this VotingSystemField to JSON.
         * @function toJSON
         * @memberof actions.VotingSystemField
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        VotingSystemField.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return VotingSystemField;
    })();

    return actions;
})();

module.exports = $root;
