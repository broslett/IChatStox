

var myApp = angular.module('myApp', ['firebase']);


myApp.controller('MyController_TLS', ['$scope', '$firebase',
    function($scope, $firebase) {
        var ref = new Firebase("https://minutsikt.firebaseio.com/TLS");
        $scope.messages = $firebase(ref).$asArray();

        //ADD MESSAGE METHOD
        $scope.addMessage = function(e) {

            //LISTEN FOR RETURN KEY
            if (e.keyCode === 13 && $scope.msg) {
                //ALLOW CUSTOM OR ANONYMOUS USER NAMES
                var name = $scope.name || 'anonymous';
                $scope.messages.$add({from: name, body: $scope.msg});
                //RESET MESSAGE
                $scope.msg = "";
            }
        }
    }
]);

myApp.controller('MyController_PEH', ['$scope', '$firebase',
    function($scope, $firebase) {
        var ref = new Firebase("https://minutsikt.firebaseio.com/PEH");
        $scope.messages = $firebase(ref).$asArray();

        //ADD MESSAGE METHOD
        $scope.addMessage = function(e) {

            //LISTEN FOR RETURN KEY
            if (e.keyCode === 13 && $scope.msg) {
                //ALLOW CUSTOM OR ANONYMOUS USER NAMES
                var name = $scope.name || 'anonymous';
                $scope.messages.$add({from: name, body: $scope.msg});
                //RESET MESSAGE
                $scope.msg = "";
            }
        }
    }
]);

myApp.controller('MyController_RIO', ['$scope', '$firebase',
    function($scope, $firebase) {
        var ref = new Firebase("https://minutsikt.firebaseio.com/RIO");
        $scope.messages = $firebase(ref).$asArray();

        //ADD MESSAGE METHOD
        $scope.addMessage = function(e) {

            //LISTEN FOR RETURN KEY
            if (e.keyCode === 13 && $scope.msg) {
                //ALLOW CUSTOM OR ANONYMOUS USER NAMES
                var name = $scope.name || 'anonymous';
                $scope.messages.$add({from: name, body: $scope.msg});
                //RESET MESSAGE
                $scope.msg = "";
            }
        }
    }
]);