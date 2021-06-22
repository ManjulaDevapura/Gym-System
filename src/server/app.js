var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var jwt = require('jsonwebtoken');
var dotenv = require('dotenv');

const CronJob = require('cron').CronJob;

const myEnv = dotenv.config()
if (myEnv.error) {
    throw myEnv.error
}

var indexRouter = require('./routes/routes');
var secure_basic_data_router = require('./routes/secure/secure-basicData-routes');


var app = express();
app.use(express.static(path.join(__dirname, '../..', 'build')));
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/', indexRouter);
app.use('/basicData', verifyToken, secure_basic_data_router);


function verifyToken(req, res, next) {
    const header = req.headers['authorization'];
    // console.log(req.headers);
    if (header !== 'undefined') {
        jwt.verify(header, 'zp', (err, decode) => {
            if (err) { console.log('AUTH ERROR  :' + err); res.sendStatus(403) }
            else {
                console.log('---------------------------------------------------');
                // console.log(decode);
                console.log(`INFO   : ${new Date().toString()} Authenticated...!`)
                console.log('---------------------------------------------------');
                next();
            }
        })
    } else {
        res.sendStatus(403);
    }

}



/**
 * This is used for schedule
 * uncomment to start auto start Adding Messages
 * @private
 */

//Activate, Deactivate, Set Reminder for members
var Activate = require('./schedule/Activate')
Activate.start();

//Remind to pay employees
var Remind = require('./schedule/Remind')
Remind.start();

module.exports = app;
