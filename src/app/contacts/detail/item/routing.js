import detailItemTemplate from './contactsDetailItem.tpl.html';
import DetailItemController from './DetailItemController.js';

const hintTemplate = ' This is contacts.detail.item overriding the "hint" ui-view'

function routing ($stateProvider) {

     $stateProvider
        .state('contacts.detail.item', {
        	url : '/item/:itemId',
					views: {
            '': {
              template: detailItemTemplate,
              controller: DetailItemController,
              controllerAs: '$ctrl'
            },
            'hint@': {
              template: hintTemplate
            }
          }
        })

}

routing.$inject = ['$stateProvider'];

export default routing;
