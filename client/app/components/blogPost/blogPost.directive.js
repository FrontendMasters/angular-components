import './blogPost.styl';
import template from './blogPost.html';
import {BlogPostController as controller} from './blogPost.controller';

export const blogPostDirective = () => {
  return {
    template,
    controller,
    controllerAs: 'vm',
    // using resolve, we pass
    scope: {
      post: '='
    },
    bindToController: true,
    restrict: 'E',
    replace: true
  };
};
