app.controller('toys-detail-controller', function ($scope, $routeParams, toyService) {

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

    $scope.range = function(n) {
        return new Array(n);
    };

    //alert($scope.toyId);

});
