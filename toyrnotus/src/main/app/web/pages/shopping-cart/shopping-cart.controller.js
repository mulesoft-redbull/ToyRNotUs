app.controller('shopping-cart-controller', function ($scope, $routeParams, toyService, $location) {

    console.log(toyService.orders);
    console.log(toyService.orders.orderLineItems);

    $scope.shoppingCart = toyService.orders.orderLineItems;

    $scope.shoppingCart.forEach(function (element) {

        toyService.getToy(element.toyId).then(
            function (result, index) {
                console.log(result);
                console.log(index);
                console.log($scope.shoppingCart[index]);
                $scope.shoppingCart[index].brand = result.data.brand;
                $scope.shoppingCart[index].age = result.data.age;
                $scope.shoppingCart[index].gender = result.data.gender;

            }, function (err) {
                //alert(err);
                console.log(err);
            }
        );
    });
});
