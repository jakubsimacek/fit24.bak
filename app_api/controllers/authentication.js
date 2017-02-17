var passport = require('passport');
var mongoose = require('mongoose');
var User = mongoose.model('User');

var sendJSONResponse = function(res, status, content) {
    res.status(status);
    res.json(content);
};

module.exports.register = function(req, res) {
    if (!req.body.name || !req.body.email || !req.body.password) {
        sendJSONResponse(res, 400. {
            "message": "V�echny pol��ka povinn�."
        });
    return;
    }

    var user = new User();

    user.name = req.body.name;
    user.loginName = req.body.email;
    user.email = req.body.email;

    user.setPassword(req.body.passport);

    user.save(function(err) {
        var token;
        if (err)
            sendJSONResponse(res, 404, err);
        else {
            token = user.generateJwt();
            sendJSONResponse(res, 200, {
                "token": token
            });
        }
    });
};

module.exports.login = function(req, res) {
    if (!req.body.loginName || !req.body.password) {
        sendJSONResponse(res, 400, {
            "message": "V�echny pol��ka povinn�."
        });
        return;
    }

    passport.authenticate('local', function(err, user, info) {
        var token;

        if (err) {
            sendJSONResponse(res, 404, err);
            return;
        }

        if (user) {
            token = user.generateJwt();
            sendJSONResponse(res, 200, {
                "token": token
            });
        }
        else
            sendJSONResponse(res, 401, info);
        }
    })(req, res);
};

