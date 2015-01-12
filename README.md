# King Ghidorah Attacks!

## setup

Clone, install

    ~/path $ git clone git@github.com:hellatan/webdriverio-test.git
    ~/path $ cd webdriverio-test
    ~/path/webdriverio-test $ npm install

No global dependencies runner dependencies:

Start the selenium-server

    ./node_modules/selenium-standalone/bin/selenium-standalone install --version=2.44.0
    ./node_modules/selenium-standalone/bin/selenium-standalone start

More instructions and commands on the [npm homepage][standalone]

Run `jasmine`

    ~/path/webdriverio-test $ npm start

Run `mocha`

    ~/path/webdriverio-test $ npm start

Globally:

download the [`selenium-standalone` node module][standalone]

    npm install selenium-standalone@latest -g
    selenium-standalone install --version=2.44.0
    selenium-standalone start

Install `jasmine-node` globally

    npm install jasmine-node -g

Install `mocha` globally

    npm install mocha -g

Run `jasmine`

    ~/path/webdriverio-test $ jasmine-node tests/jasmine

Run `mocha`

    ~/path/webdriverio-test $ mocha tests/mocha/**/*.js

## caveats

`jasmine-node`:

- Any file not ending in `_spec.js` will not be run without the `--matchall` flag

[standalone]: https://www.npmjs.com/package/selenium-standalone
