import {adminDirective} from './admin.directive';
import angular from 'angular';
import uiRouter from 'angular-ui-router';

export const admin = angular.module('admin', [uiRouter])
  .config(($stateProvider) => {
    $stateProvider.state('admin', {
      url: '/admin',
      template: '<admin></admin>'
    })
  })
  .directive('admin', adminDirective);
