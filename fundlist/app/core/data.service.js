(function() {
    'use strict';

    angular
        .module('app.core')
        .factory('dataservice', dataservice);

    dataservice.$inject = ['$http', 'apiConfig'];

    function dataservice($http, apiConfig) {

        var service = {
            getFunds: getFunds,
            getChart: getChart

        };

        return service;


        function getFunds() {
            return $http.get(
                apiConfig.getFundsURL()
            )
        }

        function getChart() {
            return $http.get(
                apiConfig.getChartURL()
            )
        }

    }
})();