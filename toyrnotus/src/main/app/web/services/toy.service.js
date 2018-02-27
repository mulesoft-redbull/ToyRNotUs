
app.service('toyService', function ($http) {

    var baseUrl = "http://localhost:8081/api";

    this.getToys = function(age, gender){
        var getToysUrl = baseUrl + "/toys";
        return $http.get(getToysUrl);
    }

});
