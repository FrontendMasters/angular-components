import {blogPostDirective} from './blogPost.directive';
import angular from 'angular';
import uiRouter from 'angular-ui-router';

export const blogPost = angular.module('blogPost', [uiRouter])
  .config(function($stateProvider) {
    $stateProvider.state('blogPost', {
      url: '/blog/:title',
      // setup attr to accept post from controller
      template: '<blog-post post="post"></blog-post>',
      // one off controller for resolving
      controller: function($scope, post) {
        // bind to scope to pass into component
        $scope.post = post;
      },

      resolve: {
        post: function(Posts, $stateParams) {
          // get the cpost based on title
          // in url
          let {title} = $stateParams;
          title = title.replace(/\-+/g, ' ');
          return Posts.getOne({title});
        }
      }
    });
  })
  .directive('blogPost', blogPostDirective)
