const crypto     = require('crypto');
const express    = require('express');
const bodyParser = require('body-parser');

const app = express();

app
    .use(bodyParser.urlencoded({ extended: false }))
    .use(express.static('lib/public'));

app.post('/reverse', (req, res) => {
    res.end(`<div id="result">${req.body.text.split('').reverse().join('')}</div>`);
});

app.post('/hash', (req, res) => {
    res.end(`<div id="result">${crypto.createHash('md5').update(req.body.text).digest('hex')}</div>`);
});

app.listen(1337);

