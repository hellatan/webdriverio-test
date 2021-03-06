/**
 * User: hella
 * Date: 1/10/15
 * Time: 3:16 PM
 * Copyright 1stdibs.com, Inc. 2015. All Rights Reserved.
 */

var ghidorah = require('../../../index');
var chai = require('chai');
var assert = chai.assert;
var expect = chai.expect;

describe('@homepageSpec@', function () {
    var client = {};

    this.timeout(99999999);

    before(function (done) {
        client = ghidorah.setUp({});
        client.init(done);
    });

    after(function (done) {
        client.end(done)
    });

    describe('homepage navigation', function () {
        it('should result in https and www', function (done) {
            client
                .url('http://stage.1stdibs.com')
                .url(function (err, res) {
                    assert.notOk(err);
                    assert.equal(res.value, 'https://stage.1stdibs.com/');
                })
                .getTitle(function (err, title) {
                    assert.notOk(err);
                    assert.strictEqual(title, '[staging] 1stdibs: Antique and Modern Furniture, Jewelry, Fashion & Art');
                })
                .call(done);
        });
    });
    xdescribe('global nav', function () {
        it('should persist the global nav', function (done) {
            client
                .url('https://stage.1stdibs.com')
                .call(done);

        });
    });
    xdescribe('global search box', function () {
        it('should get an autocomplete result', function (done) {
            client
                .url('https://stage.1stdibs.com/')
                .element('.logo-link',function (err) {
                    console.log(arguments);
//                    console.log('args: ', arguments);
                })
                .call(done);

        });
    });

});