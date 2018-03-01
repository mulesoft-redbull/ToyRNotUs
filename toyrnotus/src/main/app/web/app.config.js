
app.config(['$routeProvider',
function config($routeProvider) {

  $routeProvider
    .when('/search', {
      templateUrl: 'pages/search/search.html',
      controller: 'search-controller'
    })
    .when('/toys-detail/:toyId', {
        templateUrl: 'pages/toys-detail/toys-detail.html',
        controller: 'toys-detail-controller'
    })
    .when('/shopping-cart', {
        templateUrl: 'pages/shopping-cart/shopping-cart.html',
        controller: 'shopping-cart-controller'
    })
    .when('/shipping-detail', {
        templateUrl: 'pages/shipping-detail/shipping-detail.html',
        controller: 'shipping-detail-controller'
    })
    .when('/shipping-address', {
        templateUrl: 'pages/shipping-address/shipping-address.html',
        controller: 'shipping-address-controller'
    })
    .when('/order-summary', {
        templateUrl: 'pages/order-summary/order-summary.html',
        controller: 'order-summary-controller'
    })
    .otherwise('/search');
}
]);