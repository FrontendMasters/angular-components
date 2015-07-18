// TODO: expose textbox directive to be imported directive
import './textbox.styl';
import template from './textbox.html';

export const textboxDirective = () => {
  return {
    template,
    restrict: 'E',
    replace: true,
    scope: {
      bindTo: '='
    },
    link($scope, element, attr) {
      $scope.label = attr.label || '';
      $scope.type = attr.type || 'text';
      $scope.bindTo = $scope.bindTo || '';
    }
  };
};
