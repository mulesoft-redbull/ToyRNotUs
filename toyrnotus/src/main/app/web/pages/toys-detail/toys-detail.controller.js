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
            "toyName": $scope.toy.toyName,
            "quantity": $scope.quantitySelect,
            "unitPrice": $scope.toy.price,
            "brand":$scope.toy.brand,
            "age":$scope.toy.age,
            "gender":$scope.toy.gender
        };
        
        let duplicatedOrder = false;

        toyService.orders.orderLineItems.forEach((lineItem,index) => {
            if(lineItem.toyId == toyOrder.toyId){
                toyService.orders.orderLineItems[index] = toyOrder; 
                duplicatedOrder = true;
            }
        });

        if(!duplicatedOrder)
            toyService.orders.orderLineItems.push(toyOrder);

        $location.path('/shopping-cart');
    }

    $scope.range = function (n) {
        return new Array(n);
    };

    //alert($scope.toyId);

});
