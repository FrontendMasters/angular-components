/*
 * TODO: import angular and other dependencies
 * like our app.styl and normalize.css and components/home
 * ui-router
 * so the below code works
 */
import 'normalize.css';
import './app.styl';
import angular from 'angular';
import uiRouter from 'angular-ui-router';
import ngAnimate from 'angular-animate';
import {home} from './components/home/home';

angular.module('app', [
  // TODO: register other modules here.
  // remember, this array takes strings
  // not objects
  uiRouter, ngAnimate, home.name
]);
