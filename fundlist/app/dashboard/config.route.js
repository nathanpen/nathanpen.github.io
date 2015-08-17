(function() {
    'use strict';

    angular
        .module('app.dashboard')
        .config(function($stateProvider, $urlRouterProvider) {
            $stateProvider
                .state('dashboard', {
                    url: "/dashboard",
                    templateUrl: "app/dashboard/dashboard.html",
                    controller:'dashboard',
                    controllerAs: 'vm'
                });
            $urlRouterProvider.otherwise('/error');
        })
})();