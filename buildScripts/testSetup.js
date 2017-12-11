// this isn't transpiled so must use commonJS and ES5

// register babel to transpile before tests are run
require('babel-register')();

// disable webpack features that Mocha doesn't understand
require.extensions['.css'] = function() {};
