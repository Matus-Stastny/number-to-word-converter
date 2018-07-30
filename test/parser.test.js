const parser = require('../parser');

describe('Parser', () => {
    test('gets proper letter from number', () => {
        const lettersFrom2 = parser.getWordsFromNumbers('2').map(i => i.text);
        expect(lettersFrom2).toContain('a');
        expect(lettersFrom2).toContain('b');
        expect(lettersFrom2).toContain('c');
    });

    test('gets proper letters from numbers combination', () => {
        const lettersFrom23 = parser.getWordsFromNumbers('23').map(i => i.text);
        expect(lettersFrom23).toContain('ad');
        expect(lettersFrom23).toContain('be');
        expect(lettersFrom23).toContain('cf');
    });

    test('gets proper length of words from 3 numbers comination', () => {
        const words = parser.getWordsFromNumbers('234').map(i => i.text);
        expect(words[0].length).toBe(3);
        expect(words[1].length).toBe(3);
    });
});
