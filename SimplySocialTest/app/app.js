var App = angular.module('App', [
	"ui.router",
	"App.directives",
	"App.home",
	"App.settings"
])
.config(function($stateProvider, $urlRouterProvider){
      
     $urlRouterProvider.otherwise("/home")

}).run(function($rootScope) {

	$rootScope.overlay = false;

    $rootScope.showHideOverlay = function () {
    	if($rootScope.overlay==false){
    		$rootScope.overlay = true;
    	}
    	else if($rootScope.overlay==true){
    		$rootScope.overlay = false;
    	}
    }

});