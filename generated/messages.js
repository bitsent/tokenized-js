/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/minimal");

// Common aliases
var $Reader = $protobuf.Reader, $Writer = $protobuf.Writer, $util = $protobuf.util;

// Exported root namespace
var $root = $protobuf.roots["default"] || ($protobuf.roots["default"] = {});

$root.messages = (function() {

    /**
     * Namespace messages.
     * @exports messages
     * @namespace
     */
    var messages = {};

    messages.PublicMessage = (function() {

        /**
         * Properties of a PublicMessage.
         * @memberof messages
         * @interface IPublicMessage
         * @property {number|Long|null} [Timestamp] PublicMessage Timestamp
         * @property {string|null} [Subject] PublicMessage Subject
         * @property {messages.IOutpointField|null} [Regarding] PublicMessage Regarding
         * @property {messages.IDocumentField|null} [PublicMessage] PublicMessage PublicMessage
         * @property {Array.<messages.IDocumentField>|null} [Attachments] PublicMessage Attachments
         */

        /**
         * Constructs a new PublicMessage.
         * @memberof messages
         * @classdesc Represents a PublicMessage.
         * @implements IPublicMessage
         * @constructor
         * @param {messages.IPublicMessage=} [properties] Properties to set
         */
        function PublicMessage(properties) {
            this.Attachments = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * PublicMessage Timestamp.
         * @member {number|Long} Timestamp
         * @memberof messages.PublicMessage
         * @instance
         */
        PublicMessage.prototype.Timestamp = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * PublicMessage Subject.
         * @member {string} Subject
         * @memberof messages.PublicMessage
         * @instance
         */
        PublicMessage.prototype.Subject = "";

        /**
         * PublicMessage Regarding.
         * @member {messages.IOutpointField|null|undefined} Regarding
         * @memberof messages.PublicMessage
         * @instance
         */
        PublicMessage.prototype.Regarding = null;

        /**
         * PublicMessage PublicMessage.
         * @member {messages.IDocumentField|null|undefined} PublicMessage
         * @memberof messages.PublicMessage
         * @instance
         */
        PublicMessage.prototype.PublicMessage = null;

        /**
         * PublicMessage Attachments.
         * @member {Array.<messages.IDocumentField>} Attachments
         * @memberof messages.PublicMessage
         * @instance
         */
        PublicMessage.prototype.Attachments = $util.emptyArray;

        /**
         * Creates a new PublicMessage instance using the specified properties.
         * @function create
         * @memberof messages.PublicMessage
         * @static
         * @param {messages.IPublicMessage=} [properties] Properties to set
         * @returns {messages.PublicMessage} PublicMessage instance
         */
        PublicMessage.create = function create(properties) {
            return new PublicMessage(properties);
        };

        /**
         * Encodes the specified PublicMessage message. Does not implicitly {@link messages.PublicMessage.verify|verify} messages.
         * @function encode
         * @memberof messages.PublicMessage
         * @static
         * @param {messages.IPublicMessage} message PublicMessage message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PublicMessage.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Timestamp != null && Object.hasOwnProperty.call(message, "Timestamp"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint64(message.Timestamp);
            if (message.Subject != null && Object.hasOwnProperty.call(message, "Subject"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.Subject);
            if (message.Regarding != null && Object.hasOwnProperty.call(message, "Regarding"))
                $root.messages.OutpointField.encode(message.Regarding, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            if (message.PublicMessage != null && Object.hasOwnProperty.call(message, "PublicMessage"))
                $root.messages.DocumentField.encode(message.PublicMessage, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            if (message.Attachments != null && message.Attachments.length)
                for (var i = 0; i < message.Attachments.length; ++i)
                    $root.messages.DocumentField.encode(message.Attachments[i], writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified PublicMessage message, length delimited. Does not implicitly {@link messages.PublicMessage.verify|verify} messages.
         * @function encodeDelimited
         * @memberof messages.PublicMessage
         * @static
         * @param {messages.IPublicMessage} message PublicMessage message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PublicMessage.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a PublicMessage message from the specified reader or buffer.
         * @function decode
         * @memberof messages.PublicMessage
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {messages.PublicMessage} PublicMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PublicMessage.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.messages.PublicMessage();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.Timestamp = reader.uint64();
                    break;
                case 2:
                    message.Subject = reader.string();
                    break;
                case 3:
                    message.Regarding = $root.messages.OutpointField.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.PublicMessage = $root.messages.DocumentField.decode(reader, reader.uint32());
                    break;
                case 5:
                    if (!(message.Attachments && message.Attachments.length))
                        message.Attachments = [];
                    message.Attachments.push($root.messages.DocumentField.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a PublicMessage message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof messages.PublicMessage
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {messages.PublicMessage} PublicMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PublicMessage.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a PublicMessage message.
         * @function verify
         * @memberof messages.PublicMessage
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        PublicMessage.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.Timestamp != null && message.hasOwnProperty("Timestamp"))
                if (!$util.isInteger(message.Timestamp) && !(message.Timestamp && $util.isInteger(message.Timestamp.low) && $util.isInteger(message.Timestamp.high)))
                    return "Timestamp: integer|Long expected";
            if (message.Subject != null && message.hasOwnProperty("Subject"))
                if (!$util.isString(message.Subject))
                    return "Subject: string expected";
            if (message.Regarding != null && message.hasOwnProperty("Regarding")) {
                var error = $root.messages.OutpointField.verify(message.Regarding);
                if (error)
                    return "Regarding." + error;
            }
            if (message.PublicMessage != null && message.hasOwnProperty("PublicMessage")) {
                var error = $root.messages.DocumentField.verify(message.PublicMessage);
                if (error)
                    return "PublicMessage." + error;
            }
            if (message.Attachments != null && message.hasOwnProperty("Attachments")) {
                if (!Array.isArray(message.Attachments))
                    return "Attachments: array expected";
                for (var i = 0; i < message.Attachments.length; ++i) {
                    var error = $root.messages.DocumentField.verify(message.Attachments[i]);
                    if (error)
                        return "Attachments." + error;
                }
            }
            return null;
        };

        /**
         * Creates a PublicMessage message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof messages.PublicMessage
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {messages.PublicMessage} PublicMessage
         */
        PublicMessage.fromObject = function fromObject(object) {
            if (object instanceof $root.messages.PublicMessage)
                return object;
            var message = new $root.messages.PublicMessage();
            if (object.Timestamp != null)
                if ($util.Long)
                    (message.Timestamp = $util.Long.fromValue(object.Timestamp)).unsigned = true;
                else if (typeof object.Timestamp === "string")
                    message.Timestamp = parseInt(object.Timestamp, 10);
                else if (typeof object.Timestamp === "number")
                    message.Timestamp = object.Timestamp;
                else if (typeof object.Timestamp === "object")
                    message.Timestamp = new $util.LongBits(object.Timestamp.low >>> 0, object.Timestamp.high >>> 0).toNumber(true);
            if (object.Subject != null)
                message.Subject = String(object.Subject);
            if (object.Regarding != null) {
                if (typeof object.Regarding !== "object")
                    throw TypeError(".messages.PublicMessage.Regarding: object expected");
                message.Regarding = $root.messages.OutpointField.fromObject(object.Regarding);
            }
            if (object.PublicMessage != null) {
                if (typeof object.PublicMessage !== "object")
                    throw TypeError(".messages.PublicMessage.PublicMessage: object expected");
                message.PublicMessage = $root.messages.DocumentField.fromObject(object.PublicMessage);
            }
            if (object.Attachments) {
                if (!Array.isArray(object.Attachments))
                    throw TypeError(".messages.PublicMessage.Attachments: array expected");
                message.Attachments = [];
                for (var i = 0; i < object.Attachments.length; ++i) {
                    if (typeof object.Attachments[i] !== "object")
                        throw TypeError(".messages.PublicMessage.Attachments: object expected");
                    message.Attachments[i] = $root.messages.DocumentField.fromObject(object.Attachments[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a PublicMessage message. Also converts values to other types if specified.
         * @function toObject
         * @memberof messages.PublicMessage
         * @static
         * @param {messages.PublicMessage} message PublicMessage
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        PublicMessage.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.Attachments = [];
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.Timestamp = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.Timestamp = options.longs === String ? "0" : 0;
                object.Subject = "";
                object.Regarding = null;
                object.PublicMessage = null;
            }
            if (message.Timestamp != null && message.hasOwnProperty("Timestamp"))
                if (typeof message.Timestamp === "number")
                    object.Timestamp = options.longs === String ? String(message.Timestamp) : message.Timestamp;
                else
                    object.Timestamp = options.longs === String ? $util.Long.prototype.toString.call(message.Timestamp) : options.longs === Number ? new $util.LongBits(message.Timestamp.low >>> 0, message.Timestamp.high >>> 0).toNumber(true) : message.Timestamp;
            if (message.Subject != null && message.hasOwnProperty("Subject"))
                object.Subject = message.Subject;
            if (message.Regarding != null && message.hasOwnProperty("Regarding"))
                object.Regarding = $root.messages.OutpointField.toObject(message.Regarding, options);
            if (message.PublicMessage != null && message.hasOwnProperty("PublicMessage"))
                object.PublicMessage = $root.messages.DocumentField.toObject(message.PublicMessage, options);
            if (message.Attachments && message.Attachments.length) {
                object.Attachments = [];
                for (var j = 0; j < message.Attachments.length; ++j)
                    object.Attachments[j] = $root.messages.DocumentField.toObject(message.Attachments[j], options);
            }
            return object;
        };

        /**
         * Converts this PublicMessage to JSON.
         * @function toJSON
         * @memberof messages.PublicMessage
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        PublicMessage.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return PublicMessage;
    })();

    messages.PrivateMessage = (function() {

        /**
         * Properties of a PrivateMessage.
         * @memberof messages
         * @interface IPrivateMessage
         * @property {number|Long|null} [Timestamp] PrivateMessage Timestamp
         * @property {string|null} [Subject] PrivateMessage Subject
         * @property {messages.IOutpointField|null} [Regarding] PrivateMessage Regarding
         * @property {messages.IDocumentField|null} [PrivateMessage] PrivateMessage PrivateMessage
         * @property {Array.<messages.IDocumentField>|null} [Attachments] PrivateMessage Attachments
         */

        /**
         * Constructs a new PrivateMessage.
         * @memberof messages
         * @classdesc Represents a PrivateMessage.
         * @implements IPrivateMessage
         * @constructor
         * @param {messages.IPrivateMessage=} [properties] Properties to set
         */
        function PrivateMessage(properties) {
            this.Attachments = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * PrivateMessage Timestamp.
         * @member {number|Long} Timestamp
         * @memberof messages.PrivateMessage
         * @instance
         */
        PrivateMessage.prototype.Timestamp = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * PrivateMessage Subject.
         * @member {string} Subject
         * @memberof messages.PrivateMessage
         * @instance
         */
        PrivateMessage.prototype.Subject = "";

        /**
         * PrivateMessage Regarding.
         * @member {messages.IOutpointField|null|undefined} Regarding
         * @memberof messages.PrivateMessage
         * @instance
         */
        PrivateMessage.prototype.Regarding = null;

        /**
         * PrivateMessage PrivateMessage.
         * @member {messages.IDocumentField|null|undefined} PrivateMessage
         * @memberof messages.PrivateMessage
         * @instance
         */
        PrivateMessage.prototype.PrivateMessage = null;

        /**
         * PrivateMessage Attachments.
         * @member {Array.<messages.IDocumentField>} Attachments
         * @memberof messages.PrivateMessage
         * @instance
         */
        PrivateMessage.prototype.Attachments = $util.emptyArray;

        /**
         * Creates a new PrivateMessage instance using the specified properties.
         * @function create
         * @memberof messages.PrivateMessage
         * @static
         * @param {messages.IPrivateMessage=} [properties] Properties to set
         * @returns {messages.PrivateMessage} PrivateMessage instance
         */
        PrivateMessage.create = function create(properties) {
            return new PrivateMessage(properties);
        };

        /**
         * Encodes the specified PrivateMessage message. Does not implicitly {@link messages.PrivateMessage.verify|verify} messages.
         * @function encode
         * @memberof messages.PrivateMessage
         * @static
         * @param {messages.IPrivateMessage} message PrivateMessage message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PrivateMessage.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Timestamp != null && Object.hasOwnProperty.call(message, "Timestamp"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint64(message.Timestamp);
            if (message.Subject != null && Object.hasOwnProperty.call(message, "Subject"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.Subject);
            if (message.Regarding != null && Object.hasOwnProperty.call(message, "Regarding"))
                $root.messages.OutpointField.encode(message.Regarding, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            if (message.PrivateMessage != null && Object.hasOwnProperty.call(message, "PrivateMessage"))
                $root.messages.DocumentField.encode(message.PrivateMessage, writer.uint32(/* id 4, wireType 2 =*/34).fork()).ldelim();
            if (message.Attachments != null && message.Attachments.length)
                for (var i = 0; i < message.Attachments.length; ++i)
                    $root.messages.DocumentField.encode(message.Attachments[i], writer.uint32(/* id 5, wireType 2 =*/42).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified PrivateMessage message, length delimited. Does not implicitly {@link messages.PrivateMessage.verify|verify} messages.
         * @function encodeDelimited
         * @memberof messages.PrivateMessage
         * @static
         * @param {messages.IPrivateMessage} message PrivateMessage message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PrivateMessage.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a PrivateMessage message from the specified reader or buffer.
         * @function decode
         * @memberof messages.PrivateMessage
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {messages.PrivateMessage} PrivateMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PrivateMessage.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.messages.PrivateMessage();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.Timestamp = reader.uint64();
                    break;
                case 2:
                    message.Subject = reader.string();
                    break;
                case 3:
                    message.Regarding = $root.messages.OutpointField.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.PrivateMessage = $root.messages.DocumentField.decode(reader, reader.uint32());
                    break;
                case 5:
                    if (!(message.Attachments && message.Attachments.length))
                        message.Attachments = [];
                    message.Attachments.push($root.messages.DocumentField.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a PrivateMessage message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof messages.PrivateMessage
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {messages.PrivateMessage} PrivateMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PrivateMessage.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a PrivateMessage message.
         * @function verify
         * @memberof messages.PrivateMessage
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        PrivateMessage.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.Timestamp != null && message.hasOwnProperty("Timestamp"))
                if (!$util.isInteger(message.Timestamp) && !(message.Timestamp && $util.isInteger(message.Timestamp.low) && $util.isInteger(message.Timestamp.high)))
                    return "Timestamp: integer|Long expected";
            if (message.Subject != null && message.hasOwnProperty("Subject"))
                if (!$util.isString(message.Subject))
                    return "Subject: string expected";
            if (message.Regarding != null && message.hasOwnProperty("Regarding")) {
                var error = $root.messages.OutpointField.verify(message.Regarding);
                if (error)
                    return "Regarding." + error;
            }
            if (message.PrivateMessage != null && message.hasOwnProperty("PrivateMessage")) {
                var error = $root.messages.DocumentField.verify(message.PrivateMessage);
                if (error)
                    return "PrivateMessage." + error;
            }
            if (message.Attachments != null && message.hasOwnProperty("Attachments")) {
                if (!Array.isArray(message.Attachments))
                    return "Attachments: array expected";
                for (var i = 0; i < message.Attachments.length; ++i) {
                    var error = $root.messages.DocumentField.verify(message.Attachments[i]);
                    if (error)
                        return "Attachments." + error;
                }
            }
            return null;
        };

        /**
         * Creates a PrivateMessage message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof messages.PrivateMessage
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {messages.PrivateMessage} PrivateMessage
         */
        PrivateMessage.fromObject = function fromObject(object) {
            if (object instanceof $root.messages.PrivateMessage)
                return object;
            var message = new $root.messages.PrivateMessage();
            if (object.Timestamp != null)
                if ($util.Long)
                    (message.Timestamp = $util.Long.fromValue(object.Timestamp)).unsigned = true;
                else if (typeof object.Timestamp === "string")
                    message.Timestamp = parseInt(object.Timestamp, 10);
                else if (typeof object.Timestamp === "number")
                    message.Timestamp = object.Timestamp;
                else if (typeof object.Timestamp === "object")
                    message.Timestamp = new $util.LongBits(object.Timestamp.low >>> 0, object.Timestamp.high >>> 0).toNumber(true);
            if (object.Subject != null)
                message.Subject = String(object.Subject);
            if (object.Regarding != null) {
                if (typeof object.Regarding !== "object")
                    throw TypeError(".messages.PrivateMessage.Regarding: object expected");
                message.Regarding = $root.messages.OutpointField.fromObject(object.Regarding);
            }
            if (object.PrivateMessage != null) {
                if (typeof object.PrivateMessage !== "object")
                    throw TypeError(".messages.PrivateMessage.PrivateMessage: object expected");
                message.PrivateMessage = $root.messages.DocumentField.fromObject(object.PrivateMessage);
            }
            if (object.Attachments) {
                if (!Array.isArray(object.Attachments))
                    throw TypeError(".messages.PrivateMessage.Attachments: array expected");
                message.Attachments = [];
                for (var i = 0; i < object.Attachments.length; ++i) {
                    if (typeof object.Attachments[i] !== "object")
                        throw TypeError(".messages.PrivateMessage.Attachments: object expected");
                    message.Attachments[i] = $root.messages.DocumentField.fromObject(object.Attachments[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from a PrivateMessage message. Also converts values to other types if specified.
         * @function toObject
         * @memberof messages.PrivateMessage
         * @static
         * @param {messages.PrivateMessage} message PrivateMessage
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        PrivateMessage.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.Attachments = [];
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.Timestamp = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.Timestamp = options.longs === String ? "0" : 0;
                object.Subject = "";
                object.Regarding = null;
                object.PrivateMessage = null;
            }
            if (message.Timestamp != null && message.hasOwnProperty("Timestamp"))
                if (typeof message.Timestamp === "number")
                    object.Timestamp = options.longs === String ? String(message.Timestamp) : message.Timestamp;
                else
                    object.Timestamp = options.longs === String ? $util.Long.prototype.toString.call(message.Timestamp) : options.longs === Number ? new $util.LongBits(message.Timestamp.low >>> 0, message.Timestamp.high >>> 0).toNumber(true) : message.Timestamp;
            if (message.Subject != null && message.hasOwnProperty("Subject"))
                object.Subject = message.Subject;
            if (message.Regarding != null && message.hasOwnProperty("Regarding"))
                object.Regarding = $root.messages.OutpointField.toObject(message.Regarding, options);
            if (message.PrivateMessage != null && message.hasOwnProperty("PrivateMessage"))
                object.PrivateMessage = $root.messages.DocumentField.toObject(message.PrivateMessage, options);
            if (message.Attachments && message.Attachments.length) {
                object.Attachments = [];
                for (var j = 0; j < message.Attachments.length; ++j)
                    object.Attachments[j] = $root.messages.DocumentField.toObject(message.Attachments[j], options);
            }
            return object;
        };

        /**
         * Converts this PrivateMessage to JSON.
         * @function toJSON
         * @memberof messages.PrivateMessage
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        PrivateMessage.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return PrivateMessage;
    })();

    messages.RevertedTx = (function() {

        /**
         * Properties of a RevertedTx.
         * @memberof messages
         * @interface IRevertedTx
         * @property {number|Long|null} [Timestamp] RevertedTx Timestamp
         * @property {Uint8Array|null} [Transaction] RevertedTx Transaction
         */

        /**
         * Constructs a new RevertedTx.
         * @memberof messages
         * @classdesc Represents a RevertedTx.
         * @implements IRevertedTx
         * @constructor
         * @param {messages.IRevertedTx=} [properties] Properties to set
         */
        function RevertedTx(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * RevertedTx Timestamp.
         * @member {number|Long} Timestamp
         * @memberof messages.RevertedTx
         * @instance
         */
        RevertedTx.prototype.Timestamp = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * RevertedTx Transaction.
         * @member {Uint8Array} Transaction
         * @memberof messages.RevertedTx
         * @instance
         */
        RevertedTx.prototype.Transaction = $util.newBuffer([]);

        /**
         * Creates a new RevertedTx instance using the specified properties.
         * @function create
         * @memberof messages.RevertedTx
         * @static
         * @param {messages.IRevertedTx=} [properties] Properties to set
         * @returns {messages.RevertedTx} RevertedTx instance
         */
        RevertedTx.create = function create(properties) {
            return new RevertedTx(properties);
        };

        /**
         * Encodes the specified RevertedTx message. Does not implicitly {@link messages.RevertedTx.verify|verify} messages.
         * @function encode
         * @memberof messages.RevertedTx
         * @static
         * @param {messages.IRevertedTx} message RevertedTx message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RevertedTx.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Timestamp != null && Object.hasOwnProperty.call(message, "Timestamp"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint64(message.Timestamp);
            if (message.Transaction != null && Object.hasOwnProperty.call(message, "Transaction"))
                writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.Transaction);
            return writer;
        };

        /**
         * Encodes the specified RevertedTx message, length delimited. Does not implicitly {@link messages.RevertedTx.verify|verify} messages.
         * @function encodeDelimited
         * @memberof messages.RevertedTx
         * @static
         * @param {messages.IRevertedTx} message RevertedTx message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RevertedTx.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a RevertedTx message from the specified reader or buffer.
         * @function decode
         * @memberof messages.RevertedTx
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {messages.RevertedTx} RevertedTx
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RevertedTx.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.messages.RevertedTx();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.Timestamp = reader.uint64();
                    break;
                case 2:
                    message.Transaction = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a RevertedTx message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof messages.RevertedTx
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {messages.RevertedTx} RevertedTx
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RevertedTx.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a RevertedTx message.
         * @function verify
         * @memberof messages.RevertedTx
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        RevertedTx.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.Timestamp != null && message.hasOwnProperty("Timestamp"))
                if (!$util.isInteger(message.Timestamp) && !(message.Timestamp && $util.isInteger(message.Timestamp.low) && $util.isInteger(message.Timestamp.high)))
                    return "Timestamp: integer|Long expected";
            if (message.Transaction != null && message.hasOwnProperty("Transaction"))
                if (!(message.Transaction && typeof message.Transaction.length === "number" || $util.isString(message.Transaction)))
                    return "Transaction: buffer expected";
            return null;
        };

        /**
         * Creates a RevertedTx message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof messages.RevertedTx
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {messages.RevertedTx} RevertedTx
         */
        RevertedTx.fromObject = function fromObject(object) {
            if (object instanceof $root.messages.RevertedTx)
                return object;
            var message = new $root.messages.RevertedTx();
            if (object.Timestamp != null)
                if ($util.Long)
                    (message.Timestamp = $util.Long.fromValue(object.Timestamp)).unsigned = true;
                else if (typeof object.Timestamp === "string")
                    message.Timestamp = parseInt(object.Timestamp, 10);
                else if (typeof object.Timestamp === "number")
                    message.Timestamp = object.Timestamp;
                else if (typeof object.Timestamp === "object")
                    message.Timestamp = new $util.LongBits(object.Timestamp.low >>> 0, object.Timestamp.high >>> 0).toNumber(true);
            if (object.Transaction != null)
                if (typeof object.Transaction === "string")
                    $util.base64.decode(object.Transaction, message.Transaction = $util.newBuffer($util.base64.length(object.Transaction)), 0);
                else if (object.Transaction.length)
                    message.Transaction = object.Transaction;
            return message;
        };

        /**
         * Creates a plain object from a RevertedTx message. Also converts values to other types if specified.
         * @function toObject
         * @memberof messages.RevertedTx
         * @static
         * @param {messages.RevertedTx} message RevertedTx
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        RevertedTx.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.Timestamp = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.Timestamp = options.longs === String ? "0" : 0;
                if (options.bytes === String)
                    object.Transaction = "";
                else {
                    object.Transaction = [];
                    if (options.bytes !== Array)
                        object.Transaction = $util.newBuffer(object.Transaction);
                }
            }
            if (message.Timestamp != null && message.hasOwnProperty("Timestamp"))
                if (typeof message.Timestamp === "number")
                    object.Timestamp = options.longs === String ? String(message.Timestamp) : message.Timestamp;
                else
                    object.Timestamp = options.longs === String ? $util.Long.prototype.toString.call(message.Timestamp) : options.longs === Number ? new $util.LongBits(message.Timestamp.low >>> 0, message.Timestamp.high >>> 0).toNumber(true) : message.Timestamp;
            if (message.Transaction != null && message.hasOwnProperty("Transaction"))
                object.Transaction = options.bytes === String ? $util.base64.encode(message.Transaction, 0, message.Transaction.length) : options.bytes === Array ? Array.prototype.slice.call(message.Transaction) : message.Transaction;
            return object;
        };

        /**
         * Converts this RevertedTx to JSON.
         * @function toJSON
         * @memberof messages.RevertedTx
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        RevertedTx.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return RevertedTx;
    })();

    messages.Offer = (function() {

        /**
         * Properties of an Offer.
         * @memberof messages
         * @interface IOffer
         * @property {number|Long|null} [Timestamp] Offer Timestamp
         * @property {Uint8Array|null} [Payload] Offer Payload
         */

        /**
         * Constructs a new Offer.
         * @memberof messages
         * @classdesc Represents an Offer.
         * @implements IOffer
         * @constructor
         * @param {messages.IOffer=} [properties] Properties to set
         */
        function Offer(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * Offer Timestamp.
         * @member {number|Long} Timestamp
         * @memberof messages.Offer
         * @instance
         */
        Offer.prototype.Timestamp = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * Offer Payload.
         * @member {Uint8Array} Payload
         * @memberof messages.Offer
         * @instance
         */
        Offer.prototype.Payload = $util.newBuffer([]);

        /**
         * Creates a new Offer instance using the specified properties.
         * @function create
         * @memberof messages.Offer
         * @static
         * @param {messages.IOffer=} [properties] Properties to set
         * @returns {messages.Offer} Offer instance
         */
        Offer.create = function create(properties) {
            return new Offer(properties);
        };

        /**
         * Encodes the specified Offer message. Does not implicitly {@link messages.Offer.verify|verify} messages.
         * @function encode
         * @memberof messages.Offer
         * @static
         * @param {messages.IOffer} message Offer message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Offer.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Timestamp != null && Object.hasOwnProperty.call(message, "Timestamp"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint64(message.Timestamp);
            if (message.Payload != null && Object.hasOwnProperty.call(message, "Payload"))
                writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.Payload);
            return writer;
        };

        /**
         * Encodes the specified Offer message, length delimited. Does not implicitly {@link messages.Offer.verify|verify} messages.
         * @function encodeDelimited
         * @memberof messages.Offer
         * @static
         * @param {messages.IOffer} message Offer message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        Offer.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an Offer message from the specified reader or buffer.
         * @function decode
         * @memberof messages.Offer
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {messages.Offer} Offer
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Offer.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.messages.Offer();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.Timestamp = reader.uint64();
                    break;
                case 2:
                    message.Payload = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an Offer message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof messages.Offer
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {messages.Offer} Offer
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        Offer.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an Offer message.
         * @function verify
         * @memberof messages.Offer
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        Offer.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.Timestamp != null && message.hasOwnProperty("Timestamp"))
                if (!$util.isInteger(message.Timestamp) && !(message.Timestamp && $util.isInteger(message.Timestamp.low) && $util.isInteger(message.Timestamp.high)))
                    return "Timestamp: integer|Long expected";
            if (message.Payload != null && message.hasOwnProperty("Payload"))
                if (!(message.Payload && typeof message.Payload.length === "number" || $util.isString(message.Payload)))
                    return "Payload: buffer expected";
            return null;
        };

        /**
         * Creates an Offer message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof messages.Offer
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {messages.Offer} Offer
         */
        Offer.fromObject = function fromObject(object) {
            if (object instanceof $root.messages.Offer)
                return object;
            var message = new $root.messages.Offer();
            if (object.Timestamp != null)
                if ($util.Long)
                    (message.Timestamp = $util.Long.fromValue(object.Timestamp)).unsigned = true;
                else if (typeof object.Timestamp === "string")
                    message.Timestamp = parseInt(object.Timestamp, 10);
                else if (typeof object.Timestamp === "number")
                    message.Timestamp = object.Timestamp;
                else if (typeof object.Timestamp === "object")
                    message.Timestamp = new $util.LongBits(object.Timestamp.low >>> 0, object.Timestamp.high >>> 0).toNumber(true);
            if (object.Payload != null)
                if (typeof object.Payload === "string")
                    $util.base64.decode(object.Payload, message.Payload = $util.newBuffer($util.base64.length(object.Payload)), 0);
                else if (object.Payload.length)
                    message.Payload = object.Payload;
            return message;
        };

        /**
         * Creates a plain object from an Offer message. Also converts values to other types if specified.
         * @function toObject
         * @memberof messages.Offer
         * @static
         * @param {messages.Offer} message Offer
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        Offer.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.Timestamp = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.Timestamp = options.longs === String ? "0" : 0;
                if (options.bytes === String)
                    object.Payload = "";
                else {
                    object.Payload = [];
                    if (options.bytes !== Array)
                        object.Payload = $util.newBuffer(object.Payload);
                }
            }
            if (message.Timestamp != null && message.hasOwnProperty("Timestamp"))
                if (typeof message.Timestamp === "number")
                    object.Timestamp = options.longs === String ? String(message.Timestamp) : message.Timestamp;
                else
                    object.Timestamp = options.longs === String ? $util.Long.prototype.toString.call(message.Timestamp) : options.longs === Number ? new $util.LongBits(message.Timestamp.low >>> 0, message.Timestamp.high >>> 0).toNumber(true) : message.Timestamp;
            if (message.Payload != null && message.hasOwnProperty("Payload"))
                object.Payload = options.bytes === String ? $util.base64.encode(message.Payload, 0, message.Payload.length) : options.bytes === Array ? Array.prototype.slice.call(message.Payload) : message.Payload;
            return object;
        };

        /**
         * Converts this Offer to JSON.
         * @function toJSON
         * @memberof messages.Offer
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        Offer.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return Offer;
    })();

    messages.SignatureRequest = (function() {

        /**
         * Properties of a SignatureRequest.
         * @memberof messages
         * @interface ISignatureRequest
         * @property {number|Long|null} [Timestamp] SignatureRequest Timestamp
         * @property {Uint8Array|null} [Payload] SignatureRequest Payload
         */

        /**
         * Constructs a new SignatureRequest.
         * @memberof messages
         * @classdesc Represents a SignatureRequest.
         * @implements ISignatureRequest
         * @constructor
         * @param {messages.ISignatureRequest=} [properties] Properties to set
         */
        function SignatureRequest(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SignatureRequest Timestamp.
         * @member {number|Long} Timestamp
         * @memberof messages.SignatureRequest
         * @instance
         */
        SignatureRequest.prototype.Timestamp = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * SignatureRequest Payload.
         * @member {Uint8Array} Payload
         * @memberof messages.SignatureRequest
         * @instance
         */
        SignatureRequest.prototype.Payload = $util.newBuffer([]);

        /**
         * Creates a new SignatureRequest instance using the specified properties.
         * @function create
         * @memberof messages.SignatureRequest
         * @static
         * @param {messages.ISignatureRequest=} [properties] Properties to set
         * @returns {messages.SignatureRequest} SignatureRequest instance
         */
        SignatureRequest.create = function create(properties) {
            return new SignatureRequest(properties);
        };

        /**
         * Encodes the specified SignatureRequest message. Does not implicitly {@link messages.SignatureRequest.verify|verify} messages.
         * @function encode
         * @memberof messages.SignatureRequest
         * @static
         * @param {messages.ISignatureRequest} message SignatureRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SignatureRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Timestamp != null && Object.hasOwnProperty.call(message, "Timestamp"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint64(message.Timestamp);
            if (message.Payload != null && Object.hasOwnProperty.call(message, "Payload"))
                writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.Payload);
            return writer;
        };

        /**
         * Encodes the specified SignatureRequest message, length delimited. Does not implicitly {@link messages.SignatureRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof messages.SignatureRequest
         * @static
         * @param {messages.ISignatureRequest} message SignatureRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SignatureRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SignatureRequest message from the specified reader or buffer.
         * @function decode
         * @memberof messages.SignatureRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {messages.SignatureRequest} SignatureRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SignatureRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.messages.SignatureRequest();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.Timestamp = reader.uint64();
                    break;
                case 2:
                    message.Payload = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a SignatureRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof messages.SignatureRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {messages.SignatureRequest} SignatureRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SignatureRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SignatureRequest message.
         * @function verify
         * @memberof messages.SignatureRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SignatureRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.Timestamp != null && message.hasOwnProperty("Timestamp"))
                if (!$util.isInteger(message.Timestamp) && !(message.Timestamp && $util.isInteger(message.Timestamp.low) && $util.isInteger(message.Timestamp.high)))
                    return "Timestamp: integer|Long expected";
            if (message.Payload != null && message.hasOwnProperty("Payload"))
                if (!(message.Payload && typeof message.Payload.length === "number" || $util.isString(message.Payload)))
                    return "Payload: buffer expected";
            return null;
        };

        /**
         * Creates a SignatureRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof messages.SignatureRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {messages.SignatureRequest} SignatureRequest
         */
        SignatureRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.messages.SignatureRequest)
                return object;
            var message = new $root.messages.SignatureRequest();
            if (object.Timestamp != null)
                if ($util.Long)
                    (message.Timestamp = $util.Long.fromValue(object.Timestamp)).unsigned = true;
                else if (typeof object.Timestamp === "string")
                    message.Timestamp = parseInt(object.Timestamp, 10);
                else if (typeof object.Timestamp === "number")
                    message.Timestamp = object.Timestamp;
                else if (typeof object.Timestamp === "object")
                    message.Timestamp = new $util.LongBits(object.Timestamp.low >>> 0, object.Timestamp.high >>> 0).toNumber(true);
            if (object.Payload != null)
                if (typeof object.Payload === "string")
                    $util.base64.decode(object.Payload, message.Payload = $util.newBuffer($util.base64.length(object.Payload)), 0);
                else if (object.Payload.length)
                    message.Payload = object.Payload;
            return message;
        };

        /**
         * Creates a plain object from a SignatureRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof messages.SignatureRequest
         * @static
         * @param {messages.SignatureRequest} message SignatureRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SignatureRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.Timestamp = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.Timestamp = options.longs === String ? "0" : 0;
                if (options.bytes === String)
                    object.Payload = "";
                else {
                    object.Payload = [];
                    if (options.bytes !== Array)
                        object.Payload = $util.newBuffer(object.Payload);
                }
            }
            if (message.Timestamp != null && message.hasOwnProperty("Timestamp"))
                if (typeof message.Timestamp === "number")
                    object.Timestamp = options.longs === String ? String(message.Timestamp) : message.Timestamp;
                else
                    object.Timestamp = options.longs === String ? $util.Long.prototype.toString.call(message.Timestamp) : options.longs === Number ? new $util.LongBits(message.Timestamp.low >>> 0, message.Timestamp.high >>> 0).toNumber(true) : message.Timestamp;
            if (message.Payload != null && message.hasOwnProperty("Payload"))
                object.Payload = options.bytes === String ? $util.base64.encode(message.Payload, 0, message.Payload.length) : options.bytes === Array ? Array.prototype.slice.call(message.Payload) : message.Payload;
            return object;
        };

        /**
         * Converts this SignatureRequest to JSON.
         * @function toJSON
         * @memberof messages.SignatureRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SignatureRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return SignatureRequest;
    })();

    messages.SettlementRequest = (function() {

        /**
         * Properties of a SettlementRequest.
         * @memberof messages
         * @interface ISettlementRequest
         * @property {number|Long|null} [Timestamp] SettlementRequest Timestamp
         * @property {Uint8Array|null} [TransferTxId] SettlementRequest TransferTxId
         * @property {Array.<messages.ITargetAddressField>|null} [ContractFees] SettlementRequest ContractFees
         * @property {Uint8Array|null} [Settlement] SettlementRequest Settlement
         */

        /**
         * Constructs a new SettlementRequest.
         * @memberof messages
         * @classdesc Represents a SettlementRequest.
         * @implements ISettlementRequest
         * @constructor
         * @param {messages.ISettlementRequest=} [properties] Properties to set
         */
        function SettlementRequest(properties) {
            this.ContractFees = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * SettlementRequest Timestamp.
         * @member {number|Long} Timestamp
         * @memberof messages.SettlementRequest
         * @instance
         */
        SettlementRequest.prototype.Timestamp = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * SettlementRequest TransferTxId.
         * @member {Uint8Array} TransferTxId
         * @memberof messages.SettlementRequest
         * @instance
         */
        SettlementRequest.prototype.TransferTxId = $util.newBuffer([]);

        /**
         * SettlementRequest ContractFees.
         * @member {Array.<messages.ITargetAddressField>} ContractFees
         * @memberof messages.SettlementRequest
         * @instance
         */
        SettlementRequest.prototype.ContractFees = $util.emptyArray;

        /**
         * SettlementRequest Settlement.
         * @member {Uint8Array} Settlement
         * @memberof messages.SettlementRequest
         * @instance
         */
        SettlementRequest.prototype.Settlement = $util.newBuffer([]);

        /**
         * Creates a new SettlementRequest instance using the specified properties.
         * @function create
         * @memberof messages.SettlementRequest
         * @static
         * @param {messages.ISettlementRequest=} [properties] Properties to set
         * @returns {messages.SettlementRequest} SettlementRequest instance
         */
        SettlementRequest.create = function create(properties) {
            return new SettlementRequest(properties);
        };

        /**
         * Encodes the specified SettlementRequest message. Does not implicitly {@link messages.SettlementRequest.verify|verify} messages.
         * @function encode
         * @memberof messages.SettlementRequest
         * @static
         * @param {messages.ISettlementRequest} message SettlementRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SettlementRequest.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Timestamp != null && Object.hasOwnProperty.call(message, "Timestamp"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint64(message.Timestamp);
            if (message.TransferTxId != null && Object.hasOwnProperty.call(message, "TransferTxId"))
                writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.TransferTxId);
            if (message.ContractFees != null && message.ContractFees.length)
                for (var i = 0; i < message.ContractFees.length; ++i)
                    $root.messages.TargetAddressField.encode(message.ContractFees[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            if (message.Settlement != null && Object.hasOwnProperty.call(message, "Settlement"))
                writer.uint32(/* id 4, wireType 2 =*/34).bytes(message.Settlement);
            return writer;
        };

        /**
         * Encodes the specified SettlementRequest message, length delimited. Does not implicitly {@link messages.SettlementRequest.verify|verify} messages.
         * @function encodeDelimited
         * @memberof messages.SettlementRequest
         * @static
         * @param {messages.ISettlementRequest} message SettlementRequest message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        SettlementRequest.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a SettlementRequest message from the specified reader or buffer.
         * @function decode
         * @memberof messages.SettlementRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {messages.SettlementRequest} SettlementRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SettlementRequest.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.messages.SettlementRequest();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.Timestamp = reader.uint64();
                    break;
                case 2:
                    message.TransferTxId = reader.bytes();
                    break;
                case 3:
                    if (!(message.ContractFees && message.ContractFees.length))
                        message.ContractFees = [];
                    message.ContractFees.push($root.messages.TargetAddressField.decode(reader, reader.uint32()));
                    break;
                case 4:
                    message.Settlement = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a SettlementRequest message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof messages.SettlementRequest
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {messages.SettlementRequest} SettlementRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        SettlementRequest.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a SettlementRequest message.
         * @function verify
         * @memberof messages.SettlementRequest
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        SettlementRequest.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.Timestamp != null && message.hasOwnProperty("Timestamp"))
                if (!$util.isInteger(message.Timestamp) && !(message.Timestamp && $util.isInteger(message.Timestamp.low) && $util.isInteger(message.Timestamp.high)))
                    return "Timestamp: integer|Long expected";
            if (message.TransferTxId != null && message.hasOwnProperty("TransferTxId"))
                if (!(message.TransferTxId && typeof message.TransferTxId.length === "number" || $util.isString(message.TransferTxId)))
                    return "TransferTxId: buffer expected";
            if (message.ContractFees != null && message.hasOwnProperty("ContractFees")) {
                if (!Array.isArray(message.ContractFees))
                    return "ContractFees: array expected";
                for (var i = 0; i < message.ContractFees.length; ++i) {
                    var error = $root.messages.TargetAddressField.verify(message.ContractFees[i]);
                    if (error)
                        return "ContractFees." + error;
                }
            }
            if (message.Settlement != null && message.hasOwnProperty("Settlement"))
                if (!(message.Settlement && typeof message.Settlement.length === "number" || $util.isString(message.Settlement)))
                    return "Settlement: buffer expected";
            return null;
        };

        /**
         * Creates a SettlementRequest message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof messages.SettlementRequest
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {messages.SettlementRequest} SettlementRequest
         */
        SettlementRequest.fromObject = function fromObject(object) {
            if (object instanceof $root.messages.SettlementRequest)
                return object;
            var message = new $root.messages.SettlementRequest();
            if (object.Timestamp != null)
                if ($util.Long)
                    (message.Timestamp = $util.Long.fromValue(object.Timestamp)).unsigned = true;
                else if (typeof object.Timestamp === "string")
                    message.Timestamp = parseInt(object.Timestamp, 10);
                else if (typeof object.Timestamp === "number")
                    message.Timestamp = object.Timestamp;
                else if (typeof object.Timestamp === "object")
                    message.Timestamp = new $util.LongBits(object.Timestamp.low >>> 0, object.Timestamp.high >>> 0).toNumber(true);
            if (object.TransferTxId != null)
                if (typeof object.TransferTxId === "string")
                    $util.base64.decode(object.TransferTxId, message.TransferTxId = $util.newBuffer($util.base64.length(object.TransferTxId)), 0);
                else if (object.TransferTxId.length)
                    message.TransferTxId = object.TransferTxId;
            if (object.ContractFees) {
                if (!Array.isArray(object.ContractFees))
                    throw TypeError(".messages.SettlementRequest.ContractFees: array expected");
                message.ContractFees = [];
                for (var i = 0; i < object.ContractFees.length; ++i) {
                    if (typeof object.ContractFees[i] !== "object")
                        throw TypeError(".messages.SettlementRequest.ContractFees: object expected");
                    message.ContractFees[i] = $root.messages.TargetAddressField.fromObject(object.ContractFees[i]);
                }
            }
            if (object.Settlement != null)
                if (typeof object.Settlement === "string")
                    $util.base64.decode(object.Settlement, message.Settlement = $util.newBuffer($util.base64.length(object.Settlement)), 0);
                else if (object.Settlement.length)
                    message.Settlement = object.Settlement;
            return message;
        };

        /**
         * Creates a plain object from a SettlementRequest message. Also converts values to other types if specified.
         * @function toObject
         * @memberof messages.SettlementRequest
         * @static
         * @param {messages.SettlementRequest} message SettlementRequest
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        SettlementRequest.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.ContractFees = [];
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.Timestamp = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.Timestamp = options.longs === String ? "0" : 0;
                if (options.bytes === String)
                    object.TransferTxId = "";
                else {
                    object.TransferTxId = [];
                    if (options.bytes !== Array)
                        object.TransferTxId = $util.newBuffer(object.TransferTxId);
                }
                if (options.bytes === String)
                    object.Settlement = "";
                else {
                    object.Settlement = [];
                    if (options.bytes !== Array)
                        object.Settlement = $util.newBuffer(object.Settlement);
                }
            }
            if (message.Timestamp != null && message.hasOwnProperty("Timestamp"))
                if (typeof message.Timestamp === "number")
                    object.Timestamp = options.longs === String ? String(message.Timestamp) : message.Timestamp;
                else
                    object.Timestamp = options.longs === String ? $util.Long.prototype.toString.call(message.Timestamp) : options.longs === Number ? new $util.LongBits(message.Timestamp.low >>> 0, message.Timestamp.high >>> 0).toNumber(true) : message.Timestamp;
            if (message.TransferTxId != null && message.hasOwnProperty("TransferTxId"))
                object.TransferTxId = options.bytes === String ? $util.base64.encode(message.TransferTxId, 0, message.TransferTxId.length) : options.bytes === Array ? Array.prototype.slice.call(message.TransferTxId) : message.TransferTxId;
            if (message.ContractFees && message.ContractFees.length) {
                object.ContractFees = [];
                for (var j = 0; j < message.ContractFees.length; ++j)
                    object.ContractFees[j] = $root.messages.TargetAddressField.toObject(message.ContractFees[j], options);
            }
            if (message.Settlement != null && message.hasOwnProperty("Settlement"))
                object.Settlement = options.bytes === String ? $util.base64.encode(message.Settlement, 0, message.Settlement.length) : options.bytes === Array ? Array.prototype.slice.call(message.Settlement) : message.Settlement;
            return object;
        };

        /**
         * Converts this SettlementRequest to JSON.
         * @function toJSON
         * @memberof messages.SettlementRequest
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        SettlementRequest.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return SettlementRequest;
    })();

    messages.OutputMetadata = (function() {

        /**
         * Properties of an OutputMetadata.
         * @memberof messages
         * @interface IOutputMetadata
         * @property {string|null} [OutputDescription] OutputMetadata OutputDescription
         * @property {Array.<number>|null} [Tags] OutputMetadata Tags
         * @property {Array.<messages.IOutputTagField>|null} [CustomTags] OutputMetadata CustomTags
         */

        /**
         * Constructs a new OutputMetadata.
         * @memberof messages
         * @classdesc Represents an OutputMetadata.
         * @implements IOutputMetadata
         * @constructor
         * @param {messages.IOutputMetadata=} [properties] Properties to set
         */
        function OutputMetadata(properties) {
            this.Tags = [];
            this.CustomTags = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * OutputMetadata OutputDescription.
         * @member {string} OutputDescription
         * @memberof messages.OutputMetadata
         * @instance
         */
        OutputMetadata.prototype.OutputDescription = "";

        /**
         * OutputMetadata Tags.
         * @member {Array.<number>} Tags
         * @memberof messages.OutputMetadata
         * @instance
         */
        OutputMetadata.prototype.Tags = $util.emptyArray;

        /**
         * OutputMetadata CustomTags.
         * @member {Array.<messages.IOutputTagField>} CustomTags
         * @memberof messages.OutputMetadata
         * @instance
         */
        OutputMetadata.prototype.CustomTags = $util.emptyArray;

        /**
         * Creates a new OutputMetadata instance using the specified properties.
         * @function create
         * @memberof messages.OutputMetadata
         * @static
         * @param {messages.IOutputMetadata=} [properties] Properties to set
         * @returns {messages.OutputMetadata} OutputMetadata instance
         */
        OutputMetadata.create = function create(properties) {
            return new OutputMetadata(properties);
        };

        /**
         * Encodes the specified OutputMetadata message. Does not implicitly {@link messages.OutputMetadata.verify|verify} messages.
         * @function encode
         * @memberof messages.OutputMetadata
         * @static
         * @param {messages.IOutputMetadata} message OutputMetadata message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        OutputMetadata.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.OutputDescription != null && Object.hasOwnProperty.call(message, "OutputDescription"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.OutputDescription);
            if (message.Tags != null && message.Tags.length) {
                writer.uint32(/* id 2, wireType 2 =*/18).fork();
                for (var i = 0; i < message.Tags.length; ++i)
                    writer.uint32(message.Tags[i]);
                writer.ldelim();
            }
            if (message.CustomTags != null && message.CustomTags.length)
                for (var i = 0; i < message.CustomTags.length; ++i)
                    $root.messages.OutputTagField.encode(message.CustomTags[i], writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified OutputMetadata message, length delimited. Does not implicitly {@link messages.OutputMetadata.verify|verify} messages.
         * @function encodeDelimited
         * @memberof messages.OutputMetadata
         * @static
         * @param {messages.IOutputMetadata} message OutputMetadata message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        OutputMetadata.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an OutputMetadata message from the specified reader or buffer.
         * @function decode
         * @memberof messages.OutputMetadata
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {messages.OutputMetadata} OutputMetadata
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        OutputMetadata.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.messages.OutputMetadata();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.OutputDescription = reader.string();
                    break;
                case 2:
                    if (!(message.Tags && message.Tags.length))
                        message.Tags = [];
                    if ((tag & 7) === 2) {
                        var end2 = reader.uint32() + reader.pos;
                        while (reader.pos < end2)
                            message.Tags.push(reader.uint32());
                    } else
                        message.Tags.push(reader.uint32());
                    break;
                case 3:
                    if (!(message.CustomTags && message.CustomTags.length))
                        message.CustomTags = [];
                    message.CustomTags.push($root.messages.OutputTagField.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an OutputMetadata message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof messages.OutputMetadata
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {messages.OutputMetadata} OutputMetadata
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        OutputMetadata.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an OutputMetadata message.
         * @function verify
         * @memberof messages.OutputMetadata
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        OutputMetadata.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.OutputDescription != null && message.hasOwnProperty("OutputDescription"))
                if (!$util.isString(message.OutputDescription))
                    return "OutputDescription: string expected";
            if (message.Tags != null && message.hasOwnProperty("Tags")) {
                if (!Array.isArray(message.Tags))
                    return "Tags: array expected";
                for (var i = 0; i < message.Tags.length; ++i)
                    if (!$util.isInteger(message.Tags[i]))
                        return "Tags: integer[] expected";
            }
            if (message.CustomTags != null && message.hasOwnProperty("CustomTags")) {
                if (!Array.isArray(message.CustomTags))
                    return "CustomTags: array expected";
                for (var i = 0; i < message.CustomTags.length; ++i) {
                    var error = $root.messages.OutputTagField.verify(message.CustomTags[i]);
                    if (error)
                        return "CustomTags." + error;
                }
            }
            return null;
        };

        /**
         * Creates an OutputMetadata message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof messages.OutputMetadata
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {messages.OutputMetadata} OutputMetadata
         */
        OutputMetadata.fromObject = function fromObject(object) {
            if (object instanceof $root.messages.OutputMetadata)
                return object;
            var message = new $root.messages.OutputMetadata();
            if (object.OutputDescription != null)
                message.OutputDescription = String(object.OutputDescription);
            if (object.Tags) {
                if (!Array.isArray(object.Tags))
                    throw TypeError(".messages.OutputMetadata.Tags: array expected");
                message.Tags = [];
                for (var i = 0; i < object.Tags.length; ++i)
                    message.Tags[i] = object.Tags[i] >>> 0;
            }
            if (object.CustomTags) {
                if (!Array.isArray(object.CustomTags))
                    throw TypeError(".messages.OutputMetadata.CustomTags: array expected");
                message.CustomTags = [];
                for (var i = 0; i < object.CustomTags.length; ++i) {
                    if (typeof object.CustomTags[i] !== "object")
                        throw TypeError(".messages.OutputMetadata.CustomTags: object expected");
                    message.CustomTags[i] = $root.messages.OutputTagField.fromObject(object.CustomTags[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from an OutputMetadata message. Also converts values to other types if specified.
         * @function toObject
         * @memberof messages.OutputMetadata
         * @static
         * @param {messages.OutputMetadata} message OutputMetadata
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        OutputMetadata.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults) {
                object.Tags = [];
                object.CustomTags = [];
            }
            if (options.defaults)
                object.OutputDescription = "";
            if (message.OutputDescription != null && message.hasOwnProperty("OutputDescription"))
                object.OutputDescription = message.OutputDescription;
            if (message.Tags && message.Tags.length) {
                object.Tags = [];
                for (var j = 0; j < message.Tags.length; ++j)
                    object.Tags[j] = message.Tags[j];
            }
            if (message.CustomTags && message.CustomTags.length) {
                object.CustomTags = [];
                for (var j = 0; j < message.CustomTags.length; ++j)
                    object.CustomTags[j] = $root.messages.OutputTagField.toObject(message.CustomTags[j], options);
            }
            return object;
        };

        /**
         * Converts this OutputMetadata to JSON.
         * @function toJSON
         * @memberof messages.OutputMetadata
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        OutputMetadata.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return OutputMetadata;
    })();

    messages.InitiateRelationship = (function() {

        /**
         * Properties of an InitiateRelationship.
         * @memberof messages
         * @interface IInitiateRelationship
         * @property {number|null} [Type] InitiateRelationship Type
         * @property {Uint8Array|null} [Seed] InitiateRelationship Seed
         * @property {Uint8Array|null} [Flag] InitiateRelationship Flag
         * @property {number|null} [EncryptionType] InitiateRelationship EncryptionType
         * @property {number|null} [ProofOfIdentityType] InitiateRelationship ProofOfIdentityType
         * @property {Uint8Array|null} [ProofOfIdentity] InitiateRelationship ProofOfIdentity
         * @property {Array.<messages.IChannelPartyField>|null} [ChannelParties] InitiateRelationship ChannelParties
         */

        /**
         * Constructs a new InitiateRelationship.
         * @memberof messages
         * @classdesc Represents an InitiateRelationship.
         * @implements IInitiateRelationship
         * @constructor
         * @param {messages.IInitiateRelationship=} [properties] Properties to set
         */
        function InitiateRelationship(properties) {
            this.ChannelParties = [];
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * InitiateRelationship Type.
         * @member {number} Type
         * @memberof messages.InitiateRelationship
         * @instance
         */
        InitiateRelationship.prototype.Type = 0;

        /**
         * InitiateRelationship Seed.
         * @member {Uint8Array} Seed
         * @memberof messages.InitiateRelationship
         * @instance
         */
        InitiateRelationship.prototype.Seed = $util.newBuffer([]);

        /**
         * InitiateRelationship Flag.
         * @member {Uint8Array} Flag
         * @memberof messages.InitiateRelationship
         * @instance
         */
        InitiateRelationship.prototype.Flag = $util.newBuffer([]);

        /**
         * InitiateRelationship EncryptionType.
         * @member {number} EncryptionType
         * @memberof messages.InitiateRelationship
         * @instance
         */
        InitiateRelationship.prototype.EncryptionType = 0;

        /**
         * InitiateRelationship ProofOfIdentityType.
         * @member {number} ProofOfIdentityType
         * @memberof messages.InitiateRelationship
         * @instance
         */
        InitiateRelationship.prototype.ProofOfIdentityType = 0;

        /**
         * InitiateRelationship ProofOfIdentity.
         * @member {Uint8Array} ProofOfIdentity
         * @memberof messages.InitiateRelationship
         * @instance
         */
        InitiateRelationship.prototype.ProofOfIdentity = $util.newBuffer([]);

        /**
         * InitiateRelationship ChannelParties.
         * @member {Array.<messages.IChannelPartyField>} ChannelParties
         * @memberof messages.InitiateRelationship
         * @instance
         */
        InitiateRelationship.prototype.ChannelParties = $util.emptyArray;

        /**
         * Creates a new InitiateRelationship instance using the specified properties.
         * @function create
         * @memberof messages.InitiateRelationship
         * @static
         * @param {messages.IInitiateRelationship=} [properties] Properties to set
         * @returns {messages.InitiateRelationship} InitiateRelationship instance
         */
        InitiateRelationship.create = function create(properties) {
            return new InitiateRelationship(properties);
        };

        /**
         * Encodes the specified InitiateRelationship message. Does not implicitly {@link messages.InitiateRelationship.verify|verify} messages.
         * @function encode
         * @memberof messages.InitiateRelationship
         * @static
         * @param {messages.IInitiateRelationship} message InitiateRelationship message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        InitiateRelationship.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Type != null && Object.hasOwnProperty.call(message, "Type"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.Type);
            if (message.Seed != null && Object.hasOwnProperty.call(message, "Seed"))
                writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.Seed);
            if (message.Flag != null && Object.hasOwnProperty.call(message, "Flag"))
                writer.uint32(/* id 3, wireType 2 =*/26).bytes(message.Flag);
            if (message.EncryptionType != null && Object.hasOwnProperty.call(message, "EncryptionType"))
                writer.uint32(/* id 4, wireType 0 =*/32).uint32(message.EncryptionType);
            if (message.ProofOfIdentityType != null && Object.hasOwnProperty.call(message, "ProofOfIdentityType"))
                writer.uint32(/* id 5, wireType 0 =*/40).uint32(message.ProofOfIdentityType);
            if (message.ProofOfIdentity != null && Object.hasOwnProperty.call(message, "ProofOfIdentity"))
                writer.uint32(/* id 6, wireType 2 =*/50).bytes(message.ProofOfIdentity);
            if (message.ChannelParties != null && message.ChannelParties.length)
                for (var i = 0; i < message.ChannelParties.length; ++i)
                    $root.messages.ChannelPartyField.encode(message.ChannelParties[i], writer.uint32(/* id 7, wireType 2 =*/58).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified InitiateRelationship message, length delimited. Does not implicitly {@link messages.InitiateRelationship.verify|verify} messages.
         * @function encodeDelimited
         * @memberof messages.InitiateRelationship
         * @static
         * @param {messages.IInitiateRelationship} message InitiateRelationship message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        InitiateRelationship.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an InitiateRelationship message from the specified reader or buffer.
         * @function decode
         * @memberof messages.InitiateRelationship
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {messages.InitiateRelationship} InitiateRelationship
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        InitiateRelationship.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.messages.InitiateRelationship();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.Type = reader.uint32();
                    break;
                case 2:
                    message.Seed = reader.bytes();
                    break;
                case 3:
                    message.Flag = reader.bytes();
                    break;
                case 4:
                    message.EncryptionType = reader.uint32();
                    break;
                case 5:
                    message.ProofOfIdentityType = reader.uint32();
                    break;
                case 6:
                    message.ProofOfIdentity = reader.bytes();
                    break;
                case 7:
                    if (!(message.ChannelParties && message.ChannelParties.length))
                        message.ChannelParties = [];
                    message.ChannelParties.push($root.messages.ChannelPartyField.decode(reader, reader.uint32()));
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an InitiateRelationship message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof messages.InitiateRelationship
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {messages.InitiateRelationship} InitiateRelationship
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        InitiateRelationship.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an InitiateRelationship message.
         * @function verify
         * @memberof messages.InitiateRelationship
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        InitiateRelationship.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.Type != null && message.hasOwnProperty("Type"))
                if (!$util.isInteger(message.Type))
                    return "Type: integer expected";
            if (message.Seed != null && message.hasOwnProperty("Seed"))
                if (!(message.Seed && typeof message.Seed.length === "number" || $util.isString(message.Seed)))
                    return "Seed: buffer expected";
            if (message.Flag != null && message.hasOwnProperty("Flag"))
                if (!(message.Flag && typeof message.Flag.length === "number" || $util.isString(message.Flag)))
                    return "Flag: buffer expected";
            if (message.EncryptionType != null && message.hasOwnProperty("EncryptionType"))
                if (!$util.isInteger(message.EncryptionType))
                    return "EncryptionType: integer expected";
            if (message.ProofOfIdentityType != null && message.hasOwnProperty("ProofOfIdentityType"))
                if (!$util.isInteger(message.ProofOfIdentityType))
                    return "ProofOfIdentityType: integer expected";
            if (message.ProofOfIdentity != null && message.hasOwnProperty("ProofOfIdentity"))
                if (!(message.ProofOfIdentity && typeof message.ProofOfIdentity.length === "number" || $util.isString(message.ProofOfIdentity)))
                    return "ProofOfIdentity: buffer expected";
            if (message.ChannelParties != null && message.hasOwnProperty("ChannelParties")) {
                if (!Array.isArray(message.ChannelParties))
                    return "ChannelParties: array expected";
                for (var i = 0; i < message.ChannelParties.length; ++i) {
                    var error = $root.messages.ChannelPartyField.verify(message.ChannelParties[i]);
                    if (error)
                        return "ChannelParties." + error;
                }
            }
            return null;
        };

        /**
         * Creates an InitiateRelationship message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof messages.InitiateRelationship
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {messages.InitiateRelationship} InitiateRelationship
         */
        InitiateRelationship.fromObject = function fromObject(object) {
            if (object instanceof $root.messages.InitiateRelationship)
                return object;
            var message = new $root.messages.InitiateRelationship();
            if (object.Type != null)
                message.Type = object.Type >>> 0;
            if (object.Seed != null)
                if (typeof object.Seed === "string")
                    $util.base64.decode(object.Seed, message.Seed = $util.newBuffer($util.base64.length(object.Seed)), 0);
                else if (object.Seed.length)
                    message.Seed = object.Seed;
            if (object.Flag != null)
                if (typeof object.Flag === "string")
                    $util.base64.decode(object.Flag, message.Flag = $util.newBuffer($util.base64.length(object.Flag)), 0);
                else if (object.Flag.length)
                    message.Flag = object.Flag;
            if (object.EncryptionType != null)
                message.EncryptionType = object.EncryptionType >>> 0;
            if (object.ProofOfIdentityType != null)
                message.ProofOfIdentityType = object.ProofOfIdentityType >>> 0;
            if (object.ProofOfIdentity != null)
                if (typeof object.ProofOfIdentity === "string")
                    $util.base64.decode(object.ProofOfIdentity, message.ProofOfIdentity = $util.newBuffer($util.base64.length(object.ProofOfIdentity)), 0);
                else if (object.ProofOfIdentity.length)
                    message.ProofOfIdentity = object.ProofOfIdentity;
            if (object.ChannelParties) {
                if (!Array.isArray(object.ChannelParties))
                    throw TypeError(".messages.InitiateRelationship.ChannelParties: array expected");
                message.ChannelParties = [];
                for (var i = 0; i < object.ChannelParties.length; ++i) {
                    if (typeof object.ChannelParties[i] !== "object")
                        throw TypeError(".messages.InitiateRelationship.ChannelParties: object expected");
                    message.ChannelParties[i] = $root.messages.ChannelPartyField.fromObject(object.ChannelParties[i]);
                }
            }
            return message;
        };

        /**
         * Creates a plain object from an InitiateRelationship message. Also converts values to other types if specified.
         * @function toObject
         * @memberof messages.InitiateRelationship
         * @static
         * @param {messages.InitiateRelationship} message InitiateRelationship
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        InitiateRelationship.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.arrays || options.defaults)
                object.ChannelParties = [];
            if (options.defaults) {
                object.Type = 0;
                if (options.bytes === String)
                    object.Seed = "";
                else {
                    object.Seed = [];
                    if (options.bytes !== Array)
                        object.Seed = $util.newBuffer(object.Seed);
                }
                if (options.bytes === String)
                    object.Flag = "";
                else {
                    object.Flag = [];
                    if (options.bytes !== Array)
                        object.Flag = $util.newBuffer(object.Flag);
                }
                object.EncryptionType = 0;
                object.ProofOfIdentityType = 0;
                if (options.bytes === String)
                    object.ProofOfIdentity = "";
                else {
                    object.ProofOfIdentity = [];
                    if (options.bytes !== Array)
                        object.ProofOfIdentity = $util.newBuffer(object.ProofOfIdentity);
                }
            }
            if (message.Type != null && message.hasOwnProperty("Type"))
                object.Type = message.Type;
            if (message.Seed != null && message.hasOwnProperty("Seed"))
                object.Seed = options.bytes === String ? $util.base64.encode(message.Seed, 0, message.Seed.length) : options.bytes === Array ? Array.prototype.slice.call(message.Seed) : message.Seed;
            if (message.Flag != null && message.hasOwnProperty("Flag"))
                object.Flag = options.bytes === String ? $util.base64.encode(message.Flag, 0, message.Flag.length) : options.bytes === Array ? Array.prototype.slice.call(message.Flag) : message.Flag;
            if (message.EncryptionType != null && message.hasOwnProperty("EncryptionType"))
                object.EncryptionType = message.EncryptionType;
            if (message.ProofOfIdentityType != null && message.hasOwnProperty("ProofOfIdentityType"))
                object.ProofOfIdentityType = message.ProofOfIdentityType;
            if (message.ProofOfIdentity != null && message.hasOwnProperty("ProofOfIdentity"))
                object.ProofOfIdentity = options.bytes === String ? $util.base64.encode(message.ProofOfIdentity, 0, message.ProofOfIdentity.length) : options.bytes === Array ? Array.prototype.slice.call(message.ProofOfIdentity) : message.ProofOfIdentity;
            if (message.ChannelParties && message.ChannelParties.length) {
                object.ChannelParties = [];
                for (var j = 0; j < message.ChannelParties.length; ++j)
                    object.ChannelParties[j] = $root.messages.ChannelPartyField.toObject(message.ChannelParties[j], options);
            }
            return object;
        };

        /**
         * Converts this InitiateRelationship to JSON.
         * @function toJSON
         * @memberof messages.InitiateRelationship
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        InitiateRelationship.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return InitiateRelationship;
    })();

    messages.PendingAcceptRelationship = (function() {

        /**
         * Properties of a PendingAcceptRelationship.
         * @memberof messages
         * @interface IPendingAcceptRelationship
         * @property {number|null} [ProofOfIdentityType] PendingAcceptRelationship ProofOfIdentityType
         * @property {Uint8Array|null} [ProofOfIdentity] PendingAcceptRelationship ProofOfIdentity
         */

        /**
         * Constructs a new PendingAcceptRelationship.
         * @memberof messages
         * @classdesc Represents a PendingAcceptRelationship.
         * @implements IPendingAcceptRelationship
         * @constructor
         * @param {messages.IPendingAcceptRelationship=} [properties] Properties to set
         */
        function PendingAcceptRelationship(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * PendingAcceptRelationship ProofOfIdentityType.
         * @member {number} ProofOfIdentityType
         * @memberof messages.PendingAcceptRelationship
         * @instance
         */
        PendingAcceptRelationship.prototype.ProofOfIdentityType = 0;

        /**
         * PendingAcceptRelationship ProofOfIdentity.
         * @member {Uint8Array} ProofOfIdentity
         * @memberof messages.PendingAcceptRelationship
         * @instance
         */
        PendingAcceptRelationship.prototype.ProofOfIdentity = $util.newBuffer([]);

        /**
         * Creates a new PendingAcceptRelationship instance using the specified properties.
         * @function create
         * @memberof messages.PendingAcceptRelationship
         * @static
         * @param {messages.IPendingAcceptRelationship=} [properties] Properties to set
         * @returns {messages.PendingAcceptRelationship} PendingAcceptRelationship instance
         */
        PendingAcceptRelationship.create = function create(properties) {
            return new PendingAcceptRelationship(properties);
        };

        /**
         * Encodes the specified PendingAcceptRelationship message. Does not implicitly {@link messages.PendingAcceptRelationship.verify|verify} messages.
         * @function encode
         * @memberof messages.PendingAcceptRelationship
         * @static
         * @param {messages.IPendingAcceptRelationship} message PendingAcceptRelationship message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PendingAcceptRelationship.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.ProofOfIdentityType != null && Object.hasOwnProperty.call(message, "ProofOfIdentityType"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.ProofOfIdentityType);
            if (message.ProofOfIdentity != null && Object.hasOwnProperty.call(message, "ProofOfIdentity"))
                writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.ProofOfIdentity);
            return writer;
        };

        /**
         * Encodes the specified PendingAcceptRelationship message, length delimited. Does not implicitly {@link messages.PendingAcceptRelationship.verify|verify} messages.
         * @function encodeDelimited
         * @memberof messages.PendingAcceptRelationship
         * @static
         * @param {messages.IPendingAcceptRelationship} message PendingAcceptRelationship message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PendingAcceptRelationship.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a PendingAcceptRelationship message from the specified reader or buffer.
         * @function decode
         * @memberof messages.PendingAcceptRelationship
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {messages.PendingAcceptRelationship} PendingAcceptRelationship
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PendingAcceptRelationship.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.messages.PendingAcceptRelationship();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.ProofOfIdentityType = reader.uint32();
                    break;
                case 2:
                    message.ProofOfIdentity = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a PendingAcceptRelationship message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof messages.PendingAcceptRelationship
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {messages.PendingAcceptRelationship} PendingAcceptRelationship
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PendingAcceptRelationship.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a PendingAcceptRelationship message.
         * @function verify
         * @memberof messages.PendingAcceptRelationship
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        PendingAcceptRelationship.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.ProofOfIdentityType != null && message.hasOwnProperty("ProofOfIdentityType"))
                if (!$util.isInteger(message.ProofOfIdentityType))
                    return "ProofOfIdentityType: integer expected";
            if (message.ProofOfIdentity != null && message.hasOwnProperty("ProofOfIdentity"))
                if (!(message.ProofOfIdentity && typeof message.ProofOfIdentity.length === "number" || $util.isString(message.ProofOfIdentity)))
                    return "ProofOfIdentity: buffer expected";
            return null;
        };

        /**
         * Creates a PendingAcceptRelationship message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof messages.PendingAcceptRelationship
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {messages.PendingAcceptRelationship} PendingAcceptRelationship
         */
        PendingAcceptRelationship.fromObject = function fromObject(object) {
            if (object instanceof $root.messages.PendingAcceptRelationship)
                return object;
            var message = new $root.messages.PendingAcceptRelationship();
            if (object.ProofOfIdentityType != null)
                message.ProofOfIdentityType = object.ProofOfIdentityType >>> 0;
            if (object.ProofOfIdentity != null)
                if (typeof object.ProofOfIdentity === "string")
                    $util.base64.decode(object.ProofOfIdentity, message.ProofOfIdentity = $util.newBuffer($util.base64.length(object.ProofOfIdentity)), 0);
                else if (object.ProofOfIdentity.length)
                    message.ProofOfIdentity = object.ProofOfIdentity;
            return message;
        };

        /**
         * Creates a plain object from a PendingAcceptRelationship message. Also converts values to other types if specified.
         * @function toObject
         * @memberof messages.PendingAcceptRelationship
         * @static
         * @param {messages.PendingAcceptRelationship} message PendingAcceptRelationship
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        PendingAcceptRelationship.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.ProofOfIdentityType = 0;
                if (options.bytes === String)
                    object.ProofOfIdentity = "";
                else {
                    object.ProofOfIdentity = [];
                    if (options.bytes !== Array)
                        object.ProofOfIdentity = $util.newBuffer(object.ProofOfIdentity);
                }
            }
            if (message.ProofOfIdentityType != null && message.hasOwnProperty("ProofOfIdentityType"))
                object.ProofOfIdentityType = message.ProofOfIdentityType;
            if (message.ProofOfIdentity != null && message.hasOwnProperty("ProofOfIdentity"))
                object.ProofOfIdentity = options.bytes === String ? $util.base64.encode(message.ProofOfIdentity, 0, message.ProofOfIdentity.length) : options.bytes === Array ? Array.prototype.slice.call(message.ProofOfIdentity) : message.ProofOfIdentity;
            return object;
        };

        /**
         * Converts this PendingAcceptRelationship to JSON.
         * @function toJSON
         * @memberof messages.PendingAcceptRelationship
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        PendingAcceptRelationship.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return PendingAcceptRelationship;
    })();

    messages.AcceptRelationship = (function() {

        /**
         * Properties of an AcceptRelationship.
         * @memberof messages
         * @interface IAcceptRelationship
         * @property {number|null} [ProofOfIdentityType] AcceptRelationship ProofOfIdentityType
         * @property {Uint8Array|null} [ProofOfIdentity] AcceptRelationship ProofOfIdentity
         */

        /**
         * Constructs a new AcceptRelationship.
         * @memberof messages
         * @classdesc Represents an AcceptRelationship.
         * @implements IAcceptRelationship
         * @constructor
         * @param {messages.IAcceptRelationship=} [properties] Properties to set
         */
        function AcceptRelationship(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * AcceptRelationship ProofOfIdentityType.
         * @member {number} ProofOfIdentityType
         * @memberof messages.AcceptRelationship
         * @instance
         */
        AcceptRelationship.prototype.ProofOfIdentityType = 0;

        /**
         * AcceptRelationship ProofOfIdentity.
         * @member {Uint8Array} ProofOfIdentity
         * @memberof messages.AcceptRelationship
         * @instance
         */
        AcceptRelationship.prototype.ProofOfIdentity = $util.newBuffer([]);

        /**
         * Creates a new AcceptRelationship instance using the specified properties.
         * @function create
         * @memberof messages.AcceptRelationship
         * @static
         * @param {messages.IAcceptRelationship=} [properties] Properties to set
         * @returns {messages.AcceptRelationship} AcceptRelationship instance
         */
        AcceptRelationship.create = function create(properties) {
            return new AcceptRelationship(properties);
        };

        /**
         * Encodes the specified AcceptRelationship message. Does not implicitly {@link messages.AcceptRelationship.verify|verify} messages.
         * @function encode
         * @memberof messages.AcceptRelationship
         * @static
         * @param {messages.IAcceptRelationship} message AcceptRelationship message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AcceptRelationship.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.ProofOfIdentityType != null && Object.hasOwnProperty.call(message, "ProofOfIdentityType"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint32(message.ProofOfIdentityType);
            if (message.ProofOfIdentity != null && Object.hasOwnProperty.call(message, "ProofOfIdentity"))
                writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.ProofOfIdentity);
            return writer;
        };

        /**
         * Encodes the specified AcceptRelationship message, length delimited. Does not implicitly {@link messages.AcceptRelationship.verify|verify} messages.
         * @function encodeDelimited
         * @memberof messages.AcceptRelationship
         * @static
         * @param {messages.IAcceptRelationship} message AcceptRelationship message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AcceptRelationship.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an AcceptRelationship message from the specified reader or buffer.
         * @function decode
         * @memberof messages.AcceptRelationship
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {messages.AcceptRelationship} AcceptRelationship
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AcceptRelationship.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.messages.AcceptRelationship();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.ProofOfIdentityType = reader.uint32();
                    break;
                case 2:
                    message.ProofOfIdentity = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an AcceptRelationship message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof messages.AcceptRelationship
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {messages.AcceptRelationship} AcceptRelationship
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AcceptRelationship.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an AcceptRelationship message.
         * @function verify
         * @memberof messages.AcceptRelationship
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        AcceptRelationship.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.ProofOfIdentityType != null && message.hasOwnProperty("ProofOfIdentityType"))
                if (!$util.isInteger(message.ProofOfIdentityType))
                    return "ProofOfIdentityType: integer expected";
            if (message.ProofOfIdentity != null && message.hasOwnProperty("ProofOfIdentity"))
                if (!(message.ProofOfIdentity && typeof message.ProofOfIdentity.length === "number" || $util.isString(message.ProofOfIdentity)))
                    return "ProofOfIdentity: buffer expected";
            return null;
        };

        /**
         * Creates an AcceptRelationship message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof messages.AcceptRelationship
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {messages.AcceptRelationship} AcceptRelationship
         */
        AcceptRelationship.fromObject = function fromObject(object) {
            if (object instanceof $root.messages.AcceptRelationship)
                return object;
            var message = new $root.messages.AcceptRelationship();
            if (object.ProofOfIdentityType != null)
                message.ProofOfIdentityType = object.ProofOfIdentityType >>> 0;
            if (object.ProofOfIdentity != null)
                if (typeof object.ProofOfIdentity === "string")
                    $util.base64.decode(object.ProofOfIdentity, message.ProofOfIdentity = $util.newBuffer($util.base64.length(object.ProofOfIdentity)), 0);
                else if (object.ProofOfIdentity.length)
                    message.ProofOfIdentity = object.ProofOfIdentity;
            return message;
        };

        /**
         * Creates a plain object from an AcceptRelationship message. Also converts values to other types if specified.
         * @function toObject
         * @memberof messages.AcceptRelationship
         * @static
         * @param {messages.AcceptRelationship} message AcceptRelationship
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        AcceptRelationship.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.ProofOfIdentityType = 0;
                if (options.bytes === String)
                    object.ProofOfIdentity = "";
                else {
                    object.ProofOfIdentity = [];
                    if (options.bytes !== Array)
                        object.ProofOfIdentity = $util.newBuffer(object.ProofOfIdentity);
                }
            }
            if (message.ProofOfIdentityType != null && message.hasOwnProperty("ProofOfIdentityType"))
                object.ProofOfIdentityType = message.ProofOfIdentityType;
            if (message.ProofOfIdentity != null && message.hasOwnProperty("ProofOfIdentity"))
                object.ProofOfIdentity = options.bytes === String ? $util.base64.encode(message.ProofOfIdentity, 0, message.ProofOfIdentity.length) : options.bytes === Array ? Array.prototype.slice.call(message.ProofOfIdentity) : message.ProofOfIdentity;
            return object;
        };

        /**
         * Converts this AcceptRelationship to JSON.
         * @function toJSON
         * @memberof messages.AcceptRelationship
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        AcceptRelationship.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return AcceptRelationship;
    })();

    messages.RelationshipAmendment = (function() {

        /**
         * Properties of a RelationshipAmendment.
         * @memberof messages
         * @interface IRelationshipAmendment
         * @property {Uint8Array|null} [Seed] RelationshipAmendment Seed
         * @property {Uint8Array|null} [BaseEncryptionSecret] RelationshipAmendment BaseEncryptionSecret
         * @property {number|null} [AddMemberIndexes] RelationshipAmendment AddMemberIndexes
         * @property {number|null} [DropMemberIndexes] RelationshipAmendment DropMemberIndexes
         */

        /**
         * Constructs a new RelationshipAmendment.
         * @memberof messages
         * @classdesc Represents a RelationshipAmendment.
         * @implements IRelationshipAmendment
         * @constructor
         * @param {messages.IRelationshipAmendment=} [properties] Properties to set
         */
        function RelationshipAmendment(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * RelationshipAmendment Seed.
         * @member {Uint8Array} Seed
         * @memberof messages.RelationshipAmendment
         * @instance
         */
        RelationshipAmendment.prototype.Seed = $util.newBuffer([]);

        /**
         * RelationshipAmendment BaseEncryptionSecret.
         * @member {Uint8Array} BaseEncryptionSecret
         * @memberof messages.RelationshipAmendment
         * @instance
         */
        RelationshipAmendment.prototype.BaseEncryptionSecret = $util.newBuffer([]);

        /**
         * RelationshipAmendment AddMemberIndexes.
         * @member {number} AddMemberIndexes
         * @memberof messages.RelationshipAmendment
         * @instance
         */
        RelationshipAmendment.prototype.AddMemberIndexes = 0;

        /**
         * RelationshipAmendment DropMemberIndexes.
         * @member {number} DropMemberIndexes
         * @memberof messages.RelationshipAmendment
         * @instance
         */
        RelationshipAmendment.prototype.DropMemberIndexes = 0;

        /**
         * Creates a new RelationshipAmendment instance using the specified properties.
         * @function create
         * @memberof messages.RelationshipAmendment
         * @static
         * @param {messages.IRelationshipAmendment=} [properties] Properties to set
         * @returns {messages.RelationshipAmendment} RelationshipAmendment instance
         */
        RelationshipAmendment.create = function create(properties) {
            return new RelationshipAmendment(properties);
        };

        /**
         * Encodes the specified RelationshipAmendment message. Does not implicitly {@link messages.RelationshipAmendment.verify|verify} messages.
         * @function encode
         * @memberof messages.RelationshipAmendment
         * @static
         * @param {messages.IRelationshipAmendment} message RelationshipAmendment message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RelationshipAmendment.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Seed != null && Object.hasOwnProperty.call(message, "Seed"))
                writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.Seed);
            if (message.BaseEncryptionSecret != null && Object.hasOwnProperty.call(message, "BaseEncryptionSecret"))
                writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.BaseEncryptionSecret);
            if (message.AddMemberIndexes != null && Object.hasOwnProperty.call(message, "AddMemberIndexes"))
                writer.uint32(/* id 3, wireType 0 =*/24).uint32(message.AddMemberIndexes);
            if (message.DropMemberIndexes != null && Object.hasOwnProperty.call(message, "DropMemberIndexes"))
                writer.uint32(/* id 4, wireType 0 =*/32).uint32(message.DropMemberIndexes);
            return writer;
        };

        /**
         * Encodes the specified RelationshipAmendment message, length delimited. Does not implicitly {@link messages.RelationshipAmendment.verify|verify} messages.
         * @function encodeDelimited
         * @memberof messages.RelationshipAmendment
         * @static
         * @param {messages.IRelationshipAmendment} message RelationshipAmendment message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        RelationshipAmendment.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a RelationshipAmendment message from the specified reader or buffer.
         * @function decode
         * @memberof messages.RelationshipAmendment
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {messages.RelationshipAmendment} RelationshipAmendment
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RelationshipAmendment.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.messages.RelationshipAmendment();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.Seed = reader.bytes();
                    break;
                case 2:
                    message.BaseEncryptionSecret = reader.bytes();
                    break;
                case 3:
                    message.AddMemberIndexes = reader.uint32();
                    break;
                case 4:
                    message.DropMemberIndexes = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a RelationshipAmendment message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof messages.RelationshipAmendment
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {messages.RelationshipAmendment} RelationshipAmendment
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        RelationshipAmendment.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a RelationshipAmendment message.
         * @function verify
         * @memberof messages.RelationshipAmendment
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        RelationshipAmendment.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.Seed != null && message.hasOwnProperty("Seed"))
                if (!(message.Seed && typeof message.Seed.length === "number" || $util.isString(message.Seed)))
                    return "Seed: buffer expected";
            if (message.BaseEncryptionSecret != null && message.hasOwnProperty("BaseEncryptionSecret"))
                if (!(message.BaseEncryptionSecret && typeof message.BaseEncryptionSecret.length === "number" || $util.isString(message.BaseEncryptionSecret)))
                    return "BaseEncryptionSecret: buffer expected";
            if (message.AddMemberIndexes != null && message.hasOwnProperty("AddMemberIndexes"))
                if (!$util.isInteger(message.AddMemberIndexes))
                    return "AddMemberIndexes: integer expected";
            if (message.DropMemberIndexes != null && message.hasOwnProperty("DropMemberIndexes"))
                if (!$util.isInteger(message.DropMemberIndexes))
                    return "DropMemberIndexes: integer expected";
            return null;
        };

        /**
         * Creates a RelationshipAmendment message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof messages.RelationshipAmendment
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {messages.RelationshipAmendment} RelationshipAmendment
         */
        RelationshipAmendment.fromObject = function fromObject(object) {
            if (object instanceof $root.messages.RelationshipAmendment)
                return object;
            var message = new $root.messages.RelationshipAmendment();
            if (object.Seed != null)
                if (typeof object.Seed === "string")
                    $util.base64.decode(object.Seed, message.Seed = $util.newBuffer($util.base64.length(object.Seed)), 0);
                else if (object.Seed.length)
                    message.Seed = object.Seed;
            if (object.BaseEncryptionSecret != null)
                if (typeof object.BaseEncryptionSecret === "string")
                    $util.base64.decode(object.BaseEncryptionSecret, message.BaseEncryptionSecret = $util.newBuffer($util.base64.length(object.BaseEncryptionSecret)), 0);
                else if (object.BaseEncryptionSecret.length)
                    message.BaseEncryptionSecret = object.BaseEncryptionSecret;
            if (object.AddMemberIndexes != null)
                message.AddMemberIndexes = object.AddMemberIndexes >>> 0;
            if (object.DropMemberIndexes != null)
                message.DropMemberIndexes = object.DropMemberIndexes >>> 0;
            return message;
        };

        /**
         * Creates a plain object from a RelationshipAmendment message. Also converts values to other types if specified.
         * @function toObject
         * @memberof messages.RelationshipAmendment
         * @static
         * @param {messages.RelationshipAmendment} message RelationshipAmendment
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        RelationshipAmendment.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if (options.bytes === String)
                    object.Seed = "";
                else {
                    object.Seed = [];
                    if (options.bytes !== Array)
                        object.Seed = $util.newBuffer(object.Seed);
                }
                if (options.bytes === String)
                    object.BaseEncryptionSecret = "";
                else {
                    object.BaseEncryptionSecret = [];
                    if (options.bytes !== Array)
                        object.BaseEncryptionSecret = $util.newBuffer(object.BaseEncryptionSecret);
                }
                object.AddMemberIndexes = 0;
                object.DropMemberIndexes = 0;
            }
            if (message.Seed != null && message.hasOwnProperty("Seed"))
                object.Seed = options.bytes === String ? $util.base64.encode(message.Seed, 0, message.Seed.length) : options.bytes === Array ? Array.prototype.slice.call(message.Seed) : message.Seed;
            if (message.BaseEncryptionSecret != null && message.hasOwnProperty("BaseEncryptionSecret"))
                object.BaseEncryptionSecret = options.bytes === String ? $util.base64.encode(message.BaseEncryptionSecret, 0, message.BaseEncryptionSecret.length) : options.bytes === Array ? Array.prototype.slice.call(message.BaseEncryptionSecret) : message.BaseEncryptionSecret;
            if (message.AddMemberIndexes != null && message.hasOwnProperty("AddMemberIndexes"))
                object.AddMemberIndexes = message.AddMemberIndexes;
            if (message.DropMemberIndexes != null && message.hasOwnProperty("DropMemberIndexes"))
                object.DropMemberIndexes = message.DropMemberIndexes;
            return object;
        };

        /**
         * Converts this RelationshipAmendment to JSON.
         * @function toJSON
         * @memberof messages.RelationshipAmendment
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        RelationshipAmendment.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return RelationshipAmendment;
    })();

    messages.InitiateThread = (function() {

        /**
         * Properties of an InitiateThread.
         * @memberof messages
         * @interface IInitiateThread
         * @property {Uint8Array|null} [Flag] InitiateThread Flag
         * @property {Uint8Array|null} [Seed] InitiateThread Seed
         */

        /**
         * Constructs a new InitiateThread.
         * @memberof messages
         * @classdesc Represents an InitiateThread.
         * @implements IInitiateThread
         * @constructor
         * @param {messages.IInitiateThread=} [properties] Properties to set
         */
        function InitiateThread(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * InitiateThread Flag.
         * @member {Uint8Array} Flag
         * @memberof messages.InitiateThread
         * @instance
         */
        InitiateThread.prototype.Flag = $util.newBuffer([]);

        /**
         * InitiateThread Seed.
         * @member {Uint8Array} Seed
         * @memberof messages.InitiateThread
         * @instance
         */
        InitiateThread.prototype.Seed = $util.newBuffer([]);

        /**
         * Creates a new InitiateThread instance using the specified properties.
         * @function create
         * @memberof messages.InitiateThread
         * @static
         * @param {messages.IInitiateThread=} [properties] Properties to set
         * @returns {messages.InitiateThread} InitiateThread instance
         */
        InitiateThread.create = function create(properties) {
            return new InitiateThread(properties);
        };

        /**
         * Encodes the specified InitiateThread message. Does not implicitly {@link messages.InitiateThread.verify|verify} messages.
         * @function encode
         * @memberof messages.InitiateThread
         * @static
         * @param {messages.IInitiateThread} message InitiateThread message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        InitiateThread.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Flag != null && Object.hasOwnProperty.call(message, "Flag"))
                writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.Flag);
            if (message.Seed != null && Object.hasOwnProperty.call(message, "Seed"))
                writer.uint32(/* id 2, wireType 2 =*/18).bytes(message.Seed);
            return writer;
        };

        /**
         * Encodes the specified InitiateThread message, length delimited. Does not implicitly {@link messages.InitiateThread.verify|verify} messages.
         * @function encodeDelimited
         * @memberof messages.InitiateThread
         * @static
         * @param {messages.IInitiateThread} message InitiateThread message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        InitiateThread.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an InitiateThread message from the specified reader or buffer.
         * @function decode
         * @memberof messages.InitiateThread
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {messages.InitiateThread} InitiateThread
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        InitiateThread.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.messages.InitiateThread();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.Flag = reader.bytes();
                    break;
                case 2:
                    message.Seed = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an InitiateThread message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof messages.InitiateThread
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {messages.InitiateThread} InitiateThread
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        InitiateThread.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an InitiateThread message.
         * @function verify
         * @memberof messages.InitiateThread
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        InitiateThread.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.Flag != null && message.hasOwnProperty("Flag"))
                if (!(message.Flag && typeof message.Flag.length === "number" || $util.isString(message.Flag)))
                    return "Flag: buffer expected";
            if (message.Seed != null && message.hasOwnProperty("Seed"))
                if (!(message.Seed && typeof message.Seed.length === "number" || $util.isString(message.Seed)))
                    return "Seed: buffer expected";
            return null;
        };

        /**
         * Creates an InitiateThread message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof messages.InitiateThread
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {messages.InitiateThread} InitiateThread
         */
        InitiateThread.fromObject = function fromObject(object) {
            if (object instanceof $root.messages.InitiateThread)
                return object;
            var message = new $root.messages.InitiateThread();
            if (object.Flag != null)
                if (typeof object.Flag === "string")
                    $util.base64.decode(object.Flag, message.Flag = $util.newBuffer($util.base64.length(object.Flag)), 0);
                else if (object.Flag.length)
                    message.Flag = object.Flag;
            if (object.Seed != null)
                if (typeof object.Seed === "string")
                    $util.base64.decode(object.Seed, message.Seed = $util.newBuffer($util.base64.length(object.Seed)), 0);
                else if (object.Seed.length)
                    message.Seed = object.Seed;
            return message;
        };

        /**
         * Creates a plain object from an InitiateThread message. Also converts values to other types if specified.
         * @function toObject
         * @memberof messages.InitiateThread
         * @static
         * @param {messages.InitiateThread} message InitiateThread
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        InitiateThread.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if (options.bytes === String)
                    object.Flag = "";
                else {
                    object.Flag = [];
                    if (options.bytes !== Array)
                        object.Flag = $util.newBuffer(object.Flag);
                }
                if (options.bytes === String)
                    object.Seed = "";
                else {
                    object.Seed = [];
                    if (options.bytes !== Array)
                        object.Seed = $util.newBuffer(object.Seed);
                }
            }
            if (message.Flag != null && message.hasOwnProperty("Flag"))
                object.Flag = options.bytes === String ? $util.base64.encode(message.Flag, 0, message.Flag.length) : options.bytes === Array ? Array.prototype.slice.call(message.Flag) : message.Flag;
            if (message.Seed != null && message.hasOwnProperty("Seed"))
                object.Seed = options.bytes === String ? $util.base64.encode(message.Seed, 0, message.Seed.length) : options.bytes === Array ? Array.prototype.slice.call(message.Seed) : message.Seed;
            return object;
        };

        /**
         * Converts this InitiateThread to JSON.
         * @function toJSON
         * @memberof messages.InitiateThread
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        InitiateThread.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return InitiateThread;
    })();

    messages.AdministratorField = (function() {

        /**
         * Properties of an AdministratorField.
         * @memberof messages
         * @interface IAdministratorField
         * @property {number|null} [Type] AdministratorField Type
         * @property {string|null} [Name] AdministratorField Name
         */

        /**
         * Constructs a new AdministratorField.
         * @memberof messages
         * @classdesc Represents an AdministratorField.
         * @implements IAdministratorField
         * @constructor
         * @param {messages.IAdministratorField=} [properties] Properties to set
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
         * @memberof messages.AdministratorField
         * @instance
         */
        AdministratorField.prototype.Type = 0;

        /**
         * AdministratorField Name.
         * @member {string} Name
         * @memberof messages.AdministratorField
         * @instance
         */
        AdministratorField.prototype.Name = "";

        /**
         * Creates a new AdministratorField instance using the specified properties.
         * @function create
         * @memberof messages.AdministratorField
         * @static
         * @param {messages.IAdministratorField=} [properties] Properties to set
         * @returns {messages.AdministratorField} AdministratorField instance
         */
        AdministratorField.create = function create(properties) {
            return new AdministratorField(properties);
        };

        /**
         * Encodes the specified AdministratorField message. Does not implicitly {@link messages.AdministratorField.verify|verify} messages.
         * @function encode
         * @memberof messages.AdministratorField
         * @static
         * @param {messages.IAdministratorField} message AdministratorField message or plain object to encode
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
         * Encodes the specified AdministratorField message, length delimited. Does not implicitly {@link messages.AdministratorField.verify|verify} messages.
         * @function encodeDelimited
         * @memberof messages.AdministratorField
         * @static
         * @param {messages.IAdministratorField} message AdministratorField message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        AdministratorField.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an AdministratorField message from the specified reader or buffer.
         * @function decode
         * @memberof messages.AdministratorField
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {messages.AdministratorField} AdministratorField
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        AdministratorField.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.messages.AdministratorField();
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
         * @memberof messages.AdministratorField
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {messages.AdministratorField} AdministratorField
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
         * @memberof messages.AdministratorField
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
         * @memberof messages.AdministratorField
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {messages.AdministratorField} AdministratorField
         */
        AdministratorField.fromObject = function fromObject(object) {
            if (object instanceof $root.messages.AdministratorField)
                return object;
            var message = new $root.messages.AdministratorField();
            if (object.Type != null)
                message.Type = object.Type >>> 0;
            if (object.Name != null)
                message.Name = String(object.Name);
            return message;
        };

        /**
         * Creates a plain object from an AdministratorField message. Also converts values to other types if specified.
         * @function toObject
         * @memberof messages.AdministratorField
         * @static
         * @param {messages.AdministratorField} message AdministratorField
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
         * @memberof messages.AdministratorField
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        AdministratorField.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return AdministratorField;
    })();

    messages.ChannelPartyField = (function() {

        /**
         * Properties of a ChannelPartyField.
         * @memberof messages
         * @interface IChannelPartyField
         * @property {Uint8Array|null} [AdministrativeAddress] ChannelPartyField AdministrativeAddress
         * @property {number|null} [OutputIndex] ChannelPartyField OutputIndex
         */

        /**
         * Constructs a new ChannelPartyField.
         * @memberof messages
         * @classdesc Represents a ChannelPartyField.
         * @implements IChannelPartyField
         * @constructor
         * @param {messages.IChannelPartyField=} [properties] Properties to set
         */
        function ChannelPartyField(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * ChannelPartyField AdministrativeAddress.
         * @member {Uint8Array} AdministrativeAddress
         * @memberof messages.ChannelPartyField
         * @instance
         */
        ChannelPartyField.prototype.AdministrativeAddress = $util.newBuffer([]);

        /**
         * ChannelPartyField OutputIndex.
         * @member {number} OutputIndex
         * @memberof messages.ChannelPartyField
         * @instance
         */
        ChannelPartyField.prototype.OutputIndex = 0;

        /**
         * Creates a new ChannelPartyField instance using the specified properties.
         * @function create
         * @memberof messages.ChannelPartyField
         * @static
         * @param {messages.IChannelPartyField=} [properties] Properties to set
         * @returns {messages.ChannelPartyField} ChannelPartyField instance
         */
        ChannelPartyField.create = function create(properties) {
            return new ChannelPartyField(properties);
        };

        /**
         * Encodes the specified ChannelPartyField message. Does not implicitly {@link messages.ChannelPartyField.verify|verify} messages.
         * @function encode
         * @memberof messages.ChannelPartyField
         * @static
         * @param {messages.IChannelPartyField} message ChannelPartyField message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ChannelPartyField.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.AdministrativeAddress != null && Object.hasOwnProperty.call(message, "AdministrativeAddress"))
                writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.AdministrativeAddress);
            if (message.OutputIndex != null && Object.hasOwnProperty.call(message, "OutputIndex"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.OutputIndex);
            return writer;
        };

        /**
         * Encodes the specified ChannelPartyField message, length delimited. Does not implicitly {@link messages.ChannelPartyField.verify|verify} messages.
         * @function encodeDelimited
         * @memberof messages.ChannelPartyField
         * @static
         * @param {messages.IChannelPartyField} message ChannelPartyField message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ChannelPartyField.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ChannelPartyField message from the specified reader or buffer.
         * @function decode
         * @memberof messages.ChannelPartyField
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {messages.ChannelPartyField} ChannelPartyField
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ChannelPartyField.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.messages.ChannelPartyField();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.AdministrativeAddress = reader.bytes();
                    break;
                case 2:
                    message.OutputIndex = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a ChannelPartyField message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof messages.ChannelPartyField
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {messages.ChannelPartyField} ChannelPartyField
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ChannelPartyField.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a ChannelPartyField message.
         * @function verify
         * @memberof messages.ChannelPartyField
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        ChannelPartyField.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.AdministrativeAddress != null && message.hasOwnProperty("AdministrativeAddress"))
                if (!(message.AdministrativeAddress && typeof message.AdministrativeAddress.length === "number" || $util.isString(message.AdministrativeAddress)))
                    return "AdministrativeAddress: buffer expected";
            if (message.OutputIndex != null && message.hasOwnProperty("OutputIndex"))
                if (!$util.isInteger(message.OutputIndex))
                    return "OutputIndex: integer expected";
            return null;
        };

        /**
         * Creates a ChannelPartyField message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof messages.ChannelPartyField
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {messages.ChannelPartyField} ChannelPartyField
         */
        ChannelPartyField.fromObject = function fromObject(object) {
            if (object instanceof $root.messages.ChannelPartyField)
                return object;
            var message = new $root.messages.ChannelPartyField();
            if (object.AdministrativeAddress != null)
                if (typeof object.AdministrativeAddress === "string")
                    $util.base64.decode(object.AdministrativeAddress, message.AdministrativeAddress = $util.newBuffer($util.base64.length(object.AdministrativeAddress)), 0);
                else if (object.AdministrativeAddress.length)
                    message.AdministrativeAddress = object.AdministrativeAddress;
            if (object.OutputIndex != null)
                message.OutputIndex = object.OutputIndex >>> 0;
            return message;
        };

        /**
         * Creates a plain object from a ChannelPartyField message. Also converts values to other types if specified.
         * @function toObject
         * @memberof messages.ChannelPartyField
         * @static
         * @param {messages.ChannelPartyField} message ChannelPartyField
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        ChannelPartyField.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if (options.bytes === String)
                    object.AdministrativeAddress = "";
                else {
                    object.AdministrativeAddress = [];
                    if (options.bytes !== Array)
                        object.AdministrativeAddress = $util.newBuffer(object.AdministrativeAddress);
                }
                object.OutputIndex = 0;
            }
            if (message.AdministrativeAddress != null && message.hasOwnProperty("AdministrativeAddress"))
                object.AdministrativeAddress = options.bytes === String ? $util.base64.encode(message.AdministrativeAddress, 0, message.AdministrativeAddress.length) : options.bytes === Array ? Array.prototype.slice.call(message.AdministrativeAddress) : message.AdministrativeAddress;
            if (message.OutputIndex != null && message.hasOwnProperty("OutputIndex"))
                object.OutputIndex = message.OutputIndex;
            return object;
        };

        /**
         * Converts this ChannelPartyField to JSON.
         * @function toJSON
         * @memberof messages.ChannelPartyField
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ChannelPartyField.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ChannelPartyField;
    })();

    messages.DocumentField = (function() {

        /**
         * Properties of a DocumentField.
         * @memberof messages
         * @interface IDocumentField
         * @property {string|null} [Name] DocumentField Name
         * @property {string|null} [Type] DocumentField Type
         * @property {Uint8Array|null} [Contents] DocumentField Contents
         */

        /**
         * Constructs a new DocumentField.
         * @memberof messages
         * @classdesc Represents a DocumentField.
         * @implements IDocumentField
         * @constructor
         * @param {messages.IDocumentField=} [properties] Properties to set
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
         * @memberof messages.DocumentField
         * @instance
         */
        DocumentField.prototype.Name = "";

        /**
         * DocumentField Type.
         * @member {string} Type
         * @memberof messages.DocumentField
         * @instance
         */
        DocumentField.prototype.Type = "";

        /**
         * DocumentField Contents.
         * @member {Uint8Array} Contents
         * @memberof messages.DocumentField
         * @instance
         */
        DocumentField.prototype.Contents = $util.newBuffer([]);

        /**
         * Creates a new DocumentField instance using the specified properties.
         * @function create
         * @memberof messages.DocumentField
         * @static
         * @param {messages.IDocumentField=} [properties] Properties to set
         * @returns {messages.DocumentField} DocumentField instance
         */
        DocumentField.create = function create(properties) {
            return new DocumentField(properties);
        };

        /**
         * Encodes the specified DocumentField message. Does not implicitly {@link messages.DocumentField.verify|verify} messages.
         * @function encode
         * @memberof messages.DocumentField
         * @static
         * @param {messages.IDocumentField} message DocumentField message or plain object to encode
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
         * Encodes the specified DocumentField message, length delimited. Does not implicitly {@link messages.DocumentField.verify|verify} messages.
         * @function encodeDelimited
         * @memberof messages.DocumentField
         * @static
         * @param {messages.IDocumentField} message DocumentField message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        DocumentField.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a DocumentField message from the specified reader or buffer.
         * @function decode
         * @memberof messages.DocumentField
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {messages.DocumentField} DocumentField
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        DocumentField.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.messages.DocumentField();
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
         * @memberof messages.DocumentField
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {messages.DocumentField} DocumentField
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
         * @memberof messages.DocumentField
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
         * @memberof messages.DocumentField
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {messages.DocumentField} DocumentField
         */
        DocumentField.fromObject = function fromObject(object) {
            if (object instanceof $root.messages.DocumentField)
                return object;
            var message = new $root.messages.DocumentField();
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
         * @memberof messages.DocumentField
         * @static
         * @param {messages.DocumentField} message DocumentField
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
         * @memberof messages.DocumentField
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        DocumentField.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return DocumentField;
    })();

    messages.EntityField = (function() {

        /**
         * Properties of an EntityField.
         * @memberof messages
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
         * @property {Array.<messages.IAdministratorField>|null} [Administration] EntityField Administration
         * @property {Array.<messages.IManagerField>|null} [Management] EntityField Management
         * @property {string|null} [DomainName] EntityField DomainName
         * @property {string|null} [PaymailHandle] EntityField PaymailHandle
         */

        /**
         * Constructs a new EntityField.
         * @memberof messages
         * @classdesc Represents an EntityField.
         * @implements IEntityField
         * @constructor
         * @param {messages.IEntityField=} [properties] Properties to set
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
         * @memberof messages.EntityField
         * @instance
         */
        EntityField.prototype.Name = "";

        /**
         * EntityField Type.
         * @member {string} Type
         * @memberof messages.EntityField
         * @instance
         */
        EntityField.prototype.Type = "";

        /**
         * EntityField LEI.
         * @member {string} LEI
         * @memberof messages.EntityField
         * @instance
         */
        EntityField.prototype.LEI = "";

        /**
         * EntityField UnitNumber.
         * @member {string} UnitNumber
         * @memberof messages.EntityField
         * @instance
         */
        EntityField.prototype.UnitNumber = "";

        /**
         * EntityField BuildingNumber.
         * @member {string} BuildingNumber
         * @memberof messages.EntityField
         * @instance
         */
        EntityField.prototype.BuildingNumber = "";

        /**
         * EntityField Street.
         * @member {string} Street
         * @memberof messages.EntityField
         * @instance
         */
        EntityField.prototype.Street = "";

        /**
         * EntityField SuburbCity.
         * @member {string} SuburbCity
         * @memberof messages.EntityField
         * @instance
         */
        EntityField.prototype.SuburbCity = "";

        /**
         * EntityField TerritoryStateProvinceCode.
         * @member {string} TerritoryStateProvinceCode
         * @memberof messages.EntityField
         * @instance
         */
        EntityField.prototype.TerritoryStateProvinceCode = "";

        /**
         * EntityField CountryCode.
         * @member {string} CountryCode
         * @memberof messages.EntityField
         * @instance
         */
        EntityField.prototype.CountryCode = "";

        /**
         * EntityField PostalZIPCode.
         * @member {string} PostalZIPCode
         * @memberof messages.EntityField
         * @instance
         */
        EntityField.prototype.PostalZIPCode = "";

        /**
         * EntityField EmailAddress.
         * @member {string} EmailAddress
         * @memberof messages.EntityField
         * @instance
         */
        EntityField.prototype.EmailAddress = "";

        /**
         * EntityField PhoneNumber.
         * @member {string} PhoneNumber
         * @memberof messages.EntityField
         * @instance
         */
        EntityField.prototype.PhoneNumber = "";

        /**
         * EntityField Administration.
         * @member {Array.<messages.IAdministratorField>} Administration
         * @memberof messages.EntityField
         * @instance
         */
        EntityField.prototype.Administration = $util.emptyArray;

        /**
         * EntityField Management.
         * @member {Array.<messages.IManagerField>} Management
         * @memberof messages.EntityField
         * @instance
         */
        EntityField.prototype.Management = $util.emptyArray;

        /**
         * EntityField DomainName.
         * @member {string} DomainName
         * @memberof messages.EntityField
         * @instance
         */
        EntityField.prototype.DomainName = "";

        /**
         * EntityField PaymailHandle.
         * @member {string} PaymailHandle
         * @memberof messages.EntityField
         * @instance
         */
        EntityField.prototype.PaymailHandle = "";

        /**
         * Creates a new EntityField instance using the specified properties.
         * @function create
         * @memberof messages.EntityField
         * @static
         * @param {messages.IEntityField=} [properties] Properties to set
         * @returns {messages.EntityField} EntityField instance
         */
        EntityField.create = function create(properties) {
            return new EntityField(properties);
        };

        /**
         * Encodes the specified EntityField message. Does not implicitly {@link messages.EntityField.verify|verify} messages.
         * @function encode
         * @memberof messages.EntityField
         * @static
         * @param {messages.IEntityField} message EntityField message or plain object to encode
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
                    $root.messages.AdministratorField.encode(message.Administration[i], writer.uint32(/* id 13, wireType 2 =*/106).fork()).ldelim();
            if (message.Management != null && message.Management.length)
                for (var i = 0; i < message.Management.length; ++i)
                    $root.messages.ManagerField.encode(message.Management[i], writer.uint32(/* id 14, wireType 2 =*/114).fork()).ldelim();
            if (message.DomainName != null && Object.hasOwnProperty.call(message, "DomainName"))
                writer.uint32(/* id 15, wireType 2 =*/122).string(message.DomainName);
            if (message.PaymailHandle != null && Object.hasOwnProperty.call(message, "PaymailHandle"))
                writer.uint32(/* id 17, wireType 2 =*/138).string(message.PaymailHandle);
            return writer;
        };

        /**
         * Encodes the specified EntityField message, length delimited. Does not implicitly {@link messages.EntityField.verify|verify} messages.
         * @function encodeDelimited
         * @memberof messages.EntityField
         * @static
         * @param {messages.IEntityField} message EntityField message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        EntityField.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an EntityField message from the specified reader or buffer.
         * @function decode
         * @memberof messages.EntityField
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {messages.EntityField} EntityField
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        EntityField.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.messages.EntityField();
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
                    message.Administration.push($root.messages.AdministratorField.decode(reader, reader.uint32()));
                    break;
                case 14:
                    if (!(message.Management && message.Management.length))
                        message.Management = [];
                    message.Management.push($root.messages.ManagerField.decode(reader, reader.uint32()));
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
         * @memberof messages.EntityField
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {messages.EntityField} EntityField
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
         * @memberof messages.EntityField
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
                    var error = $root.messages.AdministratorField.verify(message.Administration[i]);
                    if (error)
                        return "Administration." + error;
                }
            }
            if (message.Management != null && message.hasOwnProperty("Management")) {
                if (!Array.isArray(message.Management))
                    return "Management: array expected";
                for (var i = 0; i < message.Management.length; ++i) {
                    var error = $root.messages.ManagerField.verify(message.Management[i]);
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
         * @memberof messages.EntityField
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {messages.EntityField} EntityField
         */
        EntityField.fromObject = function fromObject(object) {
            if (object instanceof $root.messages.EntityField)
                return object;
            var message = new $root.messages.EntityField();
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
                    throw TypeError(".messages.EntityField.Administration: array expected");
                message.Administration = [];
                for (var i = 0; i < object.Administration.length; ++i) {
                    if (typeof object.Administration[i] !== "object")
                        throw TypeError(".messages.EntityField.Administration: object expected");
                    message.Administration[i] = $root.messages.AdministratorField.fromObject(object.Administration[i]);
                }
            }
            if (object.Management) {
                if (!Array.isArray(object.Management))
                    throw TypeError(".messages.EntityField.Management: array expected");
                message.Management = [];
                for (var i = 0; i < object.Management.length; ++i) {
                    if (typeof object.Management[i] !== "object")
                        throw TypeError(".messages.EntityField.Management: object expected");
                    message.Management[i] = $root.messages.ManagerField.fromObject(object.Management[i]);
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
         * @memberof messages.EntityField
         * @static
         * @param {messages.EntityField} message EntityField
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
                    object.Administration[j] = $root.messages.AdministratorField.toObject(message.Administration[j], options);
            }
            if (message.Management && message.Management.length) {
                object.Management = [];
                for (var j = 0; j < message.Management.length; ++j)
                    object.Management[j] = $root.messages.ManagerField.toObject(message.Management[j], options);
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
         * @memberof messages.EntityField
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        EntityField.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return EntityField;
    })();

    messages.IdentityOracleProofField = (function() {

        /**
         * Properties of an IdentityOracleProofField.
         * @memberof messages
         * @interface IIdentityOracleProofField
         * @property {Uint8Array|null} [UserID] IdentityOracleProofField UserID
         * @property {messages.IEntityField|null} [Entity] IdentityOracleProofField Entity
         * @property {messages.IOracleSignatureField|null} [OracleSignature] IdentityOracleProofField OracleSignature
         */

        /**
         * Constructs a new IdentityOracleProofField.
         * @memberof messages
         * @classdesc Represents an IdentityOracleProofField.
         * @implements IIdentityOracleProofField
         * @constructor
         * @param {messages.IIdentityOracleProofField=} [properties] Properties to set
         */
        function IdentityOracleProofField(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * IdentityOracleProofField UserID.
         * @member {Uint8Array} UserID
         * @memberof messages.IdentityOracleProofField
         * @instance
         */
        IdentityOracleProofField.prototype.UserID = $util.newBuffer([]);

        /**
         * IdentityOracleProofField Entity.
         * @member {messages.IEntityField|null|undefined} Entity
         * @memberof messages.IdentityOracleProofField
         * @instance
         */
        IdentityOracleProofField.prototype.Entity = null;

        /**
         * IdentityOracleProofField OracleSignature.
         * @member {messages.IOracleSignatureField|null|undefined} OracleSignature
         * @memberof messages.IdentityOracleProofField
         * @instance
         */
        IdentityOracleProofField.prototype.OracleSignature = null;

        /**
         * Creates a new IdentityOracleProofField instance using the specified properties.
         * @function create
         * @memberof messages.IdentityOracleProofField
         * @static
         * @param {messages.IIdentityOracleProofField=} [properties] Properties to set
         * @returns {messages.IdentityOracleProofField} IdentityOracleProofField instance
         */
        IdentityOracleProofField.create = function create(properties) {
            return new IdentityOracleProofField(properties);
        };

        /**
         * Encodes the specified IdentityOracleProofField message. Does not implicitly {@link messages.IdentityOracleProofField.verify|verify} messages.
         * @function encode
         * @memberof messages.IdentityOracleProofField
         * @static
         * @param {messages.IIdentityOracleProofField} message IdentityOracleProofField message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        IdentityOracleProofField.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.UserID != null && Object.hasOwnProperty.call(message, "UserID"))
                writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.UserID);
            if (message.Entity != null && Object.hasOwnProperty.call(message, "Entity"))
                $root.messages.EntityField.encode(message.Entity, writer.uint32(/* id 2, wireType 2 =*/18).fork()).ldelim();
            if (message.OracleSignature != null && Object.hasOwnProperty.call(message, "OracleSignature"))
                $root.messages.OracleSignatureField.encode(message.OracleSignature, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified IdentityOracleProofField message, length delimited. Does not implicitly {@link messages.IdentityOracleProofField.verify|verify} messages.
         * @function encodeDelimited
         * @memberof messages.IdentityOracleProofField
         * @static
         * @param {messages.IIdentityOracleProofField} message IdentityOracleProofField message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        IdentityOracleProofField.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an IdentityOracleProofField message from the specified reader or buffer.
         * @function decode
         * @memberof messages.IdentityOracleProofField
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {messages.IdentityOracleProofField} IdentityOracleProofField
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        IdentityOracleProofField.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.messages.IdentityOracleProofField();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.UserID = reader.bytes();
                    break;
                case 2:
                    message.Entity = $root.messages.EntityField.decode(reader, reader.uint32());
                    break;
                case 3:
                    message.OracleSignature = $root.messages.OracleSignatureField.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an IdentityOracleProofField message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof messages.IdentityOracleProofField
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {messages.IdentityOracleProofField} IdentityOracleProofField
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        IdentityOracleProofField.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an IdentityOracleProofField message.
         * @function verify
         * @memberof messages.IdentityOracleProofField
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        IdentityOracleProofField.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.UserID != null && message.hasOwnProperty("UserID"))
                if (!(message.UserID && typeof message.UserID.length === "number" || $util.isString(message.UserID)))
                    return "UserID: buffer expected";
            if (message.Entity != null && message.hasOwnProperty("Entity")) {
                var error = $root.messages.EntityField.verify(message.Entity);
                if (error)
                    return "Entity." + error;
            }
            if (message.OracleSignature != null && message.hasOwnProperty("OracleSignature")) {
                var error = $root.messages.OracleSignatureField.verify(message.OracleSignature);
                if (error)
                    return "OracleSignature." + error;
            }
            return null;
        };

        /**
         * Creates an IdentityOracleProofField message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof messages.IdentityOracleProofField
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {messages.IdentityOracleProofField} IdentityOracleProofField
         */
        IdentityOracleProofField.fromObject = function fromObject(object) {
            if (object instanceof $root.messages.IdentityOracleProofField)
                return object;
            var message = new $root.messages.IdentityOracleProofField();
            if (object.UserID != null)
                if (typeof object.UserID === "string")
                    $util.base64.decode(object.UserID, message.UserID = $util.newBuffer($util.base64.length(object.UserID)), 0);
                else if (object.UserID.length)
                    message.UserID = object.UserID;
            if (object.Entity != null) {
                if (typeof object.Entity !== "object")
                    throw TypeError(".messages.IdentityOracleProofField.Entity: object expected");
                message.Entity = $root.messages.EntityField.fromObject(object.Entity);
            }
            if (object.OracleSignature != null) {
                if (typeof object.OracleSignature !== "object")
                    throw TypeError(".messages.IdentityOracleProofField.OracleSignature: object expected");
                message.OracleSignature = $root.messages.OracleSignatureField.fromObject(object.OracleSignature);
            }
            return message;
        };

        /**
         * Creates a plain object from an IdentityOracleProofField message. Also converts values to other types if specified.
         * @function toObject
         * @memberof messages.IdentityOracleProofField
         * @static
         * @param {messages.IdentityOracleProofField} message IdentityOracleProofField
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        IdentityOracleProofField.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if (options.bytes === String)
                    object.UserID = "";
                else {
                    object.UserID = [];
                    if (options.bytes !== Array)
                        object.UserID = $util.newBuffer(object.UserID);
                }
                object.Entity = null;
                object.OracleSignature = null;
            }
            if (message.UserID != null && message.hasOwnProperty("UserID"))
                object.UserID = options.bytes === String ? $util.base64.encode(message.UserID, 0, message.UserID.length) : options.bytes === Array ? Array.prototype.slice.call(message.UserID) : message.UserID;
            if (message.Entity != null && message.hasOwnProperty("Entity"))
                object.Entity = $root.messages.EntityField.toObject(message.Entity, options);
            if (message.OracleSignature != null && message.hasOwnProperty("OracleSignature"))
                object.OracleSignature = $root.messages.OracleSignatureField.toObject(message.OracleSignature, options);
            return object;
        };

        /**
         * Converts this IdentityOracleProofField to JSON.
         * @function toJSON
         * @memberof messages.IdentityOracleProofField
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        IdentityOracleProofField.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return IdentityOracleProofField;
    })();

    messages.ManagerField = (function() {

        /**
         * Properties of a ManagerField.
         * @memberof messages
         * @interface IManagerField
         * @property {number|null} [Type] ManagerField Type
         * @property {string|null} [Name] ManagerField Name
         */

        /**
         * Constructs a new ManagerField.
         * @memberof messages
         * @classdesc Represents a ManagerField.
         * @implements IManagerField
         * @constructor
         * @param {messages.IManagerField=} [properties] Properties to set
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
         * @memberof messages.ManagerField
         * @instance
         */
        ManagerField.prototype.Type = 0;

        /**
         * ManagerField Name.
         * @member {string} Name
         * @memberof messages.ManagerField
         * @instance
         */
        ManagerField.prototype.Name = "";

        /**
         * Creates a new ManagerField instance using the specified properties.
         * @function create
         * @memberof messages.ManagerField
         * @static
         * @param {messages.IManagerField=} [properties] Properties to set
         * @returns {messages.ManagerField} ManagerField instance
         */
        ManagerField.create = function create(properties) {
            return new ManagerField(properties);
        };

        /**
         * Encodes the specified ManagerField message. Does not implicitly {@link messages.ManagerField.verify|verify} messages.
         * @function encode
         * @memberof messages.ManagerField
         * @static
         * @param {messages.IManagerField} message ManagerField message or plain object to encode
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
         * Encodes the specified ManagerField message, length delimited. Does not implicitly {@link messages.ManagerField.verify|verify} messages.
         * @function encodeDelimited
         * @memberof messages.ManagerField
         * @static
         * @param {messages.IManagerField} message ManagerField message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        ManagerField.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a ManagerField message from the specified reader or buffer.
         * @function decode
         * @memberof messages.ManagerField
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {messages.ManagerField} ManagerField
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        ManagerField.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.messages.ManagerField();
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
         * @memberof messages.ManagerField
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {messages.ManagerField} ManagerField
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
         * @memberof messages.ManagerField
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
         * @memberof messages.ManagerField
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {messages.ManagerField} ManagerField
         */
        ManagerField.fromObject = function fromObject(object) {
            if (object instanceof $root.messages.ManagerField)
                return object;
            var message = new $root.messages.ManagerField();
            if (object.Type != null)
                message.Type = object.Type >>> 0;
            if (object.Name != null)
                message.Name = String(object.Name);
            return message;
        };

        /**
         * Creates a plain object from a ManagerField message. Also converts values to other types if specified.
         * @function toObject
         * @memberof messages.ManagerField
         * @static
         * @param {messages.ManagerField} message ManagerField
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
         * @memberof messages.ManagerField
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        ManagerField.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return ManagerField;
    })();

    messages.OracleSignatureField = (function() {

        /**
         * Properties of an OracleSignatureField.
         * @memberof messages
         * @interface IOracleSignatureField
         * @property {string|null} [OracleURL] OracleSignatureField OracleURL
         * @property {number|null} [BlockHeight] OracleSignatureField BlockHeight
         * @property {messages.IPeriodField|null} [ValidityPeriod] OracleSignatureField ValidityPeriod
         * @property {number|null} [SignatureAlgorithm] OracleSignatureField SignatureAlgorithm
         * @property {Uint8Array|null} [Signature] OracleSignatureField Signature
         */

        /**
         * Constructs a new OracleSignatureField.
         * @memberof messages
         * @classdesc Represents an OracleSignatureField.
         * @implements IOracleSignatureField
         * @constructor
         * @param {messages.IOracleSignatureField=} [properties] Properties to set
         */
        function OracleSignatureField(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * OracleSignatureField OracleURL.
         * @member {string} OracleURL
         * @memberof messages.OracleSignatureField
         * @instance
         */
        OracleSignatureField.prototype.OracleURL = "";

        /**
         * OracleSignatureField BlockHeight.
         * @member {number} BlockHeight
         * @memberof messages.OracleSignatureField
         * @instance
         */
        OracleSignatureField.prototype.BlockHeight = 0;

        /**
         * OracleSignatureField ValidityPeriod.
         * @member {messages.IPeriodField|null|undefined} ValidityPeriod
         * @memberof messages.OracleSignatureField
         * @instance
         */
        OracleSignatureField.prototype.ValidityPeriod = null;

        /**
         * OracleSignatureField SignatureAlgorithm.
         * @member {number} SignatureAlgorithm
         * @memberof messages.OracleSignatureField
         * @instance
         */
        OracleSignatureField.prototype.SignatureAlgorithm = 0;

        /**
         * OracleSignatureField Signature.
         * @member {Uint8Array} Signature
         * @memberof messages.OracleSignatureField
         * @instance
         */
        OracleSignatureField.prototype.Signature = $util.newBuffer([]);

        /**
         * Creates a new OracleSignatureField instance using the specified properties.
         * @function create
         * @memberof messages.OracleSignatureField
         * @static
         * @param {messages.IOracleSignatureField=} [properties] Properties to set
         * @returns {messages.OracleSignatureField} OracleSignatureField instance
         */
        OracleSignatureField.create = function create(properties) {
            return new OracleSignatureField(properties);
        };

        /**
         * Encodes the specified OracleSignatureField message. Does not implicitly {@link messages.OracleSignatureField.verify|verify} messages.
         * @function encode
         * @memberof messages.OracleSignatureField
         * @static
         * @param {messages.IOracleSignatureField} message OracleSignatureField message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        OracleSignatureField.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.OracleURL != null && Object.hasOwnProperty.call(message, "OracleURL"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.OracleURL);
            if (message.BlockHeight != null && Object.hasOwnProperty.call(message, "BlockHeight"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.BlockHeight);
            if (message.ValidityPeriod != null && Object.hasOwnProperty.call(message, "ValidityPeriod"))
                $root.messages.PeriodField.encode(message.ValidityPeriod, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            if (message.SignatureAlgorithm != null && Object.hasOwnProperty.call(message, "SignatureAlgorithm"))
                writer.uint32(/* id 4, wireType 0 =*/32).uint32(message.SignatureAlgorithm);
            if (message.Signature != null && Object.hasOwnProperty.call(message, "Signature"))
                writer.uint32(/* id 5, wireType 2 =*/42).bytes(message.Signature);
            return writer;
        };

        /**
         * Encodes the specified OracleSignatureField message, length delimited. Does not implicitly {@link messages.OracleSignatureField.verify|verify} messages.
         * @function encodeDelimited
         * @memberof messages.OracleSignatureField
         * @static
         * @param {messages.IOracleSignatureField} message OracleSignatureField message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        OracleSignatureField.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an OracleSignatureField message from the specified reader or buffer.
         * @function decode
         * @memberof messages.OracleSignatureField
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {messages.OracleSignatureField} OracleSignatureField
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        OracleSignatureField.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.messages.OracleSignatureField();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.OracleURL = reader.string();
                    break;
                case 2:
                    message.BlockHeight = reader.uint32();
                    break;
                case 3:
                    message.ValidityPeriod = $root.messages.PeriodField.decode(reader, reader.uint32());
                    break;
                case 4:
                    message.SignatureAlgorithm = reader.uint32();
                    break;
                case 5:
                    message.Signature = reader.bytes();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an OracleSignatureField message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof messages.OracleSignatureField
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {messages.OracleSignatureField} OracleSignatureField
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        OracleSignatureField.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an OracleSignatureField message.
         * @function verify
         * @memberof messages.OracleSignatureField
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        OracleSignatureField.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.OracleURL != null && message.hasOwnProperty("OracleURL"))
                if (!$util.isString(message.OracleURL))
                    return "OracleURL: string expected";
            if (message.BlockHeight != null && message.hasOwnProperty("BlockHeight"))
                if (!$util.isInteger(message.BlockHeight))
                    return "BlockHeight: integer expected";
            if (message.ValidityPeriod != null && message.hasOwnProperty("ValidityPeriod")) {
                var error = $root.messages.PeriodField.verify(message.ValidityPeriod);
                if (error)
                    return "ValidityPeriod." + error;
            }
            if (message.SignatureAlgorithm != null && message.hasOwnProperty("SignatureAlgorithm"))
                if (!$util.isInteger(message.SignatureAlgorithm))
                    return "SignatureAlgorithm: integer expected";
            if (message.Signature != null && message.hasOwnProperty("Signature"))
                if (!(message.Signature && typeof message.Signature.length === "number" || $util.isString(message.Signature)))
                    return "Signature: buffer expected";
            return null;
        };

        /**
         * Creates an OracleSignatureField message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof messages.OracleSignatureField
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {messages.OracleSignatureField} OracleSignatureField
         */
        OracleSignatureField.fromObject = function fromObject(object) {
            if (object instanceof $root.messages.OracleSignatureField)
                return object;
            var message = new $root.messages.OracleSignatureField();
            if (object.OracleURL != null)
                message.OracleURL = String(object.OracleURL);
            if (object.BlockHeight != null)
                message.BlockHeight = object.BlockHeight >>> 0;
            if (object.ValidityPeriod != null) {
                if (typeof object.ValidityPeriod !== "object")
                    throw TypeError(".messages.OracleSignatureField.ValidityPeriod: object expected");
                message.ValidityPeriod = $root.messages.PeriodField.fromObject(object.ValidityPeriod);
            }
            if (object.SignatureAlgorithm != null)
                message.SignatureAlgorithm = object.SignatureAlgorithm >>> 0;
            if (object.Signature != null)
                if (typeof object.Signature === "string")
                    $util.base64.decode(object.Signature, message.Signature = $util.newBuffer($util.base64.length(object.Signature)), 0);
                else if (object.Signature.length)
                    message.Signature = object.Signature;
            return message;
        };

        /**
         * Creates a plain object from an OracleSignatureField message. Also converts values to other types if specified.
         * @function toObject
         * @memberof messages.OracleSignatureField
         * @static
         * @param {messages.OracleSignatureField} message OracleSignatureField
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        OracleSignatureField.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                object.OracleURL = "";
                object.BlockHeight = 0;
                object.ValidityPeriod = null;
                object.SignatureAlgorithm = 0;
                if (options.bytes === String)
                    object.Signature = "";
                else {
                    object.Signature = [];
                    if (options.bytes !== Array)
                        object.Signature = $util.newBuffer(object.Signature);
                }
            }
            if (message.OracleURL != null && message.hasOwnProperty("OracleURL"))
                object.OracleURL = message.OracleURL;
            if (message.BlockHeight != null && message.hasOwnProperty("BlockHeight"))
                object.BlockHeight = message.BlockHeight;
            if (message.ValidityPeriod != null && message.hasOwnProperty("ValidityPeriod"))
                object.ValidityPeriod = $root.messages.PeriodField.toObject(message.ValidityPeriod, options);
            if (message.SignatureAlgorithm != null && message.hasOwnProperty("SignatureAlgorithm"))
                object.SignatureAlgorithm = message.SignatureAlgorithm;
            if (message.Signature != null && message.hasOwnProperty("Signature"))
                object.Signature = options.bytes === String ? $util.base64.encode(message.Signature, 0, message.Signature.length) : options.bytes === Array ? Array.prototype.slice.call(message.Signature) : message.Signature;
            return object;
        };

        /**
         * Converts this OracleSignatureField to JSON.
         * @function toJSON
         * @memberof messages.OracleSignatureField
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        OracleSignatureField.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return OracleSignatureField;
    })();

    messages.OutpointField = (function() {

        /**
         * Properties of an OutpointField.
         * @memberof messages
         * @interface IOutpointField
         * @property {Uint8Array|null} [TxId] OutpointField TxId
         * @property {number|null} [OutputIndex] OutpointField OutputIndex
         */

        /**
         * Constructs a new OutpointField.
         * @memberof messages
         * @classdesc Represents an OutpointField.
         * @implements IOutpointField
         * @constructor
         * @param {messages.IOutpointField=} [properties] Properties to set
         */
        function OutpointField(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * OutpointField TxId.
         * @member {Uint8Array} TxId
         * @memberof messages.OutpointField
         * @instance
         */
        OutpointField.prototype.TxId = $util.newBuffer([]);

        /**
         * OutpointField OutputIndex.
         * @member {number} OutputIndex
         * @memberof messages.OutpointField
         * @instance
         */
        OutpointField.prototype.OutputIndex = 0;

        /**
         * Creates a new OutpointField instance using the specified properties.
         * @function create
         * @memberof messages.OutpointField
         * @static
         * @param {messages.IOutpointField=} [properties] Properties to set
         * @returns {messages.OutpointField} OutpointField instance
         */
        OutpointField.create = function create(properties) {
            return new OutpointField(properties);
        };

        /**
         * Encodes the specified OutpointField message. Does not implicitly {@link messages.OutpointField.verify|verify} messages.
         * @function encode
         * @memberof messages.OutpointField
         * @static
         * @param {messages.IOutpointField} message OutpointField message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        OutpointField.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.TxId != null && Object.hasOwnProperty.call(message, "TxId"))
                writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.TxId);
            if (message.OutputIndex != null && Object.hasOwnProperty.call(message, "OutputIndex"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint32(message.OutputIndex);
            return writer;
        };

        /**
         * Encodes the specified OutpointField message, length delimited. Does not implicitly {@link messages.OutpointField.verify|verify} messages.
         * @function encodeDelimited
         * @memberof messages.OutpointField
         * @static
         * @param {messages.IOutpointField} message OutpointField message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        OutpointField.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an OutpointField message from the specified reader or buffer.
         * @function decode
         * @memberof messages.OutpointField
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {messages.OutpointField} OutpointField
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        OutpointField.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.messages.OutpointField();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.TxId = reader.bytes();
                    break;
                case 2:
                    message.OutputIndex = reader.uint32();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an OutpointField message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof messages.OutpointField
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {messages.OutpointField} OutpointField
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        OutpointField.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an OutpointField message.
         * @function verify
         * @memberof messages.OutpointField
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        OutpointField.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.TxId != null && message.hasOwnProperty("TxId"))
                if (!(message.TxId && typeof message.TxId.length === "number" || $util.isString(message.TxId)))
                    return "TxId: buffer expected";
            if (message.OutputIndex != null && message.hasOwnProperty("OutputIndex"))
                if (!$util.isInteger(message.OutputIndex))
                    return "OutputIndex: integer expected";
            return null;
        };

        /**
         * Creates an OutpointField message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof messages.OutpointField
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {messages.OutpointField} OutpointField
         */
        OutpointField.fromObject = function fromObject(object) {
            if (object instanceof $root.messages.OutpointField)
                return object;
            var message = new $root.messages.OutpointField();
            if (object.TxId != null)
                if (typeof object.TxId === "string")
                    $util.base64.decode(object.TxId, message.TxId = $util.newBuffer($util.base64.length(object.TxId)), 0);
                else if (object.TxId.length)
                    message.TxId = object.TxId;
            if (object.OutputIndex != null)
                message.OutputIndex = object.OutputIndex >>> 0;
            return message;
        };

        /**
         * Creates a plain object from an OutpointField message. Also converts values to other types if specified.
         * @function toObject
         * @memberof messages.OutpointField
         * @static
         * @param {messages.OutpointField} message OutpointField
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        OutpointField.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if (options.bytes === String)
                    object.TxId = "";
                else {
                    object.TxId = [];
                    if (options.bytes !== Array)
                        object.TxId = $util.newBuffer(object.TxId);
                }
                object.OutputIndex = 0;
            }
            if (message.TxId != null && message.hasOwnProperty("TxId"))
                object.TxId = options.bytes === String ? $util.base64.encode(message.TxId, 0, message.TxId.length) : options.bytes === Array ? Array.prototype.slice.call(message.TxId) : message.TxId;
            if (message.OutputIndex != null && message.hasOwnProperty("OutputIndex"))
                object.OutputIndex = message.OutputIndex;
            return object;
        };

        /**
         * Converts this OutpointField to JSON.
         * @function toJSON
         * @memberof messages.OutpointField
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        OutpointField.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return OutpointField;
    })();

    messages.OutputTagField = (function() {

        /**
         * Properties of an OutputTagField.
         * @memberof messages
         * @interface IOutputTagField
         * @property {string|null} [Tag] OutputTagField Tag
         */

        /**
         * Constructs a new OutputTagField.
         * @memberof messages
         * @classdesc Represents an OutputTagField.
         * @implements IOutputTagField
         * @constructor
         * @param {messages.IOutputTagField=} [properties] Properties to set
         */
        function OutputTagField(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * OutputTagField Tag.
         * @member {string} Tag
         * @memberof messages.OutputTagField
         * @instance
         */
        OutputTagField.prototype.Tag = "";

        /**
         * Creates a new OutputTagField instance using the specified properties.
         * @function create
         * @memberof messages.OutputTagField
         * @static
         * @param {messages.IOutputTagField=} [properties] Properties to set
         * @returns {messages.OutputTagField} OutputTagField instance
         */
        OutputTagField.create = function create(properties) {
            return new OutputTagField(properties);
        };

        /**
         * Encodes the specified OutputTagField message. Does not implicitly {@link messages.OutputTagField.verify|verify} messages.
         * @function encode
         * @memberof messages.OutputTagField
         * @static
         * @param {messages.IOutputTagField} message OutputTagField message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        OutputTagField.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Tag != null && Object.hasOwnProperty.call(message, "Tag"))
                writer.uint32(/* id 1, wireType 2 =*/10).string(message.Tag);
            return writer;
        };

        /**
         * Encodes the specified OutputTagField message, length delimited. Does not implicitly {@link messages.OutputTagField.verify|verify} messages.
         * @function encodeDelimited
         * @memberof messages.OutputTagField
         * @static
         * @param {messages.IOutputTagField} message OutputTagField message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        OutputTagField.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes an OutputTagField message from the specified reader or buffer.
         * @function decode
         * @memberof messages.OutputTagField
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {messages.OutputTagField} OutputTagField
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        OutputTagField.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.messages.OutputTagField();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.Tag = reader.string();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes an OutputTagField message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof messages.OutputTagField
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {messages.OutputTagField} OutputTagField
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        OutputTagField.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies an OutputTagField message.
         * @function verify
         * @memberof messages.OutputTagField
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        OutputTagField.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.Tag != null && message.hasOwnProperty("Tag"))
                if (!$util.isString(message.Tag))
                    return "Tag: string expected";
            return null;
        };

        /**
         * Creates an OutputTagField message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof messages.OutputTagField
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {messages.OutputTagField} OutputTagField
         */
        OutputTagField.fromObject = function fromObject(object) {
            if (object instanceof $root.messages.OutputTagField)
                return object;
            var message = new $root.messages.OutputTagField();
            if (object.Tag != null)
                message.Tag = String(object.Tag);
            return message;
        };

        /**
         * Creates a plain object from an OutputTagField message. Also converts values to other types if specified.
         * @function toObject
         * @memberof messages.OutputTagField
         * @static
         * @param {messages.OutputTagField} message OutputTagField
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        OutputTagField.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults)
                object.Tag = "";
            if (message.Tag != null && message.hasOwnProperty("Tag"))
                object.Tag = message.Tag;
            return object;
        };

        /**
         * Converts this OutputTagField to JSON.
         * @function toJSON
         * @memberof messages.OutputTagField
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        OutputTagField.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return OutputTagField;
    })();

    messages.PaymailProofField = (function() {

        /**
         * Properties of a PaymailProofField.
         * @memberof messages
         * @interface IPaymailProofField
         * @property {Uint8Array|null} [UserID] PaymailProofField UserID
         * @property {string|null} [Handle] PaymailProofField Handle
         * @property {messages.IOracleSignatureField|null} [OracleSignature] PaymailProofField OracleSignature
         */

        /**
         * Constructs a new PaymailProofField.
         * @memberof messages
         * @classdesc Represents a PaymailProofField.
         * @implements IPaymailProofField
         * @constructor
         * @param {messages.IPaymailProofField=} [properties] Properties to set
         */
        function PaymailProofField(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * PaymailProofField UserID.
         * @member {Uint8Array} UserID
         * @memberof messages.PaymailProofField
         * @instance
         */
        PaymailProofField.prototype.UserID = $util.newBuffer([]);

        /**
         * PaymailProofField Handle.
         * @member {string} Handle
         * @memberof messages.PaymailProofField
         * @instance
         */
        PaymailProofField.prototype.Handle = "";

        /**
         * PaymailProofField OracleSignature.
         * @member {messages.IOracleSignatureField|null|undefined} OracleSignature
         * @memberof messages.PaymailProofField
         * @instance
         */
        PaymailProofField.prototype.OracleSignature = null;

        /**
         * Creates a new PaymailProofField instance using the specified properties.
         * @function create
         * @memberof messages.PaymailProofField
         * @static
         * @param {messages.IPaymailProofField=} [properties] Properties to set
         * @returns {messages.PaymailProofField} PaymailProofField instance
         */
        PaymailProofField.create = function create(properties) {
            return new PaymailProofField(properties);
        };

        /**
         * Encodes the specified PaymailProofField message. Does not implicitly {@link messages.PaymailProofField.verify|verify} messages.
         * @function encode
         * @memberof messages.PaymailProofField
         * @static
         * @param {messages.IPaymailProofField} message PaymailProofField message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PaymailProofField.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.UserID != null && Object.hasOwnProperty.call(message, "UserID"))
                writer.uint32(/* id 1, wireType 2 =*/10).bytes(message.UserID);
            if (message.Handle != null && Object.hasOwnProperty.call(message, "Handle"))
                writer.uint32(/* id 2, wireType 2 =*/18).string(message.Handle);
            if (message.OracleSignature != null && Object.hasOwnProperty.call(message, "OracleSignature"))
                $root.messages.OracleSignatureField.encode(message.OracleSignature, writer.uint32(/* id 3, wireType 2 =*/26).fork()).ldelim();
            return writer;
        };

        /**
         * Encodes the specified PaymailProofField message, length delimited. Does not implicitly {@link messages.PaymailProofField.verify|verify} messages.
         * @function encodeDelimited
         * @memberof messages.PaymailProofField
         * @static
         * @param {messages.IPaymailProofField} message PaymailProofField message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PaymailProofField.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a PaymailProofField message from the specified reader or buffer.
         * @function decode
         * @memberof messages.PaymailProofField
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {messages.PaymailProofField} PaymailProofField
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PaymailProofField.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.messages.PaymailProofField();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.UserID = reader.bytes();
                    break;
                case 2:
                    message.Handle = reader.string();
                    break;
                case 3:
                    message.OracleSignature = $root.messages.OracleSignatureField.decode(reader, reader.uint32());
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a PaymailProofField message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof messages.PaymailProofField
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {messages.PaymailProofField} PaymailProofField
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PaymailProofField.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a PaymailProofField message.
         * @function verify
         * @memberof messages.PaymailProofField
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        PaymailProofField.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.UserID != null && message.hasOwnProperty("UserID"))
                if (!(message.UserID && typeof message.UserID.length === "number" || $util.isString(message.UserID)))
                    return "UserID: buffer expected";
            if (message.Handle != null && message.hasOwnProperty("Handle"))
                if (!$util.isString(message.Handle))
                    return "Handle: string expected";
            if (message.OracleSignature != null && message.hasOwnProperty("OracleSignature")) {
                var error = $root.messages.OracleSignatureField.verify(message.OracleSignature);
                if (error)
                    return "OracleSignature." + error;
            }
            return null;
        };

        /**
         * Creates a PaymailProofField message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof messages.PaymailProofField
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {messages.PaymailProofField} PaymailProofField
         */
        PaymailProofField.fromObject = function fromObject(object) {
            if (object instanceof $root.messages.PaymailProofField)
                return object;
            var message = new $root.messages.PaymailProofField();
            if (object.UserID != null)
                if (typeof object.UserID === "string")
                    $util.base64.decode(object.UserID, message.UserID = $util.newBuffer($util.base64.length(object.UserID)), 0);
                else if (object.UserID.length)
                    message.UserID = object.UserID;
            if (object.Handle != null)
                message.Handle = String(object.Handle);
            if (object.OracleSignature != null) {
                if (typeof object.OracleSignature !== "object")
                    throw TypeError(".messages.PaymailProofField.OracleSignature: object expected");
                message.OracleSignature = $root.messages.OracleSignatureField.fromObject(object.OracleSignature);
            }
            return message;
        };

        /**
         * Creates a plain object from a PaymailProofField message. Also converts values to other types if specified.
         * @function toObject
         * @memberof messages.PaymailProofField
         * @static
         * @param {messages.PaymailProofField} message PaymailProofField
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        PaymailProofField.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if (options.bytes === String)
                    object.UserID = "";
                else {
                    object.UserID = [];
                    if (options.bytes !== Array)
                        object.UserID = $util.newBuffer(object.UserID);
                }
                object.Handle = "";
                object.OracleSignature = null;
            }
            if (message.UserID != null && message.hasOwnProperty("UserID"))
                object.UserID = options.bytes === String ? $util.base64.encode(message.UserID, 0, message.UserID.length) : options.bytes === Array ? Array.prototype.slice.call(message.UserID) : message.UserID;
            if (message.Handle != null && message.hasOwnProperty("Handle"))
                object.Handle = message.Handle;
            if (message.OracleSignature != null && message.hasOwnProperty("OracleSignature"))
                object.OracleSignature = $root.messages.OracleSignatureField.toObject(message.OracleSignature, options);
            return object;
        };

        /**
         * Converts this PaymailProofField to JSON.
         * @function toJSON
         * @memberof messages.PaymailProofField
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        PaymailProofField.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return PaymailProofField;
    })();

    messages.PeriodField = (function() {

        /**
         * Properties of a PeriodField.
         * @memberof messages
         * @interface IPeriodField
         * @property {number|Long|null} [Begin] PeriodField Begin
         * @property {number|Long|null} [End] PeriodField End
         */

        /**
         * Constructs a new PeriodField.
         * @memberof messages
         * @classdesc Represents a PeriodField.
         * @implements IPeriodField
         * @constructor
         * @param {messages.IPeriodField=} [properties] Properties to set
         */
        function PeriodField(properties) {
            if (properties)
                for (var keys = Object.keys(properties), i = 0; i < keys.length; ++i)
                    if (properties[keys[i]] != null)
                        this[keys[i]] = properties[keys[i]];
        }

        /**
         * PeriodField Begin.
         * @member {number|Long} Begin
         * @memberof messages.PeriodField
         * @instance
         */
        PeriodField.prototype.Begin = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * PeriodField End.
         * @member {number|Long} End
         * @memberof messages.PeriodField
         * @instance
         */
        PeriodField.prototype.End = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * Creates a new PeriodField instance using the specified properties.
         * @function create
         * @memberof messages.PeriodField
         * @static
         * @param {messages.IPeriodField=} [properties] Properties to set
         * @returns {messages.PeriodField} PeriodField instance
         */
        PeriodField.create = function create(properties) {
            return new PeriodField(properties);
        };

        /**
         * Encodes the specified PeriodField message. Does not implicitly {@link messages.PeriodField.verify|verify} messages.
         * @function encode
         * @memberof messages.PeriodField
         * @static
         * @param {messages.IPeriodField} message PeriodField message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PeriodField.encode = function encode(message, writer) {
            if (!writer)
                writer = $Writer.create();
            if (message.Begin != null && Object.hasOwnProperty.call(message, "Begin"))
                writer.uint32(/* id 1, wireType 0 =*/8).uint64(message.Begin);
            if (message.End != null && Object.hasOwnProperty.call(message, "End"))
                writer.uint32(/* id 2, wireType 0 =*/16).uint64(message.End);
            return writer;
        };

        /**
         * Encodes the specified PeriodField message, length delimited. Does not implicitly {@link messages.PeriodField.verify|verify} messages.
         * @function encodeDelimited
         * @memberof messages.PeriodField
         * @static
         * @param {messages.IPeriodField} message PeriodField message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        PeriodField.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a PeriodField message from the specified reader or buffer.
         * @function decode
         * @memberof messages.PeriodField
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {messages.PeriodField} PeriodField
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PeriodField.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.messages.PeriodField();
            while (reader.pos < end) {
                var tag = reader.uint32();
                switch (tag >>> 3) {
                case 1:
                    message.Begin = reader.uint64();
                    break;
                case 2:
                    message.End = reader.uint64();
                    break;
                default:
                    reader.skipType(tag & 7);
                    break;
                }
            }
            return message;
        };

        /**
         * Decodes a PeriodField message from the specified reader or buffer, length delimited.
         * @function decodeDelimited
         * @memberof messages.PeriodField
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {messages.PeriodField} PeriodField
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        PeriodField.decodeDelimited = function decodeDelimited(reader) {
            if (!(reader instanceof $Reader))
                reader = new $Reader(reader);
            return this.decode(reader, reader.uint32());
        };

        /**
         * Verifies a PeriodField message.
         * @function verify
         * @memberof messages.PeriodField
         * @static
         * @param {Object.<string,*>} message Plain object to verify
         * @returns {string|null} `null` if valid, otherwise the reason why it is not
         */
        PeriodField.verify = function verify(message) {
            if (typeof message !== "object" || message === null)
                return "object expected";
            if (message.Begin != null && message.hasOwnProperty("Begin"))
                if (!$util.isInteger(message.Begin) && !(message.Begin && $util.isInteger(message.Begin.low) && $util.isInteger(message.Begin.high)))
                    return "Begin: integer|Long expected";
            if (message.End != null && message.hasOwnProperty("End"))
                if (!$util.isInteger(message.End) && !(message.End && $util.isInteger(message.End.low) && $util.isInteger(message.End.high)))
                    return "End: integer|Long expected";
            return null;
        };

        /**
         * Creates a PeriodField message from a plain object. Also converts values to their respective internal types.
         * @function fromObject
         * @memberof messages.PeriodField
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {messages.PeriodField} PeriodField
         */
        PeriodField.fromObject = function fromObject(object) {
            if (object instanceof $root.messages.PeriodField)
                return object;
            var message = new $root.messages.PeriodField();
            if (object.Begin != null)
                if ($util.Long)
                    (message.Begin = $util.Long.fromValue(object.Begin)).unsigned = true;
                else if (typeof object.Begin === "string")
                    message.Begin = parseInt(object.Begin, 10);
                else if (typeof object.Begin === "number")
                    message.Begin = object.Begin;
                else if (typeof object.Begin === "object")
                    message.Begin = new $util.LongBits(object.Begin.low >>> 0, object.Begin.high >>> 0).toNumber(true);
            if (object.End != null)
                if ($util.Long)
                    (message.End = $util.Long.fromValue(object.End)).unsigned = true;
                else if (typeof object.End === "string")
                    message.End = parseInt(object.End, 10);
                else if (typeof object.End === "number")
                    message.End = object.End;
                else if (typeof object.End === "object")
                    message.End = new $util.LongBits(object.End.low >>> 0, object.End.high >>> 0).toNumber(true);
            return message;
        };

        /**
         * Creates a plain object from a PeriodField message. Also converts values to other types if specified.
         * @function toObject
         * @memberof messages.PeriodField
         * @static
         * @param {messages.PeriodField} message PeriodField
         * @param {$protobuf.IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         */
        PeriodField.toObject = function toObject(message, options) {
            if (!options)
                options = {};
            var object = {};
            if (options.defaults) {
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.Begin = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.Begin = options.longs === String ? "0" : 0;
                if ($util.Long) {
                    var long = new $util.Long(0, 0, true);
                    object.End = options.longs === String ? long.toString() : options.longs === Number ? long.toNumber() : long;
                } else
                    object.End = options.longs === String ? "0" : 0;
            }
            if (message.Begin != null && message.hasOwnProperty("Begin"))
                if (typeof message.Begin === "number")
                    object.Begin = options.longs === String ? String(message.Begin) : message.Begin;
                else
                    object.Begin = options.longs === String ? $util.Long.prototype.toString.call(message.Begin) : options.longs === Number ? new $util.LongBits(message.Begin.low >>> 0, message.Begin.high >>> 0).toNumber(true) : message.Begin;
            if (message.End != null && message.hasOwnProperty("End"))
                if (typeof message.End === "number")
                    object.End = options.longs === String ? String(message.End) : message.End;
                else
                    object.End = options.longs === String ? $util.Long.prototype.toString.call(message.End) : options.longs === Number ? new $util.LongBits(message.End.low >>> 0, message.End.high >>> 0).toNumber(true) : message.End;
            return object;
        };

        /**
         * Converts this PeriodField to JSON.
         * @function toJSON
         * @memberof messages.PeriodField
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        PeriodField.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return PeriodField;
    })();

    messages.TargetAddressField = (function() {

        /**
         * Properties of a TargetAddressField.
         * @memberof messages
         * @interface ITargetAddressField
         * @property {Uint8Array|null} [Address] TargetAddressField Address
         * @property {number|Long|null} [Quantity] TargetAddressField Quantity
         */

        /**
         * Constructs a new TargetAddressField.
         * @memberof messages
         * @classdesc Represents a TargetAddressField.
         * @implements ITargetAddressField
         * @constructor
         * @param {messages.ITargetAddressField=} [properties] Properties to set
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
         * @memberof messages.TargetAddressField
         * @instance
         */
        TargetAddressField.prototype.Address = $util.newBuffer([]);

        /**
         * TargetAddressField Quantity.
         * @member {number|Long} Quantity
         * @memberof messages.TargetAddressField
         * @instance
         */
        TargetAddressField.prototype.Quantity = $util.Long ? $util.Long.fromBits(0,0,true) : 0;

        /**
         * Creates a new TargetAddressField instance using the specified properties.
         * @function create
         * @memberof messages.TargetAddressField
         * @static
         * @param {messages.ITargetAddressField=} [properties] Properties to set
         * @returns {messages.TargetAddressField} TargetAddressField instance
         */
        TargetAddressField.create = function create(properties) {
            return new TargetAddressField(properties);
        };

        /**
         * Encodes the specified TargetAddressField message. Does not implicitly {@link messages.TargetAddressField.verify|verify} messages.
         * @function encode
         * @memberof messages.TargetAddressField
         * @static
         * @param {messages.ITargetAddressField} message TargetAddressField message or plain object to encode
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
         * Encodes the specified TargetAddressField message, length delimited. Does not implicitly {@link messages.TargetAddressField.verify|verify} messages.
         * @function encodeDelimited
         * @memberof messages.TargetAddressField
         * @static
         * @param {messages.ITargetAddressField} message TargetAddressField message or plain object to encode
         * @param {$protobuf.Writer} [writer] Writer to encode to
         * @returns {$protobuf.Writer} Writer
         */
        TargetAddressField.encodeDelimited = function encodeDelimited(message, writer) {
            return this.encode(message, writer).ldelim();
        };

        /**
         * Decodes a TargetAddressField message from the specified reader or buffer.
         * @function decode
         * @memberof messages.TargetAddressField
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @param {number} [length] Message length if known beforehand
         * @returns {messages.TargetAddressField} TargetAddressField
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        TargetAddressField.decode = function decode(reader, length) {
            if (!(reader instanceof $Reader))
                reader = $Reader.create(reader);
            var end = length === undefined ? reader.len : reader.pos + length, message = new $root.messages.TargetAddressField();
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
         * @memberof messages.TargetAddressField
         * @static
         * @param {$protobuf.Reader|Uint8Array} reader Reader or buffer to decode from
         * @returns {messages.TargetAddressField} TargetAddressField
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
         * @memberof messages.TargetAddressField
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
         * @memberof messages.TargetAddressField
         * @static
         * @param {Object.<string,*>} object Plain object
         * @returns {messages.TargetAddressField} TargetAddressField
         */
        TargetAddressField.fromObject = function fromObject(object) {
            if (object instanceof $root.messages.TargetAddressField)
                return object;
            var message = new $root.messages.TargetAddressField();
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
         * @memberof messages.TargetAddressField
         * @static
         * @param {messages.TargetAddressField} message TargetAddressField
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
         * @memberof messages.TargetAddressField
         * @instance
         * @returns {Object.<string,*>} JSON object
         */
        TargetAddressField.prototype.toJSON = function toJSON() {
            return this.constructor.toObject(this, $protobuf.util.toJSONOptions);
        };

        return TargetAddressField;
    })();

    return messages;
})();

module.exports = $root;
