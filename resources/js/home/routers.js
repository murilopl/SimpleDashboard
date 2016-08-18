(function() {
	'use strict';
	angular
		.module('home.routers', [])
    .config(function ($stateProvider, $urlRouterProvider) {

      $urlRouterProvider.otherwise('/home/login');

      $stateProvider
        .state('home', {
          abstract: true,
          url: '/home',
          templateUrl: './resources/views/home/base.html',
					controller: 'HomeController'
        })
          .state('login', {
            url: '/login',
            parent: 'home',
            templateUrl: './resources/views/home/login.html',
            controller: 'LoginController'
          })


    });

})();
