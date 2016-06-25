import angular from 'angular';
import ngUiRoute from 'angular-ui-router';
import routing from './routing.js';

angular.module( 'uiRouterSample.home', [ngUiRoute] )
	.config(routing);

export default 'uiRouterSample.home';
