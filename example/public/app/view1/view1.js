'use strict';

angular.module('myApp.view1', ['ngRoute', 'ngOath'])

    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider.when('/view1', {
            templateUrl: 'view1/view1.html',
            controller: 'View1Ctrl'
        });
    }])

    .controller('View1Ctrl', ['OathService', function (OathService) {
        console.log('in view 1 controller');
        var promises = OathService.fetchPromises();

        promises[0].then(function(res) {
            console.log('Promise resolved: ');
            console.log(res);
        })
    }]);