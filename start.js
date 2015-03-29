// Generated by CoffeeScript 1.8.0
(function() {
  var config, dataStore, minimist, options, url, vcr;

  vcr = require('./src/vcr');

  minimist = require('minimist');

  url = require('url');

  config = require('./src/config');

  dataStore = require('./src/dataStore');

  console.log('');

  console.log('apiVCR Starting');

  console.log('---------------');

  options = minimist(process.argv.slice(2));

  if (!options.api) {
    throw "Need an API server specified. eg: `node start.js --api=http://api.pickle.com`";
  }

  config.api = url.parse(options.api);

  if (config.api.port) {
    config.port = config.api.port;
  }

  if (options.port) {
    config.port = options.port;
  }

  if (options.data) {
    config.rootPath = options.data;
  }

  if (options.record) {
    vcr.record();
  }

  config.computeFilePath();

  vcr.start();

}).call(this);
