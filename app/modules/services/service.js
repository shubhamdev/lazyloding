// Code goes here
(function () {
  'use strict';
  define(['routes'], function (appModule) {
    appModule.register.factory('dataService', [ '$http',function (http) {
			var result = {};  
  
		    result.getData = function () {  
		        return http.get('https://api.randomuser.me/0.4/?results=10');  
		    };
		    return result;  
    }]);
  });
}());