/**
 * User: hella
 * Date: 1/10/15
 * Time: 3:04 PM
 * Copyright 1stdibs.com, Inc. 2015. All Rights Reserved.
 */

var ghidorah = require('../../../index');

describe('furniture navigation', function () {
    var client = {};

    jasmine.getEnv().defaultTimeoutInterval = 9999999;

    beforeEach(function () {
        client = ghidorah.setUp({}).init();
    });

    afterEach(function (done) {
        client.end(done)
    });

    it('should be on the furniture landing page', function (done) {
        client
            .url('https://stage.1stdibs.com/furniture/')
            .getTitle(function (err, title) {
                expect(err).toBeFalsy();
                expect(title).toBe('Antique, Vintage, Mid-Century and Modern Furniture at 1stdibs');
            })
            .call(done);
    });

});
