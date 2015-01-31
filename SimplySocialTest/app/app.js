var App = angular.module('App', [
	"ui.router",
	"App.directives",
	"App.home"
])
.config(function($stateProvider, $urlRouterProvider){
      
     $urlRouterProvider.otherwise("/home")

});