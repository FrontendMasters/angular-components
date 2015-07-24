import {authDirective} from './auth.directive';
import angular from 'angular';
import uiRouter from 'angular-ui-router';


export const auth = angular.module('auth', [uiRouter])
  .config(($stateProvider) => {
    $stateProvider.state('auth', {
      url: '/auth',
      template: '<auth></auth>'
    })
  })
  .directive('auth', authDirective);
