angular.module('App.directives', [])

/*
.directive('customHeader', function() {
	return {
		template: '<header class="header"></header>'
	};
})
*/
.directive('postPanel', function() {
	return {
		template: '	<section class="post-panel">
						<div class="post-panel-post">
							<div class="post-column-left">
								<img class="post-author-avatar" src="img/avatar.jpg">
							</div>
							<div class="post-column-right">
								<span class="post-author">Sam Soffes</span>
								<p class="post-comment">How to Get Inspired the Right Way - Designmodo</p>
							</div>
						</div>
						<div class="post-colapsable">
							<div class="post-panel-post">
								<div class="post-column-left">
									<img class="post-author-avatar" src="img/avatar.jpg">
								</div>
								<div class="post-column-right">
									<span class="post-author">Sam Soffes</span>
									<p class="post-comment">How to Get Inspired the Right Way - Designmodo</p>
								</div>
							</div>
							<div class="post-panel-post">
								<div class="post-column-left">
									<img class="post-author-avatar" src="img/avatar.jpg">
								</div>
								<div class="post-column-right">
									<span class="post-author">Sam Soffes</span>
									<p class="post-comment">How to Get Inspired the Right Way - Designmodo</p>
								</div>
							</div>
						</div>
						<div class="post-panel-bottom">
							<div class="post-panel-actions">
								<span class="post-reply">Reply</span>
								<span class="post-like">Like</span>
								<span class="post-time">56m</span>
							</div>
						</div>
					</section>
					'
	};
});