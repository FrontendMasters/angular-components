import './textbox.styl';
import template from './textbox.html';

const textboxDirective = () => {
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
