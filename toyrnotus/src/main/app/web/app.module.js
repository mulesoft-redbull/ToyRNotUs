var app = angular.module("app", ["ngRoute"]);

app.controller('ToyRNotUsController', function ($scope, $location) {
    
    $scope.shoppingCartClicked = function () {
        $location.path('/shopping-cart');
    }

    $scope.homeClicked = function () {
        $location.path('/');
    }
    
});
