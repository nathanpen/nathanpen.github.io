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
