// TODO: define and register the admin component

import angular from 'angular';
import uiRouter from 'angular-ui-router';

const admin = angular.module('admin', [uiRouter])
  .config(($stateProvider) => {
    $stateProvider.state('admin', {
      url: '/admin',
      template: '<admin></admin>'
    })
  });
