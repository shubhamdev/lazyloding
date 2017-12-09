// Code goes here
(function () {
  'use strict';
  define(['routes','service'], function (appModule,service) {
    appModule.register.controller('homeController', [ '$scope','$rootScope', 'dataService','filterFilter','storageSrvice',function (scope,rootScope,dataService, filterFilter,storageSrvice) {
        
        //Dummy book collection
    	scope.categories= [{id:'All',num:6},{id:'books',num:3},{id:'notbook',num:3}];
        scope.collection = [];
        scope.catlogData = [];
        var allBook = [
            {name:'CSS',id:1, price:300},
            {name:'JavaScript',id:10, price:200},
            {name:'Angular 2',id:11, price:500},
            {name:'Vistaprint',id:66, price:250},
            {name:'PrintVenue',id:16, price:350},
            {name:'NEC',id:17, price:150}
        ];
        scope.catlogData = allBook;
        
        //Filter Data
        scope.filterData = function(arg){
            return filterFilter(scope.catlogData, { name: arg});
        };

        //Event Lister from home controller
        scope.$on('search', function (event, arg) {
            if(arg){
               scope.catlogData = scope.filterData(arg);
            }else{
                scope.catlogData = allBook;
            }
        });

        //Get data based on nav selection
    	scope.changeCategory = function(id){
    		if(id ==='All'){
                scope.catlogData = allBook;
    			scope.itemList = 'All';
    		}else if(id === 'books'){
                scope.getData();
    			scope.itemList = 'books';
    		}else if(id ==='notbook'){
                scope.catlogData= [
                    {name:'Vistaprint',id:66, price:250},
                    {name:'PrintVenue',id:16, price:350},
                    {name:'NEC',id:17, price:150}
                ];
    			scope.itemList = 'notbook';
    		}else{
                scope.itemList = '';
            }
    	};

        //Get Books Data
        scope.getData = function () {  
            dataService.getData()  
                .success(function (data) {
                   scope.catlogData = [{name:'CSS',id:1, price:300},{name:'JavaScript',id:10, price:200},
                    {name:'Angular 2',id:11, price:500}];
                }).  
                error(function (error) {  
                    console.log('Error');
                    alert('Something went wrong.')
                });  
        };

        //Add to cart
        scope.pushToCart = function(item){
            if(item){
                scope.collection.push(item);
                storageSrvice.result = scope.collection;
                scope.collection = _.uniq(scope.collection);
                alert('item added successfully.');
                rootScope.$broadcast('count', scope.collection.length);
            }
        };

    }]);	
  });
}());