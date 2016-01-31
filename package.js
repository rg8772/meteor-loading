Package.describe({
  name: 'rg8772:meteor-loading',
  summary: 'A beautiful loading splash screen (please-wait + spinkit bundle)',
  version: '1.1.3',
  demo: 'loading.meteor.com',
  git: 'https://github.com/rg8772/meteor-loading/',

  // Source repositories
  sources: [{
    source_git: 'https://github.com/Pathgather/please-wait',
    source_ver: 'v0.0.5'
  }, {
    source_git: 'https://github.com/tobiasahlin/SpinKit',
    source_ver: '1.2.5'
  }]
});

Package.onUse(function (api) {
  api.versionsFrom(['METEOR@0.9.2', 'METEOR@1.0.2.1']);
  // api.use('jquery', 'client');
  var path = Npm.require('path');
  var files = [];
  files.push(path.join('lib', 'please-wait.js'));
  files.push(path.join('lib', 'please-wait.css'));
  files.push(path.join('lib', 'spinkit.css'));
  api.addFiles(files, 'client');
});

Package.onTest(function (api) {
  api.use('tinytest');
  api.use('rg8772:meteor-loading');
  api.addFiles('loading-tests.js');
});
