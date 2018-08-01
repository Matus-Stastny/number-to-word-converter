// @flow
const express = require('express');
const app = express();

const parser = require('./parser');
const port = process.env.PORT || 5000;

const pattern: RegExp = /[2-9]+/g;

app.get('/api/:numbers', (req: express$Request, res: express$Response) => {
    const validNumbers: string = req.params.numbers.match(pattern).join('');
    res.send({ words: parser.getWordsFromNumbers(validNumbers) });
});

app.listen(port, () => console.log(`Listening on port ${port}`));
