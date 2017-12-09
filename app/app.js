(function () {
  'use strict';

  require(['angular'], function (angular) {
    var app = angular.module('app', [
        'ui.router',
        'ui.bootstrap',
        'routeResolverServices',
    ]);
    app.register = app;
    return app;
  });
}());