'use strict';

angular
  .module('SimpleDashboard', [
    'ngAnimate',
    'ngTouch',
    'ngStorage',
    'ui.router',
    'ui.bootstrap',
    'ui.utils.masks',
    'toaster',
    'angular-loading-bar',
    'home.controllers',
    'home.services',
    'home.routers',
    'user.services',
    'user.controllers',
    'user.routers'
  ]);
