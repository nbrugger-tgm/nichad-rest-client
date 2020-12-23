/**
 * OpenAPI definition
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: v0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from './models';
import { Chat } from './chat';
import { User } from './user';

export class Message {
    'chat'?: Chat;
    'sendingTime'?: Date;
    'sender'?: User;
    'referenceMessage'?: Message;
    'receiveTime'?: Date;
    'readBy'?: Set<User>;
    'text'?: Array<string>;
    'readByAll'?: boolean;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "chat",
            "baseName": "chat",
            "type": "Chat"
        },
        {
            "name": "sendingTime",
            "baseName": "sendingTime",
            "type": "Date"
        },
        {
            "name": "sender",
            "baseName": "sender",
            "type": "User"
        },
        {
            "name": "referenceMessage",
            "baseName": "referenceMessage",
            "type": "Message"
        },
        {
            "name": "receiveTime",
            "baseName": "receiveTime",
            "type": "Date"
        },
        {
            "name": "readBy",
            "baseName": "readBy",
            "type": "Set<User>"
        },
        {
            "name": "text",
            "baseName": "text",
            "type": "Array<string>"
        },
        {
            "name": "readByAll",
            "baseName": "readByAll",
            "type": "boolean"
        }    ];

    static getAttributeTypeMap() {
        return Message.attributeTypeMap;
    }
}

