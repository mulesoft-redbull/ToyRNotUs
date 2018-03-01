
app.service('toyService', function ($http) {

    var baseUrl = "/api";
    //var baseUrl = "http://188.166.213.123:8081/api";
    //var baseUrl = "http://localhost:8081/api";
    this.orders = {};

    this.initialOrder = function () {
        var orders = {
            "orderLineItems": [
            ],
            "shippingAddress": {
                "fullName": "John Doe",
                "address1": "51/4",
                "city": "Bangkok",
                "province": "Bangkok",
                "postcode": "10310",
                "telephone": "08xxxxxxxx"
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
                "fullName": orders.shippingAddress.fullName,
                "address1": orders.shippingAddress.address1,
                "city": orders.shippingAddress.city,
                "province": orders.shippingAddress.province,
                "postcode": orders.shippingAddress.postcode,
                "telephone": orders.shippingAddress.telephone
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

    this.createOrder = function () {
        let finalOrder = this.transformPostOrder(this.orders);
        console.log(this.orders);
        var createOrderUrl = baseUrl + "/orders/";
        var config = {
                headers : {
                    'Content-Type': 'application/json'
                }
            }
        return $http.post(createOrderUrl, finalOrder, config);
    }

});
