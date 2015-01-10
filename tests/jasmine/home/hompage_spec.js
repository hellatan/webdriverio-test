/**
 * User: hella
 * Date: 1/10/15
 * Time: 3:16 PM
 * Copyright 1stdibs.com, Inc. 2015. All Rights Reserved.
 */

var ghidorah = require('../../../index');

describe('@homepageSpec@', function () {
    var client = {};

    jasmine.getEnv().defaultTimeoutInterval = 9999999;

    beforeEach(function () {
        client = ghidorah.setUp({});
        client.init();
    });

    afterEach(function (done) {
        client.end(done)
    });

    describe('homepage navigation', function () {
        it('should result in https and www', function (done) {
            client
                .url('http://1stdibs.com')
                .url(function (err, res) {
                    expect(err).toBeFalsy();
                    expect(res.value).toBe('https://www.1stdibs.com/');
                })
                .call(done);
        });
    });

    describe('global search box', function () {
        it('should get an autocomplete result', function (done) {
            client
                .url('https://1stdibs.com/')
                .getTitle(function (err, title) {
                    expect(err).toBeFalsy();
                    expect(title).toBe('1stdibs: Antique and Modern Furniture, Jewelry, Fashion & Art');
                })
                .call(done);
        });
    });
});