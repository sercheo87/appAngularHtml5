var myApp = angular.module('myApp',['ngRoute','myControllersApp','myNavigationCtrl','myRegisterCtrl']);
 
myApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/', {
        templateUrl: 'partials/view_main.html',
        controller: 'viewMainCtrl'
      }).
      when('/Detail', {
        templateUrl: 'partials/view_main.html',
        controller: 'viewDetailCtrl'
      }).
      when('/Register', {
        templateUrl: 'partials/view_register.html',
        controller: 'viewRegisterCtrl'
      }).
      otherwise({
        redirectTo: '/'
      });
  }]);