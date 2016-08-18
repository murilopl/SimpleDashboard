(function() {
	'use strict';
	angular
		.module('user.services', [])
		.factory('UserServices', UserServices);

	function UserServices($http, $state) {

		function logout(){
			$state.go('login');
		}

		return {
			logout: logout,
		}
	};

})();
