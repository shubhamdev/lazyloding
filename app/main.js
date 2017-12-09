(function () {
  'use strict';
  requirejs.config({
    baseUrl: '',
    waitSeconds: 200,
    urlArgs: timeStamp,
    paths: modulesPaths,
    shim: modulesShim
  });
  require(modulesRequire, function () {
    angular.element(document).ready(function () {
      angular.bootstrap(document, ['appModule']);
    });
  });
}());