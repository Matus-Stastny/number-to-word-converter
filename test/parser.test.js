// @flow
const _ = require('lodash');
const parser = require('../parser');
const dictionary = require('../dictionary');

describe('Parser', () => {
    test('getWordsFromNumbers returns proper letter from number', () => {
        const lettersFrom2 = parser.getWordsFromNumbers('2').map((i: string): string => i.text);
        expect(lettersFrom2).toBeDefined();
        expect(lettersFrom2).toContain('a');
        expect(lettersFrom2).toContain('b');
        expect(lettersFrom2).toContain('c');

        const lettersFrom4 = parser.getWordsFromNumbers('4').map((i: string): string => i.text);
        expect(lettersFrom4).toBeDefined();
        expect(lettersFrom4).toContain('g');
        expect(lettersFrom4).toContain('h');
        expect(lettersFrom4).toContain('i');

        const lettersFrom7 = parser.getWordsFromNumbers('7').map((i: string): string => i.text);
        expect(lettersFrom7).toBeDefined();
        expect(lettersFrom7).toContain('p');
        expect(lettersFrom7).toContain('q');
        expect(lettersFrom7).toContain('r');
        expect(lettersFrom7).toContain('s');
    });

    test('getWordsFromNumbers returns proper letters from numbers combination', () => {
        const lettersFrom23 = parser.getWordsFromNumbers('35').map((i: string): string => i.text);
        expect(lettersFrom23).toBeDefined();
        expect(lettersFrom23).toContain('dj');
        expect(lettersFrom23).toContain('ek');
        expect(lettersFrom23).toContain('fl');
    });

    test('getWordsFromNumbers returns proper length of words from 3 numbers combination', () => {
        const words = parser.getWordsFromNumbers('689').map((i: string): string => i.text);
        expect(words).toBeDefined();
        expect(words[0].length).toBe(3);
        expect(words[1].length).toBe(3);
    });

    test('getWordsFromNumbers returns proper length of words from 5 numbers combination', () => {
        const words = parser.getWordsFromNumbers('98765').map((i: string): string => i.text);
        expect(words).toBeDefined();
        expect(words[0].length).toBe(5);
        expect(words[1].length).toBe(5);
    });

    test('getWordsFromNumbers returns proper words from 3 numbers combination', () => {
        const words = parser.getWordsFromNumbers('689').map((i: string): string => i.text);
        expect(words).toBeDefined();

        expect(words).toContain('mtw');
        expect(words).toContain('nux');
        expect(words).toContain('ovy');
        expect(words).toContain('mtz');
    });

    test('getWordsFromNumbers gets proper words from same number combination', () => {
        const words = parser.getWordsFromNumbers('444').map((i: string): string => i.text);
        expect(words).toBeDefined();
        expect(words).toContain('ghi');
        expect(words).toContain('ggh');
        expect(words).toContain('hhi');
        expect(words).toContain('ihg');
    });

    test('checkWord gets proper true from common english words stored in dictionary', () => {
        const aWord = _.get(dictionary, 'a.2.[0]'); // am
        expect(parser.checkWord(aWord)).toBe(true);
        const dWord = _.get(dictionary, 'd.3.[1]'); // day
        expect(parser.checkWord(dWord)).toBe(true);
        const sWord = _.get(dictionary, 's.4.[2]'); // sail
        expect(parser.checkWord(sWord)).toBe(true);
    });

    test('checkWord gets proper false from non-sense letters', () => {
        expect(parser.checkWord('acd')).toBe(false);
        expect(parser.checkWord('xyt')).toBe(false);
        expect(parser.checkWord('bbt')).toBe(false);
    });

    test('getNumbersToCharactersArr gets proper letters data from numbers', () => {
        expect(parser.getNumbersToCharactersArr('23')).toBeDefined();
        expect(parser.getNumbersToCharactersArr('23')).toEqual([parser.keyboardData['2'], parser.keyboardData['3']]);
        expect(parser.getNumbersToCharactersArr('789')).toBeDefined();
        expect(parser.getNumbersToCharactersArr('789')).toEqual([
            parser.keyboardData['7'],
            parser.keyboardData['8'],
            parser.keyboardData['9']
        ]);
    });
});
