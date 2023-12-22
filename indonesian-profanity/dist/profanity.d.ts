export default class Profanity {
    static dict: string[];
    static filter(word: string): boolean;
    static flag(text: string): boolean;
    static badwords(text: string): string[];
    static censor(text: string, replacement?: string): string;
    static analyze(text: string): {
        text: string;
        words: number;
        censored: string;
        badwords: string[];
        count: number;
        locations: {
            word: string;
            index: number;
        }[];
    };
}
