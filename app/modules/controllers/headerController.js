// Code goes here
(function () {
  'use strict';
  define(['routes'], function (appModule) {
    appModule.register.controller('headerController', [ '$scope', '$rootScope', '$state',function (scope,rootScope, state) {

      //Route Change Method
      scope.routeChange = function(data){
        debugger;
        if(data === 'cart'){
          state.go('app.cart');
        }else if(data === 'home'){
          state.go('app.home');
        }else if(data === 'about'){
          state.go('app.about');
        }else if(data === 'contact'){
          state.go('app.contact');
        }else if(data === 'services'){
          state.go('app.services');
        }
      };

      //Serach item in list from home controller
      scope.search = function(data){
        if(data){
          rootScope.$broadcast('search', data);
        }
      };

      //Event listner from home and cart controller
      scope.$on('count', function (event, arg) {
          if(arg){
            scope.count = arg;
          }else{
            scope.count = '';
          }
      });

      //State load
    	state.go('app.home', {}, {'reload': 'app.home'});
      
    }]);
  });
}());