app.controller('search-controller', function ($scope, toyService) {

    $scope.controllerName = 'search-controller';

    toyService.sayHello();

});
