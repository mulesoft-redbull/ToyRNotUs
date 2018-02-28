
app.service('toyService', function ($http) {

    //var baseUrl = "http://188.166.213.123:8081/api";
    var baseUrl = "http://localhost:8081/api";
    
    this.getToys = function(age, gender){

        var getToysUrl = baseUrl + "/toys?q=x";

        if(age != 'All' ){
            getToysUrl+="&age="+age;
        }

        if(gender!= 'Neutral'){
            getToysUrl+="&gender="+gender;
        }

        return $http.get(getToysUrl);
    }

});
