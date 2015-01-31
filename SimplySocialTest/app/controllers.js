angular.module('App.home', [])

.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('home', {
      url: "/home",
      templateUrl: "app/views/home.tpl.html",
      controller:"homeCtrl"
    })
   })

.controller('homeCtrl', function($scope, $state) {




});
angular.module('App.settings', [])

.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('settings', {
      url: "/settings",
      templateUrl: "app/views/settings.tpl.html",
      controller:"settingsCtrl"
    })
   })

.controller('settingsCtrl', function($scope, $state) {




});