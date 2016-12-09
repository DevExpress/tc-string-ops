const crypto     = require('crypto');
const express    = require('express');
const bodyParser = require('body-parser');

const app = express();

app
    .use(bodyParser.urlencoded({ extended: false }))
    .use(express.static('lib/public'));

app.post('/modify-string', (req, res) => {
    var result = '';

    if (req.body.reverse)
        result = req.body.text.split('').reverse().join('');

    else if (req.body.hash)
        result = crypto.createHash('md5').update(req.body.text).digest('hex');

    res.end(result);
});

app.listen(1337);

