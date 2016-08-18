(function() {
	'use strict';
	angular
		.module('home.services', [])
		.factory('HomeServices', HomeServices);

	function HomeServices($http, $state) {

		function login(){
			$state.go('dashboard');
		}

		return {
			login: login,
		}
	};

})();
