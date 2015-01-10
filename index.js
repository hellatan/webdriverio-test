/**
 * User: hella
 * Date: 1/10/15
 * Time: 3:04 PM
 * Copyright 1stdibs.com, Inc. 2015. All Rights Reserved.
 *
 */

'use strict';
var _ = require('underscore');
var webdriverio = require('webdriverio');
var package_ = require('./package.json');

var options = {
    desiredCapabilities: {
        'browserName': 'firefox'
    }
};

function Ghidorah() {}

_.extend(Ghidorah.prototype, {
    version: package_.version,
    attacks: webdriverio,
    setUp: function (opts) {
        opts = this.getOptions.call(Ghidorah, opts);
        return this.attacks.remote.call(Ghidorah, opts);
    },
    getOptions: function (opts) {
        opts = opts || {};
        return _.extend(options, opts);
    }
});

module.exports = new Ghidorah();
