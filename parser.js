const _ = require('lodash');

const data = {
    2: ['a', 'b', 'c'],
    3: ['d', 'e', 'f'],
    4: ['g', 'h', 'i'],
    5: ['j', 'k', 'l'],
    6: ['m', 'n', 'o'],
    7: ['p', 'q', 'r', 's'],
    8: ['t', 'u', 'v'],
    9: ['w', 'x', 'y', 'z']
};

const numbersToCharactersArr = numbers => {
    return numbers.split('').map(i => data[i]);
};

const combine = (left, right, next, buffer) => {
    if (_.isEmpty(left) && _.isEmpty(next)) {
        return buffer;
    } else if (_.isEmpty(left)) {
        return combine(buffer, _.head(next), _.tail(next), buffer);
    } else if (_.isEmpty(right)) {
        return left;
    } else {
        const res = right.map(rightChar => `${_.head(left)}${rightChar}`);
        return combine(_.tail(left), right, next, [...buffer, ...res]);
    }
};

const getWordsFromNumbers = numbers => {
    const charsArr = numbersToCharactersArr(numbers);
    return combine(_.head(charsArr), _.head(_.tail(charsArr)), _.tail(_.tail(charsArr)), []).filter(
        i => i.length === charsArr.length
    );
};

module.exports.getWordsFromNumbers = getWordsFromNumbers;
