import detailItemEditTemplate from './contactsDetailItemEdit.tpl.html';
import DetailItemEditController from './DetailItemEditController.js';

function routing ($stateProvider) {

     $stateProvider
        .state('contacts.detail.item.edit', {
        	url : '/item/:itemId',
					views: {
            '@contacts.detail': {
              template: detailItemEditTemplate,
              controller: DetailItemEditController
            }
          }
        })
}

routing.$inject = ['$stateProvider'];

export default routing;
