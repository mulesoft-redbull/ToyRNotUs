app.controller('shipping-address-controller', function ($scope, $location, toyService) {
    $scope.controllerName = 'shipping-address-controller';



    $scope.shoppingCart = toyService.orders.orderLineItems;

    $scope.submitOrderClicked = function(){
        toyService.createOrder().then(
            function (result) {
                alert('deliver successful');
                toyService.initialOrder(); 
            }, function (err) {
                //alert(err);
                console.log(err);
                alert(err);
            }
        );
    }
});
