import {blogDirective} from './blog.directive';
import angular from 'angular';

export const blog = angular.module('blog', [])
  .config(function($stateProvider) {
    $stateProvider.state('blog', {
      url: '/blog',
      template: '<blog></blog>'
    });
  })
  .directive('blog', blogDirective);
