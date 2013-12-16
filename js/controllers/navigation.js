var myNavigationCtrl = angular.module('myNavigationCtrl', []);

myNavigationCtrl.controller('navCtrl', ['$scope', '$location',
    function ($scope, $location) {

        //console.log('LOCATION INDEX: ' + $location.path().substring(1));

        $scope.collectionItemsMenu = [{
                'name': 'MENU1',
                'snippet': 'Main',
                'route': '#/Main'
            },
            {
                'name': 'MENU2',
                'snippet': 'Detail',
                'route': '#/Detail'
            },
            {
                'name': 'MENU3',
                'snippet': 'Register',
                'route': '#/Register'
            },
            {
                'name': 'MENU3',
                'snippet': 'Acerca de..'
            }];

        $scope.navClass = function (snippet) {
            var currentRoute = $location.path().substring(1) || 'Main' || 'Detail ';
            console.log('LOCATION currentRoute: ' + currentRoute);
            return snippet === currentRoute ? 'active' : '';
        };
}]);