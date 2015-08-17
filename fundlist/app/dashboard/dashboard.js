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