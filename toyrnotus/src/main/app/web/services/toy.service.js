
app.service('toyService', function ($http) {

    var baseUrl = "/api";
    //var baseUrl = "http://localhost:8081/api";
    
    var orders = {
        "orderLineItems": [
        ],
        "shippingAddress":{
        "fullName": "",
        "address1": "",
        "city": "",
        "province": "",
        "postcode": "",
        "telephone": ""
        },
        "shippingCost": 50
    };
    
    this.orders = orders;
    
    
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
