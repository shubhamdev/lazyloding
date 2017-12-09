// Code goes here
(function () {
  'use strict';
  define(['routes'], function (appModule) {
    appModule.register.controller('cartController', [ '$scope', 'storageSrvice','$rootScope',function (scope, storageSrvice,rootScope) {
      scope.data = [];
    	scope.data = storageSrvice.result;

      //Calculate Price
    	scope.calculatePrice= function(){
    		 var price = 0;
  		   angular.forEach(scope.data, function(value, key){
  		      price = value.price + price;
  		   });
		   return price
    	};

    	scope.totalPrice = scope.calculatePrice();

      //Place order
    	scope.placeOrder=  function(){
    		alert('order placed successfully.');
    	};

      //Remove item from cart
      scope.removeItem = function(item){
        var index = scope.data.indexOf(item);
        scope.data.splice(index, 1);
        rootScope.$broadcast('count', scope.data.length);
        scope.totalPrice = scope.calculatePrice();
      };

    }]);
  });
}());