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
    Profanity.flag = function (text) {
        if (!text)
            throw new Error('empty string passed');
        if (typeof text !== 'string')
            throw new Error('string expected');
        return this.dict.some(function (word) { return text.toLowerCase().includes(word); });
    };
    Profanity.badwords = function (text) {
        if (!text)
            throw new Error('empty string passed');
        if (typeof text !== 'string')
            throw new Error('string expected');
        return this.dict.filter(function (word) { return text.toLowerCase().includes(word); });
    };
    Profanity.censor = function (text, replacement) {
        if (replacement === void 0) { replacement = '***'; }
        if (!text)
            throw new Error('empty string passed');
        if (typeof text !== 'string')
            throw new Error('string expected');
        var regex = new RegExp("\\b(".concat(this.dict.join('|'), ")\\b"), 'gi');
        return text.replace(regex, replacement);
    };
    Profanity.analyze = function (text) {
        if (!text)
            throw new Error('empty string passed');
        if (typeof text !== 'string')
            throw new Error('string expected');
        var badwords = this.dict.filter(function (word) { return text.toLowerCase().includes(word); });
        var words = text.split(' ');
        var count = badwords.length;
        var locations = badwords.map(function (word) {
            var index = text.toLowerCase().indexOf(word);
            return {
                word: word,
                index: index
            };
        });
        var censored = this.censor(text);
        return {
            text: text,
            words: words.length,
            censored: censored,
            badwords: badwords,
            count: count,
            locations: locations
        };
    };
    Profanity.dict = dict_json_1.default;
    return Profanity;
}());
exports.default = Profanity;
