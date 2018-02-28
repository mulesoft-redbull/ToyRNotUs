app.controller('shopping-cart-controller', function ($scope, $routeParams, toyService, $location) {

    console.log(toyService.orders);
    console.log(toyService.orders.orderLineItems);

    $scope.shoppingCart = toyService.orders.orderLineItems;

    $scope.removeItemFromCart = function(toyId){
        console.log($scope.shoppingCart);
        $scope.shoppingCart = $scope.shoppingCart.filter(function(orderItem) {
            console.log('removing');
            console.log(orderItem.toyId);
            console.log(toyId);
            return orderItem.toyId == toyId;
        });
        console.log($scope.shoppingCart);
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
