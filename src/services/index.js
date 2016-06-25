import angular from 'angular';
import utilsService from './utils.js';
import contactsService from './contacts.js';

angular.module('uiRouterSample.services', [])
	.factory( 'utilsService', utilsService )
	.factory( 'contactsService', contactsService );

export default 'uiRouterSample.services';
