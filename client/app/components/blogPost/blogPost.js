import {blogPostDirective} from './blogPost.directive';
import angular from 'angular';
import uiRouter from 'angular-ui-router';


export const blog = angular.module('blog', [uiRouter, ngAnimate])
  .config(function($stateProvider) {
    $stateProvider.state('blog', {
      url: '/blog/:title',
      template: '<blog-post></blog-post>'
    });
  })
  .directive('blogPost', blogPostDirective)
