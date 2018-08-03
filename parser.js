// @flow
const _ = require('lodash');
const dictionary = require('./dictionary');

type ParserResult = {
    text: string,
    isRealWord: boolean
};

const data = {
    '2': ['a', 'b', 'c'],
    '3': ['d', 'e', 'f'],
    '4': ['g', 'h', 'i'],
    '5': ['j', 'k', 'l'],
    '6': ['m', 'n', 'o'],
    '7': ['p', 'q', 'r', 's'],
    '8': ['t', 'u', 'v'],
    '9': ['w', 'x', 'y', 'z']
};

const numbersToCharactersArr = (numbers: string): Array<Array<string>> => {
    return numbers.split('').map((item: string): Array<string> => data[item]);
};

const combine = (
    left: Array<string>,
    right: Array<string>,
    next: Array<Array<string>>,
    buffer: Array<string>
): Array<string> => {
    if (_.isEmpty(left) && _.isEmpty(next)) {
        return buffer;
    } else if (_.isEmpty(left)) {
        return combine(buffer, _.head(next), _.tail(next), buffer);
    } else if (_.isEmpty(right)) {
        return left;
    } else {
        const res = right.map((rightChar: string): string => `${_.head(left)}${rightChar}`);
        return combine(_.tail(left), right, next, [...buffer, ...res]);
    }
};

const checkWord = (word: string): boolean => {
    if (!dictionary[word.charAt(0)]) {
        return false;
    }
    return _.includes(dictionary[word.charAt(0)][word.length.toString()], word);
};

const getWordsFromNumbers = (numbers: Array<string>): Array<ParserResult> => {
    const charsArr = numbersToCharactersArr(numbers);
    return combine(_.head(charsArr), _.head(_.tail(charsArr)), _.tail(_.tail(charsArr)), [])
        .filter((word: string): boolean => word.length === charsArr.length)
        .map((word: string): ParserResult => ({
            text: word,
            isRealWord: checkWord(word)
        }));
};

module.exports.getWordsFromNumbers = getWordsFromNumbers;
