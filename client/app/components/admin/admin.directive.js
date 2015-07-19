import './admin.styl';
import {AdminController as controller} from './admin.controller';
import template from './admin.html';
export const adminDirective = ()=> {
  return {
    controller,
    template,
    controllerAs: 'vm',
    scope: {},
    replace: true,
    restrict: 'E'
  }
};
