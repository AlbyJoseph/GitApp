angular.module('gitApp', ['ui.bootstrap','ui.utils','ngRoute','ngAnimate']);

angular.module('gitApp').config(function($routeProvider) {

    $routeProvider.when('/searchController',{templateUrl: 'searchController/searchController.html'});
    $routeProvider.when('/listStarred',{templateUrl: 'listStarred/listStarred.html'});
    /* Add New Routes Above */
    $routeProvider.otherwise({redirectTo:'/searchController'});

});

angular.module('gitApp').run(function($rootScope) {

    $rootScope.safeApply = function(fn) {
        var phase = $rootScope.$$phase;
        if (phase === '$apply' || phase === '$digest') {
            if (fn && (typeof(fn) === 'function')) {
                fn();
            }
        } else {
            this.$apply(fn);
        }
    };

});
