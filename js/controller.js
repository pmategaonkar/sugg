angular.module('Flicker.controllers', [])

    .controller('loginController', function ($scope,$state) {
        $scope.login = function (loginData) {
            console.log(loginData);
            $state.go('homepage');
        }


        $scope.signUp = function (signUpData) {
            console.log(signUpData);

        }

    })
    .controller('ChController', function ($scope, loginOperation) {
        $scope.myDataSource = loginOperation.graph;
    })
    .controller('sgController', function ($scope, loginOperation) {
        console.log("hi my suggestion");
        $scope.suggestions = "hi";
        loginOperation.suggestion().success(function (recData) {
            console.log("called");
                if (recData.success) {
                    console.log(recData.JSON_CALLBACK.title);
            }
        })
    });   