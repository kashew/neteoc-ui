import angular from 'angular';
import uiRouter from 'angular-ui-router';
import Common from './common/common';
import Components from './components/components';
import AppComponent from './app.component';
import 'normalize.css';
import $ from 'jquery';
import jQuery from 'jquery';

window.$ = $;
window.jQuery = jQuery;

angular.module('app', [
    uiRouter,
    Common,
    Components
  ])
  .config(($compileProvider) => {
    "ngInject";
    $compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|ftp|mailto|file|tel):/);
  })
  .config(($locationProvider) => {
    "ngInject";
    // @see: https://github.com/angular-ui/ui-router/wiki/Frequently-Asked-Questions
    // #how-to-configure-your-server-to-work-with-html5mode
    $locationProvider.html5Mode(false);
  })

  .component('app', AppComponent);
