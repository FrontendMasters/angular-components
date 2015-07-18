// TODO: import required modules

const home = angular.module('home', [

])
.config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/');

  $stateProvider.state('home', {
    url: '/',
    templateUrl: '/app/components/home/home.html',
    controller: 'HomeController'
  });
})
.controller('HomeController', function($scope) {
  $scope.title = 'Welcome to the blog!'
  // TODO: be sure to import lodash!
  $scope.items = _.times(5, i => {
    return `I am item ${i}`;
  });
});

// TODO: export the module
