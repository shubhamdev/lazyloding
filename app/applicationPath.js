var config = false, baseUrl = "https://infiniti.medibuddy.in/static/";

var timeStamp = "bust=" + (new Date()).getTime(),
 modulesPaths = {
   angular: baseUrl+ 'vendors/bower_components/angular/angular-1.5.0',
   angularUiRouter: baseUrl + 'vendors/bower_components/angular-ui-router/release/angular-ui-router-0.2.15.min',
   bootstrap: 'https://cdnjs.cloudflare.com/ajax/libs/angular-ui-bootstrap/2.5.0/ui-bootstrap.min',
   tpls: 'https://cdnjs.cloudflare.com/ajax/libs/angular-ui-bootstrap/2.5.0/ui-bootstrap-tpls.min.js',
   underscore:'https://plus.medibuddy.in/thirdparty/assets/vendors/bower_components/underscore/underscore-1.6.0.min',



   //Controller
   headerController: 'modules/controllers/headerController',
   footerController: 'modules/controllers/footerController',
   homeController: 'modules/controllers/homeController',
   cartController: 'modules/controllers/cartController',
   aboutController: 'modules/controllers/aboutController',
   contactController: 'modules/controllers/contactController',
   servicesController: 'modules/controllers/servicesController',

   //service 
   service: 'modules/services/service',
   dataService: 'modules/services/dataService',

   app: 'app',
   routeResolverService: 'routeResolverService',
   routes: 'routes'
 },
 modulesShim = {
   'angular': {
     exports: 'angular',
   },
   'angularUiRouter': {
     exports: 'angularUiRouter',
     deps: ['angular']
   },
  'bootstrap':{
    exports: 'bootstrap',
     deps: ['angular']
   },
   'underscore':{
    exports: 'underscore',
     deps: ['angular']
   }
 },
 modulesRequire = [
 'angular','bootstrap','angularUiRouter', 'routeResolverService','underscore','dataService'
 , 'routes'
 ],
 modulesBootstrap = [
   'appModule'
 ];
