'use strict';

angular
  .module('simpledashboard')
  .run(
    function($rootScope){
      var app = {
        'name':'SimpleDashboard',
        'version':'1.0.0'
      };
      $rootScope.app = app;
    }
  );
