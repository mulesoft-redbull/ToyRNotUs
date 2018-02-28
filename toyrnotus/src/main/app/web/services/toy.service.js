
app.service('toyService', function ($http) {

    var baseUrl = "/api";
    //var baseUrl = "http://localhost:8081/api";
    
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

    this.getToy = function(toyId){

        var getToyUrl = baseUrl + "/toys/"+toyId;
        
        return $http.get(getToyUrl);
    }

});
