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
})
.directive('messageBox', function() {
	return {
		templateUrl: 'app/directives/views/messageBox.tpl.html'
	};
}).directive('switch', function() {
	return {
		template: '<div class="onoffswitch"><input type="checkbox" name="onoffswitch" class="onoffswitch-checkbox" id="myonoffswitch" checked><label class="onoffswitch-label" for="myonoffswitch"><span class="onoffswitch-inner"></span><span class="onoffswitch-switch"></span></label></div>'
	};
}).directive('radio', function() {
	return {
		template: '<div class="radio"><input type="checkbox" id="radio" class="radio-checkbox" checked><label for="radio"><div class="radio-inner"></div></label></div>'
	}
});




