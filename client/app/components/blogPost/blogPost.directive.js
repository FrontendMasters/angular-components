import './blogPost.styl';
import template from './blogPost.html';
import {BlogPostController as controller} from './blogPost.controller';

export const blogPostDirective = () => {
  return {
    template,
    controller,
    controllerAs: 'vm',
    scope: {
      post: '='
    },
    bindToController: true,
    restrict: 'E',
    replace: true
  };
};
