'use strict';

angular
  .module('SimpleDashboard')
  .run(
    function($rootScope){
      var app = {
        'name':'SimpleDashboard',
        'version':'1.0.0'
      };
      $rootScope.app = app;
    }
  );
