'use strict';


// import the moongoose helper utilities
var utils = require('../utils');
var should = require('should');
// import our User mongoose model
var User = require('../../app_api/models/users').User;

describe('Users: models', function () {


  describe('#create()', function () {
    it('should create a new User', function (done) {
      // Create a User object to pass to User.create()
      var u = {
        name: {
          givenName: 'Barack',
          familyName: 'Obama'
        }
      };
      User.create(u, function (err, createdUser) {
        // Confirm that that an error does not exist
        should.not.exist(err);
        // verify that the returned user is what we expect
        createdUser.name.givenName.should.equal('Barack');
        createdUser.name.familyName.should.equal('Obama');
        // Call done to tell mocha that we are done with this test
        done();
      });
    });
  });


});

