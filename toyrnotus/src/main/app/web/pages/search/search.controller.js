app.controller('search-controller', function ($scope, toyService,$location) {

    $scope.controllerName = 'search-controller';

    $scope.ageList = ['All', 'Toddler', 'Baby', '3_to_5', '6_to_8', 'over8'];
    $scope.genderList = ['Neutral', 'Male', 'Female'];
    $scope.toyList = [];

    $scope.searchToys = function (age, gender) {

        toyService.getToys(age, gender).then(
            function (result) {
                console.log(result);
                $scope.toyList = result.data;
            }, function (err) {
                //alert(err);
                console.log(err);
            }
        );
    }

    $scope.toyItemIsSelected = function(toyId){
        $location.path('/toys-detail/' + toyId);
    }

});
