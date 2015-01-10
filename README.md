# King Ghidorah Attacks!

## setup

download the [`selenium-standalone` node module][standalone]

    npm install selenium-standalone@latest -g
    selenium-standalone install --version=2.44.0
    selenium-standalone start

More instructions and commands on the [npm homepage][standalone]

Install `jasmine-node` globally

    npm install jasmin-node -g

Clone, install, run

    ~/projects $ git clone git@github.com:hellatan/webdriverio-test.git
    ~/projects $ cd webdriverio-test
    ~/projects/webdriverio-test $ npm install
    ~/projects/webdriverio-test $ jasmine-node tests

## caveats

- Any file not ending in `_spec.js` will not be run without the `--matchall` flag

[standalone]: https://www.npmjs.com/package/selenium-standalone
