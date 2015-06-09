// create the module and name it scotchApp
var scotchApp = angular.module('scotchApp', ['ngRoute']);

// configure our routes
scotchApp.config(function($routeProvider) {
    $routeProvider

    // route for the home page
    .when('/', {
        templateUrl : 'pages/home.html',
        controller  : 'mainController'
    })

    // route for the about page
    .when('/about', {
        templateUrl : 'pages/about.html',
        controller  : 'aboutController'
    })

    // route for the contact page
    .when('/contact', {
        templateUrl : 'pages/contact.html',
        controller  : 'contactController'
    })

    // route for the arq banios page
    .when('/arqBanios', {
        templateUrl : 'pages/arqBanios.html',
        controller  : 'arqBaniosController'
    })

    // route for the arq banios page
    .when('/decoracion', {
        templateUrl : 'pages/decoracion.html',
        controller  : 'decoracionController'
    });

});

// create the controller and inject Angular's $scope
scotchApp.controller('mainController', function($scope) {
    // create a message to display in our view
    $scope.message = 'Everyone come and see how good I look!';
});

scotchApp.controller('aboutController', function($scope) {
    $scope.message = 'Look! I am an about page.';
});

scotchApp.controller('contactController', function($scope) {
    $scope.message = 'Contact us! JK. This is just a demo.';
});

scotchApp.controller('arqBaniosController', function($scope) {
    $scope.message = ' Arquitectura baños. This is just a demo.';
});

scotchApp.controller('decoracionController', function($scope) {
    $scope.message = 'Decoración. This is just a demo.';
});
