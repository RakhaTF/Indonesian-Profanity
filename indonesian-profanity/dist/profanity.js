"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var dict_json_1 = __importDefault(require("./dict.json"));
var Profanity = /** @class */ (function () {
    function Profanity() {
    }
    Profanity.filter = function (word) {
        if (!word)
            throw new Error('empty string passed');
        if (typeof word !== 'string')
            throw new Error('string expected');
        return this.dict.some(function (dictWord) { return dictWord.toLowerCase().includes(word); });
    };
    Profanity.dict = dict_json_1.default;
    return Profanity;
}());
exports.default = Profanity;
