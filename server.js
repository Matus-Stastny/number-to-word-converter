const express = require('express');
const app = express();

const parser = require('./parser');
const port = process.env.PORT || 5000;

const pattern = /[2-9]+/g;

app.get('/api/:numbers', (req, res) => {
    const validNumbers = req.params.numbers.match(pattern).join('');
    res.send({ words: parser.getWordsFromNumbers(validNumbers) });
});

app.listen(port, () => console.log(`Listening on port ${port}`));
