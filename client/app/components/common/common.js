import angular from 'angular';
import {textboxDirective} from './textbox/textbox.directive';

export const common = angular.module('common', [])
  .directive('textbox', textboxDirective);
