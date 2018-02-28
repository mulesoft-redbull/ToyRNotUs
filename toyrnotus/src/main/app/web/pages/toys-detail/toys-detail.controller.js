app.controller('toys-detail-controller', function ($scope, $routeParams, toyService, $location) {

    $scope.controllerName = 'toys-detail-controller';
    $scope.toyId = $routeParams.toyId;
    $scope.toy = {};


    toyService.getToy($scope.toyId).then(
        function (result) {
            console.log(result);
            $scope.toy = result.data;

        }, function (err) {
            //alert(err);
            console.log(err);
        }
    );

    $scope.addToysToCart = function () {
        let toyOrder = {
            "toyId": $scope.toy.toyId,
            "quantity": $scope.quantitySelect,
            "unitPrice": $scope.toy.price
        };
        //TODO consolidate same toy id in order
        toyService.orders.orderLineItems.push(toyOrder);
        $location.path('/shopping-cart');
    }

    $scope.range = function (n) {
        return new Array(n);
    };

    //alert($scope.toyId);

});
