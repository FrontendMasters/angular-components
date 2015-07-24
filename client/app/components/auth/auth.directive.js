import './auth.styl';
import {AuthController as controller} from './auth.controller';
import template from './auth.html';

export const authDirective = ()=> {
  return {
    controller,
    template,
    controllerAs: 'vm',
    scope: {},
    replace: true,
    restrict: 'E'
  }
};
