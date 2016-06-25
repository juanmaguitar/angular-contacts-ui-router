import ContactsController from './ContactsController.js';
import template from './contacts.html';
import resolveContacts from './contactsResolve.js';
const url = '/contacts';

function routing ($stateProvider) {

     $stateProvider
        .state('contacts', {
          abstract: true,
          url, template,
          resolve: {
            contactsData: resolveContacts
          },
          controller: ContactsController,
          controllerAs: '$ctrl'
        })

}

routing.$inject = ['$stateProvider'];

export default routing;


