import dict from "./dict.json";

export default class Profanity{
    static dict: string[] = dict;
    
    static filter(word: string){
        if (!word) throw new Error('empty string passed')
        if (typeof word !== 'string') throw new Error('string expected')

        return this.dict.some(dictWord => dictWord.toLowerCase().includes(word))
    }
}