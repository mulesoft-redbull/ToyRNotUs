
app.service('toyService', function ($http) {

    var baseUrl = "/api";

    this.getToys = function(age, gender){
        var getToysUrl = baseUrl + "/toys";
        return $http.get(getToysUrl);
    }

});
