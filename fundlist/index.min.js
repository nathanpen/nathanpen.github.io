(function() {
    'use strict';

    angular.module('app.core', [
        'ngLodash',
        'ui.router',
        'ui.bootstrap',
        'angular-loading-bar',
        'chart.js',
        'ngAnimate'
    ])
})();
(function() {
    'use strict';
    angular.module('app.dashboard', [
        'app.core'
    ])
})();
(function() {
    'use strict';

    angular.module('app', [
        'app.core',
        'app.dashboard'

    ]);
})();
(function() {
    'use strict';

    angular
        .module('app.core')
        .constant('apiConfig',apiConfig());

    function apiConfig() {

        var apiConfig = {
            isProduction: true,
            production: {
                serviceEndPointPrefix:'app/api/',
                fundsURL:'funds.json',
                chartURL:'chart.json'
            },
            development:{

            },

            getConfigObject: function () {
                return this.isProduction ? this.production : this.development;
            },
            getServiceEndPointPrefix: function () {
                return this.getConfigObject().serviceEndPointPrefix;
            },
            getFundsURL: function(){
                return this.getServiceEndPointPrefix() + this.getConfigObject().fundsURL;
            },
            getChartURL: function(){
                return this.getServiceEndPointPrefix() + this.getConfigObject().chartURL;
            }
        };
        return apiConfig;
    }

})();

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
(function() {
    'use strict';

    angular
        .module('app.dashboard')
        .controller('dashboard', dashboard);

    dashboard.$inject = ['dataservice'];

    function dashboard(dataservice) {


        var vm = this;

        vm.funds = null;
        vm.getFunds = getFunds;


        activate();

        function activate() {
            vm.getFunds();
        }

        function getFunds(){
            dataservice.getFunds().then(function(funds){
                vm.funds = funds.data.funds;
            })
        }


    }
})();
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
(function() {
    'use strict';

    angular
        .module('app.dashboard')
        .directive('fundPanel', fundPanel);

    fundPanel.$inject = ['dataservice','lodash','$filter'];

    function fundPanel(dataservice,lodash,$filter) {
        var directive = {
            restrict: 'EA',
            templateUrl:'app/dashboard/fund-panel.html',
            scope: {
                fund: '='
            },
            link:function (scope,elem,attr) {


                var getChart = getChart,
                    trimChartData = trimChartData,
                    getChartValues = getChartValues;

                scope.labels= [];
                scope.data = [];

                scope.currentShareClass = scope.fund.shareClasses[0];

                scope.showPerformance = false;
                scope.fundError = false;

                activate();

                function activate(){
                    getChart();
                }


                scope.selectShareClass = function(shareClass){
                    if(shareClass['ISIN Code']=='GB00BGnotvalid') {
                        scope.fundError = true;
                    }
                    else {
                        scope.currentShareClass = shareClass;
                        getChart(shareClass['ISIN Code'],shareClass['Report Date From'],shareClass['Report Date To']);
                        scope.fundError = false;
                    }
                }

                scope.convertToJSDate = function(input){
                    return new Date(input);
                }

                function getChart(ISIN){
                    dataservice.getChart(ISIN).then(function(chartData){
                        trimChartData(chartData.data.chart);
                        scope.showPerformance = true;
                    })
                }

                function trimChartData(chartObject){

                    var xValues = getChartValues(chartObject[0].data,'x');

                    var itemsLength = xValues.length;
                    var startAt = itemsLength - 5;
                    var endAt = itemsLength;

                    var benchmarkYValues = getChartValues(chartObject[1].data,'y');
                    var shareYValues = getChartValues(chartObject[0].data,'y');


                    var unixDates = lodash.slice(xValues,startAt,endAt);

                    var formattedDates = [];
                    lodash.each(unixDates,function(n){
                        formattedDates.push($filter('date')(n,'MMM-yyyy'));
                    });

                    scope.labels = formattedDates;

                    var newData = [];
                    newData.push(lodash.slice(benchmarkYValues,startAt,endAt));
                    newData.push(lodash.slice(shareYValues,startAt,endAt));

                    scope.data = newData;

                }


                function getChartValues(chartObject,axis) {
                    return lodash.pluck(lodash.filter(chartObject,function(n){
                            if(n[axis]<933379200000){
                                return n;
                            }
                        }
                    ), axis);
                }

                scope.isOldDate = function(date){

                    var thisDate = new Date(date);
                    var todaysDate = new Date;
                    var maxDate =  new Date;
                    maxDate.setFullYear((todaysDate.getFullYear())-4);
                    if(thisDate < maxDate){
                        return true
                    }else {return false}
                }

                scope.togglePerformanceContainer = function(){
                    if(scope.showPerformance==true){
                        scope.showPerformance=false;
                    }else if (scope.showPerformance==false){scope.showPerformance=true}
                }


            }
        };

        return directive;
    }

})();