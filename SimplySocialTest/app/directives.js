angular.module('App.directives', [])


.directive('customHeader', function() {
	return {
		templateUrl: 'app/directives/views/header.tpl.html'
	};
})

.directive('postPanel', function() {
	return {
		templateUrl: 'app/directives/views/postPanel.tpl.html',
		scope:{
			image:"="
		},
		link: function(scope,elem,attr) {

			scope.collapsed = true;

			scope.toggleCollapse = function() {
				if (scope.collapsed==true) {
					scope.collapsed = false;
				}
				else if (scope.collapsed==false) {
					scope.collapsed = true;
				}
			}
			console.log(scope.image);
			scope.hasImage = function() {
				if (typeof scope.image==='undefined') {
					return false;
				}
				else {
					return true;
				}

			}

		}
	};
})

.directive('mainNav', function() {
	return {
		templateUrl: 'app/directives/views/mainNav.tpl.html'
	};
}).directive('footerNav', function() {
	return {
		templateUrl: 'app/directives/views/footerNav.tpl.html'
	};
});