import dict from "./dict.json";

export default class Profanity {
    static dict: string[] = dict;

    static filter(word: string) {
        if (!word) throw new Error('empty string passed')
        if (typeof word !== 'string') throw new Error('string expected')

        return this.dict.some(dictWord => dictWord.toLowerCase().includes(word))
    }

    static flag(text: string) {
        if (!text) throw new Error('empty string passed')
        if (typeof text !== 'string') throw new Error('string expected')

        return this.dict.some(word => text.toLowerCase().includes(word))
    }

    static badwords(text: string) {
        if (!text) throw new Error('empty string passed')
        if (typeof text !== 'string') throw new Error('string expected')

        return this.dict.filter(word => text.toLowerCase().includes(word))
    }

    static censor(text: string, replacement = '***') {
        if (!text) throw new Error('empty string passed')
        if (typeof text !== 'string') throw new Error('string expected')

        const regex = new RegExp(`\\b(${this.dict.join('|')})\\b`, 'gi')
        return text.replace(regex, replacement)
    }

    static analyze(text: string) {
        if (!text) throw new Error('empty string passed')
        if (typeof text !== 'string') throw new Error('string expected')

        const badwords = this.dict.filter(word => text.toLowerCase().includes(word))
        const words = text.split(' ')
        const count = badwords.length
        const locations = badwords.map(word => {
            const index = text.toLowerCase().indexOf(word)
            return {
                word,
                index
            }
        })
        const censored = this.censor(text)

        return {
            text,
            words: words.length,
            censored: censored,
            badwords,
            count,
            locations
        }
    }
}