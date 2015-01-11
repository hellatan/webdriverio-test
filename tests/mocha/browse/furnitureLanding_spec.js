/**
 * User: hella
 * Date: 1/10/15
 * Time: 7:15 PM
 * Copyright 1stdibs.com, Inc. 2015. All Rights Reserved.
 */

var ghidorah = require('../../../index');
var chai = require('chai');
var assert = chai.assert;
var expect = chai.expect;

describe('furniture navigation', function () {
    var client = {};

    this.timeout(99999999);

    before(function () {
        client = ghidorah.setUp({}).init();
    });

    after(function (done) {
        client.end(done)
    });

    it('should be on the furniture landing page', function (done) {
        client
            .url('https://stage.1stdibs.com/furniture/')
            // getUrlAndTitle
            /*
            client.addCommand("getUrlAndTitle", function(customVar, cb) {
                this.url(function(err,urlResult) {
                    this.getTitle(function(err,titleResult) {
                        var specialResult = {url: urlResult.value, title: titleResult};
                        cb(err,specialResult);
                        console.log(customVar); // "a custom variable"
                    })
                });
            });
            */
            .getTitle(function (err, title) {
                assert.notOk(err);
                assert.strictEqual(title, 'Antique, Vintage, Mid-Century and Modern Furniture at 1stdibs');
            })
            .call(done);
    });

});
