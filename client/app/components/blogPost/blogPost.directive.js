import './blogPost.styl';
import template from './blogPost.html';
import {BlogPostController as controller} from './blogPost.controller';

const blogPostDirective = () => {
  return {
    template,
    controller,
    controllerAs: 'vm',
    // using resolve, we pass in
    // the post for this component
    scope: {
      post: '='
    },
    restrict: 'E',
    replace: true
  };
};
