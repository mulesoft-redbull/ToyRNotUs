app.controller('search-controller', function ($scope, toyService) {

    $scope.controllerName = 'search-controller';

    $scope.ageList = ['Toddler', 'Baby', '3_to_5', '6_to_8', 'over8'];
    $scope.genderList = ['Male', 'Female', 'Neutral'];
    $scope.toyList = [];

    $scope.searchToys = function () {
        
        toyService.getToys().then(
            function (result) {
                alert(result.data);
                console.log(result);
                $scope.toyList = result.data;
            }, function (err) {
                alert(err);
                console.log(err);
            }
        );
    }
});
