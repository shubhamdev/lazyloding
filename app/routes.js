(function () {
  'use strict';
  define(['angular', 'app'], function (angular, app) {

    var appModule = angular.module('appModule', ['app'])
      .config(['$stateProvider', '$urlRouterProvider', 'routeResolverProvider', '$controllerProvider', '$compileProvider', '$filterProvider', '$provide', '$locationProvider',
        function ($stateProvider, $urlRouterProvider, routeResolverProvider, $controllerProvider, $compileProvider, $filterProvider, $provide, $locationProvider) {
          var route = routeResolverProvider.route;
          appModule.register = {
            controller: $controllerProvider.register,
            directive: $compileProvider.directive,
            filter: $filterProvider.register,
            factory: $provide.factory,
            service: $provide.service
          };
          $locationProvider.html5Mode({
            enabled: true,
            requireBase: false
          });
          $urlRouterProvider.otherwise('/');
          $stateProvider
          .state("app", {
            url: "",
            views: {
              header: {
                templateUrl: '/modules/view/header.html?' + timeStamp,
                controller: 'headerController',
                resolve: route.resolve(['headerController']),
              },
              container: {
                templateUrl: '/modules/view/view.html?' + timeStamp,
              },
              footer: {
                templateUrl: '/modules/view/footer.html?' + timeStamp,
                controller: 'footerController',
                resolve: route.resolve(['footerController']),
              }
            }
          })
          .state('app.home', {
            url: '/',
            templateUrl: '/modules/view/home.html?' + timeStamp,
            controller: 'homeController',
            resolve: route.resolve(['homeController'])
          })
          .state('app.cart', {
            url: '/cart',
            templateUrl: '/modules/view/cart.html?' + timeStamp,
            controller: 'cartController',
            resolve: route.resolve(['cartController'])
          })
          .state('app.about', {
            url: '/about',
            templateUrl: '/modules/view/about.html?' + timeStamp,
            controller: 'aboutController',
            resolve: route.resolve(['aboutController'])
          })
          .state('app.services', {
            url: '/services',
            templateUrl: '/modules/view/services.html?' + timeStamp,
            controller: 'servicesController',
            resolve: route.resolve(['servicesController'])
          })
          .state('app.contact', {
            url: '/contact',
            templateUrl: '/modules/view/contact.html?' + timeStamp,
            controller: 'contactController',
            resolve: route.resolve(['contactController'])
          });
        }]);
    appModule.register = appModule;
    return appModule;
  });
}());