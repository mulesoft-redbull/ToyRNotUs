
app.service('toyService', function ($http) {

    this.sayHello = function () {
        console.log('Hello from toy Service');
        return "Hello, World From service()";
    };

});
