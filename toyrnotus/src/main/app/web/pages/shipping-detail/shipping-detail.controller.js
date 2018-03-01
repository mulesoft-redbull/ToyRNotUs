app.controller('shipping-detail-controller', function ($scope, $location, toyService) {
    


    $scope.shoppingCartOrder =  toyService.orders.orderLineItems;
    $scope.shoppingCart = toyService.orders.shippingAddress;
    console.log($scope.shoppingCart);

    $scope.submitOrderClicked = function () {
        console.log($scope.shoppingCart);
        toyService.createOrder().then(
            function (result) {
                console.log(result);
                toyService.initialOrder(); 
                $location.path("/order-summary/"+result.data.orderId);
            }, function (err) {
                //alert(err);
                console.log(err);
                alert(err);
                $location.path("/");
            }
        );
    }
});
