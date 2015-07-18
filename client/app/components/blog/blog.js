import {blogDirective} from './blog.directive';
import angular from 'angular';
import uiRouter from 'angular-ui-router';
import ngAnimate from 'angular-animate';

export const blog = angular.module('blog', [uiRouter, ngAnimate])
  .config(function($stateProvider) {
    $stateProvider.state('blog', {
      url: '/blog',
      template: '<blog></blog>'
    });
  })
  .directive('blog', blogDirective)
  /*
   * uses ngAnimate and the js animation api
   * along with the new $animateCss
   * to define a google now inspired card
   * animation that will be applied on page load
   * and filtering
   */
  .animation('.slide', ($animateCss)=> {
    return {
      enter(element) {
        return $animateCss(element, {
          addClass: '',
          duration: .6,
          easing: 'cubic-bezier(0.755, 0.05, 0.855, 0.06)',
          stagger: .1,
          from: {
            opacity: 0,
            visibilty: 'visible',
            'transform-origin': 'top left',
            transform: ' translateX(-3rem) translateY(15rem) rotate(15deg)' //'translate3d(0, -100%, 0)'
          },

          to: {
            opacity: 1,
            transform: 'translateY(0) translateX(0)' //'translate3d(0, 0, 0)'
          }
        });
      },

      leave(element) {
        return $animateCss(element, {
          addClass: '',
          duration: .6,
          easing: 'cubic-bezier(0.23, 1, 0.32, 1)',
          from: {
            opacity: 1,
            transform: 'translate3d(0, 0, 0)'
          },

          to: {
            opacity: 0,
            visibilty: 'hidden',
            transform: 'translate3d(0, -100%, 0)'
          }
        });
      }
    }
  });
