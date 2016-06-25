import ContactsController from './ContactsController.js';
import template from './contacts.html';
import getListContacts from './getListContacts.js';
const url = '/contacts';

function routing ($stateProvider) {

     $stateProvider
        .state('contacts', {
          abstract: true,
          url, template,
          resolve: {
            contactsList: getListContacts
          },
          controller: ContactsController,
          controllerAs: '$ctrl'
        })

}

routing.$inject = ['$stateProvider'];

export default routing;


