(function() {
	'use strict';
	angular
		.module('user.routers', [])
    .config(function ($stateProvider, $urlRouterProvider) {

			$urlRouterProvider.when('/user/dashboard', '/user/dashboard/meeting/overview');

      $stateProvider
				.state('user', {
					abstract: true,
					url: '/user',
					templateUrl: './resources/views/user/base.html',
					controller: 'UserController'
				})
					.state('dashboard', {
						url: '/dashboard',
						parent: 'user',
						templateUrl: './resources/views/user/dashboard/dashboard.html',
						controller: 'DashboardController'
					})
					.state('overview', {
						url: '/meeting/overview',
						parent: 'dashboard',
						templateUrl: './resources/views/user/dashboard/pages/meeting/overview.html',
						controller: 'OverviewController'
					})
					.state('about', {
						url: '/meeting/about',
						parent: 'dashboard',
						templateUrl: './resources/views/user/dashboard/pages/meeting/about.html',
						controller: 'AboutController'
					})


    });

})();
