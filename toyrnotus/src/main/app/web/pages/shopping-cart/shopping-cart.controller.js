app.controller('shopping-cart-controller', function ($scope, $routeParams, toyService, $location) {

    $scope.shoppingCart = toyService.orders.orderLineItems;
    $scope.totalPrice = 0.0;

    $scope.calculateTotalPrice = function () {
        $scope.totalPrice = 0;
        $scope.shoppingCart.forEach(lineItem => {
            $scope.totalPrice += (lineItem.unitPrice * parseInt(lineItem.quantity));
        });
    }

    $scope.calculateTotalPrice();

    $scope.removeItemFromCart = function (toyId) {
        $scope.shoppingCart = $scope.shoppingCart.filter(function (orderItem) {
            return orderItem.toyId != toyId;
        });
    }

    $scope.processToCheckOut= function(){
        $location.path("/shipping-detail");
    }

    $scope.range = function (n) {
        return new Array(n);
    };
    // $scope.shoppingCart.forEach((item, index) => {

    //     toyService.getToy(item.toyId).then(
    //         function (result) {
    //             console.log(result);
    //             console.log(index);
    //             console.log($scope.shoppingCart[index]);
    //             $scope.shoppingCart[index].brand = result.data.brand;
    //             $scope.shoppingCart[index].age = result.data.age;
    //             $scope.shoppingCart[index].gender = result.data.gender;

    //         }, function (err) {
    //             //alert(err);
    //             console.log(err);
    //         }
    //     );
    // });
});
