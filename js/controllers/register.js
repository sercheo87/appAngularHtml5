var myRegisterCtrl = angular.module('myRegisterCtrl', []);

myRegisterCtrl.controller('viewRegisterCtrl', ['$scope', '$http',
  function ($scope, $http) {
        $scope.title = 'Bienvenido A mi Primera APP';
        $scope.content = 'Mi contenido 1';

        $scope.collectionUsers = [{
            'guid': getId(),
            'email': 'usuario1@gmail.com',
            'pass': '1234'
        }, {
            'guid': getId(),
            'email': 'usuario2@gmail.com',
            'pass': '333'
        }, {
            'guid': getId(),
            'email': 'usuario3@gmail.com',
            'pass': 'asdfg'
        }];

        $scope.submit = function () {

            var itemUser = {};
            itemUser.email = this.email;
            itemUser.pass = this.pass;
            itemUser.guid = getId();

            console.log('data simple:' + itemUser);
            if (this.email) {
                this.collectionUsers.push(itemUser);
                this.email = '';
                this.pass = '';
                console.log('Data:' + $scope.collectionUsers);
            }
        };

        $scope.removeItem = function (item) {
            console.log('removido:' + item);
        };
  }]);

function getId() {
    var tempId = createUUID().replace('-', '');
    var ret = new RegExp('-', 'g');
    ret = tempId.replace(ret, '');
    return ret;
}

function createUUID() {
    // http://www.ietf.org/rfc/rfc4122.txt
    var s = [];
    var hexDigits = "0123456789abcdef";
    for (var i = 0; i < 36; i++) {
        s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1);
    }
    s[14] = "4"; // bits 12-15 of the time_hi_and_version field to 0010
    s[19] = hexDigits.substr((s[19] & 0x3) | 0x8, 1); // bits 6-7 of the clock_seq_hi_and_reserved to 01
    s[8] = s[13] = s[18] = s[23] = "-";

    var uuid = s.join("");
    return uuid;
}