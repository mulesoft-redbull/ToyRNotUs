app.controller('order-summary-controller', function ($scope, $routeParams, toyService, $location) {
    $scope.orderId = $routeParams.orderId;
});
