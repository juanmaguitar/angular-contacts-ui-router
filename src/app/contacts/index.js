import angular from 'angular';
import ngUiRoute from 'angular-ui-router';
import services from '../../services';

import routingContacts from './routing.js';
import routingList from './list/routing.js';
import routingDetail from './detail/routing.js';
import routingDetailItem from './detail/item/routing.js';
import routingDetailItemEdit from './detail/item/edit/routing.js';

angular.module( 'uiRouterSample.contacts', [ngUiRoute, services] )
	.config(routingContacts)
	.config(routingList)
	.config(routingDetail)
	.config(routingDetailItem)
	.config(routingDetailItemEdit);

export default 'uiRouterSample.contacts';
