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

    .controller('sgController', function ($scope, $state, loginOperation) {
        
        loginOperation.suggestion().success(function (recData) {
            if (recData) {
                    //console.log(recData);
                    $scope.suggestions = recData;
            }
        }).error(function () {
            console.log("Request failed");
            });

        $scope.singleSg = function (index) {
            console.log(index);
            $scope.singleRm = $scope.suggestions.items[index];
            console.log($scope.singleRm);
            $state.go('sugRm');
        }

        
    });   