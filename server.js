/**
 * User: daletan
 * Date: 1/9/15
 * Time: 7:33 PM
 * Copyright 1stdibs.com, Inc. 2015. All Rights Reserved.
 */

var webdriverio = require('webdriverio');
var options = {
    desiredCapabilities: {
        'browserName': 'firefox'
    }
}
//
//var server = new SeleniumServer('/usr/local/bin/selenium-server-standalone.jar', {
//    port: 5151
//});
//
//server.start();
//
//var driver = new webdriver.Builder().
//    usingServer(server.address()).
//    withCapabilities(webdriver.Capabilities.firefox()).
//    build();
//
////describe('basic test', function () {
////
////    it('should go to the homepage', function () {
//
//driver.get('https://1stdibs.com')
//    .then(function () {
//        var searchBox = driver.findElement(webdriver.By.name('q'));
//        var searchSuggestions;
//        searchBox.sendKeys('145 a');
//        //searchSuggestions = driver.findElement(By.id('searchSuggestions'));
//
//
//        //driver.findElement(searchSuggestions
//
//    });
////
////    })
////});

//var client = webdriverio
//        .remote(options)
//        .init()
//        .url('https://1stdibs.com');

//client.waitFor('[name=q]', 200, function () {
//    console.log('argus: ', arguments);
//    client.setValue('[name=q]', '145 a', function () {
//        console.log('search sug link: ', client.tagName('.search-suggest-link'));
//        client.click('body .search-suggest-link', function () {
//            console.log('more args: ', arguments);
//        });
//    });
//});

//var jasmine = require('jasmine-node');

describe('furniture navigation', function () {
    var client = {};

    jasmine.getEnv().defaultTimeoutInterval = 9999999;

    beforeEach(function () {
        client = webdriverio.remote(options);
        client.init();
    });

    afterEach(function (done) {
        client.end(done)
    });

    it('should be on the furniture landing page', function (done) {
        client
            .url('https://1stdibs.com/furniture/')
            .getTitle(function (err, title) {
                console.log('args: ', arguments);
                expect(err).toBeFalsy();
                expect(title).toBe('Antique, Vintage, Mid-Century and Modern Furniture at 1stdibs');
            })
            .call(done);
    });

});

//jasmine.getEnv().execute();
