import {api} from './api';
import {posts} from './posts';
import {auth} from './auth';
import ngJwt from 'angular-jwt';
import angular from 'angular';

export const shared = angular.module('shared', [ngJwt])
  .constant('API', api)
  .factory('Posts', posts)
  .factory('Auth', auth)
  .config(($httpProvider, jwtInterceptorProvider) => {
    jwtInterceptorProvider.tokenGetter = () => {
      return localStorage.getItem('ngblog-token');
    };

    $httpProvider.interceptors.push('jwtInterceptor');
  })
  .run(($state, $rootScope, Auth) => {
    $rootScope.$on('$stateChangeStart', (e, toState, ...rest) => {
      if (toState.auth && !Auth.isAuth()) {
        e.preventDefault();
        $state.go('auth');
      }
    });
  });

