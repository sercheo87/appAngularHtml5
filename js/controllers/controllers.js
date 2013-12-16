var myControllersApp = angular.module('myControllersApp', []);

myControllersApp.controller('viewMainCtrl', ['$scope', '$http',
  function ($scope, $http) {
        $scope.title = 'Bienvenido A mi Primera APP';
        $scope.content = 'Mi contenido 1';
  }]);

myControllersApp.controller('viewDetailCtrl', ['$scope', '$routeParams',
  function ($scope, $routeParams) {
        $scope.title = 'Bienvenido A mi Segunda APP';
        $scope.content = 'Mi contenido 2';
  }]);