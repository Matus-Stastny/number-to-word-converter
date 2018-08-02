// @flow
const express = require('express');
const app = express();

const parser = require('./parser');
const port = process.env.PORT || 5000;

const pattern: RegExp = /[2-9]+/g;

app.get('/api/:numbers', (req: express$Request, res: express$Response) => {
    const validNumbersArr: array<string> = req.params.numbers.match(pattern);
    if (validNumbersArr) {
        const validNumbers = validNumbersArr.join('');
        res.send({ words: parser.getWordsFromNumbers(validNumbers) });
    } else {
        res.status(404).send({ message: 'Missing words with current number combination.' });
    }
});

app.listen(port, (): void => console.log(`Listening on port ${port}`));
