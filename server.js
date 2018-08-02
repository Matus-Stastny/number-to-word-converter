// @flow
const express = require('express');
const app = express();

const parser = require('./parser');
const port = process.env.PORT || 5000;

const pattern: RegExp = /[2-9]+/g;

app.get('/api/:numbers', (req: express$Request, res: express$Response) => {
    const validNumbersArr: array<string> = req.params.numbers.match(pattern);
    if (validNumbersArr) {
        res.send({ words: parser.getWordsFromNumbers(validNumbersArr) });
    } else {
        res.status(404).send({ message: 'Missing words with current number combination.' });
    }
});

app.listen(port, (): void => console.log(`Listening on port ${port}`));
