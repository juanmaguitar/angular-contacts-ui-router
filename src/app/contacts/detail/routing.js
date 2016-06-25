import detailTemplate from './contactsDetail.tpl.html';
import detailController from './DetailController.js';

const hintTemplate = 'This is contacts.detail populating the "hint" ui-view';

import menuTipTemplateProvider from './menuTipTemplateProvider.js';

function routing ($stateProvider) {

     $stateProvider
        .state('contacts.detail', {
        	url : '/{contactId:[0-9]{1,4}}',
					views: {
            '': {
              template: detailTemplate,
              controller: detailController
            },
            'hint@': {
              template: hintTemplate
            },
 						'menuTip': {
              templateProvider: menuTipTemplateProvider
            }
          }
        })

}

routing.$inject = ['$stateProvider'];

export default routing;
