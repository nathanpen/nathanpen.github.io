(function() {
    'use strict';

    angular
        .module('app.dashboard')
        .directive('fundFilter', fundFilter);

    fundFilter.$inject = [];

    function fundFilter() {
        var directive = {
            restrict: 'EA',
            templateUrl:'app/dashboard/fund-filter.html',
            scope: {
                fund: '='
            },
            link:function (scope,elem,attr) {

            }
        };

        return directive;
    }

})();