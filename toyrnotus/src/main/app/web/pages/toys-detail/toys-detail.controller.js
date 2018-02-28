app.controller('toys-detail-controller',  function ($scope,$routeParams) {

    $scope.controllerName = 'toys-detail-controller';
    $scope.toyId = $routeParams.toyId;

    alert($scope.toyId);

});
