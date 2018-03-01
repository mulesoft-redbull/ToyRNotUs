
app.service('toyService', function ($http) {

    //var baseUrl = "/api";
    var baseUrl = "http://188.166.213.123:8081/api";

    this.orders = {};

    this.initialOrder = function(){
        var orders = {
            "orderLineItems": [
            ],
            "shippingAddress": {
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
    }

    this.initialOrder();

   

    this.transformPostOrder = function (orders) {

        let previousLineItems = orders.orderLineItems;

        let finalLineItems = [];

        previousLineItems.forEach(previousLineItem => {
            let transformedItem = {
                "toyId": previousLineItem.toyId,
                "quantity": previousLineItem.quantity,
                "unitPrice": previousLineItem.unitPrice,
            };
            finalLineItems.push(transformedItem);
        });

        let finalOrder = {
            "orderLineItems": finalLineItems,
            "shippingAddress": {
                "fullName": orders.fullName,
                "address1": orders.address1,
                "city": orders.city,
                "province": orders.province,
                "postcode": orders.postcode,
                "telephone": orders.telephone
            },
            "shippingCost": 50
        };

        return finalOrder;
    }

    this.getToys = function (age, gender) {

        var getToysUrl = baseUrl + "/toys?q=x";

        if (age != 'All') {
            getToysUrl += "&age=" + age;
        }

        if (gender != 'Neutral') {
            getToysUrl += "&gender=" + gender;
        }

        return $http.get(getToysUrl);
    }

    this.getToy = function (toyId) {

        var getToyUrl = baseUrl + "/toys/" + toyId;

        return $http.get(getToyUrl);
    }

    this.createOrder = function(){
        this.orders = this.transformPostOrder(this.orders);
        var createOrderUrl = baseUrl + "/orders/";
        return $http.post(createOrderUrl, this.orders);
    }

});
