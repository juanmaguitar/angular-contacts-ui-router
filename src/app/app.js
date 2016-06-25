// Styles
import 'bootstrap/dist/css/bootstrap.css';
import '../css/styles.scss';

import angular from 'angular';
import ngUiRoute from 'angular-ui-router';
import ngAnimate from 'angular-animate';

import home from './home';
import about from './about';
import contacts from './contacts';

import initApp from 'app.init.js';
import routing from 'routing.js';

angular.module('uiRouterSample', [ home, about, contacts, ngUiRoute, ngAnimate ])
	.run( initApp )
	.config( routing );
