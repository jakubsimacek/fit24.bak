var mongoose = require('mongoose');
var gracefulShutdown;
var dbUrl = 'mongodb://localhost/fit24';
// if (process.env.NODE_ENV === 'production') {
//    dbUrl = production.env.MONGOLAB_URI'
// }

mongoose.connect(dbUrl);

// CONNECTION EVENTS
mongoose.connection.on('connected', function() {
    console.log('Mongoose connected to ' + dbUrl);
});

mongoose.connection.on('disconnected', function() {
    console.log('Mongoose disconnected');
});

// CAPTURE APP TERMINATION / RESTART EVENTS
gracefulShutdown = function(msg, callback) {
    mongoose.connection.close(function() {
        console.log('Mongoose disconnected through ' + msg);
        callback();
    });
});

// For Nodemon restarts
process.once('SIGUSR2', function() {
    gracefulShutdown('nodemon restart', function() {
        process.kill(process.pid, 'SIGUSR2');
    });
});

// For app termination
process.once('SIGINT', function() {
    gracefulShutdown('app termination', function() {
        process.exit(0);
    });
});

// For Heroku termination
process.once('SIGINT', function() {
    gracefulShutdown('Heroku app termination', function() {
        process.exit(0);
    });
});

// BRING YOUR SCHEMAS & MODELS
require('./terms');
require('./forums');
require('./users');

