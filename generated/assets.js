/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.assets = (function() {

    /**
     * Namespace assets.
     * @exports assets
     * @namespace
     */
    var assets = {};

    assets.Membership = (function() {

        /**
         * Properties of a Membership.
         * @memberof assets
         * @interface IMembership
         * @property {assets.IAgeRestrictionField|null} [AgeRestriction] Membership AgeRestriction
         * @property {number|Long|null} [ValidFrom] Membership ValidFrom
         * @property {number|Long|null} [ExpirationTimestamp] Membership ExpirationTimestamp
         * @property {string|null} [ID] Membership ID
         * @property {string|null} [MembershipClass] Membership MembershipClass
         * @property {string|null} [RoleType] Membership RoleType
         * @property {string|null} [MembershipType] Membership MembershipType
         * @property {string|null} [Description] Membership Description
         */

        /**
         * Constructs a new Membership.
         * @memberof assets
         * @classdesc Represents a Membership.
         * @implements IMembership
         * @constructor
         * @param {assets.IMembership=} [properties] Properties to set
         */
        function Membership(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Membership AgeRestriction.
         * @member {assets.IAgeRestrictionField|null|undefined} AgeRestriction
         * @memberof assets.Membership
         * @instance
         */
        Membership.prototype.AgeRestriction = null;

        /**
         * Membership ValidFrom.
         * @member {number|Long} ValidFrom
         * @memberof assets.Membership
         * @instance
         */
        Membership.prototype.ValidFrom = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * Membership ExpirationTimestamp.
         * @member {number|Long} ExpirationTimestamp
         * @memberof assets.Membership
         * @instance
         */
        Membership.prototype.ExpirationTimestamp = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * Membership ID.
         * @member {string} ID
         * @memberof assets.Membership
         * @instance
         */
        Membership.prototype.ID = "";

        /**
         * Membership MembershipClass.
         * @member {string} MembershipClass
         * @memberof assets.Membership
         * @instance
         */
        Membership.prototype.MembershipClass = "";

        /**
         * Membership RoleType.
         * @member {string} RoleType
         * @memberof assets.Membership
         * @instance
         */
        Membership.prototype.RoleType = "";

        /**
         * Membership MembershipType.
         * @member {string} MembershipType
         * @memberof assets.Membership
         * @instance
         */
        Membership.prototype.MembershipType = "";

        /**
         * Membership Description.
         * @member {string} Description
         * @memberof assets.Membership
         * @instance
         */
        Membership.prototype.Description = "";

        /**
         * Creates a new Membership instance using the specified properties.
         * @function create
         * @memberof assets.Membership
         * @static
         * @param {assets.IMembership=} [properties] Properties to set
         * @returns {assets.Membership} Membership instance
         */
        Membership.create = function create(properties) {
            return new Membership(properties);
        };

        /**
         * Encodes the specified Membership message. Does not implicitly {@link assets.Membership.verify|verify} messages.
         * @function encode
         * @memberof assets.Membership
         * @static
         * @param {assets.IMembership} message Membership message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Membership.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.AgeRestriction != null && Object.hasOwnProperty.call(message, "AgeRestriction"))
                $root.assets.AgeRestrictionField.encode(message.AgeRestriction, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.ValidFrom != null && Object.hasOwnProperty.call(message, "ValidFrom"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint64(message.ValidFrom);
            if (message.ExpirationTimestamp != null && Object.hasOwnProperty.call(message, "ExpirationTimestamp"))
                writer.uint32(/* id 3, wireType 0 =*/24).uint64(message.ExpirationTimestamp);
            if (message.ID != null && Object.hasOwnProperty.call(message, "ID"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.ID);
            if (message.MembershipClass != null && Object.hasOwnProperty.call(message, "MembershipClass"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.MembershipClass);
            if (message.RoleType != null && Object.hasOwnProperty.call(message, "RoleType"))
                writer.uint32(/* id 6, wireType 2 =*/50).string(message.RoleType);
            if (message.MembershipType != null && Object.hasOwnProperty.call(message, "MembershipType"))
                writer.uint32(/* id 7, wireType 2 =*/58).string(message.MembershipType);
            if (message.Description != null && Object.hasOwnProperty.call(message, "Description"))
                writer.uint32(/* id 8, wireType 2 =*/66).string(message.Description);
            return writer;
        };

        /**
         * Encodes the specified Membership message, length delimited. Does not implicitly {@link assets.Membership.verify|verify} messages.
         * @function encodeDelimited
         * @memberof assets.Membership
         * @static
         * @param {assets.IMembership} message Membership message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Membership.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Membership message from the specified reader or buffer.
         * @function decode
         * @memberof assets.Membership
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {assets.Membership} Membership
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Membership.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.assets.Membership();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.AgeRestriction = $root.assets.AgeRestrictionField.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.ValidFrom = reader.uint64();
                    break;
                case 3:
                    message.ExpirationTimestamp = reader.uint64();
                    break;
                case 4:
                    message.ID = reader.string();
                    break;
                case 5:
                    message.MembershipClass = reader.string();
                    break;
                case 6:
                    message.RoleType = reader.string();
                    break;
                case 7:
                    message.MembershipType = reader.string();
                    break;
                case 8:
                    message.Description = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Membership message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof assets.Membership
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {assets.Membership} Membership
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Membership.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Membership message.
         * @function verify
         * @memberof assets.Membership
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Membership.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.AgeRestriction != null && message.hasOwnProperty("AgeRestriction")) {
                var error = $root.assets.AgeRestrictionField.verify(message.AgeRestriction);
                if (error)
                    return "AgeRestriction." + error;
            }
            if (message.ValidFrom != null && message.hasOwnProperty("ValidFrom"))
                if (!$util.isInteger(message.ValidFrom) && !(message.ValidFrom && $util.isInteger(message.ValidFrom.low) && $util.isInteger(message.ValidFrom.high)))
                    return "ValidFrom: integer|Long expected";
            if (message.ExpirationTimestamp != null && message.hasOwnProperty("ExpirationTimestamp"))
                if (!$util.isInteger(message.ExpirationTimestamp) && !(message.ExpirationTimestamp && $util.isInteger(message.ExpirationTimestamp.low) && $util.isInteger(message.ExpirationTimestamp.high)))
                    return "ExpirationTimestamp: integer|Long expected";
            if (message.ID != null && message.hasOwnProperty("ID"))
                if (!$util.isString(message.ID))
                    return "ID: string expected";
            if (message.MembershipClass != null && message.hasOwnProperty("MembershipClass"))
                if (!$util.isString(message.MembershipClass))
                    return "MembershipClass: string expected";
            if (message.RoleType != null && message.hasOwnProperty("RoleType"))
                if (!$util.isString(message.RoleType))
                    return "RoleType: string expected";
            if (message.MembershipType != null && message.hasOwnProperty("MembershipType"))
                if (!$util.isString(message.MembershipType))
                    return "MembershipType: string expected";
            if (message.Description != null && message.hasOwnProperty("Description"))
                if (!$util.isString(message.Description))
                    return "Description: string expected";
            return null;
        };

        /**
         * Creates a Membership message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof assets.Membership
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {assets.Membership} Membership
         */
        Membership.fromObject = function fromObject(object) {
            if (object instanceof $root.assets.Membership)
                return object;
            var message = new $root.assets.Membership();
            if (object.AgeRestriction != null) {
                if (typeof object.AgeRestriction !== "object")
                    throw TypeError(".assets.Membership.AgeRestriction: object expected");
                message.AgeRestriction = $root.assets.AgeRestrictionField.fromObject(object.AgeRestriction);
            }
            if (object.ValidFrom != null)
                if ($util.Long)
                    (message.ValidFrom = $util.Long.fromValue(object.ValidFrom)).unsigned = true;
                else if (typeof object.ValidFrom === "string")
                    message.ValidFrom = parseInt(object.ValidFrom, 10);
                else if (typeof object.ValidFrom === "number")
                    message.ValidFrom = object.ValidFrom;
                else if (typeof object.ValidFrom === "object")
                    message.ValidFrom = new $util.LongBits(object.ValidFrom.low >>> 0, object.ValidFrom.high >>> 0).toNumber(true);
            if (object.ExpirationTimestamp != null)
                if ($util.Long)
                    (message.ExpirationTimestamp = $util.Long.fromValue(object.ExpirationTimestamp)).unsigned = true;
                else if (typeof object.ExpirationTimestamp === "string")
                    message.ExpirationTimestamp = parseInt(object.ExpirationTimestamp, 10);
                else if (typeof object.ExpirationTimestamp === "number")
                    message.ExpirationTimestamp = object.ExpirationTimestamp;
                else if (typeof object.ExpirationTimestamp === "object")
                    message.ExpirationTimestamp = new $util.LongBits(object.ExpirationTimestamp.low >>> 0, object.ExpirationTimestamp.high >>> 0).toNumber(true);
            if (object.ID != null)
                message.ID = String(object.ID);
            if (object.MembershipClass != null)
                message.MembershipClass = String(object.MembershipClass);
            if (object.RoleType != null)
                message.RoleType = String(object.RoleType);
            if (object.MembershipType != null)
                message.MembershipType = String(object.MembershipType);
            if (object.Description != null)
                message.Description = String(object.Description);
            return message;
        };

        /**
         * Creates a plain object from a Membership message. Also converts values to other types if specified.
         * @function toObject
         * @memberof assets.Membership
         * @static
         * @param {assets.Membership} message Membership
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Membership.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.AgeRestriction = null;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.ValidFrom = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.ValidFrom = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.ExpirationTimestamp = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.ExpirationTimestamp = options.longs === String ? "0" : 0;
                object.ID = "";
                object.MembershipClass = "";
                object.RoleType = "";
                object.MembershipType = "";
                object.Description = "";
            }
            if (message.AgeRestriction != null && message.hasOwnProperty("AgeRestriction"))
                object.AgeRestriction = $root.assets.AgeRestrictionField.toObject(message.AgeRestriction, options);
            if (message.ValidFrom != null && message.hasOwnProperty("ValidFrom"))
                if (typeof message.ValidFrom === "number")
                    object.ValidFrom = options.longs === String ? String(message.ValidFrom) : message.ValidFrom;
                else
                    object.ValidFrom = options.longs === String ? $util.Long.prototype.toString.call(message.ValidFrom) : options.longs === Number ? new $util.LongBits(message.ValidFrom.low >>> 0, message.ValidFrom.high >>> 0).toNumber(true) : message.ValidFrom;
            if (message.ExpirationTimestamp != null && message.hasOwnProperty("ExpirationTimestamp"))
                if (typeof message.ExpirationTimestamp === "number")
                    object.ExpirationTimestamp = options.longs === String ? String(message.ExpirationTimestamp) : message.ExpirationTimestamp;
                else
                    object.ExpirationTimestamp = options.longs === String ? $util.Long.prototype.toString.call(message.ExpirationTimestamp) : options.longs === Number ? new $util.LongBits(message.ExpirationTimestamp.low >>> 0, message.ExpirationTimestamp.high >>> 0).toNumber(true) : message.ExpirationTimestamp;
            if (message.ID != null && message.hasOwnProperty("ID"))
                object.ID = message.ID;
            if (message.MembershipClass != null && message.hasOwnProperty("MembershipClass"))
                object.MembershipClass = message.MembershipClass;
            if (message.RoleType != null && message.hasOwnProperty("RoleType"))
                object.RoleType = message.RoleType;
            if (message.MembershipType != null && message.hasOwnProperty("MembershipType"))
                object.MembershipType = message.MembershipType;
            if (message.Description != null && message.hasOwnProperty("Description"))
                object.Description = message.Description;
            return object;
        };

        /**
         * Converts this Membership to JSON.
         * @function toJSON
         * @memberof assets.Membership
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Membership.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Membership;
    })();

    assets.Currency = (function() {

        /**
         * Properties of a Currency.
         * @memberof assets
         * @interface ICurrency
         * @property {string|null} [CurrencyCode] Currency CurrencyCode
         * @property {string|null} [MonetaryAuthority] Currency MonetaryAuthority
         * @property {number|Long|null} [Precision] Currency Precision
         */

        /**
         * Constructs a new Currency.
         * @memberof assets
         * @classdesc Represents a Currency.
         * @implements ICurrency
         * @constructor
         * @param {assets.ICurrency=} [properties] Properties to set
         */
        function Currency(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Currency CurrencyCode.
         * @member {string} CurrencyCode
         * @memberof assets.Currency
         * @instance
         */
        Currency.prototype.CurrencyCode = "";

        /**
         * Currency MonetaryAuthority.
         * @member {string} MonetaryAuthority
         * @memberof assets.Currency
         * @instance
         */
        Currency.prototype.MonetaryAuthority = "";

        /**
         * Currency Precision.
         * @member {number|Long} Precision
         * @memberof assets.Currency
         * @instance
         */
        Currency.prototype.Precision = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * Creates a new Currency instance using the specified properties.
         * @function create
         * @memberof assets.Currency
         * @static
         * @param {assets.ICurrency=} [properties] Properties to set
         * @returns {assets.Currency} Currency instance
         */
        Currency.create = function create(properties) {
            return new Currency(properties);
        };

        /**
         * Encodes the specified Currency message. Does not implicitly {@link assets.Currency.verify|verify} messages.
         * @function encode
         * @memberof assets.Currency
         * @static
         * @param {assets.ICurrency} message Currency message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Currency.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.CurrencyCode != null && Object.hasOwnProperty.call(message, "CurrencyCode"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.CurrencyCode);
            if (message.MonetaryAuthority != null && Object.hasOwnProperty.call(message, "MonetaryAuthority"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.MonetaryAuthority);
            if (message.Precision != null && Object.hasOwnProperty.call(message, "Precision"))
                writer.uint32(/* id 4, wireType 0 =*/32).uint64(message.Precision);
            return writer;
        };

        /**
         * Encodes the specified Currency message, length delimited. Does not implicitly {@link assets.Currency.verify|verify} messages.
         * @function encodeDelimited
         * @memberof assets.Currency
         * @static
         * @param {assets.ICurrency} message Currency message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Currency.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Currency message from the specified reader or buffer.
         * @function decode
         * @memberof assets.Currency
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {assets.Currency} Currency
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Currency.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.assets.Currency();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.CurrencyCode = reader.string();
                    break;
                case 2:
                    message.MonetaryAuthority = reader.string();
                    break;
                case 4:
                    message.Precision = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Currency message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof assets.Currency
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {assets.Currency} Currency
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Currency.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Currency message.
         * @function verify
         * @memberof assets.Currency
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Currency.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.CurrencyCode != null && message.hasOwnProperty("CurrencyCode"))
                if (!$util.isString(message.CurrencyCode))
                    return "CurrencyCode: string expected";
            if (message.MonetaryAuthority != null && message.hasOwnProperty("MonetaryAuthority"))
                if (!$util.isString(message.MonetaryAuthority))
                    return "MonetaryAuthority: string expected";
            if (message.Precision != null && message.hasOwnProperty("Precision"))
                if (!$util.isInteger(message.Precision) && !(message.Precision && $util.isInteger(message.Precision.low) && $util.isInteger(message.Precision.high)))
                    return "Precision: integer|Long expected";
            return null;
        };

        /**
         * Creates a Currency message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof assets.Currency
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {assets.Currency} Currency
         */
        Currency.fromObject = function fromObject(object) {
            if (object instanceof $root.assets.Currency)
                return object;
            var message = new $root.assets.Currency();
            if (object.CurrencyCode != null)
                message.CurrencyCode = String(object.CurrencyCode);
            if (object.MonetaryAuthority != null)
                message.MonetaryAuthority = String(object.MonetaryAuthority);
            if (object.Precision != null)
                if ($util.Long)
                    (message.Precision = $util.Long.fromValue(object.Precision)).unsigned = true;
                else if (typeof object.Precision === "string")
                    message.Precision = parseInt(object.Precision, 10);
                else if (typeof object.Precision === "number")
                    message.Precision = object.Precision;
                else if (typeof object.Precision === "object")
                    message.Precision = new $util.LongBits(object.Precision.low >>> 0, object.Precision.high >>> 0).toNumber(true);
            return message;
        };

        /**
         * Creates a plain object from a Currency message. Also converts values to other types if specified.
         * @function toObject
         * @memberof assets.Currency
         * @static
         * @param {assets.Currency} message Currency
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Currency.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.CurrencyCode = "";
                object.MonetaryAuthority = "";
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.Precision = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.Precision = options.longs === String ? "0" : 0;
            }
            if (message.CurrencyCode != null && message.hasOwnProperty("CurrencyCode"))
                object.CurrencyCode = message.CurrencyCode;
            if (message.MonetaryAuthority != null && message.hasOwnProperty("MonetaryAuthority"))
                object.MonetaryAuthority = message.MonetaryAuthority;
            if (message.Precision != null && message.hasOwnProperty("Precision"))
                if (typeof message.Precision === "number")
                    object.Precision = options.longs === String ? String(message.Precision) : message.Precision;
                else
                    object.Precision = options.longs === String ? $util.Long.prototype.toString.call(message.Precision) : options.longs === Number ? new $util.LongBits(message.Precision.low >>> 0, message.Precision.high >>> 0).toNumber(true) : message.Precision;
            return object;
        };

        /**
         * Converts this Currency to JSON.
         * @function toJSON
         * @memberof assets.Currency
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Currency.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Currency;
    })();

    assets.ShareCommon = (function() {

        /**
         * Properties of a ShareCommon.
         * @memberof assets
         * @interface IShareCommon
         * @property {string|null} [Ticker] ShareCommon Ticker
         * @property {string|null} [ISIN] ShareCommon ISIN
         * @property {string|null} [Description] ShareCommon Description
         */

        /**
         * Constructs a new ShareCommon.
         * @memberof assets
         * @classdesc Represents a ShareCommon.
         * @implements IShareCommon
         * @constructor
         * @param {assets.IShareCommon=} [properties] Properties to set
         */
        function ShareCommon(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ShareCommon Ticker.
         * @member {string} Ticker
         * @memberof assets.ShareCommon
         * @instance
         */
        ShareCommon.prototype.Ticker = "";

        /**
         * ShareCommon ISIN.
         * @member {string} ISIN
         * @memberof assets.ShareCommon
         * @instance
         */
        ShareCommon.prototype.ISIN = "";

        /**
         * ShareCommon Description.
         * @member {string} Description
         * @memberof assets.ShareCommon
         * @instance
         */
        ShareCommon.prototype.Description = "";

        /**
         * Creates a new ShareCommon instance using the specified properties.
         * @function create
         * @memberof assets.ShareCommon
         * @static
         * @param {assets.IShareCommon=} [properties] Properties to set
         * @returns {assets.ShareCommon} ShareCommon instance
         */
        ShareCommon.create = function create(properties) {
            return new ShareCommon(properties);
        };

        /**
         * Encodes the specified ShareCommon message. Does not implicitly {@link assets.ShareCommon.verify|verify} messages.
         * @function encode
         * @memberof assets.ShareCommon
         * @static
         * @param {assets.IShareCommon} message ShareCommon message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ShareCommon.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Ticker != null && Object.hasOwnProperty.call(message, "Ticker"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.Ticker);
            if (message.ISIN != null && Object.hasOwnProperty.call(message, "ISIN"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.ISIN);
            if (message.Description != null && Object.hasOwnProperty.call(message, "Description"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.Description);
            return writer;
        };

        /**
         * Encodes the specified ShareCommon message, length delimited. Does not implicitly {@link assets.ShareCommon.verify|verify} messages.
         * @function encodeDelimited
         * @memberof assets.ShareCommon
         * @static
         * @param {assets.IShareCommon} message ShareCommon message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ShareCommon.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ShareCommon message from the specified reader or buffer.
         * @function decode
         * @memberof assets.ShareCommon
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {assets.ShareCommon} ShareCommon
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ShareCommon.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.assets.ShareCommon();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.Ticker = reader.string();
                    break;
                case 2:
                    message.ISIN = reader.string();
                    break;
                case 3:
                    message.Description = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ShareCommon message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof assets.ShareCommon
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {assets.ShareCommon} ShareCommon
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ShareCommon.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ShareCommon message.
         * @function verify
         * @memberof assets.ShareCommon
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ShareCommon.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.Ticker != null && message.hasOwnProperty("Ticker"))
                if (!$util.isString(message.Ticker))
                    return "Ticker: string expected";
            if (message.ISIN != null && message.hasOwnProperty("ISIN"))
                if (!$util.isString(message.ISIN))
                    return "ISIN: string expected";
            if (message.Description != null && message.hasOwnProperty("Description"))
                if (!$util.isString(message.Description))
                    return "Description: string expected";
            return null;
        };

        /**
         * Creates a ShareCommon message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof assets.ShareCommon
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {assets.ShareCommon} ShareCommon
         */
        ShareCommon.fromObject = function fromObject(object) {
            if (object instanceof $root.assets.ShareCommon)
                return object;
            var message = new $root.assets.ShareCommon();
            if (object.Ticker != null)
                message.Ticker = String(object.Ticker);
            if (object.ISIN != null)
                message.ISIN = String(object.ISIN);
            if (object.Description != null)
                message.Description = String(object.Description);
            return message;
        };

        /**
         * Creates a plain object from a ShareCommon message. Also converts values to other types if specified.
         * @function toObject
         * @memberof assets.ShareCommon
         * @static
         * @param {assets.ShareCommon} message ShareCommon
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ShareCommon.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.Ticker = "";
                object.ISIN = "";
                object.Description = "";
            }
            if (message.Ticker != null && message.hasOwnProperty("Ticker"))
                object.Ticker = message.Ticker;
            if (message.ISIN != null && message.hasOwnProperty("ISIN"))
                object.ISIN = message.ISIN;
            if (message.Description != null && message.hasOwnProperty("Description"))
                object.Description = message.Description;
            return object;
        };

        /**
         * Converts this ShareCommon to JSON.
         * @function toJSON
         * @memberof assets.ShareCommon
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ShareCommon.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ShareCommon;
    })();

    assets.Coupon = (function() {

        /**
         * Properties of a Coupon.
         * @memberof assets
         * @interface ICoupon
         * @property {string|null} [RedeemingEntity] Coupon RedeemingEntity
         * @property {number|Long|null} [IssueDate] Coupon IssueDate
         * @property {number|Long|null} [ExpiryDate] Coupon ExpiryDate
         * @property {number|Long|null} [Value] Coupon Value
         * @property {string|null} [Currency] Coupon Currency
         * @property {string|null} [Description] Coupon Description
         * @property {number|Long|null} [Precision] Coupon Precision
         */

        /**
         * Constructs a new Coupon.
         * @memberof assets
         * @classdesc Represents a Coupon.
         * @implements ICoupon
         * @constructor
         * @param {assets.ICoupon=} [properties] Properties to set
         */
        function Coupon(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Coupon RedeemingEntity.
         * @member {string} RedeemingEntity
         * @memberof assets.Coupon
         * @instance
         */
        Coupon.prototype.RedeemingEntity = "";

        /**
         * Coupon IssueDate.
         * @member {number|Long} IssueDate
         * @memberof assets.Coupon
         * @instance
         */
        Coupon.prototype.IssueDate = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * Coupon ExpiryDate.
         * @member {number|Long} ExpiryDate
         * @memberof assets.Coupon
         * @instance
         */
        Coupon.prototype.ExpiryDate = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * Coupon Value.
         * @member {number|Long} Value
         * @memberof assets.Coupon
         * @instance
         */
        Coupon.prototype.Value = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * Coupon Currency.
         * @member {string} Currency
         * @memberof assets.Coupon
         * @instance
         */
        Coupon.prototype.Currency = "";

        /**
         * Coupon Description.
         * @member {string} Description
         * @memberof assets.Coupon
         * @instance
         */
        Coupon.prototype.Description = "";

        /**
         * Coupon Precision.
         * @member {number|Long} Precision
         * @memberof assets.Coupon
         * @instance
         */
        Coupon.prototype.Precision = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * Creates a new Coupon instance using the specified properties.
         * @function create
         * @memberof assets.Coupon
         * @static
         * @param {assets.ICoupon=} [properties] Properties to set
         * @returns {assets.Coupon} Coupon instance
         */
        Coupon.create = function create(properties) {
            return new Coupon(properties);
        };

        /**
         * Encodes the specified Coupon message. Does not implicitly {@link assets.Coupon.verify|verify} messages.
         * @function encode
         * @memberof assets.Coupon
         * @static
         * @param {assets.ICoupon} message Coupon message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Coupon.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.RedeemingEntity != null && Object.hasOwnProperty.call(message, "RedeemingEntity"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.RedeemingEntity);
            if (message.IssueDate != null && Object.hasOwnProperty.call(message, "IssueDate"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint64(message.IssueDate);
            if (message.ExpiryDate != null && Object.hasOwnProperty.call(message, "ExpiryDate"))
                writer.uint32(/* id 3, wireType 0 =*/24).uint64(message.ExpiryDate);
            if (message.Value != null && Object.hasOwnProperty.call(message, "Value"))
                writer.uint32(/* id 4, wireType 0 =*/32).uint64(message.Value);
            if (message.Currency != null && Object.hasOwnProperty.call(message, "Currency"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.Currency);
            if (message.Description != null && Object.hasOwnProperty.call(message, "Description"))
                writer.uint32(/* id 6, wireType 2 =*/50).string(message.Description);
            if (message.Precision != null && Object.hasOwnProperty.call(message, "Precision"))
                writer.uint32(/* id 7, wireType 0 =*/56).uint64(message.Precision);
            return writer;
        };

        /**
         * Encodes the specified Coupon message, length delimited. Does not implicitly {@link assets.Coupon.verify|verify} messages.
         * @function encodeDelimited
         * @memberof assets.Coupon
         * @static
         * @param {assets.ICoupon} message Coupon message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Coupon.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a Coupon message from the specified reader or buffer.
         * @function decode
         * @memberof assets.Coupon
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {assets.Coupon} Coupon
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Coupon.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.assets.Coupon();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.RedeemingEntity = reader.string();
                    break;
                case 2:
                    message.IssueDate = reader.uint64();
                    break;
                case 3:
                    message.ExpiryDate = reader.uint64();
                    break;
                case 4:
                    message.Value = reader.uint64();
                    break;
                case 5:
                    message.Currency = reader.string();
                    break;
                case 6:
                    message.Description = reader.string();
                    break;
                case 7:
                    message.Precision = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a Coupon message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof assets.Coupon
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {assets.Coupon} Coupon
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Coupon.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a Coupon message.
         * @function verify
         * @memberof assets.Coupon
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Coupon.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.RedeemingEntity != null && message.hasOwnProperty("RedeemingEntity"))
                if (!$util.isString(message.RedeemingEntity))
                    return "RedeemingEntity: string expected";
            if (message.IssueDate != null && message.hasOwnProperty("IssueDate"))
                if (!$util.isInteger(message.IssueDate) && !(message.IssueDate && $util.isInteger(message.IssueDate.low) && $util.isInteger(message.IssueDate.high)))
                    return "IssueDate: integer|Long expected";
            if (message.ExpiryDate != null && message.hasOwnProperty("ExpiryDate"))
                if (!$util.isInteger(message.ExpiryDate) && !(message.ExpiryDate && $util.isInteger(message.ExpiryDate.low) && $util.isInteger(message.ExpiryDate.high)))
                    return "ExpiryDate: integer|Long expected";
            if (message.Value != null && message.hasOwnProperty("Value"))
                if (!$util.isInteger(message.Value) && !(message.Value && $util.isInteger(message.Value.low) && $util.isInteger(message.Value.high)))
                    return "Value: integer|Long expected";
            if (message.Currency != null && message.hasOwnProperty("Currency"))
                if (!$util.isString(message.Currency))
                    return "Currency: string expected";
            if (message.Description != null && message.hasOwnProperty("Description"))
                if (!$util.isString(message.Description))
                    return "Description: string expected";
            if (message.Precision != null && message.hasOwnProperty("Precision"))
                if (!$util.isInteger(message.Precision) && !(message.Precision && $util.isInteger(message.Precision.low) && $util.isInteger(message.Precision.high)))
                    return "Precision: integer|Long expected";
            return null;
        };

        /**
         * Creates a Coupon message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof assets.Coupon
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {assets.Coupon} Coupon
         */
        Coupon.fromObject = function fromObject(object) {
            if (object instanceof $root.assets.Coupon)
                return object;
            var message = new $root.assets.Coupon();
            if (object.RedeemingEntity != null)
                message.RedeemingEntity = String(object.RedeemingEntity);
            if (object.IssueDate != null)
                if ($util.Long)
                    (message.IssueDate = $util.Long.fromValue(object.IssueDate)).unsigned = true;
                else if (typeof object.IssueDate === "string")
                    message.IssueDate = parseInt(object.IssueDate, 10);
                else if (typeof object.IssueDate === "number")
                    message.IssueDate = object.IssueDate;
                else if (typeof object.IssueDate === "object")
                    message.IssueDate = new $util.LongBits(object.IssueDate.low >>> 0, object.IssueDate.high >>> 0).toNumber(true);
            if (object.ExpiryDate != null)
                if ($util.Long)
                    (message.ExpiryDate = $util.Long.fromValue(object.ExpiryDate)).unsigned = true;
                else if (typeof object.ExpiryDate === "string")
                    message.ExpiryDate = parseInt(object.ExpiryDate, 10);
                else if (typeof object.ExpiryDate === "number")
                    message.ExpiryDate = object.ExpiryDate;
                else if (typeof object.ExpiryDate === "object")
                    message.ExpiryDate = new $util.LongBits(object.ExpiryDate.low >>> 0, object.ExpiryDate.high >>> 0).toNumber(true);
            if (object.Value != null)
                if ($util.Long)
                    (message.Value = $util.Long.fromValue(object.Value)).unsigned = true;
                else if (typeof object.Value === "string")
                    message.Value = parseInt(object.Value, 10);
                else if (typeof object.Value === "number")
                    message.Value = object.Value;
                else if (typeof object.Value === "object")
                    message.Value = new $util.LongBits(object.Value.low >>> 0, object.Value.high >>> 0).toNumber(true);
            if (object.Currency != null)
                message.Currency = String(object.Currency);
            if (object.Description != null)
                message.Description = String(object.Description);
            if (object.Precision != null)
                if ($util.Long)
                    (message.Precision = $util.Long.fromValue(object.Precision)).unsigned = true;
                else if (typeof object.Precision === "string")
                    message.Precision = parseInt(object.Precision, 10);
                else if (typeof object.Precision === "number")
                    message.Precision = object.Precision;
                else if (typeof object.Precision === "object")
                    message.Precision = new $util.LongBits(object.Precision.low >>> 0, object.Precision.high >>> 0).toNumber(true);
            return message;
        };

        /**
         * Creates a plain object from a Coupon message. Also converts values to other types if specified.
         * @function toObject
         * @memberof assets.Coupon
         * @static
         * @param {assets.Coupon} message Coupon
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Coupon.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.RedeemingEntity = "";
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.IssueDate = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.IssueDate = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.ExpiryDate = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.ExpiryDate = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.Value = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.Value = options.longs === String ? "0" : 0;
                object.Currency = "";
                object.Description = "";
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.Precision = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.Precision = options.longs === String ? "0" : 0;
            }
            if (message.RedeemingEntity != null && message.hasOwnProperty("RedeemingEntity"))
                object.RedeemingEntity = message.RedeemingEntity;
            if (message.IssueDate != null && message.hasOwnProperty("IssueDate"))
                if (typeof message.IssueDate === "number")
                    object.IssueDate = options.longs === String ? String(message.IssueDate) : message.IssueDate;
                else
                    object.IssueDate = options.longs === String ? $util.Long.prototype.toString.call(message.IssueDate) : options.longs === Number ? new $util.LongBits(message.IssueDate.low >>> 0, message.IssueDate.high >>> 0).toNumber(true) : message.IssueDate;
            if (message.ExpiryDate != null && message.hasOwnProperty("ExpiryDate"))
                if (typeof message.ExpiryDate === "number")
                    object.ExpiryDate = options.longs === String ? String(message.ExpiryDate) : message.ExpiryDate;
                else
                    object.ExpiryDate = options.longs === String ? $util.Long.prototype.toString.call(message.ExpiryDate) : options.longs === Number ? new $util.LongBits(message.ExpiryDate.low >>> 0, message.ExpiryDate.high >>> 0).toNumber(true) : message.ExpiryDate;
            if (message.Value != null && message.hasOwnProperty("Value"))
                if (typeof message.Value === "number")
                    object.Value = options.longs === String ? String(message.Value) : message.Value;
                else
                    object.Value = options.longs === String ? $util.Long.prototype.toString.call(message.Value) : options.longs === Number ? new $util.LongBits(message.Value.low >>> 0, message.Value.high >>> 0).toNumber(true) : message.Value;
            if (message.Currency != null && message.hasOwnProperty("Currency"))
                object.Currency = message.Currency;
            if (message.Description != null && message.hasOwnProperty("Description"))
                object.Description = message.Description;
            if (message.Precision != null && message.hasOwnProperty("Precision"))
                if (typeof message.Precision === "number")
                    object.Precision = options.longs === String ? String(message.Precision) : message.Precision;
                else
                    object.Precision = options.longs === String ? $util.Long.prototype.toString.call(message.Precision) : options.longs === Number ? new $util.LongBits(message.Precision.low >>> 0, message.Precision.high >>> 0).toNumber(true) : message.Precision;
            return object;
        };

        /**
         * Converts this Coupon to JSON.
         * @function toJSON
         * @memberof assets.Coupon
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Coupon.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Coupon;
    })();

    assets.LoyaltyPoints = (function() {

        /**
         * Properties of a LoyaltyPoints.
         * @memberof assets
         * @interface ILoyaltyPoints
         * @property {assets.IAgeRestrictionField|null} [AgeRestriction] LoyaltyPoints AgeRestriction
         * @property {string|null} [OfferName] LoyaltyPoints OfferName
         * @property {number|Long|null} [ValidFrom] LoyaltyPoints ValidFrom
         * @property {number|Long|null} [ExpirationTimestamp] LoyaltyPoints ExpirationTimestamp
         * @property {string|null} [Description] LoyaltyPoints Description
         */

        /**
         * Constructs a new LoyaltyPoints.
         * @memberof assets
         * @classdesc Represents a LoyaltyPoints.
         * @implements ILoyaltyPoints
         * @constructor
         * @param {assets.ILoyaltyPoints=} [properties] Properties to set
         */
        function LoyaltyPoints(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * LoyaltyPoints AgeRestriction.
         * @member {assets.IAgeRestrictionField|null|undefined} AgeRestriction
         * @memberof assets.LoyaltyPoints
         * @instance
         */
        LoyaltyPoints.prototype.AgeRestriction = null;

        /**
         * LoyaltyPoints OfferName.
         * @member {string} OfferName
         * @memberof assets.LoyaltyPoints
         * @instance
         */
        LoyaltyPoints.prototype.OfferName = "";

        /**
         * LoyaltyPoints ValidFrom.
         * @member {number|Long} ValidFrom
         * @memberof assets.LoyaltyPoints
         * @instance
         */
        LoyaltyPoints.prototype.ValidFrom = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * LoyaltyPoints ExpirationTimestamp.
         * @member {number|Long} ExpirationTimestamp
         * @memberof assets.LoyaltyPoints
         * @instance
         */
        LoyaltyPoints.prototype.ExpirationTimestamp = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * LoyaltyPoints Description.
         * @member {string} Description
         * @memberof assets.LoyaltyPoints
         * @instance
         */
        LoyaltyPoints.prototype.Description = "";

        /**
         * Creates a new LoyaltyPoints instance using the specified properties.
         * @function create
         * @memberof assets.LoyaltyPoints
         * @static
         * @param {assets.ILoyaltyPoints=} [properties] Properties to set
         * @returns {assets.LoyaltyPoints} LoyaltyPoints instance
         */
        LoyaltyPoints.create = function create(properties) {
            return new LoyaltyPoints(properties);
        };

        /**
         * Encodes the specified LoyaltyPoints message. Does not implicitly {@link assets.LoyaltyPoints.verify|verify} messages.
         * @function encode
         * @memberof assets.LoyaltyPoints
         * @static
         * @param {assets.ILoyaltyPoints} message LoyaltyPoints message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LoyaltyPoints.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.AgeRestriction != null && Object.hasOwnProperty.call(message, "AgeRestriction"))
                $root.assets.AgeRestrictionField.encode(message.AgeRestriction, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.OfferName != null && Object.hasOwnProperty.call(message, "OfferName"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.OfferName);
            if (message.ValidFrom != null && Object.hasOwnProperty.call(message, "ValidFrom"))
                writer.uint32(/* id 3, wireType 0 =*/24).uint64(message.ValidFrom);
            if (message.ExpirationTimestamp != null && Object.hasOwnProperty.call(message, "ExpirationTimestamp"))
                writer.uint32(/* id 4, wireType 0 =*/32).uint64(message.ExpirationTimestamp);
            if (message.Description != null && Object.hasOwnProperty.call(message, "Description"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.Description);
            return writer;
        };

        /**
         * Encodes the specified LoyaltyPoints message, length delimited. Does not implicitly {@link assets.LoyaltyPoints.verify|verify} messages.
         * @function encodeDelimited
         * @memberof assets.LoyaltyPoints
         * @static
         * @param {assets.ILoyaltyPoints} message LoyaltyPoints message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        LoyaltyPoints.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a LoyaltyPoints message from the specified reader or buffer.
         * @function decode
         * @memberof assets.LoyaltyPoints
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {assets.LoyaltyPoints} LoyaltyPoints
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LoyaltyPoints.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.assets.LoyaltyPoints();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.AgeRestriction = $root.assets.AgeRestrictionField.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.OfferName = reader.string();
                    break;
                case 3:
                    message.ValidFrom = reader.uint64();
                    break;
                case 4:
                    message.ExpirationTimestamp = reader.uint64();
                    break;
                case 5:
                    message.Description = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a LoyaltyPoints message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof assets.LoyaltyPoints
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {assets.LoyaltyPoints} LoyaltyPoints
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        LoyaltyPoints.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a LoyaltyPoints message.
         * @function verify
         * @memberof assets.LoyaltyPoints
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        LoyaltyPoints.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.AgeRestriction != null && message.hasOwnProperty("AgeRestriction")) {
                var error = $root.assets.AgeRestrictionField.verify(message.AgeRestriction);
                if (error)
                    return "AgeRestriction." + error;
            }
            if (message.OfferName != null && message.hasOwnProperty("OfferName"))
                if (!$util.isString(message.OfferName))
                    return "OfferName: string expected";
            if (message.ValidFrom != null && message.hasOwnProperty("ValidFrom"))
                if (!$util.isInteger(message.ValidFrom) && !(message.ValidFrom && $util.isInteger(message.ValidFrom.low) && $util.isInteger(message.ValidFrom.high)))
                    return "ValidFrom: integer|Long expected";
            if (message.ExpirationTimestamp != null && message.hasOwnProperty("ExpirationTimestamp"))
                if (!$util.isInteger(message.ExpirationTimestamp) && !(message.ExpirationTimestamp && $util.isInteger(message.ExpirationTimestamp.low) && $util.isInteger(message.ExpirationTimestamp.high)))
                    return "ExpirationTimestamp: integer|Long expected";
            if (message.Description != null && message.hasOwnProperty("Description"))
                if (!$util.isString(message.Description))
                    return "Description: string expected";
            return null;
        };

        /**
         * Creates a LoyaltyPoints message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof assets.LoyaltyPoints
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {assets.LoyaltyPoints} LoyaltyPoints
         */
        LoyaltyPoints.fromObject = function fromObject(object) {
            if (object instanceof $root.assets.LoyaltyPoints)
                return object;
            var message = new $root.assets.LoyaltyPoints();
            if (object.AgeRestriction != null) {
                if (typeof object.AgeRestriction !== "object")
                    throw TypeError(".assets.LoyaltyPoints.AgeRestriction: object expected");
                message.AgeRestriction = $root.assets.AgeRestrictionField.fromObject(object.AgeRestriction);
            }
            if (object.OfferName != null)
                message.OfferName = String(object.OfferName);
            if (object.ValidFrom != null)
                if ($util.Long)
                    (message.ValidFrom = $util.Long.fromValue(object.ValidFrom)).unsigned = true;
                else if (typeof object.ValidFrom === "string")
                    message.ValidFrom = parseInt(object.ValidFrom, 10);
                else if (typeof object.ValidFrom === "number")
                    message.ValidFrom = object.ValidFrom;
                else if (typeof object.ValidFrom === "object")
                    message.ValidFrom = new $util.LongBits(object.ValidFrom.low >>> 0, object.ValidFrom.high >>> 0).toNumber(true);
            if (object.ExpirationTimestamp != null)
                if ($util.Long)
                    (message.ExpirationTimestamp = $util.Long.fromValue(object.ExpirationTimestamp)).unsigned = true;
                else if (typeof object.ExpirationTimestamp === "string")
                    message.ExpirationTimestamp = parseInt(object.ExpirationTimestamp, 10);
                else if (typeof object.ExpirationTimestamp === "number")
                    message.ExpirationTimestamp = object.ExpirationTimestamp;
                else if (typeof object.ExpirationTimestamp === "object")
                    message.ExpirationTimestamp = new $util.LongBits(object.ExpirationTimestamp.low >>> 0, object.ExpirationTimestamp.high >>> 0).toNumber(true);
            if (object.Description != null)
                message.Description = String(object.Description);
            return message;
        };

        /**
         * Creates a plain object from a LoyaltyPoints message. Also converts values to other types if specified.
         * @function toObject
         * @memberof assets.LoyaltyPoints
         * @static
         * @param {assets.LoyaltyPoints} message LoyaltyPoints
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        LoyaltyPoints.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.AgeRestriction = null;
                object.OfferName = "";
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.ValidFrom = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.ValidFrom = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.ExpirationTimestamp = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.ExpirationTimestamp = options.longs === String ? "0" : 0;
                object.Description = "";
            }
            if (message.AgeRestriction != null && message.hasOwnProperty("AgeRestriction"))
                object.AgeRestriction = $root.assets.AgeRestrictionField.toObject(message.AgeRestriction, options);
            if (message.OfferName != null && message.hasOwnProperty("OfferName"))
                object.OfferName = message.OfferName;
            if (message.ValidFrom != null && message.hasOwnProperty("ValidFrom"))
                if (typeof message.ValidFrom === "number")
                    object.ValidFrom = options.longs === String ? String(message.ValidFrom) : message.ValidFrom;
                else
                    object.ValidFrom = options.longs === String ? $util.Long.prototype.toString.call(message.ValidFrom) : options.longs === Number ? new $util.LongBits(message.ValidFrom.low >>> 0, message.ValidFrom.high >>> 0).toNumber(true) : message.ValidFrom;
            if (message.ExpirationTimestamp != null && message.hasOwnProperty("ExpirationTimestamp"))
                if (typeof message.ExpirationTimestamp === "number")
                    object.ExpirationTimestamp = options.longs === String ? String(message.ExpirationTimestamp) : message.ExpirationTimestamp;
                else
                    object.ExpirationTimestamp = options.longs === String ? $util.Long.prototype.toString.call(message.ExpirationTimestamp) : options.longs === Number ? new $util.LongBits(message.ExpirationTimestamp.low >>> 0, message.ExpirationTimestamp.high >>> 0).toNumber(true) : message.ExpirationTimestamp;
            if (message.Description != null && message.hasOwnProperty("Description"))
                object.Description = message.Description;
            return object;
        };

        /**
         * Converts this LoyaltyPoints to JSON.
         * @function toJSON
         * @memberof assets.LoyaltyPoints
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        LoyaltyPoints.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return LoyaltyPoints;
    })();

    assets.TicketAdmission = (function() {

        /**
         * Properties of a TicketAdmission.
         * @memberof assets
         * @interface ITicketAdmission
         * @property {assets.IAgeRestrictionField|null} [AgeRestriction] TicketAdmission AgeRestriction
         * @property {string|null} [AdmissionType] TicketAdmission AdmissionType
         * @property {string|null} [Venue] TicketAdmission Venue
         * @property {string|null} [Class] TicketAdmission Class
         * @property {string|null} [Area] TicketAdmission Area
         * @property {string|null} [Seat] TicketAdmission Seat
         * @property {number|Long|null} [StartTimeDate] TicketAdmission StartTimeDate
         * @property {number|Long|null} [ValidFrom] TicketAdmission ValidFrom
         * @property {number|Long|null} [ExpirationTimestamp] TicketAdmission ExpirationTimestamp
         * @property {string|null} [Description] TicketAdmission Description
         */

        /**
         * Constructs a new TicketAdmission.
         * @memberof assets
         * @classdesc Represents a TicketAdmission.
         * @implements ITicketAdmission
         * @constructor
         * @param {assets.ITicketAdmission=} [properties] Properties to set
         */
        function TicketAdmission(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * TicketAdmission AgeRestriction.
         * @member {assets.IAgeRestrictionField|null|undefined} AgeRestriction
         * @memberof assets.TicketAdmission
         * @instance
         */
        TicketAdmission.prototype.AgeRestriction = null;

        /**
         * TicketAdmission AdmissionType.
         * @member {string} AdmissionType
         * @memberof assets.TicketAdmission
         * @instance
         */
        TicketAdmission.prototype.AdmissionType = "";

        /**
         * TicketAdmission Venue.
         * @member {string} Venue
         * @memberof assets.TicketAdmission
         * @instance
         */
        TicketAdmission.prototype.Venue = "";

        /**
         * TicketAdmission Class.
         * @member {string} Class
         * @memberof assets.TicketAdmission
         * @instance
         */
        TicketAdmission.prototype.Class = "";

        /**
         * TicketAdmission Area.
         * @member {string} Area
         * @memberof assets.TicketAdmission
         * @instance
         */
        TicketAdmission.prototype.Area = "";

        /**
         * TicketAdmission Seat.
         * @member {string} Seat
         * @memberof assets.TicketAdmission
         * @instance
         */
        TicketAdmission.prototype.Seat = "";

        /**
         * TicketAdmission StartTimeDate.
         * @member {number|Long} StartTimeDate
         * @memberof assets.TicketAdmission
         * @instance
         */
        TicketAdmission.prototype.StartTimeDate = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * TicketAdmission ValidFrom.
         * @member {number|Long} ValidFrom
         * @memberof assets.TicketAdmission
         * @instance
         */
        TicketAdmission.prototype.ValidFrom = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * TicketAdmission ExpirationTimestamp.
         * @member {number|Long} ExpirationTimestamp
         * @memberof assets.TicketAdmission
         * @instance
         */
        TicketAdmission.prototype.ExpirationTimestamp = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * TicketAdmission Description.
         * @member {string} Description
         * @memberof assets.TicketAdmission
         * @instance
         */
        TicketAdmission.prototype.Description = "";

        /**
         * Creates a new TicketAdmission instance using the specified properties.
         * @function create
         * @memberof assets.TicketAdmission
         * @static
         * @param {assets.ITicketAdmission=} [properties] Properties to set
         * @returns {assets.TicketAdmission} TicketAdmission instance
         */
        TicketAdmission.create = function create(properties) {
            return new TicketAdmission(properties);
        };

        /**
         * Encodes the specified TicketAdmission message. Does not implicitly {@link assets.TicketAdmission.verify|verify} messages.
         * @function encode
         * @memberof assets.TicketAdmission
         * @static
         * @param {assets.ITicketAdmission} message TicketAdmission message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TicketAdmission.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.AgeRestriction != null && Object.hasOwnProperty.call(message, "AgeRestriction"))
                $root.assets.AgeRestrictionField.encode(message.AgeRestriction, writer.uint32(/* id 1, wireType 2 =*/10).fork()).ldelim();
            if (message.AdmissionType != null && Object.hasOwnProperty.call(message, "AdmissionType"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.AdmissionType);
            if (message.Venue != null && Object.hasOwnProperty.call(message, "Venue"))
                writer.uint32(/* id 3, wireType 2 =*/26).string(message.Venue);
            if (message.Class != null && Object.hasOwnProperty.call(message, "Class"))
                writer.uint32(/* id 4, wireType 2 =*/34).string(message.Class);
            if (message.Area != null && Object.hasOwnProperty.call(message, "Area"))
                writer.uint32(/* id 5, wireType 2 =*/42).string(message.Area);
            if (message.Seat != null && Object.hasOwnProperty.call(message, "Seat"))
                writer.uint32(/* id 6, wireType 2 =*/50).string(message.Seat);
            if (message.StartTimeDate != null && Object.hasOwnProperty.call(message, "StartTimeDate"))
                writer.uint32(/* id 7, wireType 0 =*/56).uint64(message.StartTimeDate);
            if (message.ValidFrom != null && Object.hasOwnProperty.call(message, "ValidFrom"))
                writer.uint32(/* id 8, wireType 0 =*/64).uint64(message.ValidFrom);
            if (message.ExpirationTimestamp != null && Object.hasOwnProperty.call(message, "ExpirationTimestamp"))
                writer.uint32(/* id 9, wireType 0 =*/72).uint64(message.ExpirationTimestamp);
            if (message.Description != null && Object.hasOwnProperty.call(message, "Description"))
                writer.uint32(/* id 10, wireType 2 =*/82).string(message.Description);
            return writer;
        };

        /**
         * Encodes the specified TicketAdmission message, length delimited. Does not implicitly {@link assets.TicketAdmission.verify|verify} messages.
         * @function encodeDelimited
         * @memberof assets.TicketAdmission
         * @static
         * @param {assets.ITicketAdmission} message TicketAdmission message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TicketAdmission.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a TicketAdmission message from the specified reader or buffer.
         * @function decode
         * @memberof assets.TicketAdmission
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {assets.TicketAdmission} TicketAdmission
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TicketAdmission.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.assets.TicketAdmission();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.AgeRestriction = $root.assets.AgeRestrictionField.decode(reader, reader.uint32());
                    break;
                case 2:
                    message.AdmissionType = reader.string();
                    break;
                case 3:
                    message.Venue = reader.string();
                    break;
                case 4:
                    message.Class = reader.string();
                    break;
                case 5:
                    message.Area = reader.string();
                    break;
                case 6:
                    message.Seat = reader.string();
                    break;
                case 7:
                    message.StartTimeDate = reader.uint64();
                    break;
                case 8:
                    message.ValidFrom = reader.uint64();
                    break;
                case 9:
                    message.ExpirationTimestamp = reader.uint64();
                    break;
                case 10:
                    message.Description = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a TicketAdmission message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof assets.TicketAdmission
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {assets.TicketAdmission} TicketAdmission
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TicketAdmission.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a TicketAdmission message.
         * @function verify
         * @memberof assets.TicketAdmission
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        TicketAdmission.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.AgeRestriction != null && message.hasOwnProperty("AgeRestriction")) {
                var error = $root.assets.AgeRestrictionField.verify(message.AgeRestriction);
                if (error)
                    return "AgeRestriction." + error;
            }
            if (message.AdmissionType != null && message.hasOwnProperty("AdmissionType"))
                if (!$util.isString(message.AdmissionType))
                    return "AdmissionType: string expected";
            if (message.Venue != null && message.hasOwnProperty("Venue"))
                if (!$util.isString(message.Venue))
                    return "Venue: string expected";
            if (message.Class != null && message.hasOwnProperty("Class"))
                if (!$util.isString(message.Class))
                    return "Class: string expected";
            if (message.Area != null && message.hasOwnProperty("Area"))
                if (!$util.isString(message.Area))
                    return "Area: string expected";
            if (message.Seat != null && message.hasOwnProperty("Seat"))
                if (!$util.isString(message.Seat))
                    return "Seat: string expected";
            if (message.StartTimeDate != null && message.hasOwnProperty("StartTimeDate"))
                if (!$util.isInteger(message.StartTimeDate) && !(message.StartTimeDate && $util.isInteger(message.StartTimeDate.low) && $util.isInteger(message.StartTimeDate.high)))
                    return "StartTimeDate: integer|Long expected";
            if (message.ValidFrom != null && message.hasOwnProperty("ValidFrom"))
                if (!$util.isInteger(message.ValidFrom) && !(message.ValidFrom && $util.isInteger(message.ValidFrom.low) && $util.isInteger(message.ValidFrom.high)))
                    return "ValidFrom: integer|Long expected";
            if (message.ExpirationTimestamp != null && message.hasOwnProperty("ExpirationTimestamp"))
                if (!$util.isInteger(message.ExpirationTimestamp) && !(message.ExpirationTimestamp && $util.isInteger(message.ExpirationTimestamp.low) && $util.isInteger(message.ExpirationTimestamp.high)))
                    return "ExpirationTimestamp: integer|Long expected";
            if (message.Description != null && message.hasOwnProperty("Description"))
                if (!$util.isString(message.Description))
                    return "Description: string expected";
            return null;
        };

        /**
         * Creates a TicketAdmission message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof assets.TicketAdmission
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {assets.TicketAdmission} TicketAdmission
         */
        TicketAdmission.fromObject = function fromObject(object) {
            if (object instanceof $root.assets.TicketAdmission)
                return object;
            var message = new $root.assets.TicketAdmission();
            if (object.AgeRestriction != null) {
                if (typeof object.AgeRestriction !== "object")
                    throw TypeError(".assets.TicketAdmission.AgeRestriction: object expected");
                message.AgeRestriction = $root.assets.AgeRestrictionField.fromObject(object.AgeRestriction);
            }
            if (object.AdmissionType != null)
                message.AdmissionType = String(object.AdmissionType);
            if (object.Venue != null)
                message.Venue = String(object.Venue);
            if (object.Class != null)
                message.Class = String(object.Class);
            if (object.Area != null)
                message.Area = String(object.Area);
            if (object.Seat != null)
                message.Seat = String(object.Seat);
            if (object.StartTimeDate != null)
                if ($util.Long)
                    (message.StartTimeDate = $util.Long.fromValue(object.StartTimeDate)).unsigned = true;
                else if (typeof object.StartTimeDate === "string")
                    message.StartTimeDate = parseInt(object.StartTimeDate, 10);
                else if (typeof object.StartTimeDate === "number")
                    message.StartTimeDate = object.StartTimeDate;
                else if (typeof object.StartTimeDate === "object")
                    message.StartTimeDate = new $util.LongBits(object.StartTimeDate.low >>> 0, object.StartTimeDate.high >>> 0).toNumber(true);
            if (object.ValidFrom != null)
                if ($util.Long)
                    (message.ValidFrom = $util.Long.fromValue(object.ValidFrom)).unsigned = true;
                else if (typeof object.ValidFrom === "string")
                    message.ValidFrom = parseInt(object.ValidFrom, 10);
                else if (typeof object.ValidFrom === "number")
                    message.ValidFrom = object.ValidFrom;
                else if (typeof object.ValidFrom === "object")
                    message.ValidFrom = new $util.LongBits(object.ValidFrom.low >>> 0, object.ValidFrom.high >>> 0).toNumber(true);
            if (object.ExpirationTimestamp != null)
                if ($util.Long)
                    (message.ExpirationTimestamp = $util.Long.fromValue(object.ExpirationTimestamp)).unsigned = true;
                else if (typeof object.ExpirationTimestamp === "string")
                    message.ExpirationTimestamp = parseInt(object.ExpirationTimestamp, 10);
                else if (typeof object.ExpirationTimestamp === "number")
                    message.ExpirationTimestamp = object.ExpirationTimestamp;
                else if (typeof object.ExpirationTimestamp === "object")
                    message.ExpirationTimestamp = new $util.LongBits(object.ExpirationTimestamp.low >>> 0, object.ExpirationTimestamp.high >>> 0).toNumber(true);
            if (object.Description != null)
                message.Description = String(object.Description);
            return message;
        };

        /**
         * Creates a plain object from a TicketAdmission message. Also converts values to other types if specified.
         * @function toObject
         * @memberof assets.TicketAdmission
         * @static
         * @param {assets.TicketAdmission} message TicketAdmission
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        TicketAdmission.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.AgeRestriction = null;
                object.AdmissionType = "";
                object.Venue = "";
                object.Class = "";
                object.Area = "";
                object.Seat = "";
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.StartTimeDate = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.StartTimeDate = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.ValidFrom = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.ValidFrom = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.ExpirationTimestamp = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.ExpirationTimestamp = options.longs === String ? "0" : 0;
                object.Description = "";
            }
            if (message.AgeRestriction != null && message.hasOwnProperty("AgeRestriction"))
                object.AgeRestriction = $root.assets.AgeRestrictionField.toObject(message.AgeRestriction, options);
            if (message.AdmissionType != null && message.hasOwnProperty("AdmissionType"))
                object.AdmissionType = message.AdmissionType;
            if (message.Venue != null && message.hasOwnProperty("Venue"))
                object.Venue = message.Venue;
            if (message.Class != null && message.hasOwnProperty("Class"))
                object.Class = message.Class;
            if (message.Area != null && message.hasOwnProperty("Area"))
                object.Area = message.Area;
            if (message.Seat != null && message.hasOwnProperty("Seat"))
                object.Seat = message.Seat;
            if (message.StartTimeDate != null && message.hasOwnProperty("StartTimeDate"))
                if (typeof message.StartTimeDate === "number")
                    object.StartTimeDate = options.longs === String ? String(message.StartTimeDate) : message.StartTimeDate;
                else
                    object.StartTimeDate = options.longs === String ? $util.Long.prototype.toString.call(message.StartTimeDate) : options.longs === Number ? new $util.LongBits(message.StartTimeDate.low >>> 0, message.StartTimeDate.high >>> 0).toNumber(true) : message.StartTimeDate;
            if (message.ValidFrom != null && message.hasOwnProperty("ValidFrom"))
                if (typeof message.ValidFrom === "number")
                    object.ValidFrom = options.longs === String ? String(message.ValidFrom) : message.ValidFrom;
                else
                    object.ValidFrom = options.longs === String ? $util.Long.prototype.toString.call(message.ValidFrom) : options.longs === Number ? new $util.LongBits(message.ValidFrom.low >>> 0, message.ValidFrom.high >>> 0).toNumber(true) : message.ValidFrom;
            if (message.ExpirationTimestamp != null && message.hasOwnProperty("ExpirationTimestamp"))
                if (typeof message.ExpirationTimestamp === "number")
                    object.ExpirationTimestamp = options.longs === String ? String(message.ExpirationTimestamp) : message.ExpirationTimestamp;
                else
                    object.ExpirationTimestamp = options.longs === String ? $util.Long.prototype.toString.call(message.ExpirationTimestamp) : options.longs === Number ? new $util.LongBits(message.ExpirationTimestamp.low >>> 0, message.ExpirationTimestamp.high >>> 0).toNumber(true) : message.ExpirationTimestamp;
            if (message.Description != null && message.hasOwnProperty("Description"))
                object.Description = message.Description;
            return object;
        };

        /**
         * Converts this TicketAdmission to JSON.
         * @function toJSON
         * @memberof assets.TicketAdmission
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        TicketAdmission.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return TicketAdmission;
    })();

    assets.CasinoChip = (function() {

        /**
         * Properties of a CasinoChip.
         * @memberof assets
         * @interface ICasinoChip
         * @property {string|null} [CurrencyCode] CasinoChip CurrencyCode
         * @property {string|null} [UseType] CasinoChip UseType
         * @property {assets.IAgeRestrictionField|null} [AgeRestriction] CasinoChip AgeRestriction
         * @property {number|Long|null} [ValidFrom] CasinoChip ValidFrom
         * @property {number|Long|null} [ExpirationTimestamp] CasinoChip ExpirationTimestamp
         * @property {number|Long|null} [Precision] CasinoChip Precision
         */

        /**
         * Constructs a new CasinoChip.
         * @memberof assets
         * @classdesc Represents a CasinoChip.
         * @implements ICasinoChip
         * @constructor
         * @param {assets.ICasinoChip=} [properties] Properties to set
         */
        function CasinoChip(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * CasinoChip CurrencyCode.
         * @member {string} CurrencyCode
         * @memberof assets.CasinoChip
         * @instance
         */
        CasinoChip.prototype.CurrencyCode = "";

        /**
         * CasinoChip UseType.
         * @member {string} UseType
         * @memberof assets.CasinoChip
         * @instance
         */
        CasinoChip.prototype.UseType = "";

        /**
         * CasinoChip AgeRestriction.
         * @member {assets.IAgeRestrictionField|null|undefined} AgeRestriction
         * @memberof assets.CasinoChip
         * @instance
         */
        CasinoChip.prototype.AgeRestriction = null;

        /**
         * CasinoChip ValidFrom.
         * @member {number|Long} ValidFrom
         * @memberof assets.CasinoChip
         * @instance
         */
        CasinoChip.prototype.ValidFrom = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * CasinoChip ExpirationTimestamp.
         * @member {number|Long} ExpirationTimestamp
         * @memberof assets.CasinoChip
         * @instance
         */
        CasinoChip.prototype.ExpirationTimestamp = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * CasinoChip Precision.
         * @member {number|Long} Precision
         * @memberof assets.CasinoChip
         * @instance
         */
        CasinoChip.prototype.Precision = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * Creates a new CasinoChip instance using the specified properties.
         * @function create
         * @memberof assets.CasinoChip
         * @static
         * @param {assets.ICasinoChip=} [properties] Properties to set
         * @returns {assets.CasinoChip} CasinoChip instance
         */
        CasinoChip.create = function create(properties) {
            return new CasinoChip(properties);
        };

        /**
         * Encodes the specified CasinoChip message. Does not implicitly {@link assets.CasinoChip.verify|verify} messages.
         * @function encode
         * @memberof assets.CasinoChip
         * @static
         * @param {assets.ICasinoChip} message CasinoChip message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CasinoChip.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.CurrencyCode != null && Object.hasOwnProperty.call(message, "CurrencyCode"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.CurrencyCode);
            if (message.UseType != null && Object.hasOwnProperty.call(message, "UseType"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.UseType);
            if (message.AgeRestriction != null && Object.hasOwnProperty.call(message, "AgeRestriction"))
                $root.assets.AgeRestrictionField.encode(message.AgeRestriction, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            if (message.ValidFrom != null && Object.hasOwnProperty.call(message, "ValidFrom"))
                writer.uint32(/* id 4, wireType 0 =*/32).uint64(message.ValidFrom);
            if (message.ExpirationTimestamp != null && Object.hasOwnProperty.call(message, "ExpirationTimestamp"))
                writer.uint32(/* id 5, wireType 0 =*/40).uint64(message.ExpirationTimestamp);
            if (message.Precision != null && Object.hasOwnProperty.call(message, "Precision"))
                writer.uint32(/* id 6, wireType 0 =*/48).uint64(message.Precision);
            return writer;
        };

        /**
         * Encodes the specified CasinoChip message, length delimited. Does not implicitly {@link assets.CasinoChip.verify|verify} messages.
         * @function encodeDelimited
         * @memberof assets.CasinoChip
         * @static
         * @param {assets.ICasinoChip} message CasinoChip message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        CasinoChip.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a CasinoChip message from the specified reader or buffer.
         * @function decode
         * @memberof assets.CasinoChip
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {assets.CasinoChip} CasinoChip
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CasinoChip.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.assets.CasinoChip();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.CurrencyCode = reader.string();
                    break;
                case 2:
                    message.UseType = reader.string();
                    break;
                case 3:
                    message.AgeRestriction = $root.assets.AgeRestrictionField.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.ValidFrom = reader.uint64();
                    break;
                case 5:
                    message.ExpirationTimestamp = reader.uint64();
                    break;
                case 6:
                    message.Precision = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a CasinoChip message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof assets.CasinoChip
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {assets.CasinoChip} CasinoChip
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        CasinoChip.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a CasinoChip message.
         * @function verify
         * @memberof assets.CasinoChip
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        CasinoChip.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.CurrencyCode != null && message.hasOwnProperty("CurrencyCode"))
                if (!$util.isString(message.CurrencyCode))
                    return "CurrencyCode: string expected";
            if (message.UseType != null && message.hasOwnProperty("UseType"))
                if (!$util.isString(message.UseType))
                    return "UseType: string expected";
            if (message.AgeRestriction != null && message.hasOwnProperty("AgeRestriction")) {
                var error = $root.assets.AgeRestrictionField.verify(message.AgeRestriction);
                if (error)
                    return "AgeRestriction." + error;
            }
            if (message.ValidFrom != null && message.hasOwnProperty("ValidFrom"))
                if (!$util.isInteger(message.ValidFrom) && !(message.ValidFrom && $util.isInteger(message.ValidFrom.low) && $util.isInteger(message.ValidFrom.high)))
                    return "ValidFrom: integer|Long expected";
            if (message.ExpirationTimestamp != null && message.hasOwnProperty("ExpirationTimestamp"))
                if (!$util.isInteger(message.ExpirationTimestamp) && !(message.ExpirationTimestamp && $util.isInteger(message.ExpirationTimestamp.low) && $util.isInteger(message.ExpirationTimestamp.high)))
                    return "ExpirationTimestamp: integer|Long expected";
            if (message.Precision != null && message.hasOwnProperty("Precision"))
                if (!$util.isInteger(message.Precision) && !(message.Precision && $util.isInteger(message.Precision.low) && $util.isInteger(message.Precision.high)))
                    return "Precision: integer|Long expected";
            return null;
        };

        /**
         * Creates a CasinoChip message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof assets.CasinoChip
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {assets.CasinoChip} CasinoChip
         */
        CasinoChip.fromObject = function fromObject(object) {
            if (object instanceof $root.assets.CasinoChip)
                return object;
            var message = new $root.assets.CasinoChip();
            if (object.CurrencyCode != null)
                message.CurrencyCode = String(object.CurrencyCode);
            if (object.UseType != null)
                message.UseType = String(object.UseType);
            if (object.AgeRestriction != null) {
                if (typeof object.AgeRestriction !== "object")
                    throw TypeError(".assets.CasinoChip.AgeRestriction: object expected");
                message.AgeRestriction = $root.assets.AgeRestrictionField.fromObject(object.AgeRestriction);
            }
            if (object.ValidFrom != null)
                if ($util.Long)
                    (message.ValidFrom = $util.Long.fromValue(object.ValidFrom)).unsigned = true;
                else if (typeof object.ValidFrom === "string")
                    message.ValidFrom = parseInt(object.ValidFrom, 10);
                else if (typeof object.ValidFrom === "number")
                    message.ValidFrom = object.ValidFrom;
                else if (typeof object.ValidFrom === "object")
                    message.ValidFrom = new $util.LongBits(object.ValidFrom.low >>> 0, object.ValidFrom.high >>> 0).toNumber(true);
            if (object.ExpirationTimestamp != null)
                if ($util.Long)
                    (message.ExpirationTimestamp = $util.Long.fromValue(object.ExpirationTimestamp)).unsigned = true;
                else if (typeof object.ExpirationTimestamp === "string")
                    message.ExpirationTimestamp = parseInt(object.ExpirationTimestamp, 10);
                else if (typeof object.ExpirationTimestamp === "number")
                    message.ExpirationTimestamp = object.ExpirationTimestamp;
                else if (typeof object.ExpirationTimestamp === "object")
                    message.ExpirationTimestamp = new $util.LongBits(object.ExpirationTimestamp.low >>> 0, object.ExpirationTimestamp.high >>> 0).toNumber(true);
            if (object.Precision != null)
                if ($util.Long)
                    (message.Precision = $util.Long.fromValue(object.Precision)).unsigned = true;
                else if (typeof object.Precision === "string")
                    message.Precision = parseInt(object.Precision, 10);
                else if (typeof object.Precision === "number")
                    message.Precision = object.Precision;
                else if (typeof object.Precision === "object")
                    message.Precision = new $util.LongBits(object.Precision.low >>> 0, object.Precision.high >>> 0).toNumber(true);
            return message;
        };

        /**
         * Creates a plain object from a CasinoChip message. Also converts values to other types if specified.
         * @function toObject
         * @memberof assets.CasinoChip
         * @static
         * @param {assets.CasinoChip} message CasinoChip
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        CasinoChip.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.CurrencyCode = "";
                object.UseType = "";
                object.AgeRestriction = null;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.ValidFrom = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.ValidFrom = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.ExpirationTimestamp = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.ExpirationTimestamp = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.Precision = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.Precision = options.longs === String ? "0" : 0;
            }
            if (message.CurrencyCode != null && message.hasOwnProperty("CurrencyCode"))
                object.CurrencyCode = message.CurrencyCode;
            if (message.UseType != null && message.hasOwnProperty("UseType"))
                object.UseType = message.UseType;
            if (message.AgeRestriction != null && message.hasOwnProperty("AgeRestriction"))
                object.AgeRestriction = $root.assets.AgeRestrictionField.toObject(message.AgeRestriction, options);
            if (message.ValidFrom != null && message.hasOwnProperty("ValidFrom"))
                if (typeof message.ValidFrom === "number")
                    object.ValidFrom = options.longs === String ? String(message.ValidFrom) : message.ValidFrom;
                else
                    object.ValidFrom = options.longs === String ? $util.Long.prototype.toString.call(message.ValidFrom) : options.longs === Number ? new $util.LongBits(message.ValidFrom.low >>> 0, message.ValidFrom.high >>> 0).toNumber(true) : message.ValidFrom;
            if (message.ExpirationTimestamp != null && message.hasOwnProperty("ExpirationTimestamp"))
                if (typeof message.ExpirationTimestamp === "number")
                    object.ExpirationTimestamp = options.longs === String ? String(message.ExpirationTimestamp) : message.ExpirationTimestamp;
                else
                    object.ExpirationTimestamp = options.longs === String ? $util.Long.prototype.toString.call(message.ExpirationTimestamp) : options.longs === Number ? new $util.LongBits(message.ExpirationTimestamp.low >>> 0, message.ExpirationTimestamp.high >>> 0).toNumber(true) : message.ExpirationTimestamp;
            if (message.Precision != null && message.hasOwnProperty("Precision"))
                if (typeof message.Precision === "number")
                    object.Precision = options.longs === String ? String(message.Precision) : message.Precision;
                else
                    object.Precision = options.longs === String ? $util.Long.prototype.toString.call(message.Precision) : options.longs === Number ? new $util.LongBits(message.Precision.low >>> 0, message.Precision.high >>> 0).toNumber(true) : message.Precision;
            return object;
        };

        /**
         * Converts this CasinoChip to JSON.
         * @function toJSON
         * @memberof assets.CasinoChip
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        CasinoChip.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return CasinoChip;
    })();

    assets.AgeRestrictionField = (function() {

        /**
         * Properties of an AgeRestrictionField.
         * @memberof assets
         * @interface IAgeRestrictionField
         * @property {number|null} [Lower] AgeRestrictionField Lower
         * @property {number|null} [Upper] AgeRestrictionField Upper
         */

        /**
         * Constructs a new AgeRestrictionField.
         * @memberof assets
         * @classdesc Represents an AgeRestrictionField.
         * @implements IAgeRestrictionField
         * @constructor
         * @param {assets.IAgeRestrictionField=} [properties] Properties to set
         */
        function AgeRestrictionField(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * AgeRestrictionField Lower.
         * @member {number} Lower
         * @memberof assets.AgeRestrictionField
         * @instance
         */
        AgeRestrictionField.prototype.Lower = 0;

        /**
         * AgeRestrictionField Upper.
         * @member {number} Upper
         * @memberof assets.AgeRestrictionField
         * @instance
         */
        AgeRestrictionField.prototype.Upper = 0;

        /**
         * Creates a new AgeRestrictionField instance using the specified properties.
         * @function create
         * @memberof assets.AgeRestrictionField
         * @static
         * @param {assets.IAgeRestrictionField=} [properties] Properties to set
         * @returns {assets.AgeRestrictionField} AgeRestrictionField instance
         */
        AgeRestrictionField.create = function create(properties) {
            return new AgeRestrictionField(properties);
        };

        /**
         * Encodes the specified AgeRestrictionField message. Does not implicitly {@link assets.AgeRestrictionField.verify|verify} messages.
         * @function encode
         * @memberof assets.AgeRestrictionField
         * @static
         * @param {assets.IAgeRestrictionField} message AgeRestrictionField message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AgeRestrictionField.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Lower != null && Object.hasOwnProperty.call(message, "Lower"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.Lower);
            if (message.Upper != null && Object.hasOwnProperty.call(message, "Upper"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.Upper);
            return writer;
        };

        /**
         * Encodes the specified AgeRestrictionField message, length delimited. Does not implicitly {@link assets.AgeRestrictionField.verify|verify} messages.
         * @function encodeDelimited
         * @memberof assets.AgeRestrictionField
         * @static
         * @param {assets.IAgeRestrictionField} message AgeRestrictionField message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AgeRestrictionField.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an AgeRestrictionField message from the specified reader or buffer.
         * @function decode
         * @memberof assets.AgeRestrictionField
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {assets.AgeRestrictionField} AgeRestrictionField
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AgeRestrictionField.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.assets.AgeRestrictionField();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.Lower = reader.uint32();
                    break;
                case 2:
                    message.Upper = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an AgeRestrictionField message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof assets.AgeRestrictionField
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {assets.AgeRestrictionField} AgeRestrictionField
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AgeRestrictionField.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an AgeRestrictionField message.
         * @function verify
         * @memberof assets.AgeRestrictionField
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        AgeRestrictionField.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.Lower != null && message.hasOwnProperty("Lower"))
                if (!$util.isInteger(message.Lower))
                    return "Lower: integer expected";
            if (message.Upper != null && message.hasOwnProperty("Upper"))
                if (!$util.isInteger(message.Upper))
                    return "Upper: integer expected";
            return null;
        };

        /**
         * Creates an AgeRestrictionField message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof assets.AgeRestrictionField
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {assets.AgeRestrictionField} AgeRestrictionField
         */
        AgeRestrictionField.fromObject = function fromObject(object) {
            if (object instanceof $root.assets.AgeRestrictionField)
                return object;
            var message = new $root.assets.AgeRestrictionField();
            if (object.Lower != null)
                message.Lower = object.Lower >>> 0;
            if (object.Upper != null)
                message.Upper = object.Upper >>> 0;
            return message;
        };

        /**
         * Creates a plain object from an AgeRestrictionField message. Also converts values to other types if specified.
         * @function toObject
         * @memberof assets.AgeRestrictionField
         * @static
         * @param {assets.AgeRestrictionField} message AgeRestrictionField
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        AgeRestrictionField.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.Lower = 0;
                object.Upper = 0;
            }
            if (message.Lower != null && message.hasOwnProperty("Lower"))
                object.Lower = message.Lower;
            if (message.Upper != null && message.hasOwnProperty("Upper"))
                object.Upper = message.Upper;
            return object;
        };

        /**
         * Converts this AgeRestrictionField to JSON.
         * @function toJSON
         * @memberof assets.AgeRestrictionField
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        AgeRestrictionField.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return AgeRestrictionField;
    })();

    return assets;
})();

module.exports = $root;
