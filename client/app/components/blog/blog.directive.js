import './blog.styl';
import template from './blog.html';
import {BlogController as controller} from './blog.controller';

export const blogDirective = () => {
  return {
    template,
    controller,
    controllerAs: 'vm',
    scope: {},
    restrict: 'E',
    replace: true
  };
};
