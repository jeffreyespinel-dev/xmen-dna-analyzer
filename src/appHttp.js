const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

// routes
const mutant = require('./routes/mutant');
const stats = require('./routes/stats');

var app = express();

app.use(bodyParser.json({ limit: '10mb' }));
app.use(cors({ origin: true, credentials: true }));

// routes
app.use('/stats', stats);
app.use('/mutant', mutant);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

const jsonErrorHandler = async (err, req, res, next) => {
    const status = err.status || 500;
    const message = err.message || `Internal Server Error`;
    console.log(JSON.stringify(err));
    const error = {
        status,
        message
    }
    res.status(status).send({ error });
}
app.use(jsonErrorHandler)

app.listen(3000);
module.exports = app;
